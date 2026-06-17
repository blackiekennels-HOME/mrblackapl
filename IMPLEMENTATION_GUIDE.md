# Implementation Guide: Remaining Features

This guide covers three remaining features that require your input or external service setup:

---

## 1. Paystack Integration (Donations)

The Donate page is ready with Paystack UI, but requires your Paystack API keys.

### Setup Steps

1. **Create Paystack Account**
   - Visit https://dashboard.paystack.com/signup
   - Complete registration and KYC verification
   - Verify your business details

2. **Get Your API Keys**
   - Log in to Paystack Dashboard
   - Go to **Settings** → **API Keys & Webhooks**
   - Copy your **Public Key** (starts with `pk_live_`)

3. **Add Public Key to Website**
   - Open `/home/ubuntu/mrblackapl/client/src/pages/Donate.tsx`
   - Find line 8: `const PAYSTACK_KEY = "pk_live_your_paystack_key";`
   - Replace with your actual public key:
     ```javascript
     const PAYSTACK_KEY = "pk_live_YOUR_ACTUAL_KEY_HERE";
     ```
   - Save and redeploy

4. **Test Payment Flow**
   - Use Paystack test keys first (starts with `pk_test_`)
   - Process a test transaction
   - Verify payment appears in Paystack Dashboard

### Paystack Features Already Integrated

✅ **Preset donation amounts** (KES 50, 100, 500, 1000, 5000, 10000)  
✅ **Custom amount input**  
✅ **One-time & recurring options** (Monthly, Quarterly, Annual)  
✅ **Secure payment modal**  
✅ **Success/error handling**  
✅ **M-PESA Paybill instructions** (KES 4157649)

### Webhook Setup (Optional but Recommended)

To receive payment notifications:

1. In Paystack Dashboard, go to **Settings** → **API Keys & Webhooks**
2. Add webhook URL: `https://mrblackapl.co.ke/api/webhooks/paystack`
3. Select events: `charge.success`, `charge.failed`
4. Save

---

## 2. Header News Ticker (Upcoming Events)

Add a scrolling ticker to the header showing upcoming events.

### Implementation

1. **Create Ticker Component**
   - File: `/home/ubuntu/mrblackapl/client/src/components/EventTicker.tsx`
   - Shows next 3 upcoming events
   - Auto-scrolls every 5 seconds
   - Clickable to navigate to Events page

2. **Sample Code**
   ```typescript
   import { useEffect, useState } from "react";
   import { Calendar } from "lucide-react";

   const upcomingEvents = [
     { title: "Adoption Drive — Westlands", date: "March 15, 2027" },
     { title: "Community Clinic — Dandora", date: "March 22, 2027" },
     { title: "Fundraiser Gala — Upper Hill", date: "April 5, 2027" },
   ];

   export default function EventTicker() {
     const [current, setCurrent] = useState(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setCurrent((prev) => (prev + 1) % upcomingEvents.length);
       }, 5000);
       return () => clearInterval(interval);
     }, []);

     return (
       <div className="bg-oklch(0.72 0.18 75) text-oklch(0.08 0 0) py-2 px-4 text-center">
         <div className="flex items-center justify-center gap-2">
           <Calendar size={16} />
           <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}>
             {upcomingEvents[current].title} — {upcomingEvents[current].date}
           </span>
         </div>
       </div>
     );
   }
   ```

3. **Add to Layout**
   - Open `/home/ubuntu/mrblackapl/client/src/components/Layout.tsx`
   - Import EventTicker at top
   - Add `<EventTicker />` above the main navigation

4. **Styling**
   - Use gold background: `oklch(0.72 0.18 75)`
   - Dark text for contrast
   - Smooth fade transitions between events

---

## 3. Blackie Legacy Section (Home Page)

Add a tribute section to the Home page honoring Blackie, the inspiration behind Mr. Black APL.

### Implementation

1. **Create Blackie Section Component**
   - File: `/home/ubuntu/mrblackapl/client/src/components/BlackieHero.tsx`
   - Large hero image of Blackie
   - Emotional story text
   - Call-to-action: "Continue Blackie's Legacy"

2. **Sample Structure**
   ```typescript
   export default function BlackieHero() {
     return (
       <section style={{ background: "oklch(0.08 0 0)" }}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           {/* Image */}
           <div>
             <img 
               src="https://your-blackie-image-url.jpg" 
               alt="Blackie — The inspiration behind Mr. Black APL"
               style={{ borderRadius: "0.5rem" }}
             />
           </div>

           {/* Story */}
           <div>
             <div className="section-label">Our Inspiration</div>
             <div className="gold-line" />
             <h2 style={{ 
               fontFamily: "'Playfair Display', serif", 
               fontWeight: 900, 
               fontSize: "2.2rem", 
               color: "white",
               marginBottom: "1.5rem"
             }}>
               Meet <span style={{ color: "oklch(0.72 0.18 75)" }}>Blackie</span>
             </h2>
             <p style={{ 
               fontFamily: "'Source Sans 3', sans-serif",
               color: "oklch(0.65 0 0)",
               lineHeight: "1.8",
               marginBottom: "1.5rem"
             }}>
               Blackie's story inspired us to start Mr. Black APL. 
               [Add your Blackie story here — 2-3 paragraphs]
             </p>
             <a href="/about">
               <span className="btn-gold">Continue Blackie's Legacy</span>
             </a>
           </div>
         </div>
       </section>
     );
   }
   ```

3. **Add to Home Page**
   - Open `/home/ubuntu/mrblackapl/client/src/pages/Home.tsx`
   - Import BlackieHero component
   - Add section after the hero, before programs section

4. **Image Requirements**
   - High-quality photo of Blackie
   - Minimum 800x600px
   - Upload via `manus-upload-file --webdev blackie-photo.jpg`
   - Use returned URL in component

---

## 4. Google Forms Integration (Volunteer Forms)

All 28 volunteer forms are already linked to real Google Forms. No additional setup needed!

**Current Status:**
- ✅ All forms linked in VolunteerHub.tsx
- ✅ WhatsApp group routing configured
- ✅ Form categories organized (Rescue, Rehabilitation, Adoption, Operations, Funding)

---

## 5. Newsletter Popup

The newsletter popup is **fully functional** and ready to use!

**Features:**
- ✅ Appears after scrolling 60% down the page
- ✅ Exit-intent trigger (mouse leaving viewport)
- ✅ Only shows once per session
- ✅ Email validation
- ✅ Success confirmation
- ✅ Smooth animations

**To Connect to Email Service:**

1. **Option A: Mailchimp (Recommended)**
   - Create account at https://mailchimp.com
   - Get API key from Account Settings
   - Update `/home/ubuntu/mrblackapl/client/src/components/NewsletterPopup.tsx`
   - Replace form submission with API call

2. **Option B: Zapier**
   - Create Zap: Webhook → Google Sheets
   - Capture emails in spreadsheet
   - Set up email automation

3. **Option C: Backend Integration**
   - Upgrade to web-db-user feature
   - Store emails in database
   - Send via SendGrid or similar

---

## 6. SEO & Analytics

**Already Implemented:**
- ✅ Meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Schema markup (Organization, Event, FAQPage)
- ✅ Sitemap.xml
- ✅ robots.txt
- ✅ Mobile-responsive design
- ✅ Fast page load times

**To Enable Google Analytics:**

1. Create Google Analytics account at https://analytics.google.com
2. Get your Measurement ID (starts with `G-`)
3. The site already loads analytics via `VITE_ANALYTICS_ENDPOINT`
4. No additional setup needed — tracking is automatic

---

## Priority Implementation Order

1. **First:** Paystack API keys (enables donations)
2. **Second:** Domain migration (makes site live)
3. **Third:** Header ticker (improves engagement)
4. **Fourth:** Blackie section (emotional connection)
5. **Fifth:** Newsletter email service (grows mailing list)

---

## Quick Reference: File Locations

| Feature | File Path |
|---------|-----------|
| Donate Page | `/home/ubuntu/mrblackapl/client/src/pages/Donate.tsx` |
| Volunteer Hub | `/home/ubuntu/mrblackapl/client/src/pages/VolunteerHub.tsx` |
| Events Page | `/home/ubuntu/mrblackapl/client/src/pages/Events.tsx` |
| Newsletter Popup | `/home/ubuntu/mrblackapl/client/src/components/NewsletterPopup.tsx` |
| Layout | `/home/ubuntu/mrblackapl/client/src/components/Layout.tsx` |
| Home Page | `/home/ubuntu/mrblackapl/client/src/pages/Home.tsx` |
| Global CSS | `/home/ubuntu/mrblackapl/client/src/index.css` |

---

## Support & Next Steps

1. **Paystack Setup Help:** https://paystack.com/docs/
2. **Domain Migration:** See `DOMAIN_MIGRATION_GUIDE.md`
3. **Manus Support:** https://help.manus.im
4. **Questions?** Chat with the team on WhatsApp: +254 794 277 833

---

**Status:** Ready for Implementation  
**Last Updated:** June 17, 2026
