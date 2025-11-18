import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionDivider from './SectionDivider';
import AnimateOnScroll from './AnimateOnScroll';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-900/90 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl border border-emerald-400/20">
          <AnimateOnScroll animation="scroll-animate">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white hero-glow">
              The Future of Computing is Magnetic
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="scroll-animate" delay="delay-1">
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary nanomagnetic technology that merges memory and logic into a single, 
              ultra-efficient processor—shattering the performance and power barriers of traditional computing.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="scroll-animate" delay="delay-2">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-emerald-400 rounded-md shadow-lg hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-black transition-all"
              >
                Discover the Technology
              </Link>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900/50 rounded-md border border-gray-700 hover:bg-gray-800 transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
