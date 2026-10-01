import React from 'react';
import { FiCheck, FiArrowRight, FiCpu } from 'react-icons/fi';
import AnimateOnScroll from '../AnimateOnScroll';

const phases = [
  {
    period: '6–12 Months',
    items: [
      'Build IP moats — patent portfolio and NML design IP',
      'Scale manufacturing with ecosystem & foundry partners on trusted advanced fabs',
      'Convert LOIs into paid development engagements',
      'Hardware co-design — ASIC / FPGA integration for flight and defense use',
      'Strategic co-development with commercial and defense primes (in progress)',
    ],
  },
  {
    period: '12–18 Months',
    items: [
      'ASIC tape-out — first production-grade nanomagnetic processor',
      'Customer demonstrator deployments in orbit, robotics, and remote IoT',
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding wave-pattern relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">The Next 18 Months</h2>
          </div>
        </AnimateOnScroll>

        {/* Headline goal */}
        <AnimateOnScroll animation="scale-up" delay="delay-200">
          <div className="max-w-4xl mx-auto mb-14 bg-gray-900/90 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl border border-emerald-400/20 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="font-heading text-3xl md:text-4xl font-bold text-emerald-400">$3M</span>
              <FiArrowRight className="text-2xl text-emerald-400" />
              <span className="inline-flex items-center gap-2">
                <FiCpu className="text-2xl md:text-3xl text-emerald-400" />
                <span className="font-heading text-3xl md:text-4xl font-bold text-white">1,000 chips</span>
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              Our next round funds <span className="highlight-text">1,000 fabricated chips in 18 months</span> — the
              bridge from validated prototype to production-grade nanomagnetic processors.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <AnimateOnScroll key={phase.period} animation="slide-up" delay={index === 0 ? 'delay-200' : 'delay-300'}>
              <div className="gradient-card p-8 rounded-lg hover-card h-full">
                <div className="inline-block bg-emerald-400/10 border border-emerald-400/40 rounded-full px-4 py-1.5 mb-6">
                  <span className="font-heading text-sm font-bold text-emerald-400 tracking-wider uppercase">
                    {phase.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <FiCheck className="text-emerald-400 mt-1 shrink-0" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
