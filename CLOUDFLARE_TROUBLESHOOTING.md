# Cloudflare Pages - Troubleshooting

Soluciones a problemas comunes en Cloudflare Pages.

## ❌ Error: Node version incompatible

### Problema

```
ERR_PNPM_UNSUPPORTED_ENGINE Unsupported environment
Expected version: 18.x
Got: v22.x.x
```

### Solución ✅

**Ya está arreglado en este proyecto.** El `package.json` está configurado con:

```json
"engines": {
  "node": ">=18.0.0",
  "pnpm": ">=8.0.0"
}
```

Esto acepta Node.js 18, 20, 22 y versiones superiores.

### Si sigue fallando:

1. **Verifica tu build command en Cloudflare:**
   - Dashboard → Pages → Settings → Build & deployments
   - Build command: `pnpm build`

2. **Revisa las variables de entorno:**

   ```
   NODE_VERSION = 22
   PNPM_VERSION = 8
   ```

3. **Fuerza una version específica de Node:**
   - En Cloudflare dashboard, agrega: `NODE_VERSION = 22.18.0`

---

## ❌ Error: pnpm not found

### Problema

```
bash: pnpm: command not found
```

### Solución ✅

1. Ve a **Settings → Environment variables** en Cloudflare
2. Agrega: `PNPM_VERSION = 8`
3. O actualiza el build command a:
   ```bash
   npm install -g pnpm && pnpm install && pnpm build
   ```

---

## ❌ Build timeout

### Problema

```
Build exceeded maximum time limit
```

### Solución ✅

1. **Limpia la caché:**
   - Dashboard → Deployments → [...] → Retry deployment
   - Marca "Clear cache"

2. **Optimiza el build:**

   ```bash
   # En package.json, asegúrate de tener:
   "build": "tsc -b && vite build"
   ```

3. **Verifica dependencias:**
   ```bash
   # Local
   pnpm install
   pnpm build
   ```

---

## ❌ 404 en rutas del SPA

### Problema

```
404 Not Found al refrescar en /projects
```

### Solución ✅

Ya está configurado en `public/_redirects`:

```
/* /index.html 200
```

Si no funciona:

1. Verifica que el archivo existe en `public/_redirects`
2. Asegúrate que Cloudflare lo detecte (revisa build logs)
3. Cloudflare debería aplicarlo automáticamente

---

## ❌ Headers de seguridad no aplicados

### Problema

```
Security headers no visible en DevTools
```

### Solución ✅

Ya está configurado en `public/_headers`.

**Verifica:**

```bash
# Local - debe existir:
cat public/_headers
```

**En producción:**

```bash
curl -I https://mchacon.dev
```

Deberías ver:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
```

---

## ❌ Cambios no visibles después de deploy

### Problema

```
Los cambios están en producción pero no se ven
```

### Solución ✅

1. **Caché del navegador:**
   - Ctrl + Shift + R (hard refresh)
   - O abre en modo incógnito

2. **Caché de Cloudflare:**
   - Dashboard → Caching → Configuration
   - Purge Everything

3. **Verifica el deployment:**
   - Dashboard → Deployments
   - Último deployment debe estar "Active"

---

## ❌ Assets no cargan (404 para /assets/...)

### Problema

```
GET https://mchacon.dev/assets/logo.svg 404
```

### Solución ✅

1. **Verifica rutas en Vite:**

   ```ts
   // vite.config.ts ya está configurado correctamente
   ```

2. **Usa rutas absolutas desde public:**

   ```tsx
   // ✅ Correcto
   <img src="/logo.svg" />

   // ❌ Incorrecto
   <img src="./logo.svg" />
   ```

3. **En producción, verifica build:**
   ```bash
   pnpm build
   ls -la dist/assets/
   ```

---

## ❌ TypeScript errors en build

### Problema

```
error TS2304: Cannot find name '...'
```

### Solución ✅

1. **Verifica localmente primero:**

   ```bash
   pnpm type-check
   pnpm build
   ```

2. **Asegúrate de que tsconfig esté correcto:**
   - `tsconfig.json`
   - `tsconfig.app.json`
   - `tsconfig.node.json`

3. **Si es un problema solo en CI:**
   - Limpia node_modules en Cloudflare (retry with cache cleared)

---

## ❌ Environment variables no funcionan

### Problema

```
process.env.VITE_API_URL is undefined
```

### Solución ✅

1. **En Cloudflare:**
   - Settings → Environment variables
   - Agrega: `VITE_API_URL = https://api.example.com`
   - **Importante:** Variables deben empezar con `VITE_`

2. **Accede en el código:**

   ```ts
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **NO uses `process.env` en Vite:**

   ```ts
   // ❌ No funciona en Vite
   const api = process.env.VITE_API_URL;

   // ✅ Correcto en Vite
   const api = import.meta.env.VITE_API_URL;
   ```

---

## 🔍 Debug Checklist

Cuando algo falla:

- [ ] Check build logs en Cloudflare dashboard
- [ ] Reproduce el build localmente: `pnpm build`
- [ ] Verifica que dist/ se genera correctamente
- [ ] Check Node version: debe ser >=18
- [ ] Verifica pnpm version: debe ser >=8
- [ ] Clear caché de Cloudflare
- [ ] Hard refresh en el navegador (Ctrl+Shift+R)
- [ ] Revisa la consola del navegador (F12)
- [ ] Check Network tab para errores 404/500

---

## 📞 Más Ayuda

Si el problema persiste:

1. **Cloudflare Community:**
   - https://community.cloudflare.com/

2. **Docs Oficiales:**
   - https://developers.cloudflare.com/pages/

3. **Contacto:**
   - [LinkedIn](https://www.linkedin.com/in/matias-chacon-t934/)
   - [GitHub Issues](https://github.com/Maty910/portfolio/issues)

---

**Última actualización:** 9 de febrero de 2026
