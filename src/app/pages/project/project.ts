import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Seo } from '../../core/seo';
import { SITE_URL } from '../../data/profile';
import { PROJECTS, Project, findProject } from '../../data/projects';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-project',
  imports: [RouterLink, Icon],
  templateUrl: './project.html',
  styleUrl: './project.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPage {
  private readonly seo = inject(Seo);
  private readonly router = inject(Router);

  protected readonly project = signal<Project | undefined>(undefined);
  protected readonly active = signal(0);

  protected readonly current = computed(() => this.project()?.images[this.active()]);
  protected readonly isPortrait = computed(() => {
    const img = this.current();
    return !!img && img.height > img.width;
  });

  protected readonly neighbours = computed(() => {
    const p = this.project();
    if (!p) return null;
    const i = PROJECTS.indexOf(p);
    const n = PROJECTS.length;
    return { prev: PROJECTS[(i - 1 + n) % n], next: PROJECTS[(i + 1) % n] };
  });

  constructor() {
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed())
      .subscribe((params) => this.load(params.get('slug')));
  }

  protected select(index: number): void {
    this.active.set(index);
  }

  private load(slug: string | null): void {
    const p = findProject(slug);
    this.project.set(p);
    this.active.set(0);

    if (!p) {
      void this.router.navigateByUrl('/404', { skipLocationChange: true });
      return;
    }

    const path = `/proyectos/${p.slug}`;
    this.seo.set({
      title: `${p.name} (${p.year}) · Proyecto de Garry Jr. Bruno`,
      description: `${p.description} Tecnologías: ${p.tech.join(', ')}.`,
      path,
      image: p.images[0]?.src,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: p.name,
        description: p.description,
        dateCreated: String(p.year),
        url: `${SITE_URL}${path}`,
        image: p.images.map((i) => `${SITE_URL}${i.src}`),
        keywords: p.tech.join(', '),
        inLanguage: 'es',
        creator: { '@id': `${SITE_URL}/#person` },
        ...(p.links[0] ? { sameAs: p.links.map((l) => l.url) } : {}),
      },
    });
  }
}
