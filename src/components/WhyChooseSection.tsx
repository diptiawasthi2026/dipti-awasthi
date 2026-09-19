import React from 'react';
import { UserCheck, Heart, Sparkles, Lock, Video, Compass } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface WhyChooseSectionProps {
  t: TranslationDict;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ t }) => {
  const icons = [
    <UserCheck className="w-6 h-6 text-[#0091B9]" />,
    <Heart className="w-6 h-6 text-[#FF6500]" />,
    <Sparkles className="w-6 h-6 text-[#0091B9]" />,
    <Lock className="w-6 h-6 text-[#004E9B]" />,
    <Video className="w-6 h-6 text-[#0091B9]" />,
    <Compass className="w-6 h-6 text-[#FFD500]" />
  ];

  return (
    <section className="py-20 bg-[#F8FCFE] relative border-t border-[#BAE4F0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.byAuthor}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.whyChoose.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.whyChoose.subtitle}
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyChoose.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#BAE4F0]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {icons[idx % icons.length]}
              </div>
              <h3 className="font-heading text-xl font-bold text-[#004E9B] mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-[#5D6B78] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
