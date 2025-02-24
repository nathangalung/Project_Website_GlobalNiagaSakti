/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C3zvv3EJ.mjs';
import 'kleur/colors';
import { t as translations, $ as $$Layout } from '../chunks/Layout_D-Q1hqGO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.meta.title.contact, "description": t.meta.description.contact }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-396px)] bg-white py-6 sm:py-8 md:py-12"> <div class="max-w mx-auto px-[10%]"> <!-- Heading --> <h1 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center mb-12"> ${t.contact.title} </h1> <!-- Contact Form and Info Grid --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"> <!-- Contact Form --> <div class="flex flex-col gap-6 h-fit"> <!-- Full Name --> <div class="flex flex-col gap-2"> <h4 class="text-body1 sm:text-h5 md:text-h4 text-primary-1"> ${t.contact.form.fullName.label} </h4> <input type="text" id="fullName"${addAttribute(t.contact.form.fullName.placeholder, "placeholder")} class="w-full px-4 py-3 rounded-lg border border-primary-1 focus:outline-none focus:ring-2 focus:ring-primary-1/20 placeholder:text-primary-2 text-primary-1 text-body4"> </div> <!-- Email --> <div class="flex flex-col gap-2"> <h4 class="text-body1 sm:text-h5 md:text-h4 text-primary-1"> ${t.contact.form.email.label} </h4> <input type="email" id="email"${addAttribute(t.contact.form.email.placeholder, "placeholder")} class="w-full px-4 py-3 rounded-lg border border-primary-1 focus:outline-none focus:ring-2 focus:ring-primary-1/20 placeholder:text-primary-2 text-primary-1 text-body4"> </div> <!-- Message --> <div class="flex flex-col gap-2"> <h4 class="text-body1 sm:text-h5 md:text-h4 text-primary-1"> ${t.contact.form.message.label} </h4> <textarea id="message" rows="6"${addAttribute(t.contact.form.message.placeholder, "placeholder")} class="w-full h-[144px] px-4 py-3 rounded-lg border border-primary-1 focus:outline-none focus:ring-2 focus:ring-primary-1/20 resize-none text-body4 placeholder:text-primary-2 text-primary-1"></textarea> </div> <!-- Submit Button --> <div class="flex justify-center"> <button type="submit" class="px-4 sm:px-8 md:px-12 py-1 sm:py-2 md:py-3 bg-primary-1 text-white rounded-lg hover:bg-primary-1/90 transition-colors text-body1 sm:text-h5 md:text-h4"> ${t.contact.form.submit} </button> </div> </div> <!-- Contact Information --> <div class="bg-primary-2/10 rounded-lg p-8 md:p-10 h-fit border border-primary-1"> <h4 class="text-body1 sm:text-h5 md:text-h4 text-primary-1 mb-8"> ${t.contact.info.company} </h4> <!-- Office --> <div class="mb-8"> <h5 class="text-body1 md:text-h5 text-primary-1 mb-3"> ${t.contact.info.office} </h5> <address class="text-body4 md:text-body2 text-primary-1 not-italic leading-relaxed">
Gedung Wirausaha Lantai 1, Unit 104<br>
Jl. HR. Rasuna Said Kav. C5<br>
Kuningan, Setiabudi<br>
Jakarta Selatan 12920
</address> </div> <!-- Contact --> <div class="mb-8"> <h5 class="text-body1 md:text-h5 text-primary-1 mb-3"> ${t.contact.info.contact} </h5> <div class="text-body3 md:text-body1 text-primary-1 leading-relaxed"> <p>Call Center : 021-5099 6969 (ext. 1249)</p> <p>Whatsapp : 0811-999-0991 (Chat Only)</p> </div> </div> <!-- Email --> <div> <h5 class="text-body1 md:text-h5 text-primary-1 mb-3"> ${t.contact.info.email} </h5> <a href="mailto:sales@globalsakti.com" class="text-body3 md:text-body1 text-primary-1 hover:underline">
sales@globalsakti.com
</a> </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
