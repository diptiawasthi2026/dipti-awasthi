import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, ChevronDown, Calendar, Instagram, Facebook } from 'lucide-react';
import { LanguageCode } from '../types';
import { LANGUAGES } from '../data/languages';
import { TranslationDict } from '../data/translations/en';

interface NavbarProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  t: TranslationDict;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  t,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#numerology', label: t.nav.numerology },
    { href: '#tarot', label: t.nav.tarot },
    { href: '#life-coaching', label: t.nav.coaching },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faq', label: t.nav.faq },
    { href: '#journal', label: t.nav.blog },
    { href: '#contact', label: t.nav.contact }
  ];

  const currentLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#BAE4F0]/50'
          : 'bg-[#F8FCFE]/90 backdrop-blur-sm py-4 border-b border-[#BAE4F0]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#home" id="brand-logo" className="flex flex-col group">
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#004E9B] group-hover:text-[#0091B9] transition-colors flex items-center gap-1.5">
            DIPTI AWASTHI
            <Sparkles className="w-4 h-4 text-[#FFD500] fill-[#FFD500]" />
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-[#5D6B78] tracking-wider uppercase">
            {t.title}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 text-sm font-medium text-[#172033]">
          {navLinks.slice(0, 7).map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#0091B9] transition-colors py-1 text-[13px] tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#faq"
            className="hover:text-[#0091B9] transition-colors py-1 text-[13px] tracking-wide"
          >
            {t.nav.faq}
          </a>
          <a
            href="#contact"
            className="hover:text-[#0091B9] transition-colors py-1 text-[13px] tracking-wide"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Actions (Socials, Language Selector & CTA) */}
        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Social Icons */}
          <div className="flex items-center gap-1.5 mr-1">
            <a
              href="https://www.instagram.com/astroyantiofficial520/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-1.5 rounded-lg border border-[#BAE4F0] bg-white text-[#FF6500] hover:bg-[#F8FCFE] hover:border-[#0091B9] transition-all shadow-xs"
              title="Instagram @astroyantiofficial520"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61591669497775"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="p-1.5 rounded-lg border border-[#BAE4F0] bg-white text-[#004E9B] hover:bg-[#F8FCFE] hover:border-[#0091B9] transition-all shadow-xs"
              title="Facebook Profile"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              id="lang-selector-btn"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#BAE4F0] bg-white text-xs font-medium text-[#004E9B] hover:bg-[#F8FCFE] hover:border-[#0091B9] transition-all shadow-xs"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#0091B9]" />
              <span className="font-semibold">{currentLangObj.nativeName}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#5D6B78]" />
            </button>

            {langDropdownOpen && (
              <div
                id="lang-dropdown-menu"
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#BAE4F0] py-2 z-50"
              >
                <div className="px-3 py-1 text-[10px] uppercase font-semibold text-[#5D6B78] border-b border-gray-100">
                  Select Language (9 Languages)
                </div>
                <div className="max-h-64 overflow-y-auto py-1">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors ${
                        currentLang === lang.code
                          ? 'bg-[#BAE4F0]/40 text-[#004E9B] font-bold'
                          : 'text-[#172033] hover:bg-[#F8FCFE] hover:text-[#0091B9]'
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      <span className="text-[10px] text-[#5D6B78] font-normal">
                        {lang.englishName}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Primary CTA button */}
          <button
            id="header-book-btn"
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6500] hover:bg-[#e05900] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5" />
            {t.nav.bookConsultation}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Button */}
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#BAE4F0] bg-white text-xs text-[#004E9B] font-medium"
            aria-label="Language Selector"
          >
            <Globe className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{currentLangObj.nativeName}</span>
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#004E9B] hover:bg-[#BAE4F0]/30 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#004E9B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Language Dropdown */}
      {langDropdownOpen && (
        <div className="lg:hidden bg-white border-b border-[#BAE4F0] px-4 py-3 shadow-md">
          <div className="text-xs font-semibold text-[#004E9B] mb-2">Select Language / भाषा चुनें:</div>
          <div className="grid grid-cols-3 gap-2">
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setLangDropdownOpen(false);
                }}
                className={`py-1.5 px-2 text-xs rounded border text-center transition-all ${
                  currentLang === lang.code
                    ? 'bg-[#004E9B] text-white border-[#004E9B] font-semibold'
                    : 'bg-gray-50 text-[#172033] border-gray-200 hover:bg-[#BAE4F0]/30'
                }`}
              >
                {lang.nativeName}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden bg-white border-b border-[#BAE4F0] px-5 py-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#172033] hover:text-[#0091B9] py-1 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-lg bg-[#FF6500] hover:bg-[#e05900] text-white text-sm font-semibold shadow-sm text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                {t.nav.bookConsultation}
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://www.instagram.com/astroyantiofficial520/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg border border-[#BAE4F0] bg-[#F8FCFE] text-[#FF6500] text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61591669497775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg border border-[#BAE4F0] bg-[#F8FCFE] text-[#004E9B] text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
