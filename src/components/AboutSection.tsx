import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Mail, Heart, Compass, Camera, RefreshCw } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface AboutSectionProps {
  t: TranslationDict;
  onOpenEnquiry: () => void;
}

// Elegant default portrait fallback (high-resolution, authentic, serene Indian woman professional)
const DEFAULT_PORTRAIT_URL = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80";

export const AboutSection: React.FC<AboutSectionProps> = ({ t, onOpenEnquiry }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_PORTRAIT_URL);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedPhoto = localStorage.getItem('dipti_profile_photo');
    if (savedPhoto) {
      setPhotoUrl(savedPhoto);
      setIsCustomPhoto(true);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        setIsCustomPhoto(true);
        localStorage.setItem('dipti_profile_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('dipti_profile_photo');
    setPhotoUrl(DEFAULT_PORTRAIT_URL);
    setIsCustomPhoto(false);
  };

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photograph Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative Teal & Light Blue Outer Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0091B9]/30 via-[#BAE4F0]/40 to-[#FFD500]/20 blur-md" />
              
              {/* Main Photo Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#F8FCFE] border-2 border-[#0091B9]/30 shadow-xl">
                <img
                  src={photoUrl}
                  alt="Dipti Awasthi - Vedic Numerologist, Tarot Reader and Life Coach"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                />

                {/* Floating Authenticity Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#BAE4F0] shadow-md flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#004E9B]">Dipti Awasthi</div>
                    <div className="text-[10px] text-[#5D6B78] font-medium">{t.founderSignature}</div>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#FFD500] fill-[#FFD500]" />
                </div>
              </div>

              {/* Photo Upload/Update Control (Allows client to drop their exact photo easily) */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                  id="client-photo-input"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[11px] text-[#004E9B] hover:text-[#0091B9] flex items-center gap-1 font-medium bg-[#BAE4F0]/30 hover:bg-[#BAE4F0]/60 px-3 py-1.5 rounded-lg transition-colors"
                  title="Upload official photograph of Dipti Awasthi"
                >
                  <Camera className="w-3.5 h-3.5 text-[#0091B9]" />
                  <span>{isCustomPhoto ? "Photo" : "Photo"}</span>
                </button>
                {isCustomPhoto && (
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="text-[11px] text-gray-500 hover:text-red-600 flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    title="Reset to default portrait"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
              <Compass className="w-3.5 h-3.5 text-[#0091B9]" />
              <span>{t.nav.about}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-2">
              {t.about.heading}
            </h2>

            <div className="text-sm sm:text-base font-medium text-[#0091B9] mb-6">
              {t.about.role}
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#5D6B78] leading-relaxed mb-8">
              <p className="font-medium text-[#172033]">
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p>
                {t.about.p3}
              </p>
              <p>
                {t.about.p4}
              </p>
            </div>

            {/* Guiding Principles Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3 rounded-xl bg-[#F8FCFE] border border-[#BAE4F0]/60">
                <Heart className="w-4 h-4 text-[#FF6500] mb-1.5" />
                <div className="text-xs font-bold text-[#004E9B]">{t.about.pillars?.[0] || 'Empathetic'}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FCFE] border border-[#BAE4F0]/60">
                <Sparkles className="w-4 h-4 text-[#0091B9] mb-1.5" />
                <div className="text-xs font-bold text-[#004E9B]">{t.about.pillars?.[1] || 'Intuitive'}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FCFE] border border-[#BAE4F0]/60">
                <Compass className="w-4 h-4 text-[#FFD500] mb-1.5" />
                <div className="text-xs font-bold text-[#004E9B]">{t.about.pillars?.[2] || 'Conscious'}</div>
              </div>
            </div>

            {/* Signature & CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-[#BAE4F0]/40">
              <div className="font-heading text-lg font-semibold text-[#004E9B] italic">
                {t.founderSignature}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="#services"
                  className="px-5 py-2.5 rounded-lg border border-[#004E9B] text-[#004E9B] hover:bg-[#BAE4F0]/20 text-xs sm:text-sm font-semibold transition-colors text-center flex-1 sm:flex-none"
                >
                  {t.about.learnMore}
                </a>

                <button
                  onClick={onOpenEnquiry}
                  className="px-5 py-2.5 rounded-lg bg-[#FF6500] hover:bg-[#e05900] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.about.sendEnquiry}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
