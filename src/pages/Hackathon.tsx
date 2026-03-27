import { useState } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Scale } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TrackModal, { Track } from "@/components/TrackModal";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const tracks: Track[] = [
  {
    title: "Smart Energy & Climate Tech", icon: "⚡",
    problems: [
      { title: "Smart Energy Metering System", description: "Build an IoT-based smart energy meter that monitors electricity usage in real time and provides analytics to reduce energy consumption." },
      { title: "Solar Panel Efficiency Optimizer", description: "Develop a sensor-based system that tracks sunlight intensity and adjusts panel orientation to maximize solar energy generation." },
      { title: "Campus Energy Monitoring Network", description: "Create a distributed sensor system that monitors electricity usage across a campus and identifies energy wastage." },
      { title: "Carbon Footprint Calculator for Institutions", description: "Create a dashboard that calculates and visualizes carbon emissions for campuses or organizations." },
      { title: "AI-based Energy Consumption Predictor", description: "Build a machine learning model that predicts energy demand and suggests optimized usage patterns." },
      { title: "Renewable Energy Forecast Platform", description: "Develop a platform that predicts solar or wind energy production using weather data." },
    ],
  },
  {
    title: "Waste Management & Circular Economy", icon: "♻️",
    problems: [
      { title: "Smart Waste Segregation Bin", description: "Build a smart bin using sensors or cameras that automatically identifies and segregates waste." },
      { title: "Fill-Level Monitoring for Garbage Bins", description: "Develop IoT-enabled bins that detect fill levels and optimize waste collection routes." },
      { title: "Plastic Waste Collection Kiosk", description: "Create a smart recycling station that rewards users for depositing plastic waste." },
      { title: "AI Waste Classification App", description: "Build a mobile app that identifies waste types using image recognition and suggests disposal methods." },
      { title: "Recycling Marketplace Platform", description: "Develop a platform connecting households and businesses with recyclers and waste collectors." },
      { title: "Waste Analytics Dashboard for Cities", description: "Create a system that analyzes waste generation trends and helps municipalities optimize waste management." },
    ],
  },
  {
    title: "Sustainable Cities & Smart Infrastructure", icon: "🏙️",
    problems: [
      { title: "Smart Street Lighting System", description: "Design streetlights that adjust brightness based on traffic or pedestrian movement." },
      { title: "Urban Water Leakage Detection System", description: "Develop a sensor-based system that detects leaks in pipelines and reports them in real time." },
      { title: "Air Quality Monitoring Stations", description: "Build low-cost IoT sensors that monitor air pollution and send real-time data to a central dashboard." },
      { title: "Urban Sustainability Dashboard", description: "Develop a platform that tracks city-level sustainability indicators such as pollution, energy, and waste." },
      { title: "Traffic Emission Reduction Optimizer", description: "Build a system that analyzes traffic patterns and suggests route optimizations to reduce emissions." },
      { title: "Smart Public Transport Planner", description: "Create an application that promotes sustainable commuting by optimizing public transport routes." },
    ],
  },
  {
    title: "Sustainable Agriculture & Food Systems", icon: "🌱",
    problems: [
      { title: "Smart Irrigation System", description: "Develop an automated irrigation system using soil moisture sensors to optimize water usage." },
      { title: "Crop Health Monitoring Device", description: "Build a sensor or camera-based system that detects crop diseases early." },
      { title: "Automated Greenhouse Monitoring System", description: "Create a device that monitors temperature, humidity, and soil conditions in greenhouses." },
      { title: "Crop Disease Detection Using AI", description: "Build an AI model that identifies plant diseases from images." },
      { title: "Food Waste Reduction Platform", description: "Create a system that connects restaurants or supermarkets with NGOs to redistribute surplus food." },
      { title: "Farm Decision Support System", description: "Develop a platform that recommends crops based on soil type, weather, and water availability." },
    ],
  },
  {
    title: "Biodiversity & Environmental Monitoring", icon: "🌿",
    problems: [
      { title: "Forest Fire Early Detection System", description: "Develop a sensor-based system that detects temperature spikes and smoke in forest areas." },
      { title: "Wildlife Tracking System", description: "Build a GPS-enabled device to track wildlife movements and prevent poaching." },
      { title: "Water Quality Monitoring Device", description: "Create an IoT device that monitors pH, turbidity, and contamination in water bodies." },
      { title: "Environmental Incident Reporting Platform", description: "Build a platform where citizens can report pollution, illegal dumping, or deforestation." },
      { title: "Biodiversity Mapping Tool", description: "Create a digital platform that maps species distribution and biodiversity hotspots." },
      { title: "Satellite Data Analysis for Deforestation", description: "Develop a system that analyzes satellite images to detect deforestation patterns." },
    ],
  },
  {
    title: "Sustainable Lifestyle & Behavioral Change", icon: "💚",
    problems: [
      { title: "Sustainable Product Recommendation App", description: "Develop an application that suggests eco-friendly product alternatives." },
      { title: "Smart Water Usage Monitor", description: "Build a device that tracks household water consumption and alerts users about wastage." },
      { title: "Energy Saving Smart Plug", description: "Develop a smart plug that tracks appliance usage and recommends energy-saving actions." },
      { title: "Eco Reward Kiosk", description: "Design a kiosk that rewards sustainable actions such as recycling or cycling." },
      { title: "Personal Carbon Footprint Tracker", description: "Create an app that calculates and tracks an individual's carbon emissions." },
      { title: "Gamified Sustainability Challenge Platform", description: "Build a platform where users participate in eco-friendly challenges and earn rewards." },
    ],
  },
  {
    title: "Open Track", icon: "🌍",
    problems: [
      { title: "Open Track", description: "Under the theme \"Innovating for a Sustainable Future,\" participants in the Open Track may choose to work on any sustainability-focused problem of their choice. Teams are encouraged to develop innovative solutions addressing real-world environmental and societal challenges. Submissions should clearly demonstrate innovation, feasibility, and meaningful sustainability impact." },
    ],
  },
];

const criteria = [
  { label: "Problem Understanding", score: 15 },
  { label: "Innovation", score: 20 },
  { label: "Technical Implementation", score: 20 },
  { label: "Sustainability Impact", score: 15 },
  { label: "Feasibility & Scalability", score: 15 },
  { label: "Presentation & Demo", score: 10 },
  { label: "UI/UX", score: 5 },
];

const Hackathon = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-heading font-black mb-4">
            <span className="text-primary">SustainX</span>{" "}
            <span className="text-secondary">Hackathon</span>
          </motion.h1>
          <motion.p {...fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
            A technology-driven competition where participants develop innovative sustainability solutions using hardware, software, AI, and IoT.
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
              { icon: Scale, text: "Bring your own laptops & hardware" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center">
                <item.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <SectionHeading title="Problem Tracks" subtitle="Click on a track to see all problem statements." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tracks.slice(0, -1).map((t, i) => (
              <motion.button
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelectedTrack(t)}
                className="glass rounded-xl p-6 text-left hover:glow-green-sm transition-all hover:-translate-y-1 group"
              >
                <span className="text-4xl mb-3 block">{t.icon}</span>
                <h3 className="font-heading font-bold text-foreground mb-1">{t.title}</h3>
                <p className="text-xs text-muted-foreground">{t.problems.length} problem statements</p>
              </motion.button>
            ))}
          </div>
          <div className="flex justify-center mt-4 max-w-5xl mx-auto">
            <motion.button
              {...fadeUp}
              transition={{ delay: tracks.length * 0.08 }}
              onClick={() => setSelectedTrack(tracks[tracks.length - 1])}
              className="glass rounded-xl p-6 text-left hover:glow-green-sm transition-all hover:-translate-y-1 group w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
            >
              <span className="text-4xl mb-3 block">{tracks[tracks.length - 1].icon}</span>
              <h3 className="font-heading font-bold text-foreground mb-1">{tracks[tracks.length - 1].title}</h3>
              <p className="text-xs text-muted-foreground">{tracks[tracks.length - 1].problems.length} problem statement</p>
            </motion.button>
          </div>
        </div>
      </section>

      <TrackModal track={selectedTrack} onClose={() => setSelectedTrack(null)} />

      {/* Evaluation */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Evaluation Criteria" subtitle="Total: 100 points" />
          <div className="max-w-2xl mx-auto space-y-3">
            {criteria.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-4">
                <div className="flex-1">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hackathon;
