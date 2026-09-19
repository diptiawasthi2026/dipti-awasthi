import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface NewsletterSectionProps {
  t: TranslationDict;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ t }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subs = JSON.parse(localStorage.getItem('dipti_newsletter_subscribers') || '[]');
    subs.push({ name, email, date: new Date().toISOString() });
    localStorage.setItem('dipti_newsletter_subscribers', JSON.stringify(subs));
    setSubscribed(true);
  };

  return (
    <section className="py-16 bg-[#F8FCFE] relative border-t border-[#BAE4F0]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#BAE4F0] shadow-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAE4F0]/40 text-[#004E9B] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>Mindful Newsletter</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#004E9B] mb-2">
            {t.newsletter.heading}
          </h3>

          <p className="text-xs sm:text-sm text-[#5D6B78] max-w-xl mx-auto mb-8 leading-relaxed">
            {t.newsletter.subheading}
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-sm text-[#0091B9] font-medium py-3">
              <CheckCircle2 className="w-5 h-5" />
              <span>{t.newsletter.success}</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.newsletter.namePlaceholder}
                className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl border border-[#BAE4F0] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#0091B9]"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.emailPlaceholder}
                className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl border border-[#BAE4F0] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#0091B9]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0091B9] hover:bg-[#007b9d] text-white font-semibold text-sm transition-all shrink-0"
              >
                {t.newsletter.button}
              </button>
            </form>
          )}

          <div className="text-[11px] text-[#5D6B78]">
            {t.newsletter.privacyNote}
          </div>
        </div>
      </div>
    </section>
  );
};
