"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Скорость",
    description: "То, что раньше занимало дни, теперь готово за 1-3 часа",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Качество",
    description: "Платные AI-модели обеспечивают профессиональный результат",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Современность",
    description: "Сайты создаются с учётом последних трендов и стандартов",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Цена",
    description: "Без посредников — вы платите только за результат",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

const loadingSteps = [
  "AI Processing",
  "Analyzing design",
  "Generating code",
  "Optimizing performance",
];

export default function WhyAI() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black gradient-text mb-4">
            Почему именно AI?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 3,
                rotateX: 3,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {benefit.icon}
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Processing Animation */}
        <motion.div
          className="max-w-2xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-6">
            {loadingSteps.map((step, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-space text-sm flex items-center gap-2">
                    $ {step}
                    <span className="inline-flex gap-1">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.span
                          key={i}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            delay: delay,
                          }}
                        >
                          .
                        </motion.span>
                      ))}
                    </span>
                  </span>
                  <span className="text-cyan-400 text-sm font-semibold">
                    {index === 0 ? "87%" : index === 1 ? "94%" : index === 2 ? "98%" : "100%"}
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                    style={{
                      width:
                        index === 0 ? "87%" : index === 1 ? "94%" : index === 2 ? "98%" : "100%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
