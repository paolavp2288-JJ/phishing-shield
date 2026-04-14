import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/que-es-phishing", label: "¿Qué es?" },
  { path: "/tipos-estafas", label: "Tipos de Estafas" },
  { path: "/como-protegerte", label: "Protégete" },
  { path: "/quiz", label: "Quiz" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <Shield className="h-7 w-7 text-primary group-hover:drop-shadow-[0_0_8px_hsl(160,100%,45%)] transition-all" />
          <span className="font-display text-lg font-bold gradient-cyber-text">CiberGuardianes</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${location.pathname === item.path
                  ? "text-primary text-glow bg-primary/10 border border-primary/30"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors
                ${location.pathname === item.path ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
