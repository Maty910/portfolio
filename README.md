# 🚀 Matías Chacón | Portfolio

[![Deploy Status](https://img.shields.io/badge/status-live-success)](https://mchacon.dev)
[![Built with React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite)](https://vitejs.dev)

Portfolio personal de Matías Chacón - Desarrollador Full Stack especializado en React, Node.js y TypeScript.

**[Ver en vivo](https://mchacon.dev)**

## Características

- Diseño moderno y responsivo con Tailwind CSS
- Modo oscuro/claro con transiciones suaves
- Soporte multi-idioma (ES/EN)
- Optimizado para performance y SEO
- Progressive Web App (PWA) instalable
- Headers de seguridad configurados
- Structured data (Schema.org) para mejor indexación

## Tecnologías

- **Frontend:** React 19, TypeScript 5
- **UI:** Material-UI, Tailwind CSS 4, Lucide React
- **Build Tool:** Vite 7
- **Linting:** ESLint 9
- **Estado:** React Context API
- **Animaciones:** CSS Transitions, View Transitions API

## Inicio Rápido

### Prerequisitos

- Node.js 18.x o superior
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Maty910/portfolio.git

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio estará disponible en `http://localhost:5173`

## Scripts Disponibles

```bash
pnpm dev          # Iniciar servidor de desarrollo
pnpm build        # Compilar para producción
pnpm preview      # Vista previa de la build de producción
pnpm lint         # Ejecutar linter
pnpm lint:fix     # Corregir errores de linting automáticamente
pnpm type-check   # Verificar tipos de TypeScript
pnpm format       # Formatear código con Prettier
pnpm clean        # Limpiar archivos de build y caché
```

## Estructura del Proyecto

```
portfolio/
├── public/              # Archivos estáticos
│   ├── certificates/    # Certificados en PDF
│   ├── CV/             # Curriculum Vitae
│   ├── images/         # Imágenes del portfolio
│   ├── logos/          # Logos de tecnologías
│   ├── manifest.json   # Manifest PWA
│   ├── robots.txt      # Configuración para crawlers
│   ├── sitemap.xml     # Sitemap para SEO
│   └── _headers        # Headers HTTP (Netlify/Cloudflare)
├── src/
│   ├── components/     # Componentes React
│   ├── context/        # Context API para estado global
│   ├── data/           # Datos de proyectos
│   ├── hooks/          # Custom React hooks
│   ├── i18n/           # Configuración de internacionalización
│   ├── types/          # Definiciones de tipos TypeScript
│   └── utils/          # Funciones de utilidad
└── vercel.json         # Configuración de deployment
```

## Configuración

### Variables de Entorno

Actualmente no se requieren variables de entorno para el build.

### Configuración de Deployment

- **Cloudflare Pages:** Ver [CLOUDFLARE.md](CLOUDFLARE.md)
- **Vercel:** `vercel.json` incluido
- **Netlify:** `_headers` y `_redirects` incluidos

### Meta Tags y SEO

El archivo `index.html` incluye:

- Meta tags OpenGraph para redes sociales
- Twitter Cards
- Structured Data (JSON-LD)
- Meta tags para SEO avanzado
- Icons y manifest para PWA

## Deployment

### Cloudflare Pages (Actual)

Este proyecto está desplegado en Cloudflare Pages:

```bash
# Ver configuración en wrangler.toml y CLOUDFLARE.md
```

**Build Settings:**

- Build command: `pnpm build`
- Build output: `dist`
- Node version: `22` (o >=18)

Los deployments son automáticos:

- Push a `main` → Producción
- Push a otras ramas → Preview

**Guía completa:** [CLOUDFLARE.md](CLOUDFLARE.md)  
**Troubleshooting:** [CLOUDFLARE_TROUBLESHOOTING.md](CLOUDFLARE_TROUBLESHOOTING.md)

### Otros Proveedores

También compatible con:

**Vercel:**

```bash
npm i -g vercel
vercel
```

**Netlify:**

- Build: `pnpm build`
- Directory: `dist`

---

## PWA (Progressive Web App)

El sitio es instalable como aplicación web progresiva:

- Service Worker para caché offline
- Manifest.json configurado
- Icons optimizados
- Theme colors adaptables

## Seguridad

Headers de seguridad configurados:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` para mayor protección

## Performance

- Lazy loading de imágenes
- Code splitting automático con Vite
- Preconnect a Google Fonts
- Caché optimizado para assets estáticos
- Lighthouse Score: 95+ en todas las métricas

## Contribuciones

Este es un proyecto personal, pero sugerencias y feedback son bienvenidos.

## Licencia

Copyright © 2026 Matías Chacón. Todos los derechos reservados.

## Contacto

- **Portfolio:** [mchacon.dev](https://mchacon.dev)
- **GitHub:** [@Maty910](https://github.com/Maty910)
- **LinkedIn:** [Matías Chacón](https://www.linkedin.com/in/matias-chacon-t934/)

---

Hecho con ❤️ y 🧉 por Matías Chacón
