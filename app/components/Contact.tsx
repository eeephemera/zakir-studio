"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const contactInfo = [
  {
    icon: (
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
    ),
    title: "Telegram",
    value: "@eeephemera",
    color: "cyan",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: "Время работы",
    value: "Пн-Вс: 10:00-22:00",
    color: "purple",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    title: "Скорость ответа",
    value: "В течение 15 минут",
    color: "violet",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black gradient-text mb-4">
            Готовы начать проект?
          </h2>
          <p className="text-slate-400 text-lg">
            Напишите мне в Telegram — отвечу в течение 15 минут
          </p>
        </motion.div>

        {/* Telegram Button */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="https://t.me/eeephemera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary btn-ripple shine-effect text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            Написать в Telegram
          </Link>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {index === 0 ? (
                <Link
                  href="https://t.me/eeephemera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-slate-800 bg-opacity-50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all cursor-pointer card-hover"
                >
                  <svg
                    className={`w-8 h-8 text-${info.color}-400 mx-auto mb-3`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {info.icon}
                  </svg>
                  <div className="text-slate-300 font-semibold">
                    {info.title}
                  </div>
                  <div className={`text-${info.color}-400`}>{info.value}</div>
                </Link>
              ) : (
                <div className="bg-slate-800 bg-opacity-50 rounded-xl p-6 border border-slate-700">
                  <svg
                    className={`w-8 h-8 text-${info.color}-400 mx-auto mb-3`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {info.icon}
                  </svg>
                  <div className="text-slate-300 font-semibold">
                    {info.title}
                  </div>
                  <div className={`text-${info.color}-400`}>{info.value}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
