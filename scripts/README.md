# 🖼️ Optimización Rápida de Imágenes

## Opción 1: Script Automático (Recomendado)

```bash
# 1. Ir a la carpeta de scripts
cd scripts

# 2. Instalar dependencias
pnpm install

# 3. Ejecutar optimización
node optimize-images.js
```

Esto convertirá automáticamente todas las imágenes PNG y JPG a WebP con 80% de calidad.

---

## Opción 2: Online (Sin código)

### Usando Squoosh.app

1. **Abrir:** https://squoosh.app/

2. **Arrastrar imágenes:**
   - Ve a `m:\Programación\Fullstack\mati's portfolio\public\images\`
   - Arrastra todas las PNG al navegador

3. **Configurar:**
   ```
   Format: WebP
   Quality: 80
   Resize: Sin cambios (mantener tamaño original)
   ```

4. **Descargar:**
   - Click derecho → Save as
   - Guarda cada una con el mismo nombre pero extensión .webp

5. **Reemplazar archivos:**
   - Mueve los .webp a la carpeta images
   - Actualiza las referencias en el código

---

## Opción 3: Batch con Squoosh CLI

```bash
# Instalar
npm install -g @squoosh/cli

# Ir a la carpeta de imágenes
cd "public/images"

# Convertir todas
squoosh-cli --webp '{"quality":80}' *.png *.jpg
```

---

## Después de Convertir

### Actualizar Referencias en el Código

Busca y reemplaza en VS Code:

**Buscar:** `\.png`  
**Reemplazar con:** `.webp`

**Archivos afectados:**
- `src/data/projectsData.ts`
- `src/components/Page.tsx`
- Cualquier otro que use imágenes

### Ejemplo:

```typescript
// Antes:
"./images/DF Portfolio 1.png"

// Después:
"./images/DF Portfolio 1.webp"
```

---

## Verificar Resultado

```bash
# Build y preview
pnpm build
pnpm preview

# Abrir en navegador
# Presiona F12 → Network → Filter por Img
# Verifica que las imágenes sean .webp
```

---

## Troubleshooting

### "sharp no se puede instalar"

**Windows:**
```bash
npm install --global windows-build-tools
npm install sharp
```

**Mac/Linux:**
```bash
# Debería funcionar sin problemas
pnpm add sharp
```

### "Imágenes no se ven"

Verifica que:
1. Los nombres de archivo coincidan (case-sensitive)
2. Las rutas sean correctas
3. Los archivos .webp estén en `public/images/`

---

## Beneficio Esperado

- 📉 Reducción de peso: **60-80%**
- ⚡ Carga más rápida: **2-3x**
- 📊 PageSpeed score: **+15-25 puntos**

---

¡En 30 minutos tendrás tu portfolio optimizado! 🚀
