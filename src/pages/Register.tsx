import { motion } from "framer-motion";
import { QrCode, Calendar } from "lucide-react";

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
        Scan the QR code to register via PESU Academy Portal.
      </p>

      <div className="mx-auto w-48 h-48 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center mb-6">
        <QrCode className="text-primary" size={80} strokeWidth={1} />
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Calendar size={16} className="text-primary" />
        <span>Registration Deadline: <strong className="text-foreground">12 March 2026</strong></span>
      </div>
    </motion.div>
  </div>
);

export default Register;
