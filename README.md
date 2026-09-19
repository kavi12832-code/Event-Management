# BIZEVENTS Atelier — Luxury Event Management & Wedding Cinema

An editorial, fine-art event management and wedding cinema web application featuring interactive canvas sequences, continuous 3D stage marques, bespoke investment calculations, and scroll-driven left/right media convergence animations inspired by cutting-edge design references.

---

## Key Features

1. **Scroll Convergence Animation (Left & Right Joining on Scroll)**
   - Inspired by **MadMaze** design aesthetics: video narratives and editorial stills dynamically fly in from opposing horizons (`translateX(-140px)` / `translateX(140px)`) and seamlessly lock together at the center as the user scrolls.
   - Alternating left/right entrance applied across the entire Portfolio grid and Artistry layouts.
   - Hardware-accelerated 3D transforms (`translate3d`) with smooth cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).

2. **Continuous Canvas Hero Cinema Engine**
   - 240-frame synchronized continuous loop rendered to an HTML5 `<canvas>` maintaining crisp aspect ratios across all screen resolutions.
   - High DPI canvas scaling with progressive buffer loader.

3. **3D Interactive Infinite Stage & Venue Explorer**
   - Counter-scrolling dual marquee tracks showcasing bespoke royal stages, mandaps, and architectural floral arches.
   - Real-time 3D perspective mouse-tilt physics on hover.

4. **Dynamic Portfolio & Interactive Lightbox**
   - Filterable categories (Cinema Films, Editorial Stills, Elopements, 35mm Analog Rolls).
   - Hover video & canvas sequence scrubbing for instant media preview.
   - Full-featured modal player for 4K video playback with HTTP 206 range-request streaming.

5. **Bespoke Investment & Package Calculator**
   - Live sliding coverage hours (6 to 16 hrs) with add-on toggles (Drone Cinema, 35mm Analog Rolls, Italian Leather Heirloom Albums).
   - Real-time cost calculation and instant bridge to the booking inquiry form.

6. **Dual Luxury Color Themes**
   - **Cream Luxury Theme**: Warm bone, champagne gold, and soft paper tones.
   - **Noir Obsidian Theme**: Deep charcoal, illuminated gold foil, and ambient glows.

---

## Folder Structure

```
event_management_website/
├── assets/
│   ├── css/
│   │   └── styles.css          # Main styling, design tokens & scroll animations
│   ├── js/
│   │   └── app.js              # Core interaction, canvas loop, observer & calculators
│   ├── images/
│   │   ├── decor/              # High-res stage decor & floral setup photography
│   │   └── venues/             # Curated estate & ballroom photography
│   ├── videos/                 # 4K cinema trailers & wedding highlight films
│   └── frames/                 # Extracted frame sequences for canvas playback
├── index.html                  # Main responsive single-page application
├── server.js                   # Node.js server with HTTP range streaming & caching
├── package.json                # Project manifest and start scripts
└── .gitignore                  # Git ignore rules for OS & temporary files
```

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)

### Installation & Launch

1. Clone or navigate to the repository:
   ```bash
   git clone https://github.com/Bizentrix/event_management_website.git
   cd event_management_website
   ```

2. Start the local server:
   ```bash
   npm start
   ```
   *Alternatively:*
   ```bash
   node server.js
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Browser & Device Compatibility

- **Desktop**: Chrome, Edge, Safari, Firefox, Brave (60–120 FPS hardware acceleration).
- **Mobile & Tablet**: Touch-optimized responsive layouts with zero horizontal scroll overflow.
- **Accessibility**: Honors `prefers-reduced-motion: reduce` for all transition systems.

---

## Author & Credits

Developed for **Bizentrix** • All rights reserved © 2026.
