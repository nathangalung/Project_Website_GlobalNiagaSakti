import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async ({ cookies, request }, next) => {
  // Get current language from cookie or default to 'en'
  const lang = cookies.get('selectedLang')?.value || 'en';
  
  // Set/refresh cookie if needed
  if (!cookies.has('selectedLang')) {
    cookies.set('selectedLang', lang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'strict'
    });
  }

  return next();
});