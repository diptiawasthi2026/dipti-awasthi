import React from 'react';
import { ArrowRight, Sparkles, Send } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface HowItWorksProps {
  t: TranslationDict;
  onOpenEnquiry: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t, onOpenEnquiry }) => {
  return (
    <section className="py-20 bg-[#F8FCFE] relative border-t border-[#BAE4F0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.howItWorks.heading}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.howItWorks.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Sequential Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-md relative flex flex-col justify-between"
            >
              <div>
                <div className="font-heading text-4xl font-bold text-[#BAE4F0] mb-3">
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-bold text-[#004E9B] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D6B78] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[#0091B9]/40">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 rounded-xl bg-[#FF6500] hover:bg-[#e05900] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{t.howItWorks.cta}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
