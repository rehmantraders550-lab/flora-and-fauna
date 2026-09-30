import { useEffect } from 'react';

/**
 * useParallax
 * High-precision ORVIA botanical motion engine
 * - Lerp interpolation: 0.065
 * - Pointer X max: 14px, Y max: 10px
 * - Scroll Parallax max: 52px
 * - Mobile factor: 0.42
 * - Respects prefers-reduced-motion
 */
export function useParallax() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId = 0;

    const clamp = (min: number, val: number, max: number) => Math.max(min, Math.min(val, max));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    function renderMotion() {
      rafId = 0;
      const layers = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');

      if (reduceMotion.matches) {
        layers.forEach((layer) => {
          layer.style.setProperty('--px', '0px');
          layer.style.setProperty('--py', '0px');
          layer.style.setProperty('--ps', '0px');
        });
        return;
      }

      pointerX = lerp(pointerX, targetX, 0.065);
      pointerY = lerp(pointerY, targetY, 0.065);

      const viewportH = Math.max(window.innerHeight, 1);
      const isFine = finePointer.matches;
      const mobileFactor = isFine ? 1 : 0.42;
      const pointerEnabled = isFine ? 1 : 0.35; // allow gentle touch tilt or fine mouse

      layers.forEach((layer) => {
        const rect = layer.getBoundingClientRect();
        const speed = clamp(0, Number(layer.dataset.parallaxSpeed || 0), 0.60);
        const weight = clamp(0, Number(layer.dataset.pointerWeight || 0), 1);
        const relative = (rect.top + rect.height * 0.5 - viewportH * 0.5) / viewportH;
        const scrollOffset = clamp(-52, -relative * 52 * speed * mobileFactor, 52);
        const x = pointerX * 14 * weight * pointerEnabled;
        const y = pointerY * 10 * weight * pointerEnabled;

        layer.style.setProperty('--px', `${x.toFixed(2)}px`);
        layer.style.setProperty('--py', `${y.toFixed(2)}px`);
        layer.style.setProperty('--ps', `${scrollOffset.toFixed(2)}px`);
      });

      if (Math.abs(pointerX - targetX) > 0.001 || Math.abs(pointerY - targetY) > 0.001) {
        requestFrame();
      }
    }

    function requestFrame() {
      if (!rafId) {
        rafId = requestAnimationFrame(renderMotion);
      }
    }

    const onPointerMove = (e: MouseEvent) => {
      if (reduceMotion.matches) return;
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      requestFrame();
    };

    const onScroll = () => {
      requestFrame();
    };

    const onResize = () => {
      requestFrame();
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Initial frame
    requestFrame();

    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
