# garrybruno.com.ve

Sitio web personal de Garry Jr. Bruno, hecho con **Angular 22** (componentes standalone, signals, sin zone.js)
y **pre-renderizado estático** (SSG): cada página se genera como HTML en el build, así que carga rápido,
la indexan bien los buscadores y se puede publicar en GitHub Pages sin servidor.

## Requisitos

- Node.js `^22.22.3`, `^24.15.0` o `>=26` (lo exige Angular 22).
- npm 11.

## Comandos

| Comando           | Qué hace                                                                     |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm start`       | Servidor de desarrollo en http://localhost:4200                              |
| `npm run build`   | Build de producción pre-renderizado en `docs/` + `sitemap.xml` y `404.html`  |
| `npm run preview` | Sirve la carpeta `docs/` en http://localhost:4300 para revisar el build      |
| `npm test`        | Pruebas unitarias (Vitest)                                                   |

## Despliegue

GitHub Pages publica la carpeta `docs/`. Tras `npm run build`, haz commit de `docs/` y súbelo al
repositorio de despliegue. El dominio sale de `public/CNAME`, que se copia en cada build.

## Editar contenido

- **Proyectos:** `src/app/data/projects.ts`. Pon las imágenes en `public/img/projects/` en formato
  WebP: una versión completa (máx. 1400 px) y una miniatura `-sm` (máx. 720 px). Cada proyecto
  tiene su propia página `/proyectos/<slug>`, que se genera sola y entra en el sitemap.
- **Perfil, servicios y tecnologías:** `src/app/data/profile.ts`.
- **SEO global (meta, Open Graph, JSON-LD):** `src/index.html`. El SEO de cada página está en `src/app/core/seo.ts`.

## Estructura

```
src/
  index.html               SEO global y script del tema
  styles.css               Tokens de diseño (claro/oscuro) y estilos base
  app/
    app.*                  Cabecera, menú y pie de página
    app.routes*.ts         Rutas y pre-renderizado
    core/seo.ts            Título, descripción, canonical, OG y JSON-LD por página
    data/                  Contenido (perfil y proyectos)
    pages/home             Página principal
    pages/project          Detalle de proyecto
    pages/not-found        Página 404
    shared/                Iconos SVG y selector de tema
scripts/postbuild.mjs      Genera sitemap.xml, 404.html y .nojekyll
```
