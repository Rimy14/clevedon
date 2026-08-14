import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, CheckCircle2, Crown, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { ESTATE_INFO } from '../data/clevedonData';

export default function InquiryModal({ isOpen, onClose, initialData = {} }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: initialData.eventType || 'wedding',
    guestCount: initialData.guestCount || '100-150',
    eventDate: '',
    message: ''
  });

  useEffect(() => {
    if (initialData.eventType) {
      setFormData(prev => ({
        ...prev,
        eventType: initialData.eventType,
        guestCount: initialData.guestCount || prev.guestCount
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white text-[#1a1f26] rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#e8e4dc] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-[#1a1f26] transition-colors p-1"
          aria-label="Close Inquiry Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#b59238] font-bold mb-2">
              <Sparkles className="w-4 h-4 text-[#b59238]" />
              Clevedon Hall Concierge
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1f26] mb-2">
              Request Your Bespoke Proposal
            </h3>
            <p className="text-xs text-[#5a6270] mb-6 font-light">
              Connect with our Personal Events Director to check date availability, request dry-hire dossiers, or arrange a private mansion walkthrough.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Event Type & Guest Count row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1">
                    Event Experience
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs border border-[#e8e4dc] rounded-lg p-3 focus:border-[#b59238] focus:outline-none"
                  >
                    <option value="wedding">Exclusive Luxury Wedding</option>
                    <option value="dryhire">Multi-Day Asian Dry-Hire</option>
                    <option value="corporate">Corporate Retreat / Gala</option>
                    <option value="private">Private Milestone Celebration</option>
                    <option value="venue-tour">Private Site Walkthrough</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1">
                    Estimated Guest Count
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs border border-[#e8e4dc] rounded-lg p-3 focus:border-[#b59238] focus:outline-none"
                  >
                    <option value="up-to-50">Intimate (Up to 50)</option>
                    <option value="50-100">Classic (50 - 100)</option>
                    <option value="100-150">Grand (100 - 150)</option>
                    <option value="150-250+">Large / Multi-Day (150 - 250+)</option>
                  </select>
                </div>
              </div>

              {/* Contact Inputs */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#b59238] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Mr / Mrs..."
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs border border-[#e8e4dc] rounded-lg p-3 pl-10 focus:border-[#b59238] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#b59238] absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs border border-[#e8e4dc] rounded-lg p-3 pl-10 focus:border-[#b59238] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#b59238] absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs border border-[#e8e4dc] rounded-lg p-3 pl-10 focus:border-[#b59238] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1">
                  Target Date / Preferred Season
                </label>
                <input
                  type="text"
                  placeholder="e.g. Summer 2026 or 14th August 2026"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs border border-[#e8e4dc] rounded-lg p-3 focus:border-[#b59238] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1">
                  Special Requirements / Dry-Hire Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Please detail catering preferences, Mandap requirements, bedroom allocations, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs border border-[#e8e4dc] rounded-lg p-3 focus:border-[#b59238] focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                  <span>Transmit Official Inquiry</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#1a1f26] text-[#b59238] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#1a1f26]">
              Inquiry Transmitted Successfully
            </h3>

            <p className="text-sm text-[#4a525d] max-w-md mx-auto font-light leading-relaxed">
              Thank you, <span className="text-[#1a1f26] font-semibold">{formData.fullName}</span>. Our Personal Events Director at Clevedon Hall Limited will review your request and contact you at <span className="text-[#b59238]">{formData.email}</span> within 24 business hours.
            </p>

            <div className="bg-[#fcfbf9] p-4 rounded-xl border border-[#e8e4dc] text-xs text-left max-w-md mx-auto space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-500">Reference:</span>
                <span className="text-[#b59238] font-mono font-bold">CH-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Venue:</span>
                <span className="text-[#1a1f26]">Clevedon Hall (Somerset)</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 bg-[#1a1f26] text-white text-xs uppercase tracking-wider font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#b59238] transition-all"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
