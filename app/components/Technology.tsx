"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Claude Sonnet 4.5",
    description: "Самая продвинутая AI-модель Anthropic для генерации кода и дизайна",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    color: "purple",
  },
  {
    name: "GPT-5",
    description: "Новейшая AI-модель от OpenAI для создания контента и решения задач",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    color: "cyan",
  },
  {
    name: "Grok AI",
    description: "AI-система от xAI для генерации изображений и визуального контента",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
    color: "violet",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black gradient-text mb-4">
            AI-технологии нового поколения
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Мы используем только платные версии самых передовых AI-систем для
            создания вашего сайта
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-${tech.color}-600 rounded-xl flex items-center justify-center mb-4 glow-effect transition-transform duration-300 hover:rotate-[10deg] hover:scale-110`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {tech.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-3">
                  {tech.name}
                </h3>
                <p className="text-slate-400 mb-4">{tech.description}</p>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-900 to-purple-900 rounded-full text-cyan-300 text-sm font-semibold border border-cyan-800">
                  Premium версия
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
