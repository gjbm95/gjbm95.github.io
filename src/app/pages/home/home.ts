import { ChangeDetectionStrategy, Component, DOCUMENT, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../core/seo';
import { PROFILE, SERVICES, SKILLS } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly doc = inject(DOCUMENT);

  protected readonly profile = PROFILE;
  protected readonly services = SERVICES;
  protected readonly skills = SKILLS;
  protected readonly projects = PROJECTS;

  protected readonly formStatus = signal<'idle' | 'opened'>('idle');
  protected readonly copied = signal(false);

  constructor() {
    inject(Seo).set({
      title: 'Garry Jr. Bruno · Desarrollador de software en Caracas',
      description:
        'Ingeniero en informática (UCAB) y desarrollador de software full-stack. Microservicios con Java y Spring Boot, apps móviles con Ionic y Flutter, web con Angular y despliegues cloud en AWS.',
      path: '/',
    });
  }

  /** Abre el cliente de correo con el mensaje ya redactado (sin backend ni servicios de terceros). */
  protected sendMessage(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim() || 'Contacto desde garrybruno.com.ve';
    const message = String(data.get('message') ?? '').trim();
    const body = `${message}\n\n— ${name}`;

    const href = `mailto:${this.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.doc.defaultView?.location.assign(href);
    this.formStatus.set('opened');
  }

  protected async copyEmail(): Promise<void> {
    try {
      await this.doc.defaultView?.navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2200);
    } catch {
      this.doc.defaultView?.location.assign(`mailto:${this.profile.email}`);
    }
  }
}
