# Ruta Esquiú

Landing page editorial y experiencial para promocionar la Ruta Esquiú, pensada para impulsar inscripciones y compartir el legado histórico, cultural y audiovisual del recorrido.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación queda disponible en el puerto 5173 por defecto.

## Build de producción

```bash
npm run build
```

## Estructura principal

```text
src/
  config/
  data/
  App.tsx
  App.css
  index.css
  main.tsx
public/
  assets/
    branding/
    esquiu/
    recorrido/
    galeria/
    libro/
    videos/
    documentos/
```

## Cómo reemplazar contenido real

### Textos
Los textos principales están centralizados en:

- `src/config/site.ts`
- `src/data/content.ts`
- `src/data/route.ts`
- `src/data/itinerary.ts`
- `src/data/gallery.ts`
- `src/data/testimonials.ts`

### Imágenes y multimedia
Colocá los activos reales en las carpetas correspondientes:

- `public/assets/esquiu/` para retrato y visual principal
- `public/assets/recorrido/` para cada parada
- `public/assets/galeria/` para fotos del viaje
- `public/assets/libro/` para la guía o portada definitiva
- `public/assets/branding/` para logos del congreso y la universidad

### Formularios y inscripción
Editá la URL de inscripción en `src/config/site.ts`:

```ts
export const REGISTRATION_URL = 'https://example.com/formulario-ruta-esquiu'
```

También podés cambiar el enlace de WhatsApp y el número en el mismo archivo.

## Assets placeholder

El proyecto ya incluye marcadores visuales para mantener la propuesta estética mientras se reemplaza por material real.

- `public/assets/libro/portada-placeholder.svg`
- `public/assets/galeria/postal-06.svg`
- `public/assets/branding/congreso.png`
- `public/assets/branding/ucc.png`

## Notas de diseño

La interfaz está pensada para transmitir una sensación de historia, dignidad, memoria y recorrido emocional. Evita el tono turístico genérico y prioriza una lectura editorial, elegante y sobria.

## Publicación

Para desplegar, publicá la carpeta `dist` generada por `npm run build` en cualquier hosting estático que soporte Vite (Vercel, Netlify, GitHub Pages, etc.).
