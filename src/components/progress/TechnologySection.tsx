import React from 'react';
import Image from 'next/image';
import {
  FiShield,
  FiTool,
  FiThermometer,
  FiCheckCircle,
  FiZap,
  FiMoon,
  FiCpu,
  FiClock,
  FiBox,
} from 'react-icons/fi';
import AnimateOnScroll from '../AnimateOnScroll';

const pillars = [
  {
    title: 'Non-Volatile & Rad-Hard',
    description:
      'NML retains state without power and resists radiation — purpose-built for aerospace, orbital, and fielded hardware.',
    icon: <FiShield className="text-4xl text-emerald-400 mb-4 hover-icon" />,
  },
  {
    title: 'Seamless Fab Integration',
    description:
      'Designed to drop into existing processor technology, our architecture integrates as an ASIC into industry-standard foundry flows.',
    icon: <FiTool className="text-4xl text-emerald-400 mb-4 hover-icon" />,
  },
  {
    title: '>10x Lower Heat Output',
    description:
      'At least an order of magnitude less heat than traditional silicon — vital for compact, isolated environments where cooling is difficult.',
    icon: <FiThermometer className="text-4xl text-emerald-400 mb-4 hover-icon" />,
  },
  {
    title: 'Architecture Validated',
    description:
      'TRL 4 — the NML logic concept is demonstrated on real, fabricated devices, not just simulation.',
    icon: <FiCheckCircle className="text-4xl text-emerald-400 mb-4 hover-icon" />,
  },
];

const details = [
  {
    title: '800x Lower Power',
    description: 'Proven 800x power reduction using NML versus comparable CMOS bits.',
    icon: <FiZap className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Zero Standby Power',
    description: 'Inherently non-volatile — eliminating standby leakage and enabling in-memory compute.',
    icon: <FiMoon className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Ultra-Low Heat',
    description: 'Order-of-magnitude lower heat generation for dense, cooling-constrained systems.',
    icon: <FiThermometer className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Radiation Resistance',
    description: 'Inherent radiation resilience — a crucial feature for aerospace and orbital hardware.',
    icon: <FiShield className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Hybrid NML + MTJ Architecture',
    description: 'A novel hybrid design integrating our patented NML triangle with MTJs and active, clocked signal restoration.',
    icon: <FiCpu className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Picosecond Switching',
    description: 'Compatible with SOT, VCMA, and beyond — demonstrating high-speed switching in the picosecond regime.',
    icon: <FiClock className="text-2xl text-emerald-400" />,
  },
  {
    title: 'Drop-In Replacement',
    description: 'Integrates as an ASIC into larger chips used in the field — no redesign of the world required.',
    icon: <FiBox className="text-2xl text-emerald-400" />,
  },
  {
    title: '2–3 Week PoC Builds',
    description: 'Minimal-fab methods deliver proof-of-concept and bespoke chips in weeks, not months.',
    icon: <FiTool className="text-2xl text-emerald-400" />,
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="section-padding wave-pattern relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">The Technology</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
            Our patented <span className="highlight-text">Nanomagnetic Logic (NML) triangle</span> merges memory and logic
            into a single device — non-volatile, radiation-hard, and built for existing fabs.
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
                className="w-full h-56 object-cover"
              />
              <figcaption className="caption-text px-4 py-3 text-left">
                Patented NML triangle — fabricated at 64 nm
              </figcaption>
            </figure>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay="delay-200">
            <figure className="gradient-card rounded-lg overflow-hidden hover-card h-full">
              <Image
                src="/progress/nml-simulation.jpg"
                alt="Micromagnetic simulation of the NML triangle"
                width={690}
                height={390}
                className="w-full h-56 object-cover"
              />
              <figcaption className="caption-text px-4 py-3 text-left">
                NML logic simulation
              </figcaption>
            </figure>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay="delay-300">
            <figure className="gradient-card rounded-lg overflow-hidden hover-card h-full">
              <div
                className="h-56 overflow-hidden"
                style={{ clipPath: 'polygon(11% 0, 100% 0, 100% 100%, 0 100%, 0 13%)' }}
              >
                <Image
                  src="/progress/cleanroom.jpg"
                  alt="Engineers in cleanroom suits at the Washington Nanofabrication Facility"
                  width={420}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <AnimateOnScroll key={detail.title} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300', 'delay-400'] as const)[index % 4]}>
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
