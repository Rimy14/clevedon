import React from 'react';
import { Crown, Phone, Mail, MapPin, ShieldCheck, ArrowRight, Star, Heart } from 'lucide-react';
import { ESTATE_INFO } from '../data/clevedonData';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-[#1a1f26] text-white pt-20 pb-12 border-t border-gray-800 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grand Newsletter / VIP Inquiry Banner */}
        <div className="bg-[#242b35] p-8 sm:p-10 rounded-3xl border border-gray-700 shadow-xl mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold block mb-1">
              Private Venue Tours & Brochure Access
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
              Receive the Clevedon Hall Wedding & Event Portfolio
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-light">
              Download our complete digital brochure, dry-hire guidelines, catering menus, and bedroom breakdown.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenInquiry('brochure')}
              className="w-full bg-[#c5a059] hover:bg-[#b59238] text-[#1a1f26] font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Download Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-gray-800 text-xs">
          
          {/* Col 1: Estate Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#c5a059] flex items-center justify-center bg-[#242b35]">
                <Crown className="w-4 h-4 text-[#c5a059]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white uppercase">
                Clevedon Hall
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed font-light">
              Grade II* listed 19th-century Victorian mansion set across private grounds in North Somerset near Bristol. Full venue exclusivity for weddings, dry-hire events & corporate galas.
            </p>

            <div className="flex items-center gap-2 text-[#c5a059]">
              <Star className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
              <span className="font-bold text-white">4.7 Rating (486 Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Venue Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#c5a059] mb-4">
              Venue Experiences
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#events" className="hover:text-[#c5a059] transition-colors">Exclusive Luxury Weddings</a></li>
              <li><a href="#dryhire" className="hover:text-[#c5a059] transition-colors">Dry-Hire & Asian Weddings</a></li>
              <li><a href="#events" className="hover:text-[#c5a059] transition-colors">Corporate Retreats & Meetings</a></li>
              <li><a href="#accommodations" className="hover:text-[#c5a059] transition-colors">25 En-Suite Bedrooms</a></li>
              <li><a href="#accommodations" className="hover:text-[#c5a059] transition-colors">Self-Catered Private Cottage</a></li>
              <li><a href="#calculator" className="hover:text-[#c5a059] transition-colors">Interactive Event Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#c5a059] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Elton Road, Clevedon, North Somerset, BS21 7RH</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`tel:${ESTATE_INFO.phone}`} className="hover:text-[#c5a059]">{ESTATE_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`mailto:${ESTATE_INFO.email}`} className="hover:text-[#c5a059]">{ESTATE_INFO.email}</a>
              </p>
            </div>
          </div>

          {/* Col 4: Corporate Governance */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#c5a059] mb-4">
              Corporate Governance
            </h4>
            <div className="bg-[#242b35] p-4 rounded-xl border border-gray-700 space-y-2 text-[11px] text-gray-300">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Entity:</span>
                <span className="font-semibold text-white">Clevedon Hall Limited</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">UK Reg No:</span>
                <span className="font-semibold text-[#c5a059]">07142929</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Incorporated:</span>
                <span className="text-white">Feb 2, 2010</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-[#c5a059] font-bold">Active</span>
              </div>
              <div className="pt-2 border-t border-gray-700 text-[10px] text-gray-400">
                Managed by J. L. McCarthy & J. A. T. Stathers.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-light gap-4">
          <p>
            © {new Date().getFullYear()} Clevedon Hall Limited (Co. No. 07142929). All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#" className="hover:text-[#c5a059] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Terms of Hire</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Cookies</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
