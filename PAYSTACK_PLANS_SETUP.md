# Paystack Recurring Donation Plans Setup Guide

This guide walks you through creating the three subscription plans required for the Mr. Black APL recurring donation system.

## Overview

The Donate page supports three recurring donation frequencies:
- **Monthly** (APL_MONTHLY) — charged every 30 days
- **Quarterly** (APL_QUARTERLY) — charged every 90 days
- **Annual** (APL_ANNUAL) — charged every 365 days

Each plan must be created in your Paystack dashboard before recurring donations can be processed.

---

## Step 1: Log in to Paystack Dashboard

1. Go to [https://dashboard.paystack.com](https://dashboard.paystack.com)
2. Log in with your credentials
3. Navigate to **Products** → **Plans** from the left sidebar

---

## Step 2: Create the Monthly Plan (APL_MONTHLY)

1. Click **Create a Plan** button
2. Fill in the following details:

| Field | Value |
|-------|-------|
| **Plan Name** | Mr. Black APL Monthly Donation |
| **Plan Code** | `APL_MONTHLY` |
| **Description** | Monthly recurring donation to support animal rescue operations |
| **Amount** | Leave blank (amount will be set by donor at checkout) |
| **Interval** | Monthly |
| **Duration** | Leave blank (unlimited/ongoing) |

3. Click **Create Plan**
4. Note the Plan Code: `APL_MONTHLY`

---

## Step 3: Create the Quarterly Plan (APL_QUARTERLY)

1. Click **Create a Plan** button
2. Fill in the following details:

| Field | Value |
|-------|-------|
| **Plan Name** | Mr. Black APL Quarterly Donation |
| **Plan Code** | `APL_QUARTERLY` |
| **Description** | Quarterly (4x per year) recurring donation to support animal rescue operations |
| **Amount** | Leave blank |
| **Interval** | Custom (90 days) |
| **Duration** | Leave blank |

3. If Paystack doesn't support 90-day intervals directly, use:
   - **Interval**: Monthly
   - **Duration**: 3 months (this will bill every 3 months)
4. Click **Create Plan**
5. Note the Plan Code: `APL_QUARTERLY`

---

## Step 4: Create the Annual Plan (APL_ANNUAL)

1. Click **Create a Plan** button
2. Fill in the following details:

| Field | Value |
|-------|-------|
| **Plan Name** | Mr. Black APL Annual Donation |
| **Plan Code** | `APL_ANNUAL` |
| **Description** | Annual (once per year) recurring donation to support animal rescue operations |
| **Amount** | Leave blank |
| **Interval** | Annually |
| **Duration** | Leave blank |

3. Click **Create Plan**
4. Note the Plan Code: `APL_ANNUAL`

---

## Step 5: Verify Plans in Dashboard

1. Go to **Products** → **Plans**
2. You should now see three plans:
   - ✅ APL_MONTHLY
   - ✅ APL_QUARTERLY
   - ✅ APL_ANNUAL

---

## Step 6: Configure Your Paystack Public Key

1. Go to **Settings** → **API Keys & Webhooks**
2. Copy your **Public Key** (starts with `pk_live_` or `pk_test_`)
3. In your Mr. Black APL website code (`/client/src/pages/Donate.tsx`), replace:
   ```javascript
   const PAYSTACK_KEY = "pk_live_your_paystack_key";
   ```
   with your actual public key:
   ```javascript
   const PAYSTACK_KEY = "pk_live_abc123xyz...";
   ```

---

## Step 7: Test Recurring Donations (Sandbox Mode)

Before going live, test with Paystack's test keys:

1. In Paystack Dashboard, go to **Settings** → **API Keys & Webhooks**
2. Switch to **Test** mode
3. Copy the **Test Public Key** (starts with `pk_test_`)
4. Update your code with the test key
5. Test the donation flow on your website
6. Use Paystack's test card numbers:
   - **Visa**: 4111 1111 1111 1111
   - **Expiry**: Any future date (e.g., 12/25)
   - **CVV**: Any 3 digits (e.g., 123)

---

## Step 8: Go Live

Once testing is complete:

1. Switch back to **Live** mode in Paystack Dashboard
2. Copy your **Live Public Key** (starts with `pk_live_`)
3. Update your code with the live key
4. Deploy your website
5. Recurring donations are now active!

---

## How It Works

When a donor selects a recurring option on the Donate page:

1. **Frontend**: The donation form sends the plan code (APL_MONTHLY, APL_QUARTERLY, or APL_ANNUAL) to Paystack
2. **Paystack**: Verifies the plan exists and sets up the subscription
3. **Donor**: Completes payment with their card
4. **Automatic Billing**: Paystack automatically charges the donor on the specified interval
5. **Webhooks**: Paystack sends notifications to your backend (optional, for logging/analytics)

---

## Managing Subscriptions

Donors can manage their subscriptions through:

1. **Paystack Customer Portal** (if enabled)
2. **Email from Paystack** with subscription management links
3. **Your Donor Dashboard** (coming soon) — where they can view and cancel subscriptions

---

## Troubleshooting

### "Plan not found" error
- Verify the plan code matches exactly: `APL_MONTHLY`, `APL_QUARTERLY`, `APL_ANNUAL`
- Check that plans are created in the same Paystack account as your public key

### Donations not recurring
- Ensure the plan is set to "Unlimited" duration (not a fixed number of cycles)
- Check that the interval is correctly configured (Monthly, Quarterly, Annual)

### Test mode vs Live mode
- Test mode uses `pk_test_` keys and test cards
- Live mode uses `pk_live_` keys and real cards
- Make sure you're using the correct key for your environment

---

## Next Steps

1. ✅ Create the three plans in Paystack Dashboard
2. ✅ Update your public key in the Donate page
3. ⏳ Set up webhooks for donation notifications (optional)
4. ⏳ Build the Donor Dashboard to show subscription status
5. ⏳ Configure email notifications for recurring donors

For questions or support, contact Paystack: [https://support.paystack.com](https://support.paystack.com)
