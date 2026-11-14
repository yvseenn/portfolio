import { defineConfig } from 'astro/config';

// GitHub Pages sirve este repositorio en https://yvseenn.github.io/portfolio/.
// Con un dominio propio, cambia `site` y elimina `base`.
export default defineConfig({
  site: 'https://yvseenn.github.io',
  base: '/portfolio',
});
