import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности - Zakir.Studio",
  description: "Политика конфиденциальности и обработки персональных данных Zakir.Studio",
};

export default function PrivacyPolicy() {
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
            Политика конфиденциальности
          </h1>

          <p className="text-slate-400 mb-8">
            Дата последнего обновления: 18 января 2026 года
          </p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
                1. Общие положения
              </h2>
              <p className="mb-4">
                Настоящая Политика конфиденциальности (далее — «Политика»)
                определяет порядок обработки и защиты персональных данных
                пользователей сайта zakir-studio.vercel.app (далее — «Сайт»),
                предоставляющего услуги по разработке веб-сайтов.
              </p>
              <p>
                Используя Сайт и оставляя свои персональные данные, вы даете
                согласие на их обработку в соответствии с настоящей Политикой.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
                2. Какие данные мы собираем
              </h2>
              <p className="mb-4">Мы можем собирать следующую информацию:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Имя и фамилию</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
                <li>Username в Telegram</li>
                <li>Информацию о проекте и требованиях к сайту</li>
                <li>
                  Техническую информацию (IP-адрес, тип браузера, операционная
                  система)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
                3. Цели обработки данных
              </h2>
              <p className="mb-4">
                Мы используем ваши персональные данные для:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Связи с вами по вопросам разработки сайта</li>
                <li>
                  Предоставления услуг по разработке и размещению веб-сайтов
                </li>
                <li>Выполнения договорных обязательств</li>
                <li>Технической поддержки</li>
                <li>Улучшения качества услуг</li>
                <li>
                  Информирования о новых услугах (с вашего согласия)
                </li>
              </ul>
            </section>

            {/* Добавьте остальные секции по аналогии */}

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
                10. Контактная информация
              </h2>
              <p className="mb-2">
                <strong>Оператор:</strong> Zakir.Studio
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
              <p>
                По всем вопросам, связанным с обработкой персональных данных,
                обращайтесь к нам через Telegram.
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
