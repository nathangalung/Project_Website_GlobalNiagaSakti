import { d as defineMiddleware, s as sequence } from './chunks/index_DeXbM0af.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DFNzQoS-.mjs';
import 'kleur/colors';
import './chunks/astro/server_dwz2sopV.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async ({ cookies, request }, next) => {
  try {
    const lang = cookies.get("selectedLang")?.value || "en";
    if (!cookies.has("selectedLang")) {
      cookies.set("selectedLang", lang, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
      });
    }
    const response = await next();
    return response;
  } catch (error) {
    console.error("Middleware error:", error);
    return next();
  }
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
