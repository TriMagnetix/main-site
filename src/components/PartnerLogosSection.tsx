import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import fs from 'fs';
import path from 'path';

const delayValues = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500'] as const;

const PartnerLogosSection = () => {
  const partnersDirectory = path.join(process.cwd(), 'public', 'partners');
  const partnerFiles = fs.readdirSync(partnersDirectory);

  const partnerLogos = partnerFiles
    .filter(file => /\.(png|jpe?g|svg|gif)$/i.test(file))
    .map(file => ({
      src: `/partners/${file}`,
      alt: file.replace(/\.[^/.]+$/, '').replace(/-/g, ' ').replace(/_/g, ' '),
    }));

  return (
    <section id="partners" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-gray-900/90 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-lg border border-emerald-400/20">
          <AnimateOnScroll animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="section-title gradient-section-header">
                Our Trusted Partners
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                We are proud to collaborate with leading companies and institutions.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-wrap justify-center items-center gap-10 mt-8 mx-auto max-w-5xl">
            {partnerLogos.map((logo, index) => (
              <AnimateOnScroll key={index} animation="scale-up" delay={delayValues[index % delayValues.length]}>
                <div className="relative h-24 w-48 flex items-center justify-center">
                  <Image
                    className="object-contain w-full h-full"
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="250px"
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
