// ============================================
//  CINEVERSE - Premium Movie Booking System
//  script.js - Shared JavaScript
// ============================================

// ---- Data ----
const MOVIES = [
  {
    id: 1,
    title: "ECLIPSE RISING",
    genre: ["Sci-Fi", "Action"],
    rating: 8.7,
    duration: "2h 38m",
    year: 2024,
    language: "English",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80",
    banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&q=80",
    description: "In a dying universe, a rogue scientist discovers a fractured dimension where gravity bends time itself. As civilizations collapse, she must choose between saving her world and preserving the very fabric of existence.",
    cast: [
      { name: "Aria Storm", role: "Dr. Kira Voss", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" },
      { name: "James Riven", role: "Commander Ellis", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
      { name: "Nora Hale", role: "Oracle AI", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" },
      { name: "Derek Cho", role: "General Vance", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" }
    ],
    showtimes: [
      { time: "10:30 AM", type: "4DX", available: 40 },
      { time: "02:00 PM", type: "IMAX", available: 35 },
      { time: "05:15 PM", type: "3D", available: 50 },
      { time: "08:45 PM", type: "IMAX", available: 20 },
      { time: "11:30 PM", type: "2D", available: 60 }
    ],
    price: { standard: 320, premium: 480 }
  },
  {
    id: 2,
    title: "NOIR CITY",
    genre: ["Thriller", "Mystery"],
    rating: 9.1,
    duration: "2h 12m",
    year: 2024,
    language: "English",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80",
    banner: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80",
    description: "A disgraced detective is pulled back into the shadows of a city drowning in corruption. Every clue leads deeper into a conspiracy that threatens to erase his past—and his future.",
    cast: [
      { name: "Marcus Lane", role: "Det. Harlan", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
      { name: "Sienna Black", role: "Elara Vance", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
      { name: "Tomas Kray", role: "The Architect", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&q=80" },
      { name: "Lyra Chen", role: "Agent Mills", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" }
    ],
    showtimes: [
      { time: "11:00 AM", type: "2D", available: 55 },
      { time: "03:30 PM", type: "IMAX", available: 30 },
      { time: "07:00 PM", type: "3D", available: 45 },
      { time: "10:30 PM", type: "2D", available: 70 }
    ],
    price: { standard: 280, premium: 420 }
  },
  {
    id: 3,
    title: "PHANTOM TIDE",
    genre: ["Horror", "Supernatural"],
    rating: 7.9,
    duration: "1h 58m",
    year: 2024,
    language: "English",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
    banner: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1600&q=80",
    description: "A coastal town begins disappearing into the sea—not from storms, but from something ancient stirring below. One family holds the key to a ritual forgotten for centuries.",
    cast: [
      { name: "Clara Moon", role: "Mae Hollis", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80" },
      { name: "Ethan Ward", role: "Dr. Reeves", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=80" }
    ],
    showtimes: [
      { time: "12:00 PM", type: "2D", available: 60 },
      { time: "06:00 PM", type: "3D", available: 40 },
      { time: "09:30 PM", type: "2D", available: 75 }
    ],
    price: { standard: 250, premium: 380 }
  },
  {
    id: 4,
    title: "STEEL NEXUS",
    genre: ["Action", "Adventure"],
    rating: 8.3,
    duration: "2h 45m",
    year: 2024,
    language: "English",
    poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80",
    banner: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=1600&q=80",
    description: "The last alliance of humanity faces extinction as mega-machines rise in the ruins of civilization. A war-torn engineer must reactivate the only weapon capable of ending the siege.",
    cast: [
      { name: "Rex Thorne", role: "Capt. Dax", avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80" },
      { name: "Zara Flux", role: "Engineer Lys", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" }
    ],
    showtimes: [
      { time: "10:00 AM", type: "4DX", available: 35 },
      { time: "01:30 PM", type: "IMAX", available: 28 },
      { time: "05:00 PM", type: "IMAX", available: 22 },
      { time: "09:00 PM", type: "3D", available: 50 }
    ],
    price: { standard: 350, premium: 520 }
  },
  {
    id: 5,
    title: "CRIMSON DAWN",
    genre: ["Drama", "Romance"],
    rating: 8.5,
    duration: "2h 5m",
    year: 2024,
    language: "English",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
    banner: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=1600&q=80",
    description: "Across war-torn continents, two artists communicate only through paintings they leave in abandoned galleries. Their art outlasts them—but can their love?",
    cast: [
      { name: "Sofia Veil", role: "Aurelie", avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=100&q=80" },
      { name: "Luca Marsh", role: "Dorian", avatar: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=100&q=80" }
    ],
    showtimes: [
      { time: "11:30 AM", type: "2D", available: 65 },
      { time: "03:00 PM", type: "2D", available: 58 },
      { time: "07:30 PM", type: "3D", available: 42 }
    ],
    price: { standard: 240, premium: 360 }
  },
  {
    id: 6,
    title: "VOID WALKER",
    genre: ["Sci-Fi", "Horror"],
    rating: 7.6,
    duration: "2h 20m",
    year: 2024,
    language: "English",
    poster: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&q=80",
    banner: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=80",
    description: "Stranded on a generation ship without power, the crew discovers the darkness between stars is neither empty nor quiet. Something followed them from the last colony.",
    cast: [
      { name: "Nova Blaze", role: "Commander Ash", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80" },
      { name: "Owen Drake", role: "Engineer Cole", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" }
    ],
    showtimes: [
      { time: "12:30 PM", type: "2D", available: 70 },
      { time: "04:00 PM", type: "3D", available: 45 },
      { time: "08:00 PM", type: "IMAX", available: 30 },
      { time: "11:00 PM", type: "2D", available: 80 }
    ],
    price: { standard: 300, premium: 450 }
  },
  {
    id: 7,
    title: "SOLAR REIGN",
    genre: ["Action", "Sci-Fi"],
    rating: 8.9,
    duration: "2h 52m",
    year: 2024,
    language: "English",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    banner: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1600&q=80",
    description: "A solar empire crumbles under a rebellion ignited by stolen suns. The last heir of the cosmic throne must master the power her ancestors weaponized against the stars.",
    cast: [
      { name: "Elena Ray", role: "Princess Solara", avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80" },
      { name: "Kai Storm", role: "Rebel Voss", avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=100&q=80" }
    ],
    showtimes: [
      { time: "10:30 AM", type: "4DX", available: 38 },
      { time: "02:30 PM", type: "IMAX", available: 25 },
      { time: "06:30 PM", type: "IMAX", available: 18 },
      { time: "10:00 PM", type: "3D", available: 55 }
    ],
    price: { standard: 380, premium: 560 }
  },
  {
    id: 8,
    title: "THE LAST MIRROR",
    genre: ["Psychological", "Thriller"],
    rating: 9.3,
    duration: "2h 18m",
    year: 2024,
    language: "English",
    poster: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80",
    banner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80",
    description: "A renowned therapist realizes every patient she's ever treated shares an identical nightmare—one she herself has been dreaming for years. The truth fractures the boundary between mind and reality.",
    cast: [
      { name: "Mara West", role: "Dr. Elise Cross", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&q=80" },
      { name: "Adrian Hart", role: "Patient Zero", avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=100&q=80" }
    ],
    showtimes: [
      { time: "11:00 AM", type: "2D", available: 50 },
      { time: "03:30 PM", type: "3D", available: 38 },
      { time: "07:00 PM", type: "IMAX", available: 22 },
      { time: "10:30 PM", type: "2D", available: 65 }
    ],
    price: { standard: 300, premium: 460 }
  }
];

// ---- Particles ----
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240,180,41,${p.alpha})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ---- Loading Screen ----
function initLoading() {
  const screen = document.querySelector('.loading-screen');
  if (!screen) return;
  setTimeout(() => screen.classList.add('hidden'), 1800);
}

// ---- Ripple Effect ----
function addRipple(btn) {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

function initRipples() {
  document.querySelectorAll('.btn').forEach(addRipple);
}

// ---- Scroll Reveal ----
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ---- Dark/Light Toggle ----
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  btn.innerHTML = saved === 'dark' ? '☀️' : '🌙';

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.innerHTML = next === 'dark' ? '☀️' : '🌙';
  });
}

// ---- Hamburger ----
function initHamburger() {
  const burger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!burger || !navLinks) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
}

// ---- Wishlist ----
function initWishlist() {
  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (wishlist.includes(id)) btn.classList.add('active');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (wishlist.includes(id)) {
        wishlist = wishlist.filter(x => x !== id);
        btn.classList.remove('active');
        showToast('Removed from wishlist', 'info');
      } else {
        wishlist.push(id);
        btn.classList.add('active');
        showToast('Added to wishlist! ❤️', 'success');
      }
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    });
  });
}

// ---- Toast ----
function showToast(msg, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ---- Page Transition ----
function navigateTo(url) {
  const overlay = document.getElementById('page-transition');
  if (overlay) {
    overlay.classList.add('active');
    setTimeout(() => { window.location.href = url; }, 400);
  } else {
    window.location.href = url;
  }
}

// ---- Form Validation ----
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone.replace(/\D/g, ''));
}

function showFieldError(input, message) {
  const group = input.closest('.form-group');
  if (!group) return;
  group.classList.add('has-error');
  input.classList.add('error');
  let errEl = group.querySelector('.form-error');
  if (!errEl) {
    errEl = document.createElement('span');
    errEl.className = 'form-error';
    group.appendChild(errEl);
  }
  errEl.textContent = message;
  errEl.style.display = 'block';
}

function clearFieldError(input) {
  const group = input.closest('.form-group');
  if (!group) return;
  group.classList.remove('has-error');
  input.classList.remove('error');
  input.classList.add('success');
  const errEl = group.querySelector('.form-error');
  if (errEl) errEl.style.display = 'none';
}

// ---- Auth Check ----
function checkAuth() {
  const user = JSON.parse(localStorage.getItem('cineverse_user') || 'null');
  return user;
}

function requireAuth() {
  if (!checkAuth()) {
    showToast('Please login to continue', 'error');
    setTimeout(() => navigateTo('login.html'), 1000);
    return false;
  }
  return true;
}

// ---- Generate Booking ID ----
function generateBookingId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return 'CV-' + Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// ---- QR Code Generator (visual only) ----
function generateQRCode(container, data) {
  // Simple visual QR-like pattern
  const cells = Array.from({ length: 49 }, () => Math.random() > 0.5);
  // Force corners
  [0,1,2,3,4,5,6, 7,14, 42, 43,44,45,46,47,48].forEach(i => cells[i] = true);
  container.innerHTML = '';
  cells.forEach(filled => {
    const cell = document.createElement('div');
    cell.className = 'qr-cell' + (filled ? '' : ' white');
    container.appendChild(cell);
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initLoading();
  initRipples();
  initScrollReveal();
  initThemeToggle();
  initHamburger();
});