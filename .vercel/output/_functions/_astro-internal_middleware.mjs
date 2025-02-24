import { d as defineMiddleware, s as sequence } from './chunks/index_BG9wk7Mv.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CFDtuJ1z.mjs';
import 'kleur/colors';
import './chunks/astro/server_C3zvv3EJ.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async ({ cookies, request }, next) => {
  const lang = cookies.get("selectedLang")?.value || "en";
  if (!cookies.has("selectedLang")) {
    cookies.set("selectedLang", lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "strict"
    });
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
