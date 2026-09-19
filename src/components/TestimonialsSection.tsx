import React from 'react';
import { Quote, Heart, Sparkles, MessageSquare } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface TestimonialsSectionProps {
  t: TranslationDict;
  onOpenEnquiry: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ t, onOpenEnquiry }) => {
  return (
    <section id="testimonials" className="py-20 bg-[#F8FCFE] relative border-t border-[#BAE4F0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Heart className="w-3.5 h-3.5 text-[#FF6500]" />
            <span>{t.testimonials.heading}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.testimonials.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonial Placeholder Cards (Honest & Ready for Client Reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.testimonials.placeholders.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#BAE4F0] shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#BAE4F0] mb-4" />
                <p className="text-sm text-[#5D6B78] italic leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#004E9B]">{item.author}</div>
                  <div className="text-[11px] text-[#5D6B78]">{item.role}</div>
                </div>
                <div className="flex text-[#FFD500]">
                  <Sparkles className="w-4 h-4 fill-[#FFD500]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Feedback Note */}
        <div className="text-center">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0091B9] hover:text-[#004E9B] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.about.sendEnquiry} • {t.byAuthor}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
