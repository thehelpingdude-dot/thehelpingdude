import { useState, useEffect, useRef } from "react";

/**
 * Hook to detect when an element is in viewport
 * Uses Intersection Observer API for optimal performance
 */
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "0px",
    ...options,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting;
      setIsInView(inView);

      if (inView && !hasBeenInView) {
        setHasBeenInView(true);
      }

      // If triggerOnce is true, stop observing after first view
      if (inView && defaultOptions.triggerOnce) {
        observer.unobserve(element);
      }
    }, defaultOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [
    defaultOptions.threshold,
    defaultOptions.triggerOnce,
    defaultOptions.rootMargin,
    hasBeenInView,
  ]);

  return { ref, isInView, hasBeenInView };
};

/**
 * Hook to detect multiple elements in view
 */
export const useMultipleInView = (count, options = {}) => {
  const [inViewStates, setInViewStates] = useState(Array(count).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setInViewStates((prev) => {
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
        },
        { threshold: 0.1, ...options }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && refs.current[index]) {
          observer.unobserve(refs.current[index]);
        }
      });
    };
  }, [count, options]);

  return { refs, inViewStates };
};
