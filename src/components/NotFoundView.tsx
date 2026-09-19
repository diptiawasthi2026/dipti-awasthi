import React from 'react';
import { Compass, ArrowRight, Home } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface NotFoundViewProps {
  t: TranslationDict;
  onGoHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ t, onGoHome }) => {
  return (
    <div className="min-h-screen bg-[#F8FCFE] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#BAE4F0] shadow-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#BAE4F0]/40 text-[#0091B9] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="text-xs font-bold uppercase tracking-widest text-[#0091B9] mb-2">
          Page 404
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#004E9B] mb-3 leading-tight">
          {t.notFound.heading}
        </h1>

        <p className="text-sm text-[#5D6B78] mb-8 leading-relaxed">
          {t.notFound.text}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>{t.notFound.homeBtn}</span>
          </button>

          <a
            href="#services"
            onClick={onGoHome}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#0091B9] text-[#0091B9] hover:bg-[#BAE4F0]/20 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
          >
            <span>{t.notFound.servicesBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
