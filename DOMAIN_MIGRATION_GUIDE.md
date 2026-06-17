# Domain Migration Guide: WordPress → Manus Hosting

## Overview

This guide walks you through migrating your domain **mrblackapl.co.ke** from WordPress hosting to the new Manus-hosted Mr. Black APL website. The process involves updating DNS records to point your domain to Manus servers.

---

## Step 1: Locate Your Domain Registrar

Your domain **mrblackapl.co.ke** is likely registered with one of these providers. Log in to find your DNS settings:

| Registrar | DNS Settings Location | Notes |
|-----------|----------------------|-------|
| **Namecheap** | Domain List → Manage → DNS | Most common for .co.ke domains |
| **GoDaddy** | My Products → Domain Manager | Look for "DNS" or "Nameservers" |
| **Safaricom Domains** | Control Panel → Domain Settings | Kenya-based registrar |
| **Liquid Domains** | Account → Domains → Manage DNS | Popular in East Africa |
| **Google Domains** | Domain Settings → DNS | If registered through Google |

**Action:** Log in to your registrar account and locate the DNS management section.

---

## Step 2: Get Your Manus Nameservers

Once your project is published on Manus, you'll receive nameserver information. For now, use these default Manus nameservers:

```
ns1.manus.cloud
ns2.manus.cloud
ns3.manus.cloud
ns4.manus.cloud
```

**Note:** After publishing your project, check the Management UI (Settings → Domains) for your specific nameserver details.

---

## Step 3: Update DNS Records at Your Registrar

### Option A: Update Nameservers (Recommended)

This is the simplest approach and routes all traffic through Manus.

**For Namecheap:**
1. Go to **Domain List** → Select **mrblackapl.co.ke** → Click **Manage**
2. Click the **Nameservers** tab
3. Select **Custom DNS** from the dropdown
4. Enter the four Manus nameservers listed above
5. Click **Save Changes**
6. Wait 24-48 hours for propagation

**For GoDaddy:**
1. Go to **My Products** → **Domains**
2. Select **mrblackapl.co.ke** → Click **Manage DNS**
3. Under **Nameservers**, click **Change Nameservers**
4. Select **I'll use my own nameservers**
5. Enter the four Manus nameservers
6. Click **Save**

**For Google Domains:**
1. Go to **Domain Settings** → **DNS**
2. Scroll to **Nameservers**
3. Click **Use custom nameservers**
4. Enter the four Manus nameservers
5. Click **Save**

### Option B: Update A Records (If Nameserver Change Isn't Allowed)

If your registrar doesn't allow nameserver changes, update the A records directly:

1. Find the **DNS Records** or **A Records** section in your registrar
2. Locate the existing A record pointing to your old WordPress host
3. Replace the IP address with your Manus server IP (provided in Management UI)
4. Also update the **CNAME** record for `www`:
   - **Name:** www
   - **Value:** mrblackapl.co.ke
5. Save changes

---

## Step 4: Verify DNS Propagation

DNS changes take 24-48 hours to fully propagate globally. Check progress here:

- **DNS Checker:** https://dnschecker.org/ (Enter `mrblackapl.co.ke`)
- **MX Toolbox:** https://mxtoolbox.com/domain/mrblackapl.co.ke
- **Whatsmydns:** https://www.whatsmydns.net/

**Expected Result:** Your domain should resolve to Manus servers and display the new website.

---

## Step 5: Publish Your Manus Project

Once DNS is updated, publish your website:

1. Go to the **Management UI** (right panel)
2. Click the **Publish** button (top-right)
3. Confirm publication
4. Your site will be live at `https://mrblackapl.co.ke`

---

## Step 6: Set Up SSL Certificate

Manus automatically provides free SSL certificates via Let's Encrypt. Your site will be accessible at:

- `https://mrblackapl.co.ke` ✅ (Secure)
- `http://mrblackapl.co.ke` (Redirects to HTTPS)

**No additional action needed** — SSL is automatic.

---

## Step 7: Redirect Old WordPress Site (Optional)

If you want to keep your old WordPress site running temporarily:

1. Add a redirect rule in your old WordPress hosting:
   ```
   Redirect 301 / https://mrblackapl.co.ke/
   ```
2. This tells search engines and visitors to use the new site
3. Remove the redirect after 30 days once all traffic has migrated

---

## Troubleshooting

### Domain Still Shows Old Site After 48 Hours

**Solution:**
- Clear your browser cache (Ctrl+Shift+Delete on Windows, Cmd+Shift+Delete on Mac)
- Try accessing from a different browser or device
- Check DNS propagation at https://dnschecker.org/
- Contact your registrar to confirm nameserver changes were applied

### SSL Certificate Not Working

**Solution:**
- Wait 24 hours for Let's Encrypt to issue the certificate
- Check Management UI (Settings → General) for SSL status
- If still not working, contact Manus support

### Email Not Working After Migration

**Important:** If you use email at your domain (e.g., info@mrblackapl.co.ke), you must:

1. Keep your old email provider's MX records
2. Add MX records to your Manus DNS:
   - **Name:** @ (or blank)
   - **Type:** MX
   - **Value:** Your email provider's MX record (e.g., mail.youremailprovider.com)
   - **Priority:** 10

Contact your email provider for exact MX record details.

---

## Post-Migration Checklist

- [ ] DNS nameservers updated at registrar
- [ ] DNS propagation verified (24-48 hours)
- [ ] Website accessible at `https://mrblackapl.co.ke`
- [ ] SSL certificate active (green lock icon)
- [ ] All pages loading correctly
- [ ] Volunteer forms linking to Google Forms
- [ ] WhatsApp buttons working
- [ ] Donation page functional
- [ ] Email working (if applicable)
- [ ] Old WordPress site redirecting to new site (optional)
- [ ] Google Analytics updated (if using)
- [ ] Search Console updated with new domain

---

## Contact & Support

**If you encounter issues:**

1. **Manus Support:** https://help.manus.im
2. **Your Registrar Support:** Contact your domain registrar's support team
3. **DNS Propagation:** Allow 24-48 hours for full propagation

---

## Additional Resources

| Resource | Purpose |
|----------|---------|
| [Manus Docs](https://docs.manus.im) | Official Manus documentation |
| [DNS Propagation Checker](https://dnschecker.org/) | Verify DNS changes |
| [SSL Certificate Status](https://www.ssllabs.com/ssltest/) | Check SSL security |
| [Google Search Console](https://search.google.com/search-console) | Monitor search performance |

---

**Last Updated:** June 17, 2026  
**Status:** Ready for Domain Migration
