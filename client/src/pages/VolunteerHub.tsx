import { useEffect } from "react";
import { Link } from "wouter";
import { Users, ChevronRight, ExternalLink } from "lucide-react";

const WHATSAPP_VOLUNTEER = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20want%20to%20volunteer.";

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

// All 28 volunteer forms
const volunteerCategories = [
  {
    category: "Rescue — Field Operations",
    color: "oklch(0.58 0.22 27)",
    roles: [
      { title: "Report an Animal in Need", cta: "Report Now", form: "https://forms.gle/yj9zxGqVqYTtxaL16", group: "https://chat.whatsapp.com/L38Et6xNgYsKfzLDZpU8LH?mode=gi_t", desc: "Report an abandoned, injured, or abused animal anywhere in Kenya." },
      { title: "Rescue Volunteer", cta: "Join Rescue", form: "https://forms.gle/jXa75Qt6qbTMwho66", group: "https://chat.whatsapp.com/L38Et6xNgYsKfzLDZpU8LH?mode=gi_t", desc: "Join our frontline rescue teams responding to emergency calls across Kenya." },
      { title: "Transport & Vehicle Volunteer", cta: "Offer Transport", form: "https://forms.gle/cwFjp32pqvfnMe5a8", group: "https://chat.whatsapp.com/Bcx67LTs6pLIKRLs4EERNa?mode=gi_t", desc: "Provide transport for rescued animals to veterinary facilities and shelters." },
      { title: "Rescue Coordinator", cta: "Lead Rescue", form: "https://forms.gle/exeTmTzWUCK1ZzB9A", group: "https://chat.whatsapp.com/KaqihWuzU1u3F5Hska9yHW?mode=gi_t", desc: "Coordinate rescue operations, manage teams, and liaise with veterinary support." },
      { title: "Area Scout (Community Spotter)", cta: "Scout Areas", form: "https://forms.gle/FEKR4eEK42Agx4VY9", group: "https://chat.whatsapp.com/Cj2tzD95HbE3HwHXOUFqsu?mode=gi_t", desc: "Be the eyes and ears in your community — report animals in need before it's too late." },
      { title: "Veterinary Assistant (Rescue Support)", cta: "Assist Rescue", form: "https://forms.gle/BG6CwTeBoFdPMzzo7", group: "https://chat.whatsapp.com/B6uay5EmbBjHV51ry9eK6y?mode=gi_t", desc: "Provide on-site veterinary first aid and medical assessment during rescue operations." },
    ],
  },
  {
    category: "Rehabilitation — Stabilise & Recover",
    color: "oklch(0.72 0.18 75)",
    roles: [
      { title: "Veterinary Volunteer", cta: "Join Vets", form: "https://forms.gle/QXiNUJKYf7xYT9Rw5", group: "https://chat.whatsapp.com/FOZcjul6a6cLW46WLxgqWb?mode=gi_t", desc: "Provide veterinary care, medical treatment, and health monitoring for rescued animals." },
      { title: "Rehabilitation Coordinator", cta: "Lead Rehab", form: "https://forms.gle/tRN3jRYrMobVPo1G9", group: "https://chat.whatsapp.com/KaqihWuzU1u3F5Hska9yHW?mode=gi_t", desc: "Oversee the rehabilitation process from intake to recovery and adoption readiness." },
      { title: "Dog & Animal Trainer", cta: "Train Dogs", form: "https://forms.gle/UpNdpRuyU7oERWX97", group: "https://chat.whatsapp.com/INljkmx7jBxBgjEjjVcy6r?mode=gi_t", desc: "Provide behavioral rehabilitation and obedience training for rescued animals." },
      { title: "Builder / Fundi / Materials Volunteer", cta: "Build With Us", form: "https://forms.gle/auEntmxXCsu9Fic26", group: "https://chat.whatsapp.com/Hfcsoq3wUeo0gDaeDXrwQ0?mode=gi_t", desc: "Help build and maintain kennel facilities, enclosures, and shelter infrastructure." },
      { title: "Foster Care Volunteer", cta: "Become Foster", form: "https://forms.gle/Dcpq4yPMHqGeR6BN8", group: "https://chat.whatsapp.com/JdMp0sdITjF3q4EWAiWCSx?mode=gi_t", desc: "Provide temporary home care for animals recovering from trauma or illness." },
      { title: "Rehabilitation Admin & Records", cta: "Support Rehab", form: "https://forms.gle/hA7VGgVJNmKAGtW16", group: "https://chat.whatsapp.com/BSdDhYrFMRZ8vLnJJIfmBr?mode=gi_t", desc: "Manage animal records, medical histories, and rehabilitation progress tracking." },
      { title: "Rehabilitation Planner", cta: "Plan Programs", form: "https://forms.gle/UNnSK1J9bqt5uN479", group: "https://chat.whatsapp.com/FhdOu9Divj1CoDeir6eIw6?mode=gi_t", desc: "Design and implement rehabilitation programs and systems for long-term animal recovery." },
    ],
  },
  {
    category: "Rehoming — Adoption & Follow-Up",
    color: "oklch(0.55 0.16 160)",
    roles: [
      { title: "Adoption Application", cta: "Adopt Today", form: "https://forms.gle/hgmicEbd8J6Ro7xJ6", group: "https://chat.whatsapp.com/Ktan8LRFDONCFleOcElDCd?mode=gi_t", desc: "Apply to adopt a rescued animal and give them a forever home." },
      { title: "Adoption Coordinator Volunteer", cta: "Coordinate Adoptions", form: "https://forms.gle/eMtA8bMaz3w9A3Ed6", group: "https://chat.whatsapp.com/Ktan8LRFDONCFleOcElDCd?mode=gi_t", desc: "Match animals with suitable adopters, conduct home checks, and manage the adoption process." },
      { title: "Adoption Screening Volunteer", cta: "Screen Adopters", form: "https://forms.gle/3Lx1Lg82aBMRrpdG6", group: "https://chat.whatsapp.com/BdcgHMNpwJiG3BaiSTEJya?mode=gi_t", desc: "Screen potential adopters to ensure animals go to safe, loving homes." },
      { title: "Adoption Media (Photography & Listings)", cta: "Create Listings", form: "https://forms.gle/n4TDVQYWWyJHpoC18", group: "https://chat.whatsapp.com/HJ5pt0nnaxo9vvrmiReYpy?mode=gi_t", desc: "Photograph animals and create compelling adoption listings to find them homes faster." },
      { title: "Post-Adoption Follow-Up Volunteer", cta: "Follow Up", form: "https://forms.gle/cW4YfLVBTaGWswBY8", group: "https://chat.whatsapp.com/GRu7pGnhrqA8ECraF2ia2M?mode=gi_t", desc: "Check in with adopters post-adoption to ensure animals are settling in well." },
    ],
  },
  {
    category: "Operations & Community Support",
    color: "oklch(0.55 0.14 220)",
    roles: [
      { title: "Project Manager Volunteer", cta: "Manage Projects", form: "https://forms.gle/GhMYe1cKaz2hNf1K7", group: "https://chat.whatsapp.com/DcnQ1GPuuwwGgydiR7MKIE?mode=gi_t", desc: "Lead and coordinate APL projects, ensuring smooth operations and timely delivery." },
      { title: "Customer Care & Communications Volunteer", cta: "Support Community", form: "https://forms.gle/RnySvTggJAFgPyJn9", group: "https://chat.whatsapp.com/IeN8B6mfsbFE8hkwsNZgXv?mode=gi_t", desc: "Respond to community enquiries, donor communications, and public outreach." },
      { title: "WhatsApp Group Moderator", cta: "Moderate Groups", form: "https://forms.gle/gPVi1dEHLmiCuBsV8", group: "https://chat.whatsapp.com/FhP8c13in5A44tZ8zBTWXS?mode=gi_t", desc: "Moderate APL WhatsApp groups, maintain community standards, and onboard new members." },
      { title: "Social Media & Content Volunteer", cta: "Create Content", form: "https://forms.gle/iHzeGgchJSvYYygP8", group: "https://chat.whatsapp.com/BlTjFLaup7GJN4veiauEht?mode=gi_t", desc: "Create compelling content, manage social media channels, and amplify APL's mission." },
      { title: "Events & Community Outreach Coordinator", cta: "Plan Events", form: "https://forms.gle/K462hMHjVLT3gm7z6", group: "https://chat.whatsapp.com/GbMDM1bROLj9K1AbX8WAno?mode=gi_t", desc: "Plan and coordinate community events, adoption drives, and fundraising activities." },
    ],
  },
  {
    category: "Funding & Partnerships",
    color: "oklch(0.65 0.15 300)",
    roles: [
      { title: "Donation Submission", cta: "GIVE Now", form: "https://forms.gle/3Cn41PQXGQFkXoc48", group: "https://chat.whatsapp.com/EfwI09DuFXlD4dCW5cIjgH?mode=gi_t", desc: "Make a direct donation to support animal rescue, rehabilitation, and rehoming in Kenya." },
      { title: "Patron Membership", cta: "Become Patron", form: "https://forms.gle/U5aHKtoRGPmeDLSq6", group: "https://chat.whatsapp.com/EYTjBaWTJhPLSdkQdFdPwe?mode=gi_t", desc: "Join as a monthly patron and provide consistent support for APL's ongoing operations." },
      { title: "Merchandise Partner Application", cta: "Partner Merch", form: "https://forms.gle/GiNZR13w1i51uhMT7", group: "https://chat.whatsapp.com/EzOGqUmMoRmGFMrEjftfRo?mode=gi_t", desc: "Partner with APL to create and sell merchandise that raises funds for animal welfare." },
      { title: "Corporate & Business Partnership", cta: "Explore Partnership", form: "https://forms.gle/GFpoEBfn37EDBauu9", group: "https://chat.whatsapp.com/KWaExSeue9Y7CUISgr1yc4?mode=gi_t", desc: "Explore corporate partnership opportunities, sponsorships, and CSR collaborations." },
      { title: "Land Donation for Mr. Black Centers", cta: "Offer Land", form: "https://forms.gle/hRPzh4QRrzNhDj1BA", group: "https://chat.whatsapp.com/GRAz14Ti7eC9XDBUpF4qui?mode=gi_t", desc: "Donate or lease land for future Mr. Black Rescue Centers across Kenya's counties." },
    ],
  },
];

export default function VolunteerHub() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Join the Movement</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              <span style={{ color: "oklch(0.72 0.18 75)" }}>Volunteer</span> Hub
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              There are 28 ways to make a difference. Whether you're a vet, a driver, a photographer, or just someone who cares — there's a role for you in the Mr. Black APL family.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_VOLUNTEER} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Users size={16} /> Join APL
                </span>
              </a>
              <Link href="/rescue">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Report an Animal
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "oklch(0.72 0.18 75)" }}>
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { n: "28", label: "Volunteer Roles" },
              { n: "200+", label: "Active Volunteers" },
              { n: "5", label: "Volunteer Teams" },
              { n: "47", label: "Counties Covered" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "2.5rem", color: "oklch(0.08 0 0)", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.2 0 0)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All 28 Roles */}
      {volunteerCategories.map((cat, ci) => (
        <section key={ci} className="py-16" style={{ background: ci % 2 === 0 ? "oklch(0.08 0 0)" : "oklch(0.06 0 0)" }}>
          <div className="container">
            <div className="mb-10 fade-up">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
                <div className="section-label" style={{ color: cat.color }}>{cat.category}</div>
              </div>
              <div style={{ width: "3rem", height: "2px", background: cat.color, margin: "0.5rem 0 0" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.roles.map((role, ri) => (
                <div key={ri} className="apl-card p-6 fade-up" style={{ transitionDelay: `${ri * 60}ms` }}>
                  <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "1rem", marginBottom: "0.5rem" }}>{role.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "oklch(0.55 0 0)", lineHeight: "1.6", marginBottom: "1.2rem" }}>{role.desc}</p>
                  <div className="flex gap-2">
                    <a href={role.form} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <span className="btn-gold dual-cta-primary" style={{ background: cat.color, padding: "0.45rem 0.8rem", fontSize: "0.72rem", display: "block", textAlign: "center" }}>
                        {role.cta} <ChevronRight size={12} />
                      </span>
                    </a>
                    {role.group && (
                      <a href={role.group} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <span className="dual-cta-secondary" style={{ padding: "0.45rem 0.8rem", fontSize: "0.72rem", display: "block", textAlign: "center", borderRadius: "0.35rem", fontWeight: 600 }}>
                          Join Group
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-16" style={{ background: "oklch(0.72 0.18 75)" }}>
        <div className="container text-center fade-up">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "oklch(0.08 0 0)", marginBottom: "1rem" }}>
            Not Sure Where to Start?
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.2 0 0)", marginBottom: "1.5rem", maxWidth: "450px", margin: "0 auto 1.5rem" }}>
            Chat with us on WhatsApp and we'll help you find the right volunteer role for your skills and availability.
          </p>
          <a href={WHATSAPP_VOLUNTEER} target="_blank" rel="noopener noreferrer">
            <span className="btn-gold" style={{ background: "oklch(0.08 0 0)", color: "oklch(0.72 0.18 75)", padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
              <Users size={15} /> Chat With Us
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
