import { useEffect } from "react";
import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react";

const EVENTS_FORM = "https://forms.gle/K462hMHjVLT3gm7z6";
const WHATSAPP_EVENTS = "https://wa.me/254794277833?text=Hello%20Mr.%20Black%20APL%2C%20I%20want%20to%20attend%20or%20volunteer%20at%20an%20event.";

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

const upcomingEvents = [
  {
    title: "Adoption Drive — Westlands",
    type: "Adoption Event",
    date: "March 15, 2027",
    time: "10:00 AM – 4:00 PM",
    location: "Boma Park, Westlands",
    desc: "Meet adoptable animals, learn about our rescue mission, and find your new family member.",
    color: "oklch(0.55 0.16 160)",
    img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&q=80",
  },
  {
    title: "Community Awareness Clinic",
    type: "Community Outreach",
    date: "March 22, 2027",
    time: "9:00 AM – 2:00 PM",
    location: "Dandora Community Park",
    desc: "Free pet health checks, microchipping, and animal welfare education for the community.",
    color: "oklch(0.72 0.18 75)",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
  },
  {
    title: "Fundraiser Gala Evening",
    type: "Fundraiser",
    date: "April 5, 2027",
    time: "6:00 PM – 10:00 PM",
    location: "The Edge Convention Centre, Upper Hill",
    desc: "An elegant evening celebrating our rescue stories with live music, auctions, and networking.",
    color: "oklch(0.58 0.22 27)",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80",
  },
  {
    title: "Veterinary Outreach Clinic",
    type: "Community Outreach",
    date: "April 12, 2027",
    time: "8:00 AM – 3:00 PM",
    location: "Kibera Community Hall",
    desc: "Mobile veterinary clinic providing free medical services to underserved communities.",
    color: "oklch(0.65 0.15 300)",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
  },
];

const eventTypes = [
  { type: "Adoption Drives", desc: "Regular adoption events across Nairobi and beyond — meet our animals and take one home." },
  { type: "Fundraisers", desc: "Dinners, auctions, and community fundraisers to support our rescue operations." },
  { type: "Community Outreach", desc: "Free veterinary clinics, animal welfare education, and community engagement programs." },
  { type: "Volunteer Meetups", desc: "Training sessions, team meetings, and community building for our volunteer network." },
];

export default function Events() {
  useScrollReveal();
  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1200&q=80)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Community Events</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              APL <span style={{ color: "oklch(0.72 0.18 75)" }}>Events</span>
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "2rem" }}>
              From adoption drives to fundraisers, community clinics to volunteer meetups — APL events bring people and animals together for a common purpose.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_EVENTS} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  <Calendar size={16} /> View Events
                </span>
              </a>
              <a href={EVENTS_FORM} target="_blank" rel="noopener noreferrer">
                <span className="btn-outline-gold" style={{ padding: "0.85rem 2rem", fontSize: "0.85rem" }}>
                  Plan Events
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-14" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 fade-up">
            {eventTypes.map((et, i) => (
              <div key={i} className="apl-card p-5 text-center" style={{ transitionDelay: `${i * 60}ms` }}>
                <Calendar size={24} style={{ color: "oklch(0.72 0.18 75)", margin: "0 auto 0.75rem" }} />
                <h3 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "white", fontSize: "0.95rem", marginBottom: "0.4rem" }}>{et.type}</h3>
                <p style={{ fontSize: "0.8rem", color: "oklch(0.55 0 0)", lineHeight: "1.5" }}>{et.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <div className="section-label">Coming Up</div>
            <div className="gold-line mx-auto" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "white", marginTop: "0.5rem" }}>
              Upcoming Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="apl-card overflow-hidden fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="overflow-hidden" style={{ aspectRatio: "16/7" }}>
                  <img src={event.img} alt={`${event.title} — Mr. Black APL event in Kenya`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-bold rounded" style={{ background: `${event.color}20`, color: event.color, fontFamily: "'Source Sans 3', sans-serif" }}>{event.type}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "white", marginBottom: "0.75rem" }}>{event.title}</h3>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: "oklch(0.6 0 0)" }}>
                      <Calendar size={13} style={{ color: "oklch(0.72 0.18 75)" }} /> {event.date}
                    </div>
                    <div className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: "oklch(0.6 0 0)" }}>
                      <Clock size={13} style={{ color: "oklch(0.72 0.18 75)" }} /> {event.time}
                    </div>

                  </div>
                  <p style={{ fontSize: "0.83rem", color: "oklch(0.55 0 0)", lineHeight: "1.6", marginBottom: "1rem" }}>{event.desc}</p>
                  <a href={WHATSAPP_EVENTS} target="_blank" rel="noopener noreferrer">
                    <span className="btn-gold" style={{ background: event.color, padding: "0.5rem 1.2rem", fontSize: "0.75rem" }}>
                      RSVP <ChevronRight size={13} />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer for Events */}
      <section className="py-16" style={{ background: "oklch(0.72 0.18 75)" }}>
        <div className="container text-center fade-up">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "oklch(0.08 0 0)", marginBottom: "1rem" }}>
            Help Organise Our Events
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.2 0 0)", marginBottom: "1.5rem", maxWidth: "450px", margin: "0 auto 1.5rem" }}>
            Join our Events & Community Outreach team and help plan adoption drives, fundraisers, and community programs across Kenya.
          </p>
          <a href={EVENTS_FORM} target="_blank" rel="noopener noreferrer">
            <span className="btn-gold" style={{ background: "oklch(0.08 0 0)", color: "oklch(0.72 0.18 75)", padding: "0.75rem 1.8rem", fontSize: "0.82rem" }}>
              <Calendar size={15} /> Plan Events
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
