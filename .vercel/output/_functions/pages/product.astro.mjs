/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, u as unescapeHTML, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_dwz2sopV.mjs';
import 'kleur/colors';
import { t as translations, $ as $$Layout } from '../chunks/Layout_B6Fv_PDO.mjs';
import { $ as $$OptimizedImage } from '../chunks/OptimizedImage_B2c4qVaI.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  const t = translations[currentLang];
  const products = [
    { title: t.products.types.engine, image: "/images/product/Engine.png" },
    { title: t.products.types.safety, image: "/images/product/Safety.png" },
    { title: t.products.types.electric, image: "/images/product/Electric.png" },
    { title: t.products.types.deck, image: "/images/product/Deck.png" },
    { title: t.products.types.cabin, image: "/images/product/Cabin.png" },
    { title: t.products.types.medical, image: "/images/product/Medical.png" },
    { title: t.products.types.lubricants, image: "/images/product/Lubricants.png" },
    { title: t.products.types.sealing, image: "/images/product/Sealing.png" }
  ];
  return renderTemplate(_a || (_a = __template(["", '  <script type="application/ld+json">', "<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": t.meta.title.products, "description": t.meta.description.products, "data-astro-cid-rnqo2yuk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-396px)] bg-white py-6 sm:py-8 md:py-12" data-astro-cid-rnqo2yuk> <div class="max-w mx-auto px-[10%] space-y-8" data-astro-cid-rnqo2yuk> <!-- Heading --> <h1 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center mb-2 sm:mb-8 md:mb-12" data-astro-cid-rnqo2yuk> ${t.products.title} </h1> <div class="flex flex-col gap-8" data-astro-cid-rnqo2yuk>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" data-astro-cid-rnqo2yuk> ${products.slice(0, 6).map((product) => renderTemplate`<div class="bg-gray-50 rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow h-[200px] sm:h-[250px] md:h-[275px]" data-astro-cid-rnqo2yuk> <div class="p-4 sm:p-6 flex items-center justify-center h-[140px] sm:h-[180px] bg-primary-2/20" data-astro-cid-rnqo2yuk> ${renderComponent($$result2, "OptimizedImage", $$OptimizedImage, { "src": product.image, "alt": `${product.title} - Industrial solution by PT Global Niaga Sakti`, "class": "max-w-[80%] sm:max-w-[90%] max-h-[80%] sm:max-h-[90%] object-contain transform scale-125 sm:scale-150", "loading": "lazy", "data-astro-cid-rnqo2yuk": true })} </div> <div class="bg-primary-1 text-white p-2 sm:p-3 md:p-4 flex-1 flex flex-col items-center justify-center" data-astro-cid-rnqo2yuk> <h4 class="text-body1 sm:text-h5 md:text-h4 text-center" data-astro-cid-rnqo2yuk> ${product.title} </h4> </div> </div>`)} </div>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" data-astro-cid-rnqo2yuk>  <div class="hidden lg:block" data-astro-cid-rnqo2yuk></div>  <div class="col-span-full md:col-span-2 lg:col-span-1" data-astro-cid-rnqo2yuk> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:-mx-[53%]" data-astro-cid-rnqo2yuk> ${products.slice(6, 8).map((product) => renderTemplate`<div class="bg-gray-50 rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow h-[200px] sm:h-[250px] md:h-[275px]" data-astro-cid-rnqo2yuk> <div class="p-4 sm:p-6 flex items-center justify-center h-[140px] sm:h-[180px] bg-primary-2/20" data-astro-cid-rnqo2yuk> <img${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")} class="max-w-[80%] sm:max-w-[90%] max-h-[80%] sm:max-h-[90%] object-contain transform scale-125 sm:scale-150" loading="lazy" data-astro-cid-rnqo2yuk> </div> <div class="bg-primary-1 text-white p-2 sm:p-3 md:p-4 flex-1 flex flex-col items-center justify-center" data-astro-cid-rnqo2yuk> <h4 class="text-body1 sm:text-h5 md:text-h4 text-center" data-astro-cid-rnqo2yuk> ${product.title} </h4> </div> </div>`)} </div> </div>  <div class="hidden lg:block" data-astro-cid-rnqo2yuk></div> </div> <h3 class="text-h5 sm:text-h4 md:text-h3 text-primary-1 text-center md:mt-4" data-astro-cid-rnqo2yuk> ${t.products.footer} </h3> </div> </div> </div> ` }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "image": `https://globalsakti.com${product.image}`,
        "description": `Industrial ${product.title} provided by PT Global Niaga Sakti`,
        "brand": {
          "@type": "Brand",
          "name": "PT Global Niaga Sakti"
        }
      }
    }))
  })));
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/product/index.astro", void 0);

const $$file = "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/product/index.astro";
const $$url = "/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
