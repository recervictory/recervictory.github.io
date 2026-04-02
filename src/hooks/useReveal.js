import { useState, useEffect } from 'react';

/**
 * useReveal
 * Observes a ref element and returns `true` once it enters the viewport.
 * @param {React.RefObject} ref
 * @param {number} threshold  — 0..1, default 0.15
 */
export default function useReveal(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [ref, threshold]);

  return visible;
}
