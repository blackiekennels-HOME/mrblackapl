import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Heart, Shield, Target, Eye, Users } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20would%20like%20to%20support%20your%20mission.";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const values = [
  { icon: Heart, title: "Compassion", desc: "Every animal deserves dignity, care, and love regardless of breed, age, or condition." },
  { icon: Shield, title: "Protection", desc: "We stand as a shield between vulnerable animals and the cruelty they face in our communities." },
  { icon: Target, title: "Action", desc: "We don't just raise awareness — we respond, rescue, and rehabilitate with urgency and purpose." },
  { icon: Users, title: "Community", desc: "Animal welfare is a shared responsibility. We build the community that makes rescue possible." },
];

export default function About() {
  useScrollReveal();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-28 flex items-center"
        style={{ background: "oklch(0.08 0 0)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/hero-blackie-YSonM7DQTmTcqZ35eacHCc.webp)` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.9) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Our Story</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              About Mr. Black <span style={{ color: "oklch(0.72 0.18 75)" }}>APL</span>
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              We are Kenya's dedicated animal protection league — built on love, driven by purpose, and named after the dog who started it all.
            </p>
            <Link href="/donate">
              <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                Support Our Mission <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="fade-up">
              <div className="section-label">Who We Are</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                A League Built on Blackie's Legacy
              </h2>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                Mr. Black Animal Protection League (APL) was founded with a singular purpose: to ensure that no animal in Kenya suffers alone. We rescue abandoned, abused, injured, neglected, and vulnerable animals — and we give them the medical care, rehabilitation, and loving homes they deserve.
              </p>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                While our operations are currently centred in Nairobi, our vision is nationwide. We are building a network of rescue volunteers, veterinary professionals, foster carers, and community advocates across all 47 counties of Kenya.
              </p>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontFamily: "'Source Sans 3', sans-serif" }}>
                The organisation is named after Blackie — a dog who embodied resilience, love, and the transformative power of compassion. Blackie relocated from Mombasa to Nairobi in January 2025 and passed away shortly after. His legacy lives on in every animal we save.
              </p>
            </div>
            <div className="fade-up relative" style={{ transitionDelay: "150ms" }}>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/adoption-happy-mNqkAqZMdpofB2TKaZ8ea7.webp"
                  alt="A Kenyan family adopting a rescued dog at Mr. Black APL adoption event in Nairobi Kenya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="apl-card p-8 fade-up">
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-5" style={{ background: "oklch(0.72 0.18 75 / 0.15)", color: "oklch(0.72 0.18 75)" }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "white", marginBottom: "1rem" }}>Our Mission</h3>
              <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", fontFamily: "'Source Sans 3', sans-serif" }}>
                To rescue, rehabilitate, and rehome abandoned, abused, injured, and neglected animals across Kenya — while building a compassionate community that champions animal welfare and responsible pet ownership nationwide.
              </p>
            </div>
            <div className="apl-card p-8 fade-up" style={{ transitionDelay: "100ms" }}>
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-5" style={{ background: "oklch(0.72 0.18 75 / 0.15)", color: "oklch(0.72 0.18 75)" }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "white", marginBottom: "1rem" }}>Our Vision</h3>
              <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", fontFamily: "'Source Sans 3', sans-serif" }}>
                A Kenya where every animal is safe, valued, and protected. Where communities take ownership of animal welfare, where rescue centers operate in every county, and where no animal suffers from neglect or abuse.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12 fade-up">
            <div className="section-label">What Guides Us</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="apl-card p-6 text-center fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.72 0.18 75 / 0.12)", color: "oklch(0.72 0.18 75)" }}>
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.5rem" }}>{val.title}</h4>
                  <p style={{ fontSize: "0.83rem", color: "oklch(0.55 0 0)", lineHeight: "1.6" }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container max-w-3xl text-center">
          <div className="fade-up">
            <div className="section-label">The Reality in Kenya</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Why Animal Protection Matters
            </h2>
            <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.9", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}>
              Kenya faces a significant animal welfare crisis. Thousands of dogs, cats, and other animals are abandoned on streets every year — many suffering from injuries, disease, and malnutrition. Without organised rescue systems, most of these animals face preventable suffering and death.
            </p>
            <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.9", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}>
              Beyond the animals themselves, the welfare of animals is deeply connected to community health, public safety, and the moral fabric of society. Communities that protect animals build stronger, more compassionate cultures.
            </p>
            <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.9", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}>
              Mr. Black APL exists to bridge this gap — providing the organised, professional, and compassionate response that Kenya's animals desperately need.
            </p>
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label">Growing Nationwide</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Future Expansion Plans
              </h2>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                Our vision extends far beyond Nairobi. We are actively working towards establishing Mr. Black Rescue Centers in key counties across Kenya — purpose-built facilities equipped with veterinary clinics, rehabilitation spaces, and adoption centres.
              </p>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", marginBottom: "2rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                We are looking for land donors, community partners, and county-level volunteers to help us bring this vision to life. If you have land, resources, or connections in your county, we want to hear from you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/centers">
                  <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                    View Expansion Plans <ArrowRight size={14} />
                  </span>
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                    Offer Land
                  </span>
                </a>
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/rescue-operations-AzVQw34eC557piXMjrZNEi.webp"
                  alt="Mr. Black APL volunteer rescuing an injured dog in Nairobi Kenya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.72 0.18 75)" }}>
        <div className="container text-center fade-up">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "oklch(0.08 0 0)", marginBottom: "1rem" }}>
            Be Part of Blackie's Legacy
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.2 0 0)", marginBottom: "1.5rem", maxWidth: "450px", margin: "0 auto 1.5rem" }}>
            Every volunteer, every donor, every adopter carries forward the spirit of the dog who started it all.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/volunteer">
              <span className="btn-gold" style={{ background: "oklch(0.08 0 0)", color: "oklch(0.72 0.18 75)", padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
                Join APL
              </span>
            </Link>
            <Link href="/donate">
              <span className="btn-outline-gold" style={{ borderColor: "oklch(0.08 0 0)", color: "oklch(0.08 0 0)", padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
                Donate Now
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
