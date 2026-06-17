import { useState, useEffect } from "react";
import { X, Mail, Heart } from "lucide-react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("newsletterPopupShown");
    if (popupShown) return;

    // Trigger 1: After scrolling 60% down the page
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 60 && !isOpen) {
        setIsOpen(true);
        sessionStorage.setItem("newsletterPopupShown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Trigger 2: Exit intent (mouse leaving viewport at top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true);
        sessionStorage.setItem("newsletterPopupShown", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Newsletter signup:", email);
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "oklch(0 0 0 / 0.5)" }}>
      <div
        className="apl-card p-8 max-w-md w-full animate-in fade-in zoom-in"
        style={{
          background: "oklch(0.08 0 0)",
          animation: "fadeInScale 0.3s ease-out",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1 hover:bg-opacity-50 transition-all"
          style={{ color: "oklch(0.6 0 0)" }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-4">
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>❤️</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "white",
                marginBottom: "0.5rem",
              }}>
                Join Our <span style={{ color: "oklch(0.72 0.18 75)" }}>Community</span>
              </h2>
              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.85rem",
                color: "oklch(0.6 0 0)",
                lineHeight: "1.6",
              }}>
                Get rescue updates, adoption stories, and volunteer opportunities delivered to your inbox.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  background: "oklch(0.12 0 0)",
                  border: "2px solid oklch(0.2 0 0)",
                  borderRadius: "0.5rem",
                  color: "white",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.9rem",
                }}
              />
              <button
                type="submit"
                className="w-full btn-gold"
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "0.85rem",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                }}
              >
                <Mail size={14} className="inline mr-2" />
                Subscribe Now
              </button>
            </form>

            {/* Footer */}
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.7rem",
              color: "oklch(0.5 0 0)",
              textAlign: "center",
              marginTop: "1rem",
            }}>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "white",
              marginBottom: "0.5rem",
            }}>
              Thank You!
            </h3>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.85rem",
              color: "oklch(0.6 0 0)",
            }}>
              Check your email for confirmation and welcome updates.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
