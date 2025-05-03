import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionDivider from './SectionDivider';
import AnimateOnScroll from './AnimateOnScroll';

export default function HeroSection() {
  return (
    <section id="hero" className="section-padding gradient-hero flex items-center min-h-[80vh] triangle-pattern relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimateOnScroll animation="slide-right" delay="delay-100">
            <div className="bg-white p-6 rounded-xl shadow-md max-w-md relative z-10 hover-card">
              <Image
                src="/TriMagnetixLogoWithName.png"
                alt="TriMagnetix Logo"
                width={350}
                height={105}
                priority
                className="h-auto"
              />
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-left" delay="delay-300">
            <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative z-10">
              <h2 className="text-2xl md:text-3xl font-medium text-dark-green mb-4">
                Innovative magnetic solutions for tomorrow's technology
              </h2>
              <p className="text-soft-black/80 mb-6 max-w-xl">
                Our nanomagnetic triangle technology merges memory and logic into a single, 
                ultra-efficient processor for edge computing, aerospace, and secure systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn btn-primary gradient-accent text-white btn-ripple">
                  Contact Us
                </Link>
                <Link href="#products" className="btn btn-secondary">
                  Our Product
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <SectionDivider type="wave" position="bottom" fillColor="#FFFFFF" />
      </div>
    </section>
  );
}
