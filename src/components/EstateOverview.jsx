import React from 'react';
import { Crown, Building2, ShieldCheck, MapPin, Trees, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { ESTATE_INFO } from '../data/clevedonData';

export default function EstateOverview({ onOpenInquiry }) {
  return (
    <section id="estate" className="py-24 bg-white relative overflow-hidden border-t border-[#f0ecf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b59238] font-bold mb-3">
            <Crown className="w-4 h-4 text-[#b59238]" />
            Heritage & Distinction
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1f26] mb-6">
            A Historic 19th-Century Sanctuary of Luxury
          </h2>
          <div className="w-20 h-0.5 bg-[#c5a059] mx-auto mb-6" />
          <p className="font-sans text-[#4a525d] text-base sm:text-lg leading-relaxed font-light">
            Originally constructed in 1852, Clevedon Hall stands as a masterpiece of Victorian mansion architecture. Nestled within private acres of manicured grounds near Bristol, it provides an exquisite backdrop for high-profile weddings, exclusive retreats, and luxury stays.
          </p>
        </div>

        {/* 2-Column Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Authentic Clevedon Hall Visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-[#e8e4dc]">
              <img
                src={ESTATE_INFO.estateOverviewImage}
                alt="Clevedon Hall Victorian Mansion Estate"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block mb-1">
                  Grade II* Listed Estate
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  Victorian Mansion & Private Manicured Grounds
                </h3>
              </div>
            </div>

            {/* Overlapping Floating Feature Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 bg-white p-6 rounded-xl shadow-xl border border-[#e8e4dc] max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#fcfaf6] border border-[#c5a059]/40 flex items-center justify-center text-[#b59238]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1a1f26] text-base">25 Suites & Cottage</h4>
                  <p className="text-xs text-[#5a6270]">Luxury Accommodations</p>
                </div>
              </div>
              <p className="text-xs text-[#5a6270] leading-normal font-light">
                Features 25 boutique en-suite bedrooms in the main mansion alongside a private, self-catered cottage on-site.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Key Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#fcfbf9] p-8 rounded-2xl border border-[#e8e4dc]">
              <span className="text-xs uppercase tracking-widest text-[#b59238] font-bold block mb-2">
                Venue Exclusivity
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1a1f26] mb-4">
                Total Privacy for Your Celebration
              </h3>
              <p className="text-[#4a525d] text-sm leading-relaxed mb-6 font-light">
                When you host your occasion at Clevedon Hall, the estate becomes entirely your private domain. No other guests or overlapping events—just your vision brought to life by our dedicated estate team.
              </p>

              <div className="space-y-3">
                {[
                  "Grade II* listed 19th-century Victorian architecture",
                  "2.5+ acres of private grounds, manicured gardens & lake",
                  "25 luxury en-suite bedrooms & self-catered cottage",
                  "Full multi-day dry-hire flexibility for Asian weddings",
                  "20 minutes from Bristol Airport & Temple Meads Station"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#b59238] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#2c323b] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Overview Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#e8e4dc] shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f0ecf4]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#b59238]" />
                  <h4 className="font-serif text-lg font-bold text-[#1a1f26]">
                    Corporate Profile & Governance
                  </h4>
                </div>
                <span className="bg-[#fcfaf6] text-[#b59238] text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border border-[#c5a059]/40">
                  {ESTATE_INFO.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#5a6270] block mb-0.5">Company Name</span>
                  <span className="font-semibold text-[#1a1f26]">{ESTATE_INFO.fullName}</span>
                </div>
                <div>
                  <span className="text-[#5a6270] block mb-0.5">Companies House Reg</span>
                  <span className="font-semibold text-[#b59238]">No. {ESTATE_INFO.companyNumber}</span>
                </div>
                <div>
                  <span className="text-[#5a6270] block mb-0.5">Incorporation Date</span>
                  <span className="font-semibold text-[#1a1f26]">{ESTATE_INFO.incorporatedDate}</span>
                </div>
                <div>
                  <span className="text-[#5a6270] block mb-0.5">Active Managing Directors</span>
                  <span className="font-semibold text-[#b59238]">{ESTATE_INFO.directors.join(" & ")}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f0ecf4] flex items-center gap-2 text-[11px] text-[#5a6270]">
                <UserCheck className="w-4 h-4 text-[#b59238] shrink-0" />
                <span>Operating under UK hospitality & real estate standards (SIC 55100/68209).</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
