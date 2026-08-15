/**
 * CYBERGRID // APPLICATION LOGIC
 * High-Performance Gaming Storefront Engine
 */

// ==========================================================================
// 1. GAME DATASET
// ==========================================================================
const GAMES_DATA = [
  {
    id: "neon-overdrive-2099",
    title: "NEON OVERDRIVE 2099",
    category: "Action RPG",
    platforms: ["PC", "PS5", "Xbox"],
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.9,
    reviewsCount: 1420,
    discount: "30% OFF",
    bestseller: true,
    coverImg: "assets/neon_overdrive.jpg",
    heroImg: "assets/cyber_banner.jpg",
    description: "In Neo-Kyoto's dark underbelly, take control of an augmented Netrunner equipped with high-frequency plasma blades and quantum hacking abilities. Fight megacorporation security forces and rewrite the city grid.",
    specs: {
      os: "Windows 11 (64-bit)",
      processor: "Intel Core i7-13700K / AMD Ryzen 7 7800X3D",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 4070 / AMD Radeon RX 7800 XT",
      storage: "85 GB SSD Space"
    }
  },
  {
    id: "stellar-void",
    title: "STELLAR VOID // HORIZONS",
    category: "Sci-Fi Sim",
    platforms: ["PC", "PS5", "VR"],
    price: 59.99,
    oldPrice: null,
    rating: 4.8,
    reviewsCount: 890,
    discount: null,
    bestseller: true,
    coverImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    description: "Captain a custom modular dreadnought across procedural deep-space solar systems. Trade, mine quantum asteroids, build space stations, and battle alien armada fleets in full VR support.",
    specs: {
      os: "Windows 10/11 (64-bit)",
      processor: "Intel Core i5-12600K / Ryzen 5 5600X",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 3070 / Radeon RX 6700 XT",
      storage: "120 GB SSD"
    }
  },
  {
    id: "quantum-nexus",
    title: "QUANTUM NEXUS: PROTOCOL",
    category: "Cyberpunk Thriller",
    platforms: ["PC", "Xbox"],
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.7,
    reviewsCount: 650,
    discount: "20% OFF",
    bestseller: false,
    coverImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
    description: "Manipulate temporal reality in a futuristic noir dystopian megacity. Reverse time to undo tactical errors, decipher hidden memory pods, and uncover a conspiracy that threatens human consciousness.",
    specs: {
      os: "Windows 11 (64-bit)",
      processor: "Intel Core i7-10700 / Ryzen 7 3700X",
      memory: "12 GB RAM",
      graphics: "NVIDIA GTX 1080 Ti / RTX 3060",
      storage: "60 GB SSD"
    }
  },
  {
    id: "synapse-breach",
    title: "SYNAPSE BREACH // 2088",
    category: "FPS Tactics",
    platforms: ["PC", "PS5", "Xbox", "VR"],
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.6,
    reviewsCount: 1120,
    discount: "25% OFF",
    bestseller: true,
    coverImg: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    description: "Squad-based tactical cybernetic shooter. Infiltrate heavily defended server farms, employ stealth camouflage drones, and execute synchronized net-hacks with teammates.",
    specs: {
      os: "Windows 10/11",
      processor: "Intel Core i5-11400",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 1660 Super",
      storage: "45 GB Space"
    }
  },
  {
    id: "cyber-drift-overdrive",
    title: "CYBER DRIFT: ZERO G",
    category: "Sci-Fi Sim",
    platforms: ["PC", "PS5"],
    price: 34.99,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 430,
    discount: null,
    bestseller: false,
    coverImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    description: "High-speed neon hovercraft racing featuring antigravity physics, customizable energy shields, and high-tempo synthwave soundtracks across 18 orbital tracks.",
    specs: {
      os: "Windows 11",
      processor: "Intel Core i5-12400",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 3060",
      storage: "30 GB SSD"
    }
  },
  {
    id: "mecha-strike-prime",
    title: "MECHA STRIKE: TITAN WARS",
    category: "FPS Tactics",
    platforms: ["PC", "PS5", "Xbox"],
    price: 54.99,
    oldPrice: 69.99,
    rating: 4.8,
    reviewsCount: 2100,
    discount: "20% OFF",
    bestseller: true,
    coverImg: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
    description: "Pilot 50-ton heavily armed combat exosuits. Customize railguns, particle beam cannons, and thermal thrusters in massive 32 vs 32 online orbital battlefields.",
    specs: {
      os: "Windows 11",
      processor: "Intel Core i7-12700K",
      memory: "32 GB RAM",
      graphics: "NVIDIA RTX 4080",
      storage: "100 GB SSD"
    }
  },
  {
    id: "chronos-awakening",
    title: "CHRONOS // AWAKENING",
    category: "Action RPG",
    platforms: ["PC", "VR"],
    price: 44.99,
    oldPrice: null,
    rating: 4.7,
    reviewsCount: 310,
    discount: null,
    bestseller: false,
    coverImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    description: "Immersive VR action RPG set in a derelict orbital research center overrun by rogue artificial intelligence. Utilize telekinetic energy gloves and energy shields.",
    specs: {
      os: "Windows 10/11",
      processor: "Intel Core i7-11700K",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 3070",
      storage: "50 GB SSD"
    }
  },
  {
    id: "neural-shadow",
    title: "NEURAL SHADOW: REDACTED",
    category: "Cyberpunk Thriller",
    platforms: ["PC", "PS5", "Xbox"],
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviewsCount: 520,
    discount: "30% OFF",
    bestseller: false,
    coverImg: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    description: "An isometric tactical stealth hacker game. Hack security cameras, corrupt memory nodes, and bypass cybernetic guards without firing a single shot.",
    specs: {
      os: "Windows 10/11",
      processor: "Intel Core i3-10100",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 1060",
      storage: "25 GB Space"
    }
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
let state = {
  cart: JSON.parse(localStorage.getItem('cybergrid_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('cybergrid_wishlist')) || [],
  appliedPromo: null,
  activeCategory: 'all',
  activePlatform: 'all',
  searchTerm: '',
  sortBy: 'featured'
};

// Save to LocalStorage helpers
function saveCart() {
  localStorage.setItem('cybergrid_cart', JSON.stringify(state.cart));
  updateCartBadge();
}

function saveWishlist() {
  localStorage.setItem('cybergrid_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
}

// ==========================================================================
// 3. DOM ELEMENTS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderGamesGrid();
  updateCartBadge();
  updateWishlistBadge();
  setupEventListeners();
}

// ==========================================================================
// 4. RENDERING CATALOG
// ==========================================================================
function getFilteredGames() {
  return GAMES_DATA.filter(game => {
    // Category Filter
    const matchesCategory = state.activeCategory === 'all' || game.category === state.activeCategory;
    
    // Platform Filter
    const matchesPlatform = state.activePlatform === 'all' || game.platforms.includes(state.activePlatform);
    
    // Search Term Filter
    const query = state.searchTerm.toLowerCase();
    const matchesSearch = !query || 
      game.title.toLowerCase().includes(query) ||
      game.category.toLowerCase().includes(query) ||
      game.platforms.some(p => p.toLowerCase().includes(query));

    return matchesCategory && matchesPlatform && matchesSearch;
  }).sort((a, b) => {
    if (state.sortBy === 'price-low') return a.price - b.price;
    if (state.sortBy === 'price-high') return b.price - a.price;
    if (state.sortBy === 'rating') return b.rating - a.rating;
    if (state.sortBy === 'title') return a.title.localeCompare(b.title);
    return 0; // Default featured
  });
}

function renderGamesGrid() {
  const container = document.getElementById('games-grid');
  const countEl = document.getElementById('game-count');
  const emptyEl = document.getElementById('empty-state');
  
  const filtered = getFilteredGames();
  countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  container.innerHTML = filtered.map(game => {
    const isWishlisted = state.wishlist.some(w => w.id === game.id);
    const isInCart = state.cart.some(c => c.id === game.id);

    return `
      <article class="game-card" data-id="${game.id}">
        <div class="card-thumb-wrapper">
          <img src="${game.coverImg}" alt="${game.title}" class="card-img" loading="lazy">
          
          <div class="card-badges">
            ${game.discount ? `<span class="badge-tag discount">${game.discount}</span>` : ''}
            ${game.bestseller ? `<span class="badge-tag"><i class="fa-solid fa-fire text-magenta"></i> BESTSELLER</span>` : ''}
          </div>

          <button class="card-fav-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${game.id}')" title="Toggle Wishlist">
            <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>

        <div class="card-content">
          <div class="card-category">${game.category.toUpperCase()}</div>
          <h3 class="card-title">${game.title}</h3>

          <div class="card-rating">
            <i class="fa-solid fa-star"></i>
            <span>${game.rating}</span>
            <span style="color:var(--text-muted);">(${game.reviewsCount})</span>
          </div>

          <div class="card-footer">
            <div class="card-price">
              $${game.price.toFixed(2)}
              ${game.oldPrice ? `<span class="old-price">$${game.oldPrice.toFixed(2)}</span>` : ''}
            </div>

            <div class="card-actions">
              <button class="btn btn-secondary btn-icon-only" onclick="openQuickView('${game.id}')" title="Quick View">
                <i class="fa-solid fa-eye"></i>
              </button>
              <button class="btn ${isInCart ? 'btn-secondary' : 'btn-primary'}" onclick="addToCart('${game.id}')">
                <i class="fa-solid fa-cart-plus"></i> ${isInCart ? 'IN CART' : 'ADD'}
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// 5. EVENT LISTENERS & FILTER HANDLERS
// ==========================================================================
function setupEventListeners() {
  // Search Input
  const searchInput = document.getElementById('global-search-input');
  const clearSearchBtn = document.getElementById('clear-search');

  searchInput.addEventListener('input', (e) => {
    state.searchTerm = e.target.value;
    clearSearchBtn.hidden = !state.searchTerm;
    renderGamesGrid();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchTerm = '';
    clearSearchBtn.hidden = true;
    renderGamesGrid();
  });

  // Sort Select
  document.getElementById('sort-select').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderGamesGrid();
  });

  // Category Filter Pills
  document.getElementById('category-filters').addEventListener('click', (e) => {
    if (e.target.classList.contains('pill-btn')) {
      document.querySelectorAll('#category-filters .pill-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.activeCategory = e.target.dataset.category;
      renderGamesGrid();
    }
  });

  // Platform Filter Pills
  document.getElementById('platform-filters').addEventListener('click', (e) => {
    if (e.target.classList.contains('pill-btn')) {
      document.querySelectorAll('#platform-filters .pill-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.activePlatform = e.target.dataset.platform;
      renderGamesGrid();
    }
  });

  // Reset Filters Button
  document.getElementById('reset-filters-btn').addEventListener('click', () => {
    state.activeCategory = 'all';
    state.activePlatform = 'all';
    state.searchTerm = '';
    searchInput.value = '';
    clearSearchBtn.hidden = true;
    document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('#category-filters [data-category="all"]').classList.add('active');
    document.querySelector('#platform-filters [data-platform="all"]').classList.add('active');
    renderGamesGrid();
  });

  // Hero Buttons
  document.getElementById('hero-buy-btn').addEventListener('click', () => {
    addToCart('neon-overdrive-2099');
    openCartDrawer();
  });

  document.getElementById('hero-quick-btn').addEventListener('click', () => {
    openQuickView('neon-overdrive-2099');
  });

  // Cart Drawer Triggers
  document.getElementById('cart-btn').addEventListener('click', openCartDrawer);
  document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-backdrop').addEventListener('click', closeCartDrawer);

  // Promo Code
  document.getElementById('apply-promo-btn').addEventListener('click', applyPromoCode);

  // Copy Promo Code in Top Announcement Bar
  document.getElementById('copy-code-btn').addEventListener('click', () => {
    navigator.clipboard.writeText('CYBER2099');
    showToast('Promo Code CYBER2099 copied to clipboard!');
  });

  // Checkout Button
  document.getElementById('checkout-btn').addEventListener('click', triggerCheckout);
  document.getElementById('close-checkout-modal').addEventListener('click', closeCheckoutModal);
  document.getElementById('finish-order-btn').addEventListener('click', closeCheckoutModal);

  // Wishlist Modal Triggers
  document.getElementById('wishlist-btn').addEventListener('click', openWishlistModal);
  document.getElementById('view-wishlist-footer').addEventListener('click', (e) => {
    e.preventDefault();
    openWishlistModal();
  });
  document.getElementById('close-wishlist-modal').addEventListener('click', closeWishlistModal);

  // Quick View Modal Close
  document.getElementById('close-quick-modal').addEventListener('click', closeQuickModal);

  // Newsletter Form
  document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    showToast(`Access granted! Subscribed ${email} to Netrunner Dispatch.`, 'cyan');
    document.getElementById('newsletter-email').value = '';
  });
}

// ==========================================================================
// 6. CART MANAGEMENT
// ==========================================================================
function addToCart(gameId) {
  const game = GAMES_DATA.find(g => g.id === gameId);
  if (!game) return;

  const existingItem = state.cart.find(item => item.id === gameId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    state.cart.push({ ...game, qty: 1 });
  }

  saveCart();
  renderGamesGrid();
  showToast(`Added ${game.title} to your Cyber Cart!`, 'cyan');
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').textContent = totalCount;
  document.getElementById('cart-items-count').textContent = totalCount;
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 10px; color:var(--text-muted);">
        <i class="fa-solid fa-cart-arrow-down" style="font-size:2.5rem; color:var(--primary-cyan); margin-bottom:12px;"></i>
        <p>Your cyber cart is empty.</p>
      </div>
    `;
    checkoutBtn.disabled = true;
    updateCartTotals();
    return;
  }

  checkoutBtn.disabled = false;
  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.coverImg}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Remove Item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  updateCartTotals();
}

function changeQty(gameId, delta) {
  const item = state.cart.find(i => i.id === gameId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(gameId);
  } else {
    saveCart();
  }
}

function removeFromCart(gameId) {
  state.cart = state.cart.filter(item => item.id !== gameId);
  saveCart();
  renderGamesGrid();
  showToast('Item removed from cart.', 'magenta');
}

function updateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;

  if (state.appliedPromo === 'CYBER2099') {
    discountAmount = subtotal * 0.20;
    document.getElementById('discount-row').hidden = false;
    document.getElementById('cart-discount').textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    document.getElementById('discount-row').hidden = true;
  }

  const grandTotal = subtotal - discountAmount;
  document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `$${grandTotal.toFixed(2)}`;
}

function applyPromoCode() {
  const codeInput = document.getElementById('promo-input');
  const code = codeInput.value.trim().toUpperCase();
  const msgEl = document.getElementById('promo-msg');

  if (code === 'CYBER2099') {
    state.appliedPromo = 'CYBER2099';
    msgEl.style.color = 'var(--accent-green)';
    msgEl.textContent = '✓ 20% Cyber Discount Applied!';
    updateCartTotals();
    showToast('20% Discount Code Applied!', 'cyan');
  } else {
    msgEl.style.color = 'var(--primary-magenta)';
    msgEl.textContent = '✕ Invalid Promo Code. Try CYBER2099';
  }
}

function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('active');
  document.getElementById('cart-backdrop').classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('active');
  document.getElementById('cart-backdrop').classList.remove('active');
}

// ==========================================================================
// 7. WISHLIST MANAGEMENT
// ==========================================================================
function toggleWishlist(gameId) {
  const index = state.wishlist.findIndex(w => w.id === gameId);
  const game = GAMES_DATA.find(g => g.id === gameId);

  if (index >= 0) {
    state.wishlist.splice(index, 1);
    showToast(`Removed ${game.title} from Wishlist.`, 'magenta');
  } else {
    state.wishlist.push(game);
    showToast(`Saved ${game.title} to your Wishlist!`, 'cyan');
  }

  saveWishlist();
  renderGamesGrid();
}

function updateWishlistBadge() {
  document.getElementById('wishlist-count').textContent = state.wishlist.length;
}

function openWishlistModal() {
  const container = document.getElementById('wishlist-items-container');
  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px; color:var(--text-muted);">
        <i class="fa-solid fa-heart-crack" style="font-size:3rem; color:var(--primary-magenta); margin-bottom:12px;"></i>
        <p>Your wishlist is empty. Explore the catalog to save titles!</p>
      </div>
    `;
  } else {
    container.innerHTML = state.wishlist.map(game => `
      <div class="cart-item" style="margin-bottom:12px;">
        <img src="${game.coverImg}" alt="${game.title}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${game.title}</h4>
          <div class="cart-item-price">$${game.price.toFixed(2)}</div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="addToCart('${game.id}'); closeWishlistModal(); openCartDrawer();">
          Move to Cart
        </button>
        <button class="remove-item-btn" onclick="toggleWishlist('${game.id}'); openWishlistModal();" style="margin-left:12px;">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join('');
  }

  document.getElementById('wishlist-modal-backdrop').classList.add('active');
}

function closeWishlistModal() {
  document.getElementById('wishlist-modal-backdrop').classList.remove('active');
}

// ==========================================================================
// 8. QUICK VIEW MODAL
// ==========================================================================
function openQuickView(gameId) {
  const game = GAMES_DATA.find(g => g.id === gameId);
  if (!game) return;

  const contentEl = document.getElementById('quick-modal-content');
  contentEl.innerHTML = `
    <div class="quick-view-grid">
      <div>
        <img src="${game.coverImg}" alt="${game.title}" class="quick-view-img">
      </div>
      <div class="quick-view-details">
        <span class="card-category">${game.category.toUpperCase()}</span>
        <h2>${game.title}</h2>
        <div class="card-rating" style="margin-bottom:16px;">
          <i class="fa-solid fa-star"></i>
          <span>${game.rating} / 5.0</span> (${game.reviewsCount} Netrunner Reviews)
        </div>
        <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.6;">${game.description}</p>
        
        <div class="specs-box">
          <h4 style="color:var(--primary-cyan); margin-bottom:8px;"><i class="fa-solid fa-microchip"></i> Recommended System Specs</h4>
          <p><strong>OS:</strong> ${game.specs.os}</p>
          <p><strong>CPU:</strong> ${game.specs.processor}</p>
          <p><strong>GPU:</strong> ${game.specs.graphics}</p>
          <p><strong>Storage:</strong> ${game.specs.storage}</p>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
          <div style="font-family:var(--font-heading); font-size:1.6rem; color:#fff;">
            $${game.price.toFixed(2)}
          </div>
          <button class="btn btn-primary" onclick="addToCart('${game.id}'); closeQuickModal(); openCartDrawer();">
            <i class="fa-solid fa-cart-plus"></i> ADD TO CART
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('quick-modal-backdrop').classList.add('active');
}

function closeQuickModal() {
  document.getElementById('quick-modal-backdrop').classList.remove('active');
}

// ==========================================================================
// 9. CHECKOUT SIMULATION
// ==========================================================================
function triggerCheckout() {
  if (state.cart.length === 0) return;

  closeCartDrawer();
  const summaryList = document.getElementById('checkout-summary-list');
  const refId = `#CYBER-${Math.floor(100000 + Math.random() * 900000)}`;
  document.getElementById('order-ref-id').textContent = refId;

  summaryList.innerHTML = state.cart.map(item => `
    <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem;">
      <span>${item.qty}x ${item.title}</span>
      <span style="color:var(--primary-cyan); font-family:var(--font-heading);">$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');

  // Clear cart upon purchase
  state.cart = [];
  saveCart();
  renderGamesGrid();

  document.getElementById('checkout-modal-backdrop').classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal-backdrop').classList.remove('active');
}

// ==========================================================================
// 10. TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, theme = 'cyan') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${theme === 'magenta' ? 'toast-magenta' : ''}`;
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="color:${theme === 'magenta' ? 'var(--primary-magenta)' : 'var(--primary-cyan)'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
