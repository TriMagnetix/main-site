import React from 'react';
import Image from 'next/image';
import { FiCheckCircle, FiCpu, FiNavigation, FiServer, FiTruck } from 'react-icons/fi';
import AnimateOnScroll from '../AnimateOnScroll';

const lois = [
  {
    logo: '/partners/starcloud.png',
    name: 'Starcloud',
    description: 'Orbital processors — compute in space, where power and thermal margins are extreme.',
    icon: <FiCpu className="text-emerald-400" />,
    dark: false,
  },
  {
    logo: '/partners/crow.png',
    name: 'Crow Industries',
    description: 'Rugged autonomous ground systems — fielded hardware far from reliable power.',
    icon: <FiTruck className="text-emerald-400" />,
    dark: true,
  },
  {
    logo: '/partners/Pheratech.png',
    name: 'Pheratech',
    description: 'Low-powered autonomous robotics — fielded autonomy with months of battery life.',
    icon: <FiNavigation className="text-emerald-400" />,
    dark: false,
  },
  {
    logo: '/partners/Coda.png',
    name: 'Coda',
    description: 'Dense compute infrastructure — cutting energy and cooling load at the rack.',
    icon: <FiServer className="text-emerald-400" />,
    dark: true,
  },
];

// Investors and partners first, then programs. Every mark is light-on-transparent on a dark
// tile, except NVIDIA's, which ships on its own white plate.
type Org = { name: string; logo: string; dark: boolean; url?: string };

const backers: Org[] = [
  { name: 'Acequia Capital', logo: '/partners/acequia.png', dark: true },
  { name: 'Athenaeum', logo: '/partners/athenaeum.png', dark: true },
  { name: 'SNOCAP', logo: '/partners/snocap.png', dark: true },
  { name: 'Actuate Ventures', logo: '/partners/actuate.svg', dark: true },
  { name: 'BetterWay', logo: '/partners/betterway.png', dark: true },
  { name: 'PNW Battery Collaborative', logo: '/partners/pnw-battery.png', dark: true },
];

const programs: Org[] = [
  { name: 'NVIDIA Inception', logo: '/partners/nvidia-inception.png', url: 'https://www.nvidia.com/en-us/startups/', dark: false },
  { name: 'Creative Destruction Lab', logo: '/partners/cdl.png', url: 'https://creativedestructionlab.com', dark: true },
  { name: 'Plug and Play Semiconductors', logo: '/partners/plugandplay-semi.png', url: 'https://www.plugandplaytechcenter.com/industries/semiconductors', dark: true },
  { name: 'Florida Semiconductor Engine (NSF)', logo: '/partners/florida-semi-engine.png', url: 'https://semiconductorengine.org', dark: true },
];

export default function TractionSection() {
  return (
    <section id="traction" className="section-padding magnetic-dots relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">Commercial Traction</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
            Key market LOIs within 3 months — and a paid pilot 2 months after that.
          </p>
        </AnimateOnScroll>

        {/* Paid pilot callout */}
        <AnimateOnScroll animation="scale-up" delay="delay-200">
          <div className="max-w-4xl mx-auto mb-14 bg-emerald-400/10 border border-emerald-400/40 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 w-48 shrink-0 shadow">
              <Image src="/partners/WaveWorks.png" alt="WaveWorks logo" width={160} height={48} className="max-h-10 object-contain" />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <FiCheckCircle className="text-2xl text-emerald-400" />
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white">Paid Pilot with WaveWorks</h3>
              </div>
              <p className="text-gray-300">
                An ultra-low-power architecture for remotely powered, non-volatile IoT devices — and our{' '}
                <span className="highlight-text font-semibold">path to a repeatable product</span>. This partnership
                is taking our technology from <span className="highlight-text font-semibold">TRL 4 to TRL 5</span>.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Key Market LOIs</h3>
            <p className="text-gray-400 mt-2">
              Signed with teams deploying hardware exactly where CMOS struggles most —{' '}
              <span className="highlight-text font-semibold">3+ more in discussion</span>.
            </p>
          </div>
        </AnimateOnScroll>

        {/* LOI cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lois.map((loi, index) => (
            <AnimateOnScroll key={loi.name} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300', 'delay-400'] as const)[index]}>
              <div className="gradient-card p-6 rounded-lg hover-card h-full flex flex-col items-center text-center">
                <div className={`${loi.dark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 flex items-center justify-center h-20 w-full mb-4 shadow`}>
                  <Image src={loi.logo} alt={`${loi.name} logo`} width={120} height={48} className="max-h-10 max-w-[75%] object-contain" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {loi.icon}
                  <h3 className="font-heading text-lg font-semibold text-white">{loi.name}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{loi.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Backers and programs */}
        <AnimateOnScroll animation="fade-in" delay="delay-400">
          <div className="max-w-6xl mx-auto mt-14 text-center">
            <p className="text-gray-400 text-sm tracking-wider uppercase mb-6">Backed and supported by</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[...backers, ...programs].map((org) => {
                const tile = (
                  <>
                    <div className={`${org.dark ? 'bg-gray-800' : 'bg-white'} rounded-md p-3 flex items-center justify-center h-20 w-full mb-3 shadow`}>
                      <Image src={org.logo} alt={`${org.name} logo`} width={180} height={64} className="max-h-14 max-w-[90%] object-contain" />
                    </div>
                    <span className="text-gray-400 text-xs text-center">{org.name}</span>
                  </>
                );
                const className = 'gradient-card rounded-lg hover-card p-4 flex flex-col items-center justify-center';
                return org.url ? (
                  <a key={org.name} href={org.url} target="_blank" rel="noreferrer" className={className}>
                    {tile}
                  </a>
                ) : (
                  <div key={org.name} className={className}>
                    {tile}
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
