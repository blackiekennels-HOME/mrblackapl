import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, X, ArrowLeft } from "lucide-react";
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
    content: "On a cold morning in August, our rescue team received a distress call about two dogs abandoned near the industrial area of Nairobi. When we arrived, we found Timmy and Beshti huddled together, malnourished and frightened. Despite their condition, they refused to leave each other's side. Our veterinary team immediately began treatment for malnutrition, parasites, and infections. Over the following months, both dogs underwent behavioral rehabilitation and medical recovery. Today, Timmy and Beshti are thriving, having found a loving home together with a family in Westlands. Their story reminds us why we do what we do — every rescue is a second chance at life.",
  },
  {
    category: "Animal Welfare Kenya",
    title: "Our Vision for a New Shelter Across Kenya",
    excerpt: "As we grow, so does our dream — purpose-built rescue centers in every major county, staffed by trained volunteers and veterinary professionals.",
    date: "October 10, 2024",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    tags: ["expansion", "shelter", "kenya"],
    content: "Mr. Black APL's vision extends far beyond Nairobi. We are committed to establishing rescue centers in every major county across Kenya. Each center will be equipped with modern veterinary facilities, training spaces for volunteers, and comfortable housing for animals in recovery. Our five-year expansion plan includes centers in Mombasa, Kisumu, Nakuru, and Eldoret. We are actively seeking partnerships with local communities, corporate sponsors, and international animal welfare organizations to make this vision a reality. By decentralizing our operations, we can respond faster to rescue calls and provide comprehensive care to more animals in need across Kenya.",
  },
  {
    category: "Community Updates",
    title: "The Journey of Mr. Black Animal Protection League",
    excerpt: "From a single rescued dog in Mombasa to a nationwide movement — the story of how Blackie's legacy lives on through every rescue we carry out.",
    date: "October 5, 2024",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    tags: ["blackie", "history", "mission"],
    content: "Mr. Black Animal Protection League was born from loss and love. Blackie, a beloved dog who captured the hearts of everyone who knew him, inspired a movement dedicated to protecting animals across Kenya. What started as a small rescue operation in Mombasa has grown into a nationwide organization with hundreds of volunteers and thousands of animals saved. Today, we operate rescue centers, conduct emergency response operations, provide veterinary care, and facilitate adoptions. Every day, our team works tirelessly to honor Blackie's memory by giving abandoned, abused, and injured animals a second chance at life. We believe that every animal deserves compassion, care, and a loving home.",
  },
  {
    category: "Adoption Stories",
    title: "Bella's Happy Tale: From Street to Forever Home",
    excerpt: "Bella was found malnourished and frightened on the streets of Westlands. Six months later, she's the beloved companion of a Nairobi family.",
    date: "September 28, 2024",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80",
    tags: ["adoption", "happy-tale", "nairobi"],
    content: "Bella's story is one of transformation and hope. Found on the streets of Westlands, she was scared, malnourished, and suffering from multiple health issues. Our rescue team provided immediate medical care and began her rehabilitation journey. Through patient training and socialization, Bella slowly began to trust again. After six months of care, she was ready for adoption. Today, Bella lives with a loving family in Nairobi, where she enjoys daily walks, playtime, and endless cuddles. Her family says she has brought immeasurable joy to their lives. Bella's adoption reminds us that every rescued animal has the potential to become someone's beloved companion.",
  },
  {
    category: "Training Tips",
    title: "5 Essential Commands Every Rescued Dog Should Learn First",
    excerpt: "Rescued dogs often come with behavioral challenges. Here are the five foundational commands that make the biggest difference in their rehabilitation.",
    date: "September 20, 2024",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80",
    tags: ["training", "rehabilitation", "dog-behaviour"],
    content: "Training rescued dogs requires patience and consistency. We recommend starting with these five essential commands: SIT — the foundation of all training, builds confidence and establishes communication. STAY — teaches impulse control and safety, crucial for dogs transitioning to new homes. COME — essential for recall and emergency situations, potentially life-saving. DOWN — helps manage anxiety and provides a calming command during stressful moments. LEAVE IT — prevents dangerous behavior and protects your dog from hazards. Each command should be taught using positive reinforcement, short training sessions, and plenty of rewards. Remember, rescued dogs may have trauma histories, so patience and compassion are as important as consistency. Our volunteer trainers are available to guide new adopters through this process.",
  },
  {
    category: "Veterinary Care",
    title: "Understanding Parvovirus: Kenya's Silent Killer of Dogs",
    excerpt: "Parvovirus is one of the leading causes of death in unvaccinated dogs in Kenya. Learn the signs, prevention, and what to do if your dog is at risk.",
    date: "September 15, 2024",
    readTime: "9 min read",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    tags: ["veterinary", "parvovirus", "dog-health-kenya"],
    content: "Canine parvovirus (CPV) is a highly contagious viral disease that affects dogs of all ages, particularly puppies and unvaccinated adults. In Kenya, it remains a leading cause of preventable dog deaths. The virus causes severe gastrointestinal symptoms including vomiting, diarrhea, and dehydration. Early signs include lethargy, loss of appetite, and abdominal pain. Prevention through vaccination is the most effective strategy — puppies should receive their first vaccine at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks of age. If your dog shows symptoms, seek immediate veterinary care. Treatment involves supportive care, IV fluids, and antibiotics to prevent secondary infections. At Mr. Black APL, we provide free vaccination clinics across Nairobi to help prevent this devastating disease in vulnerable populations.",
  },
];

// Sample rescue photos for the gallery
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
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    alt: "Volunteer with rescued dog",
    title: "Volunteer Care",
    category: "Rescue Stories",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  useScrollReveal();

  const filtered = activeCategory === "All Stories"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  if (selectedPost) {
    return (
      <div style={{ background: "oklch(0.08 0 0)" }}>
        <div className="container py-12">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 mb-8 text-sm font-semibold transition-colors"
            style={{ color: "oklch(0.72 0.18 75)" }}
          >
            <ArrowLeft size={16} /> Back to Stories
          </button>

          <article className="max-w-3xl">
            <div className="mb-8 overflow-hidden rounded-sm" style={{ aspectRatio: "16/9" }}>
              <img
                src={selectedPost.img}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span style={{ fontSize: "0.8rem", color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {selectedPost.category}
                </span>
                <span style={{ fontSize: "0.8rem", color: "oklch(0.45 0 0)" }}>{selectedPost.readTime}</span>
              </div>

              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", lineHeight: "1.2", marginBottom: "1rem" }}>
                {selectedPost.title}
              </h1>

              <div className="flex items-center gap-4" style={{ color: "oklch(0.55 0 0)", fontSize: "0.9rem" }}>
                <span>{selectedPost.date}</span>
              </div>
            </div>

            <div style={{ color: "oklch(0.7 0 0)", lineHeight: "1.9", fontSize: "1.05rem", fontFamily: "'Source Sans 3', sans-serif" }}>
              <p>{selectedPost.content}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-8" style={{ borderTop: "1px solid oklch(1 0 0 / 8%)" }}>
              {selectedPost.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded text-sm" style={{ background: "oklch(0.14 0 0)", color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif" }}>
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

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
              <article
                key={i}
                className="apl-card overflow-hidden fade-up cursor-pointer transition-transform hover:scale-105"
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setSelectedPost(post)}
              >
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
                    <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "oklch(0.72 0.18 75)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.78rem" }}>
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
    </div>
  );
}
