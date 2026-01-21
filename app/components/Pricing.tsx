"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black gradient-text mb-4">
            Простые и прозрачные цены
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-8">
            Никаких скрытых платежей — только честная стоимость
          </p>
          <p className="text-slate-300 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-white">Лендинг-пейдж</strong> — одностраничный сайт для продвижения продукта или услуги.{" "}
            <strong className="text-white">Сайт-визитка</strong> — многостраничный сайт (до 5 страниц) для представления компании.
            Все сайты включают: уникальный дизайн, адаптивную вёрстку и исходные файлы.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Разработка сайта */}
          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border border-slate-700 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              transition: { type: "spring", stiffness: 300 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex-1">
              <div className="text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                Основное
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
                Разработка сайта
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl font-orbitron font-black gradient-text">
                  10000
                </span>
                <span className="text-2xl text-slate-400">₽</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Лендинг или сайт-визитка",
                  "Уникальный AI-дизайн",
                  "Адаптив под все устройства",
                  "Готовность: 1-3 часа",
                  "Исходные файлы",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1"
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
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Размещение в интернете */}
          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border border-slate-700 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              transition: { type: "spring", stiffness: 300 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex-1">
              <div className="text-purple-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                Дополнительно
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
                Размещение в интернете
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl font-orbitron font-black gradient-text">
                  3000
                </span>
                <span className="text-2xl text-slate-400">₽</span>
              </div>
              <p className="text-slate-400 mb-6">
                Публикуем ваш сайт в интернет, чтобы клиенты могли его найти и открыть
              </p>
              <ul className="space-y-4">
                {[
                  "Сайт будет доступен 24/7",
                  "Ваш собственный адрес (домен)",
                  "Защищённое соединение (замочек)",
                  "Помощь при любых вопросах",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1"
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
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Полный пакет */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto relative overflow-hidden rounded-3xl p-10 border-2 border-cyan-500 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ 
            scale: 1.03,
            borderColor: "#06B6D4",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" style={{ opacity: 0.95 }} />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white text-sm font-bold mb-4 uppercase tracking-wider">
              🔥 Лучшее предложение
            </div>
            <div className="text-white text-xl font-semibold mb-3">
              Полный пакет (сайт + размещение)
            </div>
            <div className="text-6xl md:text-7xl font-orbitron font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: "200% 200%" }}>
                12 000 ₽
              </span>
            </div>
            <div className="text-slate-300 text-lg">
              Ваш сайт онлайн и готов к работе за 1-3 часа
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
