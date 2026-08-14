import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, Bed, Users, Calendar, Utensils } from 'lucide-react';

export default function InquiryCalculator({ onOpenInquiry }) {
  const [eventType, setEventType] = useState('wedding');
  const [durationDays, setDurationDays] = useState(1);
  const [guestCount, setGuestCount] = useState(100);
  const [roomsNeeded, setRoomsNeeded] = useState(25);
  const [cateringStyle, setCateringStyle] = useState('inhouse');

  const calculateEstimate = () => {
    let baseRate = 5500;
    if (eventType === 'dryhire') baseRate = 7500;
    if (eventType === 'corporate') baseRate = 4200;
    if (eventType === 'private') baseRate = 3500;

    const daysMultiplier = durationDays;
    const roomCost = roomsNeeded * 120 * durationDays;
    const estimatedTotal = (baseRate * daysMultiplier) + roomCost;

    return {
      baseRate,
      estimatedTotal,
      perGuest: Math.round(estimatedTotal / Math.max(guestCount, 1))
    };
  };

  const est = calculateEstimate();

  const handleApplyEstimate = () => {
    onOpenInquiry('custom-estimate', {
      eventType,
      durationDays,
      guestCount,
      roomsNeeded,
      cateringStyle,
      estimatedTotal: est.estimatedTotal
    });
  };

  return (
    <section id="calculator" className="py-24 bg-white text-[#1a1f26] relative border-t border-[#f0ecf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b59238] font-bold mb-3">
            <Calculator className="w-4 h-4 text-[#b59238]" />
            Interactive Planning Tool
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1f26] mb-6">
            Customize Your Event & Accommodation Quote
          </h2>
          <div className="w-20 h-0.5 bg-[#c5a059] mx-auto mb-6" />
          <p className="font-sans text-[#4a525d] text-base sm:text-lg leading-relaxed font-light">
            Select your preferences below to build a bespoke event framework. Adjust guest counts, dry-hire vs catered dining, multi-day duration, and suite allocations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#fcfbf9] p-6 sm:p-8 rounded-3xl border border-[#e8e4dc] shadow-sm space-y-6">
            
            {/* Step 1: Event Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#b59238] font-bold mb-3">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'wedding', label: 'Luxury Wedding' },
                  { id: 'dryhire', label: 'Asian / Dry-Hire' },
                  { id: 'corporate', label: 'Corporate Retreat' },
                  { id: 'private', label: 'Private Banquet' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setEventType(type.id)}
                    className={`p-3 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all text-left ${
                      eventType === type.id
                        ? 'bg-[#1a1f26] text-white border-[#1a1f26] shadow-sm'
                        : 'bg-white text-[#2c323b] border-[#e8e4dc] hover:border-[#c5a059]'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Duration (Days) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-[#b59238] font-bold">
                  2. Event Duration (Days)
                </label>
                <span className="text-xs font-bold text-[#1a1f26] bg-white px-3 py-1 rounded-full border border-[#e8e4dc]">
                  {durationDays} {durationDays === 1 ? 'Day' : 'Days'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setDurationDays(days)}
                    className={`py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                      durationDays === days
                        ? 'bg-[#b59238] text-white border-[#b59238]'
                        : 'bg-white text-[#2c323b] border-[#e8e4dc] hover:border-[#c5a059]'
                    }`}
                  >
                    {days} {days === 1 ? 'Day' : 'Days'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Expected Guests Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-[#b59238] font-bold">
                  3. Expected Attendees
                </label>
                <span className="text-sm font-bold text-[#b59238]">{guestCount} Guests</span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="10"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#b59238] bg-white rounded-lg h-2 border border-[#e8e4dc]"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>Intimate (20)</span>
                <span>Standard (120)</span>
                <span>Grand / Dry-Hire (250+)</span>
              </div>
            </div>

            {/* Step 4: Bedroom Allocation (Out of 25) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-[#b59238] font-bold">
                  4. Bedroom Allocation (Main Mansion)
                </label>
                <span className="text-xs font-bold text-[#1a1f26] bg-white px-3 py-1 rounded-full border border-[#e8e4dc]">
                  {roomsNeeded} Rooms
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={roomsNeeded}
                onChange={(e) => setRoomsNeeded(Number(e.target.value))}
                className="w-full accent-[#b59238] bg-white rounded-lg h-2 border border-[#e8e4dc]"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Includes options for 25 boutique en-suite bedrooms + Private Cottage.
              </span>
            </div>

            {/* Step 5: Catering Model */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#b59238] font-bold mb-2">
                5. Dining & Catering Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCateringStyle('inhouse')}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                    cateringStyle === 'inhouse'
                      ? 'bg-[#fcfaf6] text-[#b59238] border-[#b59238]'
                      : 'bg-white text-gray-500 border-[#e8e4dc]'
                  }`}
                >
                  <span className="block font-bold text-[#1a1f26] mb-0.5">In-House Executive Chef</span>
                  <span className="text-[11px] font-light text-gray-500">Bespoke fine dining menus</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCateringStyle('dryhire')}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                    cateringStyle === 'dryhire'
                      ? 'bg-[#fcfaf6] text-[#b59238] border-[#b59238]'
                      : 'bg-white text-gray-500 border-[#e8e4dc]'
                  }`}
                >
                  <span className="block font-bold text-[#1a1f26] mb-0.5">External Dry-Hire Catering</span>
                  <span className="text-[11px] font-light text-gray-500">Full kitchen access & freedom</span>
                </button>
              </div>
            </div>

          </div>

          {/* Summary Column */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#e8e4dc] shadow-md space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#f0ecf4]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#b59238] font-bold block">
                  Bespoke Event Estimate
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1a1f26]">
                  Clevedon Hall Summary
                </h3>
              </div>
              <Sparkles className="w-6 h-6 text-[#b59238]" />
            </div>

            <div className="space-y-3 text-xs text-gray-600">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Selected Event:</span>
                <span className="font-bold text-[#1a1f26] capitalize">{eventType} Event</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Duration:</span>
                <span className="font-bold text-[#1a1f26]">{durationDays} Day(s) Exclusive Hire</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Guest Allocation:</span>
                <span className="font-bold text-[#1a1f26]">{guestCount} Guests</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Accommodation:</span>
                <span className="font-bold text-[#1a1f26]">{roomsNeeded} Bedrooms</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Catering Model:</span>
                <span className="font-bold text-[#1a1f26] capitalize">{cateringStyle}</span>
              </div>
            </div>

            <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-[#e8e4dc] text-center">
              <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">
                Estimated Venue Package
              </span>
              <div className="font-serif text-4xl font-bold text-[#b59238] mb-1">
                £{est.estimatedTotal.toLocaleString()}
              </div>
              <span className="text-[11px] text-[#5a6270] block">
                Approx. £{est.perGuest} / guest equivalent
              </span>
            </div>

            <p className="text-[11px] text-gray-500 leading-normal text-center font-light">
              *Estimates are indicative and subject to date seasonality and tailored menus. Click below to submit this breakdown directly to our events team.
            </p>

            <button
              onClick={handleApplyEstimate}
              className="w-full bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Selection to Events Director</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
