'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Nav targets: on the home page these resolve to on-page anchors;
// on any other route (e.g. /progress) they resolve to the home page anchors.
const NAV_ITEMS = [
  { label: 'Home', anchor: '#hero' },
  { label: 'About', anchor: '#about' },
  { label: 'Products', anchor: '#products' },
  { label: 'Partners', anchor: '#partners' },
  { label: 'Contact', anchor: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const toHomeAnchor = (anchor: string) => (isHome ? anchor : `/${anchor}`);
  const isProgress = pathname === '/progress';

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
    <header className={`bg-gray-900/95 backdrop-blur-md border-b border-emerald-400/20 text-white py-4 sticky top-0 z-50 transition-all ${isScrolled ? 'shadow-lg shadow-emerald-400/10' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href={isHome ? '#hero' : '/'} className="flex items-center">
          <Image
            src="/TriMagLogoSideways.png"
            alt="Trimagnetix Logo"
            width={200}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>
        
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
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={toHomeAnchor(item.anchor)} className="hover-link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/progress" className={`hover-link ${isProgress ? 'text-emerald-400' : ''}`}>
                Progress
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 py-4' : 'max-h-0'}`}>
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={toHomeAnchor(item.anchor)} className="hover-link block" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/progress"
                className={`hover-link block ${isProgress ? 'text-emerald-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Progress
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
