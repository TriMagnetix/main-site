'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-dark-green text-white py-4 sticky top-0 z-50 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-xl font-bold hover-pulse">Trimagnetix</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center p-2 rounded hover:bg-dark-green/80 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="#hero" className="hover-link">Home</Link></li>
            <li><Link href="#about" className="hover-link">About</Link></li>
            <li><Link href="#products" className="hover-link">Products</Link></li>
            <li><Link href="#partners" className="hover-link">Partners</Link></li>
            <li><Link href="#contact" className="hover-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60 py-4' : 'max-h-0'}`}>
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col space-y-4">
            <li><Link href="#hero" className="hover-link block" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="#about" className="hover-link block" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="#products" className="hover-link block" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
            <li><Link href="#partners" className="hover-link block" onClick={() => setIsMenuOpen(false)}>Partners</Link></li>
            <li><Link href="#contact" className="hover-link block" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
