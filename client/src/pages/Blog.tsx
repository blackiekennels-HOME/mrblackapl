import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";

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

const categories = [
  "All Stories",
  "Rescue Stories",
  "Adoption Stories",
  "Animal Welfare Kenya",
  "Training Tips",
  "Veterinary Care",
  "Community Updates",
  "Volunteer Stories",
];

const posts = [
  {
    category: "Rescue Stories",
    title: "Timmy Black and Beshti Black: A Story of Survival",
    excerpt: "Two dogs found abandoned in Nairobi's industrial area, now thriving after months of rehabilitation and care at Mr. Black APL.",
    date: "October 15, 2024",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80",
    tags: ["rescue", "nairobi", "rehabilitation"],
  },
  {
    category: "Animal Welfare Kenya",
    title: "Our Vision for a New Shelter Across Kenya",
    excerpt: "As we grow, so does our dream — purpose-built rescue centers in every major county, staffed by trained volunteers and veterinary professionals.",
    date: "October 10, 2024",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    tags: ["expansion", "shelter", "kenya"],
  },
  {
    category: "Community Updates",
    title: "The Journey of Mr. Black Animal Protection League",
    excerpt: "From a single rescued dog in Mombasa to a nationwide movement — the story of how Blackie's legacy lives on through every rescue we carry out.",
    date: "October 5, 2024",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    tags: ["blackie", "history", "mission"],
  },
  {
    category: "Adoption Stories",
    title: "Bella's Happy Tale: From Street to Forever Home",
    excerpt: "Bella was found malnourished and frightened on the streets of Westlands. Six months later, she's the beloved companion of a Nairobi family.",
    date: "September 28, 2024",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80",
    tags: ["adoption", "happy-tale", "nairobi"],
  },
  {
    category: "Training Tips",
    title: "5 Essential Commands Every Rescued Dog Should Learn First",
    excerpt: "Rescued dogs often come with behavioral challenges. Here are the five foundational commands that make the biggest difference in their rehabilitation.",
    date: "September 20, 2024",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80",
    tags: ["training", "rehabilitation", "dog-behaviour"],
  },
  {
    category: "Veterinary Care",
    title: "Understanding Parvovirus: Kenya's Silent Killer of Dogs",
    excerpt: "Parvovirus is one of the leading causes of death in unvaccinated dogs in Kenya. Learn the signs, prevention, and what to do if your dog is at risk.",
    date: "September 15, 2024",
    readTime: "9 min read",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    tags: ["veterinary", "parvovirus", "dog-health-kenya"],
  },
];

// Sample rescue photos for the gallery — replace with real photos
const rescuePhotos = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&q=80",
    alt: "Rescued dog in recovery",
    title: "Timmy's Recovery",
    category: "Rescue Stories",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80",
    alt: "Happy adopted dog with family",
    title: "Bella's Forever Home",
    category: "Adoption Success",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    alt: "Rescue team in action",
    title: "Field Operations",
    category: "Rescue Stories",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    alt: "Rescued puppies playing",
    title: "Puppies at Play",
    category: "Rehabilitation",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&q=80",
    alt: "Dog training session",
    title: "Training Program",
    category: "Rehabilitation",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800https://images.unsplash.com/photo-1633722715463-d30628519d00?w=800&q=80q=80",
    alt: "Volunteer with rescued dog",
    title: "Volunteer Care",
    category: "Rescue Stories",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  useScrollReveal();

  const filtered = activeCategory === "All Stories"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div>
      <section className="relative py-28" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1200&q=80)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.08 0 0 / 0.95) 0%, oklch(0.08 0 0 / 0.5) 100%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="section-label">Stories & Updates</div>
            <div className="gold-line" />
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: "1.15", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              From the <span style={{ color: "oklch(0.72 0.18 75)" }}>Field</span>
            </h1>
            <p style={{ color: "oklch(0.7 0 0)", lineHeight: "1.8", fontSize: "1.1rem", fontFamily: "'Source Sans 3', sans-serif" }}>
              Rescue stories, adoption tales, animal welfare insights, and community updates from the heart of Kenya's animal protection movement.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="mb-12">
            <div className="section-label">Visual Stories</div>
            <div className="gold-line" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              Rescue <span style={{ color: "oklch(0.72 0.18 75)" }}>Photo Gallery</span>
            </h2>
            <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.7", fontFamily: "'Source Sans 3', sans-serif", marginTop: "1rem" }}>
              See the real stories behind our rescue operations. Click any photo to view the full gallery and learn more about each rescue journey.
            </p>
          </div>
          <PhotoGallery photos={rescuePhotos} columns={3} showCategories={true} />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-16 z-30" style={{ background: "oklch(0.06 0 0)", borderBottom: "1px solid oklch(1 0 0 / 8%)" }}>
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-2 rounded text-sm font-semibold transition-all"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.05em",
                  background: activeCategory === cat ? "oklch(0.72 0.18 75)" : "oklch(0.14 0 0)",
                  color: activeCategory === cat ? "oklch(0.08 0 0)" : "oklch(0.6 0 0)",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "oklch(0.72 0.18 75)" : "oklch(1 0 0 / 8%)",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16" style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <article key={i} className="apl-card overflow-hidden fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontSize: "0.72rem", color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "oklch(0.45 0 0)" }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: "white", lineHeight: "1.4", marginBottom: "0.5rem" }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: "0.83rem", color: "oklch(0.55 0 0)", lineHeight: "1.6", marginBottom: "0.75rem" }}>{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 rounded text-xs" style={{ background: "oklch(0.14 0 0)", color: "oklch(0.5 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: "0.75rem", color: "oklch(0.45 0 0)" }}>{post.date}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.78rem", cursor: "pointer" }}>
                      Read Story <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: "oklch(0.5 0 0)", fontFamily: "'Source Sans 3', sans-serif" }}>No stories in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-14" style={{ background: "oklch(0.06 0 0)" }}>
        <div className="container max-w-3xl">
          <div className="fade-up">
            <div className="section-label">Animal Welfare in Kenya</div>
            <div className="gold-line" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "white", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              About Our Blog
            </h2>
            <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", marginBottom: "1rem", fontFamily: "'Source Sans 3', sans-serif" }}>
              The Mr. Black APL blog is Kenya's dedicated resource for animal rescue stories, adoption success tales, veterinary care advice, and animal welfare advocacy. Our content is written by rescue volunteers, veterinary professionals, and animal welfare advocates across Kenya.
            </p>
            <p style={{ color: "oklch(0.65 0 0)", lineHeight: "1.8", fontFamily: "'Source Sans 3', sans-serif" }}>
              Whether you're looking to adopt a dog in Nairobi, understand animal welfare laws in Kenya, or learn how to care for a rescued pet — our blog has the answers. Subscribe to our WhatsApp updates to never miss a story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
