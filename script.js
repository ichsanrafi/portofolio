/* =========================================================
   ICHSAN RAFISYAH — PROFESSIONAL PORTFOLIO
   Offline-ready. No external JS libraries required.
   ========================================================= */

const experiencePhotos = [
  // PON XXI Aceh–Sumatera Utara 2024
  {
    group: "pon",
    image: "assets/experience/pon-xxi-2024/pon-with-agus-fatoni.jpeg",
    title: "PON XXI Event Documentation",
    meta: "PON XXI Aceh–Sumut 2024 • With Pj Governor Agus Fatoni",
    alt: "Ichsan Rafisyah during PON XXI event documentation with Pj Governor of North Sumatra Agus Fatoni"
  },
  {
    group: "pon",
    image: "assets/experience/pon-xxi-2024/pon-closing-ceremony.jpeg",
    title: "PON XXI Closing Ceremony",
    meta: "20 September 2024 • North Sumatra Main Stadium",
    alt: "VIP invitation and atmosphere at the closing ceremony of PON XXI Aceh Sumut 2024"
  },
  {
    group: "pon",
    image: "assets/experience/pon-xxi-2024/pon-readiness-report-team.jpeg",
    title: "Readiness Report Coordination",
    meta: "PON XXI Aceh–Sumut • Preparation phase",
    alt: "Team documentation during the PON XXI Aceh Sumut readiness report activity"
  },
  {
    group: "pon",
    image: "assets/experience/pon-xxi-2024/pon-readiness-report.jpeg",
    title: "PON XXI Readiness Report",
    meta: "Operational preparation • Aceh–Sumut 2024",
    alt: "Ichsan Rafisyah at a PON XXI Aceh Sumut readiness report activity"
  },
  {
    group: "pon",
    image: "assets/experience/pon-xxi-2024/pon-pb-gathering.jpg",
    title: "PB PON XXI Evening Gathering",
    meta: "PON XXI Aceh–Sumut 2024 • Team & stakeholder gathering",
    alt: "Documentation from a PB PON XXI Aceh Sumut evening gathering"
  },

  // Piala Kemerdekaan 2025 / Indonesia U-17
  {
    group: "u17",
    image: "assets/experience/piala-kemerdekaan-2025/u17-control-room.jpg",
    title: "Live Stadium Technical Operations",
    meta: "Piala Kemerdekaan 2025 • Match-day environment",
    alt: "Stadium control and technical operations setup during Piala Kemerdekaan 2025"
  },
  {
    group: "u17",
    image: "assets/experience/piala-kemerdekaan-2025/u17-field-coordination.jpeg",
    title: "Field Coordination with Indonesia U-17",
    meta: "Piala Kemerdekaan 2025 • Documentation with Coach Nova Arianto",
    alt: "Field coordination documentation during Piala Kemerdekaan 2025 with Indonesia U-17 coaching staff"
  },
  {
    group: "u17",
    image: "assets/experience/piala-kemerdekaan-2025/u17-team-documentation.jpeg",
    title: "Tournament Team Documentation",
    meta: "Piala Kemerdekaan 2025 • Event operations",
    alt: "Event team documentation at Piala Kemerdekaan 2025"
  },
  {
    group: "u17",
    image: "assets/experience/piala-kemerdekaan-2025/u17-press-conference.jpeg",
    title: "Media & Press Activity",
    meta: "Piala Kemerdekaan 2025 • Tournament environment",
    alt: "Press conference setting during Piala Kemerdekaan 2025"
  },
  {
    group: "u17",
    image: "assets/experience/piala-kemerdekaan-2025/u17-matchday-control.jpeg",
    title: "Match-day Control Area",
    meta: "Piala Kemerdekaan 2025 • Stadium operations",
    alt: "Match-day control area overlooking the football pitch during Piala Kemerdekaan 2025"
  },
  {
    group: "u17",
    image: "assets/experience/piala-kemerdekaan-2025/u17-post-event.jpeg",
    title: "Post-event Field Documentation",
    meta: "Piala Kemerdekaan 2025 • Closing activities",
    alt: "Post-event field documentation during Piala Kemerdekaan 2025"
  },
  {
    group: "u17",
    image: "assets/experience/piala-kemerdekaan-2025/u17-event-team.jpeg",
    title: "Event Team Collaboration",
    meta: "Piala Kemerdekaan 2025 • Operations team",
    alt: "Event operations team documentation on the stadium field during Piala Kemerdekaan 2025"
  },

  // 17th SEA Youth U18 & U20 Athletics Championships
  {
    group: "athletics",
    image: "assets/experience/sea-youth-athletics-2025/sea-control-desk.jpg",
    title: "Timing System Operations",
    meta: "SEA Youth U18 & U20 • Technical desk",
    alt: "Timing system operations desk during the SEA Youth U18 and U20 Athletics Championships"
  },
  {
    group: "athletics",
    image: "assets/experience/sea-youth-athletics-2025/sea-team-photo.jpg",
    title: "Technical Team Documentation",
    meta: "SEA Youth U18 & U20 • Team collaboration",
    alt: "Technical team documentation during the SEA Youth U18 and U20 Athletics Championships"
  },
  {
    group: "athletics",
    image: "assets/experience/sea-youth-athletics-2025/sea-athlete-photo.jpg",
    title: "Athlete-side Support",
    meta: "SEA Youth U18 & U20 • Field environment",
    alt: "On-field documentation with an athlete during the SEA Youth U18 and U20 Athletics Championships"
  },
  {
    group: "athletics",
    image: "assets/experience/sea-youth-athletics-2025/sea-theodolite-setup.jpg",
    title: "Theodolite & Measurement Setup",
    meta: "SEA Youth U18 & U20 • Equipment setup",
    alt: "Theodolite and measurement equipment setup during the SEA Youth U18 and U20 Athletics Championships"
  },
  {
    group: "athletics",
    image: "assets/experience/sea-youth-athletics-2025/sea-distance-measurement-system.jpg",
    title: "Distance Measurement Interface",
    meta: "SEA Youth U18 & U20 • Result precision",
    alt: "Distance measurement system interface used during the SEA Youth U18 and U20 Athletics Championships"
  },
  {
    group: "athletics",
    image: "assets/experience/sea-youth-athletics-2025/sea-technical-briefing.jpg",
    title: "Technical Coordination",
    meta: "SEA Youth U18 & U20 • On-site briefing",
    alt: "On-site technical coordination during the SEA Youth U18 and U20 Athletics Championships"
  },

  // Other professional documentation
  {
    group: "other",
    image: "assets/experience/stadium-event.jpg",
    title: "Professional Event Assignment",
    meta: "Field experience • Documentation",
    alt: "Ichsan Rafisyah during a professional event assignment"
  }
];

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const scrollProgress = document.getElementById('scrollProgress');
const gallery = document.getElementById('experienceGallery');
const galleryFilters = document.getElementById('galleryFilters');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxClose = document.getElementById('lightboxClose');
const introLoader = document.getElementById('introLoader');

/* ---------- Intro / initial state ---------- */
window.addEventListener('load', () => {
  window.setTimeout(() => {
    introLoader?.classList.add('is-hidden');
    document.body.classList.add('page-ready');
  }, 620);
});

/* ---------- Hero role rotator ---------- */
const roleRotator = document.getElementById('roleRotator');
if (roleRotator && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const words = ['Event Technology', 'Information Systems', 'Project Coordination', 'Technical Operations'];
  let index = 0;
  window.setInterval(() => {
    roleRotator.classList.add('swap-out');
    window.setTimeout(() => {
      index = (index + 1) % words.length;
      roleRotator.textContent = words[index];
      roleRotator.classList.remove('swap-out');
      roleRotator.classList.add('swap-in');
      window.setTimeout(() => roleRotator.classList.remove('swap-in'), 420);
    }, 240);
  }, 2600);
}

/* ---------- Scroll UI ---------- */
function updateScrollUI() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (y / max) * 100 : 0;
  header?.classList.toggle('scrolled', y > 10);
  if (scrollProgress) scrollProgress.style.width = `${progress}%`;
  document.documentElement.style.setProperty('--scroll-y', `${y}px`);
}

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

/* ---------- Mobile navigation ---------- */
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' });

document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));

/* ---------- Active navigation section ---------- */
const sections = document.querySelectorAll('main section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.remove('active'));
    const active = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { rootMargin: '-44% 0px -49% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

/* ---------- Animated counters ---------- */
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    const duration = 1300;
    const startTime = performance.now();

    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(target * eased).toLocaleString('en-US') + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    observer.unobserve(el);
  });
}, { threshold: .65 });

document.querySelectorAll('.count-up').forEach(counter => counterObserver.observe(counter));

/* ---------- Filterable visual experience gallery ---------- */
let activeGalleryFilter = 'all';

function renderGallery(filter = 'all') {
  activeGalleryFilter = filter;
  const filtered = filter === 'all'
    ? experiencePhotos
    : experiencePhotos.filter(item => item.group === filter);

  gallery.innerHTML = filtered.map((item, index) => `
    <article class="gallery-card reveal gallery-photo" tabindex="0"
      data-group="${item.group}" data-image="${item.image}" data-title="${item.title}" data-meta="${item.meta}" data-alt="${item.alt}">
      <img src="${item.image}" alt="${item.alt}" loading="lazy" />
      <div class="gallery-shade"></div>
      <span class="gallery-project-chip">${item.group === 'pon' ? 'PON XXI' : item.group === 'u17' ? 'U-17 CUP' : item.group === 'athletics' ? 'ATHLETICS' : 'FIELD'}</span>
      <span class="gallery-zoom">↗</span>
      <div class="gallery-caption">
        <strong>${item.title}</strong>
        <span>${item.meta}</span>
      </div>
    </article>
  `).join('');

  gallery.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));
  gallery.querySelectorAll('.gallery-photo').forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(card);
      }
    });
  });

  attachCardSpotlight(gallery.querySelectorAll('.gallery-card'));
}

galleryFilters?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  galleryFilters.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  gallery.classList.add('is-switching');
  window.setTimeout(() => {
    renderGallery(button.dataset.filter);
    gallery.classList.remove('is-switching');
  }, 170);
});

/* ---------- Shared lightbox ---------- */
function openLightbox(card) {
  lightboxImage.src = card.dataset.image;
  lightboxImage.alt = card.dataset.alt || card.dataset.title;
  lightboxTitle.textContent = card.dataset.title;
  lightboxMeta.textContent = card.dataset.meta;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

renderGallery();

document.querySelectorAll('.js-case-photo').forEach(card => {
  card.addEventListener('click', () => openLightbox(card));
});

/* ---------- Premium pointer interactions ---------- */
function attachCardSpotlight(elements) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  elements.forEach(card => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
    });
  });
}

attachCardSpotlight(document.querySelectorAll('.project-card, .coverage-card, .verified-link-grid a, .case-media, .mini-media, .skill-card, .education-card'));

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(1100px) rotateX(${y * -4.5}deg) rotateY(${x * 5.5}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  window.addEventListener('pointermove', event => {
    document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
    document.documentElement.style.setProperty('--my', `${event.clientY}px`);
  }, { passive: true });

  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', event => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * .075}px, ${y * .075}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ---------- Lightweight scroll parallax ---------- */
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const parallaxTargets = [...document.querySelectorAll('.case-study-head h2, .portrait-shell')];
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      parallaxTargets.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const offset = (rect.top - window.innerHeight / 2) * (i === 0 ? -0.015 : -0.008);
        el.style.setProperty('--parallax-y', `${offset}px`);
      });
      ticking = false;
    });
  }, { passive: true });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
