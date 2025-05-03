import React from 'react';
import SectionDivider from './SectionDivider';
import { FiCpu, FiBattery, FiShield } from 'react-icons/fi';
import AnimateOnScroll from './AnimateOnScroll';

export default function ProductsSection() {
  const products = [
    {
      title: "Integrated computation at the edge",
      description: "Our triangle-based processors combine logic and memory into one compact unit, enabling smarter, faster, and more efficient computing.",
      icon: <FiCpu className="text-4xl text-dark-green mb-4 hover-icon" />
    },
    {
      title: "Efficiency without Compromise",
      description: "Engineered to operate with nanosecond pulses, our architecture drastically reduces energy use—ideal for battery-powered devices, IoT, and remote systems.",
      icon: <FiBattery className="text-4xl text-dark-green mb-4 hover-icon" />
    },
    {
      title: "Built for Extreme Environments",
      description: "Designed with aerospace and secure embedded systems in mind, our processors withstand harsh conditions while retaining data and functionality.",
      icon: <FiShield className="text-4xl text-dark-green mb-4 hover-icon" />
    }
  ];

  // Function to get delay based on index
  const getDelayClass = (index: number): "delay-100" | "delay-200" | "delay-300" | "delay-400" | "delay-500" => {
    switch (index) {
      case 0: return "delay-200";
      case 1: return "delay-300";
      case 2: return "delay-400";
      default: return "delay-200";
    }
  };

  return (
    <section id="products" className="section-padding bg-gray-50 wave-pattern relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full">
        <SectionDivider type="angle" position="top" fillColor="#FFFFFF" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-16">
        <AnimateOnScroll animation="fade-in" delay="delay-100">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-section-header">Our Products</h2>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="slide-up" 
              delay={getDelayClass(index)}
            >
              <div 
                className="gradient-card p-6 rounded-lg shadow-sm hover-card flex flex-col items-center text-center"
              >
                {product.icon}
                <h3 className="text-xl font-heading font-semibold mb-4 text-dark-green tracking-tight gradient-border hover-link">
                  {product.title}
                </h3>
                <p className="text-soft-black/80">
                  {product.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <SectionDivider type="angle" position="bottom" fillColor="#FFFFFF" />
      </div>
    </section>
  );
}
