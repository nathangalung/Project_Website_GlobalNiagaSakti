/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C3zvv3EJ.mjs';
import 'kleur/colors';
import { $ as $$Layout, t as translations } from '../chunks/Layout_D-Q1hqGO.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PT Global Niaga Sakti - Industrial Solutions Partner", "description": "Your trusted partner for industrial solutions", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-396px)] bg-white" data-astro-cid-j7pv25f6> <!-- Hero Section with Full-width Image --> <div class="relative" data-astro-cid-j7pv25f6> <!-- Full-width background image --> <div class="w-full h-[300px] sm:h-[450px] md:h-[600px] relative overflow-hidden" data-astro-cid-j7pv25f6> <img src="/images/home/Sea.png" alt="Industrial Solutions" class="w-full h-full object-cover object-left md:object-center" loading="eager" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-r from-primary-1 to-transparent opacity-80" data-astro-cid-j7pv25f6></div> </div> <!-- Overlay Content --> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <div class="max-w mx-auto px-[10%] h-full" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 lg:grid-cols-2 h-full items-center" data-astro-cid-j7pv25f6> <div class="flex flex-col justify-center text-white" data-astro-cid-j7pv25f6> <div class="max-w-[600px]" data-astro-cid-j7pv25f6> <h2 class="text-h4 sm:text-h3 md:text-h2 leading-tight mb-4 sm:mb-8 whitespace-normal" data-astro-cid-j7pv25f6> ${t.home.hero.title} </h2> <a href="/contact" class="inline-block px-4 md:px-8 py-1 md:py-3 bg-white text-primary-1 rounded-lg 
                        text-h5 sm:text-h4 md:text-h3 hover:bg-gray-100 transition-colors
                        shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                        transition-transform duration-200" data-astro-cid-j7pv25f6> ${t.home.hero.cta} </a> </div> </div> </div> </div> </div> </div> <!-- Content Section --> <section class="py-8 md:py-12" data-astro-cid-j7pv25f6> <div class="max-w mx-auto px-[10%] space-y-12" data-astro-cid-j7pv25f6> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center max-w-4xl mx-auto" data-astro-cid-j7pv25f6> ${t.home.content.tagline} </h2> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40" data-astro-cid-j7pv25f6> <!-- Products Box --> <div class="bg-gray-50 p-8 lg:p-12 rounded-xl border-2 border-primary-3 flex flex-col h-full" data-astro-cid-j7pv25f6> <h3 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center mb-4" data-astro-cid-j7pv25f6> ${t.home.content.products.title} </h3> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow" data-astro-cid-j7pv25f6> ${t.home.content.products.description} </p> <div class="text-center mt-auto" data-astro-cid-j7pv25f6> <a href="/product" class="inline-flex items-center text-primary-1 group" data-astro-cid-j7pv25f6> <span class="text-body3 md:text-body1 group-hover:underline" data-astro-cid-j7pv25f6>${t.home.content.products.cta}</span> <span class="ml-2 transition-transform group-hover:translate-x-1" data-astro-cid-j7pv25f6>→</span> </a> </div> </div> <!-- Customers Box --> <div class="bg-gray-50 p-8 lg:p-12 rounded-xl border-2 border-primary-3 flex flex-col h-full" data-astro-cid-j7pv25f6> <h3 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center mb-4" data-astro-cid-j7pv25f6> ${t.home.content.customers.title} </h3> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow" data-astro-cid-j7pv25f6> ${t.home.content.customers.description} </p> <div class="text-center mt-auto" data-astro-cid-j7pv25f6> <a href="/customer" class="inline-flex items-center text-primary-1 group" data-astro-cid-j7pv25f6> <span class="text-body3 md:text-body1 group-hover:underline" data-astro-cid-j7pv25f6>${t.home.content.customers.cta}</span> <span class="ml-2 transition-transform group-hover:translate-x-1" data-astro-cid-j7pv25f6>→</span> </a> </div> </div> </div> </div> </section> <!-- MESPAS Logo Section --> <section class="pt-2 pb-12" data-astro-cid-j7pv25f6> <div class="container mx-auto" data-astro-cid-j7pv25f6> <div class="w-full max-w-[60%] sm:max-w-[30%] md:max-w-[15%] mx-auto" data-astro-cid-j7pv25f6> <img src="/images/home/MESPAS.png" alt="MESPAS" class="w-full object-contain rounded-lg" loading="lazy" data-astro-cid-j7pv25f6> </div> </div> </section> </div> ` })}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/index.astro", void 0);

const $$file = "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
