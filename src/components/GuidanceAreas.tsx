import React from 'react';
import { Briefcase, Building2, Heart, Sprout, GitFork, Shield, Compass, Hash, Sparkles } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface GuidanceAreasProps {
  t: TranslationDict;
}

export const GuidanceAreas: React.FC<GuidanceAreasProps> = ({ t }) => {
  const icons = [
    <Briefcase key="1" className="w-5 h-5 text-[#0091B9]" />,
    <Building2 key="2" className="w-5 h-5 text-[#0091B9]" />,
    <Heart key="3" className="w-5 h-5 text-[#FF6500]" />,
    <Sprout key="4" className="w-5 h-5 text-[#0091B9]" />,
    <GitFork key="5" className="w-5 h-5 text-[#004E9B]" />,
    <Shield key="6" className="w-5 h-5 text-[#0091B9]" />,
    <Compass key="7" className="w-5 h-5 text-[#0091B9]" />,
    <Hash key="8" className="w-5 h-5 text-[#004E9B]" />,
    <Sparkles key="9" className="w-5 h-5 text-[#FFD500]" />
  ];

  const cards = t.guidanceAreas.cards || [];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.guidanceAreas.heading}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.guidanceAreas.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.guidanceAreas.subtitle}
          </p>
        </div>

        {/* 9 Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((area, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FCFE] border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-md flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-white border border-[#BAE4F0] shrink-0 shadow-2xs">
                {icons[idx % icons.length]}
              </div>
              <div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#004E9B] mb-1">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D6B78] leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
