import { Lock, Key, Shield, Eye, Smartphone, HardDrive, Search, CheckCircle } from "lucide-react";
import protectionImg from "@/assets/protection.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import CyberCard from "@/components/CyberCard";

const tips = [
  { icon: Key, title: "Contraseñas fuertes", items: ["Mínimo 12 caracteres con mayúsculas, números y símbolos", "No reutilices contraseñas entre servicios", "Usa un gestor de contraseñas (Bitwarden, 1Password)"] },
  { icon: Smartphone, title: "Verificación en dos pasos (2FA)", items: ["Actívala en todas tus cuentas importantes", "Usa apps como Google Authenticator", "Evita el SMS como único segundo factor"] },
  { icon: Search, title: "Verifica antes de hacer clic", items: ["Pasa el ratón sobre los enlaces para ver la URL real", "Comprueba que la web tiene HTTPS (candado)", "Desconfía de emails con urgencia extrema"] },
  { icon: HardDrive, title: "Copias de seguridad", items: ["Haz backups regularmente de tus archivos importantes", "Usa la regla 3-2-1: 3 copias, 2 medios, 1 fuera de casa", "Servicios en la nube + disco externo"] },
  { icon: Eye, title: "Privacidad en redes sociales", items: ["Configura tus perfiles como privados", "No compartas ubicación en tiempo real", "Revisa los permisos de las apps conectadas"] },
  { icon: Shield, title: "Software actualizado", items: ["Mantén tu sistema operativo al día", "Actualiza navegador y apps regularmente", "Usa un antivirus fiable y actualizado"] },
];

const ComoProtegerte = () => (
  <div className="min-h-screen pt-24 pb-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h1 className="font-display text-4xl sm:text-5xl font-black mb-4 text-foreground">
          Cómo <span className="gradient-cyber-text">Protegerte</span>
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Consejos prácticos y herramientas para mantener tu vida digital segura.
        </p>
      </AnimatedSection>

      {/* Hero image */}
      <AnimatedSection className="mb-16">
        <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto">
          <img src={protectionImg} alt="Protección digital" className="w-full" loading="lazy" width={800} height={600} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="font-display text-2xl font-bold text-foreground text-glow">Tu seguridad está en tus manos</h2>
          </div>
        </div>
      </AnimatedSection>

      {/* Tips grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {tips.map((tip, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <CyberCard icon={tip.icon} title={tip.title} className="h-full">
              <ul className="space-y-2 mt-2">
                {tip.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CyberCard>
          </AnimatedSection>
        ))}
      </div>

      {/* Password strength checker */}
      <AnimatedSection>
        <PasswordChecker />
      </AnimatedSection>
    </div>
  </div>
);

const PasswordChecker = () => {
  const [password, setPassword] = React.useState("");
  const strength = getStrength(password);

  return (
    <div className="max-w-lg mx-auto rounded-xl border border-border/50 bg-card/80 p-6">
      <h3 className="font-display text-lg font-bold mb-4 text-foreground">🔐 Comprobador de contraseñas</h3>
      <p className="text-muted-foreground text-sm mb-4">Escribe una contraseña para ver si es segura (no guardamos nada).</p>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Escribe una contraseña..."
        className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono"
      />
      {password && (
        <div className="mt-4 space-y-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((level) => (
              <div key={level} className={`h-2 flex-1 rounded-full transition-colors ${level <= strength.level
                ? strength.level <= 1 ? "bg-destructive" : strength.level <= 2 ? "bg-yellow-500" : strength.level <= 3 ? "bg-secondary" : "bg-primary"
                : "bg-muted"}`} />
            ))}
          </div>
          <p className={`text-sm font-semibold ${strength.level <= 1 ? "text-destructive" : strength.level <= 2 ? "text-yellow-500" : strength.level <= 3 ? "text-secondary" : "text-primary text-glow"}`}>
            {strength.label}
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            {strength.tips.map((t, i) => <li key={i}>• {t}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

import React from "react";

function getStrength(pw: string) {
  if (!pw) return { level: 0, label: "", tips: [] };
  const checks = [pw.length >= 8, pw.length >= 12, /[A-Z]/.test(pw), /[0-9]/.test(pw), /[^A-Za-z0-9]/.test(pw)];
  const passed = checks.filter(Boolean).length;
  const tips: string[] = [];
  if (pw.length < 8) tips.push("Usa al menos 8 caracteres");
  if (pw.length < 12) tips.push("Idealmente 12+ caracteres");
  if (!/[A-Z]/.test(pw)) tips.push("Añade mayúsculas");
  if (!/[0-9]/.test(pw)) tips.push("Añade números");
  if (!/[^A-Za-z0-9]/.test(pw)) tips.push("Añade símbolos (!@#$%)");
  const labels = ["", "Muy débil 😰", "Débil 😟", "Buena 😊", "¡Excelente! 🛡️"];
  return { level: Math.min(4, Math.max(1, passed - 1)), label: labels[Math.min(4, Math.max(1, passed - 1))], tips };
}

export default ComoProtegerte;
