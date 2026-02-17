# 🚀 Полное руководство: Хостинг Next.js сайта на VPS

## 📋 Оглавление
1. [Подготовка](#подготовка)
2. [Покупка и настройка VPS](#покупка-и-настройка-vps)
3. [Настройка домена](#настройка-домена)
4. [Подключение к серверу](#подключение-к-серверу)
5. [Установка необходимого ПО](#установка-необходимого-по)
6. [Деплой Next.js приложения](#деплой-nextjs-приложения)
7. [Настройка Nginx](#настройка-nginx)
8. [Установка SSL (HTTPS)](#установка-ssl-https)
9. [Настройка PM2](#настройка-pm2)
10. [Мониторинг и обслуживание](#мониторинг-и-обслуживание)
11. [Решение проблем](#решение-проблем)
12. [Чеклист деплоя](#чеклист-деплоя)

---

## Подготовка

### Что вам понадобится:

- ✅ **VPS сервер** (Ubuntu 24.04 LTS)
  - Минимум: 1GB RAM, 1 CPU, 20GB диск
  - Рекомендуется: 2GB RAM, 2 CPU, 40GB диск

- ✅ **Домен** (zakir.tech, example.com и т.д.)
  - Можно купить на: Timeweb, reg.ru, namecheap.com

- ✅ **Готовый Next.js проект**
  - Собранный и протестированный локально
  - Залитый на GitHub (опционально)

- ✅ **SSH клиент**
  - Windows: PuTTY или PowerShell
  - macOS/Linux: встроенный Terminal

### Стоимость (примерно):

```
VPS: 300-500₽/месяц (Timeweb, Selectel)
Домен .ru: 200₽/год
Домен .com: 600₽/год
SSL сертификат: БЕСПЛАТНО (Let's Encrypt)
Итого: ~500-700₽/месяц
```

---

## Покупка и настройка VPS

### Шаг 1: Покупка VPS на Timeweb

1. Зайдите на **timeweb.cloud**
2. Перейдите в раздел **"Облачные серверы"**
3. Нажмите **"Создать сервер"**

**Параметры сервера:**
```
ОС: Ubuntu 24.04 LTS
RAM: 2 GB (минимум 1 GB)
CPU: 2 ядра
Диск: 40 GB SSD
Тариф: Cloud 2 (~400₽/месяц)
```

4. Выберите **локацию** (например, Москва)
5. Придумайте **пароль root** (сохраните!)
6. Нажмите **"Создать"**

### Шаг 2: Получение данных доступа

После создания получите:
```
IP адрес: 5.129.243.10 (пример)
Login: root
Password: ваш_пароль
```

**⚠️ ВАЖНО:** Сохраните эти данные в надёжном месте!

---

## Настройка домена

### Вариант 1: Домен куплен на Timeweb

1. Перейдите в **"Домены"** → **"Управление"**
2. Выберите ваш домен
3. Перейдите в **DNS**
4. Добавьте записи:

```
Тип: A
Имя: @
Значение: 5.129.243.10 (ваш IP)
TTL: 600

Тип: A
Имя: www
Значение: 5.129.243.10 (ваш IP)
TTL: 600
```

5. Нажмите **"Добавить запись"**

### Вариант 2: Домен куплен на другом регистраторе

1. Зайдите в панель управления доменом
2. Найдите раздел **DNS настройки**
3. Добавьте аналогичные A-записи

**Пример для reg.ru:**
```
@ → A → 5.129.243.10
www → A → 5.129.243.10
```

### Проверка DNS

Подождите **5-30 минут** и проверьте:

```bash
# На вашем компьютере (Windows PowerShell/macOS Terminal)
nslookup zakir.tech
# Должен показать ваш IP: 5.129.243.10

# Или
ping zakir.tech
```

**⏱️ Важно:** DNS может обновляться до 24 часов, обычно 10-30 минут.

---

## Подключение к серверу

### Windows (PowerShell):

```powershell
ssh root@5.129.243.10
```

При первом подключении:
```
The authenticity of host... can't be established.
Are you sure you want to continue? (yes/no)
```
Введите: **yes**

Затем введите пароль root.

### macOS/Linux (Terminal):

```bash
ssh root@5.129.243.10
```

### После успешного входа:

Вы увидите:
```
Welcome to Ubuntu 24.04.3 LTS
root@server:~#
```

---

## Установка необходимого ПО

### Обновление системы

```bash
# Обновляем список пакетов
apt update

# Обновляем установленные пакеты
apt upgrade -y
```

### Установка Node.js 20+

```bash
# Добавляем репозиторий NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

# Устанавливаем Node.js
apt install -y nodejs

# Проверяем версии
node -v    # должно быть v20.x.x или v22.x.x
npm -v     # должно быть 10.x.x
```

### Установка PM2 (процесс-менеджер)

```bash
# Устанавливаем PM2 глобально
npm install -g pm2

# Проверяем
pm2 -v
```

### Установка Nginx (веб-сервер)

```bash
# Устанавливаем Nginx
apt install -y nginx

# Запускаем Nginx
systemctl start nginx

# Включаем автозапуск
systemctl enable nginx

# Проверяем статус
systemctl status nginx
```

### Установка Git (опционально, если проект на GitHub)

```bash
apt install -y git

# Проверяем
git --version
```

---

## Деплой Next.js приложения

### Вариант 1: Через Git (рекомендуется)

```bash
# Переходим в директорию веб-сервера
cd /var/www

# Клонируем репозиторий
git clone https://github.com/username/your-repo.git zakir-studio

# Переходим в проект
cd zakir-studio

# Устанавливаем зависимости
npm install

# Собираем проект
npm run build
```

### Вариант 2: Загрузка через SCP (с вашего компьютера)

**На вашем компьютере:**

```bash
# Упаковываем проект (без node_modules!)
cd /path/to/your/project
tar -czf zakir-studio.tar.gz --exclude=node_modules .

# Загружаем на сервер
scp zakir-studio.tar.gz root@5.129.243.10:/var/www/
```

**На сервере:**

```bash
# Переходим в директорию
cd /var/www

# Создаём папку проекта
mkdir zakir-studio
cd zakir-studio

# Распаковываем
tar -xzf ../zakir-studio.tar.gz

# Устанавливаем зависимости
npm install

# Собираем проект
npm run build
```

### Проверка сборки

После `npm run build` вы должны увидеть:

```
✓ Compiled successfully in 21.4s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (6/6)
✓ Finalizing page optimization

Route (app)                Size     First Load JS
┌ ○ /                   48.7 kB         154 kB
└ ○ /privacy-policy       165 B         106 kB
```

---

## Настройка Nginx

### Создание конфигурации

```bash
# Создаём файл конфигурации
nano /etc/nginx/sites-available/zakir-tech
```

### Базовая конфигурация (HTTP)

Вставьте:

```nginx
server {
    listen 80;
    server_name zakir.tech www.zakir.tech;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Важно:**
- Замените `zakir.tech` на ваш домен
- Порт `3000` — это порт Next.js (по умолчанию)

Сохраните файл:
- `Ctrl + X` → `Y` → `Enter`

### Активация конфигурации

```bash
# Создаём символическую ссылку
ln -s /etc/nginx/sites-available/zakir-tech /etc/nginx/sites-enabled/

# Удаляем дефолтную конфигурацию (опционально)
rm /etc/nginx/sites-enabled/default

# Проверяем конфигурацию
nginx -t

# Должно быть:
# nginx: configuration file /etc/nginx/nginx.conf test is successful

# Перезагружаем Nginx
systemctl reload nginx
```

---

## Установка SSL (HTTPS)

### Установка Certbot

```bash
# Устанавливаем Certbot и плагин для Nginx
apt install -y certbot python3-certbot-nginx
```

### Получение SSL сертификата

```bash
# Запускаем Certbot
certbot --nginx -d zakir.tech -d www.zakir.tech
```

### Ответы на вопросы Certbot:

```
1. Enter email address: ваш@email.com
   (для уведомлений об истечении сертификата)

2. Please read the Terms of Service: A (Agree)

3. Would you be willing to share your email: N (No)

4. Please choose whether or not to redirect HTTP traffic to HTTPS:
   2 (Redirect - выбираем редирект)
```

### Успешная установка:

```
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/zakir.tech/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/zakir.tech/privkey.pem
This certificate expires on 2026-04-23.

Congratulations! You have successfully enabled HTTPS on 
https://zakir.tech and https://www.zakir.tech
```

### Автоматическое обновление SSL

Certbot автоматически создаёт задачу для обновления сертификата.

Проверка:
```bash
# Тест автообновления (сухой запуск)
certbot renew --dry-run

# Должно быть:
# Congratulations, all simulated renewals succeeded
```

### Итоговая конфигурация Nginx (после SSL)

Certbot автоматически изменит конфигурацию:

```nginx
server {
    server_name zakir.tech www.zakir.tech;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/zakir.tech/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/zakir.tech/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

# Редирект HTTP -> HTTPS
server {
    if ($host = www.zakir.tech) {
        return 301 https://$host$request_uri;
    }

    if ($host = zakir.tech) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name zakir.tech www.zakir.tech;
    return 404;
}
```

---

## Настройка PM2

### Запуск приложения

```bash
# Переходим в директорию проекта
cd /var/www/zakir-studio

# Запускаем Next.js через PM2
pm2 start npm --name "zakir-studio" -- start

# Вы увидите:
# [PM2] Starting npm in fork mode
# [PM2] Done.
```

### Сохранение конфигурации PM2

```bash
# Сохраняем текущий список процессов
pm2 save

# Настраиваем автозапуск при перезагрузке сервера
pm2 startup

# PM2 выдаст команду, скопируйте и выполните её
# Например:
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u root --hp /root

# Выполните эту команду, затем снова:
pm2 save
```

### Проверка статуса

```bash
pm2 status
```

Вы должны увидеть:

```
┌────┬──────────────┬─────────┬─────────┬──────────┐
│ id │ name         │ status  │ restart │ uptime   │
├────┼──────────────┼─────────┼─────────┼──────────┤
│ 0  │ zakir-studio │ online  │ 0       │ 5s       │
└────┴──────────────┴─────────┴─────────┴──────────┘
```

### Полезные команды PM2

```bash
# Просмотр логов
pm2 logs zakir-studio

# Просмотр последних 50 строк логов
pm2 logs zakir-studio --lines 50

# Перезапуск приложения
pm2 restart zakir-studio

# Остановка
pm2 stop zakir-studio

# Удаление из PM2
pm2 delete zakir-studio

# Мониторинг в реальном времени
pm2 monit

# Информация о процессе
pm2 show zakir-studio
```

---

## Мониторинг и обслуживание

### Проверка работы сайта

```bash
# Проверка локально на сервере
curl http://localhost:3000

# Проверка через Nginx
curl http://zakir.tech
curl https://zakir.tech
```

### Просмотр логов

```bash
# Логи приложения (PM2)
pm2 logs zakir-studio

# Логи Nginx (доступ)
tail -f /var/log/nginx/access.log

# Логи Nginx (ошибки)
tail -f /var/log/nginx/error.log

# Системные логи
journalctl -u nginx -f
```

### Проверка портов

```bash
# Проверка занятых портов
netstat -tlnp

# Должны быть открыты:
# :3000  - Next.js
# :80    - Nginx HTTP
# :443   - Nginx HTTPS
```

### Мониторинг ресурсов

```bash
# Использование диска
df -h

# Использование RAM и CPU
htop
# (установка: apt install htop)

# PM2 мониторинг
pm2 monit
```

### Обновление сайта

**Вариант 1: Через Git**

```bash
cd /var/www/zakir-studio

# Скачиваем изменения
git pull origin main

# Устанавливаем новые зависимости (если есть)
npm install

# Пересобираем
npm run build

# Перезапускаем
pm2 restart zakir-studio
```

**Вариант 2: Через SCP**

```bash
# На вашем компьютере
tar -czf zakir-studio.tar.gz --exclude=node_modules .
scp zakir-studio.tar.gz root@5.129.243.10:/var/www/

# На сервере
cd /var/www/zakir-studio
tar -xzf ../zakir-studio.tar.gz
npm install
npm run build
pm2 restart zakir-studio
```

---

## Решение проблем

### Проблема 1: Сайт не открывается

**Проверка:**
```bash
# Работает ли Next.js?
pm2 status
curl http://localhost:3000

# Работает ли Nginx?
systemctl status nginx
nginx -t

# Правильно ли настроен DNS?
nslookup zakir.tech
```

**Решение:**
```bash
# Перезапуск всех сервисов
pm2 restart zakir-studio
systemctl restart nginx
```

### Проблема 2: SSL не работает

**Проверка:**
```bash
certbot certificates

# Должно показать ваш сертификат
```

**Решение:**
```bash
# Пересоздать сертификат
certbot --nginx -d zakir.tech -d www.zakir.tech --force-renewal
```

### Проблема 3: PM2 не запускается после перезагрузки

**Решение:**
```bash
pm2 startup
pm2 save
# Выполните команду, которую выдаст PM2
```

### Проблема 4: Ошибка "Failed to find Server Action"

**Причина:** Старая версия кэша Next.js

**Решение:**
```bash
cd /var/www/zakir-studio
rm -rf .next
npm run build
pm2 restart zakir-studio
```

### Проблема 5: Недостаточно памяти при сборке

**Решение:**
```bash
# Создать swap файл (2GB)
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile

# Проверка
free -h
```

### Проблема 6: Порт 3000 занят

**Проверка:**
```bash
netstat -tlnp | grep :3000
```

**Решение:**
```bash
# Убить процесс на порту 3000
fuser -k 3000/tcp

# Или найти и убить
lsof -ti:3000 | xargs kill -9

# Перезапустить PM2
pm2 restart zakir-studio
```

---

## Безопасность сервера

### Настройка Firewall (UFW)

```bash
# Установка UFW
apt install -y ufw

# Разрешаем SSH, HTTP, HTTPS
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS

# Включаем firewall
ufw enable

# Проверяем статус
ufw status
```

### Создание нового пользователя (вместо root)

```bash
# Создаём пользователя
adduser deployer

# Добавляем в sudo группу
usermod -aG sudo deployer

# Настраиваем SSH для нового пользователя
mkdir -p /home/deployer/.ssh
cp /root/.ssh/authorized_keys /home/deployer/.ssh/
chown -R deployer:deployer /home/deployer/.ssh
chmod 700 /home/deployer/.ssh
chmod 600 /home/deployer/.ssh/authorized_keys

# Подключение теперь:
# ssh deployer@5.129.243.10
```

### Отключение входа по паролю (только SSH ключи)

```bash
nano /etc/ssh/sshd_config

# Найдите и измените:
PasswordAuthentication no
PermitRootLogin no

# Перезапустите SSH
systemctl restart sshd
```

### Автоматические обновления безопасности

```bash
apt install -y unattended-upgrades
dpkg-reconfigure --priority=low unattended-upgrades
```

### Резервное копирование

**Через Timeweb панель:**
1. Перейдите в раздел **"Бэкапы"**
2. Настройте автоматические бэкапы (1 раз в день)

**Ручное копирование:**
```bash
# Бэкап проекта
tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/zakir-studio

# Скачать на компьютер
scp root@5.129.243.10:/root/backup-*.tar.gz ~/Downloads/
```

---

## Оптимизация производительности

### Настройка PM2 с кластером

```bash
# Запуск в кластерном режиме (4 инстанса)
pm2 start npm --name "zakir-studio" -i 4 -- start

# Автоматический расчёт инстансов (по CPU)
pm2 start npm --name "zakir-studio" -i max -- start
```

### Настройка кэширования в Nginx

```nginx
# Добавьте в конфигурацию /etc/nginx/sites-available/zakir-tech

location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Компрессия Gzip

```nginx
# Добавьте в /etc/nginx/nginx.conf

gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript 
           application/x-javascript application/xml+rss 
           application/javascript application/json;
```

---

## Мониторинг (дополнительно)

### Uptime Robot (бесплатный мониторинг)

1. Зайдите на **uptimerobot.com**
2. Создайте бесплатный аккаунт
3. Добавьте мониторинг для `https://zakir.tech`
4. Получайте уведомления если сайт упал

### PM2 Plus (платный, расширенный мониторинг)

```bash
# Регистрация на pm2.io
pm2 link <secret_key> <public_key>

# Метрики в реальном времени
# Уведомления о падении
# Логи в облаке
```

---

## Чеклист деплоя

Используйте этот чеклист для каждого нового проекта:

### Подготовка (5 мин)
- [ ] VPS сервер куплен и запущен
- [ ] Домен куплен
- [ ] Проект собран и протестирован локально

### Настройка DNS (10 мин)
- [ ] A-запись: `@` → IP сервера
- [ ] A-запись: `www` → IP сервера
- [ ] DNS проверен через `nslookup`

### Подключение к серверу (5 мин)
- [ ] SSH подключение работает
- [ ] Пароль root сохранён

### Установка ПО (15 мин)
- [ ] `apt update && apt upgrade -y`
- [ ] Node.js установлен (v20+)
- [ ] PM2 установлен глобально
- [ ] Nginx установлен и запущен
- [ ] Git установлен (опционально)

### Деплой проекта (20 мин)
- [ ] Код загружен в `/var/www/`
- [ ] `npm install` выполнен
- [ ] `npm run build` успешен
- [ ] Проект работает на `localhost:3000`

### Nginx конфигурация (10 мин)
- [ ] Конфигурация создана в `sites-available`
- [ ] Симлинк создан в `sites-enabled`
- [ ] `nginx -t` успешен
- [ ] `systemctl reload nginx` выполнен

### SSL сертификат (10 мин)
- [ ] Certbot установлен
- [ ] Сертификат получен для домена
- [ ] HTTPS работает
- [ ] HTTP редиректит на HTTPS

### PM2 настройка (5 мин)
- [ ] PM2 запустил приложение
- [ ] `pm2 save` выполнен
- [ ] `pm2 startup` настроен
- [ ] Автозапуск работает после `reboot`

### Проверка (10 мин)
- [ ] `https://домен.ru` открывается
- [ ] `https://www.домен.ru` работает
- [ ] Зелёный замочек SSL видим
- [ ] PM2 показывает `online`
- [ ] Логи без критических ошибок

### Безопасность (опционально, 15 мин)
- [ ] UFW firewall настроен
- [ ] Автообновления включены
- [ ] Бэкапы настроены

**Общее время: ~90-120 минут**

---

## Полезные ссылки

### Документация:
- Next.js: https://nextjs.org/docs
- PM2: https://pm2.keymetrics.io/docs
- Nginx: https://nginx.org/ru/docs/
- Let's Encrypt: https://letsencrypt.org/docs/

### Инструменты:
- SSL Test: https://www.ssllabs.com/ssltest/
- DNS Checker: https://dnschecker.org/
- Uptime Robot: https://uptimerobot.com/
- Speed Test: https://pagespeed.web.dev/

### Хостинг провайдеры:
- Timeweb Cloud: https://timeweb.cloud/
- Selectel: https://selectel.ru/
- DigitalOcean: https://www.digitalocean.com/
- Hetzner: https://www.hetzner.com/

---

## Заключение

Поздравляю! 🎉 Теперь вы знаете как:

✅ Настроить VPS сервер с нуля
✅ Установить и настроить Node.js, PM2, Nginx
✅ Задеплоить Next.js приложение
✅ Настроить домен и DNS
✅ Получить бесплатный SSL сертификат
✅ Обеспечить автозапуск и мониторинг
✅ Обновлять и поддерживать сайт

Ваш сайт работает профессионально в production! 🚀

---

## Быстрая справка команд

### SSH подключение
```bash
ssh root@5.129.243.10
```

### PM2 управление
```bash
pm2 status                    # Статус
pm2 logs zakir-studio         # Логи
pm2 restart zakir-studio      # Перезапуск
pm2 monit                     # Мониторинг
```

### Nginx управление
```bash
nginx -t                      # Проверка конфигурации
systemctl reload nginx        # Перезагрузка
systemctl status nginx        # Статус
tail -f /var/log/nginx/error.log  # Логи
```

### Обновление сайта
```bash
cd /var/www/zakir-studio
git pull
npm install
npm run build
pm2 restart zakir-studio
```

### Проверка SSL
```bash
certbot certificates          # Список сертификатов
certbot renew --dry-run       # Тест обновления
```

### Мониторинг
```bash
df -h                         # Диск
free -h                       # Память
htop                          # CPU/RAM
pm2 monit                     # Процессы
```

---

**Удачи в деплое! 💪**
