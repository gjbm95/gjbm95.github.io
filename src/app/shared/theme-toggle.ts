import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';
import { Icon } from './icon';

/**
 * Alterna entre tema claro y oscuro. El icono visible se decide por CSS según
 * `html[data-theme]` / `prefers-color-scheme`, así el HTML pre-renderizado y el
 * hidratado siempre coinciden.
 */
@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" class="icon-btn" (click)="toggle()" aria-label="Cambiar tema claro u oscuro" title="Cambiar tema">
      <app-icon name="moon" class="to-dark" />
      <app-icon name="sun" class="to-light" />
    </button>
  `,
  styles: `
    .to-light { display: none; }
    :host-context(html[data-theme='dark']) .to-light { display: inline-flex; }
    :host-context(html[data-theme='dark']) .to-dark { display: none; }
    @media (prefers-color-scheme: dark) {
      :host-context(html:not([data-theme='light'])) .to-light { display: inline-flex; }
      :host-context(html:not([data-theme='light'])) .to-dark { display: none; }
    }
  `,
})
export class ThemeToggle {
  private readonly doc = inject(DOCUMENT);

  toggle(): void {
    const root = this.doc.documentElement;
    const win = this.doc.defaultView;
    const current =
      root.dataset['theme'] ??
      (win?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset['theme'] = next;
    try {
      win?.localStorage.setItem('theme', next);
    } catch {
      /* almacenamiento no disponible: el cambio solo dura esta visita */
    }
  }
}
