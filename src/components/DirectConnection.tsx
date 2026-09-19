import React from 'react';
import { Mail, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface DirectConnectionProps {
  t: TranslationDict;
}

export const DirectConnection: React.FC<DirectConnectionProps> = ({ t }) => {
  return (
    <section className="py-16 bg-white relative border-t border-[#BAE4F0]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
          <MessageCircle className="w-3.5 h-3.5 text-[#0091B9]" />
          <span>Direct Connection</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-3">
          {t.directConnection.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#5D6B78] max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.directConnection.desc}
        </p>

        {/* 3 Connection Action Cards: Email, Instagram, Facebook */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* 1. Email Connection Card */}
          <div className="p-6 rounded-2xl bg-[#F8FCFE] border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-md flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#BAE4F0] text-[#0091B9] flex items-center justify-center mb-4 shadow-2xs">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#004E9B] mb-1">
                {t.directConnection.emailLabel}
              </h3>
              <p className="text-xs text-[#5D6B78] mb-3">
                {t.directConnection.emailNote}
              </p>
              <div className="text-xs font-semibold text-[#004E9B] break-all bg-white px-3 py-2 rounded-lg border border-[#BAE4F0]/60 mb-6">
                astroyanti321@gmail.com
              </div>
            </div>

            <a
              href="mailto:astroyanti321@gmail.com?subject=Consultation%20Enquiry%20-%20Dipti%20Awasthi&body=Hello%20Dipti%20ji,%0A%0AI%20would%20like%20to%20enquire%20about%20a%20guidance%20session.%0A%0AName:%0AService%20Needed%20(Numerology%20/%20Tarot%20/%20Life%20Coaching):%0APreferred%20Format%20(Video/Audio/Chat):%0AMy%20Question:"
              className="w-full py-3 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>{t.directConnection.emailButton}</span>
            </a>
          </div>

          {/* 2. Instagram Connection Card */}
          <div className="p-6 rounded-2xl bg-[#F8FCFE] border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-md flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#BAE4F0] text-[#FF6500] flex items-center justify-center mb-4 shadow-2xs">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#004E9B] mb-1">
                {t.directConnection.instagramLabel}
              </h3>
              <p className="text-xs text-[#5D6B78] mb-3">
                {t.directConnection.instagramNote}
              </p>
              <div className="text-xs font-semibold text-[#004E9B] break-all bg-white px-3 py-2 rounded-lg border border-[#BAE4F0]/60 mb-6">
                @astroyantiofficial520
              </div>
            </div>

            <a
              href="https://www.instagram.com/astroyantiofficial520/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#FF6500] hover:bg-[#e05900] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Instagram className="w-4 h-4" />
              <span>Connect on Instagram</span>
            </a>
          </div>

          {/* 3. Facebook Connection Card */}
          <div className="p-6 rounded-2xl bg-[#F8FCFE] border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-md flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#BAE4F0] text-[#004E9B] flex items-center justify-center mb-4 shadow-2xs">
                <Facebook className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#004E9B] mb-1">
                Facebook Official
              </h3>
              <p className="text-xs text-[#5D6B78] mb-3">
                Follow for spiritual updates, Vedic insights & articles
              </p>
              <div className="text-xs font-semibold text-[#004E9B] break-all bg-white px-3 py-2 rounded-lg border border-[#BAE4F0]/60 mb-6">
                Dipti Awasthi Official
              </div>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=61591669497775"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Facebook className="w-4 h-4" />
              <span>Connect on Facebook</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

