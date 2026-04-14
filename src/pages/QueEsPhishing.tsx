import { AlertTriangle, Mail, Globe, MessageSquare, Phone } from "lucide-react";
import phishingImg from "@/assets/phishing-email.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import CyberCard from "@/components/CyberCard";

const QueEsPhishing = () => (
  <div className="min-h-screen pt-24 pb-20">
    <div className="container mx-auto px-4">
      {/* Header */}
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 mb-4">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <span className="text-destructive text-sm font-medium">Amenaza Digital</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black mb-4 text-foreground">
          ¿Qué es el <span className="gradient-cyber-text">Phishing</span>?
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          El phishing es una técnica de ingeniería social que busca engañarte para robar tu información personal.
        </p>
      </AnimatedSection>

      {/* Explanation with image */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <AnimatedSection>
          <img src={phishingImg} alt="Phishing email" className="rounded-xl border border-border/50 box-glow w-full" loading="lazy" width={800} height={600} />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground">Así funciona el engaño</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Los atacantes se hacen pasar por entidades de confianza — tu banco, una red social, o incluso un amigo — para convencerte de que compartas <strong className="text-primary">contraseñas, datos bancarios o información personal</strong>.
            </p>
            <p>
              Suelen crear <strong className="text-primary">urgencia</strong>: "Tu cuenta será bloqueada", "Has ganado un premio", "Confirma tu identidad ahora". Todo está diseñado para que actúes sin pensar.
            </p>
            <p>
              El phishing es el <strong className="text-primary">ataque más común en Internet</strong>. Cualquier persona puede ser víctima, pero con la información correcta, puedes evitarlo.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* How to spot it */}
      <AnimatedSection className="mb-8">
        <h2 className="font-display text-2xl font-bold text-center text-foreground">🔍 Señales de un intento de phishing</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[
          { icon: Mail, title: "Remitente sospechoso", text: "La dirección de email no coincide con la empresa real. Ej: banco-seguridad@gmail.com en vez de @banco.es" },
          { icon: AlertTriangle, title: "Urgencia extrema", text: "\"¡Tu cuenta será eliminada en 24h!\" Los atacantes quieren que actúes sin pensar." },
          { icon: Globe, title: "Enlaces falsos", text: "Al pasar el ratón, la URL no coincide con el sitio oficial. Pueden tener errores sutiles como 'g00gle.com'." },
          { icon: MessageSquare, title: "Errores gramaticales", text: "Muchos mensajes de phishing contienen faltas de ortografía o traducciones mal hechas." },
          { icon: Phone, title: "Piden datos sensibles", text: "Ninguna empresa legítima te pedirá tu contraseña o PIN por email o mensaje." },
          { icon: AlertTriangle, title: "Ofertas imposibles", text: "\"¡Has ganado un iPhone!\" Si parece demasiado bueno para ser verdad, probablemente lo es." },
        ].map((item, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <CyberCard icon={item.icon} title={item.title}>{item.text}</CyberCard>
          </AnimatedSection>
        ))}
      </div>

      {/* Fake email example */}
      <AnimatedSection>
        <div className="max-w-2xl mx-auto rounded-xl border border-destructive/30 bg-card/80 p-6">
          <h3 className="font-display text-lg font-bold mb-4 text-destructive">⚠️ Ejemplo de email de phishing</h3>
          <div className="rounded-lg bg-muted/50 p-5 font-mono text-sm space-y-2 text-foreground/80">
            <p><span className="text-muted-foreground">De:</span> seguridad@banc0-seguro.com</p>
            <p><span className="text-muted-foreground">Asunto:</span> ⚠️ URGENTE: Su cuenta ha sido comprometida</p>
            <hr className="border-border/30 my-3" />
            <p>Estimado cliente,</p>
            <p>Hemos detectado actividad sospechosa en su cuenta. Para evitar el bloqueo permanente, verifique su identidad haciendo clic en el siguiente enlace:</p>
            <p className="text-destructive underline cursor-pointer">👉 https://banc0-seguro.com/verificar-ahora</p>
            <p>Tiene 24 horas para completar este proceso.</p>
            <p className="text-muted-foreground mt-4">🔴 Remitente falso · 🔴 URL falsa · 🔴 Urgencia artificial</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default QueEsPhishing;
