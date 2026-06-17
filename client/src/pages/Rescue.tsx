import { useEffect } from "react";
import { Link } from "wouter";
import { AlertTriangle, Phone, Users, Truck, MapPin, Shield, ChevronRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/254794277833?text=EMERGENCY%3A%20I%20need%20to%20report%20an%20animal%20in%20need.";

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
  { title: "Rescue Volunteer", cta: "Join Rescue", href: "https://docs.google.com/forms/d/e/1FAIpQLSf_rescue_volunteer/viewform", desc: "Join our frontline rescue teams responding to emergency calls across Kenya." },
  { title: "Transport & Vehicle Volunteer", cta: "Offer Transport", href: "https://docs.google.com/forms/d/e/1FAIpQLSf_transport/viewform", desc: "Provide transport for rescued animals to veterinary facilities and shelters." },
  { title: "Rescue Coordinator", cta: "Lead Rescue", href: "https://docs.google.com/forms/d/e/1FAIpQLSf_coordinator/viewform", desc: "Coordinate rescue operations, manage teams, and liaise with veterinary support." },
  { title: "Area Scout (Community Spotter)", cta: "Scout Areas", href: "https://docs.google.com/forms/d/e/1FAIpQLSf_scout/viewform", desc: "Be the eyes and ears in your community — report animals in need before it's too late." },
  { title: "Veterinary Assistant (Rescue Support)", cta: "Assist Rescue", href: "https://docs.google.com/forms/d/e/1FAIpQLSf_vet_assist/viewform", desc: "Provide on-site veterinary first aid and medical assessment during rescue operations." },
];

const steps = [
  { step: "01", title: "Report", desc: "Contact us via WhatsApp, phone, or the form below with the animal's location and condition." },
  { step: "02", title: "Assess", desc: "Our team assesses the situation remotely and dispatches the nearest available rescue unit." },
  { step: "03", title: "Rescue", desc: "Trained volunteers arrive on-site, secure the animal safely, and provide immediate first aid." },
  { step: "04", title: "Transport", desc: "The animal is transported to our rehabilitation facility or partner veterinary clinic." },
];

export default function Rescue() {
  useScrollReveal();
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/rescue-operations-AzVQw34eC557piXMjrZNEi.webp)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.6) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Emergency Response</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Rescue <span style={{ color: "oklch(0.58 0.22 27)" }}>Operations</span>
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              If you've seen an abandoned, injured, or abused animal anywhere in Kenya — act now. Our rescue teams are ready to respond.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <span className="btn-urgent" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <AlertTriangle size={16} /> Report Now
                </span>
              </a>
              <a href="tel:+254794277833">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Phone size={16} /> Call +254 794 277 833
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Report Form */}
      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="fade-up">
              <div className="section-label">Report an Animal</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Emergency Reporting System
              </h2>
              <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", marginBottom: "2rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                Use the form below to report an animal in need. Provide as much detail as possible — location, condition, and any photos if available. For immediate emergencies, contact us directly on WhatsApp.
              </p>
              <div className="space-y-4">
                <div>
                  <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-sm text-white placeholder-gray-500 outline-none focus:ring-2"
                    style={{ background: "oklch(0.14 0 0)", border: "1px solid oklch(1 0 0 / 10%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-4 py-3 rounded-sm text-white placeholder-gray-500 outline-none"
                    style={{ background: "oklch(0.14 0 0)", border: "1px solid oklch(1 0 0 / 10%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                    Animal Location *
                  </label>
                  <input
                    type="text"
                    placeholder="Street, area, landmark, county"
                    className="w-full px-4 py-3 rounded-sm text-white placeholder-gray-500 outline-none"
                    style={{ background: "oklch(0.14 0 0)", border: "1px solid oklch(1 0 0 / 10%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                    Animal Condition
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the animal's condition, injuries, behaviour, and any other relevant details..."
                    className="w-full px-4 py-3 rounded-sm text-white placeholder-gray-500 outline-none resize-none"
                    style={{ background: "oklch(0.14 0 0)", border: "1px solid oklch(1 0 0 / 10%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                  />
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <span className="btn-urgent w-full justify-center" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                    <AlertTriangle size={16} /> Submit via WhatsApp
                  </span>
                </a>
                <p style={{ fontSize: "0.78rem", color: "oklch(0.45 0 0)", textAlign: "center", fontFamily: "'Source Sans 3', sans-serif" }}>
                  This will open WhatsApp with your report pre-filled. For life-threatening emergencies, call directly.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <div className="section-label">The Process</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "2rem" }}>
                How Rescue Works
              </h2>
              <div className="space-y-5">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center font-bold" style={{ background: "oklch(0.72 0.18 75 / 0.12)", color: "oklch(0.72 0.18 75)", fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>
                      {step.step}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", marginBottom: "0.3rem" }}>{step.title}</h4>
                      <p style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", lineHeight: "1.6" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-sm" style={{ background: "oklch(0.58 0.22 27 / 0.1)", border: "1px solid oklch(0.58 0.22 27 / 0.3)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle size={18} style={{ color: "oklch(0.58 0.22 27)" }} />
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "oklch(0.58 0.22 27)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Life-Threatening Emergency?</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.65 0 0)", lineHeight: "1.6" }}>
                  If an animal is in immediate danger, call or WhatsApp us directly at <a href="tel:+254794277833" style={{ color: "oklch(0.72 0.18 75)" }}>+254 794 277 833</a>. We respond 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Join the Team</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              Rescue Volunteer Roles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((role, i) => (
              <div key={i} className="apl-card p-6 fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "1rem", marginBottom: "0.5rem" }}>{role.title}</h3>
                <p style={{ fontSize: "0.83rem", color: "oklch(0.55 0 0)", lineHeight: "1.6", marginBottom: "1.2rem" }}>{role.desc}</p>
                <a href={role.href} target="_blank" rel="noopener noreferrer">
                  <span className="btn-gold" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem" }}>
                    {role.cta} <ChevronRight size={13} />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
