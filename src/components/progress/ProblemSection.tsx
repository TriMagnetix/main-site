import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

const problemStats = [
  {
    value: '9 months',
    title: 'AI chips keep scaling',
    description:
      'AI chip performance doubles every 9 months. Power supply doesn\'t. Compute is now limited by energy, not speed.',
  },
  {
    value: '40%',
    title: 'Lost to standby leakage',
    description:
      'In CMOS embedded systems, standby leakage alone can eat up to 40% of the power budget.',
  },
  {
    value: 'Silicon',
    title: 'Fails where it matters most',
    description:
      'At the edge and in orbit, the limits are resilience, power, and heat. Raw speed comes second.',
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
          <figure className="max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden border border-emerald-400/20 shadow-2xl bg-black">
            <video
              className="w-full aspect-video"
              src="/progress/ai-energy-demand.mp4"
              poster="/progress/ai-energy-demand-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Animation: AI chips double every 9 months, energy doesn't. World data center electricity use grows from 415 TWh in 2024 to a projected 945 TWh in 2030, more than all of Japan uses today. In the US, data centers could use one in every five kilowatt-hours by 2035, up from about 6% today."
            />
            <figcaption className="caption-text px-6 py-3 text-left bg-gray-900/80">
              AI demand is set to more than double data center electricity use by 2030. Sources: IEA, Energy and AI
              (2025); BloombergNEF (2026).
            </figcaption>
          </figure>
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
              TriMagnetix cuts compute energy by over 800x core for mission-critical edge compute and remote sensing, by leveraging
              Nanomagnetic Logic (NML) over traditional electrical CMOS Logic.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
