/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_dwz2sopV.mjs';
import 'kleur/colors';
import { t as translations, $ as $$Layout } from '../chunks/Layout_Dyu-GWRn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.meta.title.disclaimer, "description": t.meta.description.disclaimer }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full bg-white"> <div class="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12"> <h1 class="text-h4 sm:text-h3 md:text-h2 text-primary-1 mb-6"> ${t.legal.disclaimer.title} </h1> <div class="space-y-8 text-body4 md:text-body2"> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.disclaimer.text1}<a href="https://globalsakti.com/" class="underline hover:text-primary-2 transition-colors">${t.legal.disclaimer.link1}</a>${t.legal.disclaimer.text2}<a href="https://www.privacypolicyonline.com/disclaimer-generator/" class="underline hover:text-primary-2 transition-colors">${t.legal.disclaimer.link2}</a>.
</p> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.disclaimer.text3} </p> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.disclaimer.text4} </p> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.disclaimer.sections.consent.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.disclaimer.sections.consent.text} </p> </section> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.disclaimer.sections.update.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.disclaimer.sections.update.text} </p> </section> </div> </div> </main> ` })}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/disclaimer/index.astro", void 0);

const $$file = "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/disclaimer/index.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
