import React from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import { CONTACT_EMAIL, LINKEDIN_URL } from './ContactSection';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-accent text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-bold">TriMagnetix™</p>
          <div className="flex items-center gap-4 mt-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email TriMagnetix"
              className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <FiMail className="text-lg" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="TriMagnetix on LinkedIn"
              className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <FiLinkedin className="text-lg" />
            </a>
          </div>
          <p className="text-sm mt-3">© {currentYear} TriMagnetix™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
