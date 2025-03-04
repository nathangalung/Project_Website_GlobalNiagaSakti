/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_dwz2sopV.mjs';
import 'kleur/colors';
import { t as translations, $ as $$Layout } from '../chunks/Layout_B6Fv_PDO.mjs';
import { $ as $$OptimizedImage } from '../chunks/OptimizedImage_B2c4qVaI.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.meta.title.about, "description": t.meta.description.about, "data-astro-cid-fwdcsva6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-396px)] bg-white py-6 sm:py-8 md:py-12" data-astro-cid-fwdcsva6> <div class="max-w mx-auto px-[10%]" data-astro-cid-fwdcsva6> <!-- Top Section --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-8 md:mb-12" data-astro-cid-fwdcsva6> <!-- Left Column --> <div class="flex flex-col" data-astro-cid-fwdcsva6> <div class="rounded-xl overflow-hidden" data-astro-cid-fwdcsva6> ${renderComponent($$result2, "OptimizedImage", $$OptimizedImage, { "src": "/images/about/Harbour.png", "alt": "Industrial Port", "class": "w-full h-auto aspect-[16/8.2] object-cover", "loading": "eager", "data-astro-cid-fwdcsva6": true })} </div> </div> <!-- Right Column --> <div class="flex flex-col gap-4 sm:gap-6" data-astro-cid-fwdcsva6> <p class="text-primary-1 text-body4 md:text-body2 text-justify !text-justify" data-astro-cid-fwdcsva6> <span class="text-body3 md:text-body1" data-astro-cid-fwdcsva6>PT Global Niaga Sakti</span> ${t.about.intro.text1} </p> <p class="text-primary-1 text-body4 md:text-body2 text-justify !text-justify" data-astro-cid-fwdcsva6> ${t.about.intro.text2} </p> <p class="text-primary-1 text-body3 md:text-body1 text-justify !text-justify" data-astro-cid-fwdcsva6> ${t.about.intro.text3} </p> </div> </div> <h1 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center mb-4 sm:mb-8 md:mb-12 mt-2 sm:mt-4 md:mt-8" data-astro-cid-fwdcsva6> ${t.about.intro.title} </h1> <!-- Bottom Section --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 md:py-4" data-astro-cid-fwdcsva6> <!-- Left Box --> <div class="lg:col-span-5" data-astro-cid-fwdcsva6> <div class="bg-primary-1 text-white rounded-xl p-5 sm:p-6 lg:p-8 h-full flex items-center justify-center" data-astro-cid-fwdcsva6> <p class="text-body4 md:text-body2 text-justify !text-justify" data-astro-cid-fwdcsva6> ${t.about.vision.box1} </p> </div> </div> <!-- Center Box --> <div class="lg:col-span-2 flex items-center justify-center py-2 lg:py-0" data-astro-cid-fwdcsva6> <h3 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center" data-astro-cid-fwdcsva6> ${t.about.vision.title} </h3> </div> <!-- Right Box --> <div class="lg:col-span-5" data-astro-cid-fwdcsva6> <div class="bg-primary-1 text-white rounded-xl p-5 sm:p-6 lg:p-8 h-full flex items-center justify-center" data-astro-cid-fwdcsva6> <p class="text-body4 md:text-body2 text-justify !text-justify" data-astro-cid-fwdcsva6> ${t.about.vision.box2} </p> </div> </div> </div> </div> </div> ` })} `;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/about/index.astro", void 0);

const $$file = "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
