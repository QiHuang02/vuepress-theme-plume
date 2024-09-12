import { locales } from './locales/index.js'
import type { Langs, Locale } from './types.js'

function createTranslate(lang?: Langs) {
  let current: Langs = lang || 'en-US'

  return {
    setLang: (lang: Langs) => {
      current = lang
    },
    t: (key: keyof Locale) => locales[current][key],
  }
}

export const { t, setLang } = createTranslate()
