import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';

const milestones = [
  {
    step: '01',
    title: 'WNF Partnership',
    image: '/progress/wnf-suit.jpg',
    imageAlt: 'Researcher in full cleanroom attire',
    description:
      'Fabrication through the Washington Nanofabrication Facility (WNF) with a full-time R&D team focused entirely on the NML core.',
  },
  {
    step: '02',
    title: 'V1 — 250 nm Prototype',
    image: '/progress/v1-hex.jpg',
    imageAlt: '250 nanometer prototype chip with hexagonal die layout',
    description:
      'Our first prototype demonstrated a 20x power reduction versus comparable CMOS — proof that NML logic works on real silicon.',
  },
  {
    step: '03',
    title: 'V2 — 64 nm Prototype',
    image: '/progress/v2-triangle.jpg',
    imageAlt: 'Scanning electron micrograph of the 64 nanometer NML triangle',
    description:
      'An 8x scale-down delivered a proven 800x power reduction. The architecture is validated at TRL 4 on fabricated hardware.',
  },
];

export default function StatusSection() {
  return (
    <section id="status" className="section-padding magnetic-dots relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">Where We Are Today</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-14">
            What we accomplished in the past year — from partnership to two generations of working prototypes.
          </p>
        </AnimateOnScroll>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <AnimateOnScroll key={milestone.step} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300'] as const)[index]}>
              <div className="gradient-card rounded-lg overflow-hidden hover-card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={milestone.image}
                    alt={milestone.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 border border-emerald-400/40 rounded-md px-3 py-1 font-heading text-sm font-bold text-emerald-400">
                    {milestone.step}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="scale-up" delay="delay-400">
          <div className="max-w-4xl mx-auto mt-12 gradient-card p-8 rounded-lg text-center">
            <p className="text-lg md:text-xl text-gray-300">
              <span className="highlight-text font-semibold">Today:</span> we are fabricating{' '}
              <span className="highlight-text font-semibold">64 nm devices</span> via cost-effective WNF
              photolithography — an <span className="highlight-text font-semibold">8x scale improvement</span> over
              initial expectations.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
