export function getCanonicalURL(path: string): string {
    const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://www.globalsakti.com';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${siteUrl}${cleanPath}`;
  }