import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "254794277833";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Mr.%20Black%20APL%2C%20I%20need%20help%20with%20an%20animal.`;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rescue", label: "Rescue" },
  { href: "/rehabilitation", label: "Rehabilitation" },
  { href: "/adoption", label: "Adoption" },
  { href: "/foster", label: "Foster" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.08 0 0)" }}>
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs" style={{ background: "oklch(0.06 0 0)", borderBottom: "1px solid oklch(1 0 0 / 6%)" }}>
        <div className="flex items-center gap-5" style={{ color: "oklch(0.6 0 0)" }}>
          <a href="mailto:info@mrblackapl.co.ke" className="flex items-center gap-1.5 hover:text-[oklch(0.72_0.18_75)] transition-colors">
            <Mail size={11} /> info@mrblackapl.co.ke
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={11} /> 2nd Sunrise Avenue, Nairobi, Kenya
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-semibold" style={{ color: "#25D366" }}>
            <Phone size={11} /> +254 794 277 833
          </a>
          <Link href="/donate">
            <span className="btn-gold" style={{ padding: "0.3rem 1rem", fontSize: "0.7rem" }}>Donate Now</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "oklch(0.08 0 0 / 0.97)" : "oklch(0.08 0 0)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid oklch(1 0 0 / 8%)",
          boxShadow: scrolled ? "0 4px 24px oklch(0 0 0 / 0.5)" : "none",
        }}
      >
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <img
                src="/manus-storage/MBAPL_Logo_-removebg-preview_ac34bdf4.png"
                alt="Mr. Black APL Logo"
                className="w-24 h-24 object-contain"
              />
              <div>
                <div className="font-bold text-white leading-tight whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem" }}>
                  Mr. Black <span style={{ color: "oklch(0.72 0.18 75)" }}>APL</span>
                </div>
                <div className="whitespace-nowrap" style={{ fontSize: "0.58rem", letterSpacing: "0.12em", color: "oklch(0.55 0 0)", fontFamily: "'Source Sans 3', sans-serif", textTransform: "uppercase" }}>
                  Animal Protection League
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`nav-link ${location === link.href ? "active" : ""}`} style={{ fontSize: "0.78rem" }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <span className="btn-outline-gold" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem" }}>
                Chat WhatsApp
              </span>
            </a>
            <Link href="/rescue">
              <span className="btn-urgent" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem" }}>
                Report Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t" style={{ background: "oklch(0.06 0 0)", borderColor: "oklch(1 0 0 / 8%)" }}>
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block py-2.5 px-3 text-sm font-semibold uppercase tracking-widest rounded transition-colors"
                    style={{
                      color: location === link.href ? "oklch(0.72 0.18 75)" : "oklch(0.8 0 0)",
                      background: location === link.href ? "oklch(0.72 0.18 75 / 0.08)" : "transparent",
                      fontFamily: "'Source Sans 3', sans-serif",
                      letterSpacing: "0.1em",
                      fontSize: "0.8rem",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="flex gap-3 mt-3 pt-3" style={{ borderTop: "1px solid oklch(1 0 0 / 8%)" }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <span className="btn-outline-gold w-full justify-center" style={{ padding: "0.6rem 1rem", fontSize: "0.75rem" }}>Chat WhatsApp</span>
                </a>
                <Link href="/rescue" className="flex-1">
                  <span className="btn-urgent w-full justify-center" style={{ padding: "0.6rem 1rem", fontSize: "0.75rem" }}>Report Now</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer style={{ background: "oklch(0.06 0 0)", borderTop: "1px solid oklch(1 0 0 / 8%)" }}>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663770189635/oKSLPQUBxKeHmNC7GHXD5T/logo-icon-m9DkBirGZZX75dSogMryNW.webp"
                  alt="Mr. Black APL"
                  className="w-9 h-9 object-contain"
                />
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "white", fontSize: "1rem" }}>
                    Mr. Black <span style={{ color: "oklch(0.72 0.18 75)" }}>APL</span>
                  </div>
                </div>
              </div>
              <p style={{ color: "oklch(0.55 0 0)", fontSize: "0.85rem", lineHeight: "1.7" }}>
                Rescuing, rehabilitating, and rehoming vulnerable animals across Kenya. Named in honour of Blackie — our heart, our legacy.
              </p>
              <div className="flex gap-3 mt-5">
                <a href="https://facebook.com/mrblackapl" target="_blank" rel="noopener noreferrer" className="p-2 rounded transition-colors" style={{ background: "oklch(0.14 0 0)", color: "oklch(0.6 0 0)" }} aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="https://instagram.com/mrblackapl" target="_blank" rel="noopener noreferrer" className="p-2 rounded transition-colors" style={{ background: "oklch(0.14 0 0)", color: "oklch(0.6 0 0)" }} aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://twitter.com/mrblackapl" target="_blank" rel="noopener noreferrer" className="p-2 rounded transition-colors" style={{ background: "oklch(0.14 0 0)", color: "oklch(0.6 0 0)" }} aria-label="Twitter">
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/rescue", label: "Report Animal Cruelty" },
                  { href: "/adoption", label: "Adopt a Pet" },
                  { href: "/foster", label: "Foster a Pet" },
                  { href: "/volunteer", label: "Volunteer Hub" },
                  { href: "/donate", label: "Donate" },
                  { href: "/patron", label: "Become a Patron" },
                  { href: "/centers", label: "Mr. Black Centers" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span style={{ color: "oklch(0.55 0 0)", fontSize: "0.85rem", transition: "color 0.2s" }} className="hover:text-[oklch(0.72_0.18_75)] cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Programs
              </h4>
              <ul className="space-y-2">
                {[
                  { href: "/rescue", label: "Field Rescue Operations" },
                  { href: "/rehabilitation", label: "Medical Rehabilitation" },
                  { href: "/adoption", label: "Adoption Program" },
                  { href: "/foster", label: "Foster Care" },
                  { href: "/events", label: "Community Events" },
                  { href: "/blog", label: "Rescue Stories" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span style={{ color: "oklch(0.55 0 0)", fontSize: "0.85rem", transition: "color 0.2s" }} className="hover:text-[oklch(0.72_0.18_75)] cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} style={{ color: "oklch(0.72 0.18 75)", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "oklch(0.55 0 0)", fontSize: "0.85rem" }}>2nd Sunrise Avenue, Nairobi, Kenya 00100</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={14} style={{ color: "#25D366", flexShrink: 0 }} />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "0.85rem" }}>+254 794 277 833</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} style={{ color: "oklch(0.72 0.18 75)", flexShrink: 0 }} />
                  <a href="mailto:info@mrblackapl.co.ke" style={{ color: "oklch(0.55 0 0)", fontSize: "0.85rem" }}>info@mrblackapl.co.ke</a>
                </li>
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-5 inline-flex" style={{ padding: "0.6rem 1.2rem", fontSize: "0.75rem" }}>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid oklch(1 0 0 / 8%)" }}>
            <p style={{ color: "oklch(0.4 0 0)", fontSize: "0.8rem" }}>
              © {new Date().getFullYear()} Mr. Black Animal Protection League. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5" style={{ color: "oklch(0.4 0 0)", fontSize: "0.8rem" }}>
              Built with <Heart size={12} style={{ color: "oklch(0.72 0.18 75)" }} fill="currentColor" /> for Blackie's legacy
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with Mr. Black APL on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
