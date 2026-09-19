/**
 * BIZEVENTS ATELIER — INTERACTIVE JAVASCRIPT ENGINE
 * Features:
 * - Continuous Cinematic Canvas Engine
 * - Smooth LERP Rendering Loop
 * - Destination Venue 3D Marquee Explorer
 * - Dynamic Portfolio Lightbox & Cinema Player
 * - Interactive Investment & Bespoke Package Calculator
 * - Reviews Carousel & Luxury Inquiry System
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     0. LUXURY DARK / LIGHT THEME COLOR GRADE CONTROLLER
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark-theme');
      if (themeIcon) {
        themeIcon.className = 'fa-solid fa-sun';
        themeIcon.style.transform = 'rotate(180deg)';
      }
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('title', 'Switch to Cream Luxury Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Cream Luxury Mode');
      }
    } else {
      document.body.classList.remove('dark-theme');
      if (themeIcon) {
        themeIcon.className = 'fa-solid fa-moon';
        themeIcon.style.transform = 'rotate(0deg)';
      }
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('title', 'Switch to Noir Dark Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Noir Dark Mode');
      }
    }
  }

  // Check saved theme preference
  const savedTheme = localStorage.getItem('bizevents_luxury_theme');
  if (savedTheme === 'dark') {
    applyTheme(true);
  } else if (savedTheme === 'light') {
    applyTheme(false);
  } else {
    applyTheme(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-theme');
      const newTheme = !isDark;
      applyTheme(newTheme);
      localStorage.setItem('bizevents_luxury_theme', newTheme ? 'dark' : 'light');
    });
  }


  /* ==========================================================================
     1. HARDWARE-ACCELERATED HERO CINEMATIC VIDEO ENGINE (ZERO-LAG 60FPS)
     ========================================================================== */
  const heroVideo = document.getElementById('heroVideo');
  const canvas = document.getElementById('videoCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const loader = document.getElementById('canvasLoader');
  const loaderFill = document.getElementById('loaderFill');
  const loaderCount = document.getElementById('loaderCount');

  let isHeroVisible = true;

  function dismissLoader() {
    if (loader) {
      loader.classList.add('loaded');
      if (loaderFill) loaderFill.style.width = '100%';
      if (loaderCount) loaderCount.textContent = '100%';
    }
  }

  // Instant hardware-accelerated video playback with GPU acceleration
  if (heroVideo) {
    heroVideo.play().then(dismissLoader).catch(() => {
      // Browser low-power mode may require touch/click
    });

    heroVideo.addEventListener('playing', dismissLoader, { once: true });
    heroVideo.addEventListener('canplay', dismissLoader, { once: true });
    heroVideo.addEventListener('loadeddata', dismissLoader, { once: true });

    // Touch/click listener to unlock instant playback on mobile devices
    const unlockHeroVideo = () => {
      if (heroVideo.paused && isHeroVisible) {
        heroVideo.play().then(dismissLoader).catch(() => {});
      }
    };
    document.addEventListener('touchstart', unlockHeroVideo, { once: true, passive: true });
    document.addEventListener('click', unlockHeroVideo, { once: true, passive: true });

    // Safety timeout: dismiss loader immediately so mobile users never wait
    setTimeout(dismissLoader, 150);
  } else {
    dismissLoader();
  }

  // Observe hero visibility: pause video when scrolled down to rest of page
  const heroSection = document.getElementById('hero');
  if (heroSection && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isHeroVisible = true;
          if (heroVideo && heroVideo.paused) {
            heroVideo.play().catch(() => {});
          }
        } else {
          isHeroVisible = false;
          if (heroVideo && !heroVideo.paused) {
            heroVideo.pause();
          }
        }
      });
    }, { threshold: 0.02 });
    heroObserver.observe(heroSection);
  }


  /* ==========================================================================
     2. BESPOKE WEDDING & EVENT STAGES DIRECTORY
     ========================================================================== */
  const venuesData = [
    {
      id: 'pastel-heart-blossom',
      name: 'The Luminescent Heart & Pastel Floral Arch',
      location: 'The Grand Ballroom, Chennai',
      region: 'palace',
      category: ['palace', 'decor'],
      guests: 'Up to 350 guests',
      guestMax: 350,
      setting: 'Illuminated Heart Halo, Pastel Balloon Canopy & Lighted Columns',
      priceLevel: 'Signature Couture Stage',
      rank: 1,
      image: 'assets/images/decor/decor-stage-1.jpg',
      framesFolder: 'assets/frames/one-image',
      totalFrames: 151,
      tagline: 'Enchanting heart halo, lavender-pink pastel balloon clouds, and romantic neon glow.',
      fullDesc: 'A dreamy celebration stage featuring an oversized illuminated heart backdrop with neon lettering, cascading lavender and blush pink organic balloon arches, marquee number lights, and crystal candlelight pedestals.'
    },
    {
      id: 'burgundy-velvet-gold',
      name: 'The Royal Burgundy Velvet & Gold Flora Sanctuary',
      location: 'The Heritage Palace, Mumbai',
      region: 'palace',
      category: ['palace', 'decor'],
      guests: 'Up to 500 guests',
      guestMax: 500,
      setting: 'Fluted Crimson Velvet Panels, Golden Florals & Pillar Candles',
      priceLevel: 'Imperial Royal Decor',
      rank: 2,
      image: 'assets/images/decor/decor-stage-2.jpg',
      framesFolder: 'assets/frames/five-image',
      totalFrames: 300,
      tagline: 'Rich burgundy velvet panels framed by opulent gilded gold flora and candlelight.',
      fullDesc: 'An opulent stage design blending deep wine red velvet curtains with curved fluted pillars, gilded golden foliage towers, warm backlighting, and tiered white candle cylinders for a regal ambiance.'
    },
    {
      id: 'concentric-halo-white',
      name: 'The Architectural Concentric Halo & Ivory Bloom Arch',
      location: 'The Imperial Atrium, Hyderabad',
      region: 'palace',
      category: ['palace', 'decor'],
      guests: 'Up to 600 guests',
      guestMax: 600,
      setting: 'Fluted Concentric Halos, Backlit Warm Rings & White Roses',
      priceLevel: 'Modern Luminary Arch',
      rank: 3,
      image: 'assets/images/decor/decor-stage-4.png',
      framesFolder: 'assets/frames/kk1',
      totalFrames: 300,
      tagline: 'Sculptural concentric halos backlit in warm gold with cascading white roses.',
      fullDesc: 'A masterpiece of modern event architecture featuring multi-layered concentric fluted arch panels, radiant warm perimeter illumination, cascading ivory garden roses, and golden candle stands.'
    },
    {
      id: 'amber-silk-neon-monogram',
      name: 'The Amber Silk Drapes & Glowing Monogram Pavilion',
      location: 'The Royal Palace, Jaipur',
      region: 'palace',
      category: ['palace', 'decor'],
      guests: 'Up to 450 guests',
      guestMax: 450,
      setting: 'Ochre Draped Fabrics, Illuminated Monogram Halo & Autumnal Blooms',
      priceLevel: 'Opulent Atelier Stage',
      rank: 4,
      image: 'assets/images/decor/decor-stage-5.png',
      framesFolder: 'assets/frames/four-image',
      totalFrames: 300,
      tagline: 'Radiant glowing neon monogram framed by flowing silk and amber botanical art.',
      fullDesc: 'A showstopping royal stage featuring dramatic amber and ivory silk ceiling swags, a large illuminated monogram ring, hanging Edison pendant bulbs, pampas grass plumes, and rich autumnal floral urns.'
    },
    {
      id: 'peach-butterfly-garden',
      name: 'The Peach Blossom & Monarch Wing Stage',
      location: 'The Palace Conservatory, Bengaluru',
      region: 'palace',
      category: ['palace', 'decor'],
      guests: 'Up to 300 guests',
      guestMax: 300,
      setting: 'Peach Arch Canopy, Ethereal Butterfly Wings & Florals',
      priceLevel: 'Bespoke Artistry',
      rank: 5,
      image: 'assets/images/decor/decor-stage-3.jpg',
      framesFolder: 'assets/frames/two-image',
      totalFrames: 300,
      tagline: 'Warm peach-butter drapes with ethereal golden wings and lush flower clusters.',
      fullDesc: 'An enchanting fairytale setting featuring soft ivory arched backdrops, gossamer butterfly wings, pastel butter and peach balloon clouds, and delicate English rose arrangements.'
    },
    {
      id: 'royal-golden-mandap',
      name: 'The Royal Golden Mandap & Chandelier Pavilion',
      location: 'Grand Heritage Palace Ballroom, Udaipur',
      region: 'palace',
      category: ['palace'],
      guests: 'Up to 500 guests',
      guestMax: 500,
      setting: 'Gilded Golden Columns, Floral Garlands & Crystal Chandelier',
      priceLevel: 'Grand Royal Estate',
      rank: 6,
      image: 'assets/images/venues/venue-4.jpg',
      framesFolder: 'assets/frames/three-image',
      totalFrames: 300,
      tagline: 'Imperial gold pillars draped in fragrant fresh red and white rose garlands.',
      fullDesc: 'An exquisite royal stage featuring towering carved golden columns, hanging jasmine and rose chandeliers, brass oil lamps (kuthu vilakku), and a plush ivory couch for the couple against shimmering golden drapes.'
    },
    {
      id: 'divine-temple-gopuram',
      name: 'The Divine Temple Gopuram & Grand Mandapam',
      location: 'Sri Venkateswara Grand Mandapam, Tirupati',
      region: 'palace',
      category: ['palace'],
      guests: 'Up to 1,000 guests',
      guestMax: 1000,
      setting: 'Multi-Tiered Ivory Gopuram, Crimson Drapes & Royal Seating',
      priceLevel: 'Vedic Monumental',
      rank: 7,
      image: 'assets/images/venues/venue-6.jpg',
      framesFolder: 'assets/frames/three-image',
      totalFrames: 300,
      tagline: 'Magnificent multi-tiered temple gopuram architecture under a majestic crimson ceiling.',
      fullDesc: 'An awe-inspiring temple-style mandapam featuring authentic multi-tiered gopuram carvings, illuminated floral tassels, a vast red silk canopy, and expansive royal banquet seating for grand multi-day celebrations.'
    },
    {
      id: 'imperial-velvet-aisle',
      name: 'The Imperial Velvet Aisle & Chandelier Promenade',
      location: 'The Grand Royal Estate, New Delhi',
      region: 'palace',
      category: ['palace'],
      guests: 'Up to 450 guests',
      guestMax: 450,
      setting: 'Rich Velvet Drapery, Grand Chandeliers & Floral Pillars',
      priceLevel: 'Imperial Couture',
      rank: 8,
      image: 'assets/images/venues/venue-2.jpg',
      framesFolder: 'assets/frames/one-image',
      totalFrames: 151,
      tagline: 'A royal crimson aisle lined with illuminated floral pillars and tier chandeliers.',
      fullDesc: 'A breathtaking bridal entry promenade featuring cascading white canopies, ornate deep red velvet drapes, multi-tiered crystal chandeliers, and glowing flower-topped pedestals for a regal walk down the aisle.'
    },
    {
      id: 'vedic-pillar-blossom-stage',
      name: 'The Vedic Golden Pillar & Blossom Sanctum',
      location: 'The Royal Lotus Palace, Bengaluru',
      region: 'palace',
      category: ['palace'],
      guests: 'Up to 500 guests',
      guestMax: 500,
      setting: 'Golden Lotus Pillars, Lush Foliage Wall & Floral Arch Canopy',
      priceLevel: 'Sacred Luxury',
      rank: 9,
      image: 'assets/images/venues/venue-9.jpg',
      framesFolder: 'assets/frames/two-image',
      totalFrames: 300,
      tagline: 'Gilded lotus pillars, sacred motifs, and a lush floral arch canopy.',
      fullDesc: 'A divine wedding stage crafted with golden carved temple pillars, a fresh evergreen botanical wall, sacred deities, and an overflowing multi-colored fresh flower canopy.'
    },
    {
      id: 'grand-carpet-ballroom',
      name: 'The Grand Royal Banquet & Red Carpet Ballroom',
      location: 'The Heritage Palace Ballroom, Jaipur',
      region: 'palace',
      category: ['palace'],
      guests: 'Up to 600 guests',
      guestMax: 600,
      setting: 'Ornate Red Carpet Aisle, Golden Floral Towers & Throne',
      priceLevel: 'Grand Luxury Ballroom',
      rank: 10,
      image: 'assets/images/venues/venue-3.jpg',
      framesFolder: 'assets/frames/five-image',
      totalFrames: 300,
      tagline: 'Gilded floral pedestals, rich crimson carpets, and royal stage seating.',
      fullDesc: 'A grand luxury banquet hall with draped ceiling fabrics, crystal chandeliers, a bespoke royal patterned carpet runway, and an elevated flower-arched stage backdrop designed for unforgettable wedding ceremonies.'
    },
    {
      id: 'floral-cascade-amphitheatre',
      name: 'The Palace Floral Cascade & Arch Amphitheatre',
      location: 'The Royal Convention Center, Hyderabad',
      region: 'palace',
      category: ['palace'],
      guests: 'Up to 750 guests',
      guestMax: 750,
      setting: 'Tiered Golden Stage, Pastel Blossom Arches & Glass Podiums',
      priceLevel: 'Bespoke Monumental',
      rank: 11,
      image: 'assets/images/venues/venue-1.jpg',
      framesFolder: 'assets/frames/two-image',
      totalFrames: 300,
      tagline: 'Extensive multi-tiered golden arches enveloped in lush seasonal floral cascades.',
      fullDesc: 'A monumental stage design with cascading pastel flowers, golden floral urns, illuminated glass pedestals, and multi-tier arch architecture that provides a grand panoramic backdrop for high-scale wedding photography.'
    },
    {
      id: 'luminary-halo-stage',
      name: 'The Luminary Halo & Crimson Rose Stage',
      location: 'The Palms Luxury Resort, Goa',
      region: 'coastal',
      category: ['coastal', 'palace'],
      guests: 'Up to 350 guests',
      guestMax: 350,
      setting: 'Illuminated Halo Arches, Red Rose Swags & Tufted Sofa',
      priceLevel: 'Modern Luxury',
      rank: 12,
      image: 'assets/images/venues/venue-5.jpg',
      framesFolder: 'assets/frames/four-image',
      totalFrames: 300,
      tagline: 'Glowing circular halo lights intertwined with rich red rose garlands.',
      fullDesc: 'A modern romantic wedding stage combining illuminated architectural halos with organic red floral clusters, warm candlelight, and an elegant vintage tufted settee against champagne gold drapery.'
    }
  ];

  /* ==========================================================================
     2. DUAL 3D MARQUEE & FLUID BIDIRECTIONAL MOMENTUM SWIPE ENGINE
     ========================================================================== */
  function initVenue3DMarquee() {
    const viewport = document.getElementById('venuesMarqueeViewport');
    const track1 = document.getElementById('venuesMarqueeTrack1');
    const track2 = document.getElementById('venuesMarqueeTrack2');
    const prevBtn = document.getElementById('venueSlidePrev');
    const nextBtn = document.getElementById('venueSlideNext');
    if (!track1 || !track2 || !viewport) return;

    // Distribute venues into 2 tracks for dynamic counter-scrolling (6 each)
    const midPoint = Math.ceil(venuesData.length / 2);
    const row1Venues = venuesData.slice(0, midPoint);
    const row2Venues = venuesData.slice(midPoint);

    function createVenueCard(v) {
      const card = document.createElement('div');
      card.className = 'venue-card-3d';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', v.name);

      card.innerHTML = `
        <div class="venue-3d-media-wrap">
          <img src="${v.image}" alt="${v.name}" loading="lazy" />
          <div class="venue-3d-sheen"></div>
          <span class="venue-3d-badge">${v.priceLevel || 'CURATED ESTATE'}</span>
        </div>
        <div class="venue-3d-info">
          <h3 class="venue-3d-title">${v.name}</h3>
          <span class="venue-3d-location"><i class="fa-solid fa-location-dot gold-icon"></i> ${v.location}</span>
        </div>
      `;

      // Interactive 3D Perspective Tilt on Pointer Move (Desktop fine-pointer only to maximize mobile 60FPS)
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let bounds = null;
        card.addEventListener('pointerenter', () => {
          bounds = card.getBoundingClientRect();
        });
        card.addEventListener('pointermove', (e) => {
          if (!bounds) bounds = card.getBoundingClientRect();
          const mouseX = e.clientX - bounds.left;
          const mouseY = e.clientY - bounds.top;
          const xPct = mouseX / bounds.width;
          const yPct = mouseY / bounds.height;
          const tiltX = (0.5 - yPct) * 14;
          const tiltY = (xPct - 0.5) * 14;
          card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(1)}deg) rotateY(${tiltY.toFixed(1)}deg) translateZ(14px) scale(1.02)`;
        });
        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
          bounds = null;
        });
      }

      card.addEventListener('click', () => openVenueModal(v.id));
      return card;
    }

    // Populate Track 1 (3 sets = 18 cards, ~5,400px wide for seamless loop with 50% fewer DOM nodes)
    track1.innerHTML = '';
    const track1List = [...row1Venues, ...row1Venues, ...row1Venues];
    track1List.forEach(v => {
      track1.appendChild(createVenueCard(v));
    });

    // Populate Track 2
    track2.innerHTML = '';
    const track2List = [...row2Venues, ...row2Venues, ...row2Venues];
    track2List.forEach(v => {
      track2.appendChild(createVenueCard(v));
    });

    // Disable CSS animation so JS momentum engine has exclusive, butter-smooth authority
    track1.style.animation = 'none';
    track2.style.animation = 'none';

    // Position and Speed Configuration
    let pos1 = 0;
    let pos2 = 0;
    let singleSetWidth1 = 0;
    let singleSetWidth2 = 0;

    let isDragging = false;
    let isHorizontalGesture = null;
    let autoMarqueeActive = true;
    let extraVelocity = 0;

    // Fast, luxurious auto-scroll speeds (px per frame at 60fps)
    const baseSpeed1 = -2.2; // Leftward
    const baseSpeed2 = 2.2;  // Rightward

    function measureWidths() {
      if (track1.children.length > 0) {
        singleSetWidth1 = track1.scrollWidth / 3;
      }
      if (track2.children.length > 0) {
        singleSetWidth2 = track2.scrollWidth / 3;
      }
      if (pos2 === 0 && singleSetWidth2 > 0) {
        pos2 = -singleSetWidth2;
      }
    }

    setTimeout(measureWidths, 200);
    window.addEventListener('resize', measureWidths);

    // Continuous Animation Frame Loop with Visibility Throttling
    let isVenuesVisible = true;
    let marqueeAnimId = null;

    function marqueeLoop() {
      if (!isVenuesVisible) {
        marqueeAnimId = null;
        return;
      }

      if (singleSetWidth1 > 0 && singleSetWidth2 > 0) {
        if (!isDragging && autoMarqueeActive) {
          pos1 += (baseSpeed1 + extraVelocity);
          pos2 += (baseSpeed2 + extraVelocity);

          // Silky friction decay for smooth inertia glide
          extraVelocity *= 0.94;
          if (Math.abs(extraVelocity) < 0.05) {
            extraVelocity = 0;
          }

          // Seamless infinite wrap for Track 1
          while (pos1 <= -singleSetWidth1) {
            pos1 += singleSetWidth1;
          }
          while (pos1 > 0) {
            pos1 -= singleSetWidth1;
          }

          // Seamless infinite wrap for Track 2
          while (pos2 >= 0) {
            pos2 -= singleSetWidth2;
          }
          while (pos2 < -singleSetWidth2) {
            pos2 += singleSetWidth2;
          }
        }

        track1.style.transform = `translate3d(${pos1.toFixed(2)}px, 0, 0)`;
        track2.style.transform = `translate3d(${pos2.toFixed(2)}px, 0, 0)`;
      }

      marqueeAnimId = requestAnimationFrame(marqueeLoop);
    }

    function startMarquee() {
      if (!marqueeAnimId && isVenuesVisible) {
        marqueeAnimId = requestAnimationFrame(marqueeLoop);
      }
    }

    function stopMarquee() {
      if (marqueeAnimId) {
        cancelAnimationFrame(marqueeAnimId);
        marqueeAnimId = null;
      }
    }

    // IntersectionObserver: pauses marquee RAF when off-screen to save 100% GPU/CPU
    const venuesSection = document.getElementById('venues');
    if (venuesSection && 'IntersectionObserver' in window) {
      const venuesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVenuesVisible = true;
            measureWidths();
            startMarquee();
          } else {
            isVenuesVisible = false;
            stopMarquee();
          }
        });
      }, { threshold: 0.05 });
      venuesObserver.observe(venuesSection);
    }

    startMarquee();

    // --- BIDIRECTIONAL TOUCH SWIPE & MOMENTUM DRAG ENGINE ---
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastTime = 0;
    let dragVelocity = 0;

    viewport.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.venue-slide-btn')) return;
      startX = e.clientX;
      startY = e.clientY;
      lastX = e.clientX;
      lastTime = performance.now();
      dragVelocity = 0;
      isHorizontalGesture = null;
      isDragging = false;
      extraVelocity = 0; // Immediately catch/halt previous glide
    });

    viewport.addEventListener('pointermove', (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      const totalDx = currentX - startX;
      const totalDy = currentY - startY;

      // Smart Gesture Classification: do not trap vertical page scrolling
      if (isHorizontalGesture === null) {
        if (Math.abs(totalDx) > 7 && Math.abs(totalDx) > Math.abs(totalDy)) {
          isHorizontalGesture = true;
          isDragging = true;
          viewport.classList.add('is-dragging');
          try {
            viewport.setPointerCapture(e.pointerId);
          } catch(err) {}
        } else if (Math.abs(totalDy) > 7 && Math.abs(totalDy) > Math.abs(totalDx)) {
          isHorizontalGesture = false; // Vertical scroll: let native touch-scroll happen smoothly!
          return;
        }
      }

      if (!isDragging || !isHorizontalGesture) return;

      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const stepDiff = currentX - lastX;
      dragVelocity = stepDiff / dt; // Instantaneous velocity (px/ms)
      lastX = currentX;
      lastTime = now;

      // Move tracks together with touch drag
      pos1 += stepDiff;
      pos2 += stepDiff;

      // Wrap during drag so track never empties
      if (singleSetWidth1 > 0) {
        while (pos1 <= -singleSetWidth1) pos1 += singleSetWidth1;
        while (pos1 > 0) pos1 -= singleSetWidth1;
      }
      if (singleSetWidth2 > 0) {
        while (pos2 >= 0) pos2 -= singleSetWidth2;
        while (pos2 < -singleSetWidth2) pos2 += singleSetWidth2;
      }

      track1.style.transform = `translate3d(${pos1.toFixed(2)}px, 0, 0)`;
      track2.style.transform = `translate3d(${pos2.toFixed(2)}px, 0, 0)`;
    });

    function endDrag(e) {
      if (isDragging) {
        isDragging = false;
        viewport.classList.remove('is-dragging');
        try {
          if (e && e.pointerId) viewport.releasePointerCapture(e.pointerId);
        } catch(err) {}

        // Fling momentum in either direction (right-to-left or left-to-right)
        const fling = dragVelocity * 16 * 1.3;
        extraVelocity = Math.max(-28, Math.min(28, fling));
      }
      isHorizontalGesture = null;
    }

    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);

    // --- MANUAL SLIDER ARROW BUTTONS (< and >) ---
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        extraVelocity = 22; // Smooth high-speed fling to the right
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        extraVelocity = -22; // Smooth high-speed fling to the left
      });
    }

    // Hover pause only on desktop with mouse pointer (never traps mobile touch)
    viewport.addEventListener('mouseenter', () => {
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        autoMarqueeActive = false;
      }
    });

    viewport.addEventListener('mouseleave', () => {
      if (!isDragging) {
        autoMarqueeActive = true;
      }
    });
  }

  initVenue3DMarquee();


  /* ==========================================================================
     2.5. SCROLL CONVERGENCE & LEFT/RIGHT JOINING ENGINE (MADMAZE REFERENCE)
     ========================================================================== */
  let convergenceObserver = null;

  function initScrollConvergenceEngine() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.scroll-join-left, .scroll-join-right, .scroll-join-center').forEach(el => {
        el.classList.add('is-joined');
      });
    } else {
      convergenceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-joined');

            // Auto-play videos inside joined cards when in view
            const vid = entry.target.querySelector('video');
            if (vid && vid.paused) {
              vid.play().catch(() => {});
            }
          } else {
            // Remove is-joined when scrolled out of view so animation repeats every time user scrolls!
            entry.target.classList.remove('is-joined');

            // Pause offscreen videos to maximize performance
            const vid = entry.target.querySelector('video');
            if (vid && !vid.paused) {
              vid.pause();
            }
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      });

      // Observe all initial static elements
      const staticElements = document.querySelectorAll('.scroll-join-left, .scroll-join-right, .scroll-join-center');
      staticElements.forEach(el => convergenceObserver.observe(el));
    }

    // Interactive canvas frame playback for all convergence cards
    document.querySelectorAll('.convergence-card').forEach(card => {
      const framesFolder = card.getAttribute('data-frames');
      const total = parseInt(card.getAttribute('data-total-frames'), 10) || 300;
      const canvas = card.querySelector('.convergence-canvas');
      const ctx = canvas ? canvas.getContext('2d') : null;
      const playBadge = card.querySelector('.convergence-play-badge');

      if (framesFolder && canvas && ctx) {
        const frameImages = [];
        let isLoaded = false;
        let isPlaying = false;
        let curFrame = 0;
        let lastTime = 0;
        let animId = null;
        const frameDelay = 1000 / 30;

        // Preload first frame immediately for instant sizing & visual backdrop
        const firstImg = new Image();
        firstImg.src = `${framesFolder}/frame_001.jpg`;
        firstImg.onload = () => {
          if (canvas && ctx) {
            canvas.width = firstImg.naturalWidth || 640;
            canvas.height = firstImg.naturalHeight || 400;
            ctx.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
          }
        };

        function loadFrames() {
          if (isLoaded) return;
          isLoaded = true;
          for (let i = 1; i <= total; i++) {
            const img = new Image();
            const num = String(i).padStart(3, '0');
            img.src = `${framesFolder}/frame_${num}.jpg`;
            frameImages.push(img);
          }
        }

        function loop(timestamp) {
          if (!isPlaying) return;
          if (!lastTime) lastTime = timestamp;
          const elapsed = timestamp - lastTime;
          if (elapsed >= frameDelay) {
            lastTime = timestamp - (elapsed % frameDelay);
            curFrame = (curFrame + 1) % total;
            const img = frameImages[curFrame];
            if (img && img.complete && ctx && canvas) {
              if (canvas.width !== img.naturalWidth && img.naturalWidth > 0) {
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
              }
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
          }
          animId = requestAnimationFrame(loop);
        }

        function startPlay() {
          loadFrames();
          isPlaying = true;
          card.classList.add('is-playing');
          if (playBadge) {
            playBadge.innerHTML = '<i class="fa-solid fa-pause"></i>';
            playBadge.setAttribute('title', 'Pause Video');
          }
          lastTime = 0;
          if (!animId) animId = requestAnimationFrame(loop);
        }

        function stopPlay() {
          isPlaying = false;
          card.classList.remove('is-playing');
          if (playBadge) {
            playBadge.innerHTML = '<i class="fa-solid fa-play"></i>';
            playBadge.setAttribute('title', 'Click to Play Video');
          }
          if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
          }
        }

        card.addEventListener('mouseenter', () => {
          startPlay();
        });

        card.addEventListener('mouseleave', () => {
          if (!card.dataset.stickyPlay) {
            stopPlay();
          }
        });

        if (playBadge) {
          playBadge.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isPlaying) {
              card.dataset.stickyPlay = '';
              stopPlay();
            } else {
              card.dataset.stickyPlay = 'true';
              startPlay();
            }
          });
        }
      }

      // Click card opens full 4K cinema modal dialog
      card.addEventListener('click', (e) => {
        if (e.target.closest('.convergence-sound-toggle') || e.target.closest('.convergence-play-badge')) return;
        const venueId = card.getAttribute('data-venue-id');
        if (venueId) {
          openVenueModal(venueId);
        } else {
          const item = {
            id: card.getAttribute('data-title') || 'convergence-item',
            couple: card.getAttribute('data-title') || 'Signature Heritage Film',
            location: card.getAttribute('data-location') || 'Jaipur Royal Palace',
            tag: card.getAttribute('data-meta') || '4K LIVE CINEMA',
            synopsis: card.getAttribute('data-desc') || 'A masterwork of royal wedding artistry and fine art cinema.',
            gear: card.getAttribute('data-gear') || 'Sony FX3 Cine • Leica M11-P • 4K 10-Bit Master Film',
            thumb: card.querySelector('img') ? card.querySelector('img').src : '',
            framesFolder: card.getAttribute('data-frames') || '',
            videoUrl: card.getAttribute('data-video') || '',
            totalFrames: parseInt(card.getAttribute('data-total-frames'), 10) || 300
          };
          openPortfolioModal(item);
        }
      });
    });

    // Audio toggles on convergence video cards
    document.querySelectorAll('.convergence-sound-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.convergence-card');
        if (!card) return;
        const video = card.querySelector('video');
        if (!video) return;

        video.muted = !video.muted;
        const icon = btn.querySelector('i');
        if (icon) {
          icon.className = video.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
        }
        btn.setAttribute('title', video.muted ? 'Unmute Audio' : 'Mute Audio');
      });
    });

    // Subtle scroll parallax for desktop convergence cards
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth > 992) {
            const pairs = document.querySelectorAll('.convergence-pair');
            const vh = window.innerHeight;
            pairs.forEach(pair => {
              const rect = pair.getBoundingClientRect();
              if (rect.top < vh && rect.bottom > 0) {
                const progress = (vh - rect.top) / (vh + rect.height);
                const leftCard = pair.querySelector('.convergence-card-left');
                const rightCard = pair.querySelector('.convergence-card-right');
                const offset = (progress - 0.5) * 18;
                if (leftCard && leftCard.classList.contains('is-joined')) {
                  leftCard.style.transform = `translate3d(0, ${-offset.toFixed(1)}px, 0) scale(1)`;
                }
                if (rightCard && rightCard.classList.contains('is-joined')) {
                  rightCard.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1)`;
                }
              }
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  initScrollConvergenceEngine();


  /* ==========================================================================
     3. PORTFOLIO GALLERY & LIGHTBOX MODAL
     ========================================================================== */
  const portfolioData = [
    {
      id: 'story-mandap-royal',
      couple: 'Pooja & Devendra',
      location: 'Grand Heritage Palace Ballroom, Udaipur',
      category: 'editorial',
      tag: 'ROYAL GOLDEN MANDAP',
      thumb: 'assets/images/venues/venue-4.jpg',
      framesFolder: 'assets/frames/three-image',
      totalFrames: 300,
      synopsis: 'A regal royal union framed by monumental golden pillars, fragrant red & white jasmine garlands, and a dazzling crystal chandelier centerpiece.',
      gear: 'Sony A7R V • 50mm f/1.2 GM • Leica M11-P • 4K 10-Bit Cine'
    },
    {
      id: 'story-velvet-aisle',
      couple: 'Meera & Siddharth',
      location: 'The Grand Royal Estate, New Delhi',
      category: 'films',
      tag: '4K CINEMA BRIDAL AISLE',
      thumb: 'assets/images/venues/venue-2.jpg',
      framesFolder: 'assets/frames/one-image',
      totalFrames: 151,
      synopsis: 'A breathtaking bridal entry promenade down a monumental white botanical butterfly aisle flanked by glowing floral towers.',
      gear: 'Sony FX3 Cine • 24mm f/1.4 GM • RED Komodo 6K'
    },
    {
      id: 'story-redcarpet-reception',
      couple: 'Rhea & Kabir',
      location: 'The Heritage Palace Ballroom, Jaipur',
      category: 'editorial',
      tag: 'HERITAGE PALACE RECEPTION',
      thumb: 'assets/images/venues/venue-3.jpg',
      framesFolder: 'assets/frames/five-image',
      totalFrames: 300,
      synopsis: 'A grand luxury banquet hall with draped crimson ceiling fabrics, tier crystal chandeliers, bespoke royal candlelit runway, and royal throne seating.',
      gear: 'Hasselblad 500 C/M • 80mm Zeiss • Portra 800'
    },
    {
      id: 'story-cascade-stage',
      couple: 'Natasha & Armaan',
      location: 'The Royal Convention Center, Hyderabad',
      category: 'editorial',
      tag: 'GRAND FLORAL CASCADE',
      thumb: 'assets/images/venues/venue-1.jpg',
      framesFolder: 'assets/frames/two-image',
      totalFrames: 300,
      synopsis: 'A monumental stage design with cascading modern sculptural arches, illuminated glass pedestals, and multi-tier arch architecture.',
      gear: 'Leica M11 • 35mm Summilux • Sony FX3'
    },
    {
      id: 'story-luminary-stage',
      couple: 'Diya & Neil',
      location: 'The Palms Luxury Resort, Goa',
      category: 'elopement',
      tag: 'COASTAL RUNWAY PROMENADE',
      thumb: 'assets/images/venues/venue-5.jpg',
      framesFolder: 'assets/frames/four-image',
      totalFrames: 300,
      synopsis: 'A high-fashion wedding runway installation combining illuminated architectural spotlights with bespoke stage carpet couture and sunset ambience.',
      gear: 'Sony A1 • 50mm f/1.2 GM • DJI Mavic 3 Pro Cine'
    },
    {
      id: 'story-gopuram-mandapam',
      couple: 'Aishwarya & Karthik',
      location: 'Sri Venkateswara Grand Mandapam, Tirupati',
      category: 'editorial',
      tag: 'DIVINE TEMPLE GOPURAM',
      thumb: 'assets/images/venues/venue-6.jpg',
      framesFolder: 'assets/frames/three-image',
      totalFrames: 300,
      synopsis: 'A divine Vedic wedding under a monumental golden temple mandapam with crimson drapery, illuminated floral hangings, and traditional melodies.',
      gear: 'Sony A7R V • 24-70mm GM II • Leica M11 • 4K Cinema'
    },
    {
      id: 'story-temple-bells',
      couple: 'Ananya & Raghav',
      location: 'Shilpa Arora Royal Pavilions, Jaipur',
      category: 'films',
      tag: '4K ROYAL BANQUET CHANDELIER',
      thumb: 'assets/images/venues/venue-7.jpg',
      framesFolder: 'assets/frames/five-image',
      videoUrl: 'assets/videos/video-ananya-raghav.mp4',
      totalFrames: 300,
      synopsis: 'Thousands of glowing candles, crystal chandeliers, and opulent velvet curtains creating an ethereal nocturnal ballroom experience.',
      gear: 'Sony FX3 Cine • 50mm f/1.2 GM • DJI Ronin RS3 Pro'
    },
    {
      id: 'story-golden-dome-vows',
      couple: 'Sanjana & Vikram',
      location: 'Phulkaas Heritage Palace, Hyderabad',
      category: 'films',
      tag: 'SACRED GOLDEN DOME CEREMONY',
      thumb: 'assets/images/venues/venue-8.jpg',
      framesFolder: 'assets/frames/three-image',
      videoUrl: 'assets/videos/video-sanjana-vikram.mp4',
      totalFrames: 300,
      synopsis: 'Traditional vows and sacred ceremonies held beneath an opulent carved golden dome mandap with crystal chandelier cascades.',
      gear: 'RED Komodo 6K • Leica Summicron 35mm • Sony FX3'
    },
    {
      id: 'story-vedic-pillars',
      couple: 'Kavya & Pranav',
      location: 'The Royal Lotus Palace, Bengaluru',
      category: 'analog',
      tag: '35MM SCULPTURAL ARCH SANCTUM',
      thumb: 'assets/images/venues/venue-9.jpg',
      framesFolder: 'assets/frames/two-image',
      videoUrl: 'assets/videos/video-kavya-pranav.mp4',
      totalFrames: 300,
      synopsis: 'A timeless ceremony surrounded by modern curved sculptural arches, lush green botanical backdrops, and pristine white stage elements.',
      gear: 'Hasselblad 500 C/M • Kodak Portra 400 • Richard Photo Lab Scans'
    },
    {
      id: 'story-1',
      couple: 'Camilla & Sébastien',
      location: 'Villa Balbiano, Lake Como',
      category: 'films',
      tag: '4K CINEMA MASTER FILM',
      thumb: 'assets/frames/one-image/frame_001.jpg',
      framesFolder: 'assets/frames/one-image',
      videoUrl: 'assets/videos/video-camilla-sebastien.mp4',
      totalFrames: 151,
      synopsis: 'A sun-drenched European weekend filled with bespoke botanical floral arches, crystal glassware, and grand aisle promenades.',
      gear: 'Sony FX3 Cine • 24mm f/1.4 GM • Leica M11 • Kodak Portra 400'
    },
    {
      id: 'story-2',
      couple: 'Charlotte & William',
      location: 'Château de Tourreau, Provence',
      category: 'editorial',
      tag: 'FINE ART EDITORIAL STILLS',
      thumb: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
      framesFolder: 'assets/frames/two-image',
      videoUrl: 'assets/videos/video-charlotte-william.mp4',
      totalFrames: 300,
      synopsis: 'Editorial high-fashion portraits captured on medium format film, featuring bespoke bridal couture and architectural stage curves.',
      gear: 'Hasselblad 500 C/M • 80mm Zeiss • Portra 800'
    },
    {
      id: 'story-5',
      couple: 'Isabella & Matteo',
      location: 'Ravello, Amalfi Coast',
      category: 'analog',
      tag: '35MM ANALOG ARCHIVE',
      thumb: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
      framesFolder: 'assets/frames/four-image',
      videoUrl: 'assets/videos/video-isabella-matteo.mp4',
      totalFrames: 300,
      synopsis: 'Grainy, nostalgic film stills shot with vintage 1970s lenses on authentic Kodak Tri-X 400 and runway stage production.',
      gear: 'Leica MP Analog • 35mm f/1.4 ASPH • Richard Photo Lab Scans'
    },
    {
      id: 'story-monolithic-dome',
      couple: 'Anya & Dev — Monolithic Dome',
      location: 'The Imperial Atrium, Hyderabad',
      category: 'editorial',
      tag: 'FINE ART BESPOKE ARCHITECTURE',
      thumb: 'assets/images/decor/decor-stage-4.png',
      framesFolder: 'assets/frames/kk1',
      totalFrames: 300,
      synopsis: 'Sculptural concentric halos backlit in warm gold with cascading white roses and 360-degree high-definition stage cinematography.',
      gear: 'Sony A7R V • 24-70mm GM II • 4K 10-Bit Cinematic Drone Pan'
    }
  ];

  const portfolioGrid = document.getElementById('portfolioGrid');
  const portfolioTabs = document.querySelectorAll('.portfolio-tab');

  function renderPortfolio(category = 'all') {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    const filtered = (category === 'all') 
      ? portfolioData 
      : portfolioData.filter(item => item.category === category);

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      const sideClass = (index % 2 === 0) ? 'scroll-join-left' : 'scroll-join-right';
      card.className = `portfolio-card ${sideClass}`;
      const hasMedia = item.framesFolder || item.videoUrl;

      card.innerHTML = `
        <div class="portfolio-thumb">
          <img src="${item.thumb}" alt="${item.couple} wedding film photography" loading="lazy" class="portfolio-img" />
          ${item.framesFolder ? `
            <canvas class="portfolio-hover-canvas"></canvas>
          ` : (item.videoUrl ? `
            <video class="portfolio-hover-video" src="${item.videoUrl}" muted loop playsinline preload="auto"></video>
          ` : '')}
          <div class="portfolio-overlay-info">
            <span class="port-category-tag">${item.tag}</span>
            <h4 class="port-couple-title">${item.couple}</h4>
            <span class="port-location-text"><i class="fa-solid fa-location-dot gold-icon"></i> ${item.location}</span>
          </div>
        </div>
      `;

      // Distinct canvas frame sequence playback
      if (item.framesFolder) {
        const canvas = card.querySelector('.portfolio-hover-canvas');
        const ctx = canvas ? canvas.getContext('2d') : null;
        const total = item.totalFrames || 300;
        const frameImages = [];
        let isLoaded = false;
        let isPlaying = false;
        let curFrame = 0;
        let lastTime = 0;
        let animId = null;
        const frameDelay = 1000 / 30; // 30 FPS

        // Preload first frame immediately for instant sizing & display
        const firstImg = new Image();
        firstImg.src = `${item.framesFolder}/frame_001.jpg`;
        firstImg.onload = () => {
          if (canvas && ctx) {
            canvas.width = firstImg.naturalWidth || 480;
            canvas.height = firstImg.naturalHeight || 640;
            ctx.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
          }
        };

        function loadFrames() {
          if (isLoaded) return;
          isLoaded = true;
          for (let i = 1; i <= total; i++) {
            const img = new Image();
            const num = String(i).padStart(3, '0');
            img.src = `${item.framesFolder}/frame_${num}.jpg`;
            frameImages.push(img);
          }
        }

        function loop(timestamp) {
          if (!isPlaying) return;
          if (!lastTime) lastTime = timestamp;
          const elapsed = timestamp - lastTime;
          if (elapsed >= frameDelay) {
            lastTime = timestamp - (elapsed % frameDelay);
            curFrame = (curFrame + 1) % total;
            const img = frameImages[curFrame];
            if (img && img.complete && ctx && canvas) {
              if (canvas.width !== img.naturalWidth && img.naturalWidth > 0) {
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
              }
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
          }
          animId = requestAnimationFrame(loop);
        }

        // Start playback on cursor hover
        card.addEventListener('mouseenter', () => {
          loadFrames();
          isPlaying = true;
          lastTime = 0;
          animId = requestAnimationFrame(loop);
        });

        card.addEventListener('mouseleave', () => {
          isPlaying = false;
          if (animId) cancelAnimationFrame(animId);
        });

        // Touch support
        card.addEventListener('touchstart', () => {
          loadFrames();
          if (!isPlaying) {
            isPlaying = true;
            lastTime = 0;
            animId = requestAnimationFrame(loop);
          } else {
            isPlaying = false;
            if (animId) cancelAnimationFrame(animId);
          }
        }, { passive: true });

      } else if (item.videoUrl) {
        const video = card.querySelector('.portfolio-hover-video');

        card.addEventListener('mouseenter', () => {
          if (video) {
            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          }
        });

        card.addEventListener('mouseleave', () => {
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });
      }

      card.addEventListener('click', () => openPortfolioModal(item));
      portfolioGrid.appendChild(card);
      if (convergenceObserver) convergenceObserver.observe(card);
    });
  }

  portfolioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      portfolioTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPortfolio(tab.getAttribute('data-category'));
    });
  });

  renderPortfolio();


  /* ==========================================================================
     4. MODAL DIALOG ENGINE (LIGHTBOX & VENUE DETAILS)
     ========================================================================== */
  const luxuryModal = document.getElementById('luxuryModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  let modalAnimationId = null;

  function closeModal() {
    if (luxuryModal) luxuryModal.classList.remove('active');
    if (modalAnimationId) {
      cancelAnimationFrame(modalAnimationId);
      modalAnimationId = null;
    }
    if (modalBody) {
      const vid = modalBody.querySelector('video');
      if (vid) vid.pause();
      modalBody.innerHTML = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function openVenueModal(venueId) {
    const v = venuesData.find(item => item.id === venueId);
    if (!v || !modalBody || !luxuryModal) return;
    if (modalAnimationId) {
      cancelAnimationFrame(modalAnimationId);
      modalAnimationId = null;
    }

    modalBody.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="modal-media-wrap" style="position: relative; border-radius: 12px; overflow: hidden; height: 380px; background: #000;">
          ${v.framesFolder ? `
            <canvas id="modalVenueCanvas" style="width: 100%; height: 100%; object-fit: cover;"></canvas>
            <div id="modalLoadingBadge" style="position: absolute; top: 16px; right: 16px; background: rgba(0,0,0,0.6); color: #EAD09D; padding: 6px 14px; border-radius: 20px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; border: 1px solid rgba(212,175,55,0.3); z-index: 5;">
              <i class="fa-solid fa-circle-play" style="margin-right: 6px;"></i>PLAYING 4K CINEMATIC SEQUENCE
            </div>
          ` : `
            <img src="${v.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${v.name}" />
          `}
          <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 24px; background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.88) 100%); color: #FFF; pointer-events: none; z-index: 4;">
            <span style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em; color: #EAD09D;">CURATED STAGE & VENUE MASTERPIECE</span>
            <h2 style="font-family: var(--font-serif); font-size: 30px; font-weight: 600; line-height: 1.2; margin: 4px 0;">${v.name}</h2>
            <p style="font-size: 13.5px; color: #E2DAD0;"><i class="fa-solid fa-location-dot gold-icon"></i> ${v.location}</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; background: var(--bg-bone); padding: 18px; border-radius: 10px; border: 1px solid var(--border-cream);">
          <div><strong style="font-size: 11px; font-family: var(--font-mono); color: var(--gold-deep); display: block;">CAPACITY</strong><span style="font-size: 14px; font-weight: 600;">${v.guests}</span></div>
          <div><strong style="font-size: 11px; font-family: var(--font-mono); color: var(--gold-deep); display: block;">TIER</strong><span style="font-size: 14px; font-weight: 600;">${v.priceLevel}</span></div>
          <div><strong style="font-size: 11px; font-family: var(--font-mono); color: var(--gold-deep); display: block;">PHOTOGRAPHY & CINEMA</strong><span style="font-size: 14px; font-weight: 600;">Full 4K + 35mm Support</span></div>
        </div>

        <div>
          <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 10px; color: var(--text-ink);">About This Setup & Architecture</h3>
          <p style="font-size: 14.5px; line-height: 1.75; color: var(--text-body);">${v.fullDesc}</p>
        </div>

        <div class="modal-footer-actions" style="display: flex; justify-content: flex-end; gap: 14px; margin-top: 10px; border-top: 1px solid var(--border-cream); padding-top: 20px;">
          <button onclick="document.getElementById('luxuryModal').classList.remove('active')" class="btn-pkg-select">Close</button>
          <a href="#inquiry" onclick="document.getElementById('luxuryModal').classList.remove('active'); document.getElementById('venueLocation').value = '${v.name}, ${v.location}';" class="btn-luxury-solid">Inquire For This Setup</a>
        </div>
      </div>
    `;
    luxuryModal.classList.add('active');

    if (v.framesFolder) {
      const modalCanvas = document.getElementById('modalVenueCanvas');
      const mCtx = modalCanvas ? modalCanvas.getContext('2d') : null;
      const total = v.totalFrames || 300;
      const modalFrames = [];
      let mFrame = 0;
      let mLastTime = 0;
      const mFrameDelay = 1000 / 30;

      for (let i = 1; i <= total; i++) {
        const img = new Image();
        const num = String(i).padStart(3, '0');
        img.src = `${v.framesFolder}/frame_${num}.jpg`;
        modalFrames.push(img);
      }

      function modalLoop(timestamp) {
        if (!luxuryModal.classList.contains('active')) return;
        if (!mLastTime) mLastTime = timestamp;
        const elapsed = timestamp - mLastTime;
        if (elapsed >= mFrameDelay) {
          mLastTime = timestamp - (elapsed % mFrameDelay);
          mFrame = (mFrame + 1) % total;
          const img = modalFrames[mFrame];
          if (img && img.complete && mCtx && modalCanvas) {
            if (modalCanvas.width !== img.naturalWidth && img.naturalWidth > 0) {
              modalCanvas.width = img.naturalWidth;
              modalCanvas.height = img.naturalHeight;
            }
            mCtx.drawImage(img, 0, 0, modalCanvas.width, modalCanvas.height);
          }
        }
        modalAnimationId = requestAnimationFrame(modalLoop);
      }
      modalAnimationId = requestAnimationFrame(modalLoop);
    }
  }

  function openPortfolioModal(item) {
    if (!modalBody || !luxuryModal) return;
    if (modalAnimationId) {
      cancelAnimationFrame(modalAnimationId);
      modalAnimationId = null;
    }

    modalBody.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="modal-media-wrap" style="position: relative; border-radius: 12px; overflow: hidden; height: 420px; background: #000;">
          ${item.framesFolder ? `
            <canvas id="modalVideoCanvas" style="width: 100%; height: 100%; object-fit: cover;"></canvas>
            <div id="modalLoadingBadge" style="position: absolute; top: 16px; right: 16px; background: rgba(0,0,0,0.6); color: #EAD09D; padding: 6px 14px; border-radius: 20px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; border: 1px solid rgba(212,175,55,0.3); z-index: 5;">
              <i class="fa-solid fa-circle-play" style="margin-right: 6px;"></i>PLAYING 4K SEQUENCE
            </div>
          ` : (item.videoUrl ? `
            <video src="${item.videoUrl}" controls autoplay playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
          ` : `
            <img src="${item.thumb}" style="width: 100%; height: 100%; object-fit: cover;" alt="${item.couple}" />
          `)}
          <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 24px; background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%); color: #FFF; pointer-events: none; z-index: 4;">
            <span style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em; color: #EAD09D;">${item.tag}</span>
            <h2 style="font-family: var(--font-serif); font-size: 34px; font-weight: 500;">${item.couple}</h2>
            <p style="font-size: 13.5px; color: #E2DAD0;"><i class="fa-solid fa-location-dot gold-icon"></i> ${item.location}</p>
          </div>
        </div>

        <div>
          <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 8px; color: var(--text-ink);">The Love Story & Aesthetic</h3>
          <p style="font-size: 14.5px; line-height: 1.75; color: var(--text-body);">${item.synopsis}</p>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-cream); padding: 16px; border-radius: 10px;">
          <strong style="font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.14em; color: var(--gold-deep); display: block; margin-bottom: 4px;">PRODUCTION GEAR & EMULSION</strong>
          <span style="font-size: 13.5px; color: var(--text-body);">${item.gear}</span>
        </div>

        <div class="modal-footer-actions" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-cream); padding-top: 20px;">
          <span style="font-size: 13px; color: var(--text-muted);"><i class="fa-solid fa-lock gold-icon"></i> Full 800+ photo archive available on request</span>
          <a href="#inquiry" onclick="document.getElementById('luxuryModal').classList.remove('active');" class="btn-luxury-solid">Inquire Similar Style</a>
        </div>
      </div>
    `;
    luxuryModal.classList.add('active');

    if (item.framesFolder) {
      const modalCanvas = document.getElementById('modalVideoCanvas');
      const mCtx = modalCanvas ? modalCanvas.getContext('2d') : null;
      const total = item.totalFrames || 300;
      const modalFrames = [];
      let mFrame = 0;
      let mLastTime = 0;
      const mFrameDelay = 1000 / 30;

      for (let i = 1; i <= total; i++) {
        const img = new Image();
        const num = String(i).padStart(3, '0');
        img.src = `${item.framesFolder}/frame_${num}.jpg`;
        modalFrames.push(img);
      }

      function modalLoop(timestamp) {
        if (!luxuryModal.classList.contains('active')) return;
        if (!mLastTime) mLastTime = timestamp;
        const elapsed = timestamp - mLastTime;
        if (elapsed >= mFrameDelay) {
          mLastTime = timestamp - (elapsed % mFrameDelay);
          mFrame = (mFrame + 1) % total;
          const img = modalFrames[mFrame];
          if (img && img.complete && mCtx && modalCanvas) {
            if (modalCanvas.width !== img.naturalWidth && img.naturalWidth > 0) {
              modalCanvas.width = img.naturalWidth;
              modalCanvas.height = img.naturalHeight;
            }
            mCtx.drawImage(img, 0, 0, modalCanvas.width, modalCanvas.height);
          }
        }
        modalAnimationId = requestAnimationFrame(modalLoop);
      }
      modalAnimationId = requestAnimationFrame(modalLoop);
    }
  }


  /* ==========================================================================
     5. INTERACTIVE INVESTMENT CALCULATOR & MULTI-CURRENCY
     ========================================================================== */
  const currencySelect = document.getElementById('currencySelect');
  const calcHoursRange = document.getElementById('calcHoursRange');
  const hoursValLabel = document.getElementById('hoursValLabel');
  const addWelcomeParty = document.getElementById('addWelcomeParty');
  const addDrone = document.getElementById('addDrone');
  const addAnalogFilm = document.getElementById('addAnalogFilm');
  const addHeirloomAlbum = document.getElementById('addHeirloomAlbum');
  const calcTotalAmount = document.getElementById('calcTotalAmount');
  const applyCalcToInquiry = document.getElementById('applyCalcToInquiry');

  // Rates in USD base
  const BASE_RATE_HOURLY = 480; // per hour of photo+video lead team
  const ADDON_WELCOME_USD = 850;
  const ADDON_DRONE_USD = 600;
  const ADDON_ANALOG_USD = 500;
  const ADDON_ALBUM_USD = 1100;

  const CURRENCY_MAP = {
    USD: { symbol: '$', rate: 1.0, formatLocale: 'en-US' },
    EUR: { symbol: '€', rate: 0.92, formatLocale: 'de-DE' },
    GBP: { symbol: '£', rate: 0.79, formatLocale: 'en-GB' },
    INR: { symbol: '₹', rate: 83.2, formatLocale: 'en-IN' }
  };

  let activeCurrency = 'USD';

  function updatePricesAndCalculator() {
    const cur = CURRENCY_MAP[activeCurrency] || CURRENCY_MAP.USD;

    // 1. Update Package Cards Prices
    document.querySelectorAll('.pkg-amount').forEach(el => {
      const usdVal = parseFloat(el.getAttribute(`data-${activeCurrency.toLowerCase()}`) || el.getAttribute('data-usd'));
      el.textContent = usdVal.toLocaleString(cur.formatLocale);
    });

    document.querySelectorAll('.currency-symbol, .calc-currency-symbol').forEach(el => {
      el.textContent = cur.symbol;
    });

    // 2. Update Calculator Total
    const hours = parseInt(calcHoursRange.value, 10);
    if (hoursValLabel) hoursValLabel.textContent = `${hours} Hours`;

    let totalUsd = hours * BASE_RATE_HOURLY;
    if (addWelcomeParty && addWelcomeParty.checked) totalUsd += ADDON_WELCOME_USD;
    if (addDrone && addDrone.checked) totalUsd += ADDON_DRONE_USD;
    if (addAnalogFilm && addAnalogFilm.checked) totalUsd += ADDON_ANALOG_USD;
    if (addHeirloomAlbum && addHeirloomAlbum.checked) totalUsd += ADDON_ALBUM_USD;

    const convertedTotal = Math.round(totalUsd * cur.rate);
    if (calcTotalAmount) {
      calcTotalAmount.textContent = convertedTotal.toLocaleString(cur.formatLocale);
    }
  }

  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      activeCurrency = e.target.value;
      updatePricesAndCalculator();
    });
  }

  [calcHoursRange, addWelcomeParty, addDrone, addAnalogFilm, addHeirloomAlbum].forEach(ctrl => {
    if (ctrl) ctrl.addEventListener('input', updatePricesAndCalculator);
  });

  updatePricesAndCalculator();

  // Package select button triggers
  document.querySelectorAll('[data-select-pkg]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pkgName = e.currentTarget.getAttribute('data-select-pkg');
      const select = document.getElementById('chosenPackage');
      if (select && pkgName) {
        select.value = pkgName;
      }
    });
  });

  // Apply calculator selections to inquiry form
  if (applyCalcToInquiry) {
    applyCalcToInquiry.addEventListener('click', () => {
      const hours = calcHoursRange.value;
      const select = document.getElementById('chosenPackage');
      const details = document.getElementById('weddingDetails');
      const cur = CURRENCY_MAP[activeCurrency];
      
      if (select) select.value = 'Custom Quote';
      
      let addonList = [];
      if (addWelcomeParty.checked) addonList.push('Welcome Party Coverage');
      if (addDrone.checked) addonList.push('4K Drone Aerials');
      if (addAnalogFilm.checked) addonList.push('Analog Film Rolls');
      if (addHeirloomAlbum.checked) addonList.push('Italian Leather Heirloom Album');

      const customNote = `Custom Quote Selection: ${hours} Hours Coverage with ${addonList.join(', ')} (Est: ${cur.symbol}${calcTotalAmount.textContent}).`;
      
      if (details) {
        details.value = details.value ? `${customNote}\n\n${details.value}` : customNote;
      }

      // Smooth scroll to inquiry form
      const inqSec = document.getElementById('inquiry');
      if (inqSec) inqSec.scrollIntoView({ behavior: 'smooth' });

      showToast('Custom quote applied to booking inquiry form!');
    });
  }


  /* ==========================================================================
     5.5. BESPOKE WEDDING COLLECTIONS TAB FILTERING & INTERACTION
     ========================================================================== */
  const investmentTabs = document.querySelectorAll('.investment-tab');
  const packageCards = document.querySelectorAll('.package-card');

  investmentTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      investmentTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-pkg-filter');

      packageCards.forEach(card => {
        const pkgName = card.querySelector('.pkg-name') ? card.querySelector('.pkg-name').textContent : '';
        if (filter === 'all') {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else if (filter === 'intimate' && pkgName.includes('Intimate')) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else if (filter === 'heritage' && pkgName.includes('Heritage')) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else if (filter === 'couture' && pkgName.includes('Couture')) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Clicking on .pkg-tag also triggers the corresponding collection tab
  const packageTags = document.querySelectorAll('.package-card .pkg-tag');
  packageTags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const parentCard = tag.closest('.package-card');
      const nameEl = parentCard ? parentCard.querySelector('.pkg-name') : null;
      const name = nameEl ? nameEl.textContent : '';
      let targetFilter = 'all';
      if (name.includes('Intimate')) targetFilter = 'intimate';
      else if (name.includes('Heritage')) targetFilter = 'heritage';
      else if (name.includes('Couture')) targetFilter = 'couture';

      const matchedTab = document.querySelector(`.investment-tab[data-pkg-filter="${targetFilter}"]`);
      if (matchedTab) {
        matchedTab.click();
      }
    });
  });


  /* ==========================================================================
     6. REVIEWS & TESTIMONIALS SLIDER (2-SECOND AUTO ROTATION)
     ========================================================================== */
  const reviewsData = [
    {
      names: 'Elena & Julian De Luca',
      venue: 'Villa Balbiano, Lake Como, Italy',
      quote: '“Looking back through our gallery and playing our wedding film feels like stepping into a cinematic dream. Their presence was calm, elegant, and unobtrusive. Our guests keep asking which luxury magazine shot our wedding.”',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    {
      names: 'Sophie & Alexandre Mercier',
      venue: 'Château de Tourreau, Provence, France',
      quote: '“The unified harmony between photo and video was the best decision we made. No stress, no missed moments, and the 35mm film scans have an organic warmth that digital simply cannot recreate.”',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    {
      names: 'Maya & Kieran Thorne',
      venue: 'Canaves Oia Epitome, Santorini, Greece',
      quote: '“From our first consultation call to the final hand-bound Italian leather album delivery, the craftsmanship was museum-tier. They captured the true soul of our cliffside vows.”',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop'
    },
    {
      names: 'Ananya & Raghav Singhania',
      venue: 'The Leela Palace, Udaipur, India',
      quote: '“Every sacred Vedic ritual, floral cascade, and candlelit courtyard was documented with cinematic grandeur. BIZEVENTS transformed our wedding into a timeless royal heirloom.”',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop'
    },
    {
      names: 'Charlotte & William Spencer',
      venue: 'Kew Royal Botanic Gardens, London, UK',
      quote: '“An absolute triumph of editorial composition and intimate sound design. Watching our feature film brought tears to our eyes all over again. Unrivaled luxury experience.”',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop'
    }
  ];

  const reviewTrack = document.getElementById('reviewTrack');
  const reviewDots = document.getElementById('reviewDots');
  const prevReviewBtn = document.getElementById('prevReviewBtn');
  const nextReviewBtn = document.getElementById('nextReviewBtn');
  let currentReviewIdx = 0;
  let reviewAutoTimer = null;

  function renderReviews() {
    if (!reviewTrack) return;
    reviewTrack.innerHTML = '';
    if (reviewDots) reviewDots.innerHTML = '';

    reviewsData.forEach((rev, idx) => {
      const card = document.createElement('div');
      card.className = 'review-item-card';
      card.style.display = (idx === currentReviewIdx) ? 'block' : 'none';
      card.innerHTML = `
        <div class="review-stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p class="review-quote">${rev.quote}</p>
        <div class="review-couple-info">
          <img src="${rev.avatar}" alt="${rev.names}" class="couple-avatar" />
          <div>
            <span class="couple-names">${rev.names}</span>
            <span class="couple-venue">${rev.venue}</span>
          </div>
        </div>
      `;
      reviewTrack.appendChild(card);

      if (reviewDots) {
        const dot = document.createElement('div');
        dot.className = `dot ${idx === currentReviewIdx ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          currentReviewIdx = idx;
          renderReviews();
          startReviewAutoTimer();
        });
        reviewDots.appendChild(dot);
      }
    });
  }

  let isStoriesVisible = true;

  function startReviewAutoTimer() {
    stopReviewAutoTimer();
    if (!isStoriesVisible) return;
    reviewAutoTimer = setInterval(() => {
      currentReviewIdx = (currentReviewIdx + 1) % reviewsData.length;
      renderReviews();
    }, 2500); // changes automatically every 2.5 seconds
  }

  function stopReviewAutoTimer() {
    if (reviewAutoTimer) {
      clearInterval(reviewAutoTimer);
      reviewAutoTimer = null;
    }
  }

  if (prevReviewBtn) {
    prevReviewBtn.addEventListener('click', () => {
      currentReviewIdx = (currentReviewIdx - 1 + reviewsData.length) % reviewsData.length;
      renderReviews();
      startReviewAutoTimer();
    });
  }

  if (nextReviewBtn) {
    nextReviewBtn.addEventListener('click', () => {
      currentReviewIdx = (currentReviewIdx + 1) % reviewsData.length;
      renderReviews();
      startReviewAutoTimer();
    });
  }

  renderReviews();

  // Pause timer when #stories section is offscreen
  const storiesSection = document.getElementById('stories');
  if (storiesSection && 'IntersectionObserver' in window) {
    const storiesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isStoriesVisible = true;
          startReviewAutoTimer();
        } else {
          isStoriesVisible = false;
          stopReviewAutoTimer();
        }
      });
    }, { threshold: 0.05 });
    storiesObserver.observe(storiesSection);
  }

  startReviewAutoTimer();

  // Pause timer on hover so user can comfortably read, resume when mouse leaves
  const reviewsContainer = document.querySelector('.reviews-slider-container');
  if (reviewsContainer) {
    reviewsContainer.addEventListener('mouseenter', stopReviewAutoTimer);
    reviewsContainer.addEventListener('mouseleave', startReviewAutoTimer);
  }


  /* ==========================================================================
     7. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });


  /* ==========================================================================
     8. LUXURY INQUIRY FORM SUBMISSION & TOAST
     ========================================================================== */
  const bookingForm = document.getElementById('bookingInquiryForm');
  const newsletterForm = document.getElementById('newsletterForm');
  const luxuryToast = document.getElementById('luxuryToast');
  const toastMsg = document.getElementById('toastMsg');

  function showToast(message) {
    if (!luxuryToast || !toastMsg) return;
    toastMsg.textContent = message;
    luxuryToast.classList.add('show');
    setTimeout(() => {
      luxuryToast.classList.remove('show');
    }, 4500);
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const names = document.getElementById('coupleNames').value;
      const venue = document.getElementById('venueLocation').value;
      const date = document.getElementById('weddingDate').value;
      const email = document.getElementById('clientEmail').value;
      const pkg = document.getElementById('chosenPackage').value;

      showToast(`Thank you, ${names}! Your bespoke inquiry for ${venue} has been received. Our team will contact you at ${email} within 24 hours.`);
      bookingForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('newsletterSubmitBtn');
      const successMsg = document.getElementById('newsletterSuccessMsg');
      
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Dispatched!';
        submitBtn.style.background = '#10B981';
        submitBtn.style.color = '#FFFFFF';
        submitBtn.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.45)';
      }
      if (successMsg) {
        successMsg.style.display = 'inline-flex';
      }
      showToast('Your 48-Page Destination Wedding Planning Guide has been dispatched to your inbox.');

      setTimeout(() => {
        newsletterForm.reset();
        if (submitBtn) {
          submitBtn.innerHTML = '<span class="btn-text">Get Guide</span> <i class="fa-solid fa-arrow-right arrow-anim"></i>';
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          submitBtn.style.boxShadow = '';
        }
        if (successMsg) {
          successMsg.style.display = 'none';
        }
      }, 5000);
    });
  }


  /* ==========================================================================
     9. AMBIENT SOUND SYNTHESIZER (WEB AUDIO API)
     ========================================================================== */
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const soundText = document.getElementById('soundText');
  let audioCtx = null;
  let isSoundActive = false;
  let ambientInterval = null;

  function playHarmonicChime() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C Major Pentatonic Warm Chimes
    const note = notes[Math.floor(Math.random() * notes.length)];
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(note, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 0.3);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.5);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 3.6);
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundActive = !isSoundActive;
      if (isSoundActive) {
        soundIcon.className = 'fa-solid fa-volume-high';
        soundText.textContent = 'Ambient: On';
        soundToggleBtn.style.background = 'rgba(212, 175, 55, 0.35)';
        soundToggleBtn.style.color = '#FFFFFF';
        
        playHarmonicChime();
        ambientInterval = setInterval(playHarmonicChime, 4000);
      } else {
        soundIcon.className = 'fa-solid fa-volume-xmark';
        soundText.textContent = 'Ambient Sound';
        soundToggleBtn.style.background = 'rgba(197, 168, 128, 0.15)';
        soundToggleBtn.style.color = '#EAD09D';
        if (ambientInterval) clearInterval(ambientInterval);
      }
    });
  }


  /* ==========================================================================
     10. LUXURY RESPONSIVE MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    function closeMobileNav() {
      navLinks.classList.remove('nav-open');
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-bars-staggered';
      }
    }

    function openMobileNav() {
      navLinks.classList.add('nav-open');
      menuToggle.classList.add('is-active');
      menuToggle.setAttribute('aria-expanded', 'true');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-xmark';
      }
    }

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('nav-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close mobile menu on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          closeMobileNav();
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        if (navLinks.classList.contains('nav-open')) {
          closeMobileNav();
        }
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('nav-open')) {
        closeMobileNav();
      }
    });

    // Automatically close mobile menu and clean state when resizing to desktop (> 1024px)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && navLinks.classList.contains('nav-open')) {
        closeMobileNav();
      }
    });
  }


  /* ==========================================================================
     11. SILKY-SMOOTH BACK TO TOP SCROLL
     ========================================================================== */
  const backToTopBtn = document.querySelector('.footer-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});

