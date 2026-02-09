# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.1] - 2026-02-09

### 🐛 Corregido

- Error de incompatibilidad de versión de Node.js en build de Cloudflare Pages
- Actualizado `engines.node` en package.json de `18.x` a `>=18.0.0`
- Ahora soporta Node.js 18, 20, 22 y versiones superiores

### 📝 Documentación

- Agregado [CLOUDFLARE.md](CLOUDFLARE.md) con guía de deployment en Cloudflare Pages
- Agregado [CLOUDFLARE_TROUBLESHOOTING.md](CLOUDFLARE_TROUBLESHOOTING.md) con soluciones a problemas comunes
- Agregado `wrangler.toml` para configuración de Cloudflare
- Actualizado README.md para reflejar deployment actual en Cloudflare Pages
- Actualizado .nvmrc a Node 22

### 🔄 Cambiado

- Proveedor de hosting principal actualizado a Cloudflare Pages
- Documentación reorganizada para priorizar Cloudflare sobre Vercel

---

## [1.0.0] - 2026-02-09

### ✨ Agregado

- Portfolio inicial con secciones: Home, Proyectos, Skills, Experiencia, Educación, Contacto
- Modo oscuro/claro con transiciones suaves
- Soporte multi-idioma (Español/Inglés)
- Sistema de navegación con scroll suave
- Animaciones y efectos tilt en cards
- Modal de detalle de proyectos
- Footer con enlaces a redes sociales
- Progressive Web App (PWA) support
- SEO optimizado con structured data
- Headers de seguridad configurados
- Sitemap y robots.txt

### 🛠️ Configuración

- React 19 con TypeScript 5
- Vite 7 para build tool
- Material-UI y Tailwind CSS 4 para estilos
- ESLint y Prettier para code quality
- Deployment config para Vercel/Netlify

### 🔒 Seguridad

- Headers de seguridad HTTP
- Content Security Policy
- Protección XSS y clickjacking

### 📊 Performance

- Code splitting automático
- Lazy loading de imágenes
- Caché optimizado para assets
- Preconnect a Google Fonts

---

## Tipos de Cambios

- `✨ Agregado` - nuevas funcionalidades
- `🔄 Cambiado` - cambios en funcionalidad existente
- `🐛 Corregido` - corrección de bugs
- `🗑️ Removido` - funcionalidades removidas
- `🔒 Seguridad` - vulnerabilidades corregidas
- `📊 Performance` - mejoras de rendimiento
- `📝 Documentación` - cambios en documentación
