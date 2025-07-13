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
    <section id="partners" className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-in">
          <div className="sm:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our Trusted Partners
            </h2>
            <p className="mt-4 text-lg font-normal text-gray-600 sm:mt-6 sm:text-xl font-pj">
              We are proud to collaborate with leading companies and institutions.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-12 mx-auto max-w-5xl">
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
    </section>
  );
};

export default PartnerLogosSection;
