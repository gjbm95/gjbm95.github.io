export const SITE_URL = 'https://garrybruno.com.ve';

export const PROFILE = {
  name: 'Garry Jr. Bruno',
  role: 'Desarrollador de software',
  location: 'Caracas, Venezuela',
  email: 'garry387@gmail.com',
  birthYear: 1996,
  photo: '/img/garry.webp',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/garryjrbruno/', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/gjbm95', icon: 'github' },
  ],
} as const;

export interface Service {
  title: string;
  text: string;
  icon: 'layers' | 'phone' | 'monitor' | 'cloud';
}

export const SERVICES: Service[] = [
  {
    icon: 'layers',
    title: 'Arquitecturas de microservicios',
    text: 'Backends escalables y mantenibles con Java y Spring Boot, bases de datos SQL y NoSQL, y caché con Redis.',
  },
  {
    icon: 'phone',
    title: 'Aplicaciones móviles',
    text: 'Apps multiplataforma con Ionic y Flutter, y nativas para Android con Kotlin y Java, publicadas en las tiendas.',
  },
  {
    icon: 'monitor',
    title: 'Web y escritorio',
    text: 'Sitios y aplicaciones web modernas con Angular y TypeScript, rápidas, accesibles y pensadas para el negocio.',
  },
  {
    icon: 'cloud',
    title: 'Servicios en la nube',
    text: 'Despliegue y operación en AWS, Digital Ocean y Firebase, con contenedores Docker y orquestación en Kubernetes.',
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  { title: 'Lenguajes', items: ['Java', 'Kotlin', 'TypeScript', 'JavaScript', 'Python', 'Dart', 'PHP'] },
  { title: 'Frontend y móvil', items: ['Angular', 'Ionic', 'Flutter', 'Android', 'HTML', 'CSS'] },
  { title: 'Backend y datos', items: ['Spring Boot', 'PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis'] },
  { title: 'Cloud y DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Digital Ocean', 'Firebase'] },
];
