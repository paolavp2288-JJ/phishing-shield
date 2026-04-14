import { Mail, MessageSquare, Phone, Globe, Wifi, CreditCard, Users, Bot } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const scams = [
  { icon: Mail, name: "Email Phishing", color: "text-destructive", desc: "Emails falsos que imitan a empresas reales para robar credenciales.", example: "Recibes un email de 'Netflix' diciendo que tu pago falló y debes actualizar tu tarjeta.", tip: "Verifica siempre el remitente y no hagas clic en enlaces sospechosos." },
  { icon: MessageSquare, name: "Smishing (SMS)", color: "text-accent", desc: "Mensajes de texto fraudulentos con enlaces maliciosos.", example: "\"Correos: tu paquete está retenido. Paga 1,99€ para recibirlo: enlace\"", tip: "Las empresas de mensajería nunca piden pagos por SMS." },
  { icon: Phone, name: "Vishing (Llamadas)", color: "text-secondary", desc: "Llamadas telefónicas donde se hacen pasar por tu banco o soporte técnico.", example: "Te llaman diciendo ser de Microsoft y que tu ordenador tiene un virus.", tip: "Cuelga y llama tú directamente al número oficial." },
  { icon: Globe, name: "Pharming", color: "text-primary", desc: "Te redirigen a páginas web falsas aunque escribas la URL correcta.", example: "Escribes tu banco en el navegador pero la página es una copia exacta controlada por hackers.", tip: "Comprueba que la URL tiene HTTPS y el candado verde." },
  { icon: Wifi, name: "Evil Twin (WiFi falso)", color: "text-secondary", desc: "Redes WiFi falsas en lugares públicos para interceptar tu tráfico.", example: "En una cafetería aparece 'WiFi_Gratis_Cafetería' — es una red del atacante.", tip: "Usa VPN en redes públicas y evita acceder a tu banco en WiFi abierto." },
  { icon: CreditCard, name: "Tiendas online falsas", color: "text-destructive", desc: "Webs que imitan tiendas reales con ofertas irresistibles.", example: "Zapatillas Nike a 15€ en una web que se llama 'nike-oferta-super.com'.", tip: "Investiga la web antes de comprar. Desconfía de precios absurdamente bajos." },
  { icon: Users, name: "Suplantación en RRSS", color: "text-accent", desc: "Perfiles falsos que imitan a amigos o famosos para pedirte dinero o datos.", example: "Tu 'amigo' te escribe por Instagram pidiendo que le envíes dinero urgente.", tip: "Confirma por otro medio (llamada, en persona) antes de enviar nada." },
  { icon: Bot, name: "Deepfakes y IA", color: "text-secondary", desc: "Vídeos o audios falsos generados por IA que imitan a personas reales.", example: "Recibes un audio de tu 'jefe' pidiéndote una transferencia urgente.", tip: "Verifica siempre por un segundo canal antes de actuar." },
];

const TiposEstafas = () => (
  <div className="min-h-screen pt-24 pb-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h1 className="font-display text-4xl sm:text-5xl font-black mb-4 text-foreground">
          Tipos de <span className="gradient-cyber-text">Estafas Digitales</span>
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Los ciberdelincuentes usan muchas técnicas. Conocerlas es el primer paso para protegerte.
        </p>
      </AnimatedSection>

      <div className="space-y-6">
        {scams.map((scam, i) => (
          <AnimatedSection key={i} delay={i * 80}>
            <div className="group rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all hover:border-primary/40 hover:box-glow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                <div className={`shrink-0 inline-flex items-center justify-center rounded-lg bg-muted p-3 ${scam.color}`}>
                  <scam.icon className="h-7 w-7" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="font-display text-xl font-bold text-foreground">{scam.name}</h2>
                  <p className="text-muted-foreground">{scam.desc}</p>
                  <div className="rounded-lg bg-muted/50 p-4 border-l-4 border-secondary">
                    <p className="text-sm"><span className="font-semibold text-secondary">Ejemplo real:</span> <span className="text-foreground/80">{scam.example}</span></p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-4 border-l-4 border-primary">
                    <p className="text-sm"><span className="font-semibold text-primary">💡 Consejo:</span> <span className="text-foreground/80">{scam.tip}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default TiposEstafas;
