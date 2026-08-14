import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, Calendar, Users, ArrowRight, Sparkles, Award } from 'lucide-react';
import { ESTATE_INFO, STATS } from '../data/clevedonData';

export default function Hero({ onOpenInquiry }) {
  const [selectedEventType, setSelectedEventType] = useState('wedding');
  const [guestCount, setGuestCount] = useState('100-150');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenInquiry('quick-check', { eventType: selectedEventType, guestCount });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#11161d]">
      
      {/* Authentic Clevedon Hall Mansion Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('${ESTATE_INFO.heroImage}')` 
        }}
      />
      
      {/* High-Contrast Gradient Overlay for Crisp Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#fcfbf9]" />

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Sleek Trust Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/30 shadow-md mb-8">
          <Award className="w-4 h-4 text-[#e8c468]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-white">
            {ESTATE_INFO.heritage} • North Somerset
          </span>
          <span className="text-white/40">|</span>
          <span className="inline-flex items-center gap-1 text-xs text-[#ebd4a3]">
            <Star className="w-3.5 h-3.5 fill-[#e8c468] text-[#e8c468]" />
            {ESTATE_INFO.rating} ({ESTATE_INFO.reviewCount} Reviews)
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12] text-white max-w-5xl mx-auto mb-6 drop-shadow-xl">
          Where Victorian Grandeur Meets <span className="text-[#e8c468] italic font-normal">Exclusive Luxury</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg text-gray-100 max-w-3xl mx-auto mb-10 leading-relaxed font-normal drop-shadow-lg">
          An active private limited estate operating a Grade II* listed 19th-century Victorian mansion across private acres near Bristol. Featuring full venue exclusivity, 25 boutique en-suite bedrooms, self-catered cottage & multi-day dry-hire flexibility.
        </p>

        {/* Clean Venue Availability Search Bar (White Card) */}
        <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 rounded-2xl border border-[#e8e4dc] shadow-2xl mb-16 text-left text-[#1a1f26]">
          <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
            
            {/* Field 1: Event Type */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#b59238]" />
                Event Experience
              </label>
              <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
                className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs font-semibold border border-[#e2dcd2] rounded-lg p-2.5 focus:border-[#b59238] focus:outline-none"
              >
                <option value="wedding">Exclusive Luxury Wedding</option>
                <option value="dryhire">Dry-Hire & Asian Wedding</option>
                <option value="corporate">Corporate Retreat / Gala</option>
                <option value="private">Private Celebration</option>
              </select>
            </div>

            {/* Field 2: Guest Count */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#b59238]" />
                Expected Guests
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs font-semibold border border-[#e2dcd2] rounded-lg p-2.5 focus:border-[#b59238] focus:outline-none"
              >
                <option value="up-to-50">Intimate (Up to 50)</option>
                <option value="50-100">Classic (50 - 100)</option>
                <option value="100-150">Grand (100 - 150)</option>
                <option value="150-250">Massive / Asian Wedding (150 - 250+)</option>
              </select>
            </div>

            {/* Field 3: Date Preference */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#b59238] font-bold mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#b59238]" />
                Preferred Season
              </label>
              <select className="w-full bg-[#fcfbf9] text-[#1a1f26] text-xs font-semibold border border-[#e2dcd2] rounded-lg p-2.5 focus:border-[#b59238] focus:outline-none">
                <option value="2026-spring">Spring 2026</option>
                <option value="2026-summer">Summer 2026</option>
                <option value="2026-autumn">Autumn / Winter 2026</option>
                <option value="2027">2027 Booking Window</option>
              </select>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </form>
        </div>

        {/* Clean Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-xl border border-[#e8e4dc] text-center shadow-lg hover:scale-105 transition-all text-[#1a1f26]"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#b59238] mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1a1f26] mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#5a6270] font-medium">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
