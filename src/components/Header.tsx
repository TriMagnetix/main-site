'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-dark-green text-white py-4 sticky top-0 z-50 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-xl font-bold hover-pulse">Trimagnetix</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#hero" className="hover-link">Home</Link></li>
            <li><Link href="#about" className="hover-link">About</Link></li>
            <li><Link href="#products" className="hover-link">Products</Link></li>
            <li><Link href="#contact" className="hover-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
