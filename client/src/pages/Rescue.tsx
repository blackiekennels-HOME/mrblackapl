import { useState, useEffect } from "react";
import { Link } from "wouter";
import { AlertTriangle, Phone, Users, Truck, MapPin, Shield, ChevronRight, MessageCircle, AlertCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/254794277833?text=🚨%20EMERGENCY%3A%20I%20need%20to%20report%20an%20animal%20in%20immediate%20danger.%20Please%20respond%20urgently.";
const STANDARD_REPORT_FORM = "https://forms.gle/yj9zxGqVqYTtxaL16";

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
  { title: "Rescue Volunteer", cta: "Fill Form", href: "https://forms.gle/jXa75Qt6qbTMwho66", whatsapp: "https://chat.whatsapp.com/L38Et6xNgYsKfzLDZpU8LH?mode=gi_t", desc: "Join our frontline rescue teams responding to emergency calls across Kenya." },
  { title: "Transport & Vehicle Volunteer", cta: "Fill Form", href: "https://forms.gle/cwFjp32pqvfnMe5a8", whatsapp: "https://chat.whatsapp.com/Bcx67LTs6pLIRLs4EERNa?mode=gi_t", desc: "Provide transport for rescued animals to veterinary facilities and shelters." },
  { title: "Rescue Coordinator", cta: "Fill Form", href: "https://forms.gle/exeTmTzWUCK1ZzB9A", whatsapp: "https://chat.whatsapp.com/KaqihWuzU1u3F5Hska9yHW?mode=gi_t", desc: "Coordinate rescue operations, manage teams, and liaise with veterinary support." },
  { title: "Area Scout (Community Spotter)", cta: "Fill Form", href: "https://forms.gle/FEKR4eEK42Agx4VY9", whatsapp: "https://chat.whatsapp.com/Cj2tzD95HbE3HwHXOUFqsu?mode=gi_t", desc: "Be the eyes and ears in your community — report animals in need before it's too late." },
  { title: "Veterinary Assistant (Rescue Support)", cta: "Fill Form", href: "https://forms.gle/BG6CwTeBoFdPMzzo7", whatsapp: "https://chat.whatsapp.com/B6uay5EmbBjHV51ry9eK6y?mode=gi_t", desc: "Provide on-site veterinary first aid and medical assessment during rescue operations." },
];

const steps = [
  { step: "01", title: "Report", desc: "Contact us via WhatsApp, phone, or the form below with the animal's location and condition." },
  { step: "02", title: "Assess", desc: "Our team assesses the situation remotely and dispatches the nearest available rescue unit." },
  { step: "03", title: "Rescue", desc: "Trained volunteers arrive on-site, secure the animal safely, and provide immediate first aid." },
  { step: "04", title: "Transport", desc: "The animal is transported to our rehabilitation facility or partner veterinary clinic." },
];

const faqs = [
  {
    question: "When should I use the HOT Emergency option?",
    answer: "Use HOT Emergency if the animal is in immediate life-threatening danger: severe bleeding, trapped, being attacked, hit by a vehicle, or unable to move. These situations require instant response. Call or WhatsApp immediately."
  },
  {
    question: "When should I use the Standard Report form?",
    answer: "Use Standard Report for animals that need help but are not in immediate danger: malnourished, limping, sick, abandoned but safe, or injured but stable. Our team will respond within 24 hours with a rescue plan."
  },
  {
    question: "What information do I need to provide?",
    answer: "Provide the animal's location (street/area/landmark), type (dog, cat, bird, etc.), condition description, and your contact information. Photos are helpful but not required. For HOT emergencies, just call/WhatsApp with the location."
  },
  {
    question: "How long does rescue take?",
    answer: "HOT emergencies: Our team responds within 15-30 minutes. Standard reports: We assess and plan within 24 hours, then dispatch a rescue team. Response time depends on location and team availability."
  },
  {
    question: "What happens after I report?",
    answer: "We'll contact you to confirm details, assess the situation, and dispatch a rescue team. You may be asked to stay with the animal or provide access. We'll update you on the rescue progress and the animal's condition."
  },
  {
    question: "Is there a cost to report or get rescued?",
    answer: "No. All rescue services are free. We're funded by donations and volunteers. If you'd like to support our work, you can donate on our Donate page."
  }
];

export default function Rescue() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/50">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">EMERGENCY RESPONSE</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Rescue <span className="text-amber-400">Operations</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you've seen an abandoned, injured, or distressed animal, our rescue teams are ready to respond. Report immediately through the channels below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => window.location.href = STANDARD_REPORT_FORM}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <AlertTriangle size={20} />
              REPORT NOW
            </button>
            <button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              CHAT WHATSAPP
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Reporting Section */}
      <section className="py-20 px-6 bg-gray-900/50 border-t-2 border-amber-500/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            How to Report an Emergency
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Standard Report */}
            <div className="fade-up p-8 border-2 border-amber-500/50 rounded-lg hover:border-amber-500 transition-all duration-300 bg-gray-800/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="text-amber-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Standard Report</h3>
              </div>

              <p className="text-gray-300 mb-6">
                For animals in need that are not in immediate life-threatening danger. Provide details with location and photos.
              </p>

              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">✓</span>
                  <span>Describe the animal's condition and location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">✓</span>
                  <span>Upload photos of the animal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">✓</span>
                  <span>Provide your contact information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">✓</span>
                  <span>Our team will respond within 24 hours</span>
                </li>
              </ul>

              <button
                onClick={() => window.location.href = STANDARD_REPORT_FORM}
                className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Fill Report Form
                <ChevronRight size={18} />
              </button>
            </div>

            {/* HOT Emergency */}
            <div className="fade-up p-8 border-2 border-red-500/50 rounded-lg hover:border-red-500 transition-all duration-300 bg-red-900/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-red-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-red-400">HOT Emergency</h3>
              </div>

              <p className="text-gray-300 mb-6">
                For animals in immediate danger or life-threatening situations. Call or WhatsApp us NOW for instant response.
              </p>

              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">⚡</span>
                  <span>Animal in immediate danger</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">⚡</span>
                  <span>Severe injury or bleeding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">⚡</span>
                  <span>Animal trapped or stuck</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">⚡</span>
                  <span>Immediate rescue response required</span>
                </li>
              </ul>

              <div className="space-y-3">
                <button
                  onClick={() => window.location.href = `tel:+254794277833`}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  CALL NOW: +254 794 277 833
                </button>
                <button
                  onClick={() => window.open(WHATSAPP_URL, "_blank")}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WHATSAPP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-8 text-center mb-16">
            <h3 className="text-xl font-bold mb-4">24/7 Emergency Hotline</h3>
            <p className="text-gray-300 mb-4">
              Available round the clock for urgent animal emergencies
            </p>
            <a href="tel:+254794277833" className="text-3xl font-bold text-amber-400 hover:text-amber-300">
              +254 794 277 833
            </a>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 pt-20 border-t border-gray-700">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="fade-up p-6 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-amber-500/50 transition-all duration-300">
                  <h3 className="text-lg font-bold text-amber-400 mb-3">{faq.question}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Quick Reference */}
            <div className="mt-16 p-8 bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/30 rounded-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Quick Reference Guide</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <span className="text-amber-400 font-bold">S</span>
                    </div>
                    <h4 className="text-lg font-bold">Standard Report</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Animal needs help but not in immediate danger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Fill out the Google Form with details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Include photos if possible</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-red-400 font-bold">H</span>
                    </div>
                    <h4 className="text-lg font-bold text-red-400">HOT Emergency</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Animal in immediate life-threatening danger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Call or WhatsApp immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Response within 15-30 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Just provide location and animal type</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Rescue Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="fade-up relative">
                <div className="text-6xl font-bold text-amber-500/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-amber-500 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rescue Volunteer Roles */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Join Our Rescue Teams</h2>
          <p className="text-center text-gray-400 mb-16">
            We're recruiting trained volunteers to help us respond to emergencies faster
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role, idx) => (
              <div key={idx} className="fade-up p-6 border border-gray-700 rounded-lg hover:border-amber-500/50 transition-all duration-300 bg-gray-800/30">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{role.title}</h3>
                  <Truck className="text-amber-400" size={24} />
                </div>
                <p className="text-gray-400 mb-6 text-sm">{role.desc}</p>
                <div className="flex gap-3">
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 font-semibold rounded-lg transition-all duration-300 text-sm text-center"
                  >
                    {role.cta} →
                  </a>
                  <a
                    href={role.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold rounded-lg transition-all duration-300 text-sm text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    Join Group
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Every Second Counts</h2>
          <p className="text-xl text-gray-300 mb-12">
            If you see an animal in need, don't wait. Report it immediately through any of our channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = STANDARD_REPORT_FORM}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Report an Animal
            </button>
            <button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold rounded-lg transition-all duration-300"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .fade-up {
            animation: fadeUpMobile 0.6s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
}
