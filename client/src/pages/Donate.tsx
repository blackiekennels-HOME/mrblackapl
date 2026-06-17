import { useEffect, useState } from "react";
import { Heart, ArrowRight, ChevronRight } from "lucide-react";

const PAYSTACK_KEY = "pk_live_your_paystack_key"; // Replace with actual Paystack public key

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

const presetAmounts = [
  { amount: 50, impact: "Feeds one rescued animal for a day", icon: "🍖" },
  { amount: 100, impact: "Covers deworming treatment for one animal", icon: "💊" },
  { amount: 500, impact: "Covers basic medical treatment and wound care", icon: "🩺" },
  { amount: 1000, impact: "Supports full rehabilitation for one week", icon: "❤️" },
  { amount: 5000, impact: "Funds emergency surgery for a rescued animal", icon: "🏥" },
  { amount: 10000, impact: "Sponsors a full rescue operation from start to rehome", icon: "🐾" },
];

const recurringOptions = [
  { label: "Monthly", value: "monthly", description: "Sustain our mission every month", interval: 30 },
  { label: "Quarterly", value: "quarterly", description: "Give 4 times per year", interval: 90 },
  { label: "Annual", value: "annual", description: "One powerful gift per year", interval: 365 },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "recurring">("one-time");
  const [recurringType, setRecurringType] = useState("monthly");
  const [isProcessing, setIsProcessing] = useState(false);

  useScrollReveal();

  const handlePaystackPayment = async () => {
    const amount = selectedAmount || (customAmount ? parseInt(customAmount) : null);
    if (!amount || amount < 10) {
      alert("Please select or enter a valid amount (minimum KES 10)");
      return;
    }

    if (PAYSTACK_KEY === "pk_live_your_paystack_key") {
      alert("Paystack public key not configured. Please contact the administrator.");
      return;
    }

    setIsProcessing(true);

    // Load Paystack script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    document.body.appendChild(script);

    script.onload = () => {
      const paystackConfig: any = {
        key: PAYSTACK_KEY,
        email: "donor@mrblackapl.co.ke",
        amount: amount * 100, // Paystack expects amount in cents
        currency: "KES",
        ref: `APL-${Date.now()}`,
        onClose: () => {
          setIsProcessing(false);
          alert("Payment window closed.");
        },
        onSuccess: (response: any) => {
          setIsProcessing(false);
          const typeLabel = donationType === "recurring" 
            ? `${recurringType.charAt(0).toUpperCase() + recurringType.slice(1)} Recurring`
            : "One-Time";
          alert(`Payment successful! Reference: ${response.reference}\n\nDonation Type: ${typeLabel}\n\nThank you for supporting Mr. Black APL!`);
          // Reset form
          setSelectedAmount(null);
          setCustomAmount("");
        },
      };

      // For recurring donations, add plan configuration
      if (donationType === "recurring") {
        // Plan code format: APL_MONTHLY, APL_QUARTERLY, APL_ANNUAL
        paystackConfig.plan = `APL_${recurringType.toUpperCase()}`;
        // Optional: Add interval in days for reference
        paystackConfig.metadata = {
          donationType: "recurring",
          interval: recurringType,
          intervalDays: recurringOptions.find(r => r.value === recurringType)?.interval,
        };
      } else {
        paystackConfig.metadata = {
          donationType: "one-time",
        };
      }

      const handler = (window as any).PaystackPop.setup(paystackConfig);
      handler.openIframe();
    };

    script.onerror = () => {
      setIsProcessing(false);
      alert("Failed to load Paystack. Please try again.");
    };
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

      {/* Donation Amount Selector */}
      <section className="py-16" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Select Your Impact</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem" }}>
              Choose a <span style={{ color: "oklch(0.72 0.18 75)" }}>Donation Amount</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {presetAmounts.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedAmount(preset.amount);
                  setCustomAmount("");
                }}
                className="apl-card p-4 text-center transition-all fade-up"
                style={{
                  transitionDelay: `${idx * 60}ms`,
                  background: selectedAmount === preset.amount ? "oklch(0.72 0.18 75 / 0.2)" : "oklch(0.12 0 0)",
                  border: selectedAmount === preset.amount ? "2px solid oklch(0.72 0.18 75)" : "2px solid oklch(0.2 0 0)",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{preset.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", color: "oklch(0.72 0.18 75)", marginBottom: "0.25rem" }}>
                  KES {preset.amount.toLocaleString()}
                </div>
                <p style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                  {preset.impact}
                </p>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="max-w-md mx-auto mb-8 fade-up">
            <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.65 0 0)", marginBottom: "0.5rem", fontSize: "0.85rem" }}>
              Or enter a custom amount (KES)
            </label>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              placeholder="Enter amount"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "oklch(0.12 0 0)",
                border: "2px solid oklch(0.2 0 0)",
                borderRadius: "0.5rem",
                color: "white",
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Recurring Options */}
          {donationType === "recurring" && (
            <div className="max-w-2xl mx-auto mb-8 fade-up">
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.65 0 0)", marginBottom: "1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Recurring Frequency
              </div>
              <div className="grid grid-cols-3 gap-4">
                {recurringOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setRecurringType(option.value)}
                    className="apl-card p-4 text-center transition-all"
                    style={{
                      background: recurringType === option.value ? "oklch(0.72 0.18 75 / 0.2)" : "oklch(0.12 0 0)",
                      border: recurringType === option.value ? "2px solid oklch(0.72 0.18 75)" : "2px solid oklch(0.2 0 0)",
                    }}
                  >
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.25rem" }}>
                      {option.label}
                    </div>
                    <p style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      {option.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Donation Button */}
          <div className="max-w-md mx-auto fade-up">
            <button
              onClick={handlePaystackPayment}
              disabled={isProcessing}
              className="w-full apl-card p-6 text-center hover:bg-opacity-80 transition-all disabled:opacity-50"
              style={{ background: "oklch(0.72 0.18 75 / 0.15)", border: "2px solid oklch(0.72 0.18 75 / 0.3)" }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💳</div>
              <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                Donate via Paystack
              </h3>
              <p style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", marginBottom: "1.5rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                {donationType === "recurring" ? "Set up automatic recurring giving" : "Pay securely with card or mobile money"}
              </p>
              <span className="btn-gold" style={{ padding: "0.75rem 2rem", fontSize: "0.9rem", display: "inline-block", opacity: isProcessing ? 0.7 : 1 }}>
                {isProcessing ? "Processing..." : "Proceed to Payment"} <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Recurring Donation Info */}
      {donationType === "recurring" && (
        <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
          <div className="container">
            <div className="max-w-2xl mx-auto fade-up">
              <div className="section-label">How Recurring Donations Work</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Automatic Monthly Giving
              </h2>
              <div className="space-y-3">
                {[
                  "Your chosen amount will be charged automatically on your selected frequency",
                  "You can manage or cancel your subscription anytime through Paystack",
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

      {/* Paystack Payment Guide */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto fade-up">
            <div className="section-label">How to Donate via Paystack</div>
            <div className="gold-line" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Step-by-Step Guide
            </h2>
            <div className="space-y-3">
              {[
                "Click 'Donate via Paystack' button above",
                "Select your donation amount (preset or custom)",
                "Choose donation type: One-Time or Recurring",
                "If recurring, select frequency: Monthly, Quarterly, or Annual",
                "You'll be redirected to Paystack's secure payment page",
                "Enter your card details or select mobile money (M-PESA, Airtel Money, etc.)",
                "Complete the payment and receive instant confirmation",
                "For recurring donations, your subscription will be set up automatically",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ background: "oklch(0.72 0.18 75 / 0.15)", color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    {i + 1}
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
                { q: "Can I cancel my recurring donation?", a: "Absolutely. You can manage or cancel your subscription anytime through your Donor Dashboard at /donor-dashboard or by contacting us at info@mrblackapl.co.ke" },
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
