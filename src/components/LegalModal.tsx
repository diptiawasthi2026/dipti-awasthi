import React, { useState } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
  t?: TranslationDict;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab = 'privacy', t }) => {
  const [tab, setTab] = useState<'privacy' | 'terms'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col border border-[#BAE4F0] shadow-2xl relative overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-[#F8FCFE]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTab('privacy')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                tab === 'privacy'
                  ? 'bg-[#004E9B] text-white shadow-xs'
                  : 'text-[#5D6B78] hover:text-[#004E9B]'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{t?.footer.privacy || 'Privacy Policy'}</span>
            </button>
            <button
              onClick={() => setTab('terms')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                tab === 'terms'
                  ? 'bg-[#004E9B] text-white shadow-xs'
                  : 'text-[#5D6B78] hover:text-[#004E9B]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t?.footer.terms || 'Terms & Conditions'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-[#5D6B78] hover:text-[#172033]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-[#172033] leading-relaxed space-y-4">
          {tab === 'privacy' ? (
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-[#004E9B]">
                Privacy Policy - Dipti Awasthi Guidance
              </h3>
              <p>
                Your privacy and the sanctity of personal information are of utmost priority. This privacy policy explains how consultation inquiries and personal data are respected:
              </p>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">1. Information Collected</h4>
                <p className="text-[#5D6B78]">
                  When you submit an enquiry via this website, we collect only the details you voluntarily provide: Full Name, Email Address, Service Preference, Session Format, and your specific guidance question.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">2. Purpose of Information</h4>
                <p className="text-[#5D6B78]">
                  All personal data is used exclusively to respond to your consultation enquiry, schedule session details, and prepare personalized guidance based on your birth numbers or questions.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">3. Strict Confidentiality</h4>
                <p className="text-[#5D6B78]">
                  We never sell, rent, trade, or distribute your personal details or session notes to third parties. Discussions held during sessions remain strictly confidential.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">4. Contact Regarding Privacy</h4>
                <p className="text-[#5D6B78]">
                  For any questions regarding your personal details or to request deletion of past enquiry records, you may email directly at <span className="font-semibold text-[#004E9B]">astroyanti321@gmail.com</span>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-[#004E9B]">
                Terms & Conditions
              </h3>
              <p>
                By accessing this website and booking a guidance consultation with Dipti Awasthi, you acknowledge and agree to the following conditions:
              </p>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">1. Nature of Services</h4>
                <p className="text-[#5D6B78]">
                  Services offered by Dipti Awasthi (Vedic Numerology, Tarot Reading, and Life Coaching) are intended for spiritual guidance, personal reflection, and personal growth.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">2. No Guaranteed Outcomes</h4>
                <p className="text-[#5D6B78]">
                  Numerology and Tarot readings are interpretive tools. They do not claim or guarantee fixed future outcomes, wealth, marriage, health cures, or specific commercial success.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">3. Non-Substitute for Professional Advice</h4>
                <p className="text-[#5D6B78]">
                  Spiritual guidance and coaching are not substitutes for certified medical, psychological/psychiatric, financial, or legal counsel. Seekers are urged to consult licensed professionals for specialized matters.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">4. Individual Responsibility</h4>
                <p className="text-[#5D6B78]">
                  All decisions, actions, and consequences taken following a consultation remain the sole responsibility of the individual seeker.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#004E9B] mb-1">5. Rescheduling & Cancellations</h4>
                <p className="text-[#5D6B78]">
                  Session rescheduling requests should be communicated at least 24 hours in advance via email to ensure convenient alternate coordination.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 bg-[#F8FCFE] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
