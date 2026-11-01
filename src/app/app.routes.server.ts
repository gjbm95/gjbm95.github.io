import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './data/projects';

/** Todo el sitio se pre-renderiza a HTML estático en el build (ideal para SEO y GitHub Pages). */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'proyectos/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PROJECTS.map((p) => ({ slug: p.slug })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
