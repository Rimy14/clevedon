import React, { useState } from 'react';
import { Bed, Home, Sparkles, Coffee, Eye, CheckCircle2, ChevronRight, Maximize2 } from 'lucide-react';
import { ACCOMMODATIONS } from '../data/clevedonData';

export default function Accommodations({ onOpenInquiry }) {
  const [filter, setFilter] = useState('all');
  const [selectedRoomModal, setSelectedRoomModal] = useState(null);

  const filteredRooms = ACCOMMODATIONS.filter((room) => {
    if (filter === 'all') return true;
    if (filter === 'suites') return room.category.includes('Suite');
    if (filter === 'deluxe') return room.category.includes('Deluxe');
    if (filter === 'cottage') return room.category.includes('Cottage');
    return true;
  });

  return (
    <section id="accommodations" className="py-24 bg-[#fcfbf9] relative overflow-hidden border-t border-[#f0ecf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b59238] font-bold mb-3">
            <Bed className="w-4 h-4 text-[#b59238]" />
            Boutique Overnight Sanctuary
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1f26] mb-6">
            25 Luxury En-Suite Bedrooms & Estate Cottage
          </h2>
          <div className="w-20 h-0.5 bg-[#c5a059] mx-auto mb-6" />
          <p className="font-sans text-[#4a525d] text-base sm:text-lg leading-relaxed font-light">
            Every bedroom within the Victorian mansion has been individually designed, pairing period grandeur with plush contemporary comfort. Plus, an exclusive self-catered cottage on-site for ultimate privacy.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Accommodations (25+1)' },
            { id: 'suites', label: 'Master & Executive Suites' },
            { id: 'deluxe', label: 'Deluxe En-Suites (18 Rooms)' },
            { id: 'cottage', label: 'Self-Catered Cottage' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                filter === item.id
                  ? 'bg-[#1a1f26] text-white shadow-md'
                  : 'bg-white text-[#2c323b] hover:text-[#b59238] border border-[#e8e4dc] hover:border-[#c5a059]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-[#e8e4dc] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Room Image Banner */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-white/90 text-[#b59238] text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-[#e8e4dc]">
                    {room.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-gray-200 block">{room.type}</span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {room.name}
                    </h3>
                  </div>
                </div>

                {/* Room Details Body */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 text-xs text-[#4a525d] mb-4 pb-4 border-b border-gray-100">
                    <span className="flex items-center gap-1.5 font-medium text-[#1a1f26]">
                      <Bed className="w-4 h-4 text-[#b59238]" />
                      {room.bed}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-[#1a1f26]">
                      <Eye className="w-4 h-4 text-[#b59238]" />
                      {room.view}
                    </span>
                  </div>

                  <p className="text-[#4a525d] text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {room.description}
                  </p>

                  {/* Amenities Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-[#fcfbf9] text-[#2c323b] text-[11px] px-2.5 py-1 rounded-md border border-[#e8e4dc] flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#b59238]" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 py-4 bg-[#fcfbf9] border-t border-[#e8e4dc] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1a1f26]">
                  Included in Venue Allocation
                </span>
                <button
                  onClick={() => setSelectedRoomModal(room)}
                  className="text-xs uppercase tracking-wider font-bold text-[#b59238] hover:text-[#1a1f26] flex items-center gap-1 transition-colors"
                >
                  <span>Room Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Room Spec Detail Modal */}
        {selectedRoomModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#e8e4dc] max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedRoomModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold p-2"
              >
                ✕
              </button>

              <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedRoomModal.image}
                  alt={selectedRoomModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs text-[#c5a059] font-bold uppercase tracking-wider">{selectedRoomModal.category}</span>
                  <h3 className="font-serif text-2xl font-bold">{selectedRoomModal.name}</h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-[#4a525d] text-sm leading-relaxed">{selectedRoomModal.description}</p>

                <div className="grid grid-cols-2 gap-4 bg-[#fcfbf9] p-4 rounded-xl text-xs border border-[#e8e4dc]">
                  <div>
                    <span className="text-gray-500 block">Bed Configuration</span>
                    <span className="font-bold text-[#1a1f26]">{selectedRoomModal.bed}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Est. Size</span>
                    <span className="font-bold text-[#1a1f26]">{selectedRoomModal.size}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Vista & View</span>
                    <span className="font-bold text-[#1a1f26]">{selectedRoomModal.view}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">En-Suite Facilities</span>
                    <span className="font-bold text-[#1a1f26]">Private Luxury Bathroom</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-[#1a1f26] mb-2">Included Suite Amenities</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#2c323b]">
                    {selectedRoomModal.amenities.map((a, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b59238]" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedRoomModal(null);
                    onOpenInquiry('accommodation');
                  }}
                  className="flex-1 bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full text-center shadow-md transition-all"
                >
                  Inquire For Room Allocation
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
