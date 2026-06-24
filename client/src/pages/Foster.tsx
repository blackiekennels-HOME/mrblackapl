import { ButtonWithLoader } from "@/components/ButtonWithLoader";
import { useEffect } from "react";
import { Link } from "wouter";
import { Heart, Home as HomeIcon, CheckCircle, ChevronRight } from "lucide-react";

const WHATSAPP_FOSTER = "https://chat.whatsapp.com/JdMp0sdITjF3q4EWAiWCSx?mode=gi_t";
const FOSTER_FORM = "https://forms.gle/Dcpq4yPMHqGeR6BN8";
const FOSTER_GROUP = "https://chat.whatsapp.com/JdMp0sdITjF3q4EWAiWCSx?mode=gi_t";

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

const benefits = [
  { title: "Save Lives Without Commitment", desc: "Fostering provides a safe home for animals while we find them permanent families — no long-term commitment required." },
  { title: "Full Support Provided", desc: "We provide food, medical care, and all supplies. You provide the love and a safe space." },
  { title: "Make a Real Difference", desc: "Foster animals recover faster in a home environment than in a shelter. Your home is their healing space." },
  { title: "Trial Before Adoption", desc: "Many fosters fall in love and become permanent adopters. It's a great way to see if a pet is right for you." },
];

const faqItems = [
  { q: "Do I need experience with animals?", a: "No prior experience is required. We provide full training, guidance, and ongoing support throughout your fostering journey." },
  { q: "Who pays for food and veterinary care?", a: "Mr. Black APL covers all veterinary costs and provides food and essential supplies. You provide the home, love, and time." },
  { q: "How long will I foster an animal?", a: "Foster periods vary from a few weeks to a few months, depending on the animal's recovery and adoption timeline." },
  { q: "Can I foster if I already have pets?", a: "Yes, in many cases. We carefully match animals with foster homes based on compatibility with existing pets." },
  { q: "What if I want to keep the animal?", a: "Wonderful! Many of our fosters become permanent adopters. We call it a 'foster fail' — and it's the best kind." },
];

export default function Foster() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1200&q=80)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Open Your Home</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Foster a <span style={{ color: "oklch(0.72 0.18 75)" }}>Rescued</span> Animal
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              Fostering is one of the most powerful ways to support animal rescue. By opening your home temporarily, you give a rescued animal the safe, loving environment they need to heal and thrive.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={FOSTER_FORM} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <HomeIcon size={16} /> Become Foster
                </span>
              </a>
              <a href={FOSTER_GROUP} target="_blank" rel="noopener noreferrer">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Join Group
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Why Foster?</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              The Power of Foster Care
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((item, i) => (
              <div key={i} className="apl-card p-6 flex gap-4 fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <CheckCircle size={22} style={{ color: "oklch(0.72 0.18 75)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", marginBottom: "0.4rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foster Application */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="fade-up">
              <div className="section-label">Apply Now</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Foster Application
              </h2>
              <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", marginBottom: "2rem", fontFamily: "'Source Sans 3', sans-serif" }}>
                Fill in our foster application form to begin the process. We'll review your application and match you with a suitable animal based on your home, lifestyle, and experience.
              </p>
              <a href={FOSTER_FORM} target="_blank" rel="noopener noreferrer" className="block mb-4">
                <span className="btn-gold w-full justify-center" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <HomeIcon size={16} /> Open Foster Application Form
                </span>
              </a>
              <a href={WHATSAPP_FOSTER} target="_blank" rel="noopener noreferrer" className="block">
                <span className="btn-outline-gold w-full justify-center" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Chat With Us First
                </span>
              </a>
            </div>

            {/* FAQ */}
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <div className="section-label">Common Questions</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Foster FAQs
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <div key={i} className="apl-card p-5">
                    <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{faq.q}</h4>
                    <p style={{ fontSize: "0.83rem", color: "oklch(0.6 0 0)", lineHeight: "1.6" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.72 0.18 75)" }}>
        <div className="container text-center fade-up">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "oklch(0.08 0 0)", marginBottom: "1rem" }}>
            Your Home Could Save a Life
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.2 0 0)", marginBottom: "1.5rem", maxWidth: "450px", margin: "0 auto 1.5rem" }}>
            Every foster placement frees up space for another rescue. Be the bridge between suffering and a forever home.
          </p>
          <a href={FOSTER_FORM} target="_blank" rel="noopener noreferrer">
            <span className="btn-gold" style={{ background: "oklch(0.08 0 0)", color: "oklch(0.72 0.18 75)", padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
              <Heart size={15} /> Apply to Foster Today
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
