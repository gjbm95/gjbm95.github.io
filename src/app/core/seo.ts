import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_URL } from '../data/profile';

export interface SeoData {
  title: string;
  description: string;
  /** Ruta absoluta dentro del sitio, p. ej. `/proyectos/shoptools`. */
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | null;
}

const DEFAULT_IMAGE = `${SITE_URL}/img/og-image.jpg`;

/** Actualiza título, descripción, canonical, Open Graph, Twitter y JSON-LD por página. */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  set(data: SeoData): void {
    const url = `${SITE_URL}${data.path === '/' ? '/' : data.path}`;
    const image = data.image ? `${SITE_URL}${data.image}` : DEFAULT_IMAGE;

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({
      name: 'robots',
      content: data.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:type', content: data.type ?? 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    if (data.image) {
      this.meta.removeTag("property='og:image:width'");
      this.meta.removeTag("property='og:image:height'");
      this.meta.removeTag("property='og:image:alt'");
    }

    this.setCanonical(data.noindex ? null : url);
    this.setJsonLd(data.jsonLd ?? null);
  }

  private setCanonical(url: string | null): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!url) {
      link?.remove();
      return;
    }
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = url;
  }

  private setJsonLd(data: Record<string, unknown> | null): void {
    const id = 'page-jsonld';
    let script = this.doc.getElementById(id);
    if (!data) {
      script?.remove();
      return;
    }
    if (!script) {
      script = this.doc.createElement('script');
      script.id = id;
      script.setAttribute('type', 'application/ld+json');
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
