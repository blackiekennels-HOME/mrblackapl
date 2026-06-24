import { ButtonWithLoader } from "@/components/ButtonWithLoader";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Heart, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";

const WHATSAPP_ADOPT = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20am%20interested%20in%20adopting%20an%20animal.";

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

const adoptionRoles = [
  { title: "Adoption Coordinator", cta: "Coordinate Adoptions", href: "https://forms.gle/eMtA8bMaz3w9A3Ed6", whatsapp: "https://chat.whatsapp.com/Ktan8LRFDONCFleOcElDCd?mode=gi_t", desc: "Match animals with suitable adopters, conduct home checks, and manage the adoption process." },
  { title: "Adoption Screening", cta: "Screen Adopters", href: "https://forms.gle/3Lx1Lg82aBMRrpdG6", whatsapp: "https://chat.whatsapp.com/BdcgHMNpwJiG3BaiSTEJya?mode=gi_t", desc: "Screen potential adopters to ensure animals go to safe, loving homes." },
  { title: "Adoption Media", cta: "Create Listings", href: "https://forms.gle/n4TDVQYWWyJHpoC18", whatsapp: "https://chat.whatsapp.com/HJ5pt0nnaxo9vvrmiReYpy?mode=gi_t", desc: "Create compelling photos and listings to showcase available animals." },
  { title: "Adoption Events", cta: "Plan Events", href: "https://forms.gle/GbMDM1bROLj9K1AbX8WAno?mode=gi_t", whatsapp: "https://chat.whatsapp.com/GbMDM1bROLj9K1AbX8WAno?mode=gi_t", desc: "Organize adoption drives and community events to connect animals with families." },
  { title: "Post-Adoption Follow-Up", cta: "Follow Up", href: "https://forms.gle/cW4YfLVBTaGWswBY8", whatsapp: "https://chat.whatsapp.com/GRu7pGnhrqA8ECraF2ia2M?mode=gi_t", desc: "Check in with adopters post-adoption to ensure animals are settling in well." },
];

const steps = [
  { step: "01", title: "Browse Animals", desc: "View our available animals and find one that matches your lifestyle and family." },
  { step: "02", title: "Apply to Adopt", desc: "Complete our adoption application form with details about your home and lifestyle." },
  { step: "03", title: "Home Check", desc: "Our team conducts a friendly home visit to ensure a safe environment for the animal." },
  { step: "04", title: "Meet & Greet", desc: "Spend time with your chosen animal to ensure a good match before finalising." },
  { step: "05", title: "Welcome Home", desc: "Collect your new family member with all their medical records and care guidance." },
];

const animals = [
  { name: "Kali", breed: "German Shepherd Mix", age: "2 years", gender: "Male", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", desc: "Energetic and loyal. Great with children and other dogs. Fully vaccinated.", tags: ["Vaccinated", "Good with kids", "Active"] },
  { name: "Amara", breed: "Labrador Mix", age: "1 year", gender: "Female", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80", desc: "Gentle and affectionate. Loves cuddles and long walks. Great first dog.", tags: ["Vaccinated", "Gentle", "First-time owner"] },
  { name: "Simba", breed: "Boerboel Mix", age: "3 years", gender: "Male", img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&q=80", desc: "Calm and protective. Perfect for a family home with a garden.", tags: ["Vaccinated", "Calm", "Family dog"] },
  { name: "Luna", breed: "Mixed Breed", age: "6 months", gender: "Female", img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&q=80", desc: "Playful puppy full of energy. Loves to learn and play.", tags: ["Puppy", "Playful", "Trainable"] },
  { name: "Rex", breed: "Rottweiler Mix", age: "4 years", gender: "Male", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80", desc: "Loyal and intelligent. Needs an experienced owner with space.", tags: ["Vaccinated", "Experienced owner", "Loyal"] },
  { name: "Bella", breed: "Cocker Spaniel Mix", age: "2 years", gender: "Female", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", desc: "Sweet and gentle. Perfect apartment dog. Gets along with cats.", tags: ["Vaccinated", "Apartment-friendly", "Cat-friendly"] },
];

// Photo gallery data for animals
const adoptionPhotos = animals.map((animal) => ({
  id: animal.name.toLowerCase(),
  src: animal.img,
  alt: `${animal.name} — ${animal.breed} available for adoption`,
  title: `${animal.name} (${animal.breed})`,
  category: animal.age.includes("months") ? "Puppies" : "Adult Dogs",
}));

export default function Adoption() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/adoption-happy-mNqkAqZMdpofB2TKaZ8ea7.webp)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Find Your Forever Friend</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Adopt a <span style={{ color: "oklch(0.72 0.18 75)" }}>Rescued</span> Animal
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              Every animal in our care has a story. They've been rescued, rehabilitated, and are ready to fill your home with unconditional love. Choose adoption — choose to save a life.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://forms.gle/hgmicEbd8J6Ro7xJ6" target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Heart size={16} /> Adopt Today
                </span>
              </a>
              <Link href="/foster">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Foster First
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Adopt */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 fade-up">
            {[
              { title: "Save a Life", desc: "Every adoption directly saves an animal from suffering and creates space for another rescue." },
              { title: "Fully Vetted", desc: "All our animals are vaccinated, dewormed, and health-checked before adoption." },
              { title: "Ongoing Support", desc: "We provide post-adoption support, guidance, and follow-up to ensure a smooth transition." },
            ].map((item, i) => (
              <div key={i} className="apl-card p-6 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <CheckCircle size={28} style={{ color: "oklch(0.72 0.18 75)", margin: "0 auto 1rem" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "white", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="mb-12">
            <div className="section-label fade-up">Meet Our Animals</div>
            <div className="gold-line" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              Animals Ready for <span style={{ color: "oklch(0.72 0.18 75)" }}>Adoption</span>
            </h2>
            <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.7", fontFamily: "'Source Sans 3', sans-serif", marginTop: "1rem" }}>
              Click any photo to view the full gallery. Each animal has been fully vaccinated, health-checked, and is ready to become part of your family.
            </p>
          </div>
          <PhotoGallery photos={adoptionPhotos} columns={3} showCategories={true} />
        </div>
      </section>

      {/* Adoption Process */}
      <section className="py-20" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">How It Works</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              The Adoption Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {steps.map((step, i) => (
              <div key={i} className="apl-card p-5 text-center fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold" style={{ background: "oklch(0.72 0.18 75 / 0.12)", color: "oklch(0.72 0.18 75)", fontFamily: "'Playfair Display', serif" }}>
                  {step.step}
                </div>
                <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{step.title}</h4>
                <p style={{ fontSize: "0.78rem", color: "oklch(0.55 0 0)", lineHeight: "1.5" }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center fade-up">
            <a href={WHATSAPP_ADOPT} target="_blank" rel="noopener noreferrer">
              <span className="btn-gold" style={{ padding: "0.85rem 2.5rem", fontSize: "0.85rem" }}>
                <Heart size={16} /> Start Your Adoption Journey <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Help More Animals Find Homes</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              Adoption Volunteer Roles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {adoptionRoles.map((role, i) => (
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
