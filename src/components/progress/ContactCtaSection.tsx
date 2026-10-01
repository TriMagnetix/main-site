import React from 'react';
import { FiMail, FiExternalLink } from 'react-icons/fi';
import AnimateOnScroll from '../AnimateOnScroll';

export default function ContactCtaSection() {
  return (
    <section id="contact" className="section-padding magnetic-dots relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-section-header">Work With Us</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" delay="delay-300">
          <div className="max-w-2xl mx-auto text-center gradient-card p-10 md:p-12 rounded-lg hover-card">
            <p className="mb-8 text-gray-300">
              Ready to bring 800x lower power, zero standby loss, and radiation resilience to your product?
              We are open to further collaborations to revolutionize compute — get in touch to discuss your use case.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@trimagnetix.com"
                className="btn btn-primary inline-flex items-center justify-center gap-2"
              >
                <FiMail className="text-xl" />
                info@trimagnetix.com
              </a>
              <a
                href="https://trimagnetix.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FiExternalLink className="text-xl" />
                trimagnetix.com
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
