# Contribuyendo al Portfolio

¡Gracias por tu interés en contribuir! Aunque este es un proyecto personal, aprecio el feedback y las sugerencias.

## 📝 Cómo Reportar Issues

Si encuentras un bug o tienes una sugerencia:

1. Verifica que el issue no exista ya
2. Crea un nuevo issue con una descripción clara
3. Incluye pasos para reproducir (si es un bug)
4. Agrega capturas de pantalla si es relevante

## 🔧 Desarrollo Local

### Prerequisitos

- Node.js 18.x o superior
- pnpm (recomendado)

### Setup

```bash
# Clonar el repositorio
git clone https://github.com/Maty910/portfolio.git
cd portfolio

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev
```

### Scripts Útiles

```bash
pnpm dev          # Desarrollo
pnpm build        # Build de producción
pnpm lint         # Verificar código
pnpm lint:fix     # Corregir automáticamente
pnpm type-check   # Verificar tipos
pnpm format       # Formatear código
```

## 📐 Estándares de Código

### Estilo

- Usar TypeScript para todo el código nuevo
- Seguir las configuraciones de ESLint y Prettier
- Nombres de variables y funciones en camelCase
- Nombres de componentes en PascalCase
- Archivos de componentes con extensión `.tsx`

### Commits

Usar convencional commits:

```
feat: agregar nueva funcionalidad
fix: corregir bug
docs: actualizar documentación
style: cambios de formato
refactor: refactorización de código
test: agregar o actualizar tests
chore: tareas de mantenimiento
```

### TypeScript

- Evitar `any`, usar tipos específicos
- Crear interfaces para objetos complejos
- Documentar tipos complejos con comentarios

### React

- Componentes funcionales con hooks
- Usar TypeScript para props
- Extraer lógica compleja a custom hooks
- Mantener componentes pequeños y reutilizables

## 🎨 Diseño

- Usar Tailwind CSS para estilos
- Mantener consistencia con el tema existente
- Responsive design (mobile-first)
- Accesibilidad (a11y) es importante

## 🧪 Testing (Futuro)

Cuando se agreguen tests:

- Escribir tests para nuevas funcionalidades
- Mantener cobertura >80%
- Tests unitarios para lógica compleja
- Tests de integración para flujos críticos

## 📱 Pull Requests

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Checklist de PR

- [ ] El código sigue los estándares de estilo
- [ ] Sin errores de TypeScript
- [ ] Sin errores de ESLint
- [ ] Código formateado con Prettier
- [ ] Build exitosa (`pnpm build`)
- [ ] Funciona correctamente en desarrollo
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Compatible con navegadores modernos

## ❓ Dudas

Si tienes preguntas, puedes:

- Abrir un issue para discusión
- Contactarme en [LinkedIn](https://www.linkedin.com/in/matias-chacon-t934/)

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la licencia MIT del proyecto.

---

¡Gracias por contribuir! 🚀
