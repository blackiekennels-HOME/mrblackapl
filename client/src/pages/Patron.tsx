import { ButtonWithLoader } from "@/components/ButtonWithLoader";
import { useEffect } from "react";
import { Heart, Star, Shield, Crown, CheckCircle } from "lucide-react";

const PATRON_FORM = "https://forms.gle/U5aHKtoRGPmeDLSq6";
const PATRON_GROUP = "https://chat.whatsapp.com/EYTjBaWTJhPLSdkQdFdPwe?mode=gi_t";
const WHATSAPP_PATRON = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20want%20to%20become%20a%20Patron.";


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

const tiers = [
  {
    name: "Paw Friend",
    amount: "KES 100",
    period: "/month",
    Icon: Heart,
    color: "oklch(0.55 0.16 160)",
    perks: [
      "Monthly rescue update newsletter",
      "Name on APL Patron Wall",
      "Access to Patrons WhatsApp Group",
      "Digital Paw Friend badge",
    ],
  },
  {
    name: "Caregiver",
    amount: "KES 500",
    period: "/month",
    Icon: Star,
    color: "oklch(0.72 0.18 75)",
    featured: true,
    perks: [
      "Everything in Paw Friend",
      "Monthly animal rescue story update",
      "Named sponsor for one animal per month",
      "Priority adoption notifications",
      "Digital Caregiver certificate",
    ],
  },
  {
    name: "Guardian",
    amount: "KES 1,000",
    period: "/month",
    Icon: Shield,
    color: "oklch(0.58 0.22 27)",
    perks: [
      "Everything in Caregiver",
      "Quarterly impact report",
      "Named on APL website as Guardian",
      "Invitation to exclusive APL events",
      "Personal thank-you from the team",
    ],
  },
  {
    name: "Champion",
    amount: "KES 5,000+",
    period: "/month",
    Icon: Crown,
    color: "oklch(0.65 0.15 300)",
    perks: [
      "Everything in Guardian",
      "Dedicated animal sponsorship",
      "Corporate/personal logo on APL materials",
      "Annual impact meeting with APL leadership",
      "Exclusive Champion recognition",
    ],
  },
];

export default function Patron() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/adoption-happy-mNqkAqZMdpofB2TKaZ8ea7.webp)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Monthly Support</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Become a <span style={{ color: "oklch(0.72 0.18 75)" }}>Patron</span>
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              Patrons are the backbone of Mr. Black APL. Your monthly contribution provides the consistent funding we need to rescue, rehabilitate, and rehome animals across Kenya — every single month.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PATRON_FORM} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Heart size={16} /> Become Patron
                </span>
              </a>
              <a href={WHATSAPP_PATRON} target="_blank" rel="noopener noreferrer">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Chat WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patron */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container max-w-3xl text-center fade-up">
          <div className="section-label">Why Monthly Giving Matters</div>
          <div className="gold-line mx-auto" />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
            Consistent Support Saves More Lives
          </h2>
          <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", fontFamily: "'Source Sans 3', sans-serif" }}>
            One-time donations are wonderful, but monthly patronage is transformational. It allows us to plan ahead, maintain our rescue teams, stock medical supplies, and respond to emergencies without financial uncertainty. When you become a patron, animals get help faster and more reliably.
          </p>
        </div>
      </section>

      {/* Patron Tiers */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Choose Your Tier</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              Patron Membership Tiers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((tier, i) => {
              const Icon = tier.Icon;
              return (
                <div
                  key={i}
                  className="apl-card p-6 flex flex-col fade-up"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    border: tier.featured ? `2px solid ${tier.color}` : undefined,
                    position: "relative",
                  }}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded" style={{ background: tier.color, color: "oklch(0.08 0 0)", fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                      Most Popular
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-4" style={{ background: `${tier.color}20`, color: tier.color }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "white", marginBottom: "0.25rem" }}>{tier.name}</h3>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "1.8rem", color: tier.color, marginBottom: "1rem" }}>
                    {tier.amount}<span style={{ fontSize: "0.9rem", fontWeight: 400, color: "oklch(0.55 0 0)" }}>{tier.period}</span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-5">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle size={14} style={{ color: tier.color, flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "0.8rem", color: "oklch(0.6 0 0)", lineHeight: "1.5" }}>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <a href={PATRON_FORM} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <span className="btn-gold" style={{ background: tier.color, padding: "0.6rem 0.8rem", fontSize: "0.78rem", display: "block", textAlign: "center" }}>
                        Join {tier.name}
                      </span>
                    </a>
                    <a href={PATRON_GROUP} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <span style={{ padding: "0.6rem 0.8rem", fontSize: "0.78rem", display: "block", textAlign: "center", background: "oklch(0.35 0.15 142 / 0.2)", color: "oklch(0.65 0.15 142)", borderRadius: "0.35rem", fontWeight: 600, cursor: "pointer" }}>
                        Join Group
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patron Community */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container text-center fade-up">
          <div className="section-label">Patron Community</div>
          <div className="gold-line mx-auto" />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Join the Patrons WhatsApp Group
          </h2>
          <p style={{ color: "oklch(0.65 0 0)", maxWidth: "500px", margin: "0 auto 1.5rem", lineHeight: "1.8", fontFamily: "'Source Sans 3', sans-serif" }}>
            All patrons are invited to join our exclusive WhatsApp group for regular updates, behind-the-scenes content, and direct communication with the APL team.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={PATRON_FORM} target="_blank" rel="noopener noreferrer">
              <span className="btn-gold" style={{ padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
                <Heart size={15} /> Become Patron
              </span>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}
