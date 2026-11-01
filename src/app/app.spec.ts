import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renderiza la cabecera con la navegación principal', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.brand-name')?.textContent).toContain('Garry Jr. Bruno');
    expect(el.querySelectorAll('nav[aria-label="Principal"] li').length).toBe(4);
  });

  it('abre y cierra el menú móvil', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const btn = el.querySelector<HTMLButtonElement>('.menu-btn')!;
    btn.click();
    await fixture.whenStable();
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    btn.click();
    await fixture.whenStable();
    expect(btn.getAttribute('aria-expanded')).toBe('false');
  });
});
