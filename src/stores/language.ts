export type Language = 'en' | 'id';

export function setLanguage(lang: Language) {
  document.cookie = `selectedLang=${lang};path=/;max-age=31536000`;
  window.location.reload();
}

export function getLanguage(): Language {
  const lang = document.cookie
    .split('; ')
    .find(row => row.startsWith('selectedLang='))
    ?.split('=')[1];
  return (lang === 'id' ? 'id' : 'en') as Language;
}