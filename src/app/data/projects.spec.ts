import { PROJECTS, findProject } from './projects';

describe('PROJECTS', () => {
  it('tiene slugs únicos y en formato URL', () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it('cada proyecto tiene al menos una imagen con dimensiones y texto alternativo', () => {
    for (const p of PROJECTS) {
      expect(p.images.length).toBeGreaterThan(0);
      for (const img of p.images) {
        expect(img.width).toBeGreaterThan(0);
        expect(img.height).toBeGreaterThan(0);
        expect(img.alt.length).toBeGreaterThan(0);
      }
    }
  });

  it('findProject devuelve el proyecto o undefined', () => {
    expect(findProject('shoptools')?.name).toBe('ShopTools');
    expect(findProject('no-existe')).toBeUndefined();
  });
});
