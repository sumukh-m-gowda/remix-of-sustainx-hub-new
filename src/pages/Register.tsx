import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import qrImage from "./image.png";

const Register = () => (
  <div className="min-h-screen pt-24 flex items-center justify-center px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-8 md:p-12 max-w-lg w-full text-center glow-green-sm"
    >
      <h1 className="text-3xl md:text-4xl font-heading font-black mb-2">
        Register for <span className="text-primary">Sustain</span><span className="text-secondary">X</span>
      </h1>
      <p className="text-muted-foreground text-sm mb-8">
        Scan the QR code to register.
      </p>

      <div className="mx-auto w-48 h-48 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center mb-6 overflow-hidden">
        <img src={qrImage} alt="QR Code" className="w-full h-full object-contain" />
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Calendar size={16} className="text-primary" />
        <span>Registration Deadline: <strong className="text-foreground">9 April 2026</strong></span>
      </div>
    </motion.div>
  </div>
);

export default Register;
