import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Crown, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { ESTATE_INFO } from '../data/clevedonData';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Estate', href: '#estate' },
    { name: 'Experiences', href: '#events' },
    { name: 'Dry-Hire', href: '#dryhire' },
    { name: 'Accommodations', href: '#accommodations' },
    { name: 'Estimator', href: '#calculator' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Sleek Brand Crest & Logo */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-full border border-[#c5a059] flex items-center justify-center bg-[#fcfaf6] group-hover:bg-[#1a1f26] transition-colors duration-300">
            <Crown className="w-4 h-4 text-[#b59238] group-hover:text-[#c5a059] transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#1a1f26] group-hover:text-[#b59238] transition-colors uppercase leading-none">
              Clevedon Hall
            </span>
            <span className="text-[8px] tracking-[0.3em] text-[#b59238] font-sans uppercase font-semibold mt-0.5">
              Est. 1852 • Somerset
            </span>
          </div>
        </a>

        {/* Clean Center Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.18em] text-[#2c323b] hover:text-[#b59238] font-semibold transition-colors relative py-1 whitespace-nowrap group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#b59238] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Minimalist Right Action CTAs */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          <a
            href={`tel:${ESTATE_INFO.phone}`}
            className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#c5a059] flex items-center justify-center text-[#5a6270] hover:text-[#b59238] transition-colors"
            title={`Call Venue: ${ESTATE_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => onOpenInquiry('venue-tour')}
            className="text-[11px] uppercase tracking-wider text-[#1a1f26] hover:text-[#b59238] border border-gray-300 hover:border-[#c5a059] px-4 py-2 rounded-full transition-all font-semibold whitespace-nowrap"
          >
            Book Tour
          </button>

          <button
            onClick={() => onOpenInquiry('general')}
            className="text-[11px] uppercase tracking-wider bg-[#1a1f26] hover:bg-[#b59238] text-white font-bold px-4 py-2 rounded-full shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <Sparkles className="w-3 h-3 text-[#c5a059]" />
            <span>Inquire</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#1a1f26] p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sleek Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-gray-200 p-6 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-[#1a1f26] hover:text-[#b59238] py-2.5 border-b border-gray-100 flex items-center justify-between font-semibold"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#b59238]" />
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href={`tel:${ESTATE_INFO.phone}`}
              className="text-xs text-[#5a6270] flex items-center justify-center gap-2 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#b59238]" />
              <span>Call Us: {ESTATE_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('venue-tour');
              }}
              className="w-full text-xs uppercase tracking-wider text-[#1a1f26] border border-[#c5a059] py-2.5 rounded-full text-center font-semibold"
            >
              Book Private Venue Tour
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('general');
              }}
              className="w-full text-xs uppercase tracking-wider bg-[#1a1f26] text-white font-bold py-2.5 rounded-full text-center shadow-md"
            >
              Inquire For Booking / Dry-Hire
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
