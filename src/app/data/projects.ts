export interface ProjectImage {
  /** Imagen completa (máx. 1400px). */
  src: string;
  /** Miniatura (máx. 720px). */
  thumb: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  year: number;
  summary: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  images: ProjectImage[];
}

/** Ayudante para declarar imágenes generadas en /public/img/projects (`nombre.webp` y `nombre-sm.webp`). */
function img(file: string, alt: string, width: number, height: number): ProjectImage {
  return {
    src: `/img/projects/${file}.webp`,
    thumb: `/img/projects/${file}-sm.webp`,
    alt,
    width,
    height,
  };
}

/**
 * Para añadir un proyecto: agrega sus imágenes a /public/img/projects (en WebP, versión
 * completa y `-sm`) y un objeto a esta lista. Su página /proyectos/<slug> se genera sola
 * en el build y se incluye en el sitemap.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'shoptools',
    name: 'ShopTools',
    year: 2025,
    summary: 'Plataforma gratuita para la gestión administrativa de negocios.',
    description:
      'Plataforma gratuita para la gestión administrativa de negocios, que permite registrar ventas, compras, inventario, clientes y proveedores desde un solo lugar.',
    tech: ['Java', 'Spring Boot', 'Redis', 'MongoDB', 'Angular', 'TypeScript', 'HTML', 'CSS'],
    links: [{ label: 'opencasher.com', url: 'https://opencasher.com' }],
    images: [
      img('vista_1', 'Panel de operaciones de ShopTools con balance, ingresos y egresos', 1400, 918),
      img('vista_2', 'Otra vista de la plataforma ShopTools', 1385, 912),
    ],
  },
  {
    slug: 'modas-timay',
    name: 'Modas Timay',
    year: 2023,
    summary: 'Sitio web para empresa de confección de uniformes.',
    description:
      'Sitio web para una empresa de confección de uniformes escolares, corporativos y médicos.',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    links: [{ label: 'modastimay.com.ve', url: 'https://modastimay.com.ve' }],
    images: [img('modas-timay', 'Página de inicio del sitio web de Modas Timay', 1400, 803)],
  },
  {
    slug: 'on-pass',
    name: 'On Pass',
    year: 2021,
    summary: 'App para gestión de accesos y reservaciones en clubes privados.',
    description: 'Aplicación móvil para la gestión de accesos y reservaciones en clubes privados.',
    tech: ['Ionic', 'Angular', 'TypeScript', 'PHP', 'MySQL', 'HTML', 'CSS'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.onpass.app' },
      { label: 'App Store', url: 'https://apps.apple.com/pa/app/on-pass/id1524534482' },
    ],
    images: [
      img('on-pass-3', 'Pantalla de la app On Pass', 647, 1400),
      img('on-pass-2', 'Pantalla de la app On Pass', 647, 1400),
      img('on-pass-4', 'Pantalla de la app On Pass', 647, 1400),
      img('on-pass-5', 'Pantalla de la app On Pass', 647, 1400),
    ],
  },
  {
    slug: 'on-cover',
    name: 'On Cover',
    year: 2021,
    summary: 'App para reservar entradas, mesas y refrigerios en eventos.',
    description:
      'Aplicación móvil para la reserva de entradas, mesas y refrigerios para eventos festivos.',
    tech: ['Ionic', 'Angular', 'TypeScript', 'PHP', 'MySQL', 'HTML', 'CSS'],
    links: [],
    images: [
      img('on-cover-1', 'Pantalla de la app On Cover', 787, 1400),
      img('on-cover-2', 'Pantalla de la app On Cover', 787, 1400),
      img('on-cover-3', 'Pantalla de la app On Cover', 787, 1400),
      img('on-cover-4', 'Pantalla de la app On Cover', 787, 1400),
      img('on-cover-5', 'Pantalla de la app On Cover', 787, 1400),
    ],
  },
  {
    slug: 'rebranding-century-21',
    name: 'Rebranding Century 21',
    year: 2018,
    summary: 'Adaptación del sitio a la nueva imagen global de Century 21.',
    description:
      'Adaptación a la nueva imagen global de la marca Century 21 para su franquicia en Venezuela. Trabajo realizado en conjunto con Pencil Speech.',
    tech: ['PHP', 'HTML', 'CSS'],
    links: [{ label: 'Pencil Speech', url: 'https://pencilspeech.com/en/' }],
    images: [img('century21', 'Sitio oficial de Century 21 Venezuela', 1336, 620)],
  },
  {
    slug: 'dmt-learning',
    name: 'DMT Learning',
    year: 2018,
    summary: 'Sistema de gestión de cursos en línea para DMT Group.',
    description: 'Sistema de gestión de cursos en línea desarrollado para la empresa DMT Group.',
    tech: ['Angular', 'TypeScript', 'Java', 'PostgreSQL', 'HTML', 'CSS'],
    links: [],
    images: [img('dmt', 'Plataforma de cursos DMT Learning', 1334, 614)],
  },
];

export function findProject(slug: string | null | undefined): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
