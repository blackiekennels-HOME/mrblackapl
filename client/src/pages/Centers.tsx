import { useEffect } from "react";
import { MapPin, Home, ChevronRight } from "lucide-react";

const LAND_FORM = "https://forms.gle/hRPzh4QRrzNhDj1BA";
const WHATSAPP_CENTERS = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20want%20to%20discuss%20land%20donation%20for%20a%20rescue%20center.";

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

const targetCounties = [
  { county: "Nairobi", status: "Active", desc: "Our founding base. Operations ongoing from Nairobi with plans for a dedicated rescue center facility.", color: "oklch(0.55 0.16 160)" },
  { county: "Mombasa", status: "Planned", desc: "Blackie's birthplace. A center in Mombasa is a deeply meaningful next step in our expansion.", color: "oklch(0.72 0.18 75)" },
  { county: "Kisumu", status: "Planned", desc: "Western Kenya's largest city. A rescue center here would serve the entire Lake Victoria region.", color: "oklch(0.58 0.22 27)" },
  { county: "Nakuru", status: "Planned", desc: "Central Kenya's agricultural heartland. High need for animal welfare services and community outreach.", color: "oklch(0.65 0.15 300)" },
  { county: "Eldoret", status: "Planned", desc: "North Rift Valley hub. Serving Uasin Gishu and surrounding counties with rescue and rehabilitation.", color: "oklch(0.55 0.14 220)" },
  { county: "Thika", status: "Planned", desc: "Kiambu County satellite center to serve Nairobi's growing satellite towns and peri-urban areas.", color: "oklch(0.72 0.18 75)" },
];

const centerRequirements = [
  { title: "Land Size", desc: "Minimum 0.5 acres. Larger parcels preferred for full kennel and rehabilitation facilities." },
  { title: "Location", desc: "Accessible by road. Within or near a major town or urban centre in any of Kenya's 47 counties." },
  { title: "Tenure", desc: "Freehold, leasehold, or long-term lease (minimum 10 years). Donations and partnerships considered." },
  { title: "Utilities", desc: "Access to water and electricity preferred. Off-grid solutions can be arranged where necessary." },
];

export default function Centers() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Nationwide Expansion</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Mr. Black <span style={{ color: "oklch(0.72 0.18 75)" }}>Rescue Centers</span>
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              Our vision is a network of purpose-built rescue centers across all 47 counties of Kenya — giving every abandoned, injured, or abused animal a chance at a new life, no matter where they are found.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={LAND_FORM} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Home size={16} /> Offer Land
                </span>
              </a>
              <a href={WHATSAPP_CENTERS} target="_blank" rel="noopener noreferrer">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Chat WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container max-w-3xl text-center fade-up">
          <div className="section-label">The Vision</div>
          <div className="gold-line mx-auto" />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
            A Rescue Center in Every County
          </h2>
          <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif" }}>
            Kenya has 47 counties and millions of animals in need. Our current operations are centered in Nairobi, but our mission is nationwide. We are actively seeking land partners, donors, and volunteers in every county to help us build a network of Mr. Black Rescue Centers — named in honour of Blackie, whose journey from Mombasa to Nairobi inspired this entire movement.
          </p>
          <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", fontFamily: "'Source Sans 3', sans-serif" }}>
            Each center will serve as a fully operational rescue, rehabilitation, and rehoming facility — staffed by trained volunteers and veterinary professionals, and equipped to handle emergency rescues, long-term rehabilitation, and community outreach.
          </p>
        </div>
      </section>

      {/* Target Counties */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Expansion Plan</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              Priority Counties for Expansion
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {targetCounties.map((county, i) => (
              <div key={i} className="apl-card p-6 fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} style={{ color: county.color }} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "white" }}>{county.county}</h3>
                  <span className="ml-auto px-2 py-0.5 text-xs font-bold rounded" style={{ background: `${county.color}20`, color: county.color, fontFamily: "'Source Sans 3', sans-serif" }}>
                    {county.status}
                  </span>
                </div>
                <p style={{ fontSize: "0.83rem", color: "oklch(0.55 0 0)", lineHeight: "1.6" }}>{county.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 fade-up">
            <p style={{ color: "oklch(0.55 0 0)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem" }}>
              + 41 more counties to follow. If you have land in any county, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Land Requirements */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="fade-up">
              <div className="section-label">Land Requirements</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                What We're Looking For
              </h2>
              <div className="space-y-4">
                {centerRequirements.map((req, i) => (
                  <div key={i} className="apl-card p-5">
                    <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "oklch(0.72 0.18 75)", fontSize: "0.85rem", marginBottom: "0.3rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{req.title}</h4>
                    <p style={{ fontSize: "0.83rem", color: "oklch(0.6 0 0)", lineHeight: "1.6" }}>{req.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <div className="section-label">Offer Land</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Help Us Build a Center
              </h2>
              <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", marginBottom: "1.5rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                If you own land anywhere in Kenya and want to contribute to the Mr. Black APL mission, we'd love to explore a partnership. Whether it's a donation, a lease, or a long-term arrangement — your land could become a sanctuary for hundreds of animals every year.
              </p>
              <a href={LAND_FORM} target="_blank" rel="noopener noreferrer" className="block mb-4">
                <span className="btn-gold w-full justify-center" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Home size={16} /> Offer Land — Fill Form
                </span>
              </a>
              <a href={WHATSAPP_CENTERS} target="_blank" rel="noopener noreferrer" className="block">
                <span className="btn-outline-gold w-full justify-center" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Chat With Us First
                </span>
              </a>
              <div className="mt-6 apl-card p-5">
                <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Builder & Materials Volunteers</h4>
                <p style={{ fontSize: "0.82rem", color: "oklch(0.55 0 0)", lineHeight: "1.5", marginBottom: "0.75rem" }}>
                  We also need builders, fundis, and materials donors to help construct our rescue center facilities.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_builder/viewform" target="_blank" rel="noopener noreferrer">
                  <span className="btn-gold" style={{ padding: "0.45rem 1rem", fontSize: "0.72rem" }}>
                    Build With Us <ChevronRight size={12} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.72 0.18 75)" }}>
        <div className="container text-center fade-up">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "oklch(0.08 0 0)", marginBottom: "1rem" }}>
            Help Us Build Blackie's Legacy Nationwide
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.2 0 0)", marginBottom: "1.5rem", maxWidth: "450px", margin: "0 auto 1.5rem" }}>
            Every center we build is named in Blackie's honour. Help us ensure no animal in Kenya suffers alone.
          </p>
          <a href={LAND_FORM} target="_blank" rel="noopener noreferrer">
            <span className="btn-gold" style={{ background: "oklch(0.08 0 0)", color: "oklch(0.72 0.18 75)", padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
              <Home size={15} /> Offer Land Today
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
