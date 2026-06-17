# Backend Integration Guide: Donor Dashboard & Paystack Webhooks

This guide provides step-by-step instructions for integrating the Donor Dashboard with your backend API and setting up Paystack webhook listeners for recurring donation tracking.

---

## Part 1: Donor Dashboard Backend Integration

### Overview

The Donor Dashboard (`/donor-dashboard`) currently displays **mock data**. To make it functional, you need to:

1. Create a backend API endpoint that returns real donor data
2. Update the frontend to fetch and display real data
3. Implement authentication to ensure donors only see their own data

### Step 1: Backend API Endpoint

Create an API endpoint that returns donor information:

```
GET /api/donors/{donorId}
```

**Response Format:**

```json
{
  "id": "donor_123",
  "name": "Jane Donor",
  "email": "jane@example.com",
  "phone": "+254 712 345 678",
  "joinDate": "2025-06-17",
  "totalDonated": 15000,
  "subscriptionStatus": "active",
  "subscription": {
    "plan": "Monthly",
    "amount": 500,
    "nextChargeDate": "2026-07-17",
    "startDate": "2026-06-17",
    "status": "active",
    "paystackPlanCode": "APL_MONTHLY",
    "paystackCustomerId": "cus_12345",
    "paystackSubscriptionId": "sub_67890"
  },
  "donationHistory": [
    {
      "date": "2026-06-17",
      "amount": 500,
      "type": "Recurring",
      "status": "Successful",
      "reference": "APL-1718632800000",
      "paystackReference": "paystack_ref_12345"
    }
  ],
  "impact": {
    "animalsHelped": 12,
    "surgeries": 3,
    "meals": 180
  }
}
```

### Step 2: Database Schema

Create tables to store donor and donation data:

**Donors Table:**
```sql
CREATE TABLE donors (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_donated DECIMAL(10, 2) DEFAULT 0,
  subscription_status VARCHAR(50) DEFAULT 'inactive',
  paystack_customer_id VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Subscriptions Table:**
```sql
CREATE TABLE subscriptions (
  id VARCHAR(50) PRIMARY KEY,
  donor_id VARCHAR(50) NOT NULL,
  plan VARCHAR(50) NOT NULL, -- 'APL_MONTHLY', 'APL_QUARTERLY', 'APL_ANNUAL'
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'active', -- 'active', 'paused', 'cancelled'
  next_charge_date TIMESTAMP,
  start_date TIMESTAMP,
  paystack_plan_code VARCHAR(100),
  paystack_subscription_id VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (donor_id) REFERENCES donors(id)
);
```

**Donations Table:**
```sql
CREATE TABLE donations (
  id VARCHAR(50) PRIMARY KEY,
  donor_id VARCHAR(50) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  type VARCHAR(50) NOT NULL, -- 'one-time', 'recurring'
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'successful', 'failed'
  reference VARCHAR(100),
  paystack_reference VARCHAR(100),
  donation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (donor_id) REFERENCES donors(id)
);
```

### Step 3: Update Frontend to Fetch Real Data

Replace the mock data in `DonorDashboard.tsx`:

```typescript
import { useEffect, useState } from "react";

export default function DonorDashboard() {
  const [donor, setDonor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonorData = async () => {
      try {
        // Get donor ID from URL or auth context
        const donorId = new URLSearchParams(window.location.search).get("id");
        
        if (!donorId) {
          setError("Donor ID not found. Please log in.");
          return;
        }

        const response = await fetch(`/api/donors/${donorId}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch donor data");
        }

        const data = await response.json();
        setDonor(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDonorData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!donor) return <div>No donor data found</div>;

  // Rest of component uses real donor data
  return (
    // ... existing JSX
  );
}
```

---

## Part 2: Paystack Webhooks Setup

### Overview

Paystack webhooks allow you to automatically track successful recurring charges and update donor records in real-time.

### Step 1: Create Webhook Endpoint

Create a backend endpoint to receive Paystack webhooks:

```
POST /api/webhooks/paystack
```

**Implementation Example (Node.js/Express):**

```javascript
const crypto = require('crypto');
const express = require('express');
const app = express();

// Paystack webhook secret (from Paystack dashboard)
const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET;

// Middleware to verify Paystack signature
const verifyPaystackSignature = (req, res, next) => {
  const hash = crypto
    .createHmac('sha512', PAYSTACK_SECRET)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (hash !== req.headers['x-paystack-signature']) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};

// Webhook endpoint
app.post('/api/webhooks/paystack', verifyPaystackSignature, async (req, res) => {
  const event = req.body;

  try {
    switch (event.event) {
      case 'charge.success':
        await handleChargeSuccess(event.data);
        break;

      case 'subscription.create':
        await handleSubscriptionCreate(event.data);
        break;

      case 'subscription.disable':
        await handleSubscriptionDisable(event.data);
        break;

      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data);
        break;

      default:
        console.log(`Unhandled event: ${event.event}`);
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Handle successful charge
async function handleChargeSuccess(data) {
  const {
    customer,
    amount,
    reference,
    plan,
    subscription,
  } = data;

  // Find or create donor
  let donor = await Donor.findOne({ email: customer.email });
  if (!donor) {
    donor = await Donor.create({
      id: `donor_${customer.id}`,
      name: customer.first_name + ' ' + customer.last_name,
      email: customer.email,
      paystackCustomerId: customer.id,
      totalDonated: amount / 100, // Paystack returns amount in cents
    });
  } else {
    donor.totalDonated += amount / 100;
    await donor.save();
  }

  // Record donation
  await Donation.create({
    id: `donation_${reference}`,
    donorId: donor.id,
    amount: amount / 100,
    type: plan ? 'recurring' : 'one-time',
    status: 'successful',
    reference: reference,
    paystackReference: reference,
  });

  // If recurring, update subscription
  if (subscription) {
    await Subscription.findOneAndUpdate(
      { paystackSubscriptionId: subscription },
      { nextChargeDate: new Date(data.next_payment_date * 1000) }
    );
  }

  console.log(`✓ Charge successful: ${reference} - KES ${amount / 100}`);
}

// Handle subscription creation
async function handleSubscriptionCreate(data) {
  const {
    customer,
    plan,
    subscription,
    next_payment_date,
  } = data;

  let donor = await Donor.findOne({ email: customer.email });
  if (!donor) {
    donor = await Donor.create({
      id: `donor_${customer.id}`,
      name: customer.first_name + ' ' + customer.last_name,
      email: customer.email,
      paystackCustomerId: customer.id,
    });
  }

  // Create subscription record
  await Subscription.create({
    id: `subscription_${subscription}`,
    donorId: donor.id,
    plan: plan.plan_code, // e.g., 'APL_MONTHLY'
    amount: plan.amount / 100,
    status: 'active',
    nextChargeDate: new Date(next_payment_date * 1000),
    startDate: new Date(),
    paystackPlanCode: plan.plan_code,
    paystackSubscriptionId: subscription,
  });

  donor.subscriptionStatus = 'active';
  await donor.save();

  console.log(`✓ Subscription created: ${subscription} - ${plan.plan_code}`);
}

// Handle subscription cancellation
async function handleSubscriptionDisable(data) {
  const { subscription } = data;

  await Subscription.findOneAndUpdate(
    { paystackSubscriptionId: subscription },
    { status: 'cancelled' }
  );

  console.log(`✓ Subscription cancelled: ${subscription}`);
}

// Handle payment failure
async function handlePaymentFailed(data) {
  const { customer, reference } = data;

  await Donation.create({
    id: `donation_${reference}`,
    donorId: `donor_${customer.id}`,
    amount: data.amount / 100,
    type: 'recurring',
    status: 'failed',
    reference: reference,
    paystackReference: reference,
  });

  console.log(`✗ Payment failed: ${reference}`);
}

module.exports = app;
```

### Step 2: Configure Webhook in Paystack Dashboard

1. Log in to [Paystack Dashboard](https://dashboard.paystack.com)
2. Go to **Settings** → **API Keys & Webhooks**
3. Scroll to **Webhooks** section
4. Enter your webhook URL:
   ```
   https://yourdomain.com/api/webhooks/paystack
   ```
5. Select events to listen for:
   - ✅ Charge.success
   - ✅ Subscription.create
   - ✅ Subscription.disable
   - ✅ Invoice.payment_failed
6. Click **Save**

### Step 3: Test Webhook

Use Paystack's webhook test feature:

1. In Paystack Dashboard, go to **Webhooks**
2. Click **Test Webhook** button
3. Select an event type (e.g., `charge.success`)
4. Click **Send Test Webhook**
5. Check your server logs to verify webhook was received

---

## Part 3: Connecting Frontend to Backend

### Update Donate Page

Modify the Paystack payment handler to send donor data to your backend:

```typescript
const handlePaystackPayment = async () => {
  // ... existing code ...

  script.onload = () => {
    const paystackConfig: any = {
      key: PAYSTACK_KEY,
      email: "donor@mrblackapl.co.ke", // Replace with real donor email
      amount: amount * 100,
      currency: "KES",
      ref: `APL-${Date.now()}`,
      onClose: () => {
        setIsProcessing(false);
        alert("Payment window closed.");
      },
      onSuccess: async (response: any) => {
        setIsProcessing(false);

        // Send donation data to backend
        try {
          await fetch('/api/donations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              amount: amount,
              type: donationType,
              interval: donationType === 'recurring' ? recurringType : null,
              paystackReference: response.reference,
              email: "donor@mrblackapl.co.ke",
            }),
          });
        } catch (error) {
          console.error('Failed to record donation:', error);
        }

        alert(`Payment successful! Reference: ${response.reference}`);
      },
    };

    // ... rest of config ...
  };
};
```

---

## Part 4: Security Considerations

### 1. Verify Paystack Signatures

Always verify webhook signatures to ensure requests are from Paystack:

```javascript
const verifyPaystackSignature = (req, res, next) => {
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (hash !== req.headers['x-paystack-signature']) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  next();
};
```

### 2. Use Environment Variables

Store sensitive keys in environment variables:

```bash
PAYSTACK_SECRET=sk_live_your_secret_key
PAYSTACK_PUBLIC_KEY=pk_live_your_public_key
```

### 3. Implement Authentication

Ensure donors can only access their own dashboard:

```typescript
const verifyAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.donorId = decoded.donorId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

app.get('/api/donors/:donorId', verifyAuth, async (req, res) => {
  if (req.donorId !== req.params.donorId) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const donor = await Donor.findById(req.params.donorId);
  res.json(donor);
});
```

---

## Part 5: Testing Checklist

- [ ] Backend API endpoint returns correct donor data
- [ ] Donor Dashboard fetches and displays real data
- [ ] Paystack webhook endpoint receives events
- [ ] Webhook signature verification works
- [ ] Donations are recorded in database
- [ ] Subscriptions are created correctly
- [ ] Recurring charges update next_charge_date
- [ ] Failed payments are logged
- [ ] Donor can view donation history
- [ ] Donor can see subscription status
- [ ] Donor can cancel subscription

---

## Part 6: Troubleshooting

### Webhook not receiving events
- Verify webhook URL is publicly accessible
- Check that webhook URL is correct in Paystack dashboard
- Verify signature verification logic
- Check server logs for errors

### Donations not being recorded
- Verify backend API endpoint is working
- Check that Paystack reference is being passed correctly
- Verify database connection
- Check for SQL errors in logs

### Subscription not updating
- Verify subscription creation webhook is being received
- Check that `paystackSubscriptionId` is being stored correctly
- Verify next_charge_date calculation

---

## Next Steps

1. ✅ Create backend API endpoints
2. ✅ Set up database tables
3. ✅ Implement webhook listener
4. ✅ Configure webhook in Paystack dashboard
5. ✅ Update frontend to fetch real data
6. ✅ Test end-to-end flow
7. ⏳ Add email notifications for recurring donors
8. ⏳ Build admin dashboard to view all donations
9. ⏳ Implement donor retention analytics

For questions or support, refer to:
- [Paystack Documentation](https://paystack.com/docs)
- [Paystack API Reference](https://paystack.com/docs/api)
