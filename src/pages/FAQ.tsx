import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "What is SustainX?",
    answer: (
      <>
        SustainX is an innovation event organized by <strong>Solaris, PES University Electronic City Campus</strong>, consisting of two tracks:
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Hackathon</strong> – focused on building technology-based solutions</li>
          <li><strong>Studyathon</strong> – focused on research and analytical problem-solving around sustainability challenges.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Who can participate in SustainX?",
    answer: "SustainX is open to all students of PES University. Participants from different departments and disciplines are encouraged to collaborate.",
  },
  {
    question: "What is the team size?",
    answer: "Each team must consist of 3 to 4 members.",
  },
  {
    question: "What is the prize pool?",
    answer: "SustainX offers a total prize pool of ₹24,000, which will be distributed among the winning teams of the Hackathon and Studyathon tracks.",
  },
  {
    question: "Will participants receive certificates?",
    answer: "Yes. All registered participants will receive a Participation Certificate.",
  },
  {
    question: "Can teams include students from different branches?",
    answer: "Yes. Interdisciplinary teams are highly encouraged, as sustainability challenges require diverse perspectives.",
  },
  {
    question: "How do I register for SustainX?",
    answer: "Participants must pay the Registration fee through the PESU Academy Portal/App and fill the registration form.",
  },
  {
    question: "How will the problem statements be assigned for Studyathon?",
    answer: "Problem statements will be assigned through a lottery system, and once assigned, they cannot be changed.",
  },
  {
    question: "How will the problem statements be assigned for Hackathon?",
    answer: "Participants can get their own problem statements or choose one from the sample problem statements provided in the Hackathon tab.",
  },
  {
    question: "What should teams bring?",
    answer: "Participants must bring their own laptops and any required hardware components (such as microcontrollers, sensors, cables, etc.).",
  },
  {
    question: "Will Wi-Fi be provided?",
    answer: "Yes. Wi-Fi connectivity will be provided at the venue.",
  },
  {
    question: "What should Hackathon teams submit?",
    answer: (
      <ul className="list-disc ml-6 space-y-1">
        <li>A working prototype or functional concept</li>
        <li>A slide presentation explaining their solution</li>
        <li>A live demonstration of their prototype</li>
      </ul>
    ),
  },
  {
    question: "What should Studyathon teams submit?",
    answer: (
      <ul className="list-disc ml-6 space-y-1">
        <li>A 3–5 page research report</li>
        <li>A presentation explaining their analysis and proposed solution</li>
      </ul>
    ),
  },
  {
    question: "What is the presentation format?",
    answer: (
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>5 minutes</strong> for presentation</li>
        <li><strong>2 minutes</strong> for Q&A with judges</li>
      </ul>
    ),
  },
  {
    question: "Are AI tools allowed?",
    answer: "Yes. AI tools and open-source resources may be used for assistance. However, the final work must be original and properly cited where applicable.",
  },
  {
    question: "Is plagiarism allowed?",
    answer: "No. Plagiarism is strictly prohibited and may result in immediate disqualification.",
  },
  {
    question: "When and where will SustainX be held?",
    answer: (
      <>
        <p>📅 <strong>12 April 2026</strong></p>
        <p>📍 <strong>MRD Auditorium, PES University – Electronic City Campus</strong></p>
      </>
    ),
  },
  {
    question: "Who can I contact for queries?",
    answer: "For any queries regarding SustainX, participants may contact the Solaris organizing team through the official communication channels announced during registration.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const FAQ = () => {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about SustainX"
        />

        <div className="space-y-4 mt-12">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group glass glow-green-sm rounded-xl overflow-hidden"
            >
              <summary className="cursor-pointer px-6 py-5 text-lg font-semibold text-foreground flex items-center justify-between list-none">
                <span>
                  <span className="text-primary mr-2">{String(i + 1).padStart(2, "0")}.</span>
                  {faq.question}
                </span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-45 text-2xl font-light">+</span>
              </summary>
              <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
