import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

const impactStats = [
  { value: '1 GW', label: 'A hyperscale AI datacenter — 5,000 racks at 200 kW' },
  { value: '1.25 MW', label: 'The same compute on TriMagnetix™ NML' },
  { value: '≈833,000 → 1,040', label: 'Average US homes worth of power' },
];

export default function EnergyImpactSection() {
  return (
    <section id="impact" className="section-padding wave-pattern relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">800x, Visualized</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
            Take a 1 GW AI datacenter like Meta&apos;s campus in Lebanon, Indiana. Run the same workload on{' '}
            <span className="highlight-text">nanomagnetic logic</span> and its 5,000 racks collapse to just 6.25.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" delay="delay-200">
          <figure className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-emerald-400/20 shadow-2xl bg-black">
            <video
              className="w-full aspect-video"
              src="/progress/energy-savings.mp4"
              poster="/progress/energy-savings-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Animation: a grid of 5,000 datacenter racks drawing 1 GW collapses to 6.25 racks drawing 1.25 MW on TriMagnetix — 800 times less energy"
            />
            <figcaption className="caption-text px-6 py-3 text-left bg-gray-900/80">
              Each square is one 200 kW rack. Same datacenter, 800x less energy.
            </figcaption>
          </figure>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactStats.map((stat, index) => (
            <AnimateOnScroll key={stat.value} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300'] as const)[index]}>
              <div className="bg-gray-900/70 border border-emerald-400/15 rounded-lg p-6 h-full text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
