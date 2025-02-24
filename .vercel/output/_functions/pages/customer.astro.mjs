/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C3zvv3EJ.mjs';
import 'kleur/colors';
import { t as translations, $ as $$Layout } from '../chunks/Layout_D-Q1hqGO.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  const customers = [
    [
      { name: "ISNA AGUNG PERMATA", logo: "/images/customer/IAP.png", colSpan: 1 },
      { name: "KAS Shipping", logo: "/images/customer/KAS.png", colSpan: 1 }
    ],
    [
      { name: "PELITA GLOBAL LOGISTIK", logo: "/images/customer/Pelita.png", colSpan: 1 },
      { name: "IMC Ship Management", logo: "/images/customer/IMC.png", colSpan: 1 },
      { name: "SPN", logo: "/images/customer/SPN.png", colSpan: 1 }
    ],
    [
      { name: "KASEN", logo: "/images/customer/KASEN.png", colSpan: 1 },
      { name: "Niterra Mobility Indonesia", logo: "/images/customer/Niterra.png", colSpan: 1 }
    ]
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t.meta.title.customers, "description": t.meta.description.customers, "data-astro-cid-scl7df5v": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-396px)] bg-white py-6 sm:py-8 md:py-12" data-astro-cid-scl7df5v> <div class="max-w mx-auto px-[10%] space-y-8" data-astro-cid-scl7df5v> <!-- Heading --> <h1 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center mx-auto" data-astro-cid-scl7df5v> ${t.customers.title} </h1> <!-- Customer Logos Grid --> <div class="flex flex-col gap-4 max-w-[1280px] mx-auto" data-astro-cid-scl7df5v> <!-- First Row - 2 containers --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:max-w-[67%] mx-auto" data-astro-cid-scl7df5v> ${customers[0].map((customer) => renderTemplate`<div class="bg-white border border-primary-1 rounded-lg p-4 sm:p-6 flex items-center justify-center hover:border-primary-1/70 transition-colors h-[90px] sm:h-[100px] md:h-[120px]" data-astro-cid-scl7df5v> <img${addAttribute(customer.logo, "src")}${addAttribute(customer.name, "alt")} class="w-auto max-h-[45px] sm:max-h-[60px] md:max-h-[75px] object-contain" data-astro-cid-scl7df5v> </div>`)} </div> <!-- Second Row - 3 containers --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full" data-astro-cid-scl7df5v> ${customers[1].map((customer) => renderTemplate`<div class="bg-white border border-primary-1 rounded-lg p-4 sm:p-6 flex items-center justify-center hover:border-primary-1/70 transition-colors h-[90px] sm:h-[100px] md:h-[120px]" data-astro-cid-scl7df5v> <img${addAttribute(customer.logo, "src")}${addAttribute(customer.name, "alt")} class="w-auto max-h-[45px] sm:max-h-[60px] md:max-h-[75px] object-contain" data-astro-cid-scl7df5v> </div>`)} </div> <!-- Third Row - 2 containers --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:max-w-[67%] mx-auto" data-astro-cid-scl7df5v> ${customers[2].map((customer) => renderTemplate`<div class="bg-white border border-primary-1 rounded-lg p-4 sm:p-6 flex items-center justify-center hover:border-primary-1/70 transition-colors h-[90px] sm:h-[100px] md:h-[120px]" data-astro-cid-scl7df5v> <img${addAttribute(customer.logo, "src")}${addAttribute(customer.name, "alt")} class="w-auto max-h-[45px] sm:max-h-[60px] md:max-h-[75px] object-contain" data-astro-cid-scl7df5v> </div>`)} </div> </div> <h3 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center" data-astro-cid-scl7df5v> ${t.customers.footer} </h3> </div> </div> ` })} `;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/customer/index.astro", void 0);

const $$file = "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/customer/index.astro";
const $$url = "/customer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
