# Mr. Black APL - Google Sheets Donor Database Setup Guide
## Step-by-Step Instructions for Free, Easy Donor Management

---

## OVERVIEW

This guide walks you through creating a professional donor database in Google Sheets (completely free).

**Why Google Sheets?**
- ✅ Free (no software costs)
- ✅ Cloud-based (access anywhere)
- ✅ Shareable (team collaboration)
- ✅ Automatic backups
- ✅ Easy to learn
- ✅ Integrates with Google Forms

---

## STEP 1: CREATE THE SPREADSHEET

### Create New Spreadsheet
1. Go to **Google Sheets** (sheets.google.com)
2. Click **"+ Create"** → **"Blank spreadsheet"**
3. Name it: **"Mr. Black APL - Donor Database 2026"**
4. Share with team (click Share button)

---

## STEP 2: CREATE SHEET TABS

Create these sheets by clicking the **"+"** button at the bottom:

1. **Donor Master List** - All donor information
2. **Donations** - Payment history
3. **Recurring Donations** - Monthly commitments
4. **Engagement Log** - Communications
5. **Dashboard** - Key metrics
6. **Campaigns** - Fundraising initiatives
7. **Reports** - Monthly summaries

---

## STEP 3: DONOR MASTER LIST SHEET

### Column Headers (A-P)

```
A: Donor ID
B: Donor Name
C: Donor Type (Corporate/Individual/Foundation/Diaspora)
D: Tier (1-6)
E: Contact Person
F: Title
G: Email
H: Phone
I: Organization
J: Industry
K: Address
L: Date Added
M: Status (Active/Inactive/Prospect/Lapsed)
N: Referral Source
O: Notes
P: Last Contact Date
```

### Data Validation Setup

**For Column C (Donor Type):**
1. Select column C (click on column header)
2. Go to **Data** → **Data validation**
3. Choose **List of items**
4. Enter: `Corporate, Individual, Foundation, Diaspora`
5. Click **Save**

**For Column D (Tier):**
1. Select column D
2. Go to **Data** → **Data validation**
3. Choose **List of items**
4. Enter: `Tier 1, Tier 2, Tier 3, Tier 4, Tier 5, Tier 6`
5. Click **Save**

**For Column M (Status):**
1. Select column M
2. Go to **Data** → **Data validation**
3. Choose **List of items**
4. Enter: `Active, Inactive, Prospect, Lapsed`
5. Click **Save**

### Sample Data Entry

| Donor ID | Donor Name | Donor Type | Tier | Contact Person | Email | Phone | Organization | Status |
|----------|-----------|-----------|------|----------------|-------|-------|--------------|--------|
| D-001 | Equity Bank | Corporate | Tier 1 | Jane Doe | jane@equitybank.co.ke | +254712345678 | Equity Bank Kenya | Active |
| D-002 | John Smith | Individual | Tier 3 | John Smith | john@email.com | +254722345678 | Self | Active |
| D-003 | Sarah Johnson | Diaspora | Tier 4 | Sarah Johnson | sarah@gmail.com | +1-555-123-4567 | Self | Prospect |

---

## STEP 4: DONATIONS SHEET

### Column Headers (A-J)

```
A: Donation ID
B: Donor ID (links to Master List)
C: Donation Date
D: Amount (KES)
E: Donation Type (One-time/Monthly/Annual)
F: Payment Method (Bank Transfer/M-Pesa/PayPal/Cheque/Cash)
G: Payment Status (Received/Pending/Failed)
H: Receipt Number
I: Campaign
J: Notes
```

### Sample Data Entry

| Donation ID | Donor ID | Donation Date | Amount (KES) | Donation Type | Payment Method | Payment Status |
|-------------|----------|---------------|--------------|---------------|----------------|----------------|
| DON-001 | D-001 | 2026-07-01 | 500,000 | Monthly | Bank Transfer | Received |
| DON-002 | D-002 | 2026-07-05 | 50,000 | One-time | M-Pesa | Received |
| DON-003 | D-003 | 2026-07-10 | 25,000 | Monthly | PayPal | Received |

---

## STEP 5: RECURRING DONATIONS SHEET

### Column Headers (A-I)

```
A: Recurring ID
B: Donor ID
C: Monthly Amount (KES)
D: Start Date
E: End Date
F: Frequency (Monthly/Quarterly/Annual)
G: Status (Active/Paused/Cancelled)
H: Last Payment Date
I: Next Payment Date
```

### Sample Data Entry

| Recurring ID | Donor ID | Monthly Amount | Start Date | End Date | Frequency | Status | Last Payment | Next Payment |
|-------------|----------|----------------|-----------|----------|-----------|--------|--------------|--------------|
| REC-001 | D-001 | 500,000 | 2026-07-01 | 2031-06-30 | Monthly | Active | 2026-10-15 | 2026-11-15 |
| REC-002 | D-002 | 50,000 | 2026-07-05 | 2026-12-31 | Monthly | Active | 2026-10-10 | 2026-11-10 |

---

## STEP 6: ENGAGEMENT LOG SHEET

### Column Headers (A-H)

```
A: Interaction ID
B: Donor ID
C: Date
D: Type (Email/Phone/Meeting/Event/Social Media)
E: Subject
F: Notes
G: Outcome (Positive/Neutral/Concern)
H: Follow-up Date
```

### Sample Data Entry

| Interaction ID | Donor ID | Date | Type | Subject | Notes | Outcome | Follow-up Date |
|---------------|----------|------|------|---------|-------|---------|----------------|
| INT-001 | D-001 | 2026-07-15 | Meeting | Quarterly Review | Very satisfied with impact | Positive | 2026-10-15 |
| INT-002 | D-002 | 2026-07-20 | Email | Monthly Update | Sent impact report | Positive | 2026-08-20 |

---

## STEP 7: DASHBOARD SHEET

### Key Metrics to Display

Create a summary dashboard with these metrics:

```
DONOR METRICS
Total Active Donors: [Formula]
New Donors This Month: [Formula]
Lapsed Donors: [Formula]

REVENUE METRICS
Monthly Revenue (Current): [Formula]
Monthly Recurring Revenue: [Formula]
Total Donations (All Time): [Formula]
Average Donation: [Formula]

DONOR BREAKDOWN
Corporate Donors: [Formula]
Individual Donors: [Formula]
Diaspora Donors: [Formula]
Foundation Donors: [Formula]

PERFORMANCE
Donor Retention Rate: [Formula]
Donor Acquisition Cost: [Formula]
Months to Goal: [Formula]
```

---

## STEP 8: FORMULAS FOR DASHBOARD

### Total Active Donors
```
=COUNTIF('Donor Master List'!M:M,"Active")
```

### New Donors This Month
```
=COUNTIFS('Donor Master List'!L:L,">="&DATE(2026,7,1),'Donor Master List'!L:L,"<="&DATE(2026,7,31))
```

### Monthly Revenue (Current Month)
```
=SUMIFS(Donations!D:D,Donations!C:C,">="&DATE(2026,7,1),Donations!C:C,"<="&DATE(2026,7,31))
```

### Monthly Recurring Revenue
```
=SUMIF('Recurring Donations'!G:G,"Active",'Recurring Donations'!C:C)
```

### Total Donations (All Time)
```
=SUM(Donations!D:D)
```

### Average Donation
```
=AVERAGE(Donations!D:D)
```

### Corporate Donors
```
=COUNTIF('Donor Master List'!C:C,"Corporate")
```

### Individual Donors
```
=COUNTIF('Donor Master List'!C:C,"Individual")
```

### Diaspora Donors
```
=COUNTIF('Donor Master List'!C:C,"Diaspora")
```

### Donor Retention Rate
```
=(COUNTIF('Donor Master List'!M:M,"Active")/COUNTA('Donor Master List'!B:B)-COUNTIF('Donor Master List'!M:M,"Prospect"))*100
```

---

## STEP 9: CAMPAIGNS SHEET

### Column Headers (A-H)

```
A: Campaign ID
B: Campaign Name
C: Start Date
D: End Date
E: Campaign Goal (KES)
F: Amount Raised (KES)
G: Number of Donors
H: Status (Active/Completed/On-hold)
```

### Sample Data Entry

| Campaign ID | Campaign Name | Start Date | End Date | Goal (KES) | Raised (KES) | Donors | Status |
|------------|--------------|-----------|----------|-----------|-------------|--------|--------|
| CAMP-Q1-2026 | Q1 2026 Rescue Operations | 2026-07-01 | 2026-09-30 | 10,000,000 | 8,500,000 | 25 | Completed |
| CAMP-Q2-2026 | Q2 2026 Medical Fund | 2026-10-01 | 2026-12-31 | 8,000,000 | 0 | 0 | Active |

---

## STEP 10: REPORTS SHEET

### Monthly Report Template

Create a summary for each month:

```
MONTH: July 2026

DONOR METRICS
- Active Donors: [Count]
- New Donors: [Count]
- Lapsed Donors: [Count]
- Total Donors: [Count]

REVENUE METRICS
- Monthly Revenue: [Sum]
- Recurring Revenue: [Sum]
- One-time Donations: [Sum]
- Average Donation: [Average]

DONOR BREAKDOWN
- Corporate: [Count]
- Individual: [Count]
- Diaspora: [Count]
- Foundation: [Count]

TOP DONORS THIS MONTH
1. [Donor Name] - [Amount]
2. [Donor Name] - [Amount]
3. [Donor Name] - [Amount]

ACTIONS TAKEN
- [Action 1]
- [Action 2]
- [Action 3]

NEXT MONTH PRIORITIES
- [Priority 1]
- [Priority 2]
- [Priority 3]
```

---

## STEP 11: CONDITIONAL FORMATTING

### Highlight At-Risk Donors

1. Go to **Donor Master List** sheet
2. Select column M (Status)
3. Go to **Format** → **Conditional formatting**
4. Set rule: **Text is exactly** → **"Lapsed"**
5. Choose red background color
6. Click **Done**

### Highlight Failed Payments

1. Go to **Donations** sheet
2. Select column G (Payment Status)
3. Go to **Format** → **Conditional formatting**
4. Set rule: **Text is exactly** → **"Failed"**
5. Choose orange background color
6. Click **Done**

### Highlight Overdue Follow-ups

1. Go to **Engagement Log** sheet
2. Select column H (Follow-up Date)
3. Go to **Format** → **Conditional formatting**
4. Set rule: **Date is before** → **TODAY()**
5. Choose red background color
6. Click **Done**

---

## STEP 12: MONTHLY MAINTENANCE CHECKLIST

### Week 1 of Each Month
- [ ] Update all donations from previous month
- [ ] Record all new donors
- [ ] Update recurring donation status
- [ ] Generate monthly report
- [ ] Identify at-risk donors

### Week 2 of Each Month
- [ ] Send thank you emails to new donors
- [ ] Call 5 major donors (Tier 1-2)
- [ ] Update engagement log
- [ ] Flag failed recurring payments
- [ ] Plan outreach activities

### Week 3 of Each Month
- [ ] Send monthly impact email to all donors
- [ ] Update dashboard metrics
- [ ] Review campaign performance
- [ ] Plan next month activities
- [ ] Backup database

### Week 4 of Each Month
- [ ] Analyze donor trends
- [ ] Identify upgrade opportunities
- [ ] Plan quarterly stewardship
- [ ] Review retention metrics
- [ ] Update forecasts

---

## STEP 13: SHARING & COLLABORATION

### Share with Team

1. Click **Share** button (top right)
2. Enter team member emails
3. Choose permission level:
   - **Editor** - Can make changes (for core team)
   - **Commenter** - Can add comments (for managers)
   - **Viewer** - Can only view (for reports)
4. Click **Share**

### Create View-Only Reports

1. Create separate sheet with formulas
2. Share with read-only access
3. Update monthly with latest data
4. Send to board/stakeholders

---

## STEP 14: BACKUP & SECURITY

### Automatic Backups
- Google Sheets automatically saves every change
- Access version history: **File** → **Version history** → **See version history**
- Can restore previous versions if needed

### Manual Backups
1. Go to **File** → **Download** → **Microsoft Excel**
2. Save to your computer
3. Do this monthly as backup

### Data Security
- Only share with trusted team members
- Use strong passwords
- Enable 2-factor authentication on Google account
- Never share donor bank details in comments
- Delete old versions after 1 year

---

## STEP 15: INTEGRATION WITH FORMS

### Create Donor Signup Form

1. Go to **Google Forms** (forms.google.com)
2. Create new form
3. Add fields matching Donor Master List
4. Set form to send responses to a new sheet
5. Link responses to your database

### Form Questions
```
1. Full Name (required)
2. Email (required)
3. Phone (required)
4. Organization (if corporate)
5. Donor Type (dropdown: Corporate/Individual/Foundation/Diaspora)
6. How did you hear about us? (dropdown)
7. Monthly commitment (currency)
8. Preferred contact method (dropdown)
9. Communication preferences (checkboxes)
```

### Link Form Responses
1. Create new sheet called "Form Responses"
2. Form automatically sends responses there
3. Manually transfer to Donor Master List
4. Or use Zapier to automate (zapier.com)

---

## STEP 16: SAMPLE DASHBOARD LAYOUT

### Create Professional Dashboard

**Row 1-5: Key Metrics**
```
DONOR METRICS          REVENUE METRICS
Active Donors: 45      Monthly Revenue: 1,800,000 KES
New This Month: 8      Recurring Revenue: 1,200,000 KES
Lapsed: 3              Total All-Time: 5,400,000 KES
Retention Rate: 92%    Average Donation: 40,000 KES
```

**Row 7-12: Donor Breakdown (Pie Chart)**
```
Corporate: 12 (27%)
Individual: 20 (44%)
Diaspora: 10 (22%)
Foundation: 3 (7%)
```

**Row 14-19: Revenue Trend (Line Chart)**
```
July: 1,500,000
August: 1,800,000
September: 2,100,000
October: 2,400,000
```

**Row 21-25: Top Donors**
```
1. Equity Bank - 500,000 KES
2. John Smith - 50,000 KES
3. Sarah Johnson - 25,000 KES
```

### Create Charts

1. Select data (e.g., donor types and counts)
2. Go to **Insert** → **Chart**
3. Choose chart type (Pie, Line, Bar, etc.)
4. Customize title, colors, labels
5. Click **Insert**

---

## STEP 17: MONTHLY REPORTING TEMPLATE

### Email to Send to Board/Stakeholders

```
Subject: Mr. Black APL - July 2026 Donor Report

EXECUTIVE SUMMARY
This month, we received 1,800,000 KES from 25 donors, bringing us 
60% closer to our 3M KES monthly goal.

KEY METRICS
✅ Active Donors: 45
✅ Monthly Revenue: 1,800,000 KES
✅ Recurring Revenue: 1,200,000 KES
✅ New Donors: 8
✅ Donor Retention Rate: 92%

DONOR BREAKDOWN
- Corporate: 12 donors (60% of revenue)
- Individual: 20 donors (25% of revenue)
- Diaspora: 10 donors (12% of revenue)
- Foundation: 3 donors (3% of revenue)

TOP DONORS THIS MONTH
1. Equity Bank - 500,000 KES
2. John Smith - 50,000 KES
3. Sarah Johnson - 25,000 KES

PROGRESS TOWARD GOAL
Current: 1,800,000 KES / 3,000,000 KES (60%)
Needed: 1,200,000 KES more

NEXT MONTH PRIORITIES
1. Secure 2nd Tier 1 corporate donor
2. Acquire 10 new individual donors
3. Launch diaspora campaign
4. Submit 2 foundation grant applications

CONCERNS
- 3 donors at risk of lapsing (no donation in 60+ days)
- 2 recurring payments failed (follow up needed)

ACTIONS TAKEN
- Called 5 major donors
- Sent thank you emails to 8 new donors
- Updated engagement log
- Submitted 2 grant applications
```

---

## QUICK REFERENCE: ESSENTIAL FORMULAS

### Copy-Paste Ready Formulas

**Total Active Donors:**
```
=COUNTIF('Donor Master List'!M:M,"Active")
```

**Monthly Revenue (Replace 7 with current month):**
```
=SUMIFS(Donations!D:D,Donations!C:C,">="&DATE(2026,7,1),Donations!C:C,"<="&DATE(2026,7,31))
```

**Recurring Revenue:**
```
=SUMIF('Recurring Donations'!G:G,"Active",'Recurring Donations'!C:C)
```

**Donor Count by Type:**
```
=COUNTIF('Donor Master List'!C:C,"Corporate")
=COUNTIF('Donor Master List'!C:C,"Individual")
=COUNTIF('Donor Master List'!C:C,"Diaspora")
```

**Days Since Last Donation:**
```
=TODAY()-[Last Donation Date]
```

**Lifetime Value:**
```
=SUMIF(Donations!B:B,[Donor ID],Donations!D:D)
```

---

## TROUBLESHOOTING

### Formula Not Working?
- Check sheet names match exactly (case-sensitive)
- Verify column letters are correct
- Use **Ctrl+Shift+L** to debug formulas
- Check for extra spaces in data

### Data Not Updating?
- Google Sheets auto-saves, but refresh page if needed
- Check internet connection
- Try clearing browser cache

### Can't Find Data?
- Use **Ctrl+F** to search
- Use **Data** → **Create a filter** to filter columns
- Sort by column to find patterns

### Sharing Issues?
- Verify email addresses are correct
- Check permission levels
- Try sharing link instead of email

---

## NEXT STEPS

1. ✅ Create Google Sheets account (free)
2. ✅ Set up all 7 sheets
3. ✅ Add column headers and data validation
4. ✅ Enter sample data
5. ✅ Create dashboard with formulas
6. ✅ Share with team
7. ✅ Set up monthly maintenance routine
8. ✅ Create monthly reports

**Estimated Setup Time:** 2-3 hours

**Monthly Maintenance Time:** 4-5 hours

**Result:** Professional donor management system, completely free!

