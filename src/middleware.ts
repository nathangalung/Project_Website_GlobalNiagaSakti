import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async ({ cookies, request }, next) => {
  try {
    const lang = cookies.get("selectedLang")?.value || "en";
    
    if (!cookies.has("selectedLang")) {
      cookies.set("selectedLang", lang, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax"
      });
    }
    
    return await next();
  } catch (error) {
    console.error('Middleware error:', error);
    return next();
  }
});