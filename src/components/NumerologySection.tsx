import React, { useState } from 'react';
import { Hash, Calculator, Sparkles, Check, ArrowRight, Sun, Compass } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';
import { calculateVedicNumerology } from '../utils/numerology';
import { NumerologyAnalysis } from '../types';

interface NumerologySectionProps {
  t: TranslationDict;
  onEnquire: () => void;
}

export const NumerologySection: React.FC<NumerologySectionProps> = ({ t, onEnquire }) => {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState<NumerologyAnalysis | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob) return;
    const analysis = calculateVedicNumerology(dob);
    setResult(analysis);
  };

  return (
    <section id="numerology" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Hash className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.services.numerology.title}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.numerologySection.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.numerologySection.desc}
          </p>
        </div>

        {/* 6 Core Numerology Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.numerologySection.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FCFE] border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#BAE4F0] text-[#0091B9] flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                {idx + 1}
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

        {/* Interactive Free Vedic Numerology Calculator */}
        <div className="bg-gradient-to-br from-[#F8FCFE] via-white to-[#BAE4F0]/30 rounded-3xl p-6 sm:p-10 border-2 border-[#BAE4F0] shadow-md max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAE4F0]/60 text-[#004E9B] text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5 text-[#0091B9]" />
              <span>{t.numerologySection.interactiveTitle}</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#004E9B] mb-2">
              {t.numerologySection.interactiveTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#5D6B78]">
              {t.numerologySection.interactiveSubtitle}
            </p>
          </div>

          <form onSubmit={handleCalculate} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl border border-[#BAE4F0] bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0091B9] shadow-xs"
              title="Select your birth date"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0091B9] hover:bg-[#007b9d] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FFD500]" />
              <span>{t.numerologySection.calcButton || "Calculate Numbers"}</span>
            </button>
          </form>

          {/* Analysis Result Card */}
          {result && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0091B9]/30 shadow-lg animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
                <div className="p-4 rounded-xl bg-[#F8FCFE] border border-[#BAE4F0]">
                  <div className="text-xs font-semibold text-[#5D6B78] uppercase">{t.numerologySection.driverLabel || "Mulank (Driver)"}</div>
                  <div className="font-heading text-4xl font-bold text-[#004E9B] my-1">{result.mulank}</div>
                  <div className="text-[11px] text-[#0091B9] font-medium">{t.numerologySection.driverDesc || "Core Nature & Personality"}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FCFE] border border-[#BAE4F0]">
                  <div className="text-xs font-semibold text-[#5D6B78] uppercase">{t.numerologySection.destinyLabel || "Bhagyank (Destiny)"}</div>
                  <div className="font-heading text-4xl font-bold text-[#0091B9] my-1">{result.bhagyank}</div>
                  <div className="text-[11px] text-[#0091B9] font-medium">{t.numerologySection.destinyDesc || "Life Path & Purpose"}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FCFE] border border-[#BAE4F0]">
                  <div className="text-xs font-semibold text-[#5D6B78] uppercase">{t.numerologySection.yearLabel || "Personal Year"}</div>
                  <div className="font-heading text-4xl font-bold text-[#FF6500] my-1">{result.personalYear}</div>
                  <div className="text-[11px] text-[#5D6B78] font-medium">{t.numerologySection.yearDesc || "Current Solar Energy Cycle"}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#BAE4F0]/30 border border-[#BAE4F0] mb-6 flex items-start gap-3">
                <Sun className="w-5 h-5 text-[#FF6500] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                  <span className="font-bold text-[#004E9B]">{t.numerologySection.rulingPlanetLabel || "Ruling Planetary Vibration"}: </span>
                  <span>{result.planet}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#004E9B] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0091B9]" />
                  <span>{t.numerologySection.keyStrengthsLabel || "Key Strengths & Resonance"}:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.strengths.map((str, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-white border border-[#BAE4F0] text-[#004E9B] font-medium shadow-2xs">
                      • {str}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-100 text-xs sm:text-sm text-[#5D6B78] italic leading-relaxed mb-6">
                "{result.guidance}"
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={onEnquire}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#e05900] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <span>{t.numerologySection.bookFullChart || "Book Full Personalized Birth Chart Reading"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Section Bottom Note & CTA */}
        <div className="text-center max-w-2xl mx-auto pt-6 border-t border-[#BAE4F0]/40">
          <p className="text-sm font-medium text-[#004E9B] mb-4 italic">
            "{t.numerologySection.note}"
          </p>
          <button
            onClick={onEnquire}
            className="px-8 py-3.5 rounded-xl bg-[#FF6500] hover:bg-[#e05900] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>{t.numerologySection.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
