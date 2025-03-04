import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_dwz2sopV.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$OptimizedImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OptimizedImage;
  const { src, alt, width, height, class: className, loading = "lazy" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")}${addAttribute(loading, "loading")} decoding="async" style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;">`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/components/OptimizedImage.astro", void 0);

export { $$OptimizedImage as $ };
