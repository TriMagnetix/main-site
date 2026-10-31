import React from 'react';
import Image from 'next/image';
import {
  FiShield,
  FiTool,
  FiThermometer,
  FiCheckCircle,
  FiZap,
  FiMoon,
  FiBox,
} from 'react-icons/fi';
import AnimateOnScroll from '../AnimateOnScroll';

const pillars = [
  {
    title: 'Non-Volatile & Rad-Hard',
    description:
      'Keeps its state with the power off and resists radiation. Made for aerospace, orbit, and the field.',
    icon: <FiShield className="text-4xl text-emerald-400 mb-4 hover-icon" />,
  },
  {
    title: 'Fits Existing Fabs',
    description:
      'Integrates as an ASIC in standard foundry flows, alongside the processors you already use.',
    icon: <FiTool className="text-4xl text-emerald-400 mb-4 hover-icon" />,
  },
  {
    title: '>10x Lower Heat Output',
    description:
      'At least 10x less heat than silicon. That matters in tight, isolated spaces where cooling is hard.',
    icon: <FiThermometer className="text-4xl text-emerald-400 mb-4 hover-icon" />,
  },
  {
    title: 'Architecture Validated',
    description:
      'TRL 4-5. NML logic works on real fabricated devices, not just in simulation.',
    icon: <FiCheckCircle className="text-4xl text-emerald-400 mb-4 hover-icon" />,
  },
];

const details = [
  {
    title: '800x Lower Power',
    description: 'Measured 800x power reduction versus comparable CMOS bits.',
    icon: <FiZap className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Zero Standby Power',
    description: 'Non-volatile by design: no standby leakage, and room for in-memory compute.',
    icon: <FiMoon className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Ultra-Low Heat',
    description: 'About 10x less heat, for dense systems where cooling is the bottleneck.',
    icon: <FiThermometer className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Radiation Resistance',
    description: 'Naturally radiation-resistant. A must for aerospace and orbital hardware.',
    icon: <FiShield className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Drop-In Replacement',
    description: 'Integrates as an ASIC inside the larger chips already in the field.',
    icon: <FiBox className="text-2xl text-emerald-400" />,
  },
  {
    title: '2-3 Week PoC Builds',
    description: 'Minimal-fab methods turn around proof-of-concept and custom chips in weeks, not months.',
    icon: <FiTool className="text-2xl text-emerald-400" />,
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="section-padding magnetic-dots relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">The Technology</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
            Our patented <span className="highlight-text">Nanomagnetic Logic (NML) triangle</span> combines memory and logic
            in one device. It&apos;s non-volatile, radiation-hard, and made with existing fab technology.
          </p>
        </AnimateOnScroll>

        {/* Imagery: fabricated device + simulation + cleanroom */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AnimateOnScroll animation="slide-up" delay="delay-100">
            <figure className="gradient-card rounded-lg overflow-hidden hover-card h-full">
              <Image
                src="/progress/nml-sem.jpg"
                alt="Scanning electron micrograph of the fabricated NML triangle"
                width={600}
                height={400}
                className="w-full aspect-[3/2] object-cover"
              />
              <figcaption className="caption-text px-4 py-3 text-left">
                Patented NML triangle, fabricated at 64 nm
              </figcaption>
            </figure>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay="delay-200">
            <figure className="gradient-card rounded-lg overflow-hidden hover-card h-full">
              <Image
                src="/progress/nml-simulation.jpg"
                alt="Micromagnetic simulation of the NML triangle"
                width={585}
                height={390}
                className="w-full aspect-[3/2] object-cover"
              />
              <figcaption className="caption-text px-4 py-3 text-left">
                NML logic simulation
              </figcaption>
            </figure>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay="delay-300">
            <figure className="gradient-card rounded-lg overflow-hidden hover-card h-full">
              <Image
                src="/progress/cleanroom.jpg"
                alt="Engineers in cleanroom suits at the Washington Nanofabrication Facility"
                width={750}
                height={500}
                className="w-full aspect-[3/2] object-cover"
              />
              <figcaption className="caption-text px-4 py-3 text-left">
                Fabrication at the Washington Nanofabrication Facility (WNF)
              </figcaption>
            </figure>
          </AnimateOnScroll>
        </div>

        {/* Four pillars */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <AnimateOnScroll key={pillar.title} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300', 'delay-400'] as const)[index]}>
              <div className="gradient-card p-6 rounded-lg hover-card h-full flex flex-col items-center text-center">
                {pillar.icon}
                <h3 className="text-lg font-heading font-semibold mb-3 text-white tracking-tight">{pillar.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Deep-dive grid */}
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Under the Hood</h3>
          </div>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, index) => (
            <AnimateOnScroll key={detail.title} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300'] as const)[index % 3]}>
              <div className="bg-gray-900/70 border border-emerald-400/10 rounded-lg p-5 hover-card h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-emerald-400/10 border border-emerald-400/30 rounded-md p-2">{detail.icon}</span>
                  <h4 className="font-heading font-semibold text-white text-base">{detail.title}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{detail.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
