// ── CATALOG DATA ──
const CATALOG = [
  {
    id: 1,
    name: "Milano Sofa",
    category: "Seating",
    price: 45999,
    priceDisplay: "₹45,999",
    dims: { w: 2.1, d: 0.9, h: 0.85 },
    dimsDisplay: "210cm × 90cm × 85cm",
    emoji: "🛋️",
    tag: "Bestseller",
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/GlamVelvetSofa/glTF-Binary/GlamVelvetSofa.glb",
    color: "#C9A84C"
  },
  {
    id: 2,
    name: "Luxe Armchair",
    category: "Seating",
    price: 18999,
    priceDisplay: "₹18,999",
    dims: { w: 0.85, d: 0.8, h: 0.9 },
    dimsDisplay: "85cm × 80cm × 90cm",
    emoji: "🪑",
    tag: "New",
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    color: "#2DD4BF"
  },
  {
    id: 3,
    name: "Walnut Coffee Table",
    category: "Tables",
    price: 12499,
    priceDisplay: "₹12,499",
    dims: { w: 1.2, d: 0.6, h: 0.45 },
    dimsDisplay: "120cm × 60cm × 45cm",
    emoji: "🪵",
    tag: "Popular",
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb",
    color: "#92603A"
  },
  {
    id: 4,
    name: "Minimal Bookshelf",
    category: "Storage",
    price: 22999,
    priceDisplay: "₹22,999",
    dims: { w: 1.0, d: 0.35, h: 1.8 },
    dimsDisplay: "100cm × 35cm × 180cm",
    emoji: "📚",
    tag: "Premium",
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/GlamVelvetSofa/glTF-Binary/GlamVelvetSofa.glb",
    color: "#4A6FA5"
  },
  {
    id: 5,
    name: "Zen Floor Lamp",
    category: "Lighting",
    price: 6999,
    priceDisplay: "₹6,999",
    dims: { w: 0.4, d: 0.4, h: 1.6 },
    dimsDisplay: "40cm × 40cm × 160cm",
    emoji: "💡",
    tag: "New",
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb",
    color: "#C9A84C"
  },
  {
    id: 6,
    name: "Monstera Plant",
    category: "Plants",
    price: 2499,
    priceDisplay: "₹2,499",
    dims: { w: 0.6, d: 0.6, h: 1.2 },
    dimsDisplay: "60cm × 60cm × 120cm",
    emoji: "🌿",
    tag: "Trending",
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    color: "#2D6A4F"
  },
  {
    id: 7,
    name: "Nordic Dining Table",
    category: "Tables",
    price: 34999,
    priceDisplay: "₹34,999",
    dims: { w: 1.8, d: 0.9, h: 0.76 },
    dimsDisplay: "180cm × 90cm × 76cm",
    emoji: "🍽️",
    tag: "Premium",
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/GlamVelvetSofa/glTF-Binary/GlamVelvetSofa.glb",
    color: "#8B5E3C"
  },
  {
    id: 8,
    name: "Velvet Bed Frame",
    category: "Bedroom",
    price: 58999,
    priceDisplay: "₹58,999",
    dims: { w: 1.8, d: 2.1, h: 1.2 },
    dimsDisplay: "180cm × 210cm × 120cm",
    emoji: "🛏️",
    tag: "Luxury",
    model: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/GlamVelvetSofa/glTF-Binary/GlamVelvetSofa.glb",
    color: "#7B2D8B"
  }
];

// ── STATE ──
let cart = [];
let selectedItem = null;
let itemViewedAt = null;
let autoRotateEnabled = true;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  renderFilters();
  updateCartCount();
  initModelViewerEvents();
});

// ── RENDER CATALOG ──
function renderCatalog(filterCategory = 'All') {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const items = filterCategory === 'All'
    ? CATALOG
    : CATALOG.filter(i => i.category === filterCategory);

  grid.innerHTML = items.map(item => `
    <div class="catalog-card" id="card-${item.id}" onclick="selectItem(${item.id})">
      <div class="catalog-card-tag">${item.tag}</div>
      <div class="catalog-card-emoji" style="color:${item.color}">${item.emoji}</div>
      <div class="catalog-card-info">
        <div class="catalog-card-name">${item.name}</div>
        <div class="catalog-card-category">${item.category}</div>
        <div class="catalog-card-price">${item.priceDisplay}</div>
        <div class="catalog-card-dims">${item.dimsDisplay}</div>
      </div>
      <button class="catalog-card-btn">View in AR →</button>
    </div>
  `).join('');
}

// ── RENDER FILTERS ──
function renderFilters() {
  const container = document.getElementById('catalog-filters');
  if (!container) return;

  const categories = ['All', ...new Set(CATALOG.map(i => i.category))];
  container.innerHTML = categories.map((cat, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" onclick="filterCatalog('${cat}', this)">${cat}</button>
  `).join('');
}

function filterCatalog(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog(category);
}

// ── SELECT ITEM ──
function selectItem(id) {
  const item = CATALOG.find(i => i.id === id);
  if (!item) return;

  selectedItem = item;
  itemViewedAt = Date.now();

  // Update active card
  document.querySelectorAll('.catalog-card').forEach(c => {
    c.classList.remove('active');
    const badge = c.querySelector('.catalog-card-active-badge');
    if (badge) badge.remove();
  });

  const activeCard = document.getElementById(`card-${id}`);
  if (activeCard) {
    activeCard.classList.add('active');
    const badge = document.createElement('div');
    badge.className = 'catalog-card-active-badge';
    badge.textContent = 'Viewing';
    activeCard.appendChild(badge);
  }

  // Load model in viewer
  const viewer = document.getElementById('ar-model');
  if (viewer) {
    viewer.src = item.model;
    viewer.setAttribute('camera-orbit', '0deg 75deg 2.5m');

    viewer.addEventListener('error', () => {
      showToast('⚠️ Model failed to load — using fallback');
      viewer.src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
    }, { once: true });

    viewer.addEventListener('load', () => {
      console.log('Model loaded:', viewer.src);
    }, { once: true });
  }

  // Hide placeholder
  const placeholder = document.getElementById('ar-placeholder');
  if (placeholder) placeholder.style.display = 'none';

  // Reset action bar (hide until AR is launched)
  const actionBar = document.getElementById('ar-action-bar');
  if (actionBar) actionBar.style.display = 'none';

  // Show fallback "Launch in Your Room" button (visible on all devices)
  const fallbackBtn = document.getElementById('ar-fallback-btn');
  if (fallbackBtn) fallbackBtn.style.display = 'block';

  // Update panels
  updateSelectedInfo(item);
  updateFitChecker(item);
  updateReturnRisk(item);
  updateQuickAdd(item);

  showToast(`${item.emoji} ${item.name} loaded in AR viewer`);

  // Smooth scroll to AR studio
  setTimeout(() => {
    document.getElementById('ar-studio')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 300);
}

// ── UPDATE SELECTED INFO ──
function updateSelectedInfo(item) {
  const el = document.getElementById('selected-info');
  if (!el) return;
  el.innerHTML = `
    <div class="selected-item-display">
      <div class="selected-emoji" style="color:${item.color}">${item.emoji}</div>
      <div class="selected-details">
        <div class="selected-name">${item.name}</div>
        <div class="selected-category">${item.category} · ${item.tag}</div>
        <div class="selected-price">${item.priceDisplay}</div>
        <div class="selected-dims">${item.dimsDisplay}</div>
      </div>
    </div>
  `;
}

// ── FIT CHECKER ──
function updateFitChecker(item) {
  const el = document.getElementById('fit-checker-content');
  if (!el) return;

  el.innerHTML = `
    <div class="fit-inputs">
      <div class="fit-input-group">
        <label>Room Width (cm)</label>
        <input type="number" id="room-w" placeholder="e.g. 400" class="fit-input" />
      </div>
      <div class="fit-input-group">
        <label>Room Depth (cm)</label>
        <input type="number" id="room-d" placeholder="e.g. 350" class="fit-input" />
      </div>
    </div>
    <button class="btn-primary full-width" onclick="checkFit()">Check Fit →</button>
    <div id="fit-result"></div>
  `;
}

function checkFit() {
  const roomW = parseFloat(document.getElementById('room-w')?.value);
  const roomD = parseFloat(document.getElementById('room-d')?.value);
  const result = document.getElementById('fit-result');

  if (!selectedItem || !result) return;
  if (!roomW || !roomD) {
    result.innerHTML = `<p class="fit-warning">Please enter room dimensions</p>`;
    return;
  }

  const itemW = selectedItem.dims.w * 100;
  const itemD = selectedItem.dims.d * 100;
  const clearW = roomW - itemW;
  const clearD = roomD - itemD;
  const fits = clearW >= 60 && clearD >= 60;
  const tight = clearW >= 30 && clearD >= 30;

  if (fits) {
    result.innerHTML = `
      <div class="fit-result fit-ok">
        <span class="fit-icon">✓</span>
        <div>
          <strong>Fits comfortably</strong>
          <p>${clearW.toFixed(0)}cm × ${clearD.toFixed(0)}cm clearance</p>
        </div>
      </div>`;
  } else if (tight) {
    result.innerHTML = `
      <div class="fit-result fit-warn">
        <span class="fit-icon">⚠</span>
        <div>
          <strong>Tight fit</strong>
          <p>${clearW.toFixed(0)}cm × ${clearD.toFixed(0)}cm clearance — consider carefully</p>
        </div>
      </div>`;
  } else {
    result.innerHTML = `
      <div class="fit-result fit-bad">
        <span class="fit-icon">✕</span>
        <div>
          <strong>Won't fit</strong>
          <p>Item is ${Math.abs(Math.min(clearW, clearD)).toFixed(0)}cm too large for this room</p>
        </div>
      </div>`;
  }
}

// ── RETURN RISK ENGINE ──
function updateReturnRisk(item) {
  const el = document.getElementById('return-risk-content');
  if (!el) return;

  const timeViewed = itemViewedAt ? Math.round((Date.now() - itemViewedAt) / 1000) : 0;
  const priceRisk = item.price > 30000 ? 20 : item.price > 10000 ? 10 : 5;
  const dimRisk = (item.dims.w > 1.5 || item.dims.h > 1.5) ? 15 : 5;
  const baseScore = 100 - priceRisk - dimRisk;
  const score = Math.max(40, Math.min(95, baseScore));

  let label, color, advice;
  if (score >= 80) {
    label = 'Low Risk'; color = '#2DD4BF';
    advice = 'High confidence purchase based on dimensions and price point.';
  } else if (score >= 60) {
    label = 'Medium Risk'; color = '#C9A84C';
    advice = 'Consider measuring your space carefully before purchasing.';
  } else {
    label = 'Higher Risk'; color = '#F87171';
    advice = 'Large item — verify dimensions and room clearance with Fit Checker.';
  }

  el.innerHTML = `
    <div class="risk-score-wrap">
      <div class="risk-score-circle" style="--score-color:${color}">
        <span class="risk-score-num">${score}</span>
        <span class="risk-score-label">/100</span>
      </div>
      <div class="risk-score-info">
        <div class="risk-label" style="color:${color}">${label}</div>
        <p class="risk-advice">${advice}</p>
      </div>
    </div>
  `;
}

// ── QUICK ADD ──
function updateQuickAdd(item) {
  const el = document.getElementById('quick-add-content');
  if (!el) return;

  el.innerHTML = `
    <div class="quick-add-item">
      <span class="quick-add-emoji">${item.emoji}</span>
      <div class="quick-add-info">
        <div class="quick-add-name">${item.name}</div>
        <div class="quick-add-price">${item.priceDisplay}</div>
      </div>
    </div>
    <button class="btn-primary full-width" onclick="addToCart(${item.id})">Add to Cart →</button>
  `;
}

// ── CART ──
function addToCart(id) {
  const item = CATALOG.find(i => i.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartCount();
  showToast(`${item.emoji} ${item.name} added to cart!`);
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
}

function openCart() {
  document.getElementById('cart-overlay').style.display = 'block';
  document.getElementById('cart-drawer').classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-overlay').style.display = 'none';
  document.getElementById('cart-drawer').classList.remove('open');
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!el) return;

  if (cart.length === 0) {
    el.innerHTML = '<p class="muted-text" style="padding:20px">Your cart is empty</p>';
    if (totalEl) totalEl.textContent = '₹0';
    return;
  }

  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="cart-item-emoji">${item.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.priceDisplay}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartCount();
  renderCartItems();
}

function checkout() {
  if (cart.length === 0) return showToast('Your cart is empty');
  closeCart();
  document.getElementById('success-overlay').style.display = 'flex';
  cart = [];
  updateCartCount();
}

function closeSuccess() {
  document.getElementById('success-overlay').style.display = 'none';
}

// ── AR ENVIRONMENT ──
function setEnv(env) {
  const viewer = document.getElementById('ar-model');
  if (!viewer) return;

  const envMap = {
    neutral: 'neutral',
    dawn: 'dawn',
    night: 'night'
  };

  document.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  viewer.setAttribute('environment-image', envMap[env] || 'neutral');
}

function toggleRotate() {
  const viewer = document.getElementById('ar-model');
  if (!viewer) return;

  autoRotateEnabled = !autoRotateEnabled;
  const btn = document.getElementById('rotate-btn');

  if (autoRotateEnabled) {
    viewer.setAttribute('auto-rotate', '');
    if (btn) btn.classList.add('active');
  } else {
    viewer.removeAttribute('auto-rotate');
    if (btn) btn.classList.remove('active');
  }
}

// ── MODEL VIEWER EVENTS ──
function initModelViewerEvents() {
  const viewer = document.getElementById('ar-model');
  if (!viewer) return;

  viewer.addEventListener('ar-status', (e) => {
    if (e.detail.status === 'session-started') {
      onARLaunched();
    }
  });
}

// ── AR LAUNCHED — show screenshot bar ──
function onARLaunched() {
  setTimeout(() => {
    const actionBar = document.getElementById('ar-action-bar');
    if (actionBar) actionBar.style.display = 'flex';
    showToast('📸 You can screenshot and share your AR room!');
  }, 1500);
}

// ── SCREENSHOT ──
async function captureRoom() {
  const viewer = document.querySelector('.ar-viewer-wrap');
  if (!viewer) return;

  showToast('📸 Capturing...');

  try {
    const canvas = await html2canvas(viewer, {
      backgroundColor: '#0d0d0d',
      scale: 2,
      useCORS: true,
      allowTaint: true
    });

    const link = document.createElement('a');
    link.download = `SpaceViz-${selectedItem?.name || 'Room'}-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast('✓ Screenshot saved!');

    // Try native share with image on mobile
    if (navigator.share && navigator.canShare) {
      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'SpaceViz-Room.png', { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `Check out this ${selectedItem?.name} on SpaceViz!`,
            text: 'I found the perfect furniture using AR — no measuring tape needed!',
            files: [file]
          });
        }
      });
    }
  } catch (err) {
    showToast('Screenshot failed — try again');
    console.error(err);
  }
}

// ── SHARE ──
function shareRoom() {
  const text = `Check out the ${selectedItem?.name || 'furniture'} I found on SpaceViz AR! ${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: 'My SpaceViz AR Room',
      text,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      showToast('🔗 Link copied — ready to share!');
    });
  }
}

// ── TOAST ──
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── KEYBOARD SHORTCUTS ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeSuccess();
  }
});
