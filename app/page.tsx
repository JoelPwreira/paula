"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Target,
  TrendingUp,
  Clock,
  Sparkles,
  CheckCircle,
  BarChart3,
  Zap,
  Award,
  BookOpen,
  Users,
  Star,
  ArrowRight,
  ChevronDown,
  Euro,
  GraduationCap,
  Calculator,
  PiggyBank,
  Timer,
  BookMarked,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "IA Entrenada en la PAU",
      description:
        "Todos los temarios y exámenes desde 2010. Pau.la conoce cada detalle de la PAU.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Enfoque Estratégico",
      description:
        "No memorizas todo. Estudias lo que realmente va a salir y maximizas tu nota.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Predicciones Precisas",
      description:
        "Probabilidades de que caigan ciertos temas basadas en estadísticas reales.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Clock,
      title: "Ahorra 70% del Tiempo",
      description:
        "Deja de estudiar cosas que no van a preguntar. Enfócate en lo importante.",
      color: "from-purple-500 to-blue-500",
    },
  ];

  const stats = [
    { value: "9.2", label: "Nota Media", suffix: "/10" },
    { value: "70%", label: "Menos Tiempo", suffix: "" },
    { value: "94%", label: "Entran 1ª Opción", suffix: "" },
    { value: "24/7", label: "Disponible", suffix: "" },
  ];

  const promptExamples = [
    {
      prompt:
        "Paula, me quedan 2 semanas para la PAU y no he empezado casi, ¿qué hago?",
      response: "Analiza tu situación y crea un plan intensivo ultra-optimizado",
      icon: Zap,
      color: "from-red-500 to-pink-500",
    },
    {
      prompt:
        "Paula, ¿qué probabilidad hay de que entre el tema 4? ¿Lo estudio o lo descarto?",
      response:
        "Te da probabilidades basadas en estadísticas de años anteriores",
      icon: BarChart3,
      color: "from-purple-500 to-blue-500",
    },
    {
      prompt: "¿Qué ejercicios de matemáticas son más probables en mi examen?",
      response:
        "Identifica los patrones más frecuentes y te prepara específicamente",
      icon: Calculator,
      color: "from-blue-500 to-cyan-500",
    },
    {
      prompt:
        "Necesito un 12.5 para entrar en Medicina, ¿es realista con mi nivel actual?",
      response:
        "Evalúa tu situación y te diseña el camino más eficiente para lograrlo",
      icon: Target,
      color: "from-pink-500 to-purple-500",
    },
    {
      prompt:
        "¿Me conviene repasar toda historia o centrarme en ciertos temas?",
      response:
        "Te dice exactamente qué temas priorizar según probabilidades de la PAU",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      prompt: "Tengo bloqueo con filosofía, ¿cómo mejoro rápido?",
      response:
        "Estrategias específicas y técnicas probadas para superar tus debilidades",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const subjects = [
    "Historia de España",
    "Lengua",
    "Filosofía",
    "Inglés",
    "Matemáticas",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fondo animado */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {/* Sustituye esto por tu logo cuando lo tengas */}
              <span className="inline-block w-6 h-6 rounded bg-gradient-to-r from-purple-400 to-pink-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pau.la
              </span>
              <span className="hidden sm:inline-flex border border-purple-500/30 text-purple-300 text-xs rounded px-2 py-1">
                <GraduationCap className="w-3 h-3 mr-1 inline" />
                IA para la PAU
              </span>
            </div>
            <a
              href="#precio"
              className="rounded-lg px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 inline-flex items-center"
            >
              <Euro className="w-4 h-4 mr-2" />
              Accede por 10€
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Saca un{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                10 en la PAU
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-purple-300">
                Sin Perder el Tiempo
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto">
              Pau.la te dice exactamente{" "}
              <span className="text-purple-400 font-semibold">qué estudiar</span>{" "}
              y{" "}
              <span className="text-pink-400 font-semibold">qué descartar</span>
            </p>

            <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              <span className="text-purple-300 font-semibold">Estudia 70% menos</span>{" "}
              y <span className="text-pink-300 font-semibold">ahorra miles</span> en academias
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#precio"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                <Euro className="w-5 h-5 mr-2" />
                Accede a Pau.la por 10€
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#como"
                className="rounded-lg border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Ver Demo
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {subjects.map((subject, i) => (
                <motion.span
                  key={subject}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.8,
                  }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="border border-blue-500/30 text-blue-300 bg-blue-500/5 rounded px-3 py-1 inline-flex items-center"
                >
                  <BookMarked className="w-3 h-3 mr-1" />
                  {subject}
                </motion.span>
              ))}
            </div>

            <ChevronDown className="w-8 h-8 mx-auto text-purple-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Ahorro tiempo/dinero */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ¿Academia de 3.000€?
              </span>{" "}
              No, Gracias.
            </h2>
            <p className="text-xl text-purple-200">
              Pau.la te da resultados mejores por una fracción del precio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Columna 1 */}
            <div className="bg-red-500/5 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-300 mb-2">
                    Academia Tradicional
                  </h3>
                  <p className="text-red-200 text-sm mb-4">El método antiguo</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "2.000€ - 4.000€ al año",
                  "Clases genéricas para todos",
                  "8-10 horas semanales en desplazamientos",
                  "Estudias TODO el temario aunque no salga",
                  "Horarios rígidos",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-2 text-red-100">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 2 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">
                    Pau.la
                  </h3>
                  <p className="text-purple-200 text-sm mb-4">
                    IA personalizada 24/7
                  </p>
                </div>
              </div>
              <ul className="space-y-3 relative z-10">
                {[
                  "Solo 10€ — pago único",
                  "Plan 100% personalizado",
                  "Estudia 70% menos tiempo",
                  "Solo lo que realmente va a salir",
                  "Disponible 24/7",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-2 text-purple-100">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-purple-500/30">
                <div className="flex items-center gap-3">
                  <PiggyBank className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="text-sm text-purple-200">Ahorras aproximadamente</p>
                    <p className="text-2xl font-bold text-green-400">
                      2.990€ - 3.990€
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque central */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-2xl p-8 text-center">
            <Timer className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-3 text-purple-200">
              Minimiza tu Tiempo de Estudio
            </h3>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto">
              Pau.la analiza años de datos de la PAU y te dice exactamente en qué enfocarte.{" "}
              <span className="text-purple-300 font-semibold">Reduce tu tiempo de estudio en un 70%</span>{" "}
              mientras <span className="text-pink-300 font-semibold">mejoras tus resultados</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              El Problema del <span className="text-red-400">Método Tradicional</span>
            </h2>
            <p className="text-xl text-purple-200">Miles de horas… para nada</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "😰",
                title: "Pierdes Tiempo",
                desc: "Estudiando temas con 5% de probabilidad",
                icon: Clock,
              },
              {
                emoji: "💸",
                title: "Gastas Miles",
                desc: "Academias sin personalización",
                icon: Euro,
              },
              {
                emoji: "😢",
                title: "Nota Mediocre",
                desc: "No te enfocas en lo que importa",
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 text-center hover:bg-red-500/10 transition-all"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-300 mb-2">{item.title}</h3>
                <p className="text-red-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solución / Features */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pau.la{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cambia el Juego
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-4">
              Nada de estudiar por estudiar. Te enseñamos a **sacar puntos** en la PAU.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}
                  >
                    <f.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-purple-200">
                    {f.title}
                  </h3>
                  <p className="text-purple-100">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="text-purple-200 text-lg">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como" className="relative z-10 py-20 px-6 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cómo Funciona <span className="text-purple-400">Pau.la</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: BarChart3,
                title: "Analiza tu Situación",
                desc:
                  "Pau.la evalúa tu nivel actual y la nota que necesitas para tu carrera.",
                note: "Cuéntale tus fortalezas y debilidades",
              },
              {
                step: "02",
                icon: Target,
                title: "Plan Personalizado",
                desc:
                  "Plan de estudio ultra-optimizado según estadísticas de años anteriores.",
                note: "Solo lo que necesitas estudiar",
              },
              {
                step: "03",
                icon: Award,
                title: "Consigue tu 10",
                desc:
                  "Estudias solo lo necesario, con predicciones de lo que va a salir.",
                note: "Y entra en la carrera de tus sueños",
              },
            ].map((it, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-purple-500/20 mb-4">
                  {it.step}
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <it.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-200">
                    {it.title}
                  </h3>
                  <p className="text-purple-100 mb-4">{it.desc}</p>
                  <span className="border border-blue-500/30 text-blue-300 bg-blue-500/5 rounded px-2 py-1 inline-flex items-center text-sm">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    {it.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos de prompts */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pregúntale lo que <span className="text-purple-400">necesites</span>
            </h2>
            <p className="text-xl text-purple-200">Ejemplos reales de estudiantes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {promptExamples.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-purple-500/10 transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ex.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <ex.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-3">
                        <p className="text-blue-200 italic">"{ex.prompt}"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <p className="text-purple-100 font-medium">{ex.response}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="precio" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-3xl p-12 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Zap className="w-16 h-16 mx-auto mb-6 text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Entra en la Carrera de{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  tus Sueños
                </span>
              </h2>
              <p className="text-xl text-purple-100 mb-4">
                Por solo <span className="text-3xl font-bold text-purple-400">10€</span>, accede a la IA que está revolucionando la PAU
              </p>
              <p className="text-lg text-purple-200 mb-8">
                Ahorra miles en academias • Estudia 70% menos • Mejora tu nota
              </p>
              <a
                href="#"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-12 py-4 inline-flex items-center justify-center"
              >
                <Euro className="w-6 h-6 mr-2" />
                Accede a Pau.la por 10€
                <Sparkles className="w-6 h-6 ml-3" />
              </a>
              <p className="text-sm text-purple-300 mt-6">
                Pago único • Acceso inmediato • Garantía de 7 días
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-block w-6 h-6 rounded bg-gradient-to-r from-purple-400 to-pink-400" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Pau.la
                </span>
                <span className="text-xs text-purple-300">Tu asistente para la PAU</span>
              </div>
            </div>
            <p className="text-purple-300 text-sm text-center">
              © {new Date().getFullYear()} Pau.la — Preparación PAU en España
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}