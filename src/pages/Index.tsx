import { Link } from "react-router-dom";
import { Shield, AlertTriangle, Lock, ArrowRight, Eye, Zap } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import CyberCard from "@/components/CyberCard";

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Ciberseguridad" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-1 bg-primary/10" style={{ animation: "scanline 4s linear infinite" }} />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-primary text-sm font-medium">Campaña de Concienciación</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="gradient-cyber-text">CIBER</span>
          <span className="text-foreground">GUARDIANES</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          Aprende a identificar y protegerte del <strong className="text-primary text-glow">phishing</strong> y otras amenazas digitales. Tu seguridad online empieza aquí.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/que-es-phishing" className="inline-flex items-center gap-2 rounded-lg gradient-cyber px-8 py-3.5 font-display text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:box-glow-strong">
            Descubre qué es el phishing <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/quiz" className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-8 py-3.5 font-display text-sm font-bold text-primary transition-all hover:bg-primary/20 hover:box-glow">
            Pon a prueba tus conocimientos
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {[
          { value: "3.400M", label: "emails de phishing enviados al día" },
          { value: "36%", label: "de ciberataques son phishing" },
          { value: "€4.500M", label: "perdidos por estafas online en 2024" },
        ].map((s, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className="font-display text-3xl font-black gradient-cyber-text mb-1">{s.value}</div>
            <div className="text-muted-foreground text-sm">{s.label}</div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl font-bold mb-3 text-foreground">¿Qué encontrarás aquí?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Todo lo que necesitas saber para navegar seguro por Internet</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: AlertTriangle, title: "¿Qué es el Phishing?", desc: "Entiende cómo funcionan estas estafas y por qué son tan peligrosas.", link: "/que-es-phishing" },
            { icon: Eye, title: "Tipos de Estafas", desc: "Conoce las distintas técnicas que usan los ciberdelincuentes.", link: "/tipos-estafas" },
            { icon: Lock, title: "Cómo Protegerte", desc: "Consejos prácticos y herramientas para mantener tus datos seguros.", link: "/como-protegerte" },
            { icon: Zap, title: "Quiz Interactivo", desc: "Pon a prueba lo que has aprendido con nuestro test de ciberseguridad.", link: "/quiz" },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <Link to={item.link} className="block h-full">
                <CyberCard icon={item.icon} title={item.title} className="h-full">
                  {item.desc}
                </CyberCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative rounded-2xl border border-primary/30 bg-card/80 p-10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                ¿Listo para convertirte en un <span className="gradient-cyber-text">CiberGuardián</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Empieza aprendiendo qué es el phishing y cómo puedes proteger a tu familia y amigos.
              </p>
              <Link to="/que-es-phishing" className="inline-flex items-center gap-2 rounded-lg gradient-cyber px-8 py-3.5 font-display text-sm font-bold text-primary-foreground hover:scale-105 transition-transform hover:box-glow-strong">
                Empezar ahora <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Index;
