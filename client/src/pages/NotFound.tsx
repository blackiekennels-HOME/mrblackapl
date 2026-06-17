import { Link } from "wouter";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "oklch(0.08 0 0)" }}>
      <div className="text-center px-6 max-w-lg">
        <div className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-6" style={{ background: "oklch(0.58 0.22 27 / 0.15)", color: "oklch(0.58 0.22 27)" }}>
          <AlertTriangle size={32} />
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "6rem", color: "oklch(0.72 0.18 75)", lineHeight: 1, marginBottom: "0.5rem" }}>
          404
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "white", marginBottom: "1rem" }}>
          Page Not Found
        </h1>
        <p style={{ color: "oklch(0.6 0 0)", lineHeight: "1.7", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
          The page you're looking for doesn't exist. But there are animals that need your help — let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/">
            <span className="btn-gold" style={{ padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
              <Home size={15} /> Back to Home
            </span>
          </Link>
          <a href="https://wa.me/254794277833" target="_blank" rel="noopener noreferrer">
            <span className="btn-outline-gold" style={{ padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
              Chat WhatsApp
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
