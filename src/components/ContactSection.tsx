import React from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import AnimateOnScroll from './AnimateOnScroll';

export const CONTACT_EMAIL = 'info@trimagnetix.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/trimagnetix/';

interface ContactSectionProps {
  pattern?: 'magnetic-dots' | 'wave-pattern';
}

export default function ContactSection({ pattern = 'magnetic-dots' }: ContactSectionProps) {
  return (
    <section id="contact" className={`section-padding ${pattern} relative`}>
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-section-header">Contact Us</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" delay="delay-300">
          <div className="max-w-2xl mx-auto text-center gradient-card p-8 md:p-12 rounded-lg hover-card">
            <p className="mb-8 text-gray-300">
              Want 800x lower power, zero standby loss, and radiation resistance in your product? Tell us about your use
              case or book a meeting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn btn-primary inline-flex items-center justify-center gap-2"
              >
                <FiMail className="text-xl" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FiLinkedin className="text-xl" />
                LinkedIn
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
