'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {},
  once: boolean = true
): [RefObject<T>, boolean] {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { root = null, rootMargin = '0px', threshold = 0.1 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        setIsVisible(isElementVisible);

        // If once is true and element is visible, unobserve it
        if (isElementVisible && once && element) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [root, rootMargin, threshold, once]);

  return [elementRef, isVisible];
}

// New hook for scroll-based animations that fade in/out based on viewport position
export function useScrollAnimation<T extends Element>(
  options: { triggerTop?: number; triggerBottom?: number; once?: boolean } = {}
): [RefObject<T>, boolean] {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { triggerTop = 0.15, triggerBottom = 0.95, once = true } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const checkScroll = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const triggerBottomPx = windowHeight * triggerBottom;
      const triggerTopPx = windowHeight * triggerTop;

      // Check if element is within the "live zone"
      if (rect.top < triggerBottomPx && rect.bottom > triggerTopPx) {
        setIsVisible(true);
      } else {
        // Only fade out if once is false
        if (!once) {
          setIsVisible(false);
        }
      }
    };

    // Initial check
    checkScroll();

    // Listen for scroll events - call directly without debounce for immediate response
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [triggerTop, triggerBottom, once]);

  return [elementRef, isVisible];
}
