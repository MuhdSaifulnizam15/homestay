import { Locale } from '@/types'
import 'server-only'
 
const locales = {
  en: () => import('../../locales/en.json').then((module) => module.default),
  ms: () => import('../../locales/bm.json').then((module) => module.default),
}
 
export const getLocale = async (locale: Locale) =>
  locales[locale]()