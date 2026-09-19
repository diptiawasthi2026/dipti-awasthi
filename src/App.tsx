import React, { useState, useEffect } from 'react';
import { LanguageCode } from './types';
import { getTranslation } from './data/translations';
import { HTML_LANG_MAP } from './data/languages';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { NumerologySection } from './components/NumerologySection';
import { TarotSection } from './components/TarotSection';
import { LifeCoachingSection } from './components/LifeCoachingSection';
import { GuidanceAreas } from './components/GuidanceAreas';
import { WhyChooseSection } from './components/WhyChooseSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { DirectConnection } from './components/DirectConnection';
import { EnquiryForm } from './components/EnquiryForm';
import { NewsletterSection } from './components/NewsletterSection';
import { DisclaimerSection } from './components/DisclaimerSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { NotFoundView } from './components/NotFoundView';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [selectedService, setSelectedService] = useState<string>('Vedic Numerology');
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');
  const [is404, setIs404] = useState(false);

  // Sync HTML lang attribute whenever language changes
  useEffect(() => {
    const htmlLang = HTML_LANG_MAP[currentLang] || 'en';
    document.documentElement.lang = htmlLang;
  }, [currentLang]);

  // Handle hash changes for 404 demonstration or deep linking
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const t = getTranslation(currentLang);

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPrivacyModal = () => {
    setLegalTab('privacy');
    setIsLegalOpen(true);
  };

  const openTermsModal = () => {
    setLegalTab('terms');
    setIsLegalOpen(true);
  };

  if (is404) {
    return (
      <NotFoundView
        t={t}
        onGoHome={() => {
          window.location.hash = '#home';
          setIs404(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFE] text-[#172033]">
      {/* 1. Sticky Header & Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        t={t}
        onOpenBooking={() => scrollToContact()}
      />

      {/* Main Body Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          t={t}
          onOpenBooking={() => scrollToContact()}
        />

        {/* 3. About Dipti Section */}
        <AboutSection
          t={t}
          onOpenEnquiry={() => scrollToContact()}
        />

        {/* 4. Services Section (3 Services Only, Energy Healing Excluded) */}
        <ServicesSection
          t={t}
          onSelectService={(service) => scrollToContact(service)}
        />

        {/* 5. Vedic Numerology Section */}
        <NumerologySection
          t={t}
          onEnquire={() => scrollToContact('Vedic Numerology')}
        />

        {/* 6. Tarot Section */}
        <TarotSection
          t={t}
          onEnquire={() => scrollToContact('Tarot Reading')}
        />

        {/* 7. Life Coaching Section */}
        <LifeCoachingSection
          t={t}
          onEnquire={() => scrollToContact('Life Coaching')}
        />

        {/* 8. Guidance Areas (9 key life dimensions) */}
        <GuidanceAreas t={t} />

        {/* 9. Why Choose Dipti Section */}
        <WhyChooseSection t={t} />

        {/* 10. How It Works (4 sequential steps) */}
        <HowItWorks
          t={t}
          onOpenEnquiry={() => scrollToContact()}
        />

        {/* 11. Pricing Section (Transparent placeholders) */}
        <PricingSection
          t={t}
          onSelectPlan={(plan) => scrollToContact(plan)}
        />

        {/* 12. Testimonials Section (Genuine placeholders) */}
        <TestimonialsSection
          t={t}
          onOpenEnquiry={() => scrollToContact()}
        />

        {/* 13. Blog / Guidance Journal */}
        <BlogSection t={t} />

        {/* 14. FAQ Section */}
        <FaqSection
          t={t}
          onOpenEnquiry={() => scrollToContact()}
        />

        {/* 15. Direct Connection (Email & Instagram) */}
        <DirectConnection t={t} />

        {/* 16. Enquiry & Consultation Form */}
        <EnquiryForm
          t={t}
          preselectedService={selectedService}
        />

        {/* 17. Newsletter / Mindful Updates */}
        <NewsletterSection t={t} />

        {/* 18. Official Disclaimer */}
        <DisclaimerSection t={t} />
      </main>

      {/* 19. Footer */}
      <Footer
        t={t}
        onOpenPrivacy={openPrivacyModal}
        onOpenTerms={openTermsModal}
      />

      {/* Legal Modal (Privacy Policy & Terms) */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialTab={legalTab}
      />
    </div>
  );
}
