import React from 'react';
import { Compass, Target, Sparkles, TrendingUp, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface LifeCoachingSectionProps {
  t: TranslationDict;
  onEnquire: () => void;
}

export const LifeCoachingSection: React.FC<LifeCoachingSectionProps> = ({ t, onEnquire }) => {
  const icons = [
    <Sparkles className="w-5 h-5 text-[#0091B9]" />,
    <ShieldCheck className="w-5 h-5 text-[#0091B9]" />,
    <Target className="w-5 h-5 text-[#0091B9]" />,
    <TrendingUp className="w-5 h-5 text-[#0091B9]" />,
    <Compass className="w-5 h-5 text-[#0091B9]" />,
    <HeartHandshake className="w-5 h-5 text-[#0091B9]" />
  ];

  return (
    <section id="life-coaching" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>Conscious Personal Transformation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.coachingSection.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.coachingSection.desc}
          </p>
        </div>

        {/* 6 Coaching Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {t.coachingSection.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FCFE] border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-md group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#BAE4F0] flex items-center justify-center mb-4 group-hover:bg-[#0091B9]/10 transition-colors shadow-2xs">
                {icons[idx % icons.length]}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#004E9B] mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5D6B78] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Callout Card */}
        <div className="bg-gradient-to-r from-[#004E9B] via-[#004E9B] to-[#0091B9] text-white rounded-3xl p-8 sm:p-10 shadow-lg mb-12 max-w-4xl mx-auto text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Structured Support for Authentic Growth
          </h3>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed mb-6">
            Life coaching with Dipti Awasthi focuses on honoring your unique path. Rather than giving rigid instructions, we explore your intrinsic motivations, navigate crossroads, and create sustainable alignment.
          </p>
          <button
            onClick={onEnquire}
            className="px-8 py-3.5 rounded-xl bg-[#FF6500] hover:bg-[#e05900] text-white font-semibold text-sm shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>{t.coachingSection.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
