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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.meta.title.privacy, "description": t.meta.description.privacy }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full bg-white"> <div class="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12"> <h1 class="text-h4 sm:text-h3 md:text-h2 text-primary-1 mb-6"> ${t.legal.privacy.title} </h1> <div class="space-y-8 text-body4 md:text-body2"> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.intro1}<a href="https://globalsakti.com/" class="underline hover:text-primary-2 transition-colors">${t.legal.privacy.link}</a>${t.legal.privacy.intro2}.
</p> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.intro3} </p> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.privacy.sections.logFiles.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.logFiles.text}<a href="https://www.privacypolicyonline.com/privacy-policy-generator/" class="underline hover:text-primary-2 transition-colors">${t.legal.privacy.sections.logFiles.link}</a>.
</p> </section> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.privacy.sections.cookies.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.cookies.text1} </p> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.cookies.text2}<a href="https://www.privacypolicyonline.com/what-are-cookies/" class="underline hover:text-primary-2 transition-colors">${t.legal.privacy.sections.cookies.link}</a>.
</p> </section> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.privacy.sections.privacyPolicies.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.privacyPolicies.text1} </p> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.privacyPolicies.text2} </p> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.privacyPolicies.text3} </p> </section> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.privacy.sections.thirdParty.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.thirdParty.text1} </p> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.thirdParty.text2} </p> </section> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.privacy.sections.children.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.children.text1} </p> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.children.text2} </p> </section> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.privacy.sections.online.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.online.text} </p> </section> <section> <h2 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 mb-4">${t.legal.privacy.sections.consent.title}</h2> <p class="text-body4 md:text-body2 leading-relaxed text-primary-1 text-justify mb-6 flex-grow"> ${t.legal.privacy.sections.consent.text} </p> </section> </div> </div> </main> ` })}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/pnp/index.astro", void 0);

const $$file = "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/pnp/index.astro";
const $$url = "/pnp";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
