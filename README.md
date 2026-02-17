# 🚀 Zakir.Studio - AI-разработка сайтов

Современный сайт-портфолио студии AI-разработки с реферальной программой.

## 📦 Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации

## 🌐 Живой сайт

- **Основной:** https://zakir.tech
- **Реферальная программа:** https://zakir.tech/referral

## 📄 Документация

### Для разработки:
- `README.md` - этот файл
- `MIGRATION_GUIDE.md` - гайд по миграции HTML → Next.js

### Для бизнеса:
- `PROMO_TEXTS.md` - готовые тексты для продвижения
- `REFERRAL_INFO.md` - информация о партнёрской программе
- `DEPLOYMENT_GUIDE.md` - полный гайд по деплою на VPS
- `SEO_GUIDE.md` - руководство по SEO и индексации

## 🚀 Быстрый старт

### Разработка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Открыть: http://localhost:3000
```

### Сборка

```bash
# Продакшн сборка
npm run build

# Запуск продакшн версии
npm start
```

## 📁 Структура проекта

```
zakir-studio-nextjs/
├── app/
│   ├── components/          # React компоненты
│   │   ├── Navigation.tsx   # Навигация
│   │   ├── Hero.tsx         # Главный экран
│   │   ├── Features.tsx     # Фичи
│   │   ├── Portfolio.tsx    # Портфолио
│   │   ├── Pricing.tsx      # Цены
│   │   ├── Process.tsx      # Процесс работы
│   │   ├── Contact.tsx      # Контакты
│   │   └── Footer.tsx       # Футер
│   ├── referral/            # Страница реферальной программы
│   ├── privacy-policy/      # Политика конфиденциальности
│   ├── offer/               # Публичная оферта
│   ├── layout.tsx           # Общий лейаут
│   ├── page.tsx             # Главная страница
│   ├── globals.css          # Глобальные стили
│   ├── sitemap.ts           # Карта сайта (SEO)
│   └── robots.ts            # Robots.txt (SEO)
├── public/                  # Статические файлы
├── PROMO_TEXTS.md          # Тексты для продвижения
├── REFERRAL_INFO.md        # Инфо о партнёрке
├── DEPLOYMENT_GUIDE.md     # Гайд по деплою
├── SEO_GUIDE.md            # Гайд по SEO
└── package.json            # Зависимости
```

## 🎯 Особенности

### Технические
- ✅ Server Components (по умолчанию)
- ✅ Оптимизированные шрифты (Google Fonts)
- ✅ SEO оптимизация (metadata, sitemap, robots)
- ✅ Адаптивный дизайн
- ✅ Плавные анимации (Framer Motion)
- ✅ TypeScript strict mode

### Бизнес
- 💰 Реферальная программа (30% с заказа)
- 📱 Интеграция с Telegram (@zakir4)
- 💳 Фиксированная цена: 12,000₽
- 🚀 Быстрая разработка: 1-3 часа

## 💰 Реферальная программа

Получайте **30% (3,600₽)** с каждого заказа от приведённых клиентов!

**Как работает:**
1. Приводите клиентов (используйте тексты из `PROMO_TEXTS.md`)
2. Клиент упоминает вас при заказе
3. Получаете 30% после оплаты

**Подробности:**
- Страница: https://zakir.tech/referral
- Документация: `REFERRAL_INFO.md`

## 📱 Контакты

- **Telegram:** [@zakir4](https://t.me/zakir4)
- **Сайт:** [zakir.tech](https://zakir.tech)

## 📊 Цены

**Стандартный пакет: 12,000₽**

Включает:
- Разработка сайта (Next.js)
- Современный дизайн
- Хостинг на год
- SSL сертификат
- Техподдержка

## 🛠️ Деплой

### На VPS (рекомендуется)

Полный гайд: `DEPLOYMENT_GUIDE.md`

**Краткая инструкция:**

```bash
# На сервере
cd /var/www
git clone https://github.com/username/zakir-studio.git
cd zakir-studio

npm install
npm run build

pm2 start npm --name "zakir-studio" -- start
pm2 save
pm2 startup
```

### На Vercel

```bash
# Установить Vercel CLI
npm i -g vercel

# Деплой
vercel
```

## 🔍 SEO

### Sitemap
- Автогенерация: `app/sitemap.ts`
- URL: https://zakir.tech/sitemap.xml

### Robots.txt
- Автогенерация: `app/robots.ts`
- URL: https://zakir.tech/robots.txt

### Индексация
Полный гайд: `SEO_GUIDE.md`

**Основные шаги:**
1. Регистрация в Яндекс.Вебмастер
2. Регистрация в Google Search Console
3. Отправка sitemap
4. Запрос индексации

## 📈 Статистика

- **Скорость:** ~0.3s загрузка
- **Размер:** ~154KB First Load JS
- **Производительность:** 95+ на PageSpeed
- **SEO:** Оптимизирован (metadata, sitemap, robots)

## 🔐 Безопасность

- ✅ HTTPS (Let's Encrypt)
- ✅ Security headers
- ✅ Нет уязвимостей npm
- ✅ TypeScript strict mode

## 📝 Лицензия

© 2026 Zakir.Studio. Все права защищены.

## 🤝 Поддержка

Вопросы и предложения:
- Telegram: [@zakir4](https://t.me/zakir4)
- Email: через форму на сайте

---

**Сделано с ❤️ с использованием AI-технологий**
