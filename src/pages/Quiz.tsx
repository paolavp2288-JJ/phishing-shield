import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Question {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  { q: "Recibes un email de tu banco pidiéndote tu contraseña. ¿Qué haces?", options: ["La envío inmediatamente", "Llamo al banco por el número oficial", "Hago clic en el enlace del email", "Respondo pidiendo más información"], correct: 1, explanation: "Los bancos NUNCA piden contraseñas por email. Siempre contacta directamente por canales oficiales." },
  { q: "¿Cuál de estas URLs es sospechosa?", options: ["https://www.google.com", "https://www.g00gle-security.com", "https://mail.google.com", "https://accounts.google.com"], correct: 1, explanation: "g00gle-security.com usa ceros en lugar de 'o' y añade palabras extra. Las URLs oficiales no tienen estos trucos." },
  { q: "¿Qué es la verificación en dos pasos (2FA)?", options: ["Escribir la contraseña dos veces", "Una segunda capa de seguridad además de la contraseña", "Tener dos contraseñas diferentes", "Verificar con dos amigos"], correct: 1, explanation: "El 2FA añade una capa extra (código por app, SMS, o llave física) que protege tu cuenta aunque alguien robe tu contraseña." },
  { q: "Estás en una cafetería y ves WiFi gratis sin contraseña. ¿Qué haces?", options: ["Me conecto y uso mi banco online", "Me conecto usando una VPN", "Comparto la contraseña con amigos", "Descargo archivos importantes"], correct: 1, explanation: "Las redes WiFi abiertas pueden ser interceptadas. Una VPN cifra tu conexión para proteger tus datos." },
  { q: "¿Cuál es una contraseña segura?", options: ["123456", "password", "MiG@t0_Feliz#2024!", "nombre de mi mascota"], correct: 2, explanation: "Una buena contraseña tiene 12+ caracteres, combina mayúsculas, números y símbolos, y no usa datos personales." },
  { q: "Un amigo te envía un enlace por WhatsApp diciendo '¡Mira esto!'. ¿Qué haces?", options: ["Lo abro sin pensar", "Le pregunto qué es antes de abrirlo", "Lo reenvío a más amigos", "Ignoro a mi amigo"], correct: 1, explanation: "Muchas cuentas hackeadas envían enlaces maliciosos. Siempre confirma con la persona antes de abrir enlaces sospechosos." },
  { q: "¿Qué es el smishing?", options: ["Phishing por SMS", "Un tipo de malware", "Un antivirus", "Una red social"], correct: 0, explanation: "El smishing es phishing a través de mensajes de texto (SMS). Usan urgencia y enlaces falsos." },
  { q: "¿Cada cuánto deberías actualizar tus contraseñas?", options: ["Nunca, si es buena", "Cada 3-6 meses las más importantes", "Todos los días", "Solo cuando te hackean"], correct: 1, explanation: "Las contraseñas importantes se deben cambiar periódicamente. Usa un gestor de contraseñas para facilitar el proceso." },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const finished = answers.length === questions.length;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[current].correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setAnswers([...answers, selected]);
    setSelected(null);
    setCurrent((c) => c + 1);
  };

  const reset = () => { setCurrent(0); setSelected(null); setScore(0); setAnswers([]); };

  const pct = finished ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <AnimatedSection className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4 text-foreground">
            Quiz <span className="gradient-cyber-text">Interactivo</span>
          </h1>
          <p className="text-muted-foreground text-lg">Pon a prueba tus conocimientos sobre ciberseguridad</p>
        </AnimatedSection>

        {!finished ? (
          <AnimatedSection key={current}>
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Pregunta {current + 1} de {questions.length}</span>
                <span>{score} correctas</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full gradient-cyber rounded-full transition-all duration-500" style={{ width: `${((current) / questions.length) * 100}%` }} />
              </div>
            </div>

            {/* Question */}
            <div className="rounded-xl border border-border/50 bg-card/80 p-6 mb-4">
              <h2 className="font-display text-lg font-bold mb-6 text-foreground">{questions[current].q}</h2>
              <div className="space-y-3">
                {questions[current].options.map((opt, i) => {
                  const isCorrect = i === questions[current].correct;
                  const isSelected = i === selected;
                  let cls = "border-border/50 bg-muted/30 hover:border-primary/40 hover:bg-primary/5 cursor-pointer";
                  if (selected !== null) {
                    if (isCorrect) cls = "border-primary bg-primary/10 box-glow";
                    else if (isSelected) cls = "border-destructive bg-destructive/10";
                    else cls = "border-border/30 bg-muted/20 opacity-50";
                  }
                  return (
                    <button key={i} onClick={() => handleSelect(i)}
                      className={`w-full text-left rounded-lg border p-4 transition-all flex items-center gap-3 ${cls}`}>
                      <span className="shrink-0 w-8 h-8 rounded-full border border-current flex items-center justify-center font-display text-sm font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-foreground text-sm">{opt}</span>
                      {selected !== null && isCorrect && <CheckCircle className="ml-auto h-5 w-5 text-primary" />}
                      {selected !== null && isSelected && !isCorrect && <XCircle className="ml-auto h-5 w-5 text-destructive" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {selected !== null && (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-4">
                <p className="text-sm text-foreground/80"><strong className="text-primary">Explicación:</strong> {questions[current].explanation}</p>
              </div>
            )}

            {selected !== null && current < questions.length - 1 && (
              <button onClick={handleNext} className="w-full rounded-lg gradient-cyber py-3 font-display text-sm font-bold text-primary-foreground hover:scale-[1.02] transition-transform">
                Siguiente pregunta →
              </button>
            )}
            {selected !== null && current === questions.length - 1 && (
              <button onClick={handleNext} className="w-full rounded-lg gradient-cyber py-3 font-display text-sm font-bold text-primary-foreground hover:scale-[1.02] transition-transform">
                Ver resultados 🏆
              </button>
            )}
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <div className="rounded-xl border border-primary/30 bg-card/80 p-8 text-center">
              <Trophy className={`mx-auto h-16 w-16 mb-4 ${pct >= 70 ? "text-primary animate-float text-glow" : "text-muted-foreground"}`} />
              <h2 className="font-display text-3xl font-black mb-2">
                <span className="gradient-cyber-text">{score}/{questions.length}</span>
              </h2>
              <p className="text-muted-foreground mb-2">{pct}% de aciertos</p>
              <p className="text-lg font-semibold mb-6 text-foreground">
                {pct >= 90 ? "🛡️ ¡Eres un verdadero CiberGuardián!" : pct >= 70 ? "😊 ¡Muy bien! Estás bien preparado." : pct >= 50 ? "😟 No está mal, pero puedes mejorar." : "😰 Necesitas repasar. ¡Revisa las secciones anteriores!"}
              </p>
              <button onClick={reset} className="inline-flex items-center gap-2 rounded-lg gradient-cyber px-8 py-3 font-display text-sm font-bold text-primary-foreground hover:scale-105 transition-transform">
                <RotateCcw className="h-4 w-4" /> Intentar de nuevo
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default Quiz;
