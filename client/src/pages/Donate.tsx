import { ButtonWithLoader } from "@/components/ButtonWithLoader";
import { useEffect, useState } from "react";
import { Heart, ArrowRight } from "lucide-react";

// Direct Paystack payment links
const ONE_TIME_PAYMENT_LINK = "https://paystack.shop/pay/0d6dd6-sml";
const MONTHLY_PAYMENT_LINK = "https://paystack.shop/pay/n4wdi9ydo0";
const DONATION_FORM = "https://forms.gle/3Cn41PQXGQFkXoc48";
const DONATION_GROUP = "https://chat.whatsapp.com/EfwI09DuFXlD4dCW5cIjgH?mode=gi_t";

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

export default function Donate() {
  const [donationType, setDonationType] = useState<"one-time" | "recurring">("one-time");

  useScrollReveal();

  const handleDonate = () => {
    if (donationType === "one-time") {
      window.open(ONE_TIME_PAYMENT_LINK, "_blank");
    } else {
      window.open(MONTHLY_PAYMENT_LINK, "_blank");
    }
  };

  return (
    <div>
      {/* Hero Section */}
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
          </div>
        </div>
      </section>

      {/* Donation Type Selector */}
      <section className="py-12" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="flex gap-4 justify-center mb-8 fade-up">
            {[
              { type: "one-time" as const, label: "One-Time Donation" },
              { type: "recurring" as const, label: "Monthly Support" },
            ].map((option) => (
              <button
                key={option.type}
                onClick={() => setDonationType(option.type)}
                className="px-6 py-3 rounded-lg font-semibold transition-all"
                style={{
                  background: donationType === option.type ? "oklch(0.72 0.18 75)" : "oklch(0.12 0 0)",
                  color: donationType === option.type ? "oklch(0.08 0 0)" : "white",
                  border: `2px solid ${donationType === option.type ? "oklch(0.72 0.18 75)" : "oklch(0.2 0 0)"}`,
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Button */}
      <section className="py-16" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="max-w-md mx-auto fade-up">
            <button
              onClick={handleDonate}
              className="w-full apl-card p-8 text-center hover:bg-opacity-80 transition-all"
              style={{ background: "oklch(0.72 0.18 75 / 0.15)", border: "2px solid oklch(0.72 0.18 75 / 0.3)" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>💳</div>
              <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
                {donationType === "recurring" ? "Set Up Monthly Support" : "Make a One-Time Donation"}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "oklch(0.6 0 0)", marginBottom: "2rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                {donationType === "recurring" 
                  ? "Support our mission with automatic monthly giving" 
                  : "Give once and make an immediate impact"}
              </p>
              <span className="btn-gold" style={{ padding: "0.85rem 2.5rem", fontSize: "1rem", display: "inline-block" }}>
                Donate <ArrowRight size={18} style={{ marginLeft: "0.5rem", display: "inline" }} />
              </span>
            </button>
            <a href={DONATION_GROUP} target="_blank" rel="noopener noreferrer">
              <span style={{ padding: "0.85rem 2.5rem", fontSize: "1rem", display: "block", textAlign: "center", background: "oklch(0.35 0.15 142 / 0.2)", color: "oklch(0.65 0.15 142)", borderRadius: "0.35rem", fontWeight: 600, cursor: "pointer" }}>
                Join Donors Group
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Recurring Donation Info */}
      {donationType === "recurring" && (
        <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
          <div className="container">
            <div className="max-w-2xl mx-auto fade-up">
              <div className="section-label">How Monthly Support Works</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Automatic Monthly Giving
              </h2>
              <div className="space-y-3">
                {[
                  "Your chosen amount will be charged automatically each month",
                  "You can manage or cancel your subscription anytime",
                  "Monthly donors receive special recognition and exclusive updates",
                  "Your consistent support allows us to plan long-term rescue operations",
                  "100% of your donation goes directly to animal rescue and care",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ background: "oklch(0.72 0.18 75 / 0.15)", color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      ✓
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "oklch(0.65 0 0)", lineHeight: "1.6", paddingTop: "4px", fontFamily: "'Source Sans 3', sans-serif" }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      <section className="py-16" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Your Impact</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem" }}>
              Where Your Money Goes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { percent: "40%", label: "Rescue Operations", desc: "Emergency response, transport, and field rescue" },
              { percent: "35%", label: "Veterinary Care", desc: "Medical treatment, surgery, and rehabilitation" },
              { percent: "25%", label: "Operations", desc: "Facilities, staff, and community programs" },
            ].map((item, i) => (
              <div key={i} className="apl-card p-6 text-center fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "2.5rem", color: "oklch(0.72 0.18 75)", marginBottom: "0.5rem" }}>
                  {item.percent}
                </div>
                <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "1rem", marginBottom: "0.5rem" }}>
                  {item.label}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto fade-up">
            <div className="section-label">Questions?</div>
            <div className="gold-line" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Donation FAQs
            </h2>
            <div className="space-y-4">
              {[
                { q: "Is my donation secure?", a: "Yes, all payments are processed through Paystack, a PCI-DSS compliant payment processor. Your card details are never stored on our servers." },
                { q: "Can I cancel my monthly support?", a: "Absolutely. You can cancel your subscription anytime through Paystack or by contacting us at info@mrblackapl.co.ke" },
                { q: "Will I receive a receipt?", a: "Yes, you'll receive an email receipt immediately after payment. Keep this for your records." },
                { q: "How do I know my donation is making an impact?", a: "Monthly donors receive exclusive updates on rescue operations, animal stories, and impact reports." },
              ].map((item, i) => (
                <div key={i} className="apl-card p-4">
                  <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "oklch(0.72 0.18 75)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>
                    {item.q}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "oklch(0.65 0 0)", fontFamily: "'Source Sans 3', sans-serif", lineHeight: "1.6" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
