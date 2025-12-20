'use client';

import React, { ReactNode } from 'react';
import { useIntersectionObserver, useScrollAnimation } from '../hooks/useIntersectionObserver';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-up' | 'scroll-animate';
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-400' | 'delay-500' | 'delay-1' | 'delay-2' | 'delay-3';
  threshold?: number;
  rootMargin?: string;
  className?: string;
  once?: boolean;
  useScrollBehavior?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation = 'scroll-animate',
  delay,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  once = true,
  useScrollBehavior = true, // Changed default to true to match template behavior
}: AnimateOnScrollProps) {
  // Use the new scroll animation hook if useScrollBehavior is true
  const [scrollRef, scrollVisible] = useScrollAnimation<HTMLDivElement>({ once });
  const [intersectionRef, intersectionVisible] = useIntersectionObserver<HTMLDivElement>(
    { threshold, rootMargin },
    once
  );

  const ref = useScrollBehavior ? scrollRef : intersectionRef;
  const isVisible = useScrollBehavior ? scrollVisible : intersectionVisible;

  // When using scroll behavior, map all animations to scroll-animate for consistent behavior
  const effectiveAnimation = useScrollBehavior ? 'scroll-animate' : animation;
  const animationClasses = `${effectiveAnimation} ${delay || ''}`;
  const visibilityClass = isVisible ? 'is-visible' : '';

  return (
    <div
      ref={ref}
      className={`${animationClasses} ${visibilityClass} ${className}`}
    >
      {children}
    </div>
  );
}
