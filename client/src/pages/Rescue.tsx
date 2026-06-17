import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AlertTriangle, Phone, Users, Truck, MapPin, Shield, ChevronRight, Camera, AlertCircle, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/254794277833?text=EMERGENCY%3A%20I%20need%20to%20report%20an%20animal%20in%20need.";
const EMERGENCY_FORM = "https://forms.gle/yj9zxGqVqYTtxaL16";

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
  { title: "Rescue Volunteer", cta: "Join Rescue", href: "https://forms.gle/jXa75Qt6qbTMwho66", desc: "Join our frontline rescue teams responding to emergency calls across Kenya." },
  { title: "Transport & Vehicle Volunteer", cta: "Offer Transport", href: "https://forms.gle/cwFjp32pqvfnMe5a8", desc: "Provide transport for rescued animals to veterinary facilities and shelters." },
  { title: "Rescue Coordinator", cta: "Lead Rescue", href: "https://forms.gle/exeTmTzWUCK1ZzB9A", desc: "Coordinate rescue operations, manage teams, and liaise with veterinary support." },
  { title: "Area Scout (Community Spotter)", cta: "Scout Areas", href: "https://forms.gle/FEKR4eEK42Agx4VY9", desc: "Be the eyes and ears in your community — report animals in need before it's too late." },
  { title: "Veterinary Assistant (Rescue Support)", cta: "Assist Rescue", href: "https://forms.gle/BG6CwTeBoFdPMzzo7", desc: "Provide on-site veterinary first aid and medical assessment during rescue operations." },
];

const steps = [
  { step: "01", title: "Report", desc: "Contact us via WhatsApp, phone, or the form below with the animal's location and condition." },
  { step: "02", title: "Assess", desc: "Our team assesses the situation remotely and dispatches the nearest available rescue unit." },
  { step: "03", title: "Rescue", desc: "Trained volunteers arrive on-site, secure the animal safely, and provide immediate first aid." },
  { step: "04", title: "Transport", desc: "The animal is transported to our rehabilitation facility or partner veterinary clinic." },
];

export default function Rescue() {
  const [emergencyType, setEmergencyType] = useState<"form" | "urgent">("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    animalType: "",
    condition: "",
    location: "",
    latitude: null as number | null,
    longitude: null as number | null,
    images: [] as File[],
  });

  useScrollReveal();

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          alert(`📍 Location captured: ${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
        },
        (error) => {
          alert("Unable to get location. Please enable location services.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData({
        ...formData,
        images: [...formData.images, ...newFiles].slice(0, 5),
      });
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleUrgentCall = () => {
    window.location.href = `tel:+254794277833`;
  };

  const handleUrgentWhatsApp = () => {
    const message = "🚨 EMERGENCY: I need to report an animal in immediate danger. Please respond urgently.";
    window.open(`https://wa.me/254794277833?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSubmitForm = () => {
    if (!formData.name || !formData.phone || !formData.animalType || !formData.condition || !formData.location) {
      alert("Please fill in all required fields");
      return;
    }
    window.open(EMERGENCY_FORM, "_blank");
  };

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

      {/* Emergency Type Selector */}
      <section className="py-12" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-up">
              {[
                { type: "form" as const, label: "Standard Report", desc: "Provide details with location & photos", icon: "📋" },
                { type: "urgent" as const, label: "🚨 HOT Emergency", desc: "Animal in immediate danger - CALL NOW", icon: "🚨" },
              ].map((option) => (
                <button
                  key={option.type}
                  onClick={() => setEmergencyType(option.type)}
                  className="p-6 rounded-lg transition-all text-left"
                  style={{
                    background: emergencyType === option.type ? "oklch(0.72 0.18 75 / 0.15)" : "oklch(0.12 0 0)",
                    border: `2px solid ${emergencyType === option.type ? "oklch(0.72 0.18 75)" : "oklch(0.2 0 0)"}`,
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{option.icon}</div>
                  <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", marginBottom: "0.25rem" }}>
                    {option.label}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    {option.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOT Emergency Section */}
      {emergencyType === "urgent" && (
        <section className="py-16" style={{ background: "oklch(0.08 0 0)" }}>
          <div className="container">
            <div className="max-w-2xl mx-auto fade-up">
              <div className="apl-card p-8" style={{ background: "oklch(0.12 0 0)", border: "2px solid #EF4444" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <AlertCircle size={32} style={{ color: "#EF4444" }} />
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "1.8rem", color: "#EF4444" }}>
                    IMMEDIATE ACTION REQUIRED
                  </h2>
                </div>
                <p style={{ fontSize: "1rem", color: "oklch(0.7 0 0)", marginBottom: "2rem", fontFamily: "'Source Sans 3', sans-serif", lineHeight: "1.8" }}>
                  If an animal is in immediate danger (hit by vehicle, severe injury, drowning, etc.), contact our rescue team NOW. Do not wait for form submission.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={handleUrgentCall}
                    className="p-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                    style={{ background: "#EF4444", color: "white", fontWeight: 700, fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    <Phone size={20} /> CALL NOW: +254 794 277 833
                  </button>
                  <button
                    onClick={handleUrgentWhatsApp}
                    className="p-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                    style={{ background: "#25D366", color: "white", fontWeight: 700, fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    <MessageCircle size={20} /> WHATSAPP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Standard Report Form */}
      {emergencyType === "form" && (
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
                  Provide location with GPS coordinates, animal condition details, and photos. Our team will respond within 24 hours.
                </p>
                <div className="space-y-4">
                  <div>
                    <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-3 rounded-sm text-white placeholder-gray-500 outline-none"
                      style={{ background: "oklch(0.14 0 0)", border: "1px solid oklch(1 0 0 / 10%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                      Animal Type *
                    </label>
                    <select
                      value={formData.animalType}
                      onChange={(e) => setFormData({ ...formData, animalType: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "oklch(0.14 0 0)",
                        border: "1px solid oklch(1 0 0 / 10%)",
                        borderRadius: "0.125rem",
                        color: "white",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      <option value="">Select animal type...</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                      Animal Condition *
                    </label>
                    <textarea
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      rows={3}
                      placeholder="Describe injuries, behavior, and condition..."
                      className="w-full px-4 py-3 rounded-sm text-white placeholder-gray-500 outline-none resize-none"
                      style={{ background: "oklch(0.14 0 0)", border: "1px solid oklch(1 0 0 / 10%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                      Location (Street, Area, Landmark, County) *
                    </label>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Enter location details"
                        className="flex-1 px-4 py-3 rounded-sm text-white placeholder-gray-500 outline-none"
                        style={{ background: "oklch(0.14 0 0)", border: "1px solid oklch(1 0 0 / 10%)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                      />
                      <button
                        type="button"
                        onClick={handleLocationClick}
                        className="px-4 py-3 rounded-sm flex items-center gap-2 transition-all"
                        style={{ background: "oklch(0.72 0.18 75)", color: "oklch(0.08 0 0)", fontWeight: 600, fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                      >
                        <MapPin size={18} /> Pin
                      </button>
                    </div>
                    {formData.latitude && formData.longitude && (
                      <p style={{ fontSize: "0.8rem", color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif" }}>
                        📍 {formData.latitude.toFixed(4)}, {formData.longitude.toFixed(4)}
                      </p>
                    )}
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.6 0 0)", marginBottom: "0.5rem" }}>
                      Upload Photos (Max 5)
                    </label>
                    <div
                      style={{
                        border: "2px dashed oklch(0.72 0.18 75 / 0.3)",
                        borderRadius: "0.5rem",
                        padding: "1.5rem",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" style={{ cursor: "pointer", display: "block" }}>
                        <Camera size={24} style={{ margin: "0 auto 0.5rem", color: "oklch(0.72 0.18 75)" }} />
                        <p style={{ color: "white", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>
                          Click to upload photos
                        </p>
                        <p style={{ fontSize: "0.75rem", color: "oklch(0.6 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                          PNG, JPG up to 10MB each
                        </p>
                      </label>
                    </div>
                    {formData.images.length > 0 && (
                      <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))", gap: "0.5rem" }}>
                        {formData.images.map((img, i) => (
                          <div key={i} style={{ position: "relative" }}>
                            <img
                              src={URL.createObjectURL(img)}
                              alt={`Preview ${i}`}
                              style={{ width: "100%", height: "60px", objectFit: "cover", borderRadius: "0.25rem" }}
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(i)}
                              style={{
                                position: "absolute",
                                top: "-8px",
                                right: "-8px",
                                background: "#EF4444",
                                color: "white",
                                border: "none",
                                borderRadius: "50%",
                                width: "20px",
                                height: "20px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                              }}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmitForm}
                    className="w-full py-3 rounded-sm font-bold transition-all"
                    style={{ background: "oklch(0.72 0.18 75)", color: "oklch(0.08 0 0)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                  >
                    Submit Emergency Report
                  </button>
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
      )}

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
