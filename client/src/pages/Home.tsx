import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Heart, Shield, Users, AlertTriangle, Star, ChevronRight, Home as HomeIcon } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20need%20help%20with%20an%20animal.";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const stats = [
  { number: "60+", label: "Animals Rescued" },
  { number: "58+", label: "Successfully Rehomed" },
  { number: "Actively Accepting", label: "Volunteers Across All Counties" },
  { number: "47", label: "Counties Reached" },
];

const programs = [
  {
    Icon: AlertTriangle,
    title: "Rescue",
    desc: "24/7 emergency response for abandoned, abused, and injured animals across Kenya.",
    href: "/rescue",
    cta: "Report Now",
    color: "oklch(0.58 0.22 27)",
  },
  {
    Icon: Heart,
    title: "Rehabilitation",
    desc: "Veterinary care, behavioral therapy, and medical recovery for rescued animals.",
    href: "/rehabilitation",
    cta: "Join Vets",
    color: "oklch(0.72 0.18 75)",
  },
  {
    Icon: HomeIcon,
    title: "Rehome",
    desc: "Matching recovered animals with loving, screened families across Kenya.",
    href: "/adoption",
    cta: "Adopt Today",
    color: "oklch(0.55 0.16 160)",
  },
];

const adoptablePets = [
  {
    name: "Kali",
    breed: "German Shepherd Mix",
    age: "2 years",
    gender: "Male",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    desc: "Energetic and loyal. Great with children and other dogs.",
  },
  {
    name: "Amara",
    breed: "Labrador Mix",
    age: "1 year",
    gender: "Female",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80",
    desc: "Gentle and affectionate. Loves cuddles and walks.",
  },
  {
    name: "Simba",
    breed: "Boerboel Mix",
    age: "3 years",
    gender: "Male",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&q=80",
    desc: "Calm and protective. Perfect for a family home.",
  },
];

const testimonials = [
  {
    name: "Grace Wanjiku",
    location: "Nairobi",
    text: "We adopted Bella from Mr. Black APL two years ago. She has transformed our home with so much love and joy. The adoption process was thorough and caring.",
    stars: 5,
  },
  {
    name: "James Otieno",
    location: "Mombasa",
    text: "I reported an injured stray dog and the team responded within the hour. Their dedication to animal welfare in Kenya is unmatched.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    location: "Nairobi",
    text: "Volunteering with Mr. Black APL has been the most rewarding experience of my life. The team is passionate, organised, and truly makes a difference.",
    stars: 5,
  },
];

const blogPreviews = [
  {
    category: "Rescue Stories",
    title: "Timmy Black and Beshti Black: A Story of Survival",
    excerpt: "Two dogs found abandoned in Nairobi's industrial area, now thriving after months of rehabilitation and care.",
    date: "October 2024",
    img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&q=80",
  },
  {
    category: "Animal Welfare Kenya",
    title: "Our Vision for a New Shelter Across Kenya",
    excerpt: "As we grow, so does our dream — purpose-built rescue centers in every major county, staffed by trained volunteers.",
    date: "October 2024",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
  },
  {
    category: "Community Updates",
    title: "The Journey of Mr. Black Animal Protection League",
    excerpt: "From a single rescued dog in Mombasa to a nationwide movement — the story of how Blackie's legacy lives on.",
    date: "October 2024",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "oklch(0.08 0 0)" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/hero-blackie-YSonM7DQTmTcqZ35eacHCc.webp)`,
            opacity: 0.45,
          }}
          role="img"
          aria-label="Blackie — the heart of Mr. Black Animal Protection League"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.08 0 0 / 0.3) 0%, oklch(0.08 0 0 / 0.6) 60%, oklch(0.08 0 0) 100%)" }} />

        {/* Hero Content */}
        <div className="relative z-10 container text-center py-24">
          <div className="section-label mb-5">Kenya's Animal Protection League</div>
          <h1
            className="text-white mb-6 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              textShadow: "0 2px 20px oklch(0 0 0 / 0.6)",
            }}
          >
            Rescue.{" "}
            <span style={{ color: "oklch(0.72 0.18 75)" }}>Rehabilitate.</span>{" "}
            Rehome.
          </h1>
          <p
            className="mx-auto mb-10 text-white/80"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              maxWidth: "600px",
              lineHeight: "1.7",
              fontWeight: 300,
            }}
          >
            Mr. Black APL is Kenya's dedicated animal protection league — rescuing abandoned, abused, and injured animals and giving them a second chance at life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/rescue">
              <span className="btn-urgent" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                <AlertTriangle size={16} /> Report Now
              </span>
            </Link>
            <Link href="/donate">
              <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                <Heart size={16} /> Donate Now
              </span>
            </Link>
            <Link href="/volunteer">
              <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                <Users size={16} /> Join Rescue
              </span>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem", borderColor: "#25D366", color: "#25D366" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, oklch(0.72 0.18 75))" }} />
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "oklch(0.72 0.18 75)" }}>
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="stat-number" style={{ color: "oklch(0.08 0 0)", fontSize: "2.5rem" }}>{stat.number}</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.2 0 0)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blackie's Story */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label">In Loving Memory</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: "1.2", marginBottom: "1.5rem" }}>
                The Story of <span style={{ color: "oklch(0.72 0.18 75)" }}>Blackie</span>
              </h2>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}>
                Blackie was more than a dog. He was the soul of this organisation — the reason we exist, the reason we fight every day for animals who cannot speak for themselves.
              </p>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}>
                Found abandoned and vulnerable, Blackie was rescued, rehabilitated, and became the living embodiment of what Mr. Black APL stands for. He relocated from Mombasa to Nairobi in January 2025, and passed away shortly after — leaving behind a legacy that continues through every rescue we carry out.
              </p>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", marginBottom: "2rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}>
                Every animal we save carries a piece of Blackie's spirit. His story is not an ending — it is our beginning.
              </p>
              <Link href="/about">
                <span className="btn-outline-gold">
                  Read Our Full Story <ArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="fade-up relative" style={{ transitionDelay: "150ms" }}>
              <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/hero-blackie-YSonM7DQTmTcqZ35eacHCc.webp"
                  alt="Blackie — the heart of Mr. Black Animal Protection League, a black dog with soulful eyes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.08 0 0 / 0.7) 0%, transparent 60%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "oklch(0.72 0.18 75)" }}>
                    🖤 Blackie
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", color: "oklch(0.7 0 0)" }}>
                    Mombasa → Nairobi · January 2025
                  </div>
                </div>
              </div>
              {/* Decorative gold border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-sm" style={{ border: "2px solid oklch(0.72 0.18 75 / 0.3)", zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="text-center mb-14 fade-up">
            <div className="section-label">What We Do</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem" }}>
              Our Three Pillars of Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, i) => {
            const Icon = prog.Icon;
            return (
              <div key={i} className="apl-card p-8 fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-5" style={{ background: `${prog.color}20`, color: prog.color }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", color: "white", marginBottom: "0.75rem" }}>
                  {prog.title}
                </h3>
                <p style={{ color: "oklch(0.6 0 0)", lineHeight: "1.7", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  {prog.desc}
                </p>
                <Link href={prog.href}>
                  <span className="btn-gold" style={{ background: prog.color, padding: "0.55rem 1.2rem", fontSize: "0.75rem" }}>
                    {prog.cta} <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Featured Adoptable Pets */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div className="fade-up">
              <div className="section-label">Ready for a Home</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem" }}>
                Meet Our Animals
              </h2>
            </div>
            <Link href="/adoption">
              <span className="btn-outline-gold fade-up" style={{ transitionDelay: "150ms" }}>
                View All Animals <ChevronRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adoptablePets.map((pet, i) => (
              <div key={i} className="apl-card overflow-hidden fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={pet.img}
                    alt={`${pet.name} — ${pet.breed} available for adoption at Mr. Black APL Kenya`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-bold rounded" style={{ background: "oklch(0.72 0.18 75)", color: "oklch(0.08 0 0)", fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.05em" }}>
                      Available
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "white" }}>{pet.name}</h3>
                    <span style={{ fontSize: "0.75rem", color: "oklch(0.55 0 0)" }}>{pet.gender} · {pet.age}</span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "oklch(0.72 0.18 75)", marginBottom: "0.5rem", fontFamily: "'Source Sans 3', sans-serif" }}>{pet.breed}</div>
                  <p style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", lineHeight: "1.6", marginBottom: "1rem" }}>{pet.desc}</p>
                  <Link href="/adoption">
                    <span className="btn-gold w-full justify-center" style={{ padding: "0.55rem 1rem", fontSize: "0.75rem" }}>
                      Adopt Today
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rescue Image Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/rescue-operations-AzVQw34eC557piXMjrZNEi.webp)`,
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0" style={{ background: "oklch(0.08 0 0 / 0.7)" }} />
        <div className="relative z-10 container text-center">
          <div className="fade-up">
            <div className="section-label">Emergency Response</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "white", marginTop: "0.5rem", marginBottom: "1rem" }}>
              An Animal Needs Help Right Now
            </h2>
            <p style={{ color: "oklch(0.7 0 0)", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: "1.7", fontFamily: "'Source Sans 3', sans-serif" }}>
              If you've seen an abandoned, injured, or abused animal, report it immediately. Our rescue teams operate across Kenya and respond fast.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/rescue">
                <span className="btn-urgent" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <AlertTriangle size={16} /> Report Now
                </span>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Chat WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Appeal */}
      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label">Make an Impact</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Your Gift Saves Lives
              </h2>
              <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", marginBottom: "2rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                Every contribution directly funds rescue operations, veterinary care, and rehabilitation for animals in need across Kenya.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { amount: "KES 100", impact: "Feeds one rescued animal for a day" },
                  { amount: "KES 500", impact: "Covers basic medical treatment" },
                  { amount: "KES 1,000", impact: "Supports full rehabilitation" },
                ].map((tier, i) => (
                  <div key={i} className="apl-card p-4 text-center">
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", color: "oklch(0.72 0.18 75)", marginBottom: "0.4rem" }}>
                      {tier.amount}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "oklch(0.6 0 0)", lineHeight: "1.5" }}>{tier.impact}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/donate">
                  <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                    <Heart size={16} /> Donate Now
                  </span>
                </Link>
                <Link href="/patron">
                  <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                    Become a Patron
                  </span>
                </Link>
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/rehabilitation-care-XQRjkcWEWUBnDhm3tvCHHo.webp"
                  alt="Veterinarian providing medical care to a rescued dog at Mr. Black APL rehabilitation center in Nairobi Kenya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-14 fade-up">
            <div className="section-label">Community Voices</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem" }}>
              Stories of Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="apl-card p-7 fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} fill="oklch(0.72 0.18 75)" style={{ color: "oklch(0.72 0.18 75)" }} />
                  ))}
                </div>
                <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "0.9rem", marginBottom: "1.5rem", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "oklch(0.72 0.18 75)" }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Previews */}
      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div className="fade-up">
              <div className="section-label">Latest Stories</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem" }}>
                From the Field
              </h2>
            </div>
            <Link href="/blog">
              <span className="btn-outline-gold fade-up" style={{ transitionDelay: "150ms" }}>
                Read All Stories <ChevronRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreviews.map((post, i) => (
              <div key={i} className="apl-card overflow-hidden fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div style={{ fontSize: "0.72rem", color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    {post.category}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: "white", lineHeight: "1.4", marginBottom: "0.5rem" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "oklch(0.55 0 0)", lineHeight: "1.6", marginBottom: "1rem" }}>{post.excerpt}</p>
                  <div style={{ fontSize: "0.75rem", color: "oklch(0.45 0 0)" }}>{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "oklch(0.72 0.18 75)" }}>
        <div className="container text-center">
          <div className="fade-up">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "oklch(0.08 0 0)", marginBottom: "1rem" }}>
              Join the Movement. Save a Life.
            </h2>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.1rem", color: "oklch(0.2 0 0)", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: "1.7" }}>
              Whether you adopt, foster, volunteer, or donate — every action you take changes an animal's life forever.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/volunteer">
              <span className="btn-gold" style={{ background: "oklch(0.08 0 0)", color: "oklch(0.72 0.18 75)", padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                <Users size={16} /> Join APL
              </span>
            </Link>
            <Link href="/adoption">
              <span className="btn-outline-gold" style={{ borderColor: "oklch(0.08 0 0)", color: "oklch(0.08 0 0)", padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                <HomeIcon size={16} /> Adopt Today
              </span>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
