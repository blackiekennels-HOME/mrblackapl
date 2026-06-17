import { useEffect } from "react";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const WHATSAPP = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20have%20an%20enquiry.";
const CONTACT_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSf_contact/viewform";

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

export default function Contact() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.98) 0%, oklch(0.08 0 0 / 0.7) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Get In Touch</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Contact <span style={{ color: "oklch(0.72 0.18 75)" }}>Mr. Black APL</span>
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              Whether you need to report an animal in need, enquire about adoption, or want to get involved — we're here. The fastest way to reach us is always WhatsApp.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                <MessageCircle size={16} /> Chat WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 fade-up">
            {[
              { Icon: MessageCircle, label: "WhatsApp", value: "+254 794 277 833", href: WHATSAPP, color: "oklch(0.55 0.16 160)" },
              { Icon: Mail, label: "Email", value: "info@mrblackapl.co.ke", href: "mailto:info@mrblackapl.co.ke", color: "oklch(0.72 0.18 75)" },
              { Icon: Phone, label: "Phone", value: "+254 794 277 833", href: "tel:+254794277833", color: "oklch(0.58 0.22 27)" },
              { Icon: MapPin, label: "Address", value: "2nd Sunrise Ave, Nairobi, Kenya", href: "https://maps.google.com/?q=Nairobi+Kenya", color: "oklch(0.65 0.15 300)" },
            ].map((item, i) => {
              const Icon = item.Icon;
              return (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="apl-card p-6 text-center block" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}20`, color: item.color }}>
                    <Icon size={22} />
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "0.3rem" }}>{item.label}</div>
                  <div style={{ fontSize: "0.82rem", color: "oklch(0.6 0 0)" }}>{item.value}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-16" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map */}
            <div className="fade-up">
              <div className="section-label">Find Us</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Our Location
              </h2>
              <div className="apl-card overflow-hidden" style={{ height: "350px" }}>
                <iframe
                  title="Mr. Black APL Location — Nairobi, Kenya"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743965!2d36.68258!3d-1.30320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 apl-card p-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} style={{ color: "oklch(0.72 0.18 75)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem" }}>Mr. Black Animal Protection League</div>
                    <div style={{ fontSize: "0.82rem", color: "oklch(0.6 0 0)", marginTop: "0.25rem" }}>2nd Sunrise Avenue, Nairobi, Kenya 00100</div>
                    <div style={{ fontSize: "0.82rem", color: "oklch(0.6 0 0)" }}>Operating across all 47 counties of Kenya</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <div className="section-label">Send a Message</div>
              <div className="gold-line" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                How Can We Help?
              </h2>
              <div className="space-y-4 mb-6">
                {[
                  { title: "Report an Animal Emergency", desc: "Found an injured or abandoned animal? Contact us immediately on WhatsApp.", cta: "Report Now", href: "https://wa.me/254794277833?text=EMERGENCY%3A%20I%20need%20to%20report%20an%20animal%20in%20need." },
                  { title: "Adoption Enquiry", desc: "Interested in adopting one of our animals? Chat with us to start the process.", cta: "Enquire", href: "https://wa.me/254794277833?text=Hello%2C%20I%20am%20interested%20in%20adopting%20an%20animal." },
                  { title: "Volunteer Application", desc: "Want to join our team? We have 28 volunteer roles across all areas.", cta: "Volunteer", href: "/volunteer" },
                  { title: "Donation & Partnerships", desc: "Want to donate or partner with us? We'd love to hear from you.", cta: "Get In Touch", href: WHATSAPP },
                ].map((item, i) => (
                  <div key={i} className="apl-card p-5">
                    <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "0.3rem" }}>{item.title}</h4>
                    <p style={{ fontSize: "0.82rem", color: "oklch(0.55 0 0)", lineHeight: "1.5", marginBottom: "0.75rem" }}>{item.desc}</p>
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">
                      <span className="btn-gold" style={{ padding: "0.4rem 1rem", fontSize: "0.72rem" }}>
                        {item.cta}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="apl-card p-5">
                <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "0.75rem" }}>Follow Us</h4>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { name: "Facebook", href: "https://facebook.com/mrblackapl" },
                    { name: "Instagram", href: "https://instagram.com/mrblackapl" },
                    { name: "Twitter/X", href: "https://twitter.com/mrblackapl" },
                    { name: "TikTok", href: "https://tiktok.com/@mrblackapl" },
                    { name: "YouTube", href: "https://youtube.com/@mrblackapl" },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                      <span className="btn-outline-gold" style={{ padding: "0.4rem 0.9rem", fontSize: "0.72rem" }}>
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12" style={{ background: "oklch(0.58 0.22 27)" }}>
        <div className="container text-center fade-up">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "white", marginBottom: "0.75rem" }}>
            Animal Emergency? Contact Us Immediately.
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.9 0 0)", marginBottom: "1.2rem" }}>
            Our rescue team is on standby. WhatsApp is the fastest way to reach us.
          </p>
          <a href="https://wa.me/254794277833?text=EMERGENCY%3A%20I%20need%20to%20report%20an%20animal%20in%20need." target="_blank" rel="noopener noreferrer">
            <span className="btn-gold" style={{ background: "white", color: "oklch(0.58 0.22 27)", padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
              <MessageCircle size={15} /> Report Emergency Now
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
