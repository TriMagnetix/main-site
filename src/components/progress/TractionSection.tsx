import React from 'react';
import Image from 'next/image';
import { FiCheckCircle, FiTarget, FiCpu, FiRadio, FiPlus } from 'react-icons/fi';
import AnimateOnScroll from '../AnimateOnScroll';

const lois = [
  {
    logo: '/partners/starcloud.png',
    name: 'Starcloud',
    description: 'Orbital processors — compute in space, where power and thermal margins are extreme.',
    icon: <FiCpu className="text-emerald-400" />,
  },
  {
    logo: '/partners/Pheratech.png',
    name: 'Pheratech',
    description: 'Low-powered autonomous robotics — fielded autonomy with months of battery life.',
    icon: <FiTarget className="text-emerald-400" />,
  },
  {
    logo: '/partners/WaveWorks.png',
    name: 'WaveWorks',
    description: 'Remotely powered, non-volatile IoT devices — no battery, no standby drain.',
    icon: <FiRadio className="text-emerald-400" />,
  },
  {
    logo: '/partners/Coda.png',
    name: 'Coda',
    description: 'LOI signed — additional letters of intent already in hand.',
    icon: <FiPlus className="text-emerald-400" />,
  },
];

const evaluations = ['Nvidia Inception', 'CDL', 'Plug & Play Semiconductor', "Florida Semicondutor Engine"];
const evaluation_websites = ["https://www.nvidia.com/en-us/startups/", "https://creativedestructionlab.com", "https://www.plugandplaytechcenter.com/industries/semiconductors", "https://semiconductorengine.org", "https://ny-creates.org"]

export default function TractionSection() {
  return (
    <section id="traction" className="section-padding wave-pattern relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-6">
            <h2 className="section-title gradient-section-header">Commercial Traction</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
            Our first paid contract already in the books.
          </p>
        </AnimateOnScroll>

        {/* Paid contract callout */}
        <AnimateOnScroll animation="scale-up" delay="delay-200">
          <div className="max-w-4xl mx-auto mb-12 bg-emerald-400/10 border border-emerald-400/40 rounded-lg p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <FiCheckCircle className="text-2xl text-emerald-400" />
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white">First Paid Contract Signed</h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              <span className="highlight-text font-semibold">WaveWorks</span> — building a demonstrator of remotely
              powered, non-volatile IoT devices on TriMagnetix™ nanomagnetic processors.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay="delay-200">
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
            Letters of Intent signed with teams deploying hardware exactly where CMOS struggles most.
          </p>
        </AnimateOnScroll>

        {/* LOI cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lois.map((loi, index) => (
            <AnimateOnScroll key={loi.name} animation="slide-up" delay={(['delay-100', 'delay-200', 'delay-300', 'delay-400'] as const)[index]}>
              <div className="gradient-card p-6 rounded-lg hover-card h-full flex flex-col items-center text-center">
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 w-full mb-4 shadow">
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

        {/* Evaluations */}
        <AnimateOnScroll animation="fade-in" delay="delay-400">
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-gray-400 text-sm tracking-wider uppercase mb-4">Members of and supported by:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {evaluations.map((name, index) => (
                <a href={evaluation_websites[index]}
                  key={name}
                  className="bg-gray-900/70 border border-emerald-400/20 rounded-full px-5 py-2 text-sm text-gray-200"
                >
                  {name}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
              Engagements with core engineering teams focus on licensing models and manufacturing integration — a
              high-leverage path to scale with industry-standard foundry flows from day one.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
