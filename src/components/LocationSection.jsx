import React from 'react';
import { MapPin, Phone, Mail, Navigation, Car, Plane, Train, Clock, ExternalLink } from 'lucide-react';
import { ESTATE_INFO } from '../data/clevedonData';

export default function LocationSection({ onOpenInquiry }) {
  return (
    <section id="location" className="py-24 bg-white text-[#1a1f26] relative border-t border-[#f0ecf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b59238] font-bold mb-3">
            <MapPin className="w-4 h-4 text-[#b59238]" />
            North Somerset Estate Location
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1f26] mb-6">
            Easily Accessible Near Bristol
          </h2>
          <div className="w-20 h-0.5 bg-[#c5a059] mx-auto mb-6" />
          <p className="font-sans text-[#4a525d] text-base sm:text-lg leading-relaxed font-light">
            Situated on Elton Road in Clevedon, North Somerset. Enjoy serene private grounds with effortless connections to Bristol Airport, London, and the M5 corridor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map Card */}
          <div className="lg:col-span-7 bg-[#fcfbf9] rounded-3xl p-6 sm:p-8 border border-[#e8e4dc] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-[#b59238] font-bold">
                  Interactive Map & Directions
                </span>
                <span className="bg-white text-[#1a1f26] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#e8e4dc]">
                  BS21 7RH • Elton Rd
                </span>
              </div>

              {/* Styled Mock Map Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#e8e4dc] h-72 sm:h-80 mb-6 group">
                <iframe
                  title="Clevedon Hall Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.271167448834!2d-2.8596!3d51.4385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f32a58b292e1%3A0xb35a092892976f92!2sClevedon%20Hall!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  className="w-full h-full border-0 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                <div className="absolute bottom-4 right-4 bg-white/95 text-[#1a1f26] text-xs px-4 py-2 rounded-lg border border-[#e8e4dc] backdrop-blur-md shadow-md flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#b59238]" />
                  <span>Clevedon Hall, Elton Rd</span>
                </div>
              </div>
            </div>

            {/* Travel Time Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-xl border border-[#e8e4dc] flex items-center gap-3">
                <Plane className="w-5 h-5 text-[#b59238] shrink-0" />
                <div>
                  <span className="text-[11px] text-[#5a6270] block">Bristol Airport</span>
                  <span className="text-xs font-bold text-[#1a1f26]">20 Mins Away</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#e8e4dc] flex items-center gap-3">
                <Train className="w-5 h-5 text-[#b59238] shrink-0" />
                <div>
                  <span className="text-[11px] text-[#5a6270] block">Bristol Temple Meads</span>
                  <span className="text-xs font-bold text-[#1a1f26]">25 Mins Away</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#e8e4dc] flex items-center gap-3">
                <Car className="w-5 h-5 text-[#b59238] shrink-0" />
                <div>
                  <span className="text-[11px] text-[#5a6270] block">M5 Motorway (J20)</span>
                  <span className="text-xs font-bold text-[#1a1f26]">5 Mins Drive</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Address & Direct Contact Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#e8e4dc] shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#b59238] font-bold block mb-2">
                Venue Concierge & Inquiries
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#1a1f26] mb-6">
                Get In Touch With Our Estate Directors
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#b59238] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1a1f26] block">Estate Address</span>
                    <span className="text-[#4a525d] font-light">{ESTATE_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#b59238] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1a1f26] block">Telephone Booking Line</span>
                    <a href={`tel:${ESTATE_INFO.phone}`} className="text-[#b59238] hover:underline font-semibold">
                      {ESTATE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#b59238] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1a1f26] block">Email Inquiries</span>
                    <a href={`mailto:${ESTATE_INFO.email}`} className="text-[#b59238] hover:underline font-semibold">
                      {ESTATE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#b59238] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1a1f26] block">Office Hours</span>
                    <span className="text-[#4a525d] font-light">{ESTATE_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-[#f0ecf4] flex flex-col gap-3">
              <button
                onClick={() => onOpenInquiry('general')}
                className="w-full bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-full shadow-md transition-all text-center"
              >
                Schedule Private Site Visit
              </button>

              <a
                href="https://maps.google.com/?q=Clevedon+Hall+Elton+Road+Clevedon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-xs uppercase tracking-wider text-[#1a1f26] border border-[#e8e4dc] py-3 rounded-full text-center font-semibold flex items-center justify-center gap-2 hover:bg-[#fcfbf9] transition-all"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#b59238]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
