import { preferenceKey } from '../lib/i18n';

document.querySelectorAll('[data-locale-preference]').forEach((link) => {
  link.addEventListener('click', () => {
    const locale = link.getAttribute('data-locale-preference');
    if (locale) window.localStorage.setItem(preferenceKey, locale);
  });
});
