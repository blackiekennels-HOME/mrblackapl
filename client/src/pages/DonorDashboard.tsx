import { useEffect, useState } from "react";
import { Heart, Calendar, TrendingUp, Settings, LogOut, Mail, Phone, Download } from "lucide-react";

const WHATSAPP_SUPPORT = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20need%20help%20with%20my%20donor%20account.";

// Mock data - In production, this would come from your backend API
const mockDonorData = {
  name: "Jane Donor",
  email: "jane@example.com",
  phone: "+254 712 345 678",
  joinDate: "2025-06-17",
  totalDonated: 15000,
  subscriptionStatus: "active",
  subscription: {
    plan: "Monthly",
    amount: 500,
    nextChargeDate: "2026-07-17",
    startDate: "2026-06-17",
    status: "active",
  },
  donationHistory: [
    { date: "2026-06-17", amount: 500, type: "Recurring", status: "Successful", reference: "APL-1718632800000" },
    { date: "2026-05-17", amount: 500, type: "Recurring", status: "Successful", reference: "APL-1716040800000" },
    { date: "2026-04-17", amount: 500, type: "Recurring", status: "Successful", reference: "APL-1713448800000" },
  ],
  impact: {
    animalsHelped: 12,
    surgeries: 3,
    meals: 180,
  },
};

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function DonorDashboard() {
  const [donor] = useState(mockDonorData);
  const [activeTab, setActiveTab] = useState<"overview" | "history" | "settings">("overview");

  useScrollReveal();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "oklch(0.55 0.16 160)";
      case "paused":
        return "oklch(0.72 0.18 75)";
      case "cancelled":
        return "oklch(0.58 0.22 27)";
      default:
        return "oklch(0.6 0 0)";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.08 0 0) 0%, oklch(0.1 0 0) 100%)" }} />
        <div className="relative z-10 container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-label">Donor Portal</div>
              <div className="gold-line" />
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", marginTop: "0.5rem" }}>
                Welcome, <span style={{ color: "oklch(0.72 0.18 75)" }}>{donor.name}</span>
              </h1>
            </div>
            <div className="text-right">
              <div style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                Member since {new Date(donor.joinDate).toLocaleDateString()}
              </div>
              <div style={{ fontSize: "1.8rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "oklch(0.72 0.18 75)", marginTop: "0.5rem" }}>
                KES {donor.totalDonated.toLocaleString()}
              </div>
              <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                Total Donated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Status Card */}
      <section className="py-12" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="apl-card p-8 fade-up" style={{ background: "oklch(0.72 0.18 75 / 0.1)", border: "2px solid oklch(0.72 0.18 75 / 0.3)" }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Status */}
              <div>
                <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "0.5rem" }}>
                  Subscription Status
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: getStatusColor(donor.subscription.status) }} />
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", textTransform: "capitalize" }}>
                    {donor.subscription.status}
                  </span>
                </div>
              </div>

              {/* Plan */}
              <div>
                <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "0.5rem" }}>
                  Plan
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", color: "oklch(0.72 0.18 75)" }}>
                  KES {donor.subscription.amount.toLocaleString()}
                </div>
                <div style={{ fontSize: "0.8rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                  {donor.subscription.plan}
                </div>
              </div>

              {/* Next Charge */}
              <div>
                <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "0.5rem" }}>
                  Next Charge
                </div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.95rem" }}>
                  {new Date(donor.subscription.nextChargeDate).toLocaleDateString()}
                </div>
                <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif", marginTop: "0.25rem" }}>
                  <Calendar size={12} style={{ display: "inline", marginRight: "0.25rem" }} />
                  {Math.ceil((new Date(donor.subscription.nextChargeDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days away
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button
                  style={{
                    padding: "0.6rem 1rem",
                    background: "oklch(0.72 0.18 75)",
                    color: "oklch(0.08 0 0)",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Settings size={14} style={{ display: "inline", marginRight: "0.25rem" }} />
                  Manage Plan
                </button>
                <a href={WHATSAPP_SUPPORT} target="_blank" rel="noopener noreferrer">
                  <button
                    style={{
                      width: "100%",
                      padding: "0.6rem 1rem",
                      background: "oklch(0.12 0 0)",
                      color: "white",
                      border: "1px solid oklch(0.2 0 0)",
                      borderRadius: "0.5rem",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "oklch(0.72 0.18 75)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "oklch(0.2 0 0)")}
                  >
                    <Phone size={14} style={{ display: "inline", marginRight: "0.25rem" }} />
                    Support
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Your Impact</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem" }}>
              Lives Changed by <span style={{ color: "oklch(0.72 0.18 75)" }}>Your Support</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🐾", label: "Animals Helped", value: donor.impact.animalsHelped },
              { icon: "🏥", label: "Emergency Surgeries", value: donor.impact.surgeries },
              { icon: "🍖", label: "Meals Provided", value: donor.impact.meals },
            ].map((stat, i) => (
              <div key={i} className="apl-card p-8 text-center fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{stat.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "2rem", color: "oklch(0.72 0.18 75)", marginBottom: "0.5rem" }}>
                  {stat.value}+
                </div>
                <p style={{ fontSize: "0.9rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-12" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="flex gap-4 mb-8 fade-up" style={{ borderBottom: "1px solid oklch(0.2 0 0)", paddingBottom: "1rem" }}>
            {[
              { id: "overview" as const, label: "Overview" },
              { id: "history" as const, label: "Donation History" },
              { id: "settings" as const, label: "Account Settings" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: activeTab === tab.id ? "oklch(0.72 0.18 75)" : "transparent",
                  color: activeTab === tab.id ? "oklch(0.08 0 0)" : "oklch(0.6 0 0)",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Donations */}
                <div className="apl-card p-6">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "white", marginBottom: "1rem" }}>
                    Recent Donations
                  </h3>
                  <div className="space-y-3">
                    {donor.donationHistory.slice(0, 3).map((donation, i) => (
                      <div key={i} className="flex items-center justify-between p-3" style={{ background: "oklch(0.12 0 0)", borderRadius: "0.5rem" }}>
                        <div>
                          <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem" }}>
                            KES {donation.amount.toLocaleString()}
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                            {new Date(donation.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "oklch(0.55 0.16 160)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700 }}>
                          ✓ {donation.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="apl-card p-6">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "white", marginBottom: "1rem" }}>
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "oklch(0.72 0.18 75 / 0.15)",
                        color: "oklch(0.72 0.18 75)",
                        border: "1px solid oklch(0.72 0.18 75 / 0.3)",
                        borderRadius: "0.5rem",
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.72 0.18 75 / 0.25)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.72 0.18 75 / 0.15)")}
                    >
                      <Heart size={14} style={{ display: "inline", marginRight: "0.5rem" }} />
                      Make One-Time Donation
                    </button>
                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "oklch(0.72 0.18 75 / 0.15)",
                        color: "oklch(0.72 0.18 75)",
                        border: "1px solid oklch(0.72 0.18 75 / 0.3)",
                        borderRadius: "0.5rem",
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.72 0.18 75 / 0.25)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.72 0.18 75 / 0.15)")}
                    >
                      <Download size={14} style={{ display: "inline", marginRight: "0.5rem" }} />
                      Download Receipt
                    </button>
                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "oklch(0.72 0.18 75 / 0.15)",
                        color: "oklch(0.72 0.18 75)",
                        border: "1px solid oklch(0.72 0.18 75 / 0.3)",
                        borderRadius: "0.5rem",
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.72 0.18 75 / 0.25)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.72 0.18 75 / 0.15)")}
                    >
                      <Mail size={14} style={{ display: "inline", marginRight: "0.5rem" }} />
                      Update Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === "history" && (
            <div className="fade-up">
              <div className="apl-card p-6 overflow-x-auto">
                <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Source Sans 3', sans-serif" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid oklch(0.2 0 0)" }}>
                      <th style={{ textAlign: "left", padding: "1rem", color: "oklch(0.72 0.18 75)", fontWeight: 700, fontSize: "0.85rem" }}>Date</th>
                      <th style={{ textAlign: "left", padding: "1rem", color: "oklch(0.72 0.18 75)", fontWeight: 700, fontSize: "0.85rem" }}>Amount</th>
                      <th style={{ textAlign: "left", padding: "1rem", color: "oklch(0.72 0.18 75)", fontWeight: 700, fontSize: "0.85rem" }}>Type</th>
                      <th style={{ textAlign: "left", padding: "1rem", color: "oklch(0.72 0.18 75)", fontWeight: 700, fontSize: "0.85rem" }}>Status</th>
                      <th style={{ textAlign: "left", padding: "1rem", color: "oklch(0.72 0.18 75)", fontWeight: 700, fontSize: "0.85rem" }}>Reference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donor.donationHistory.map((donation, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid oklch(0.12 0 0)" }}>
                        <td style={{ padding: "1rem", color: "oklch(0.65 0 0)" }}>{new Date(donation.date).toLocaleDateString()}</td>
                        <td style={{ padding: "1rem", color: "oklch(0.72 0.18 75)", fontWeight: 700 }}>KES {donation.amount.toLocaleString()}</td>
                        <td style={{ padding: "1rem", color: "oklch(0.65 0 0)" }}>{donation.type}</td>
                        <td style={{ padding: "1rem" }}>
                          <span style={{ background: "oklch(0.55 0.16 160 / 0.15)", color: "oklch(0.55 0.16 160)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: 700 }}>
                            {donation.status}
                          </span>
                        </td>
                        <td style={{ padding: "1rem", color: "oklch(0.6 0 0)", fontSize: "0.8rem" }}>{donation.reference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="apl-card p-6">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "1rem" }}>
                    Account Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "0.25rem" }}>
                        Full Name
                      </div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white" }}>{donor.name}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "0.25rem" }}>
                        Email
                      </div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white" }}>{donor.email}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "0.25rem" }}>
                        Phone
                      </div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white" }}>{donor.phone}</div>
                    </div>
                  </div>
                </div>

                <div className="apl-card p-6">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "1rem" }}>
                    Preferences
                  </h3>
                  <div className="space-y-4">
                    <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                      <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", cursor: "pointer" }} />
                      <span style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.65 0 0)", fontSize: "0.9rem" }}>
                        Monthly impact reports
                      </span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                      <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", cursor: "pointer" }} />
                      <span style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.65 0 0)", fontSize: "0.9rem" }}>
                        Animal rescue stories
                      </span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "18px", height: "18px", cursor: "pointer" }} />
                      <span style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.65 0 0)", fontSize: "0.9rem" }}>
                        Volunteer opportunities
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="apl-card p-6 mt-6" style={{ background: "oklch(0.58 0.22 27 / 0.1)", border: "1px solid oklch(0.58 0.22 27 / 0.3)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "oklch(0.58 0.22 27)", marginBottom: "1rem" }}>
                  Danger Zone
                </h3>
                <button
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "oklch(0.58 0.22 27)",
                    color: "white",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <LogOut size={14} style={{ display: "inline", marginRight: "0.5rem" }} />
                  Cancel Subscription
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
