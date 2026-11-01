import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'layers'
  | 'phone'
  | 'monitor'
  | 'cloud'
  | 'mail'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'external'
  | 'map-pin'
  | 'graduation'
  | 'code'
  | 'sun'
  | 'moon'
  | 'send'
  | 'github'
  | 'linkedin';

/** Iconos SVG en línea: cero peticiones extra y heredan `currentColor`. */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true', class: 'icon' },
  styles: `
    :host { display: inline-flex; width: var(--icon-size, 1.25em); height: var(--icon-size, 1.25em); flex: none; }
    svg { width: 100%; height: 100%; }
  `,
  template: `
    @switch (name()) {
      @case ('github') {
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
      }
      @case ('linkedin') {
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
      }
      @default {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          @switch (name()) {
            @case ('layers') { <path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/> }
            @case ('phone') { <rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M11 18h2"/> }
            @case ('monitor') { <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/> }
            @case ('cloud') { <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/> }
            @case ('mail') { <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/> }
            @case ('arrow-right') { <path d="M5 12h14M12 5l7 7-7 7"/> }
            @case ('arrow-left') { <path d="M19 12H5M12 19l-7-7 7-7"/> }
            @case ('arrow-up') { <path d="M12 19V5M5 12l7-7 7 7"/> }
            @case ('external') { <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/> }
            @case ('map-pin') { <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/> }
            @case ('graduation') { <path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/> }
            @case ('code') { <path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/> }
            @case ('sun') { <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/> }
            @case ('moon') { <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/> }
            @case ('send') { <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/> }
          }
        </svg>
      }
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
}
