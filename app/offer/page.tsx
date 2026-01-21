import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публичная оферта - Zakir.Studio",
  description: "Договор оказания услуг по разработке веб-сайтов",
};

export default function Offer() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-orbitron font-bold gradient-text"
            >
              Zakir.Studio
            </Link>
            <Link
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              ← На главную
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Публичная оферта
          </h1>

          <p className="text-slate-400 mb-8">
            Договор оказания услуг по разработке веб-сайтов
            <br />
            Дата публикации: 18 января 2026 года
          </p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
                1. Общие положения
              </h2>
              <p className="mb-4">
                1.1. Настоящая публичная оферта (далее — «Оферта») является
                официальным предложением Zakir.Studio (далее — «Исполнитель»)
                заключить договор оказания услуг по разработке веб-сайтов
                (далее — «Договор»).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
                3. Стоимость услуг
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>
                  <strong>Разработка сайта:</strong> 10 000 рублей
                </li>
                <li>
                  <strong>Размещение в интернете:</strong> 3 000 рублей
                </li>
                <li>
                  <strong>Полный пакет:</strong> 12 000 рублей
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
                13. Реквизиты и контакты
              </h2>
              <p className="mb-2">
                <strong>Исполнитель:</strong> Zakir.Studio
              </p>
              <p className="mb-2">
                <strong>Telegram:</strong>{" "}
                <Link
                  href="https://t.me/eeephemera"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  @eeephemera
                </Link>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
