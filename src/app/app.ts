import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PROFILE } from './data/profile';
import { Icon } from './shared/icon';
import { ThemeToggle } from './shared/theme-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Icon, ThemeToggle],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
  protected readonly menuOpen = signal(false);

  protected readonly nav = [
    { label: 'Sobre mí', fragment: 'sobre-mi' },
    { label: 'Servicios', fragment: 'servicios' },
    { label: 'Tecnologías', fragment: 'tecnologias' },
    { label: 'Proyectos', fragment: 'proyectos' },
  ];

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
