import React from 'react';
import { Sparkles, ArrowRight, Compass, Eye, ShieldCheck, Sun } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface HeroProps {
  t: TranslationDict;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FCFE] via-[#BAE4F0]/30 to-white"
    >
      {/* Decorative Celestial & Sacred Geometry Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Celestial Orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#BAE4F0]/40 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#0091B9]/10 blur-3xl" />

        {/* Subtle Number Vibrations Motif */}
        <div className="absolute top-20 right-10 text-[#0091B9]/10 font-heading text-8xl font-bold select-none hidden lg:block">
          3 6 9
        </div>
        <div className="absolute bottom-10 left-12 text-[#004E9B]/8 font-heading text-7xl font-bold select-none hidden lg:block">
          1 7 8
        </div>

        {/* Minimal Celestial Star Highlights */}
        <div className="absolute top-36 left-1/4 animate-pulse">
          <Sparkles className="w-5 h-5 text-[#FFD500] opacity-80" />
        </div>
        <div className="absolute top-48 right-1/4 animate-pulse delay-700">
          <Sparkles className="w-4 h-4 text-[#FF6500] opacity-60" />
        </div>
        <div className="absolute bottom-24 right-1/3 animate-pulse delay-1000">
          <Sun className="w-6 h-6 text-[#FFD500]/70" />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Author & Authenticity Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#BAE4F0] text-xs font-semibold text-[#004E9B] shadow-xs mb-6 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#0091B9]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1
          id="hero-heading"
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#004E9B] tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          {t.hero.heading}
        </h1>

        {/* Supporting Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#5D6B78] max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          {t.hero.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            id="hero-primary-cta"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF6500] hover:bg-[#e05900] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-98 flex items-center justify-center gap-2.5"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="hero-secondary-cta"
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white font-semibold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>{t.hero.secondaryCta}</span>
          </a>
        </div>

        {/* Trust & Spiritual Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#BAE4F0]/60 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/70 backdrop-blur-xs border border-[#BAE4F0]/50 shadow-xs">
            <div className="p-2 rounded-lg bg-[#BAE4F0]/40 text-[#0091B9]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#004E9B]">{t.services.numerology.title}</div>
              <div className="text-[11px] text-[#5D6B78]">{t.numerologySection.driverLabel} & {t.numerologySection.destinyLabel}</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/70 backdrop-blur-xs border border-[#BAE4F0]/50 shadow-xs">
            <div className="p-2 rounded-lg bg-[#BAE4F0]/40 text-[#0091B9]">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#004E9B]">{t.services.tarot.title}</div>
              <div className="text-[11px] text-[#5D6B78]">{t.tarotSection.cards[0].title}</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/70 backdrop-blur-xs border border-[#BAE4F0]/50 shadow-xs">
            <div className="p-2 rounded-lg bg-[#BAE4F0]/40 text-[#0091B9]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#004E9B]">{t.services.coaching.title}</div>
              <div className="text-[11px] text-[#5D6B78]">{t.hero.quickStats.approach}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
