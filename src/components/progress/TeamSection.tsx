import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';

const founders = [
  {
    name: 'Madison Hanberry',
    role: 'Co-Founder & CEO',
    focus: 'Technical Development',
    photo: '/progress/team-madison.jpg',
    background: 'AWS · Georgia Tech · UW',
  },
  {
    name: 'Lucas Hahn',
    role: 'Co-Founder & CSO',
    focus: 'Fundraising & Partnerships',
    photo: '/progress/team-lucas.jpg',
    background: 'AWS · Purdue · MTS',
  },
  {
    name: 'Pranav Jain',
    role: 'Co-Founder & COO',
    focus: 'Sales & Operations',
    photo: '/progress/team-pranav.jpg',
    background: 'Microsoft · Penn State',
  },
  {
    name: 'Aspen White',
    role: 'Co-Founder & CBO',
    focus: 'Administration',
    photo: '/progress/team-aspen.jpg',
    background: 'T-Mobile',
  },
];

const advisors = [
  {
    name: 'Alexander Kozhanov',
    focus: 'Leading Spintronics Professor',
    photo: '/progress/advisor-kozhanov.jpg',
    background: 'Duke · Caltech',
  },
  {
    name: 'Clayton Barnard',
    focus: 'VP at Bleeding-Edge Silicon Companies',
    photo: '/progress/advisor-barnard.jpg',
    background: 'Cisco · Proofpoint · Lookout',
  },
  {
    name: 'Hans Fangohr',
    focus: 'Pioneer of Computational Micromagnetics',
    photo: '/progress/advisor-fangohr.jpg',
    background: 'UC Berkeley',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding wave-pattern relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-section-header">Core Innovators</h2>
          </div>
        </AnimateOnScroll>

        {/* Founders */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((member, index) => (
            <AnimateOnScroll key={member.name} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300', 'delay-400'] as const)[index]}>
              <div className="gradient-card rounded-lg p-6 hover-card h-full flex flex-col items-center text-center">
                <Image
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  width={200}
                  height={200}
                  className="rounded-full h-24 w-24 sm:h-32 sm:w-32 shrink-0 object-cover border-2 border-emerald-400/40 mb-4"
                />
                <h3 className="font-heading text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-emerald-400 text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-300 text-xs mb-2">{member.focus}</p>
                <p className="text-gray-400 text-xs">{member.background}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Advisors */}
        <AnimateOnScroll animation="fade-in" delay="delay-300">
          <div className="text-center mt-20 mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Our Advisors</h3>
          </div>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <AnimateOnScroll key={advisor.name} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300'] as const)[index]}>
              <div className="bg-gray-900/70 border border-emerald-400/15 rounded-lg p-6 hover-card h-full flex flex-col items-center text-center">
                <Image
                  src={advisor.photo}
                  alt={`Portrait of ${advisor.name}`}
                  width={100}
                  height={100}
                  className="rounded-full h-24 w-24 object-cover border-2 border-gray-600 mb-4"
                />
                <h4 className="font-heading font-semibold text-white">{advisor.name}</h4>
                <p className="text-emerald-400 text-sm font-medium mt-1 mb-2">{advisor.focus}</p>
                <p className="text-gray-400 text-xs">{advisor.background}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
