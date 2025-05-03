import React from 'react';
import SectionDivider from './SectionDivider';
import AnimateOnScroll from './AnimateOnScroll';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white magnetic-dots relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full">
        <SectionDivider type="curve" position="top" fillColor="#F9FAFB" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-16">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-section-header">Contact Us</h2>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="scale-up" delay="delay-300">
          <div className="max-w-2xl mx-auto text-center gradient-card p-8 rounded-lg hover-card">
            <p className="mb-8">
              Ready to explore how our nanomagnetic technology can transform your applications? 
              Get in touch with our team to discuss your specific needs.
            </p>
            
            <a 
              href="mailto:info@trimagnetix.com" 
              className="btn btn-primary gradient-accent text-white btn-ripple hover-glow"
            >
              info@trimagnetix.com
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
