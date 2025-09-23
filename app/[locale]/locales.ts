import 'server-only'
 
const locales = {
  en: () => import('../../locales/en.json').then((module) => module.default),
  bm: () => import('../../locales/bm.json').then((module) => module.default),
}
 
export const getLocale = async (locale: 'en' | 'bm') =>
  locales[locale]()