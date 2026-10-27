import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import fs from 'fs';
import path from 'path';

type PartnerLogo = {
  src: string;
  alt: string;
};

const IMAGE_PATTERN = /\.(png|jpe?g|svg|gif)$/i;

const partnerGroups = [
  {
    id: 'programs-and-institutions',
    label: 'Programs and Institutions',
  },
  {
    id: 'companies',
    label: 'Companies',
  },
] as const;

function readLogos(folder: string): PartnerLogo[] {
  const directory = path.join(process.cwd(), 'public', 'partners', folder);
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((file) => IMAGE_PATTERN.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      src: `/partners/${folder}/${file}`,
      alt: file.replace(/\.[^/.]+$/, '').replace(/-/g, ' ').replace(/_/g, ' '),
    }));
}

function LogoItem({
  logo,
  decorative = false,
  repeated = false,
}: {
  logo: PartnerLogo;
  decorative?: boolean;
  repeated?: boolean;
}) {
  return (
    <li className={repeated ? 'partner-logo partner-logo-repeat' : 'partner-logo'}>
      <Image
        className="object-contain"
        src={logo.src}
        alt={decorative ? '' : logo.alt}
        fill
        sizes="192px"
      />
    </li>
  );
}

function logoSequence(logos: PartnerLogo[], repeats: number, decorative: boolean) {
  return Array.from({ length: repeats }, (_, repeat) =>
    logos.map((logo) => (
      <LogoItem
        key={`${decorative ? 'copy' : 'logo'}-${repeat}-${logo.src}`}
        logo={logo}
        decorative={decorative || repeat > 0}
        repeated={repeat > 0}
      />
    ))
  ).flat();
}

const PartnerLogosSection = () => {
  const groups = partnerGroups
    .map((group) => ({ ...group, logos: readLogos(group.id) }))
    .filter((group) => group.logos.length > 0);

  return (
    <section id="partners" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto overflow-hidden bg-gray-900/90 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-lg border border-emerald-400/20">
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

          <div className="flex flex-col gap-14">
            {groups.map((group) => (
              <div key={group.id}>
                <h3 className="text-center text-sm font-medium uppercase tracking-[0.18em] text-emerald-400 mb-8">
                  {group.label}
                </h3>
                <div className="partner-marquee">
                  <div className="partner-marquee-track">
                    <ul className="partner-marquee-group">
                      {logoSequence(group.logos, 2, false)}
                    </ul>
                    <ul className="partner-marquee-group" aria-hidden="true">
                      {logoSequence(group.logos, 2, true)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
