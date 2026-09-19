import React from 'react';
import { Hash, Sparkles, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface ServicesSectionProps {
  t: TranslationDict;
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ t, onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-[#F8FCFE] relative border-t border-[#BAE4F0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.nav.services}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.services.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* 3 Main Services Cards Grid (Energy Healing strictly excluded) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1: Vedic Numerology */}
          <div className="bg-white rounded-2xl p-8 border border-[#BAE4F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#BAE4F0]/40 text-[#0091B9] flex items-center justify-center mb-6 group-hover:bg-[#0091B9] group-hover:text-white transition-colors">
                <Hash className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#004E9B] mb-3">
                {t.services.numerology.title}
              </h3>
              <p className="text-sm text-[#5D6B78] leading-relaxed mb-6">
                {t.services.numerology.desc}
              </p>
              
              <div className="space-y-2.5 mb-8 border-t border-gray-100 pt-5">
                {t.services.numerology.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                    <CheckCircle2 className="w-4 h-4 text-[#0091B9] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="#numerology"
                className="w-full py-2.5 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>{t.services.numerology.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onSelectService(t.services.numerology.title)}
                className="w-full py-2 rounded-xl bg-gray-50 hover:bg-[#BAE4F0]/30 text-[#0091B9] text-xs font-semibold transition-colors"
              >
                {t.pricing.sendEnquiry}
              </button>
            </div>
          </div>

          {/* Service 2: Tarot Reading */}
          <div className="bg-white rounded-2xl p-8 border border-[#BAE4F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative">
            <div className="absolute top-4 right-4 bg-[#FFD500]/20 text-[#004E9B] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {t.founderSignature}
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#BAE4F0]/40 text-[#0091B9] flex items-center justify-center mb-6 group-hover:bg-[#0091B9] group-hover:text-white transition-colors">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#004E9B] mb-3">
                {t.services.tarot.title}
              </h3>
              <p className="text-sm text-[#5D6B78] leading-relaxed mb-6">
                {t.services.tarot.desc}
              </p>
              
              <div className="space-y-2.5 mb-8 border-t border-gray-100 pt-5">
                {t.services.tarot.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                    <CheckCircle2 className="w-4 h-4 text-[#0091B9] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="#tarot"
                className="w-full py-2.5 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>{t.services.tarot.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onSelectService(t.services.tarot.title)}
                className="w-full py-2 rounded-xl bg-gray-50 hover:bg-[#BAE4F0]/30 text-[#0091B9] text-xs font-semibold transition-colors"
              >
                {t.pricing.sendEnquiry}
              </button>
            </div>
          </div>

          {/* Service 3: Life Coaching */}
          <div className="bg-white rounded-2xl p-8 border border-[#BAE4F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#BAE4F0]/40 text-[#0091B9] flex items-center justify-center mb-6 group-hover:bg-[#0091B9] group-hover:text-white transition-colors">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#004E9B] mb-3">
                {t.services.coaching.title}
              </h3>
              <p className="text-sm text-[#5D6B78] leading-relaxed mb-6">
                {t.services.coaching.desc}
              </p>
              
              <div className="space-y-2.5 mb-8 border-t border-gray-100 pt-5">
                {t.services.coaching.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                    <CheckCircle2 className="w-4 h-4 text-[#0091B9] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="#life-coaching"
                className="w-full py-2.5 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>{t.services.coaching.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onSelectService(t.services.coaching.title)}
                className="w-full py-2 rounded-xl bg-gray-50 hover:bg-[#BAE4F0]/30 text-[#0091B9] text-xs font-semibold transition-colors"
              >
                {t.pricing.sendEnquiry}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
