export const locales = ['ja', 'en'] as const;

export type Locale = (typeof locales)[number];
export type LocalizedPath = '/' | '/works' | '/contact';

export function localizePath(locale: Locale, path: LocalizedPath) {
  return locale === 'en' ? (path === '/' ? '/en' : `/en${path}`) : path;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ja' : 'en';
}

export const preferenceKey = 'namiyama.locale-preference';
export const geoAttemptKey = 'namiyama.geo-language-attempted';
