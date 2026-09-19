import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Mail } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface FaqSectionProps {
  t: TranslationDict;
  onOpenEnquiry: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ t, onOpenEnquiry }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.nav.faq}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.faq.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-14">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0091B9] bg-[#F8FCFE] shadow-sm'
                    : 'border-[#BAE4F0] bg-white hover:border-[#0091B9]/60'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#004E9B]">
                    {item.q}
                  </span>
                  <span className="p-1 rounded-full bg-[#BAE4F0]/40 text-[#004E9B] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#5D6B78] leading-relaxed border-t border-[#BAE4F0]/30 animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="p-6 rounded-2xl bg-[#BAE4F0]/30 border border-[#BAE4F0] text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-[#004E9B]">{t.enquiry.heading}</div>
            <div className="text-xs text-[#5D6B78]">{t.directConnection.desc}</div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-5 py-2.5 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t.about.sendEnquiry}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
