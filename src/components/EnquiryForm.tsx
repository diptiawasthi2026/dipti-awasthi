import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Calendar, MessageSquare, User, Video, ExternalLink } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';
import { EnquiryFormData } from '../types';

interface EnquiryFormProps {
  t: TranslationDict;
  preselectedService?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ t, preselectedService }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    service: preselectedService || 'Vedic Numerology',
    sessionType: 'Video Consultation',
    preferredDate: '',
    guidanceRequirement: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save locally and simulate graceful submission with pre-filled mailto backup
    setTimeout(() => {
      const enquiries = JSON.parse(localStorage.getItem('dipti_enquiries') || '[]');
      enquiries.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('dipti_enquiries', JSON.stringify(enquiries));

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const mailtoLink = `mailto:astroyanti321@gmail.com?subject=${encodeURIComponent(
    `Consultation Enquiry: ${formData.service} - ${formData.fullName}`
  )}&body=${encodeURIComponent(
    `Hello Dipti ji,\n\nI have submitted a guidance enquiry with the following details:\n\nFull Name: ${formData.fullName}\nEmail Address: ${formData.email}\nSelected Service: ${formData.service}\nPreferred Session Format: ${formData.sessionType}\nPreferred Date: ${formData.preferredDate || 'Flexible'}\n\nGuidance Requirement / Question:\n${formData.guidanceRequirement}\n\nLooking forward to hearing from you.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F8FCFE] to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <Mail className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>Consultation Inquiries</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-3">
            {t.enquiry.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#5D6B78] leading-relaxed">
            {t.enquiry.subheading}
          </p>
          <div className="mt-3 text-xs font-semibold text-[#004E9B] bg-[#BAE4F0]/40 inline-block px-3 py-1 rounded-full">
            {t.enquiry.emailOnlyNote}
          </div>
        </div>

        {/* Form Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#BAE4F0] shadow-xl relative">
          
          {submitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#BAE4F0]/60 text-[#0091B9] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-10 h-10 text-[#0091B9]" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#004E9B] mb-3">
                {t.enquiry.successTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#5D6B78] max-w-md mx-auto leading-relaxed mb-8">
                {t.enquiry.successMsg}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={mailtoLink}
                  className="px-6 py-3 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.enquiry.openEmailClient}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      service: 'Vedic Numerology',
                      sessionType: 'Video Consultation',
                      preferredDate: '',
                      guidanceRequirement: ''
                    });
                  }}
                  className="px-6 py-3 rounded-xl border border-[#BAE4F0] text-[#004E9B] hover:bg-[#F8FCFE] text-xs sm:text-sm font-semibold transition-all"
                >
                  {t.enquiry.sendAnother}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#004E9B] uppercase tracking-wider mb-2">
                    {t.enquiry.nameLabel} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#5D6B78] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t.enquiry.namePlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#BAE4F0] bg-[#F8FCFE] focus:bg-white text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#0091B9] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#004E9B] uppercase tracking-wider mb-2">
                    {t.enquiry.emailLabel} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#5D6B78] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.enquiry.emailPlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#BAE4F0] bg-[#F8FCFE] focus:bg-white text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#0091B9] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Select Service & Session Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-[#004E9B] uppercase tracking-wider mb-2">
                    {t.enquiry.serviceLabel} *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#BAE4F0] bg-[#F8FCFE] focus:bg-white text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#0091B9] transition-all"
                  >
                    <option value="Vedic Numerology">Vedic Numerology</option>
                    <option value="Tarot Reading">Tarot Reading</option>
                    <option value="Life Coaching">Life Coaching</option>
                    <option value="General Enquiry">General Guidance Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="sessionType" className="block text-xs font-bold text-[#004E9B] uppercase tracking-wider mb-2">
                    {t.enquiry.sessionTypeLabel} *
                  </label>
                  <select
                    id="sessionType"
                    value={formData.sessionType}
                    onChange={(e) => setFormData({ ...formData, sessionType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-[#BAE4F0] bg-[#F8FCFE] focus:bg-white text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#0091B9] transition-all"
                  >
                    <option value="Video Consultation">Video Consultation (Google Meet / Zoom)</option>
                    <option value="Audio Consultation">Audio Consultation</option>
                    <option value="Chat Consultation">Chat Consultation</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-xs font-bold text-[#004E9B] uppercase tracking-wider mb-2">
                  {t.enquiry.dateLabel} (Optional)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#5D6B78] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#BAE4F0] bg-[#F8FCFE] focus:bg-white text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#0091B9] transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Guidance Requirement */}
              <div>
                <label htmlFor="guidanceRequirement" className="block text-xs font-bold text-[#004E9B] uppercase tracking-wider mb-2">
                  {t.enquiry.messageLabel} *
                </label>
                <div className="relative">
                  <textarea
                    id="guidanceRequirement"
                    rows={4}
                    required
                    value={formData.guidanceRequirement}
                    onChange={(e) => setFormData({ ...formData, guidanceRequirement: e.target.value })}
                    placeholder={t.enquiry.messagePlaceholder}
                    className="w-full p-4 rounded-xl border border-[#BAE4F0] bg-[#F8FCFE] focus:bg-white text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#0091B9] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#FF6500] hover:bg-[#e05900] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.enquiry.submitting : t.enquiry.submitButton}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
