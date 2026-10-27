import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';

const backers = [
  // Light-on-transparent marks need a dark backing tile; the rest are
  // dark-on-transparent and sit on white.
  { logo: '/partners/acequia.png', name: 'Acequia Capital', dark: true },
  { logo: '/partners/athenaeum.png', name: 'Athenaeum', dark: true },
  { logo: '/partners/snocap.png', name: 'SNOCAP', dark: true },
  { logo: '/partners/actuate.png', name: 'Actuate Ventures', dark: false },
  { logo: '/partners/BetterwayFilled.png', name: 'BetterWay', dark: false },
  { logo: '/progress/pnw-battery.jpg', name: 'PNW Battery Collaborative', dark: false },
];

export default function FundingSection() {
  return (
    <section id="funding" className="section-padding wave-pattern relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">Funding = Milestones</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
            Backed by venture, angel, and applied research partners — with every dollar tied to a shipped milestone.
          </p>
        </AnimateOnScroll>

        {/* Backers */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {backers.map((backer, index) => (
            <AnimateOnScroll key={backer.name} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300'] as const)[index % 3]}>
              <div className="gradient-card rounded-lg hover-card h-full flex flex-col items-center justify-center p-6">
                <div className={`${backer.dark ? 'bg-gray-800' : 'bg-white'} rounded-md p-3 flex items-center justify-center h-16 w-full mb-3 shadow`}>
                  <Image src={backer.logo} alt={`${backer.name} logo`} width={160} height={48} className="max-h-10 max-w-[80%] object-contain" />
                </div>
                <p className="text-gray-400 text-xs text-center">{backer.name}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
