import { useEffect } from "react";
import { Link } from "wouter";
import { Heart, Stethoscope, Brain, Hammer, Home as HomeIcon, ChevronRight } from "lucide-react";

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

const roles = [
  { title: "Veterinary Volunteer", cta: "Join Vets", href: "https://forms.gle/QXiNUJKYf7xYT9Rw5", whatsapp: "https://chat.whatsapp.com/FOZcjul6a6cLW46WLxgqWb?mode=gi_t", desc: "Provide veterinary care, medical treatment, and health monitoring for rescued animals." },
  { title: "Rehabilitation Coordinator", cta: "Lead Rehab", href: "https://forms.gle/tRN3jRYrMobVPo1G9", whatsapp: "https://chat.whatsapp.com/KaqihWuzU1u3F5Hska9yHW?mode=gi_t", desc: "Oversee the rehabilitation process from intake to recovery and adoption readiness." },
  { title: "Dog & Animal Trainer", cta: "Train Dogs", href: "https://forms.gle/UpNdpRuyU7oERWX97", whatsapp: "https://chat.whatsapp.com/INljkmx7jBxBgjEjjVcy6r?mode=gi_t", desc: "Provide behavioral rehabilitation and obedience training for rescued animals." },
  { title: "Builder / Fundi / Materials Volunteer", cta: "Build With Us", href: "https://forms.gle/auEntmxXCsu9Fic26", whatsapp: "https://chat.whatsapp.com/Hfcsoq3wUeo0gDaeDXrwQ0?mode=gi_t", desc: "Help build and maintain kennel facilities, enclosures, and shelter infrastructure." },
  { title: "Foster Care Volunteer", cta: "Become Foster", href: "https://forms.gle/Dcpq4yPMHqGeR6BN8", whatsapp: "https://chat.whatsapp.com/JdMp0sdITjF3q4EWAiWCSx?mode=gi_t", desc: "Provide temporary home care for animals recovering from trauma or illness." },
  { title: "Rehabilitation Admin & Records", cta: "Support Rehab", href: "https://forms.gle/hA7VGgVJNmKAGtW16", whatsapp: "https://chat.whatsapp.com/BSdDhYrFMRZ8vLnJJIfmBr?mode=gi_t", desc: "Manage animal records, medical histories, and rehabilitation progress tracking." },
  { title: "Rehabilitation Planner", cta: "Plan Programs", href: "https://forms.gle/UNnSK1J9bqt5uN479", whatsapp: "https://chat.whatsapp.com/FhdOu9Divj1CoDeir6eIw6?mode=gi_t", desc: "Design and implement rehabilitation programs, protocols, and recovery systems." },
];

const phases = [
  { phase: "01", title: "Emergency Intake", desc: "Animals arrive from rescue operations and receive immediate triage, pain management, and stabilisation." },
  { phase: "02", title: "Medical Care", desc: "Full veterinary assessment, treatment of injuries, vaccinations, deworming, and nutritional recovery." },
  { phase: "03", title: "Behavioral Rehab", desc: "Trained behaviorists and dog trainers work with animals to address trauma, fear, and aggression." },
  { phase: "04", title: "Socialisation", desc: "Animals are gradually introduced to human contact, other animals, and domestic environments." },
  { phase: "05", title: "Adoption Ready", desc: "Once fully recovered and assessed, animals are listed for adoption with detailed profiles." },
];

export default function Rehabilitation() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/rehabilitation-care-XQRjkcWEWUBnDhm3tvCHHo.webp)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Stabilise & Recover</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              <span style={{ color: "oklch(0.72 0.18 75)" }}>Rehabilitation</span> & Recovery
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              Every rescued animal deserves a full recovery. Our rehabilitation program combines veterinary medicine, behavioral therapy, and compassionate care to give animals a second chance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://forms.gle/QXiNUJKYf7xYT9Rw5" target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Heart size={16} /> Join Vets
                </span>
              </a>
              <Link href="/foster">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <HomeIcon size={16} /> Become Foster
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="text-center mb-14 fade-up">
            <div className="section-label">The Journey to Recovery</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              Our Rehabilitation Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((phase, i) => (
              <div key={i} className="apl-card p-5 text-center fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold" style={{ background: "oklch(0.72 0.18 75 / 0.12)", color: "oklch(0.72 0.18 75)", fontFamily: "'Playfair Display', serif" }}>
                  {phase.phase}
                </div>
                <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{phase.title}</h4>
                <p style={{ fontSize: "0.78rem", color: "oklch(0.55 0 0)", lineHeight: "1.5" }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label">What We Provide</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Comprehensive Care
              </h2>
              <div className="space-y-5">
                {[
                  { Icon: Stethoscope, title: "Veterinary Medicine", desc: "Full medical care including surgery, wound treatment, vaccinations, parasite control, and nutritional rehabilitation." },
                  { Icon: Brain, title: "Behavioral Therapy", desc: "Professional behavioral assessment and rehabilitation for animals suffering from trauma, fear, or aggression." },
                  { Icon: Heart, title: "Dog Training", desc: "Obedience training and socialisation programs that prepare animals for life in a loving home." },
                  { Icon: Hammer, title: "Facility Support", desc: "Our kennels and recovery spaces are built and maintained by skilled volunteer builders and fundis." },
                ].map((item, i) => {
                  const Icon = item.Icon;
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.72 0.18 75 / 0.12)", color: "oklch(0.72 0.18 75)" }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", marginBottom: "0.3rem" }}>{item.title}</h4>
                        <p style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", lineHeight: "1.6" }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/rehabilitation-care-XQRjkcWEWUBnDhm3tvCHHo.webp"
                  alt="Kenyan veterinarian providing medical care to a rescued dog at Mr. Black APL rehabilitation center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Join the Team</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              Rehabilitation Volunteer Roles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((role, i) => (
              <div key={i} className="apl-card p-6 fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "1rem", marginBottom: "0.5rem" }}>{role.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "oklch(0.55 0 0)", lineHeight: "1.6", marginBottom: "1.2rem" }}>{role.desc}</p>
                <div className="flex gap-2">
                  <a href={role.href} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <span className="btn-gold" style={{ padding: "0.5rem 0.8rem", fontSize: "0.75rem", display: "block", textAlign: "center" }}>
                      {role.cta} <ChevronRight size={13} />
                    </span>
                  </a>
                  {role.whatsapp && (
                    <a href={role.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <span style={{ padding: "0.5rem 0.8rem", fontSize: "0.75rem", display: "block", textAlign: "center", background: "oklch(0.35 0.15 142 / 0.2)", color: "oklch(0.65 0.15 142)", borderRadius: "0.35rem", fontWeight: 600, cursor: "pointer" }}>
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
    </div>
  );
}
