"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    title: "YOL Academy - Образовательная платформа",
    category: "Лендинг",
    description: "Современный лендинг для академии YOL с адаптивным дизайном",
    url: "https://yol-academy.vercel.app/",
    tags: ["Next.js", "Tailwind", "Vercel"],
    image: "/portfolio/yol-academy.png",
  },
  {
    title: "Zakir.Studio - Этот сайт",
    category: "Визитка",
    description: "Сайт-портфолио студии AI-разработки с анимациями",
    url: "https://zakir.tech",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/portfolio/zakir-studio.png",
  },
];

const categories = ["Все", "Лендинг", "Визитка"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredItems =
    activeCategory === "Все"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black gradient-text mb-4">
            Примеры наших работ
          </h2>
          <p className="text-slate-400 text-lg">
            Готовые проекты, созданные с помощью AI
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all flex flex-col h-full min-h-[480px]">
                  {/* Preview Area */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg 
                            className="w-8 h-8 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-white text-sm font-semibold">Посмотреть проект →</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-cyan-900 bg-opacity-50 rounded-full text-cyan-300 text-sm font-semibold border border-cyan-700">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-400 mb-4">
            Хотите такой же сайт для своего бизнеса?
          </p>
          <a
            href="https://t.me/zakir4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            Заказать свой сайт
          </a>
        </motion.div>
      </div>
    </section>
  );
}
