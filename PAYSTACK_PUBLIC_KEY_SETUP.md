# Paystack Public Key Configuration Guide

## Problem
You're seeing the error: **"Paystack public key not configured. Please contact the administrator."**

This means the Paystack public key is not set in the environment variables. Follow these steps to fix it.

---

## Step 1: Get Your Paystack Public Key

1. Log in to [Paystack Dashboard](https://dashboard.paystack.com)
2. Click your **Profile** icon (top-right corner)
3. Select **Settings**
4. Go to **API Keys & Webhooks**
5. Under **API Keys**, you'll see:
   - **Public Key** (starts with `pk_live_` or `pk_test_`)
   - **Secret Key** (starts with `sk_live_` or `sk_test_`)
6. **Copy your Public Key** (you'll need this in the next step)

> **Note:** Use `pk_test_` keys for testing, `pk_live_` keys for production.

---

## Step 2: Add Public Key to Manus Environment Variables

### Option A: Via Manus Management UI (Recommended)

1. Go to your Manus project dashboard
2. Click **Settings** (bottom-left panel)
3. Go to **Secrets** tab
4. Click **Add New Secret**
5. Enter:
   - **Key:** `VITE_PAYSTACK_PUBLIC_KEY`
   - **Value:** `pk_live_your_actual_key_here` (paste your public key from Step 1)
6. Click **Save**
7. The project will automatically redeploy with the new key

### Option B: Via Environment File (For Local Testing)

If you're testing locally, create a `.env` file in the project root:

```
VITE_PAYSTACK_PUBLIC_KEY=pk_live_your_actual_key_here
```

Then restart the dev server:
```bash
npm run dev
```

---

## Step 3: Update the Donate Page Code

The Donate page needs to use the environment variable. Update `/client/src/pages/Donate.tsx`:

**Find this line (around line 4):**
```typescript
const PAYSTACK_KEY = "pk_live_your_paystack_key"; // Replace with actual Paystack public key
```

**Replace it with:**
```typescript
const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "pk_live_your_paystack_key";
```

This will:
- Use the environment variable if it's set
- Fall back to the placeholder if not set (for development)

---

## Step 4: Verify It's Working

1. Go to your website's **Donate** page
2. Click **"Donate via Paystack"** button
3. Select a donation amount
4. You should see the **Paystack payment popup** appear (not the error message)

If you still see the error:
- Double-check that you copied the public key correctly (no extra spaces)
- Make sure the key starts with `pk_live_` or `pk_test_`
- Wait a few minutes for the environment variable to take effect
- Hard refresh your browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

---

## Step 5: Test Payment (Optional)

To test the payment flow without charging real money:

1. Use Paystack's **test public key** (starts with `pk_test_`)
2. Use these test card numbers:
   - **Visa:** `4084084084084081` | Exp: `01/25` | CVV: `123`
   - **Mastercard:** `5531886652142950` | Exp: `01/25` | CVV: `123`
3. Enter any email and name
4. The payment should succeed, and you'll see a confirmation message

---

## Troubleshooting

### Still seeing "public key not configured" error?

**Check 1: Is the environment variable set?**
- Go to Manus Settings → Secrets
- Verify `VITE_PAYSTACK_PUBLIC_KEY` is listed
- Check that the value starts with `pk_live_` or `pk_test_`

**Check 2: Did you restart the project?**
- After adding the secret, the project should auto-redeploy
- If not, manually restart: Settings → General → Restart Project

**Check 3: Is the code updated?**
- Verify line 4 of `/client/src/pages/Donate.tsx` uses `import.meta.env.VITE_PAYSTACK_PUBLIC_KEY`
- If not, update it and save

**Check 4: Browser cache?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or clear browser cookies for your domain

### Payment button not working?

- Verify the public key is correct (copy-paste from Paystack dashboard)
- Check browser console (F12 → Console tab) for error messages
- Make sure you're using a test key for testing, live key for production

### Paystack popup not appearing?

- Check that Paystack script is loading: F12 → Network tab → look for `js.paystack.co`
- Verify no browser extensions are blocking the popup
- Try a different browser

---

## Security Notes

⚠️ **Important:**
- **Public Key** is safe to share (it's used in frontend code)
- **Secret Key** should NEVER be shared or committed to git
- Always use `pk_test_` keys for development/testing
- Switch to `pk_live_` keys only when going to production
- Never hardcode keys in your code — always use environment variables

---

## Next Steps

Once Paystack is working:

1. ✅ Test one-time donations
2. ✅ Test recurring donations (monthly, quarterly, annual)
3. ✅ Set up Paystack webhook listener (see BACKEND_INTEGRATION_GUIDE.md)
4. ✅ Configure Paystack Plans in dashboard (APL_MONTHLY, APL_QUARTERLY, APL_ANNUAL)
5. ✅ Test webhook events are being received

---

## Support

For more help:
- [Paystack Documentation](https://paystack.com/docs)
- [Paystack API Keys Guide](https://paystack.com/docs/getting-started/api-keys/)
- Contact: info@mrblackapl.co.ke
