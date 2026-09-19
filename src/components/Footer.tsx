import React from 'react';
import { Mail, Instagram, Facebook, Sparkles, Heart } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface FooterProps {
  t: TranslationDict;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-[#004E9B] text-white pt-16 pb-12 border-t-4 border-[#0091B9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                DIPTI AWASTHI
              </span>
              <Sparkles className="w-4 h-4 text-[#FFD500] fill-[#FFD500]" />
            </div>
            
            <div className="text-xs text-[#BAE4F0] font-medium tracking-wide">
              {t.footer.title}
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic">
              "{t.footer.tagline}"
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-semibold text-[#FFD500] border-b border-[#FFD500]/40 pb-0.5">
                {t.founderSignature}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0091B9]" />
              <span>{t.footer.quickLinks}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#about" className="hover:text-[#BAE4F0] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#BAE4F0] transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#numerology" className="hover:text-[#BAE4F0] transition-colors">
                  {t.nav.numerology}
                </a>
              </li>
              <li>
                <a href="#tarot" className="hover:text-[#BAE4F0] transition-colors">
                  {t.nav.tarot}
                </a>
              </li>
              <li>
                <a href="#life-coaching" className="hover:text-[#BAE4F0] transition-colors">
                  {t.nav.coaching}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#BAE4F0] transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#BAE4F0] transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#BAE4F0] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Guidance Services */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6500]" />
              <span>{t.footer.guidanceServices}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>{t.services.numerology.items[0]}</li>
              <li>{t.services.tarot.items[0]}</li>
              <li>{t.services.coaching.items[0]}</li>
              <li>{t.services.numerology.items[4]}</li>
              <li>{t.services.numerology.items[3]}</li>
              <li>{t.services.coaching.items[5]}</li>
            </ul>
          </div>

          {/* Col 4: Direct Connection */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD500]" />
              <span>{t.footer.directConnection}</span>
            </h4>
            <p className="text-xs text-white/70 mb-3">
              {t.footer.enquiryNotice}
            </p>

            <a
              href="mailto:astroyanti321@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#BAE4F0] hover:text-white transition-colors break-all mb-4"
            >
              <Mail className="w-4 h-4 text-[#0091B9] shrink-0" />
              <span>astroyanti321@gmail.com</span>
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/astroyantiofficial520/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#FF6500]" />
                <span>Instagram: @astroyantiofficial520</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61591669497775"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#BAE4F0]" />
                <span>{t.directConnection.facebookButton || 'Connect on Facebook'}</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/70 flex items-center gap-1.5">
              <span className="text-white/50">Official Website:</span>
              <a
                href="https://dipti-awasthi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BAE4F0] hover:text-white font-medium underline underline-offset-2 transition-colors break-all"
              >
                dipti-awasthi.vercel.app
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} Dipti Awasthi. {t.footer.rights}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              {t.footer.privacyLink}
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              {t.footer.termsLink}
            </button>
            <a
              href="#disclaimer"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              {t.footer.disclaimerLink}
            </a>
          </div>

          <div className="text-xs font-medium text-[#BAE4F0]">
            {t.founderSignature}
          </div>
        </div>

      </div>
    </footer>
  );
};
