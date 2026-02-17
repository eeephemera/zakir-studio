import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Реферальная программа",
  description: "Получайте 30% с каждого заказа от приведённых клиентов. Партнёрская программа Zakir.Studio",
  keywords: [
    "реферальная программа",
    "партнёрская программа",
    "заработок на рефералах",
    "zakir studio партнёрка",
  ],
};

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 bg-opacity-95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-orbitron font-bold gradient-text"
            >
              Zakir.Studio
            </Link>
            <Link
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              ← На главную
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-opacity-20 rounded-full text-cyan-400 text-sm font-semibold border border-cyan-700 mb-6">
              💰 Партнёрская программа
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-black gradient-text mb-6">
              Зарабатывайте с нами
            </h1>
            <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto">
              Получайте <span className="text-cyan-400 font-bold">30%</span> с
              каждого заказа от приведённых вами клиентов
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 mb-12">
            {/* How it works */}
            <section className="mb-12">
              <h2 className="text-3xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">01.</span>
                Как это работает
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Приводите клиентов
                    </h3>
                    <p className="text-slate-400">
                      Расскажите о Zakir.Studio своим знакомым, подписчикам или
                      клиентам. Поделитесь ссылкой на наш сайт или отправьте их
                      напрямую в Telegram.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Клиент оформляет заказ
                    </h3>
                    <p className="text-slate-400">
                      Когда клиент обращается к нам и упоминает, что пришёл от
                      вас, мы фиксируем это. Важно: клиент должен сказать ваше
                      имя или никнейм при оформлении заказа.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Получаете 30% от суммы заказа
                    </h3>
                    <p className="text-slate-400">
                      После успешного выполнения и оплаты заказа, вы получаете
                      30% от стоимости работы. Выплата происходит любым удобным
                      способом.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conditions */}
            <section className="mb-12">
              <h2 className="text-3xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">02.</span>
                Условия программы
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 bg-opacity-50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start gap-3 mb-3">
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
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        Без ограничений
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Приводите сколько угодно клиентов. Чем больше заказов —
                        тем больше заработок.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 bg-opacity-50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start gap-3 mb-3">
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
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        Быстрые выплаты
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Выплачиваем вознаграждение сразу после получения оплаты
                        от клиента.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 bg-opacity-50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start gap-3 mb-3">
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
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        Любые способы оплаты
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Карта, криптовалюта, Telegram Wallet — выбирайте
                        удобный способ получения денег.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 bg-opacity-50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start gap-3 mb-3">
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
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        Прозрачность
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Вы всегда будете в курсе статуса заказа и суммы вашего
                        вознаграждения.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Calculator */}
            <section className="mb-12">
              <h2 className="text-3xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">03.</span>
                Сколько можно заработать
              </h2>
              <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 border border-cyan-700">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-slate-400 mb-2">1 заказ</div>
                    <div className="text-3xl font-bold text-white mb-1">
                      12,000₽
                    </div>
                    <div className="text-cyan-400 font-semibold">
                      Ваши 30% = 3,600₽
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-2">5 клиентов</div>
                    <div className="text-3xl font-bold text-white mb-1">
                      60,000₽
                    </div>
                    <div className="text-cyan-400 font-semibold">
                      Ваши 30% = 18,000₽
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-2">10 клиентов</div>
                    <div className="text-3xl font-bold text-white mb-1">
                      120,000₽
                    </div>
                    <div className="text-cyan-400 font-semibold">
                      Ваши 30% = 36,000₽
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Requirements */}
            <section className="mb-12">
              <h2 className="text-3xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">04.</span>
                Требования
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-slate-300">
                    Клиент должен упомянуть ваше имя или никнейм при первом
                    обращении
                  </p>
                </div>
                <div className="flex items-start gap-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-slate-300">
                    Вознаграждение выплачивается после успешного завершения и
                    оплаты заказа
                  </p>
                </div>
                <div className="flex items-start gap-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-slate-300">
                    Запрещается спам и навязчивая реклама от вашего имени
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
                Готовы начать зарабатывать?
              </h2>
              <p className="text-slate-400 mb-6">
                Напишите мне в Telegram, чтобы стать партнёром
              </p>
              <a
                href="https://t.me/zakir4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
                Стать партнёром
              </a>
            </section>
          </div>

          {/* FAQ */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700">
            <h2 className="text-3xl font-orbitron font-bold text-white mb-8 text-center">
              Частые вопросы
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Как клиент должен указать, что пришёл от меня?
                </h3>
                <p className="text-slate-400">
                  При первом обращении в Telegram клиент должен написать: "Меня
                  направил [ваше имя/никнейм]" или просто упомянуть вас в
                  разговоре.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Когда я получу выплату?
                </h3>
                <p className="text-slate-400">
                  Сразу после того, как клиент оплатит заказ и работа будет
                  завершена. Обычно это занимает 1-3 дня после завершения
                  проекта.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Можно ли получать процент с повторных заказов клиента?
                </h3>
                <p className="text-slate-400">
                  Да! Если ваш клиент возвращается за дополнительными услугами,
                  вы продолжаете получать 30% с каждого его заказа.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Нужно ли заключать договор?
                </h3>
                <p className="text-slate-400">
                  Для начала работы договор не требуется. Мы работаем на основе
                  доверия. При желании можем оформить партнёрское соглашение.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Zakir.Studio. Все права защищены.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Политика конфиденциальности
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/offer"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Публичная оферта
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
