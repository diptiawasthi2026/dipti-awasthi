import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface PricingSectionProps {
  t: TranslationDict;
  onSelectPlan: (planTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ t, onSelectPlan }) => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>Consultation Formats</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.pricing.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed mb-2">
            {t.pricing.subtitle}
          </p>
          <p className="text-xs text-[#5D6B78] italic">
            {t.pricing.note}
          </p>
        </div>

        {/* Pricing Cards with Editable Placeholders (as instructed: no invented prices) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pricing.plans.map((plan, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FCFE] border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-xl font-bold text-[#004E9B] mb-2">
                  {plan.title}
                </h3>
                
                {/* Price Placeholder */}
                <div className="my-4 py-2 px-3 rounded-lg bg-white border border-dashed border-[#0091B9]/50 text-center">
                  <span className="font-heading text-xl font-bold text-[#0091B9]">
                    {plan.price}
                  </span>
                </div>

                <p className="text-xs text-[#5D6B78] mb-6 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#172033]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0091B9] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.title)}
                className="w-full py-2.5 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{t.pricing.sendEnquiry}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
