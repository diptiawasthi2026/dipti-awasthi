import { LanguageCode } from '../../types';
import { en, TranslationDict } from './en';
import { hi } from './hi';
import { mr } from './mr';
import { pa } from './pa';
import { bn } from './bn';
import { te } from './te';
import { ta } from './ta';
import { ml } from './ml';
import { or } from './or';

const translationsMap: Record<LanguageCode, TranslationDict> = {
  en,
  hi,
  mr,
  pa,
  bn,
  te,
  ta,
  ml,
  or
};

export function getTranslation(lang: LanguageCode): TranslationDict {
  return translationsMap[lang] || en;
}

export { en, hi, mr, pa, bn, te, ta, ml, or };
export type { TranslationDict };

