import React from 'react';
import { UtensilsCrossed, Calendar, Home, Sparkles, CheckCircle2, Shield, Heart, ArrowRight } from 'lucide-react';
import { DRY_HIRE_HIGHLIGHTS } from '../data/clevedonData';

export default function DryHireSpecial({ onOpenInquiry }) {
  return (
    <section id="dryhire" className="py-24 bg-white text-[#1a1f26] relative overflow-hidden border-t border-[#f0ecf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b59238] font-bold mb-3 bg-[#fcfaf6] px-4 py-1.5 rounded-full border border-[#e8e4dc]">
            <UtensilsCrossed className="w-4 h-4 text-[#b59238]" />
            Multi-Day & Asian Wedding Excellence
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1f26] mb-6">
            Bespoke Dry-Hire Venue Exclusivity
          </h2>
          <div className="w-20 h-0.5 bg-[#c5a059] mx-auto mb-6" />
          <p className="font-sans text-[#4a525d] text-base sm:text-lg leading-relaxed font-light">
            Clevedon Hall is tailored for multi-day multicultural celebrations. We offer complete freedom for specialist caterers, Mandap designer teams, and custom staging—all set within Victorian mansion grandeur.
          </p>
        </div>

        {/* 4 Feature Spec Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DRY_HIRE_HIGHLIGHTS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#fcfbf9] p-6 rounded-2xl border border-[#e8e4dc] hover:border-[#c5a059] transition-all group hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-[#e8e4dc] flex items-center justify-center text-[#b59238] mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a1f26] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#5a6270] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Feature Showcase Card */}
        <div className="bg-[#fcfbf9] rounded-3xl p-8 sm:p-12 border border-[#e8e4dc] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#b59238] font-semibold">
              Somerset's Premier Asian Wedding Estate
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1f26] leading-tight">
              Freedom to Bring Your Vision & Traditions to Life
            </h3>
            <p className="text-[#4a525d] text-sm sm:text-base leading-relaxed font-light">
              We understand that weddings are multi-layered celebrations. Whether you require a Sangeet party night, Mehndi afternoon tea in the gardens, a Baraat procession down the estate driveway, or a formal Mandap ceremony in the Great Hall, our dry-hire coordinator supports every detail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Full kitchen access for external caterers",
                "Spacious setup for up to 250 banquet guests",
                "Outdoor lawns for Mandap & Baraat",
                "25 En-Suite Bedrooms + Self-Catered Cottage",
                "Multi-day continuous venue access",
                "Complimentary corkage flexibility"
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b59238] shrink-0" />
                  <span className="text-xs text-[#2c323b] font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-[#e8e4dc] shadow-sm">
            <Heart className="w-12 h-12 text-[#b59238] mb-4" />
            <h4 className="font-serif text-2xl font-bold text-[#1a1f26] mb-2">
              Plan Your Multi-Day Celebration
            </h4>
            <p className="text-xs text-[#5a6270] mb-6 font-light">
              Speak with our specialist Dry-Hire Director to discuss catering partners, layout capacities, and multi-day pricing.
            </p>

            <button
              onClick={() => onOpenInquiry('dryhire')}
              className="w-full bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Request Dry-Hire Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
