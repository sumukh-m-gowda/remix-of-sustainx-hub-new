make in centerimport { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
const Contact = () => (
  <div className="min-h-screen pt-24 px-4 pb-16">
    <div className="container mx-auto max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-heading font-black text-center mb-12"
      >
        Get in <span className="text-primary">Touch</span>
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-8 space-y-6"
        >
          <div className="flex gap-4">
            <MapPin className="text-primary shrink-0 mt-1" size={20} />
            <div className="text-sm text-muted-foreground">
              <p>VM67+HV, Hosur Rd, Konappana Agrahara</p>
              <p>Electronic City, Bengaluru</p>
              <p>Karnataka 560100</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Mail className="text-primary shrink-0" size={20} />
            <a href="mailto:solarispesuecc@pes.edu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              solarispesuecc@pes.edu
            </a>
          </div>
          <div className="space-y-2">
            {[
              { name: "Bhuvan V", phone: "+91 98806 37357" },
              { name: "J Akhil", phone: "+91 63634 57241" },
            ].map((p, i) => (
              <div key={i} className="flex gap-4 items-center">
                <Phone className="text-primary shrink-0" size={20} />
                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground/80">{p.name}</span> – {p.phone}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);
export default Contact;
 get the complete code
