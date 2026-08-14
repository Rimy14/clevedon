import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EstateOverview from './components/EstateOverview';
import EventExperiences from './components/EventExperiences';
import DryHireSpecial from './components/DryHireSpecial';
import Accommodations from './components/Accommodations';
import InquiryCalculator from './components/InquiryCalculator';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import { MessageSquare, Phone, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState({});

  const handleOpenInquiry = (type = 'general', data = {}) => {
    setInquiryData({ eventType: type, ...data });
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1f26] selection:bg-[#c5a059]/20 selection:text-[#1a1f26]">
      
      {/* Clean Navigation Header */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Flow */}
      <main>
        {/* Clean Hero Banner with Daylight Aesthetic */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Mansion History & Corporate Profile */}
        <EstateOverview onOpenInquiry={handleOpenInquiry} />

        {/* Interactive Event Categories */}
        <EventExperiences onOpenInquiry={handleOpenInquiry} />

        {/* Multi-Day Asian Dry-Hire Spotlight */}
        <DryHireSpecial onOpenInquiry={handleOpenInquiry} />

        {/* 25 Boutique Bedrooms & Cottage Explorer */}
        <Accommodations onOpenInquiry={handleOpenInquiry} />

        {/* Interactive Event Builder & Costing Tool */}
        <InquiryCalculator onOpenInquiry={handleOpenInquiry} />

        {/* Verified 4.7 Google Reviews Showcase */}
        <Testimonials />

        {/* North Somerset Location Map & Directions */}
        <LocationSection onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Popup Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialData={inquiryData}
      />

      {/* Floating Quick Action Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenInquiry('floating-quick')}
          className="bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-[#c5a059]/40"
          aria-label="Quick Inquiry"
        >
          <Sparkles className="w-4 h-4 text-[#c5a059]" />
          <span className="hidden sm:inline">Inquire Event</span>
        </button>
      </div>

    </div>
  );
}
