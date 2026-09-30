# Floria — ORVIA Botanic Architecture Reconstruction

High-end, sculptural floral architecture and atmospheric botanical design web application built with React, Tailwind CSS, Lucide icons, and smooth interactive parallax physics.

## Overview

Floria rejects generic bouquets in favor of site-specific botanical sculptures and atmospheric living installations. This application faithfully reconstructs the Floria experience with precision geometry, layer depth physics, interactive bag checkout, seasonal catalogue exploration, archive gallery study, interactive testimonials, and immersive pointer-driven botanical parallax.

## Motion & Layer Contract

Layer behavior is driven by precision parallax coefficients and pointer weighting:

| Layer | Depth Index | Parallax Speed | Pointer Weight | Description |
|---|---:|---:|---:|---|
| UI / Primary Copy | 0 | 0.00 | 0.00 | Motion-stable headlines, interactive controls & readable text |
| Atmosphere & Orbits | 1 | 0.05–0.12 | 0.00–0.10 | Subtle celestial orbit guides, gradients, vignette |
| Rear Botanical Structure | 2 | 0.14–0.20 | 0.10–0.20 | Deep atmospheric foliage & silhouettes |
| Middle Floral Mass | 3–4 | 0.22–0.34 | 0.25–0.48 | Secondary floral arrangement volume |
| Dominant Foreground Flora | 5 | 0.36–0.48 | 0.55–0.78 | Tactile, sculptural hero flowers (anthuriums, protea, irises) |

### Global Motion Physics

- Pointer X max: `14px`
- Pointer Y max: `10px`
- Scroll Parallax max: `52px`
- Pointer Interpolation (LERP): `0.065`
- Mobile Parallax multiplier: `0.42`
- Accessibility: Full compliance with `prefers-reduced-motion`

## Features & Creative Surprises

1. **Precision Hero Botanical Parallax**: Multi-layered organic flora responding smoothly to pointer coordinates with physically weighted depth.
2. **Interactive Assemblages & Quick Add**: Responsive card deck with instant bag state management, item count badge, preview flyout, and quantity adjustments.
3. **Interactive 3D / Perspective Flora Viewer**: Interactive Ikebana arrangement inspection tool to explore botanical stem angles and depth.
4. **Curated Seasonal Edit**: Dynamic price calculation, bespoke arrangements, detailed composition modal with flower stem breakdowns (Anthurium, Protea, Dark Lily, Peony).
5. **Interactive Archives & Category Filter**: Explore Wedding, Studio Subscriptions, Dried & Preserved, Corporate, and Master Workshops.
6. **Sound of Silence & Atmospheric Audio Ambience**: Gentle optional botanical garden / wind soundscape toggle for immersive spatial sensation.
7. **Client Notes & Testimonial Carousel**: Authentic praise from gallery directors and design curators.
8. **Bespoke Consultation Booking Modal**: Seamless site-specific commission request flow with stem preference selections.
9. **Private Studio Archive Newsletter**: Functional validation with confirmation dispatch.
