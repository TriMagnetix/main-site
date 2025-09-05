import React from 'react';
import Image from 'next/image';
import SectionDivider from './SectionDivider';
import AnimateOnScroll from './AnimateOnScroll';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white magnetic-dots relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full">
        <SectionDivider type="wave" position="top" fillColor="#A7F3D0" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-16">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-section-header">About Us</h2>
          </div>
        </AnimateOnScroll>
        
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="slide-up" delay="delay-200">
            <p className="mb-6">
              TriMagnetix is at the forefront of nanomagnetic computing technology. Our patented nanomagnetic magnetic architecture enables unprecedented energy efficiency and performance in computing systems.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="scale-up" delay="delay-300">
            <blockquote className="pull-quote my-8">
              Reimagining computing through the power of nanomagnetics.
            </blockquote>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-up" delay="delay-400">
            <p>
              We're dedicated to bringing revolutionary magnetic solutions to market that address the growing demands of edge computing, aerospace applications, and secure systems.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <SectionDivider type="angle" position="bottom" fillColor="#FFFFFF" />
      </div>
    </section>
  );
}
