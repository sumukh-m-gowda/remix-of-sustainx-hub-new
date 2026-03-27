import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, Lightbulb, Trophy, GraduationCap, Globe
} from "lucide-react";
import HeroScene from "@/components/HeroScene";
import CountdownTimer from "@/components/CountdownTimer";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const tracks: Track[] = [
  { title: "Smart Energy & Climate Tech", icon: "⚡", problems: [{ title: "Overview", description: "Build innovative solutions for energy monitoring, solar optimization, and carbon footprint reduction." }] },
  { title: "Waste Management & Circular Economy", icon: "♻️", problems: [{ title: "Overview", description: "Create smart waste segregation, fill-level monitoring, and recycling platforms." }] },
  { title: "Sustainable Cities & Infrastructure", icon: "🏙️", problems: [{ title: "Overview", description: "Design smart street lighting, water leakage detection, and air quality monitoring systems." }] },
  { title: "Sustainable Agriculture & Food Systems", icon: "🌱", problems: [{ title: "Overview", description: "Develop smart irrigation, crop health monitoring, and food waste reduction solutions." }] },
  { title: "Biodiversity & Environmental Monitoring", icon: "🌿", problems: [{ title: "Overview", description: "Build forest fire detection, wildlife tracking, and water quality monitoring devices." }] },
  { title: "Sustainable Lifestyle & Behavioral Change", icon: "💚", problems: [{ title: "Overview", description: "Create eco-friendly product recommenders, carbon trackers, and gamified sustainability platforms." }] },
];

const whyCards = [
  { icon: Globe, text: "Work on real sustainability problems" },
  { icon: Lightbulb, text: "Build impactful technology" },
  { icon: Users, text: "Collaborate across disciplines" },
  { icon: Trophy, text: "Present ideas to expert judges" },
  { icon: GraduationCap, text: "Learn innovation & sustainability" },
];

const Index = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="container mx-auto px-4 text-center z-10 py-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-4 leading-tight">
              <span className="text-primary">Sustain</span>
              <span className="text-secondary">X</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-heading font-medium mb-2">
              Innovation for a Sustainable Future
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              A sustainability-focused Hackathon and Studyathon bringing together innovators, researchers, and problem solvers to develop impactful solutions to global environmental challenges.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <CountdownTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground"
          >
            <span>📅 15 March 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>📍 MRD Auditorium, PESU ECC</span>
            <span className="hidden sm:inline">•</span>
            <span>🌿 Solaris Club</span>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8">
            <Link
              to="/register"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold glow-green animate-pulse-glow hover:scale-105 transition-transform"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading title="About SustainX" subtitle="A sustainability innovation event consisting of two major components." />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Hackathon", desc: "Build technological solutions for sustainability challenges using hardware, software, AI, and IoT.", icon: "🛠️" },
              { title: "Studyathon", desc: "Research and design sustainable solutions through structured analysis, critical thinking, and collaboration.", icon: "📚" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }} className="glass rounded-2xl p-8 hover:glow-green-sm transition-shadow">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-heading font-bold text-xl text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTICIPATE */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <SectionHeading title="Why Participate?" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {whyCards.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 text-center hover:glow-green-sm transition-all hover:-translate-y-1"
              >
                <c.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-xs text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 px-4">
        <motion.div {...fadeUp} className="container mx-auto text-center">
          <div className="glass rounded-3xl p-12 md:p-16 glow-green max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 glow-text">
              Ready to innovate for a sustainable future?
            </h2>
            <Link
              to="/register"
              className="inline-block mt-4 px-10 py-4 rounded-lg bg-secondary text-secondary-foreground font-heading font-bold text-lg hover:scale-105 transition-transform"
            >
              Register Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
