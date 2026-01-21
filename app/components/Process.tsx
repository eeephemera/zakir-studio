"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Заявка",
    description: "Оставляете заявку с описанием вашего проекта",
    color: "from-purple-600 to-cyan-600",
    border: "border-purple-800",
  },
  {
    number: 2,
    title: "Обсуждение",
    description: "Уточняем детали и согласовываем концепцию",
    color: "from-cyan-600 to-purple-600",
    border: "border-cyan-800",
  },
  {
    number: 3,
    title: "Разработка",
    description: "AI создаёт ваш сайт за 1-3 часа",
    color: "from-violet-600 to-cyan-600",
    border: "border-violet-800",
  },
  {
    number: 4,
    title: "Запуск",
    description: "Получаете готовый сайт и деплоим его онлайн",
    color: "from-purple-600 to-violet-600",
    border: "border-purple-800",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black gradient-text mb-4">
            Как это работает
          </h2>
          <p className="text-slate-400 text-lg">
            Простой процесс от заявки до готового сайта
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border ${step.border} text-center card-hover min-h-[180px] flex flex-col justify-center`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-orbitron font-bold`}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
