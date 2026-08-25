/**
 * KASARYAR // ITEMMANIA-INSPIRED PREMIUM GAME TOP-UP STOREFRONT
 * Medium-Sized Game Cards & Itemmania Exchange Slider
 */

const HERO_BANNERS = [
  {
    id: "mlbb-event",
    gameId: "mobile-legends",
    title: "MLBB 50% EXTRA DIAMONDS",
    subtitle: "DOUBLE DIAMOND REFILL EVENT LIVE NOW",
    cta: "TOP UP MLBB",
    badge: "HOT EVENT",
    img: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='400' viewBox='0 0 1200 400'><defs><linearGradient id='bg1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23130727'/><stop offset='50%' stop-color='%232a0845'/><stop offset='100%' stop-color='%2364159c'/></linearGradient></defs><rect width='1200' height='400' fill='url(%23bg1)'/><polygon points='800,0 1200,0 1200,400 700,400' fill='%2300f0ff' opacity='0.12'/><polygon points='950,40 1120,130 1120,310 950,390 780,310 780,130' fill='none' stroke='%23ffb700' stroke-width='6'/><polygon points='950,80 1060,150 950,280 840,150' fill='%2300f0ff' opacity='0.85'/><text x='70' y='140' font-family='Inter, sans-serif' font-weight='800' font-size='44' fill='%2300f0ff'>KASARYAR TOP-UP</text><text x='70' y='210' font-family='Inter, sans-serif' font-weight='900' font-size='56' fill='%23ffffff'>MOBILE LEGENDS 50% BONUS 💎</text><text x='70' y='265' font-family='Inter, sans-serif' font-weight='600' font-size='24' fill='%23ffea00'>Instant Player ID Refill in 2 Seconds</text></svg>`
  },
  {
    id: "pubg-uc-sale",
    gameId: "pubg-mobile",
    title: "PUBG MOBILE ROYALE PASS",
    subtitle: "GET BONUS UC + EXCLUSIVE PASS REWARDS",
    cta: "REFILL UC",
    badge: "PROMO 10% OFF",
    img: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='400' viewBox='0 0 1200 400'><defs><linearGradient id='bg2' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%230f1702'/><stop offset='50%' stop-color='%23273d04'/><stop offset='100%' stop-color='%23486b08'/></linearGradient></defs><rect width='1200' height='400' fill='url(%23bg2)'/><circle cx='1030' cy='200' r='115' fill='none' stroke='%23ffb700' stroke-width='8'/><rect x='950' y='165' width='160' height='70' rx='14' fill='%23ffea00'/><text x='1030' y='212' font-family='Inter, sans-serif' font-weight='900' font-size='36' fill='%23000000' text-anchor='middle'>UC 💵</text><text x='70' y='135' font-family='Inter, sans-serif' font-weight='800' font-size='42' fill='%23ffea00'>KASARYAR STORE</text><text x='70' y='205' font-family='Inter, sans-serif' font-weight='900' font-size='46' fill='%23ffffff'>PUBG MOBILE ROYALE PASS A9</text><text x='70' y='265' font-family='Inter, sans-serif' font-weight='600' font-size='24' fill='%2300f0ff'>600 + 60 Bonus UC Instant Delivery</text></svg>`
  },
  {
    id: "genshin-crystals",
    gameId: "genshin-impact",
    title: "GENSHIN CRYSTAL RESET",
    subtitle: "DOUBLE GENESIS CRYSTALS ON FIRST TOP-UP",
    cta: "TOP UP CRYSTALS",
    badge: "OFFICIAL SYNC",
    img: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='400' viewBox='0 0 1200 400'><defs><linearGradient id='bg3' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23021424'/><stop offset='50%' stop-color='%2308365c'/><stop offset='100%' stop-color='%230f5b96'/></linearGradient></defs><rect width='1200' height='400' fill='url(%23bg3)'/><polygon points='950,40 1060,200 950,360 840,200' fill='%2300f0ff'/><polygon points='950,75 1020,200 950,325 880,200' fill='%23ffffff' opacity='0.85'/><text x='70' y='140' font-family='Inter, sans-serif' font-weight='800' font-size='44' fill='%2300f0ff'>KASARYAR NEXUS</text><text x='70' y='210' font-family='Inter, sans-serif' font-weight='900' font-size='56' fill='%23ffffff'>GENSHIN WELKIN %26 CRYSTALS 🔮</text><text x='70' y='265' font-family='Inter, sans-serif' font-weight='600' font-size='24' fill='%23ffea00'>100% Official UID Mail Direct Credit</text></svg>`
  }
];

const GAME_POSTER_SVGS = {
  "mobile-legends": `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='g1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%232b1055'/><stop offset='100%' stop-color='%237510a3'/></linearGradient></defs><rect width='300' height='300' fill='url(%23g1)'/><polygon points='150,40 230,100 230,200 150,260 70,200 70,100' fill='none' stroke='%23ffb700' stroke-width='6'/><polygon points='150,70 190,120 150,220 110,120' fill='%2300f0ff' opacity='0.9'/><text x='150' y='242' font-family='Inter, sans-serif' font-weight='900' font-size='22' fill='%23ffffff' text-anchor='middle'>MLBB</text></svg>`,
  "pubg-mobile": `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='g2' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%231a2601'/><stop offset='100%' stop-color='%234a5d09'/></linearGradient></defs><rect width='300' height='300' fill='url(%23g2)'/><circle cx='150' cy='120' r='50' fill='none' stroke='%23ffb700' stroke-width='8'/><rect x='110' y='105' width='80' height='30' rx='6' fill='%23ffea00'/><text x='150' y='126' font-family='Inter, sans-serif' font-weight='900' font-size='18' fill='%23000000' text-anchor='middle'>UC 💵</text><text x='150' y='240' font-family='Inter, sans-serif' font-weight='900' font-size='20' fill='%23ffffff' text-anchor='middle'>PUBG MOBILE</text></svg>`,
  "free-fire": `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='g3' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23500505'/><stop offset='100%' stop-color='%23a81212'/></linearGradient></defs><rect width='300' height='300' fill='url(%23g3)'/><path d='M150,40 Q190,110 150,180 Q110,110 150,40 Z' fill='%23ff0055'/><path d='M150,70 Q170,120 150,160 Q130,120 150,70 Z' fill='%23ffea00'/><text x='150' y='240' font-family='Inter, sans-serif' font-weight='900' font-size='20' fill='%23ffffff' text-anchor='middle'>FREE FIRE MAX</text></svg>`,
  "genshin-impact": `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='g4' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23052440'/><stop offset='100%' stop-color='%230b558c'/></linearGradient></defs><rect width='300' height='300' fill='url(%23g4)'/><polygon points='150,40 195,115 150,200 105,115' fill='%2300f0ff'/><polygon points='150,65 180,115 150,175 120,115' fill='%23ffffff' opacity='0.8'/><text x='150' y='240' font-family='Inter, sans-serif' font-weight='900' font-size='18' fill='%23ffffff' text-anchor='middle'>GENSHIN IMPACT</text></svg>`,
  "valorant": `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='g5' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23380813'/><stop offset='100%' stop-color='%238a0f25'/></linearGradient></defs><rect width='300' height='300' fill='url(%23g5)'/><path d='M80,70 L140,70 L180,170 L120,170 Z' fill='%23ff0055'/><path d='M190,70 L220,70 L170,170 L140,170 Z' fill='%23ffffff'/><text x='150' y='240' font-family='Inter, sans-serif' font-weight='900' font-size='22' fill='%23ffffff' text-anchor='middle'>VALORANT</text></svg>`,
  "roblox": `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='g6' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23053616'/><stop offset='100%' stop-color='%230d7c35'/></linearGradient></defs><rect width='300' height='300' fill='url(%23g6)'/><rect x='100' y='70' width='100' height='100' rx='14' fill='%2300e676' transform='rotate(15 150 120)'/><rect x='130' y='100' width='40' height='40' rx='6' fill='%23053616' transform='rotate(15 150 120)'/><text x='150' y='240' font-family='Inter, sans-serif' font-weight='900' font-size='22' fill='%23ffffff' text-anchor='middle'>ROBLOX</text></svg>`,
  "steam-wallet": `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='g7' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%230c1c38'/><stop offset='100%' stop-color='%23173d78'/></linearGradient></defs><rect width='300' height='300' fill='url(%23g7)'/><circle cx='170' cy='90' r='30' fill='none' stroke='%2300f0ff' stroke-width='8'/><circle cx='105' cy='155' r='22' fill='none' stroke='%2300f0ff' stroke-width='8'/><line x1='135' y1='125' x2='170' y2='90' stroke='%2300f0ff' stroke-width='8'/><text x='150' y='240' font-family='Inter, sans-serif' font-weight='900' font-size='19' fill='%23ffffff' text-anchor='middle'>STEAM WALLET</text></svg>`
};

const TOPUP_GAMES_DATA = [
  {
    id: "mobile-legends",
    title: "Mobile Legends: Bang Bang",
    publisher: "Moonton",
    category: "MOBA",
    platform: "Mobile",
    currencyName: "Diamonds 💎",
    badge: "HOT",
    bestseller: true,
    requiresZoneId: true,
    coverImg: GAME_POSTER_SVGS["mobile-legends"],
    description: "Instant MLBB Diamonds refill.",
    sampleIgn: "Kasaryar_MLBB",
    packages: [
      { id: "ml-50", name: "50 Diamonds", amount: 50, bonus: null, price: 1400, priceUsd: 0.69, tag: null },
      { id: "ml-250", name: "250 + 25 Bonus Diamonds", amount: 275, bonus: "+25 Bonus", price: 6800, priceUsd: 3.29, tag: "POPULAR" },
      { id: "ml-500", name: "500 + 65 Bonus Diamonds", amount: 565, bonus: "+65 Bonus", price: 13500, priceUsd: 6.49, tag: "BEST VALUE" },
      { id: "ml-1000", name: "1,000 + 150 Bonus Diamonds", amount: 1150, bonus: "+150 Bonus", price: 26500, priceUsd: 12.99, tag: "MEGA PACK" },
      { id: "ml-weekly", name: "Weekly Diamond Pass", amount: 1, bonus: "210 Diamonds Total", price: 5200, priceUsd: 2.49, tag: "SPECIAL" }
    ]
  },
  {
    id: "pubg-mobile",
    title: "PUBG Mobile",
    publisher: "Tencent / Krafton",
    category: "Battle Royale",
    platform: "Mobile",
    currencyName: "UC 💵",
    badge: "HOT",
    bestseller: true,
    requiresZoneId: false,
    coverImg: GAME_POSTER_SVGS["pubg-mobile"],
    description: "Official PUBG Mobile UC & Royale Pass.",
    sampleIgn: "Kasaryar_UC",
    packages: [
      { id: "pubg-60", name: "60 UC", amount: 60, bonus: null, price: 2200, priceUsd: 0.99, tag: null },
      { id: "pubg-300", name: "300 + 25 Extra UC", amount: 325, bonus: "+25 Bonus UC", price: 10500, priceUsd: 4.99, tag: "POPULAR" },
      { id: "pubg-600", name: "600 + 60 Extra UC", amount: 660, bonus: "+60 Bonus UC", price: 21000, priceUsd: 9.99, tag: "BEST VALUE" },
      { id: "pubg-rp", name: "Royale Pass Month", amount: 300, bonus: "Pass Unlock", price: 10500, priceUsd: 4.99, tag: "PASS" }
    ]
  },
  {
    id: "free-fire",
    title: "Free Fire MAX",
    publisher: "Garena",
    category: "Battle Royale",
    platform: "Mobile",
    currencyName: "Diamonds 💎",
    badge: "EVENT",
    bestseller: true,
    requiresZoneId: false,
    coverImg: GAME_POSTER_SVGS["free-fire"],
    description: "Free Fire Player ID diamond refill.",
    sampleIgn: "Kasaryar_FF",
    packages: [
      { id: "ff-100", name: "100 + 10 Bonus Diamonds", amount: 110, bonus: "+10 Bonus", price: 2500, priceUsd: 1.10, tag: null },
      { id: "ff-310", name: "310 + 31 Bonus Diamonds", amount: 341, bonus: "+31 Bonus", price: 7500, priceUsd: 3.49, tag: "POPULAR" },
      { id: "ff-520", name: "520 + 52 Bonus Diamonds", amount: 572, bonus: "+52 Bonus", price: 12000, priceUsd: 5.99, tag: "BEST VALUE" }
    ]
  },
  {
    id: "genshin-impact",
    title: "Genshin Impact",
    publisher: "HoYoverse",
    category: "Gacha / RPG",
    platform: "Universal",
    currencyName: "Crystals 🔮",
    badge: "OFFICIAL",
    bestseller: true,
    requiresZoneId: true,
    coverImg: GAME_POSTER_SVGS["genshin-impact"],
    description: "Genshin Welkin & Crystals UID refill.",
    sampleIgn: "Kasaryar_GI",
    packages: [
      { id: "gi-welkin", name: "Blessing of the Welkin Moon", amount: 3000, bonus: "300 Crystals + 2700 Primo", price: 12500, priceUsd: 4.99, tag: "BESTSELLER" },
      { id: "gi-60", name: "60 Genesis Crystals", amount: 60, bonus: null, price: 2500, priceUsd: 0.99, tag: null },
      { id: "gi-300", name: "300 + 30 Extra Crystals", amount: 330, bonus: "+30 Bonus", price: 12500, priceUsd: 4.99, tag: null }
    ]
  },
  {
    id: "valorant",
    title: "Valorant",
    publisher: "Riot Games",
    category: "Tactical FPS",
    platform: "PC",
    currencyName: "VP Points 🎯",
    badge: "PIN",
    bestseller: true,
    requiresZoneId: false,
    coverImg: GAME_POSTER_SVGS["valorant"],
    description: "Riot VP refill for skin bundles.",
    sampleIgn: "Kasaryar_Val",
    packages: [
      { id: "val-475", name: "475 VP", amount: 475, bonus: null, price: 12500, priceUsd: 4.99, tag: null },
      { id: "val-1000", name: "1,000 VP", amount: 1000, bonus: null, price: 25000, priceUsd: 9.99, tag: "POPULAR" }
    ]
  },
  {
    id: "roblox",
    title: "Roblox",
    publisher: "Roblox Corp",
    category: "Gacha / RPG",
    platform: "Universal",
    currencyName: "Robux 🟩",
    badge: "CODE",
    bestseller: false,
    requiresZoneId: false,
    coverImg: GAME_POSTER_SVGS["roblox"],
    description: "Instant Roblox Robux refill.",
    sampleIgn: "Kasaryar_Robux",
    packages: [
      { id: "rbx-400", name: "400 Robux", amount: 400, bonus: null, price: 12500, priceUsd: 4.99, tag: null },
      { id: "rbx-800", name: "800 Robux", amount: 800, bonus: null, price: 25000, priceUsd: 9.99, tag: "POPULAR" }
    ]
  },
  {
    id: "steam-wallet",
    title: "Steam Wallet Card",
    publisher: "Valve",
    category: "Gift Cards",
    platform: "PC",
    currencyName: "Funds 🎮",
    badge: "GLOBAL",
    bestseller: true,
    requiresZoneId: false,
    coverImg: GAME_POSTER_SVGS["steam-wallet"],
    description: "Digital Steam Wallet card code.",
    sampleIgn: "Kasaryar_Steam",
    packages: [
      { id: "steam-5", name: "$5 Steam Card", amount: 5, bonus: "Global Code", price: 13500, priceUsd: 5.00, tag: null },
      { id: "steam-10", name: "$10 Steam Card", amount: 10, bonus: "Global Code", price: 27000, priceUsd: 10.00, tag: "POPULAR" }
    ]
  }
];

const PAYMENT_METHODS = [
  { id: "kbzpay", name: "KBZPay", icon: "fa-solid fa-wallet", fee: "0%", color: "#005bb5", desc: "Instant Scan Pay", accountName: "KASARYAR TOPUP", accountNo: "09970123456" },
  { id: "wavepay", name: "WavePay", icon: "fa-solid fa-mobile-screen-button", fee: "0%", color: "#ffcb05", desc: "Direct Wave QR", accountName: "KASARYAR PAY", accountNo: "09970123456" },
  { id: "ayapay", name: "AYA Pay", icon: "fa-solid fa-credit-card", fee: "0%", color: "#d32f2f", desc: "AYA QR Pay", accountName: "KASARYAR ENT", accountNo: "09970123456" },
  { id: "card", name: "Visa / Card", icon: "fa-brands fa-cc-visa", fee: "1.5%", color: "#1a1f71", desc: "Credit/Debit Card", accountName: "KASARYAR GLOBAL", accountNo: "4111-2222-3333-4444" },
  { id: "crypto", name: "Crypto USDT", icon: "fa-brands fa-bitcoin", fee: "0%", color: "#f7931a", desc: "TRC20 USDT QR", accountName: "KASARYAR VAULT", accountNo: "TYX98k7LpQzM3n1b2v4x5c6v7b8n9m0q1w" }
];

let state = {
  cart: JSON.parse(localStorage.getItem('kasaryar_topup_cart')) || [],
  recentOrders: JSON.parse(localStorage.getItem('kasaryar_orders')) || [],
  activeCategory: 'all',
  searchTerm: '',

  currentHeroSlide: 0,
  heroAutoplayTimer: null,

  selectedGame: null,
  selectedPackage: null,
  verifiedIgn: null,
  userIdInput: '',
  zoneIdInput: '',
  selectedPayment: 'kbzpay',

  currentPendingOrder: null,
  qrTimerInterval: null,
  welcomeTimerInterval: null
};

function saveCart() {
  localStorage.setItem('kasaryar_topup_cart', JSON.stringify(state.cart));
  updateCartBadge();
}

function saveOrders() {
  localStorage.setItem('kasaryar_orders', JSON.stringify(state.recentOrders));
}

// THEME MANAGEMENT (LIGHT & DARK MODE)
function initTheme() {
  const savedTheme = localStorage.getItem('kasaryar_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  setTheme(savedTheme, false);
}

function setTheme(theme, showNotification = true) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('kasaryar_theme', theme);
  
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (theme === 'light') {
      themeIcon.className = 'fa-solid fa-sun text-orange';
    } else {
      themeIcon.className = 'fa-solid fa-moon text-cyan';
    }
  }

  if (showNotification) {
    showToast(`Switched to ${theme.toUpperCase()} mode 🌓`);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme, true);
}

// Initialize theme immediately
initTheme();

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHeroBanners();
  startHeroBannerAutoplay();

  renderGamesGrid();
  updateCartBadge();
  setupEventListeners();
  triggerWelcomePromoModal();
});

// BIG ANIMATED HERO BANNER CAROUSEL
function renderHeroBanners() {
  const track = document.getElementById('hero-banner-track');
  const dotsContainer = document.getElementById('hero-dots');
  if (!track) return;

  track.innerHTML = HERO_BANNERS.map((b, idx) => `
    <div class="hero-slide-item ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}" onclick="openTopUpModal('${b.gameId}')">
      <img src="${b.img}" alt="${b.title}" class="hero-slide-img">
      <div class="hero-slide-overlay">
        <div class="hero-slide-content">
          <span class="hero-slide-badge"><i class="fa-solid fa-fire text-orange"></i> ${b.badge}</span>
          <button class="hero-slide-cta btn btn-primary"><i class="fa-solid fa-bolt"></i> ${b.cta}</button>
        </div>
      </div>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = HERO_BANNERS.map((_, idx) => `
      <span class="dot ${idx === 0 ? 'active' : ''}" onclick="goToHeroSlide(${idx})"></span>
    `).join('');
  }
}

function slideHeroBanner(direction) {
  if (direction === 'next') {
    state.currentHeroSlide = (state.currentHeroSlide + 1) % HERO_BANNERS.length;
  } else {
    state.currentHeroSlide = (state.currentHeroSlide - 1 + HERO_BANNERS.length) % HERO_BANNERS.length;
  }
  updateHeroSlideUI();
}

function goToHeroSlide(index) {
  state.currentHeroSlide = index;
  updateHeroSlideUI();
}

function updateHeroSlideUI() {
  const slides = document.querySelectorAll('.hero-slide-item');
  const dots = document.querySelectorAll('.hero-dots .dot');

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === state.currentHeroSlide);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === state.currentHeroSlide);
  });
}

function startHeroBannerAutoplay() {
  if (state.heroAutoplayTimer) clearInterval(state.heroAutoplayTimer);
  state.heroAutoplayTimer = setInterval(() => {
    slideHeroBanner('next');
  }, 3500);
}

// Welcome Promo Pop-up
function triggerWelcomePromoModal() {
  if (localStorage.getItem('kasaryar_hide_promo') === 'true') return;

  const modalBackdrop = document.getElementById('welcome-promo-backdrop');
  const timerBadge = document.getElementById('welcome-timer-count');
  if (!modalBackdrop) return;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  let countdown = 8;
  if (timerBadge) timerBadge.textContent = countdown;

  state.welcomeTimerInterval = setInterval(() => {
    countdown--;
    if (timerBadge) timerBadge.textContent = countdown;

    if (countdown <= 0) {
      closeWelcomePromoModal();
    }
  }, 1000);
}

function closeWelcomePromoModal() {
  const modalBackdrop = document.getElementById('welcome-promo-backdrop');
  const chk = document.getElementById('dont-show-today-chk');

  if (chk && chk.checked) {
    localStorage.setItem('kasaryar_hide_promo', 'true');
  }

  if (modalBackdrop) modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';

  if (state.welcomeTimerInterval) {
    clearInterval(state.welcomeTimerInterval);
    state.welcomeTimerInterval = null;
  }
}

function claimEventPromo() {
  closeWelcomePromoModal();
  showToast('Promo Code CYBER2099 Applied! 15% OFF Discount 🎁');
  openTopUpModal('genshin-impact');
}

// ITEMMANIA MEDIUM GAME CARDS RENDERER & SLIDER
function renderGamesGrid() {
  const sliderContainer = document.getElementById('games-grid');
  const gameCountEl = document.getElementById('game-count');
  const emptyStateEl = document.getElementById('empty-state');

  if (!sliderContainer) return;

  let filtered = TOPUP_GAMES_DATA.filter(game => {
    const matchesCategory = state.activeCategory === 'all' || game.category === state.activeCategory;
    const query = state.searchTerm.toLowerCase();
    const matchesSearch = game.title.toLowerCase().includes(query) ||
                          game.publisher.toLowerCase().includes(query) ||
                          game.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (gameCountEl) gameCountEl.textContent = filtered.length;

  if (filtered.length === 0) {
    sliderContainer.style.display = 'none';
    if (emptyStateEl) emptyStateEl.hidden = false;
    return;
  } else {
    sliderContainer.style.display = 'flex';
    if (emptyStateEl) emptyStateEl.hidden = true;
  }

  // Trigger refresh transition animation
  sliderContainer.classList.remove('grid-refreshing');
  void sliderContainer.offsetWidth; // Force reflow
  sliderContainer.classList.add('grid-refreshing');

  // ITEMMANIA MEDIUM-SIZED GAME CARD HTML
  sliderContainer.innerHTML = filtered.map(game => {
    const minPrice = Math.min(...game.packages.map(p => p.price));
    return `
      <div class="cyber-game-card slide-card itemmania-card" data-game-id="${game.id}">
        <div class="card-image-wrap itemmania-img-wrap">
          <img src="${game.coverImg}" alt="${game.title}" class="game-cover-img" loading="lazy">
          <span class="currency-tag itemmania-currency">${game.currencyName}</span>
          ${game.badge ? `<span class="bestseller-badge itemmania-badge">${game.badge}</span>` : ''}
        </div>
        
        <div class="card-body itemmania-body">
          <div class="game-publisher itemmania-pub">${game.publisher}</div>
          <h3 class="game-title itemmania-title">${game.title}</h3>
          
          <div class="starting-price-badge">
            <i class="fa-solid fa-tag"></i> From ${minPrice.toLocaleString()} Ks
          </div>
          
          <div class="card-footer itemmania-footer">
            <div class="price-box itemmania-price-box">
              <span class="price-label itemmania-price-label">FROM</span>
              <span class="price-val itemmania-price-val">${minPrice.toLocaleString()} Ks</span>
            </div>
            <button class="btn btn-topup" onclick="openTopUpModal('${game.id}')">
              <i class="fa-solid fa-bolt"></i> TOP UP
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function slideGames(direction) {
  const container = document.getElementById('games-grid');
  if (!container) return;

  const scrollAmount = 204; // Itemmania card width (190px + 14px gap)
  if (direction === 'next') {
    container.scrollBy({ left: scrollAmount * 2, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: -scrollAmount * 2, behavior: 'smooth' });
  }
}

// Configurator Modal
function openTopUpModal(gameId) {
  const game = TOPUP_GAMES_DATA.find(g => g.id === gameId);
  if (!game) return;

  state.selectedGame = game;
  state.selectedPackage = game.packages[0];
  state.verifiedIgn = null;
  state.userIdInput = '';
  state.zoneIdInput = '';

  const modalBackdrop = document.getElementById('topup-modal-backdrop');
  const modalContent = document.getElementById('topup-modal-content');

  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = buildTopUpModalHTML(game);
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  setupModalHandlers(game);
}

function closeTopUpModal() {
  const modalBackdrop = document.getElementById('topup-modal-backdrop');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function buildTopUpModalHTML(game) {
  return `
    <div class="topup-modal-wrapper">
      <div class="topup-header">
        <div class="topup-header-info">
          <img src="${game.coverImg}" alt="${game.title}" class="topup-game-thumb">
          <div>
            <h2 class="topup-game-name">${game.title}</h2>
            <div class="currency-badge"><i class="fa-solid fa-gem text-cyan"></i> ${game.currencyName}</div>
          </div>
        </div>
        <button class="modal-close" onclick="closeTopUpModal()"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <div class="topup-modal-body">
        <div class="topup-step-box">
          <div class="step-title">
            <span class="step-num">1</span>
            <h3>PLAYER ID</h3>
          </div>

          <div class="player-id-grid">
            <div class="input-group">
              <label for="modal-user-id">User ID <span class="text-magenta">*</span></label>
              <input type="text" id="modal-user-id" placeholder="e.g. 123456789" class="cyber-input" autocomplete="off">
            </div>

            ${game.requiresZoneId ? `
              <div class="input-group">
                <label for="modal-zone-id">Zone ID <span class="text-magenta">*</span></label>
                <input type="text" id="modal-zone-id" placeholder="e.g. 2099" class="cyber-input" autocomplete="off">
              </div>
            ` : ''}

            <button type="button" class="btn btn-secondary" id="verify-id-btn">
              <i class="fa-solid fa-check"></i> VERIFY
            </button>
          </div>

          <div id="verify-status-box" class="verify-status-box" hidden></div>
        </div>

        <div class="topup-step-box">
          <div class="step-title">
            <span class="step-num">2</span>
            <h3>SELECT PACKAGE</h3>
          </div>

          <div class="packages-grid" id="packages-grid">
            ${game.packages.map((pkg, idx) => `
              <div class="package-card ${idx === 0 ? 'selected' : ''}" data-pkg-id="${pkg.id}">
                ${pkg.tag ? `<span class="pkg-tag">${pkg.tag}</span>` : ''}
                <div class="pkg-name">${pkg.name}</div>
                ${pkg.bonus ? `<div class="pkg-bonus">${pkg.bonus}</div>` : ''}
                <div class="pkg-price">${pkg.price.toLocaleString()} Ks</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="topup-step-box">
          <div class="step-title">
            <span class="step-num">3</span>
            <h3>PAYMENT METHOD</h3>
          </div>

          <div class="payment-grid" id="payment-grid">
            ${PAYMENT_METHODS.map((pm, idx) => `
              <div class="payment-card ${idx === 0 ? 'selected' : ''}" data-pay-id="${pm.id}">
                <i class="${pm.icon}" style="color:${pm.color}"></i>
                <div class="pay-info">
                  <div class="pay-name">${pm.name}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="topup-modal-footer">
        <div class="summary-preview">
          <div class="summary-val" id="modal-summary-item">${game.packages[0].name}</div>
          <div class="summary-total" id="modal-summary-price">${game.packages[0].price.toLocaleString()} Ks</div>
        </div>

        <div class="modal-actions-group">
          <button class="btn btn-secondary" id="modal-add-cart-btn">ADD TO CART</button>
          <button class="btn btn-primary" id="modal-direct-buy-btn"><i class="fa-solid fa-qrcode"></i> PAY NOW</button>
        </div>
      </div>
    </div>
  `;
}

function setupModalHandlers(game) {
  const pkgCards = document.querySelectorAll('.package-card');
  pkgCards.forEach(card => {
    card.addEventListener('click', () => {
      pkgCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const pkgId = card.getAttribute('data-pkg-id');
      state.selectedPackage = game.packages.find(p => p.id === pkgId);

      document.getElementById('modal-summary-item').textContent = state.selectedPackage.name;
      document.getElementById('modal-summary-price').textContent = `${state.selectedPackage.price.toLocaleString()} Ks`;
    });
  });

  const payCards = document.querySelectorAll('.payment-card');
  payCards.forEach(card => {
    card.addEventListener('click', () => {
      payCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.selectedPayment = card.getAttribute('data-pay-id');
    });
  });

  const verifyBtn = document.getElementById('verify-id-btn');
  const userIdInput = document.getElementById('modal-user-id');
  const zoneIdInput = document.getElementById('modal-zone-id');
  const statusBox = document.getElementById('verify-status-box');

  verifyBtn.addEventListener('click', () => {
    const userId = userIdInput.value.trim();
    const zoneId = zoneIdInput ? zoneIdInput.value.trim() : '';

    if (!userId) {
      showToast('Please enter Player ID.', 'warning');
      return;
    }

    verifyBtn.disabled = true;
    verifyBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

    setTimeout(() => {
      verifyBtn.disabled = false;
      verifyBtn.innerHTML = '<i class="fa-solid fa-check"></i> VERIFIED';

      state.verifiedIgn = game.sampleIgn + "_" + userId.slice(-3);
      state.userIdInput = userId;
      state.zoneIdInput = zoneId;

      statusBox.hidden = false;
      statusBox.innerHTML = `
        <div class="verify-success" style="font-size:0.85rem; color:#00e676; margin-top:6px;">
          <i class="fa-solid fa-circle-check"></i> Verified: ${state.verifiedIgn} (${userId})
        </div>
      `;
    }, 400);
  });

  document.getElementById('modal-add-cart-btn').addEventListener('click', () => {
    if (!validateModalForm(game)) return;
    addToCart(game, state.selectedPackage, state.userIdInput, state.zoneIdInput, state.verifiedIgn);
    closeTopUpModal();
  });

  document.getElementById('modal-direct-buy-btn').addEventListener('click', () => {
    if (!validateModalForm(game)) return;
    
    const orderRef = '#KASAR-' + Math.floor(100000 + Math.random() * 900000);
    const now = new Date();
    const dateStr = now.toLocaleDateString();

    const directOrder = {
      orderRef,
      dateStr,
      items: [{
        cartItemId: `${game.id}_${state.selectedPackage.id}_${state.userIdInput}_${state.zoneIdInput}`,
        gameId: game.id,
        gameTitle: game.title,
        coverImg: game.coverImg,
        currencyName: game.currencyName,
        packageId: state.selectedPackage.id,
        packageName: state.selectedPackage.name,
        price: state.selectedPackage.price,
        userId: state.userIdInput,
        zoneId: state.zoneIdInput,
        ign: state.verifiedIgn,
        quantity: 1
      }],
      totalAmount: `${state.selectedPackage.price.toLocaleString()} Ks`,
      status: 'PENDING_PAYMENT',
      paymentMethod: state.selectedPayment
    };

    closeTopUpModal();
    openPaymentQRModal(directOrder);
  });
}

function validateModalForm(game) {
  const userIdInput = document.getElementById('modal-user-id');
  const zoneIdInput = document.getElementById('modal-zone-id');
  const userId = userIdInput ? userIdInput.value.trim() : '';
  const zoneId = zoneIdInput ? zoneIdInput.value.trim() : '';

  if (!userId) {
    showToast('Please enter Player ID.', 'error');
    return false;
  }

  state.userIdInput = userId;
  state.zoneIdInput = zoneId;
  if (!state.verifiedIgn) {
    state.verifiedIgn = game.sampleIgn + "_" + userId.slice(-3);
  }
  return true;
}

function addToCart(game, pkg, userId, zoneId, ign) {
  state.cart.push({
    cartItemId: `${game.id}_${pkg.id}_${userId}_${zoneId}`,
    gameId: game.id,
    gameTitle: game.title,
    coverImg: game.coverImg,
    packageName: pkg.name,
    price: pkg.price,
    userId,
    zoneId,
    ign,
    quantity: 1
  });

  saveCart();
  showToast(`Added to cart!`, 'success');
}

function updateCartBadge() {
  const countEl = document.getElementById('cart-count');
  const totalItems = state.cart.length;

  if (countEl) countEl.textContent = totalItems;
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const checkoutBtn = document.getElementById('checkout-btn');
  const totalEl = document.getElementById('cart-total');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `<p class="empty-cart-text" style="text-align:center; color:#8899b0; padding:20px 0;">Cart is empty.</p>`;
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (totalEl) totalEl.textContent = '0 Ks';
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let subtotal = 0;
  container.innerHTML = state.cart.map((item, idx) => {
    subtotal += item.price;
    return `
      <div class="cart-item-row" style="display:flex; gap:8px; margin-bottom:8px; background:rgba(14,20,34,0.8); padding:8px; border-radius:6px;">
        <div class="cart-item-details" style="flex-grow:1; font-size:0.85rem;">
          <strong>${item.gameTitle}</strong>
          <div>${item.packageName} (ID: ${item.userId})</div>
          <div style="color:#00f0ff">${item.price.toLocaleString()} Ks</div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart(${idx})" style="background:none; border:none; color:#ff007a; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = `${subtotal.toLocaleString()} Ks`;
}

function removeFromCart(idx) {
  state.cart.splice(idx, 1);
  saveCart();
  renderCartItems();
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    renderCartItems();
    drawer.classList.add('active');
    backdrop.classList.add('active');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
  }
}

function processCheckout() {
  if (state.cart.length === 0) return;

  const orderRef = '#KASAR-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const dateStr = now.toLocaleDateString();

  const cartOrder = {
    orderRef,
    dateStr,
    items: [...state.cart],
    totalAmount: document.getElementById('cart-total').textContent,
    status: 'PENDING_PAYMENT',
    paymentMethod: state.selectedPayment
  };

  closeCartDrawer();
  openPaymentQRModal(cartOrder);
}

function openPaymentQRModal(order) {
  state.currentPendingOrder = order;

  const backdrop = document.getElementById('qr-modal-backdrop');
  const content = document.getElementById('qr-modal-content');
  if (!backdrop || !content) return;

  const payInfo = PAYMENT_METHODS.find(p => p.id === order.paymentMethod) || PAYMENT_METHODS[0];

  content.innerHTML = `
    <div class="qr-modal-wrapper">
      <div class="qr-modal-header" style="padding:14px; background:#0e1422; border-bottom:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center;">
        <h2><i class="${payInfo.icon}"></i> SCAN QR CODE</h2>
        <button class="modal-close" onclick="closePaymentQRModal()"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <div class="qr-modal-body">
        <div class="qr-code-section" style="display:flex; flex-direction:column; align-items:center;">
          <div class="qr-frame-box">
            <div class="qr-scan-line"></div>
            ${generateCyberQRCodeSVG(payInfo)}
          </div>
          <div class="qr-timer-box" style="margin-top:6px; font-size:0.8rem;">Closing in <strong id="qr-countdown" style="color:#ffb700;">09:59</strong></div>
        </div>

        <div class="qr-details-section">
          <div class="merchant-info-card">
            <div>Account: <strong>${payInfo.accountName}</strong></div>
            <div class="copy-field">
              No: <strong>${payInfo.accountNo}</strong>
              <button class="copy-btn" onclick="copyTextToClipboard('${payInfo.accountNo}')"><i class="fa-solid fa-copy"></i></button>
            </div>
            <div class="copy-field">
              Ref: <strong style="color:#00f0ff;">${order.orderRef}</strong>
              <button class="copy-btn" onclick="copyTextToClipboard('${order.orderRef}')"><i class="fa-solid fa-copy"></i></button>
            </div>
            <div>Total: <strong style="color:#ffb700;">${order.totalAmount}</strong></div>
          </div>
        </div>
      </div>

      <div class="qr-modal-footer">
        <button class="btn btn-secondary" onclick="closePaymentQRModal()">CANCEL</button>
        <button class="btn btn-primary" id="confirm-payment-btn" onclick="confirmQRPaymentSubmitted()">
          <i class="fa-solid fa-check"></i> I HAVE PAID
        </button>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
  startQRCountdownTimer();
}

function closePaymentQRModal() {
  const backdrop = document.getElementById('qr-modal-backdrop');
  if (backdrop) backdrop.classList.remove('active');
  if (state.qrTimerInterval) clearInterval(state.qrTimerInterval);
}

function startQRCountdownTimer() {
  if (state.qrTimerInterval) clearInterval(state.qrTimerInterval);
  let totalSeconds = 599;
  const timerEl = document.getElementById('qr-countdown');

  state.qrTimerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(state.qrTimerInterval);
      return;
    }
    totalSeconds--;
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    if (timerEl) timerEl.textContent = `${mins}:${secs}`;
  }, 1000);
}

function generateCyberQRCodeSVG(payInfo) {
  return `
    <svg class="cyber-qr-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#070a10" rx="6"/>
      <rect x="15" y="15" width="40" height="40" fill="none" stroke="#00f0ff" stroke-width="4"/>
      <rect x="25" y="25" width="20" height="20" fill="#00f0ff"/>
      <rect x="145" y="15" width="40" height="40" fill="none" stroke="#ff007a" stroke-width="4"/>
      <rect x="155" y="25" width="20" height="20" fill="#ff007a"/>
      <rect x="15" y="145" width="40" height="40" fill="none" stroke="#00f0ff" stroke-width="4"/>
      <rect x="25" y="155" width="20" height="20" fill="#00f0ff"/>
      <g fill="#00f0ff" opacity="0.85">
        <rect x="65" y="15" width="10" height="10"/><rect x="80" y="15" width="10" height="10"/>
        <rect x="85" y="65" width="30" height="10"/>
      </g>
      <rect x="75" y="75" width="50" height="50" fill="#070a10" stroke="${payInfo.color}" stroke-width="2" rx="6"/>
      <text x="100" y="105" fill="${payInfo.color}" font-family="Inter, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">ITEMMANIA</text>
    </svg>
  `;
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
  showToast('Copied to clipboard!', 'info');
}

function confirmQRPaymentSubmitted() {
  if (!state.currentPendingOrder) return;
  const completedOrder = {
    ...state.currentPendingOrder,
    status: 'COMPLETED ✅'
  };

  state.recentOrders.unshift(completedOrder);
  saveOrders();
  state.cart = [];
  saveCart();

  // Asynchronously record order into Neon PostgreSQL DB
  const firstItem = completedOrder.items && completedOrder.items[0] ? completedOrder.items[0] : {};
  fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orderRef: completedOrder.orderRef,
      gameId: firstItem.gameId || 'game',
      gameTitle: firstItem.gameTitle || 'Game TopUp',
      packageName: firstItem.packageName || 'TopUp Package',
      userIdInput: firstItem.userId || 'ID',
      zoneIdInput: firstItem.zoneId || '',
      paymentMethod: completedOrder.paymentMethod || 'KBZPay',
      totalAmount: completedOrder.totalAmount
    })
  }).then(res => res.json())
    .then(data => console.log('⚡ Neon DB Order Sync:', data))
    .catch(err => console.warn('Neon DB sync offline fallback:', err));

  closePaymentQRModal();
  openReceiptModal(completedOrder);
}

function openReceiptModal(order) {
  const backdrop = document.getElementById('checkout-modal-backdrop');
  const refEl = document.getElementById('order-ref-id');
  const summaryBox = document.getElementById('checkout-summary-list');
  if (!backdrop) return;

  if (refEl) refEl.textContent = order.orderRef;
  if (summaryBox) {
    summaryBox.innerHTML = `
      <div style="font-size:0.85rem; color:#00e676; margin-top:8px;">
        <i class="fa-solid fa-check"></i> TOP-UP DISPATCHED DIRECTLY
      </div>
      <div style="font-size:0.8rem; color:#8899b0; margin-top:4px;">Ref: ${order.orderRef} | Total: ${order.totalAmount}</div>
    `;
  }
  backdrop.classList.add('active');
}

function closeCheckoutModal() {
  const backdrop = document.getElementById('checkout-modal-backdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function openOrderTrackerModal() {
  const backdrop = document.getElementById('tracker-modal-backdrop');
  if (backdrop) {
    backdrop.classList.add('active');
    renderRecentOrdersList();
  }
}

function closeOrderTrackerModal() {
  const backdrop = document.getElementById('tracker-modal-backdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function renderRecentOrdersList() {
  const container = document.getElementById('tracker-results-container');
  if (!container) return;

  if (state.recentOrders.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:20px; color:#8899b0; font-size:0.85rem;">No recent orders found.</p>`;
    return;
  }

  container.innerHTML = state.recentOrders.map(ord => `
    <div style="background:#0e1422; padding:10px; border-radius:6px; margin-bottom:8px; font-size:0.8rem;">
      <div><strong>${ord.orderRef}</strong> - <span style="color:#00e676;">${ord.status}</span></div>
      <div>Total: ${ord.totalAmount}</div>
    </div>
  `).join('');
}

function searchOrderRef() {
  const searchInput = document.getElementById('tracker-search-input');
  if (!searchInput) return;
  const query = searchInput.value.trim().toUpperCase();
  const container = document.getElementById('tracker-results-container');

  const found = state.recentOrders.filter(o => o.orderRef.includes(query));
  if (found.length === 0) {
    container.innerHTML = `<p style="padding:10px; color:#8899b0; font-size:0.8rem;">No order found matching "${query}".</p>`;
  } else {
    container.innerHTML = found.map(ord => `
      <div style="background:#0e1422; padding:10px; border-radius:6px; margin-bottom:8px; font-size:0.8rem;">
        <div><strong>${ord.orderRef}</strong> - <span style="color:#00e676;">${ord.status}</span></div>
        <div>Total: ${ord.totalAmount}</div>
      </div>
    `).join('');
  }
}

function openSupportModal() {
  const backdrop = document.getElementById('support-modal-backdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeSupportModal() {
  const backdrop = document.getElementById('support-modal-backdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) navMenu.classList.toggle('mobile-active');
}

function setupEventListeners() {
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', toggleMobileMenu);

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) navMenu.classList.remove('mobile-active');
    });
  });

  const catButtons = document.querySelectorAll('#category-filters .pill-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.getAttribute('data-category');
      renderGamesGrid();
    });
  });

  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchTerm = e.target.value;
      renderGamesGrid();
    });
  }

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

  // Global Back-To-Top button scroll listener
  window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      if (window.scrollY > 200) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', processCheckout);

  const trackBtn = document.getElementById('track-order-btn');
  if (trackBtn) trackBtn.addEventListener('click', openOrderTrackerModal);

  const supportBtn = document.getElementById('support-btn');
  if (supportBtn) supportBtn.addEventListener('click', openSupportModal);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `cyber-toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
