import { LanguageOption } from '../types';

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', nativeName: 'English', englishName: 'English', script: 'Latin' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', script: 'Devanagari' },
  { code: 'mr', nativeName: 'मराठी', englishName: 'Marathi', script: 'Devanagari' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', script: 'Gurmukhi' },
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali', script: 'Bengali' },
  { code: 'te', nativeName: 'తెలుగు', englishName: 'Telugu', script: 'Telugu' },
  { code: 'ta', nativeName: 'தமிழ்', englishName: 'Tamil', script: 'Tamil' },
  { code: 'ml', nativeName: 'മലയാളം', englishName: 'Malayalam', script: 'Malayalam' },
  { code: 'or', nativeName: 'ଓଡ଼ିଆ', englishName: 'Odia', script: 'Odia' }
];

export const HTML_LANG_MAP: Record<string, string> = {
  en: 'en',
  hi: 'hi',
  mr: 'mr',
  pa: 'pa',
  bn: 'bn',
  te: 'te',
  ta: 'ta',
  ml: 'ml',
  or: 'or'
};
