import React, { useState } from 'react';
import { Sparkles, Users, CheckCircle2, ArrowRight, Heart, UtensilsCrossed, Briefcase, PartyPopper } from 'lucide-react';
import { EVENT_TYPES } from '../data/clevedonData';

export default function EventExperiences({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('weddings');

  const activeEvent = EVENT_TYPES.find((e) => e.id === activeTab) || EVENT_TYPES[0];

  const getIcon = (id) => {
    switch (id) {
      case 'weddings': return <Heart className="w-4 h-4" />;
      case 'dryhire': return <UtensilsCrossed className="w-4 h-4" />;
      case 'corporate': return <Briefcase className="w-4 h-4" />;
      case 'private': return <PartyPopper className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="events" className="py-24 bg-[#fcfbf9] text-[#1a1f26] relative border-t border-[#f0ecf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b59238] font-bold mb-3">
            <Sparkles className="w-4 h-4 text-[#b59238]" />
            Bespoke Occasions
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1f26] mb-6">
            Curated Experiences for Extraordinary Moments
          </h2>
          <div className="w-20 h-0.5 bg-[#c5a059] mx-auto mb-6" />
          <p className="font-sans text-[#4a525d] text-base sm:text-lg leading-relaxed font-light">
            Whether exchanging vows in our Orangery, hosting multi-day dry-hire Asian celebrations, or orchestrating high-level corporate retreats, Clevedon Hall delivers tailored perfection.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {EVENT_TYPES.map((event) => {
            const isActive = activeTab === event.id;
            return (
              <button
                key={event.id}
                onClick={() => setActiveTab(event.id)}
                className={`px-5 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#1a1f26] text-white shadow-md scale-105'
                    : 'bg-white text-[#2c323b] hover:text-[#b59238] border border-[#e8e4dc] hover:border-[#c5a059]'
                }`}
              >
                {getIcon(event.id)}
                <span>{event.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Event Spotlight Card */}
        <div className="bg-white rounded-3xl border border-[#e8e4dc] overflow-hidden shadow-lg transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-[500px]">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-6 left-6 bg-white/95 text-[#1a1f26] px-4 py-2 rounded-full border border-[#e8e4dc] backdrop-blur-sm shadow-sm">
                <span className="text-xs uppercase tracking-widest text-[#b59238] font-bold">
                  {activeEvent.capacity}
                </span>
              </div>
            </div>

            {/* Content Details Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#b59238] font-bold mb-2">
                  {activeEvent.tagline}
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1f26] mb-4">
                  {activeEvent.title}
                </h3>
                <p className="text-[#4a525d] text-sm sm:text-base leading-relaxed mb-8 font-light">
                  {activeEvent.description}
                </p>

                {/* Feature Bullet Points */}
                <h4 className="text-xs uppercase tracking-widest text-[#1a1f26] font-bold mb-4">
                  Key Experience Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeEvent.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#b59238] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#2c323b] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA Bar */}
              <div className="pt-6 border-t border-[#f0ecf4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#5a6270] block">Investment Framework</span>
                  <span className="font-serif text-lg font-bold text-[#b59238]">
                    {activeEvent.priceStarting}
                  </span>
                </div>

                <button
                  onClick={() => onOpenInquiry(activeEvent.id)}
                  className="bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
