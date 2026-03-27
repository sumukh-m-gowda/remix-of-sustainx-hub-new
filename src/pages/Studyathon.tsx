import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Users, BookOpen, Lightbulb, FileText, Presentation, Scale, CheckCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const process = [
  { icon: "🎲", title: "Problem Assignment", desc: "Teams are assigned problem statements through a Lottery System. Teams must work only on the assigned problem." },
  { icon: "🔍", title: "Research & Analysis", desc: "Study the background, analyze existing solutions, identify gaps, and support analysis with reliable data." },
  { icon: "💡", title: "Solution Development", desc: "Develop the concept, implementation approach, and expected sustainability impact." },
];

const deliverables = [
  "Problem Statement",
  "Background Research",
  "Existing Solutions",
  "Proposed Solution",
  "Implementation Strategy",
  "Sustainability Impact",
  "Future Scope",
];

const criteria = [
  { label: "Problem Diagnosis", score: 20 },
  { label: "Innovation", score: 15 },
  { label: "Feasibility", score: 15 },
  { label: "Sustainability Impact", score: 20 },
  { label: "Critical Thinking", score: 15 },
  { label: "Communication", score: 15 },
];

const rules = [
  "Plagiarism is strictly prohibited.",
  "Proper citation of sources is required.",
  "AI tools may be used for assistance.",
  "Teams must follow presentation time limits.",
];

const Studyathon = () => (
  <div className="min-h-screen pt-24">
    {/* Hero */}
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-heading font-black mb-4">
          <span className="text-primary">SustainX</span>{" "}
          <span className="text-secondary">Studyathon</span>
        </motion.h1>
        <motion.p {...fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
          A research-focused event designed to encourage students to explore sustainability challenges, analyze real-world problems, and propose impactful solutions.
        </motion.p>
      </div>
    </section>

    {/* Team Structure */}
    <section className="py-12 px-4 bg-muted/20">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title="Team Structure" />
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Users, text: "3–4 participants per team" },
            { icon: BookOpen, text: "Cross-discipline collaboration encouraged" },
            { icon: Scale, text: "Register by 12 March 2026" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center">
              <item.icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title="Studyathon Process" />
        <div className="space-y-4">
          {process.map((p, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 flex gap-4 items-start">
              <span className="text-3xl">{p.icon}</span>
              <div>
                <h3 className="font-heading font-bold text-secondary mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Deliverables */}
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title="Deliverables" subtitle="Report length: 3–5 pages" />
        <div className="glass rounded-xl p-6">
          <div className="grid grid-cols-2 gap-2">
            {deliverables.map((d, i) => (
              <motion.div key={i} {...fadeUp} className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText size={14} className="text-primary shrink-0" />
                {d}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="glass rounded-xl p-5 text-center">
            <Presentation className="mx-auto mb-2 text-primary" size={24} />
            <p className="text-sm text-muted-foreground">Presentation: <strong className="text-foreground">5 min</strong></p>
          </div>
          <div className="glass rounded-xl p-5 text-center">
            <Lightbulb className="mx-auto mb-2 text-primary" size={24} />
            <p className="text-sm text-muted-foreground">Q&A: <strong className="text-foreground">2 min</strong></p>
          </div>
        </div>
      </div>
    </section>

    {/* Evaluation */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <SectionHeading title="Evaluation Criteria" subtitle="Total: 100 points" />
        <div className="space-y-3">
          {criteria.map((c, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground/80">{c.label}</span>
                <span className="text-secondary font-heading font-bold">{c.score}</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Rules */}
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-2xl">
        <SectionHeading title="Rules" />
        <div className="glass rounded-xl p-6 space-y-3">
          {rules.map((r, i) => (
            <motion.div key={i} {...fadeUp} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
              {r}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tips */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title="Tips to Perform Well" />
        <div className="glass rounded-xl p-6 space-y-3">
          {[
            "Focus on real-world problems",
            "Support your idea with data and research",
            "Think about practical implementation",
            "Show environmental impact clearly",
            "Keep the presentation clear and simple",
          ].map((tip, i) => (
            <motion.div key={i} {...fadeUp} className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle size={16} className="text-secondary shrink-0" />
              {tip}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Studyathon;
