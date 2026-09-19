import React, { useState } from 'react';
import { Eye, Sparkles, AlertCircle, ArrowRight, RefreshCw, Moon } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';
import { TAROT_CARDS } from '../data/tarotCards';
import { TarotCard } from '../types';

interface TarotSectionProps {
  t: TranslationDict;
  onEnquire: () => void;
}

export const TarotSection: React.FC<TarotSectionProps> = ({ t, onEnquire }) => {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawCard = () => {
    setIsDrawing(true);
    setSelectedCard(null);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
      setSelectedCard(TAROT_CARDS[randomIndex]);
      setIsDrawing(false);
    }, 600);
  };

  return (
    <section id="tarot" className="py-20 bg-[#F8FCFE] relative border-t border-[#BAE4F0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Eye className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.services.tarot.title}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.tarotSection.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.tarotSection.desc}
          </p>
        </div>

        {/* 6 Tarot Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.tarotSection.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#BAE4F0]/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#BAE4F0]/40 text-[#004E9B] flex items-center justify-center font-bold text-sm mb-4">
                  <Moon className="w-5 h-5 text-[#0091B9]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#004E9B] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D6B78] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Mindful Tarot Card Reflection Draw */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#BAE4F0] shadow-md max-w-3xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAE4F0]/40 text-[#004E9B] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.tarotSection.interactiveTitle}</span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-[#004E9B] mb-2">
            {t.tarotSection.interactiveTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#5D6B78] max-w-md mx-auto mb-6">
            {t.tarotSection.interactiveSubtitle}
          </p>

          {!selectedCard && (
            <div className="my-6">
              <button
                onClick={drawCard}
                disabled={isDrawing}
                className="px-6 py-3 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white font-semibold text-sm transition-all shadow-sm inline-flex items-center gap-2"
              >
                {isDrawing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#FFD500]" />
                    <span>{t.tarotSection.drawingText || "Drawing Mindful Card..."}</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 text-[#FFD500]" />
                    <span>{t.tarotSection.drawButton || "Draw a Reflection Card"}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {selectedCard && (
            <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#F8FCFE] border border-[#BAE4F0] text-left animate-fade-in">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#BAE4F0]/60 mb-4">
                <div>
                  <span className="text-[11px] font-bold text-[#0091B9] uppercase tracking-wider">{t.tarotSection.majorArcanaLabel || "Major Arcana Archetype"}</span>
                  <h4 className="font-heading text-2xl font-bold text-[#004E9B]">{selectedCard.name}</h4>
                </div>
                <button
                  onClick={drawCard}
                  className="text-xs text-[#0091B9] hover:text-[#004E9B] font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#BAE4F0] bg-white hover:bg-[#BAE4F0]/20 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{t.tarotSection.drawAnother || "Draw Another"}</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {selectedCard.keywords.map((kw, i) => (
                  <span key={i} className="text-xs px-2.5 py-0.5 rounded-full bg-white border border-[#BAE4F0] text-[#004E9B] font-medium">
                    {kw}
                  </span>
                ))}
              </div>

              <div className="mb-4">
                <div className="text-xs font-bold text-[#004E9B] uppercase mb-1">{t.tarotSection.insightLabel || "Reflective Insight"}:</div>
                <p className="text-sm text-[#172033] leading-relaxed">
                  {selectedCard.meaning}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#BAE4F0]/70 text-xs sm:text-sm text-[#004E9B] font-medium leading-relaxed">
                <span className="font-bold">{t.tarotSection.contemplationLabel || "Contemplation Question"}: </span>
                {selectedCard.reflectionQuestion}
              </div>
            </div>
          )}
        </div>

        {/* Tarot Ethical Disclaimer Notice */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-white border border-[#BAE4F0] shadow-2xs flex items-start gap-3 mb-10 text-left">
          <AlertCircle className="w-5 h-5 text-[#0091B9] shrink-0 mt-0.5" />
          <p className="text-xs text-[#5D6B78] leading-relaxed">
            <span className="font-bold text-[#004E9B]">Tarot Notice: </span>
            {t.tarotSection.disclaimer}
          </p>
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <button
            onClick={onEnquire}
            className="px-8 py-3.5 rounded-xl bg-[#FF6500] hover:bg-[#e05900] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>{t.tarotSection.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
