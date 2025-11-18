import React from 'react';
import Image from 'next/image';
import SectionDivider from './SectionDivider';
import AnimateOnScroll from './AnimateOnScroll';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding magnetic-dots relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-section-header">About Us</h2>
          </div>
        </AnimateOnScroll>
        
        <div className="max-w-3xl mx-auto bg-gray-900/90 backdrop-blur-md p-8 rounded-lg shadow-lg border border-emerald-400/20">
          <AnimateOnScroll animation="slide-up" delay="delay-200">
            <p className="mb-6 text-gray-300">
              TriMagnetix is at the forefront of nanomagnetic computing technology. Our patented nanomagnetic magnetic architecture enables unprecedented energy efficiency and performance in computing systems.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="scale-up" delay="delay-300">
            <blockquote className="pull-quote my-8">
             Our Mission Statement: To pioneer transformative compute that enables the breakthroughs of tomorrow.
            </blockquote>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-up" delay="delay-400">
            <p className="text-gray-300">
              We're dedicated to bringing revolutionary magnetic solutions to market that address the growing demands of edge computing, aerospace applications, and secure systems.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
