export type LanguageCode = 'en' | 'hi' | 'mr' | 'pa' | 'bn' | 'te' | 'ta' | 'ml' | 'or';

export interface LanguageOption {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
  script: string;
}

export type ServiceKey = 'numerology' | 'tarot' | 'coaching';

export interface ServiceItem {
  id: ServiceKey;
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  ctaText: string;
  iconName: string;
}

export interface NumerologyAnalysis {
  mulank: number;
  bhagyank: number;
  personalYear: number;
  planet: string;
  strengths: string[];
  guidance: string;
}

export interface TarotCard {
  id: number;
  name: string;
  arcana: 'Major';
  keywords: string[];
  meaning: string;
  reflectionQuestion: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Numerology' | 'Tarot' | 'Life Coaching' | 'Spiritual Growth';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  author: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  service: string;
  sessionType: 'Video Consultation' | 'Audio Consultation' | 'Chat Consultation';
  preferredDate: string;
  guidanceRequirement: string;
}
