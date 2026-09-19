import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface DisclaimerSectionProps {
  t: TranslationDict;
}

export const DisclaimerSection: React.FC<DisclaimerSectionProps> = ({ t }) => {
  return (
    <section id="disclaimer" className="py-12 bg-[#F8FCFE] border-t border-[#BAE4F0]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-white border border-[#BAE4F0] flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2.5 rounded-xl bg-[#BAE4F0]/40 text-[#004E9B] shrink-0">
            <ShieldAlert className="w-6 h-6 text-[#0091B9]" />
          </div>
          <div>
            <h4 className="font-heading text-base font-bold text-[#004E9B] mb-1.5 flex items-center gap-2">
              <span>{t.disclaimer.title}</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#5D6B78] leading-relaxed">
              {t.disclaimer.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
