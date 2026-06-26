# Mr. Black APL - Donor Database Template
## Complete System for Donor Management, Tracking & Engagement

---

## OVERVIEW

This donor database template includes:
1. **Donor Master List** - Core donor information
2. **Donation Tracking** - Payment history and amounts
3. **Engagement Log** - Communications and interactions
4. **Donor Segments** - Organization by tier and type
5. **Campaign Tracking** - Specific fundraising initiatives
6. **Reports & Analytics** - Performance metrics
7. **Retention Management** - Churn prevention and renewal

---

## SECTION 1: DONOR MASTER LIST

**Purpose:** Central repository of all donor information

**Fields to Track:**

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Donor ID | Text | Unique identifier | D-001, D-002 |
| Donor Name | Text | Full name or company | John Smith / Equity Bank |
| Donor Type | Dropdown | Corporate / Individual / Foundation / Diaspora | Corporate |
| Tier | Dropdown | Tier 1-6 based on giving level | Tier 1 |
| Contact Person | Text | Primary contact name | Jane Doe |
| Title | Text | Contact's job title | CSR Manager |
| Email | Email | Primary email address | jane@equitybank.co.ke |
| Phone | Phone | Primary phone number | +254 712 345 678 |
| Secondary Email | Email | Alternate contact email | jane.doe@equitybank.co.ke |
| Secondary Phone | Phone | Alternate contact phone | +254 722 345 678 |
| Organization | Text | Company/organization name | Equity Bank Kenya |
| Industry | Dropdown | Sector classification | Banking / Insurance / Tech / Retail / Other |
| Address | Text | Physical address | Nairobi, Kenya |
| Website | URL | Organization website | www.equitybank.co.ke |
| LinkedIn | URL | LinkedIn profile | linkedin.com/in/janedoe |
| Date Added | Date | When donor was added to database | 2026-07-01 |
| Status | Dropdown | Active / Inactive / Prospect / Lapsed | Active |
| Referral Source | Dropdown | How we found them | LinkedIn / Referral / Event / Cold Outreach / Other |
| Notes | Text | Additional information | Met at business forum, interested in animal welfare |

---

## SECTION 2: DONATION TRACKING

**Purpose:** Record all donations and payment history

**Fields to Track:**

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Donation ID | Text | Unique identifier | DON-001, DON-002 |
| Donor ID | Text | Link to donor master list | D-001 |
| Donation Date | Date | Date donation received | 2026-07-15 |
| Amount (KES) | Currency | Donation amount in KES | 500,000 |
| Donation Type | Dropdown | One-time / Monthly / Annual / Project-specific | Monthly |
| Payment Method | Dropdown | Bank Transfer / M-Pesa / PayPal / Cheque / Cash | Bank Transfer |
| Payment Status | Dropdown | Received / Pending / Failed / Cancelled | Received |
| Receipt Number | Text | Tax receipt number | REC-2026-001 |
| Receipt Sent | Checkbox | Whether receipt was sent | Yes |
| Campaign | Dropdown | Associated campaign | Q1 2026 / Rescue Operations / Medical Fund |
| Designated For | Text | Specific use (if restricted) | Animal Medical Fund |
| Notes | Text | Payment details or special conditions | Monthly recurring, auto-debit |

---

## SECTION 3: RECURRING DONATION SETUP

**Purpose:** Track monthly/annual recurring commitments

**Fields to Track:**

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Recurring ID | Text | Unique identifier | REC-001 |
| Donor ID | Text | Link to donor | D-001 |
| Monthly Amount (KES) | Currency | Monthly commitment | 500,000 |
| Start Date | Date | When recurring started | 2026-07-01 |
| End Date | Date | When recurring ends (if applicable) | 2031-06-30 |
| Frequency | Dropdown | Monthly / Quarterly / Annual | Monthly |
| Payment Method | Dropdown | Auto-debit / Manual / Standing order | Auto-debit |
| Bank Details | Text | Bank account for auto-debit | [Encrypted] |
| Status | Dropdown | Active / Paused / Cancelled / Expired | Active |
| Last Payment Date | Date | Most recent payment | 2026-07-15 |
| Next Payment Date | Date | Next scheduled payment | 2026-08-15 |
| Payment Failures | Number | Count of failed payments | 0 |
| Notes | Text | Special conditions or arrangements | 5-year commitment |

---

## SECTION 4: ENGAGEMENT & COMMUNICATION LOG

**Purpose:** Track all interactions with donors

**Fields to Track:**

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Interaction ID | Text | Unique identifier | INT-001 |
| Donor ID | Text | Link to donor | D-001 |
| Date | Date | Date of interaction | 2026-07-15 |
| Type | Dropdown | Email / Phone / Meeting / Event / Social Media | Meeting |
| Subject | Text | Topic of interaction | Quarterly partnership review |
| Notes | Text | Details of conversation | Discussed Q2 impact, very satisfied |
| Outcome | Dropdown | Positive / Neutral / Concern / Action Required | Positive |
| Follow-up Needed | Checkbox | Whether follow-up is required | No |
| Follow-up Date | Date | When to follow up | 2026-10-15 |
| Staff Member | Text | Who conducted interaction | Sarah Johnson |
| Attachments | Text | Documents shared (links) | Q2 Impact Report |

---

## SECTION 5: DONOR SEGMENT CLASSIFICATION

**Purpose:** Organize donors by tier and type for targeted engagement

### Corporate Donors

| Field | Type | Description |
|-------|------|-------------|
| Company Name | Text | Official company name |
| CSR Budget | Currency | Estimated annual CSR budget |
| CSR Contact | Text | CSR department contact |
| CSR Email | Email | CSR department email |
| Decision Timeline | Text | Typical approval timeline |
| Partnership Level | Dropdown | Platinum / Gold / Silver |
| Employee Count | Number | Company size |
| Sustainability Focus | Text | Company's sustainability priorities |

### Individual Donors

| Field | Type | Description |
|-------|------|-------------|
| First Name | Text | First name |
| Last Name | Text | Last name |
| Age Range | Dropdown | 18-25 / 26-35 / 36-50 / 51-65 / 65+ |
| Occupation | Text | Job title/profession |
| Annual Income Range | Dropdown | <1M / 1-5M / 5-10M / 10-20M / 20M+ |
| Pet Owner | Checkbox | Whether they own pets |
| Pet Type | Text | Type of pets (dog, cat, etc.) |
| Motivation | Dropdown | Animal welfare / Community / Tax benefits / Other |
| Preferred Contact | Dropdown | Email / Phone / WhatsApp |

### Diaspora Donors

| Field | Type | Description |
|-------|------|-------------|
| Country | Dropdown | Current country of residence |
| City | Text | Current city |
| Years Abroad | Number | How long living abroad |
| Connection to Kenya | Text | Family/business ties in Kenya |
| Payment Currency | Dropdown | KES / USD / GBP / AUD / CAD |
| Preferred Payment Method | Dropdown | M-Pesa / PayPal / Wise / Bank Transfer |
| Language | Dropdown | English / Swahili / Other |

### Foundation Donors

| Field | Type | Description |
|-------|------|-------------|
| Foundation Name | Text | Official foundation name |
| Grant Program | Text | Specific grant program focus |
| Grant Cycle | Text | Application timeline |
| Max Grant Amount | Currency | Maximum grant size |
| Application Deadline | Date | Next application deadline |
| Grant Officer | Text | Foundation contact person |
| Grant Officer Email | Email | Foundation contact email |
| Previous Grants | Currency | Total received from foundation |

---

## SECTION 6: DONOR COMMUNICATION PREFERENCES

**Purpose:** Respect donor preferences for engagement

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Donor ID | Text | Link to donor | D-001 |
| Email Frequency | Dropdown | Weekly / Monthly / Quarterly / As-needed | Monthly |
| Phone Contact | Checkbox | Permission to call | Yes |
| SMS/WhatsApp | Checkbox | Permission for text updates | Yes |
| Event Invitations | Checkbox | Invite to events | Yes |
| Social Media | Checkbox | Tag/mention on social media | No |
| Newsletter | Checkbox | Include in newsletter | Yes |
| Impact Reports | Checkbox | Send detailed impact reports | Yes |
| Tax Documents | Checkbox | Send tax receipts | Yes |
| Preferred Language | Dropdown | English / Swahili | English |
| Do Not Contact | Checkbox | Respect opt-out | No |
| Last Communication | Date | When last contacted | 2026-07-20 |

---

## SECTION 7: DONOR HISTORY & LIFETIME VALUE

**Purpose:** Track donor relationship history and value

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Donor ID | Text | Link to donor | D-001 |
| First Donation Date | Date | When first donation received | 2026-07-01 |
| Total Donations (KES) | Currency | Sum of all donations | 2,000,000 |
| Number of Donations | Number | Count of all donations | 4 |
| Average Donation | Currency | Average donation amount | 500,000 |
| Largest Donation | Currency | Largest single donation | 1,000,000 |
| Last Donation Date | Date | Most recent donation | 2026-10-15 |
| Days Since Last Donation | Number | Days between last donation and today | 45 |
| Lifetime Value (5-year) | Currency | Projected 5-year value | 30,000,000 |
| Retention Status | Dropdown | Retained / At-risk / Lapsed / Reactivated | Retained |
| Churn Risk | Dropdown | Low / Medium / High | Low |
| Upgrade Potential | Dropdown | Low / Medium / High | Medium |
| Next Renewal Date | Date | When to renew commitment | 2027-07-01 |

---

## SECTION 8: CAMPAIGN TRACKING

**Purpose:** Link donors to specific fundraising campaigns

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Campaign ID | Text | Unique campaign identifier | CAMP-Q1-2026 |
| Campaign Name | Text | Campaign name | Q1 2026 Rescue Operations |
| Campaign Period | Date Range | Campaign start and end dates | 2026-07-01 to 2026-09-30 |
| Campaign Goal (KES) | Currency | Target fundraising amount | 10,000,000 |
| Campaign Raised (KES) | Currency | Amount raised to date | 8,500,000 |
| Donor ID | Text | Link to donor | D-001 |
| Donation Amount | Currency | Amount donated to campaign | 500,000 |
| Campaign Channel | Dropdown | Corporate / Individual / Diaspora / Foundation | Corporate |
| Campaign Status | Dropdown | Active / Completed / On-hold | Completed |

---

## SECTION 9: DONOR RATINGS & SCORING

**Purpose:** Prioritize donors by engagement and value

| Field | Type | Description | Scoring |
|-------|------|-------------|---------|
| Donor ID | Text | Link to donor | D-001 |
| Giving Capacity | Number | 1-10 scale | 9 |
| Engagement Level | Number | 1-10 scale | 8 |
| Loyalty Score | Number | 1-10 scale | 9 |
| Relationship Strength | Number | 1-10 scale | 8 |
| **Overall Score** | **Number** | **Average of above** | **8.5** |
| Priority Level | Dropdown | VIP / High / Medium / Low | VIP |
| Stewardship Level | Dropdown | Intensive / Regular / Minimal | Intensive |

**Scoring Guide:**
- **9-10:** VIP - Highest priority, intensive stewardship
- **7-8:** High - Regular engagement, strong relationship
- **5-6:** Medium - Standard engagement, stable relationship
- **3-4:** Low - Minimal engagement, needs cultivation
- **1-2:** At-risk - Lapsed or inactive, needs reactivation

---

## SECTION 10: DONOR STEWARDSHIP PLAN

**Purpose:** Customize engagement strategy for each donor

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Donor ID | Text | Link to donor | D-001 |
| Stewardship Level | Dropdown | VIP / High / Medium / Low | VIP |
| Primary Steward | Text | Staff member responsible | Sarah Johnson |
| Contact Frequency | Dropdown | Monthly / Quarterly / Bi-annual | Monthly |
| Communication Channels | Checkboxes | Email / Phone / In-person / Social media | Email, Phone, In-person |
| Annual Touchpoints | Number | Planned interactions per year | 12 |
| Event Invitations | Number | Events to invite to annually | 4 |
| Recognition Level | Dropdown | Public / Private / None | Public |
| Customized Reports | Checkbox | Personalized impact reports | Yes |
| Executive Briefings | Checkbox | One-on-one meetings | Yes |
| Volunteer Opportunities | Checkbox | Invite to volunteer | Yes |
| Next Review Date | Date | When to review stewardship plan | 2027-01-01 |

---

## SECTION 11: MONTHLY REPORTING DASHBOARD

**Purpose:** Track key metrics and performance

### Key Metrics to Track

| Metric | Formula | Target | Current |
|--------|---------|--------|---------|
| Total Active Donors | Count of donors with status = "Active" | 91 | 45 |
| Monthly Revenue (KES) | Sum of donations in current month | 3,000,000 | 1,800,000 |
| Average Donation | Total donations / Number of donations | 30,000 | 40,000 |
| Donor Retention Rate | (Donors retained / Previous month donors) × 100 | 95% | 92% |
| New Donors This Month | Count of new donors added | 10 | 8 |
| Lapsed Donors | Count of donors with no donation in 90 days | <5 | 3 |
| Recurring Donors | Count of active recurring donations | 40 | 25 |
| Monthly Recurring Revenue | Sum of all monthly commitments | 2,500,000 | 1,500,000 |
| Donor Acquisition Cost | Total fundraising spend / New donors | <50,000 | 45,000 |
| Lifetime Value | Average donation × Average donor lifespan | 1,500,000 | 1,200,000 |

---

## SECTION 12: DONOR COMMUNICATION TEMPLATES

### Monthly Engagement Email Template

```
Subject: [Month] Impact Update - Mr. Black APL

Dear [Donor Name],

Thank you for your generous support of Mr. Black APL. We wanted to share 
this month's impact:

🐾 ANIMALS SAVED: [Number]
🏥 ANIMALS REHABILITATED: [Number]
❤️ ANIMALS REHOMED: [Number]
👥 VOLUNTEERS ACTIVE: [Number]

STORY OF THE MONTH:
[Brief story about specific animal/rescue]

YOUR IMPACT:
Your [Amount] donation this month helped us:
- Feed [X] animals for a week
- Provide medical care to [X] animals
- Support [X] rescue operations

NEXT STEPS:
We're working on [upcoming initiative]. Your continued support makes this possible.

Thank you for being part of our mission!

Best regards,
[Founder Name]
Mr. Black Animal Protection League
```

### Quarterly Stewardship Report Template

```
Subject: Q[Quarter] 2026 Impact Report - Mr. Black APL

Dear [Donor Name],

As a valued partner of Mr. Black APL, we're excited to share our Q[Quarter] 
results:

QUARTERLY METRICS:
- Animals Saved: [Number]
- Animals Rehabilitated: [Number]
- Animals Rehomed: [Number]
- Volunteers Recruited: [Number]
- Total Donations: [Amount]

DONOR IMPACT:
Your cumulative support of [Total Amount] has enabled:
- [Specific achievement 1]
- [Specific achievement 2]
- [Specific achievement 3]

UPCOMING INITIATIVES:
[Describe next quarter plans]

RECOGNITION:
We'd like to recognize your partnership in our [Annual Report / Website / Event].

Would you be available for a brief call to discuss Q[Next Quarter] plans?

Best regards,
[Founder Name]
Mr. Black Animal Protection League
```

---

## SECTION 13: DONOR RETENTION CHECKLIST

**Purpose:** Prevent donor churn and maintain relationships

### Monthly Tasks
- [ ] Send impact email to all donors
- [ ] Call 5 major donors (Tier 1-2)
- [ ] Respond to donor inquiries within 24 hours
- [ ] Update donation tracking
- [ ] Flag any failed recurring payments
- [ ] Review at-risk donors

### Quarterly Tasks
- [ ] Send detailed impact report
- [ ] Host donor appreciation event
- [ ] One-on-one meetings with VIP donors
- [ ] Review donor satisfaction
- [ ] Identify upgrade opportunities
- [ ] Plan next quarter engagement

### Annual Tasks
- [ ] Host annual gala
- [ ] Conduct donor survey
- [ ] Renew recurring commitments
- [ ] Send tax receipts
- [ ] Plan next year stewardship
- [ ] Analyze donor trends

---

## SECTION 14: IMPLEMENTATION GUIDE

### Step 1: Choose Your Platform
**Options:**
1. **Google Sheets** (Free, easy to start)
2. **Excel** (Desktop, more powerful)
3. **Airtable** (Free tier available, more features)
4. **Salesforce** (Professional CRM, paid)
5. **Donorbox** (Donation-focused, integrated)

### Step 2: Set Up Database Structure
- Create separate sheets for each section
- Use consistent naming conventions
- Set up data validation dropdowns
- Create lookup formulas for relationships

### Step 3: Populate Initial Data
- Import existing donor information
- Add contact details
- Record donation history
- Set up recurring donations

### Step 4: Create Dashboards
- Monthly metrics dashboard
- Donor pipeline view
- Campaign performance
- Revenue tracking

### Step 5: Automate Workflows
- Set up email reminders for follow-ups
- Create payment failure alerts
- Generate monthly reports
- Track communication history

### Step 6: Train Team
- Document all processes
- Create user guides
- Establish data entry standards
- Schedule regular training

---

## SECTION 15: DATA SECURITY & PRIVACY

### Best Practices
1. **Encryption:** Encrypt sensitive data (bank details, payment info)
2. **Access Control:** Limit access to authorized staff only
3. **Backups:** Daily backups to secure cloud storage
4. **GDPR Compliance:** Respect donor privacy preferences
5. **Data Retention:** Delete inactive donor data after 7 years
6. **Audit Trail:** Log all data changes and access

### Donor Privacy Policy
- Never share donor information without permission
- Respect opt-out requests immediately
- Provide transparent data usage information
- Allow donors to access their own data
- Secure all payment information

---

## QUICK START: GOOGLE SHEETS TEMPLATE

### Create These Sheets:
1. **Donor Master List** - All donor info
2. **Donations** - Payment history
3. **Recurring** - Monthly commitments
4. **Engagement Log** - Communication history
5. **Dashboard** - Key metrics
6. **Campaigns** - Fundraising initiatives
7. **Reports** - Monthly/quarterly reports

### Essential Formulas:
```
Total Donations: =SUMIF(Donations!D:D, Donor_ID)
Last Donation: =MAXIFS(Donations!A:A, Donations!B:B, Donor_ID)
Days Since Donation: =TODAY()-[Last Donation Date]
Lifetime Value: =SUMIF(Donations!B:B, Donor_ID, Donations!D:D)
Monthly Revenue: =SUMIFS(Donations!D:D, Donations!A:A, ">="&DATE(2026,7,1))
Donor Count: =COUNTA(FILTER('Donor Master'!A:A, 'Donor Master'!N:N="Active"))
```

---

## CONCLUSION

This donor database template provides a complete system for:
✅ Tracking all donor information
✅ Recording donation history
✅ Managing communications
✅ Measuring performance
✅ Planning stewardship
✅ Preventing churn
✅ Generating reports

**Start with the essentials** (Master List, Donations, Engagement Log) and expand as your donor base grows.

**Next Steps:**
1. Choose your platform (recommend Google Sheets for start)
2. Set up the core sheets
3. Import existing donor data
4. Create monthly reporting dashboard
5. Train team on data entry standards

