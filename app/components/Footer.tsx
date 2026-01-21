import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
              Zakir.Studio
            </h3>
            <p className="text-slate-400">
              AI-разработка современных сайтов. Быстро. Качественно.
              Профессионально.
            </p>
          </div>

          <div>
            <h4 className="text-white font-orbitron font-bold mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#technology"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Технологии
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Цены
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-orbitron font-bold mb-4">
              Контакты
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Telegram: @eeephemera</li>
              <li>Работаем: Пн-Вс 10:00-22:00</li>
              <li>Ответ в течение 15 минут</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Zakir.Studio. Все права защищены.
          </p>
          <div className="flex gap-4">
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
      </div>
    </footer>
  );
}
