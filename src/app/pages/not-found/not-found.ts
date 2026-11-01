import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../core/seo';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container nf">
      <p class="code gradient-text" aria-hidden="true">404</p>
      <h1>Esta página no existe</h1>
      <p class="lead">Puede que el enlace esté roto o que la página se haya movido.</p>
      <a routerLink="/" class="btn btn-primary"><app-icon name="arrow-left" /> Volver al inicio</a>
    </section>
  `,
  styles: `
    .nf {
      min-height: calc(100vh - var(--header-h) - 200px);
      display: grid;
      place-content: center;
      justify-items: center;
      gap: 1rem;
      padding-block: 4rem;
      text-align: center;
    }
    .code {
      font-family: var(--font-display);
      font-size: clamp(6rem, 22vw, 10rem);
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.06em;
    }
    h1 { font-size: clamp(1.8rem, 4vw, 2.4rem); }
    .btn { margin-top: 1rem; }
  `,
})
export class NotFound {
  constructor() {
    inject(Seo).set({
      title: 'Página no encontrada · Garry Jr. Bruno',
      description: 'La página que buscas no existe.',
      path: '/404',
      noindex: true,
    });
  }
}
