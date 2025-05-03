'use client';

import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-400' | 'delay-500';
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation,
  delay,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
}: AnimateOnScrollProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>(
    { threshold, rootMargin },
    true
  );

  const animationClasses = `${animation} ${delay || ''}`;
  const visibilityClass = isVisible ? 'is-visible' : '';

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animationClasses} ${visibilityClass} ${className}`}
    >
      {children}
    </div>
  );
}
