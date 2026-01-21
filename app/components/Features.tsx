"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Современный дизайн",
    description:
      "Уникальный дизайн с учётом последних трендов. Ваш сайт будет выделяться среди конкурентов.",
    gradient: "from-cyan-600 to-blue-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    ),
  },
  {
    title: "AI-генерация контента",
    description:
      "Используем GPT-5 и Claude для создания качественного контента, который конвертирует посетителей в клиентов.",
    gradient: "from-purple-600 to-pink-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
  {
    title: "Молниеносная скорость",
    description:
      "Ваш сайт будет готов за 1-3 часа. Никаких недель ожидания — запускайтесь уже сегодня!",
    gradient: "from-violet-600 to-purple-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

export default function Features() {
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
            Что вы получаете
          </h2>
          <p className="text-slate-400 text-lg">
            Профессиональный результат за считанные часы
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>

              {/* Badge */}
              <div
                className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.gradient} bg-opacity-20 rounded-full text-sm font-semibold border border-current mb-4`}
              >
                Фича #{index + 1}
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Checklist */}
              <ul className="space-y-3">
                {[
                  "Полная адаптивность под все устройства",
                  "Оптимизация для быстрой загрузки",
                  "Современные технологии и фреймворки",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
