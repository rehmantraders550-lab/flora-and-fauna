import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * useSlowScroll
 * Provides:
 * 1. Ambient slow-scroll drift (ideal for museum/botanical exhibitions)
 * 2. Eased slow-scroll to specific targets with custom duration
 * 3. Graceful user-interrupt detection (wheel, touch, keydown)
 * 4. Full accessibility (prefers-reduced-motion)
 */
export function useSlowScroll() {
  const [isDrifting, setIsDrifting] = useState<boolean>(false);
  const [driftSpeed, setDriftSpeed] = useState<number>(0.75); // pixels per frame
  const animFrameRef = useRef<number | null>(null);
  const isUserInteractingRef = useRef<boolean>(false);

  // Smooth slow scroll to target element with custom duration and cubic bezier
  const scrollToTarget = useCallback((targetIdOrOffset: string | number, duration = 1800) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let targetY = 0;

    if (typeof targetIdOrOffset === 'number') {
      targetY = targetIdOrOffset;
    } else {
      const el = document.getElementById(targetIdOrOffset.replace('#', ''));
      if (!el) return;
      const rect = el.getBoundingClientRect();
      targetY = window.scrollY + rect.top;
    }

    if (reduceMotion) {
      window.scrollTo({ top: targetY, behavior: 'auto' });
      return;
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 2) return;

    let startTime: number | null = null;

    // Smooth cubic bezier easing: easeInOutCubic
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1 && !isUserInteractingRef.current) {
        requestAnimationFrame(step);
      }
    };

    isUserInteractingRef.current = false;
    requestAnimationFrame(step);
  }, []);

  // Ambient Slow-Scroll Drift Engine
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches && isDrifting) {
      setIsDrifting(false);
      return;
    }

    if (!isDrifting) {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      return;
    }

    const driftLoop = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 5) {
        // Reached end: pause gracefully
        setIsDrifting(false);
        return;
      }

      window.scrollBy(0, driftSpeed);
      animFrameRef.current = requestAnimationFrame(driftLoop);
    };

    animFrameRef.current = requestAnimationFrame(driftLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [isDrifting, driftSpeed]);

  // Pause drift on user manual wheel or touch
  useEffect(() => {
    const handleUserScrollInterrupt = () => {
      if (isDrifting) {
        setIsDrifting(false);
      }
      isUserInteractingRef.current = true;
      setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 200);
    };

    window.addEventListener('wheel', handleUserScrollInterrupt, { passive: true });
    window.addEventListener('touchmove', handleUserScrollInterrupt, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space'].includes(e.code)) {
        handleUserScrollInterrupt();
      }
    });

    return () => {
      window.removeEventListener('wheel', handleUserScrollInterrupt);
      window.removeEventListener('touchmove', handleUserScrollInterrupt);
    };
  }, [isDrifting]);

  const toggleDrift = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    setIsDrifting((prev) => !prev);
  };

  return {
    isDrifting,
    driftSpeed,
    setDriftSpeed,
    toggleDrift,
    scrollToTarget,
  };
}
