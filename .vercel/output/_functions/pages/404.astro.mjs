/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_dwz2sopV.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B6Fv_PDO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const currentLang = Astro2.cookies.get("selectedLang")?.value || "en";
  Astro2.response.status = 404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": currentLang === "en" ? "Page Not Found - PT Global Niaga Sakti" : "Halaman Tidak Ditemukan - PT Global Niaga Sakti", "description": currentLang === "en" ? "The requested page could not be found." : "Halaman yang diminta tidak dapat ditemukan." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-396px)] bg-white py-12 flex items-center justify-center"> <div class="max-w-md mx-auto text-center px-4"> <h1 class="text-h2 text-primary-1 mb-4">404</h1> <h2 class="text-h4 text-primary-1 mb-6"> ${currentLang === "en" ? "Page Not Found" : "Halaman Tidak Ditemukan"} </h2> <p class="text-body2 mb-8"> ${currentLang === "en" ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." : "Halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia."} </p> <a href="/" class="inline-block px-6 py-3 bg-primary-1 text-white rounded-lg text-body1 hover:bg-primary-1/90 transition-colors"> ${currentLang === "en" ? "Return to Homepage" : "Kembali ke Beranda"} </a> </div> </div> ` })}`;
}, "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/404.astro", void 0);

const $$file = "C:/Users/Bryan Hutagalung/Documents/Kuliah/website_mobile/Project_Website_GlobalNiagaSakti/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
