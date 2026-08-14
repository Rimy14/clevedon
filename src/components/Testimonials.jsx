import React, { useState } from 'react';
import { Star, Quote, Award, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS, ESTATE_INFO } from '../data/clevedonData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const current = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#fcfbf9] relative overflow-hidden border-t border-[#f0ecf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b59238] font-bold mb-3">
            <Star className="w-4 h-4 fill-[#b59238] text-[#b59238]" />
            Verified Customer Acclaim
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1f26] mb-4">
            Rated 4.7 Stars Across 486 Reviews
          </h2>
          <div className="w-20 h-0.5 bg-[#c5a059] mx-auto mb-6" />
          <p className="font-sans text-[#4a525d] text-base sm:text-lg leading-relaxed font-light">
            Read authentic experiences from couples, dry-hire organizers, and executive guests who have celebrated at Clevedon Hall.
          </p>
        </div>

        {/* Highlight Banner Badge */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-[#e8e4dc] shadow-sm mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#fcfaf6] border border-[#e8e4dc] flex items-center justify-center text-[#b59238]">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#b59238] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b59238]" />
                ))}
                <span className="ml-2 font-bold text-[#1a1f26] text-base">4.7 / 5.0</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a1f26]">
                North Somerset's Top-Rated Luxury Venue
              </h3>
            </div>
          </div>

          <div className="text-xs text-[#5a6270] text-center sm:text-right">
            <span className="font-bold text-[#1a1f26] block">486 Verified Google Reviews</span>
            <span>Accredited 4-Star Luxury Event & Hotel Estate</span>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e4dc] shadow-md relative text-[#1a1f26]">
          <Quote className="w-16 h-16 text-[#b59238]/15 absolute top-6 right-8 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            
            <div className="flex items-center gap-1 text-[#b59238]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#b59238]" />
              ))}
            </div>

            <p className="font-serif text-xl sm:text-2xl italic text-[#2c323b] leading-relaxed font-light">
              "{current.quote}"
            </p>

            <div className="pt-6 border-t border-[#f0ecf4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#1a1f26]">
                  {current.name}
                </h4>
                <span className="text-xs text-[#5a6270] font-light block">
                  {current.event} • {current.date}
                </span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#e8e4dc] hover:border-[#b59238] flex items-center justify-center text-[#1a1f26] hover:bg-[#fcfaf6] transition-colors"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-gray-400 font-semibold px-2">
                  {currentIndex + 1} / {REVIEWS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#e8e4dc] hover:border-[#b59238] flex items-center justify-center text-[#1a1f26] hover:bg-[#fcfaf6] transition-colors"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
