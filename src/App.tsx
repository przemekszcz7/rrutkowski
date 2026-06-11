import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Scissors, 
  Star, 
  Menu, 
  X, 
  ExternalLink,
  MessageSquare,
  Facebook
} from "lucide-react";

import { GALLERY_IMAGES, REVIEWS, CONTACT_INFO } from "./data";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler for navbar background transitioning
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const navLinks = [
    { title: "O MNIE", href: "#o-mnie" },
    { title: "GALERIA", href: "#galeria" },
    { title: "OPINIE", href: "#opinie" },
    { title: "KONTAKT", href: "#kontakt" }
  ];

  return (
    <div className="min-h-screen selection:bg-neutral-900 selection:text-white font-sans text-neutral-900 antialiased overflow-x-hidden">
      
      {/* 2. NAVIGATION (fixed, top) */}
      <nav 
        id="navbar" 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-[#0D0D0D] ${
          scrolled 
            ? "bg-[#F9F9F9]/95 backdrop-blur-md py-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]" 
            : "bg-[#F9F9F9]/98 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
          {/* Logo Brand Brand Stack */}
          <a href="#" className="flex flex-col group focus:outline-none">
            <span className="font-sans font-semibold text-[0.68rem] sm:text-[0.78rem] tracking-[0.25em] text-[#0D0D0D]/90 uppercase leading-none transition-colors duration-300 group-hover:text-black">
              WARSZTAT FRYZUR
            </span>
            <span className="font-playfair font-bold text-lg sm:text-xl text-[#0D0D0D] tracking-tight leading-normal mt-0.5">
              ROBERT RUTKOWSKI
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="font-sans font-semibold text-[0.68rem] tracking-[0.2em] text-neutral-600 hover:text-[#0D0D0D] hover:scale-105 active:scale-95 transition-all duration-200 uppercase"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-[#0D0D0D] p-1.5 hover:bg-neutral-200/50 transition-colors focus:outline-none"
            aria-label="Otwórz menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#F9F9F9] z-50 flex flex-col justify-between p-8"
          >
            {/* Header in overlay */}
            <div className="flex justify-between items-center border-b border-neutral-300 pb-5">
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[0.68rem] tracking-[0.22em] text-[#0D0D0D] uppercase">
                  WARSZTAT FRYZUR
                </span>
                <span className="font-playfair font-bold text-md text-[#0D0D0D]">
                  ROBERT RUTKOWSKI
                </span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#0D0D0D] p-2 hover:bg-neutral-200 transition-colors"
                aria-label="Zamknij menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Links centered */}
            <div className="flex flex-col items-center space-y-8 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-playfair font-bold text-3xl text-[#0D0D0D] tracking-wide hover:opacity-75 transition-opacity"
                >
                  {link.title}
                </motion.a>
              ))}
            </div>

            {/* Footer in overlay */}
            <div className="flex flex-col items-center border-t border-neutral-300 pt-6">
              <Scissors className="w-4 h-4 text-[#0D0D0D] mb-3" />
              <p className="font-sans font-semibold text-[0.7rem] tracking-[0.15em] text-[#0D0D0D]">
                SYCÓW · OGRODOWA 6A
              </p>
              <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                className="font-sans text-xs text-neutral-500 mt-1 hover:text-[#0D0D0D] transition-colors"
              >
                tel. {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. HERO SECTION (full viewport height) */}
      <section 
        id="home" 
        className="relative bg-[#0D0D0D] min-h-[100vh] pt-28 md:pt-20 flex flex-col md:flex-row items-stretch"
      >
        {/* Left column (Typographic Composition) */}
        <div className="md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 md:py-16 text-white z-10">
          <div className="max-w-xl">
            {/* Location Label */}
            <span className="block font-sans font-semibold text-[0.7rem] sm:text-[0.75rem] text-[#888888] tracking-[0.25em] uppercase mb-1">
              SYCÓW · UL. OGRODOWA 6A
            </span>

            {/* Divider (White) */}
            <div className="flex justify-start my-4">
              <div className="w-16 h-[1px] bg-white/30"></div>
            </div>

            {/* Title Stacking */}
            <h1 className="flex flex-col leading-[0.9] select-none tracking-tight">
              <span className="font-playfair font-[900] text-white text-[3.8rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.9]">
                WARSZTAT
              </span>
              <span className="font-playfair font-[900] text-white text-[3.8rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.9]" style={{ marginTop: '-0.15em' }}>
                FRYZUR
              </span>
              <span className="font-playfair font-normal italic text-[#CCCCCC] text-[1.5rem] sm:text-[2.2rem] lg:text-[2.5rem] tracking-wide mt-2">
                ROBERT RUTKOWSKI
              </span>
            </h1>

            {/* Subtext and Line */}
            <p className="font-cormorant italic text-[#888888] text-lg sm:text-xl lg:text-2xl mt-6 leading-relaxed">
              Precyzja. Styl. Tradycja.
            </p>

            <div className="w-20 h-[1px] bg-white/40 my-8"></div>

            {/* CTA action cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6">
              {/* Main booking button */}
              <button
                onClick={handleBookingClick}
                className="px-8 py-4 border-2 border-white text-white font-sans font-semibold text-[0.75rem] uppercase tracking-[0.22em] transition-all duration-300 bg-transparent hover:bg-white hover:text-black hover:scale-102 active:scale-98 cursor-pointer text-center"
              >
                UMÓW WIZYTĘ
              </button>

              {/* Secondary direct call contact */}
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-3 group px-4 py-2 hover:opacity-80 transition-all"
              >
                <div className="w-8 h-8 rounded-none border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-neutral-300" />
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="font-sans text-[0.62rem] text-[#888888] tracking-[0.1em] uppercase">TEL. DO GABINETU</span>
                  <span className="font-sans font-medium text-sm text-[#CCCCCC] tracking-wider mt-0.5">{CONTACT_INFO.phoneDisplay}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right column (Strictly Portrait Image Block) */}
        <div className="md:w-1/2 relative min-h-[400px] md:min-h-0 bg-neutral-900 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={CONTACT_INFO.heroImg} 
              alt="Robert Rutkowski Warsztat Fryzur" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 transform scale-100 hover:scale-[1.03] transition-transform duration-700" 
            />
          </div>
          {/* Symmetrical white border highlight on left side of image (Desktop constraint) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[4px] bg-white"></div>
        </div>
      </section>

      {/* 4. DEKORACYJNY PASEK (Decorative barber-pole band) */}
      <div 
        className="w-full h-4 z-20 relative border-y border-neutral-950" 
        style={{
          background: "repeating-linear-gradient(45deg, #0d0d0d, #0d0d0d 8px, #F9F9F9 8px, #F9F9F9 16px)"
        }}
      ></div>

      {/* 5. O MNIE (About) SECTION */}
      <section 
        id="o-mnie" 
        className="py-24 md:py-32 bg-white scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 lg:gap-20 items-center">
            
            {/* Left part: Image Frame with offset */}
            <div className="md:col-span-12 lg:col-span-5 flex justify-center py-4">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4]">
                {/* Visual Offset border frame back layer */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border-2 border-[#0D0D0D] z-0"></div>
                {/* Image item top layer */}
                <div className="absolute inset-0 z-10 bg-[#0D0D0D] border border-[#0D0D0D]">
                  <img 
                    src={CONTACT_INFO.aboutImg} 
                    alt="Master barber Robert przy pracy" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-105"
                  />
                </div>
              </div>
            </div>

            {/* Right part: Description */}
            <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-center">
              <span className="font-sans font-semibold text-[0.7rem] text-[#888888] tracking-[0.25em] uppercase">
                O MNIE
              </span>
              <div className="my-4">
                <div className="w-12 h-[1px] bg-neutral-900"></div>
              </div>

              <h2 className="font-playfair font-[900] text-3xl sm:text-4xl lg:text-5xl text-[#0D0D0D] tracking-tight leading-tight uppercase mb-8">
                RZEMIOSŁO W CZYSTEJ POSTACI
              </h2>

              <div className="font-cormorant text-neutral-700 text-lg sm:text-xl space-y-6 leading-[1.8] max-w-2xl">
                <p>
                  Warsztat Fryzur to miejsce, gdzie każda wizyta to precyzyjne rzemiosło. 
                  Robert Rutkowski od lat doskonali swój warsztat, dbając o każdy szczegół – 
                  od cięcia po wykończenie.
                </p>
                <p>
                  Tutaj tradycja spotyka nowoczesność. Każdy klient wychodzi z fotela z fryzurą 
                  skrojoną dokładnie pod siebie – bez kompromisów, bez pośpiechu, w absolutnym skupieniu.
                </p>
              </div>

              {/* Two Stat tags with border */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-lg">
                <div className="flex items-center gap-4 px-6 py-4 border border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all duration-300">
                  <Scissors className="w-5 h-5 flex-shrink-0" />
                  <span className="font-sans font-semibold text-xs tracking-wider uppercase">Strzyżenie Męskie</span>
                </div>
                <div className="flex items-center gap-4 px-6 py-4 border border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all duration-300">
                  <span className="text-xl leading-none font-bold">🪒</span>
                  <span className="font-sans font-semibold text-xs tracking-wider uppercase">Golenie i Broda</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. GALERIA (Gallery) SECTION */}
      <section 
        id="galeria" 
        className="py-24 md:py-32 bg-[#0D0D0D] text-white scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="font-sans font-semibold text-[0.7rem] text-[#888888] tracking-[0.25em] uppercase">
            REALIZACJE
          </span>
          
          <div className="my-6 flex justify-center items-center">
            <div className="w-12 h-[1px] bg-white/30"></div>
          </div>
          
          <h2 className="font-playfair font-[900] text-3xl sm:text-5xl tracking-tight uppercase mb-16">
            GALERIA
          </h2>

          {/* Masonry-like CSS columns layout for 6 images */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
            {GALLERY_IMAGES.map((img) => (
              <div 
                key={img.id}
                onClick={() => setActiveLightboxImage(img.url)}
                className="break-inside-avoid relative overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer group focus:outline-none"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-102 filter grayscale-[100%] contrast-110 brightness-95 group-hover:contrast-130 group-hover:brightness-105 transition-all duration-500"
                />
                
                {/* Absolute overlay indicator */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="border border-white/60 p-3 flex flex-col items-center">
                    <span className="font-sans font-semibold text-[0.6rem] tracking-[0.2em] uppercase text-white pb-1.5 border-b border-white/40 mb-1.5">
                      WARSZTAT FRYZUR
                    </span>
                    <span className="font-cormorant italic text-xs text-neutral-300">Przeglądaj z bliska</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay rendering */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#000000]/98 flex items-center justify-center p-4 select-none"
            onClick={() => setActiveLightboxImage(null)}
          >
            {/* Close instruction bar */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white/50 border-b border-neutral-900 pb-4">
              <span className="font-sans text-[0.62rem] tracking-widest uppercase">Kliknij gdziekolwiek aby zamknąć</span>
              <button 
                className="text-white hover:text-neutral-400 p-1 bg-neutral-900 transition-colors"
                onClick={() => setActiveLightboxImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Container for Image with white border */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-[92vw] max-h-[82vh] bg-neutral-950 border-2 border-white p-1"
              onClick={(e) => e.stopPropagation()} // Prevents closing of lightbox when clicking the image itself
            >
              <img 
                src={activeLightboxImage} 
                alt="Pełny wymiar realizacji" 
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain filter grayscale"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. CYTAT (Quote callout) SECTION */}
      <section className="py-24 bg-[#F9F9F9] relative overflow-hidden border-y border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-4 text-[#0D0D0D]/60">
            <Scissors className="w-5 h-5 mx-auto" />
          </div>
          
          <div className="relative inline-block py-6">
            {/* Giant quotation marks absolute backdrop */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 font-playfair font-[950] text-[#E8E8E8] text-[10rem] select-none pointer-events-none z-0">
              “
            </span>

            <p className="font-cormorant italic font-normal text-2xl sm:text-3.5xl lg:text-4xl text-[#1A1A1A] leading-relaxed relative z-10 max-w-2xl mx-auto">
              Dobra fryzura to nie tylko wygląd — to pewność siebie.
            </p>
          </div>

          <div className="w-16 h-[1px] bg-[#CCCCCC] mx-auto mt-6 mb-4"></div>
          
          <span className="block font-sans font-semibold text-[0.62rem] sm:text-[0.72rem] tracking-[0.22em] text-[#888888] uppercase">
            — WARSZTAT FRYZUR · SYCÓW
          </span>
        </div>
      </section>

      {/* 8. OPINIE (Reviews) SECTION */}
      <section 
        id="opinie" 
        className="py-24 md:py-32 bg-[#111111] text-white scroll-mt-10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-sans font-semibold text-[0.7rem] text-[#888888] tracking-[0.25em] uppercase">
            OPINIE
          </span>
          
          <div className="my-6 flex justify-center items-center">
            <div className="w-12 h-[1px] bg-white/30"></div>
          </div>

          <h2 className="font-playfair font-[900] text-3xl sm:text-4xl tracking-tight uppercase mb-16">
            CO MÓWIĄ KLIENCI
          </h2>

          <div className="relative max-w-xl mx-auto bg-transparent border border-white/20 p-8 sm:p-12 mb-12">
            {/* Giant quote symbol */}
            <span className="absolute top-2 left-6 font-playfair font-[900] text-[#CCCCCC]/20 text-[6rem] leading-none select-none pointer-events-none">
              “
            </span>

            <ul className="space-y-4">
              {REVIEWS.map((review) => (
                <li key={review.id} className="relative z-10">
                  <p className="font-cormorant italic text-white text-xl sm:text-2xl leading-relaxed mb-6">
                    {review.quote}
                  </p>
                  
                  {/* Rating indicator */}
                  <div className="flex justify-center gap-1.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 text-white fill-current" />
                    ))}
                  </div>

                  <span className="font-sans font-light text-xs tracking-[0.15em] text-[#888888] uppercase">
                    — {review.author}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Facebook reviews external button */}
          <a
            href={CONTACT_INFO.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-white text-white font-sans font-semibold text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:scale-102 active:scale-98"
          >
            <span>OPINIE NA FACEBOOKU</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 9. KONTAKT (Contact) SECTION */}
      <section 
        id="kontakt" 
        className="py-24 md:py-32 bg-white scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left side: details */}
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-[0.7rem] text-[#888888] tracking-[0.25em] uppercase">
                KONTAKT
              </span>
              <div className="my-4">
                <div className="w-12 h-[1px] bg-neutral-950"></div>
              </div>

              <h2 className="font-playfair font-[900] text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight uppercase mb-12">
                ZNAJDŹ NAS
              </h2>

              <ul className="space-y-1 mb-10 max-w-lg">
                <li className="flex items-center justify-between border-b border-[#E8E8E8] py-5 group transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-neutral-300 flex items-center justify-center bg-neutral-50">
                      <MapPin className="w-4 h-4 text-[#0D0D0D]" />
                    </div>
                    <span className="font-sans text-neutral-800 text-[0.95rem] tracking-wide">
                      {CONTACT_INFO.address}
                    </span>
                  </div>
                </li>
                <li className="flex items-center justify-between border-b border-[#E8E8E8] py-5 group transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-neutral-300 flex items-center justify-center bg-neutral-50 group-hover:border-neutral-800 transition-colors">
                      <Phone className="w-4 h-4 text-[#0D0D0D]" />
                    </div>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="font-sans font-semibold text-[#0D0D0D] text-[1.05rem] tracking-widest hover:underline hover:opacity-85 transition-opacity"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                  <span className="font-sans text-[0.62rem] text-[#888888] tracking-widest uppercase">Zadzwoń teraz</span>
                </li>
              </ul>

              {/* Facebook platform button link */}
              <a 
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#0D0D0D] hover:bg-neutral-800 text-white font-sans font-semibold text-[0.72rem] tracking-[0.18em] uppercase transition-colors duration-300 max-w-sm self-stretch sm:self-start text-center"
              >
                <Facebook className="w-4.5 h-4.5 fill-current border-none" />
                <span>ODWIEDŹ NAS NA FACEBOOKU</span>
              </a>
            </div>

            {/* Right side: Google Map Widget frame block */}
            <div className="relative border-2 border-[#0D0D0D] bg-neutral-100 h-[380px] p-0.5 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.2165780746063!2d17.7187107126349!3d51.30713962519508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710064b6b21822b%3A0xfc89e014def7c526!2sOgrodowa%206a%2C%2056-500%20Syc%C3%B3w!5e0!3m2!1spl!2spl!4v1781164295830!5m2!1spl!2spl" 
                width="100%" 
                height="380" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Warsztat Fryzur Robert Rutkowski - Lokalizacja Google Maps"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#0D0D0D] text-white py-16 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          
          <div className="mb-6 text-white/40">
            <Scissors className="w-5 h-5" />
          </div>

          <span className="font-sans font-semibold text-[0.68rem] sm:text-[0.75rem] text-[#CCCCCC] tracking-[0.25em] uppercase">
            WARSZTAT FRYZUR
          </span>
          <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white tracking-wide mt-1.5 mb-10">
            ROBERT RUTKOWSKI
          </h3>

          <div className="w-full max-w-md h-[1px] bg-neutral-800/60 my-6"></div>

          {/* Quick links footer footer */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#o-mnie" className="font-sans text-[0.68rem] tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors">O mnie</a>
            <a href="#galeria" className="font-sans text-[0.68rem] tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors">Galeria</a>
            <a href="#opinie" className="font-sans text-[0.68rem] tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors">Opinie</a>
            <a href="#kontakt" className="font-sans text-[0.68rem] tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors">Kontakt</a>
            <a href={CONTACT_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-[0.68rem] tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors flex items-center gap-1.5">
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="font-sans font-light text-[0.68rem] sm:text-[0.72rem] text-neutral-500 tracking-wide mt-4">
            © 2026 Warsztat Fryzur Robert Rutkowski · Syców · Wszelkie prawa zastrzeżone
          </p>

        </div>
      </footer>

      {/* Interactive Booking Dialogue Modal Popup */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#000000]/90 flex items-center justify-center p-4"
            onClick={closeBookingModal}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md bg-[#F9F9F9] border-2 border-neutral-950 p-8 text-neutral-900 border-radius-0 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close pin */}
              <button 
                onClick={closeBookingModal}
                className="absolute top-4 right-4 text-neutral-500 hover:text-black p-1 transition-colors"
                aria-label="Zamknij formularz"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-4 text-[#0D0D0D]/40">
                <Scissors className="w-4 h-4 mx-auto" />
              </div>

              <h3 className="font-playfair font-bold text-2xl text-center text-black uppercase tracking-tight mb-2">
                REZERWACJA WIZYTY
              </h3>
              <p className="font-cormorant italic text-neutral-500 text-center text-sm mb-6">
                U master barbera Roberta Rutkowskiego
              </p>

              <p className="font-sans text-xs text-neutral-700 leading-relaxed text-center mb-8">
                Aby zapewnić najwyższą jakość obsługi, rezerwacji dokonujemy bezpośrednio telefonicznie lub poprzez naszą oficjalną stronę na Facebooku. Wybierz dogodną dla Ciebie opcję:
              </p>

              <div className="space-y-4">
                {/* Instant call component */}
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-between p-4 border border-black hover:bg-[#0D0D0D] hover:text-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4" />
                    <span className="font-sans font-semibold text-xs tracking-wider uppercase">ZADZWOŃ TERAZ</span>
                  </div>
                  <span className="font-sans font-bold text-sm tracking-widest">{CONTACT_INFO.phoneDisplay}</span>
                </a>

                {/* Facebook Messenger booking block */}
                <a 
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-black hover:bg-[#0D0D0D] hover:text-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Facebook className="w-4 h-4 fill-current" />
                    <span className="font-sans font-semibold text-xs tracking-wider uppercase">WIADOMOŚĆ FB</span>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-300 text-center">
                <span className="font-sans text-[0.58rem] text-neutral-500 tracking-[0.2em] uppercase">
                  SYCÓW · OGRODOWA 6A
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
