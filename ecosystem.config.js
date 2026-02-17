module.exports = {
  apps: [{
    name: 'zakir-studio',
    script: './start.sh',
    cwd: '/var/www/zakir-studio',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '400M',
    restart_delay: 5000,
    max_restarts: 10,
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
