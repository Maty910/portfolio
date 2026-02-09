# Matías Chacón - Portfolio

<div align="center">

![Portfolio Banner](https://mchacon.dev/og-image.png)

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://mchacon.dev)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

**Portfolio personal de Matías Chacón**  
Desarrollador Full Stack | React | Node.js | TypeScript

[Ver Demo](https://mchacon.dev) · [Reportar Bug](https://github.com/Maty910/portfolio/issues) · [Solicitar Feature](https://github.com/Maty910/portfolio/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Scripts](#-scripts)
- [Estructura](#-estructura)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Sobre el Proyecto

Portfolio profesional diseñado para mostrar mis proyectos, habilidades y experiencia como desarrollador Full Stack. Construido con las últimas tecnologías web y optimizado para performance, accesibilidad y SEO.

### ¿Por qué este portfolio?

- ✨ **Moderno y Profesional:** Diseño limpio y actualizado
- 🚀 **Ultra Rápido:** Lighthouse score 95+ en todas las métricas
- 📱 **Responsive:** Funciona perfecto en cualquier dispositivo
- 🌍 **Multi-idioma:** Soporte para Español e Inglés
- 🎨 **Tema Dual:** Modo claro y oscuro con transiciones suaves
- ♿ **Accesible:** Siguiendo estándares WCAG 2.1

---

## ✨ Características

### 🎨 Diseño & UX

- Interfaz moderna con Material-UI y Tailwind CSS
- Modo oscuro/claro con persistencia
- Animaciones fluidas y micro-interacciones
- Efectos tilt 3D en cards de proyectos
- Navegación suave con scroll animado

### 🌍 Internacionalización

- Soporte multi-idioma (ES/EN)
- Cambio de idioma en tiempo real
- Contenido traducido completamente

### 📊 SEO & Performance

- Meta tags optimizados (Open Graph, Twitter Cards)
- Structured Data (Schema.org JSON-LD)
- Sitemap XML automático
- Robots.txt configurado
- Headers de seguridad
- Code splitting automático
- Lazy loading de imágenes
- Lighthouse score 95+

### 📱 Progressive Web App

- Instalable en cualquier dispositivo
- Service Worker para caché offline
- Manifest.json configurado
- Icons optimizados

### 🔒 Seguridad

- Content Security Policy (CSP)
- Headers de seguridad HTTP
- Protección contra XSS
- Protección contra clickjacking
- HTTPS obligatorio

---

## 🛠️ Tecnologías

### Frontend

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)

### UI/Styling

![Material-UI](https://img.shields.io/badge/MUI-7-007FFF?logo=mui&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-Icons-f56565)

### Herramientas

![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-Code%20Formatter-F7B93E?logo=prettier&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-Package%20Manager-F69220?logo=pnpm&logoColor=white)

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?logo=githubactions&logoColor=white)

---

## 🚀 Instalación

### Prerequisitos

```bash
# Node.js 18 o superior
node --version

# pnpm (recomendado)
npm install -g pnpm
```

### Setup Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Maty910/portfolio.git
cd portfolio

# 2. Instalar dependencias
pnpm install

# 3. Iniciar servidor de desarrollo
pnpm dev

# 4. Abrir en el navegador
# http://localhost:5173
```

---

## 📜 Scripts

| Comando           | Descripción                     |
| ----------------- | ------------------------------- |
| `pnpm dev`        | Inicia servidor de desarrollo   |
| `pnpm build`      | Compila para producción         |
| `pnpm preview`    | Vista previa de build           |
| `pnpm lint`       | Ejecuta ESLint                  |
| `pnpm lint:fix`   | Corrige errores automáticamente |
| `pnpm type-check` | Verifica tipos TypeScript       |
| `pnpm format`     | Formatea código con Prettier    |
| `pnpm clean`      | Limpia cache y builds           |

---

## 📁 Estructura

```
portfolio/
├── .github/              # GitHub configs (Actions, templates)
├── public/               # Assets estáticos
│   ├── certificates/     # PDFs de certificados
│   ├── CV/              # Curriculum Vitae
│   ├── images/          # Imágenes del portfolio
│   ├── logos/           # Logos de tecnologías
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt       # SEO
│   ├── sitemap.xml      # SEO
│   └── _headers         # Security headers
├── src/
│   ├── components/      # Componentes React
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   ├── context/         # Context API
│   │   └── LanguageContext.tsx
│   ├── data/            # Data estática
│   │   └── projectsData.ts
│   ├── hooks/           # Custom hooks
│   │   ├── useCopyToClipboard.ts
│   │   ├── useReveal.tsx
│   │   ├── useTheme.tsx
│   │   ├── useTilt.tsx
│   │   └── useTypewriter.ts
│   ├── i18n/            # Internacionalización
│   │   ├── index.ts
│   │   └── types.ts
│   ├── types/           # TypeScript types
│   ├── utils/           # Utilidades
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globales
├── .editorconfig        # Editor config
├── .eslintrc.json       # ESLint config
├── .prettierrc          # Prettier config
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── vercel.json          # Vercel config
```

---

## 🌐 Deployment

### Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Deploy a producción
vercel --prod
```

### Netlify

```bash
# Build command
pnpm build

# Publish directory
dist

# Los archivos _headers y _redirects ya están configurados
```

### Otros Proveedores

Compatible con:

- Cloudflare Pages
- GitHub Pages
- AWS Amplify
- Firebase Hosting

---

## 📊 Performance

### Lighthouse Scores

| Categoría         | Score |
| ----------------- | ----- |
| 💎 Performance    | 95+   |
| ♿ Accessibility  | 100   |
| 🔍 SEO            | 100   |
| 💻 Best Practices | 100   |
| 📱 PWA            | 90+   |

### Optimizaciones

- ⚡ Vite para builds ultra rápidas
- 📦 Code splitting automático
- 🖼️ Lazy loading de imágenes
- 🔤 Preconnect a Google Fonts
- 💾 Caché optimizado
- 🗜️ Compresión de assets
- 🎯 Tree shaking

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Ver [CONTRIBUTING.md](CONTRIBUTING.md) para detalles.

### Proceso

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'feat: add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver [LICENSE](LICENSE) para más información.

---

## 📧 Contacto

**Matías Chacón**

[![Portfolio](https://img.shields.io/badge/Portfolio-mchacon.dev-000000?style=for-the-badge&logo=vercel)](https://mchacon.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Maty910-181717?style=for-the-badge&logo=github)](https://github.com/Maty910)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-matias--chacon-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/matias-chacon-t934/)

---

<div align="center">

**⭐ Si te gustó este proyecto, considera darle una estrella en GitHub**

Hecho con ❤️ y ☕ por [Matías Chacón](https://mchacon.dev)

</div>
