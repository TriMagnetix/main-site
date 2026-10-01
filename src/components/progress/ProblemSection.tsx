import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';

const problemStats = [
  {
    value: '9 months',
    title: 'AI chips keep scaling',
    description:
      'AI chip performance is doubling every 9 months — but energy availability is not. Compute is increasingly limited by power, not speed.',
  },
  {
    value: '40%',
    title: 'Lost to standby leakage',
    description:
      'In traditional CMOS embedded systems, standby leakage alone can consume upwards of 40% of the total power budget.',
  },
  {
    value: 'Silicon',
    title: 'Fails where it matters most',
    description:
      'For mission-critical edge compute and remote sensing, computational limits are defined by resilience, power availability, and thermal management — not raw speed.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding magnetic-dots relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-section-header">The Problem</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <div className="max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden border border-emerald-400/20 shadow-2xl">
            <Image
              src="/progress/problem-chip.jpg"
              alt="Close-up of a high-density AI chip"
              width={1860}
              height={280}
              className="w-full h-56 md:h-80 object-cover"
            />
            <p className="caption-text px-6 py-3 text-left bg-gray-900/80">
              AI silicon keeps getting denser — while energy, heat, and resilience constraints stay constant.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemStats.map((stat, index) => (
            <AnimateOnScroll key={stat.title} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300'] as const)[index]}>
              <div className="gradient-card p-8 rounded-lg hover-card h-full flex flex-col">
                <div className="font-heading text-3xl font-bold text-emerald-400 mb-3">{stat.value}</div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">{stat.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{stat.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-in" delay="delay-400">
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="pull-quote inline-block text-left">
              Trimagnetix provides a post-CMOS core for mission-critical edge compute and remote sensing rigs by
              leveraging Nanomagnetic Logic (NML).
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
