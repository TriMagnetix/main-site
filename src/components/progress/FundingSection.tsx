import React from 'react';
import Image from 'next/image';
import { FiArrowRight, FiZap } from 'react-icons/fi';
import AnimateOnScroll from '../AnimateOnScroll';

const backers = [
  { logo: '/partners/snocap.png', name: 'SNOCAP', white: true },
  { logo: '/partners/actuate.png', name: 'Actuate Ventures', white: true },
  { logo: '/progress/pnw-battery.jpg', name: 'PNW Battery Collaborative', white: false },
  { logo: '/partners/BetterwayFilled.png', name: 'BetterWay', white: true },
];

const outcomeGroups = [
  {
    backers: 'SNOCAP + Actuate Ventures',
    items: [
      'V1 250 nm prototype in 6 months — 20x power reduction',
      'V2 64 nm prototype 2 months later — 800x power reduction',
    ],
  },
  {
    backers: 'PNW Battery Collaborative + BetterWay',
    items: [
      '1-week chip fabrication turnaround',
      'Prototype delivery to customers',
      'R&D on majority-gate-based adders',
    ],
  },
];

export default function FundingSection() {
  return (
    <section id="funding" className="section-padding magnetic-dots relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">Funding = Milestones</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
            Backed by defense innovation, venture, and applied research organizations — with every dollar tied to a
            shipped milestone.
          </p>
        </AnimateOnScroll>

        {/* Backers */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {backers.map((backer, index) => (
            <AnimateOnScroll key={backer.name} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300', 'delay-400'] as const)[index]}>
              <div className="gradient-card rounded-lg hover-card h-full flex flex-col items-center justify-center p-6">
                <div className="bg-white rounded-md p-3 flex items-center justify-center h-16 w-full mb-3 shadow">
                  <Image src={backer.logo} alt={`${backer.name} logo`} width={110} height={40} className="max-h-10 max-w-[80%] object-contain" />
                </div>
                <p className="text-gray-400 text-xs text-center">{backer.name}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Outcomes */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {outcomeGroups.map((group, index) => (
            <AnimateOnScroll key={group.backers} animation="slide-up" delay={index === 0 ? 'delay-200' : 'delay-300'}>
              <div className="bg-gray-900/70 border border-emerald-400/15 rounded-lg p-8 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <FiZap className="text-emerald-400" />
                  <h3 className="font-heading text-lg font-semibold text-white">{group.backers}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <FiArrowRight className="text-emerald-400 mt-1 shrink-0" />
                      <span className="text-base">{item}</span>
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
