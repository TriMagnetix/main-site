import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';

const heroStats = [
  { value: '800x', label: 'Lower power use vs CMOS' },
  { value: '64 nm', label: 'Devices in fabrication' },
  { value: 'Zero', label: 'Standby power loss' },
  { value: 'TRL 4', label: 'Architecture validated' },
];

export default function ProgressHero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-900/90 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl border border-emerald-400/20">
          <AnimateOnScroll animation="scroll-animate">
            <Image
              src="/trimag-logo-white.png"
              alt="TriMagnetix™ logo"
              width={320}
              height={213}
              className="h-20 sm:h-28 w-auto mx-auto mb-8"
              priority
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="scroll-animate">
            <p className="text-emerald-400 tracking-super-wide uppercase text-xs sm:text-sm font-semibold mb-4">
              Technical &amp; Business Progress
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scroll-animate" delay="delay-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white hero-glow">
              A New Way of Computing
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scroll-animate" delay="delay-2">
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              TriMagnetix™ is developing a new class of <span className="highlight-text">nanomagnetic processors</span>. Our
              custom Nanomagnetic Logic (NML) architecture delivers proven 800x lower power use, zero standby loss, and
              ultra-low heat output — ideal for remote sensing, dense edge computing, and AI / data center workloads.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scroll-animate" delay="delay-3">
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black/40 border border-emerald-400/20 rounded-lg px-4 py-5 hover-card"
                >
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scroll-animate" delay="delay-3">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/solution-brief.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-emerald-400 rounded-md shadow-lg hover:bg-emerald-300 transition-all"
              >
                Read the Solution Brief
              </a>
              <Link
                href="#status"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900/50 rounded-md border border-gray-700 hover:bg-gray-800 transition-all"
              >
                See Where We Are
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
