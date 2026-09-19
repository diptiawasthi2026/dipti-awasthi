import { LanguageCode } from '../../types';
import { en, TranslationDict } from './en';
import { hi } from './hi';
import { regionalTranslations } from './regional';

export function getTranslation(lang: LanguageCode): TranslationDict {
  if (lang === 'hi') {
    return hi;
  }
  if (lang === 'en') {
    return en;
  }

  const regional = regionalTranslations[lang];
  if (!regional) {
    return en;
  }

  // Deep merge regional overrides with base English dictionary
  return {
    ...en,
    ...regional,
    nav: { ...en.nav, ...(regional.nav || {}) },
    hero: { ...en.hero, ...(regional.hero || {}) },
    about: { ...en.about, ...(regional.about || {}) },
    services: { ...en.services, ...(regional.services || {}) },
    numerologySection: { ...en.numerologySection, ...(regional.numerologySection || {}) },
    tarotSection: { ...en.tarotSection, ...(regional.tarotSection || {}) },
    coachingSection: { ...en.coachingSection, ...(regional.coachingSection || {}) },
    whyChoose: { ...en.whyChoose, ...(regional.whyChoose || {}) },
    howItWorks: { ...en.howItWorks, ...(regional.howItWorks || {}) },
    enquiry: { ...en.enquiry, ...(regional.enquiry || {}) },
    directConnection: { ...en.directConnection, ...(regional.directConnection || {}) },
    footer: { ...en.footer, ...(regional.footer || {}) },
  } as TranslationDict;
}

export { en, hi };
