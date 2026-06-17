import { useEffect } from "react";
import { Heart, ArrowRight } from "lucide-react";

const WHATSAPP_DONATE = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20would%20like%20to%20make%20a%20donation.";
const MPESA_PAYBILL = "4157649";
const DONATE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSf_donation/viewform";

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

const impactTiers = [
  { amount: "KES 100", impact: "Feeds one rescued animal for a day", icon: "🍖", color: "oklch(0.55 0.16 160)" },
  { amount: "KES 250", impact: "Covers deworming treatment for one animal", icon: "💊", color: "oklch(0.55 0.16 160)" },
  { amount: "KES 500", impact: "Covers basic medical treatment and wound care", icon: "🩺", color: "oklch(0.72 0.18 75)" },
  { amount: "KES 1,000", impact: "Supports full rehabilitation for one week", icon: "❤️", color: "oklch(0.72 0.18 75)" },
  { amount: "KES 2,500", impact: "Covers vaccinations for one animal", icon: "💉", color: "oklch(0.58 0.22 27)" },
  { amount: "KES 5,000", impact: "Funds emergency surgery for a rescued animal", icon: "🏥", color: "oklch(0.58 0.22 27)" },
  { amount: "KES 10,000", impact: "Sponsors a full rescue operation from start to rehome", icon: "🐾", color: "oklch(0.65 0.15 300)" },
  { amount: "Custom", impact: "Give any amount — every shilling makes a difference", icon: "🖤", color: "oklch(0.65 0.15 300)" },
];

export default function Donate() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/rehabilitation-care-XQRjkcWEWUBnDhm3tvCHHo.webp)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Make an Impact</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Your Gift <span style={{ color: "oklch(0.72 0.18 75)" }}>Saves Lives</span>
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              Every contribution directly funds rescue operations, veterinary care, and rehabilitation for animals in need across Kenya. No donation is too small — every shilling matters.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={DONATE_FORM} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Heart size={16} /> Donate Now
                </span>
              </a>
              <a href={WHATSAPP_DONATE} target="_blank" rel="noopener noreferrer">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Chat WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* M-PESA Instructions */}
      <section className="py-14" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="fade-up">
              <div className="section-label">How to Donate</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                M-PESA Donation
              </h2>
              <div className="apl-card p-6 mb-5">
                <div className="section-label mb-3" style={{ color: "oklch(0.55 0.16 160)" }}>M-PESA Paybill</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "2.5rem", color: "oklch(0.72 0.18 75)", marginBottom: "0.5rem" }}>{MPESA_PAYBILL}</div>
                <div style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>Account Number: <strong style={{ color: "white" }}>Your Name</strong></div>
              </div>
              <div className="space-y-3">
                {[
                  "Go to M-PESA on your phone",
                  "Select Lipa na M-PESA → Paybill",
                  `Enter Business Number: ${MPESA_PAYBILL}`,
                  "Enter Account Number: Your Name",
                  "Enter Amount",
                  "Enter M-PESA PIN and confirm",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: "oklch(0.72 0.18 75 / 0.15)", color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      {i + 1}
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "oklch(0.65 0 0)", lineHeight: "1.5", paddingTop: "2px" }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <div className="section-label">Other Ways to Give</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                More Donation Options
              </h2>
              <div className="space-y-4">
                <div className="apl-card p-5">
                  <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Online Donation Form</h4>
                  <p style={{ fontSize: "0.83rem", color: "oklch(0.6 0 0)", lineHeight: "1.6", marginBottom: "1rem" }}>Complete our secure online donation form with your details and preferred amount.</p>
                  <a href={DONATE_FORM} target="_blank" rel="noopener noreferrer">
                    <span className="btn-gold" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem" }}>
                      Open Form <ArrowRight size={13} />
                    </span>
                  </a>
                </div>
                <div className="apl-card p-5">
                  <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>WhatsApp Donation</h4>
                  <p style={{ fontSize: "0.83rem", color: "oklch(0.6 0 0)", lineHeight: "1.6", marginBottom: "1rem" }}>Chat with us on WhatsApp to arrange your donation and receive confirmation.</p>
                  <a href={WHATSAPP_DONATE} target="_blank" rel="noopener noreferrer">
                    <span className="btn-gold" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem" }}>
                      Chat WhatsApp
                    </span>
                  </a>
                </div>
                <div className="apl-card p-5">
                  <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Become a Monthly Patron</h4>
                  <p style={{ fontSize: "0.83rem", color: "oklch(0.6 0 0)", lineHeight: "1.6", marginBottom: "1rem" }}>Join our patron program for consistent monthly support starting from KES 100/month.</p>
                  <a href="/patron">
                    <span className="btn-outline-gold" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem" }}>
                      Become Patron <ArrowRight size={13} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Tiers */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Your Impact</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              What Your Donation Does
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactTiers.map((tier, i) => (
              <div key={i} className="apl-card p-5 text-center fade-up" style={{ transitionDelay: `${i * 60}ms` }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{tier.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", color: tier.color, marginBottom: "0.5rem" }}>{tier.amount}</div>
                <p style={{ fontSize: "0.82rem", color: "oklch(0.6 0 0)", lineHeight: "1.5" }}>{tier.impact}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 fade-up">
            <a href={DONATE_FORM} target="_blank" rel="noopener noreferrer">
              <span className="btn-gold" style={{ padding: "0.85rem 2.5rem", fontSize: "0.85rem" }}>
                <Heart size={16} /> Donate Now — Every Shilling Counts
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container max-w-3xl text-center fade-up">
          <div className="section-label">Our Promise to You</div>
          <div className="gold-line mx-auto" />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
            100% Transparency
          </h2>
          <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif" }}>
            Every donation made to Mr. Black APL goes directly towards animal rescue, veterinary care, rehabilitation, and rehoming. We are committed to full transparency in how funds are used.
          </p>
          <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", fontFamily: "'Source Sans 3', sans-serif" }}>
            We regularly share updates on rescued animals, medical treatments funded, and outcomes achieved — so you can see exactly how your generosity is making a difference.
          </p>
        </div>
      </section>
    </div>
  );
}
