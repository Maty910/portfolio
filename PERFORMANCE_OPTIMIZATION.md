# 🚀 Guía de Optimización de Performance

Esta guía te ayudará a mejorar significativamente tus scores de PageSpeed Insights.

## 📊 Optimizaciones Ya Implementadas

### ✅ HTML & Fonts

- [x] Carga asíncrona de Google Fonts
- [x] Preconnect a dominios externos
- [x] DNS prefetch configurado
- [x] Preload de recursos críticos
- [x] display=swap en fuentes para evitar FOIT

### ✅ Vite Build

- [x] Code splitting optimizado
- [x] Minificación con Terser
- [x] Drop console.log en producción
- [x] Manual chunks para vendors
- [x] Assets inline para archivos <4kb

### ✅ Headers & Caching

- [x] Headers de seguridad (\_headers)
- [x] Cache-Control para assets estáticos
- [x] Compresión Brotli (Cloudflare)

---

## 🎯 Optimizaciones Pendientes (CRÍTICAS)

### 1. 🖼️ Convertir Imágenes a WebP/AVIF (URGENTE)

**Problema:** Tienes 16+ imágenes PNG pesadas que ralentizan la carga.

**Impacto:** 🔴 Alto - Puede mejorar +20 puntos en Performance

#### Solución Automática:

```bash
# Instalar herramienta de conversión
npm install -g sharp-cli

# Convertir todas las PNG a WebP (calidad 80%)
cd "public/images"
for file in *.png; do
  npx sharp -i "$file" -o "${file%.png}.webp" --format webp --quality 80
done

# O usar Squoosh CLI (recomendado)
npm install -g @squoosh/cli

squoosh-cli --webp '{"quality":80}' images/*.png
```

#### Solución Manual (Recomendada):

1. Ve a https://squoosh.app/
2. Arrastra todas tus imágenes PNG de `/public/images/`
3. Configura:
   - Formato: WebP
   - Quality: 75-80
   - Resize: mantén dimensiones originales
4. Descarga como WebP
5. Reemplaza en la carpeta

**Después, actualiza las referencias:**

```typescript
// src/data/projectsData.ts
// Cambiar de:
"./images/DF Portfolio 1.png";
// A:
"./images/DF Portfolio 1.webp";
```

#### Beneficio Esperado:

- 📉 Reducción de tamaño: 60-80%
- ⚡ Carga más rápida: 2-3x
- 📊 Score: +15-25 puntos

---

### 2. 📸 Optimizar Imagen de Perfil (JPG)

**Problema:** `/images/FOTO DE PERFIL.jpg` probablemente es muy pesada

```bash
# Optimizar con Sharp
npx sharp -i "public/images/FOTO DE PERFIL.jpg" \
  -o "public/images/FOTO DE PERFIL.webp" \
  --format webp --quality 85 --resize 800 800

# O en Squoosh.app con:
# - WebP quality 85
# - Resize a 800x800 (si es más grande)
```

**Actualizar referencia:**

```tsx
// src/components/Page.tsx
src = "/images/FOTO DE PERFIL.webp";
```

---

### 3. 🎨 Lazy Loading de Imágenes

**Problema:** Todas las imágenes se cargan al inicio

**Solución:** Agregar lazy loading nativo

```tsx
// En ProjectModal.tsx y Projects.tsx
<img
  src={image}
  alt={alt}
  loading="lazy" // ← Agregar esto
  decoding="async"
  className="..."
/>
```

**Implementar en:**

- [x] `src/components/Projects.tsx` (línea 85)
- [x] `src/components/ProjectModal.tsx` (línea 108)
- [x] `src/components/Page.tsx` (línea 232)

---

### 4. 🎭 Optimizar Favicon SVG

**Problema:** SVG puede tener código innecesario

```bash
# Instalar SVGO
npm install -g svgo

# Optimizar
svgo "public/Logo Mati.svg" -o "public/Logo Mati.svg"
```

---

### 5. 📦 Implementar Service Worker (PWA Real)

**Problema:** El manifest existe pero falta el Service Worker

```bash
# Instalar plugin
pnpm add -D vite-plugin-pwa
```

**Actualizar vite.config.ts:**

```typescript
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["Logo Mati.svg", "og-image.png"],
      manifest: {
        name: "Matías Chacón Portfolio",
        short_name: "M. Chacón",
        theme_color: "#000000",
        icons: [
          {
            src: "/Logo Mati.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,webp,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
              },
            },
          },
        ],
      },
    }),
  ],
});
```

**Impacto:** +10-15 puntos en PWA score

---

### 6. 🎯 Preload de Imágenes Críticas (LCP)

**Problema:** La imagen principal puede tardar en aparecer

**Agregar al `<head>` de index.html:**

```html
<!-- Preload imagen de perfil (critical LCP) -->
<link rel="preload" as="image" href="/images/FOTO DE PERFIL.webp" type="image/webp" />
```

---

### 7. 📝 Optimizar Structured Data

**Actual:** JSON-LD inline en HTML

**Mejor:** Cargar async

```typescript
// src/utils/structuredData.ts
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  // ... resto del schema
};

// En main.tsx o App.tsx:
useEffect(() => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
}, []);
```

---

## 🔍 Verificación Post-Optimización

### Checklist de Build:

```bash
# 1. Build optimizado
pnpm build

# 2. Analizar bundle
pnpm add -D rollup-plugin-visualizer
# Agregar a vite.config.ts: visualizer()

# 3. Preview local
pnpm preview

# 4. Test con Lighthouse
npx lighthouse http://localhost:4173 --view

# 5. Deploy
git add .
git commit -m "perf: optimize images and performance"
git push
```

---

## 📈 Mejoras Esperadas

### Antes:

- Performance: ~60-70
- LCP: 3-4s
- FCP: 1-2s
- Total Size: 5-8 MB

### Después (con todas las optimizaciones):

- Performance: ~90-95 ✅
- LCP: <1.5s ✅
- FCP: <0.8s ✅
- Total Size: <2 MB ✅

---

## 🛠️ Herramientas Útiles

### Online:

- [Squoosh.app](https://squoosh.app/) - Optimizar imágenes
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

### CLI:

```bash
# Analizar bundle
pnpm add -D vite-bundle-visualizer

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --config=lighthouserc.js
```

---

## 🎯 Prioridades (Orden de Implementación)

1. 🔴 **URGENTE:** Convertir PNG a WebP (30 min)
2. 🟡 **Alta:** Agregar lazy loading (10 min)
3. 🟡 **Alta:** Preload imagen crítica (5 min)
4. 🟢 **Media:** Service Worker PWA (20 min)
5. 🟢 **Baja:** Bundle analysis (10 min)

**Tiempo total estimado:** ~1.5 horas
**Mejora esperada:** +25-35 puntos en score

---

## 📞 Necesitas Ayuda?

Si algo no funciona:

1. Chequea la consola del navegador (F12)
2. Revisa los logs de build
3. Usa `pnpm build --debug`
4. Contacta en [LinkedIn](https://www.linkedin.com/in/matias-chacon-t934/)

---

**Última actualización:** 9 de febrero de 2026
