# 🚀 Руководство: Миграция с Vanilla HTML на Next.js + TypeScript + Tailwind

## 📋 Оглавление
1. [Общие правила и принципы](#общие-правила-и-принципы)
2. [Стек технологий](#стек-технологий)
3. [Структура проекта](#структура-проекта)
4. [Пошаговая миграция](#пошаговая-миграция)
5. [Улучшения и оптимизации](#улучшения-и-оптимизации)
6. [Чеклист для быстрой миграции](#чеклист-для-быстрой-миграции)

---

## Общие правила и принципы

### 🎯 Основные принципы миграции

1. **Использовать актуальные версии**
   - Next.js 15+ (App Router, не Pages Router)
   - React 19+
   - TypeScript 5.7+
   - Tailwind CSS 3.4+
   - Framer Motion 11+ (для анимаций)

2. **Придерживаться современных подходов**
   - App Router вместо Pages Router
   - Server Components по умолчанию
   - Client Components только где нужна интерактивность
   - TypeScript strict mode
   - Все файлы в TypeScript (.tsx, .ts)

3. **Сохранять визуальную идентичность**
   - Один в один переносим дизайн
   - Те же цвета, шрифты, анимации
   - Улучшаем только производительность и код

4. **Оптимизировать сразу**
   - Next/Image для всех изображений
   - Metadata API для SEO
   - Правильная структура импортов
   - Lazy loading где нужно (но не переборщить)

---

## Стек технологий

### ✅ Обязательный стек

```json
{
  "dependencies": {
    "next": "^15.1.0",           // Последний Next.js
    "react": "^19.0.0",          // React 19
    "react-dom": "^19.0.0",
    "framer-motion": "^11.11.17" // Анимации
  },
  "devDependencies": {
    "@types/node": "^22.10.5",
    "@types/react": "^19.0.1",
    "@types/react-dom": "^19.0.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}
```

### 📦 Дополнительные библиотеки (по необходимости)

```bash
# Для форм
npm install react-hook-form zod

# Для иконок
npm install lucide-react

# Для state management (если нужно)
npm install zustand
```

---

## Структура проекта

### 📁 Правильная структура Next.js 15 (App Router)

```
zakir-studio-nextjs/
├── app/
│   ├── components/           # React компоненты
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── globals.css          # Глобальные стили Tailwind
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Главная страница
│   ├── privacy-policy/      # Вложенные страницы
│   │   └── page.tsx
│   └── offer/
│       └── page.tsx
├── public/
│   └── images/              # Статические файлы
├── next.config.ts           # Конфиг Next.js
├── tailwind.config.ts       # Конфиг Tailwind
├── tsconfig.json            # Конфиг TypeScript
├── postcss.config.mjs       # Конфиг PostCSS
├── package.json
└── .gitignore
```

### ❌ НЕ используем:
- `pages/` директорию (старый подход)
- `_app.tsx` и `_document.tsx` (заменены на layout.tsx)
- `getServerSideProps` / `getStaticProps` (используем Server Components)

---

## Пошаговая миграция

### Шаг 1: Создание базовой структуры

#### 1.1 package.json
```json
{
  "name": "project-name",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

#### 1.2 tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

#### 1.3 next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
```

#### 1.4 tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        // ... другие шрифты
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        // ... другие анимации
      },
    },
  },
  plugins: [],
};
```

---

### Шаг 2: Перенос шрифтов

#### В vanilla HTML было:
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
```

#### В Next.js стало:
```typescript
// app/layout.tsx
import { Orbitron, Space_Mono, Inter } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],  // ВАЖНО: проверить доступные subsets
  variable: "--font-orbitron",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html className={`${orbitron.variable} ${spaceMono.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  );
}
```

**⚠️ ВАЖНО:** Проверяйте доступные subsets для каждого шрифта!
- Orbitron: только `["latin"]`
- Inter: `["latin", "cyrillic"]`

---

### Шаг 3: Перенос стилей

#### 3.1 globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-orbitron: 'Orbitron', sans-serif;
  }
  
  body {
    @apply bg-[#0A0E1A] text-slate-200 antialiased;
  }
}

@layer components {
  .gradient-text {
    @apply bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent;
  }
  
  .btn-primary {
    @apply bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 transition-all duration-300;
  }
}
```

#### 3.2 Перенос inline стилей
```typescript
// Было в HTML:
<div style="background: linear-gradient(...)">

// Стало в Tailwind:
<div className="bg-gradient-to-r from-cyan-600 to-purple-600">
```

---

### Шаг 4: Создание компонентов

#### 4.1 Правило разделения на компоненты

**Client Components** (`"use client"` в начале файла):
- Нужны хуки: useState, useEffect, useRef
- Нужны анимации: Framer Motion
- Нужны event handlers: onClick, onChange, onSubmit
- Примеры: Navigation, Hero с анимациями, формы

**Server Components** (по умолчанию):
- Статический контент
- Fetch данных на сервере
- SEO контент
- Примеры: Footer (если нет интерактивности)

#### 4.2 Шаблон Client Component
```typescript
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ComponentName() {
  const [state, setState] = useState();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Контент */}
    </motion.div>
  );
}
```

#### 4.3 Шаблон Server Component
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function ComponentName() {
  return (
    <div>
      {/* Статический контент */}
    </div>
  );
}
```

---

### Шаг 5: Миграция HTML секций в компоненты

#### Vanilla HTML секция:
```html
<section class="hero">
  <h1>Заголовок</h1>
  <p>Описание</p>
  <button onclick="handleClick()">Кнопка</button>
</section>

<script>
function handleClick() {
  // логика
}
</script>
```

#### Next.js компонент:
```typescript
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleClick = () => {
    // логика
  };
  
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Заголовок
      </motion.h1>
      <p>Описание</p>
      <button onClick={handleClick}>Кнопка</button>
    </section>
  );
}
```

---

### Шаг 6: Миграция анимаций

#### 6.1 CSS анимации → Tailwind utilities

**Было:**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade-in { animation: fadeIn 0.5s; }
```

**Стало:**
```typescript
// tailwind.config.ts
animation: {
  'fade-in': 'fadeIn 0.5s ease-in',
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
}
```

#### 6.2 JavaScript анимации → Framer Motion

**Было:**
```javascript
element.addEventListener('scroll', () => {
  element.style.transform = `translateY(${scrollY * 0.5}px)`;
});
```

**Стало:**
```typescript
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 150]);

<motion.div style={{ y }}>
  {/* Контент */}
</motion.div>
```

---

### Шаг 7: Оптимизация изображений

#### 7.1 Замена тегов img

**Было:**
```html
<img src="/images/hero.jpg" alt="Hero">
```

**Стало:**
```typescript
import Image from "next/image";

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={800}
  priority  // для hero изображений
/>
```

#### 7.2 Использование SVG
```typescript
// Для иконок - импортировать как компонент
import LogoSvg from "@/public/logo.svg";
<LogoSvg className="w-10 h-10" />

// Для иллюстраций - через next/image
<Image
  src="/images/illustration.svg"
  alt="Illustration"
  width={600}
  height={400}
  loading="lazy"
/>
```

---

### Шаг 8: Навигация и ссылки

#### 8.1 Внутренние ссылки

**Было:**
```html
<a href="index.html">Главная</a>
<a href="#pricing">Цены</a>
```

**Стало:**
```typescript
import Link from "next/link";

<Link href="/">Главная</Link>
<Link href="#pricing">Цены</Link>
```

#### 8.2 Внешние ссылки
```typescript
<Link 
  href="https://t.me/username"
  target="_blank"
  rel="noopener noreferrer"
>
  Telegram
</Link>
```

---

### Шаг 9: Метаданные и SEO

#### 9.1 Root layout
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Zakir.Studio - AI-Разработка сайтов",
  description: "Создаём сайты за 1-3 часа",
  keywords: ["создание сайтов", "AI"],
  authors: [{ name: "Zakir.Studio" }],
  openGraph: {
    title: "Zakir.Studio",
    description: "AI-разработка сайтов",
    type: "website",
  },
};
```

#### 9.2 Вложенные страницы
```typescript
// app/privacy-policy/page.tsx
export const metadata: Metadata = {
  title: "Политика конфиденциальности - Zakir.Studio",
  description: "Политика обработки данных",
};
```

---

### Шаг 10: Формы и интерактивность

#### 10.1 Простая форма
```typescript
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // логика отправки
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="..."
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
```

---

## Улучшения и оптимизации

### 🎨 1. Дизайн и UX улучшения

#### A. Micro-interactions (3D эффекты)
```typescript
<motion.div
  whileHover={{
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
  }}
  transition={{ type: "spring", stiffness: 300 }}
  style={{ transformStyle: "preserve-3d" }}
>
  {/* Карточка */}
</motion.div>
```

#### B. Scroll-triggered animations
```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Контент */}
</motion.div>
```

#### C. Parallax эффекты
```typescript
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 150]);

<motion.div style={{ y }}>
  {/* Фоновый элемент */}
</motion.div>
```

#### D. Scroll Progress Bar
```typescript
"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
```

---

### ⚡ 2. Производительность

#### A. Dynamic Imports (использовать осторожно!)
```typescript
// Только если действительно нужно отложить загрузку
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div className="animate-pulse">Загрузка...</div>
});
```

**⚠️ ВАЖНО:** Не злоупотреблять! Может вызвать "подвисания" при скролле.

#### B. Image Optimization (ОБЯЗАТЕЛЬНО!)
```typescript
// next.config.ts
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  minimumCacheTTL: 60,
}
```

#### C. Bundle Analysis
```bash
npm install @next/bundle-analyzer
```

---

### 🎯 3. Типизация

#### A. Типы для компонентов
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true }: HeroProps) {
  // ...
}
```

#### B. Типы для форм
```typescript
interface FormData {
  name: string;
  email: string;
  message: string;
}

const [formData, setFormData] = useState<FormData>({
  name: "",
  email: "",
  message: "",
});
```

---

## Чеклист для быстрой миграции

### ✅ Подготовка (5 минут)
- [ ] Создать папку проекта
- [ ] Скопировать `package.json` с актуальными версиями
- [ ] Создать `tsconfig.json`
- [ ] Создать `next.config.ts`
- [ ] Создать `tailwind.config.ts`
- [ ] Создать `postcss.config.mjs`
- [ ] Запустить `npm install`

### ✅ Базовая структура (10 минут)
- [ ] Создать `app/layout.tsx` с шрифтами
- [ ] Создать `app/globals.css` с Tailwind
- [ ] Создать `app/page.tsx`
- [ ] Создать `app/components/` директорию
- [ ] Настроить `.gitignore`

### ✅ Компоненты (30-60 минут)
- [ ] Navigation (с бургер-меню)
- [ ] Hero (с анимациями)
- [ ] Technology/Features секции
- [ ] Pricing
- [ ] Process
- [ ] Contact
- [ ] Footer

### ✅ Оптимизации (20 минут)
- [ ] Заменить все `<img>` на `<Image>`
- [ ] Добавить metadata в layout.tsx
- [ ] Проверить responsive на всех экранах
- [ ] Добавить анимации Framer Motion

### ✅ Полировка (10 минут)
- [ ] Проверить все ссылки
- [ ] Проверить hover эффекты
- [ ] Тест на мобильных
- [ ] Lighthouse audit

---

## Частые ошибки и решения

### ❌ Ошибка: "Module not found: Can't resolve 'next/font'"
**Решение:** Обновить Next.js до 15+
```bash
npm install next@latest react@latest react-dom@latest
```

### ❌ Ошибка: "Unknown subset 'cyrillic' for font X"
**Решение:** Проверить доступные subsets на fonts.google.com
```typescript
// Некоторые шрифты не поддерживают кириллицу!
const orbitron = Orbitron({
  subsets: ["latin"],  // НЕ ["latin", "cyrillic"]
});
```

### ❌ Ошибка: Подвисания при скролле
**Решение:** Убрать Dynamic Imports, загружать всё сразу
```typescript
// НЕ делать:
const Component = dynamic(() => import('./Component'));

// Делать:
import Component from './Component';
```

### ❌ Ошибка: Блоки разной высоты
**Решение:** Использовать flexbox
```typescript
<div className="flex flex-col">  // Контейнер
  <div className="flex-1">       // Контент растягивается
    {/* Содержимое */}
  </div>
</div>
```

---

## Полезные команды

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm run start

# Проверка типов
npx tsc --noEmit

# Очистка кэша Next.js
rm -rf .next
```

---

## Финальная проверка

### 1. Производительность
```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:3000
```

**Цели:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 2. Типы TypeScript
```bash
npx tsc --noEmit
# Должно быть 0 ошибок
```

### 3. Build без ошибок
```bash
npm run build
# ✓ Compiled successfully
```

---

## Шаблон для быстрого старта

Когда в следующий раз понадобится мигрировать проект:

1. **Скажи:** "Давай мигрируем этот сайт на Next.js 15 + TypeScript + Tailwind"
2. **Дай ссылку на этот документ:** "Следуй правилам из migration-guide.md"
3. **Укажи особенности:** "Обрати внимание на [особенности проекта]"
4. **Попроси чеклист:** "Пройдись по чеклисту миграции"

---

## Итоговая структура файлов

```
zakir-studio-nextjs/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      (Client Component)
│   │   ├── Hero.tsx            (Client Component)
│   │   ├── Technology.tsx      (Client Component)
│   │   ├── Features.tsx        (Client Component)
│   │   ├── WhyAI.tsx          (Client Component)
│   │   ├── Portfolio.tsx       (Client Component)
│   │   ├── Pricing.tsx         (Client Component)
│   │   ├── Process.tsx         (Client Component)
│   │   ├── Contact.tsx         (Client Component)
│   │   ├── Footer.tsx          (Server Component)
│   │   └── ScrollProgress.tsx  (Client Component)
│   ├── privacy-policy/
│   │   └── page.tsx           (Server Component)
│   ├── offer/
│   │   └── page.tsx           (Server Component)
│   ├── globals.css
│   ├── layout.tsx             (Server Component + Metadata)
│   └── page.tsx               (Server Component)
├── public/
│   └── images/
│       ├── ai-illustration.svg
│       ├── web-dev-illustration.svg
│       └── portfolio-example-1.svg
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── package.json
├── .gitignore
└── README.md
```

---

## Ключевые правила (TL;DR)

1. ✅ **Next.js 15+, React 19+, TypeScript 5.7+** - только актуальные версии
2. ✅ **App Router** - не Pages Router
3. ✅ **Server Components по умолчанию** - Client только где нужно
4. ✅ **next/image** для всех изображений
5. ✅ **Framer Motion** для анимаций
6. ✅ **Tailwind CSS** для стилей
7. ✅ **TypeScript strict mode**
8. ✅ **Не злоупотреблять Dynamic Imports** - может вызвать подвисания
9. ✅ **Проверять доступные subsets** для Google Fonts
10. ✅ **Metadata API** для SEO

---

Используй этот гайд как чеклист для следующих миграций! 🚀
