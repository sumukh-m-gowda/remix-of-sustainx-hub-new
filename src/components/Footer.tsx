import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 bg-muted/30">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-lg font-bold mb-2">
          <span className="text-primary">Sustain</span>
          <span className="text-secondary">X</span>
        </h3>
        <p className="text-muted-foreground text-sm">
          Solaris – PES University ECC
        </p>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-3 text-sm text-foreground/80">Quick Links</h4>
        <div className="flex flex-col gap-2">
          {[
            { to: "/", label: "Home" },
            { to: "/hackathon", label: "Hackathon" },
            { to: "/studyathon", label: "Studyathon" },
            { to: "/register", label: "Register" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-3 text-sm text-foreground/80">Connect</h4>
        <div className="flex gap-3">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:solarispesuecc@pes.edu" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-border/20 py-4 text-center text-muted-foreground text-xs">
      © 2026 Solaris PESU ECC – SustainX
    </div>
  </footer>
);

export default Footer;
