import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background/80 py-8">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-display text-sm font-bold gradient-cyber-text">CiberGuardianes</span>
      </div>
      <p className="text-muted-foreground text-sm">
        Campaña de concienciación sobre ciberseguridad · Proyecto educativo 2026
      </p>
    </div>
  </footer>
);

export default Footer;
