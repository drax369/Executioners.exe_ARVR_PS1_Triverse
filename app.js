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
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
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
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
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
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
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
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
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
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
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
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
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
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
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
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    color: "#7B2D8B"
  }
];

// ── STATE ──
let selectedItem = null;
let cart         = [];
let itemViewedAt = null;
let riskTimer    = null;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();
});

// ── RENDER CATALOG ──
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  grid.innerHTML = CATALOG.map(item => `
    <div
      class="catalog-card"
      id="card-${item.id}"
      onclick="selectItem(${item.id})"
    >
      <div class="catalog-card-img-placeholder"
        style="
          background: linear-gradient(135deg, ${item.color}99 0%, ${item.color}44 100%);
          border-bottom: 1px solid ${item.color}33;
        "
      >
        <span style="
          font-size: 90px;
          line-height: 1;
          display: block;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.4));
          transform: translateY(4px);
          transition: transform 0.4s ease;
        ">${item.emoji}</span>
      </div>
      <div class="catalog-card-body">
        <div class="catalog-card-name">${item.name}</div>
        <div class="catalog-card-dims">${item.dimsDisplay}</div>
        <div class="catalog-card-footer">
          <div class="catalog-card-price">${item.priceDisplay}</div>
          <div class="catalog-card-tag">${item.tag}</div>
        </div>
      </div>
    </div>
  `).join('');
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

  // Load model
  const viewer = document.getElementById('ar-model');
  if (viewer) {
    viewer.src = item.model;
    const placeholder = document.getElementById('ar-placeholder');
    if (placeholder) placeholder.style.display = 'none';
  }

  // Update panels
  updateSelectedInfo(item);
  updateQuickAdd(item);

  // Reset fit result
  const fitResult = document.getElementById('fit-result');
  if (fitResult) {
    fitResult.className = 'fit-result hidden';
    fitResult.innerHTML = '';
  }

  // Start return risk timer
  startRiskTimer(item);

  // Show toast
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
  const info = document.getElementById('selected-info');
  if (!info) return;

  info.innerHTML = `
    <div class="selected-item-info">
      <div style="
        font-size: 52px;
        margin-bottom: 12px;
        filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
      ">${item.emoji}</div>
      <div class="selected-item-name">${item.name}</div>
      <div class="selected-item-dims">${item.dimsDisplay}</div>
      <div class="selected-item-price">${item.priceDisplay}</div>
      <div class="selected-item-tag">${item.category}</div>
    </div>
  `;
}

// ── UPDATE QUICK ADD ──
function updateQuickAdd(item) {
  const card = document.getElementById('quick-add-card');
  const info = document.getElementById('quick-add-info');
  if (!card || !info) return;

  info.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <span style="font-size:36px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.3))">${item.emoji}</span>
      <div>
        <div style="font-size:15px;color:var(--white);margin-bottom:4px">${item.name}</div>
        <div style="font-family:var(--font-display);font-size:22px;color:var(--gold)">${item.priceDisplay}</div>
      </div>
    </div>
  `;
  card.style.display = 'block';
}

// ── FIT CHECKER ──
function checkFit() {
  if (!selectedItem) {
    showToast('Please select a furniture item first');
    return;
  }

  const roomW = parseFloat(document.getElementById('room-width')?.value);
  const roomL = parseFloat(document.getElementById('room-length')?.value);

  if (!roomW || !roomL || roomW <= 0 || roomL <= 0) {
    showToast('Please enter valid room dimensions');
    return;
  }

  const item     = selectedItem;
  const itemW    = item.dims.w;
  const itemD    = item.dims.d;
  const clearW   = roomW - itemW;
  const clearD   = roomL - itemD;
  const minClear = 0.6;

  const fitResult = document.getElementById('fit-result');
  if (!fitResult) return;

  fitResult.classList.remove('hidden', 'fit-pass', 'fit-fail', 'fit-warn');

  if (clearW < 0 || clearD < 0) {
    fitResult.classList.add('fit-fail');
    fitResult.innerHTML = `
      <span class="fit-result-icon">✗</span>
      <strong>Does Not Fit</strong>
      ${clearW < 0
        ? `Item is <strong>${Math.abs(clearW * 100).toFixed(0)}cm too wide</strong> for your room.`
        : ''}
      ${clearD < 0
        ? `Item is <strong>${Math.abs(clearD * 100).toFixed(0)}cm too deep</strong> for your room.`
        : ''}
      <br/>Consider a smaller alternative or a different wall placement.
    `;
  } else if (clearW < minClear || clearD < minClear) {
    fitResult.classList.add('fit-warn');
    fitResult.innerHTML = `
      <span class="fit-result-icon">⚠</span>
      <strong>Fits — But Tight</strong>
      Width clearance: <strong>${(clearW * 100).toFixed(0)}cm</strong> &nbsp;·&nbsp;
      Depth clearance: <strong>${(clearD * 100).toFixed(0)}cm</strong><br/>
      Minimum recommended walkway is 60cm. This may feel cramped.
    `;
  } else {
    fitResult.classList.add('fit-pass');
    fitResult.innerHTML = `
      <span class="fit-result-icon">✓</span>
      <strong>Perfect Fit</strong>
      Width clearance: <strong>${(clearW * 100).toFixed(0)}cm</strong> &nbsp;·&nbsp;
      Depth clearance: <strong>${(clearD * 100).toFixed(0)}cm</strong><br/>
      Comfortable walkway space on all sides. Go ahead and order!
    `;
  }
}

// ── RETURN RISK ENGINE ──
function startRiskTimer(item) {
  if (riskTimer) clearTimeout(riskTimer);

  const riskCard   = document.getElementById('risk-card');
  const riskResult = document.getElementById('risk-result');
  if (!riskCard || !riskResult) return;

  riskCard.style.display = 'none';

  riskTimer = setTimeout(() => {
    const dwellTime = (Date.now() - itemViewedAt) / 1000;
    let riskHTML;

    if (dwellTime < 15) {
      riskHTML = `
        <div class="risk-high">
          <strong style="display:block;margin-bottom:8px">⚠ Review carefully before buying</strong>
          You've viewed this item for under 15 seconds.
          High return risk detected — take a moment to check it
          in different colours and confirm the fit before checkout.
        </div>
      `;
    } else if (dwellTime < 45) {
      riskHTML = `
        <div class="risk-medium">
          <strong style="display:block;margin-bottom:8px">◎ Moderate confidence</strong>
          You're spending time reviewing this piece — good sign.
          Try the Fit Checker above to confirm dimensions before ordering.
        </div>
      `;
    } else {
      riskHTML = `
        <div class="risk-low">
          <strong style="display:block;margin-bottom:8px">✓ High purchase confidence</strong>
          You've reviewed this item thoroughly.
          You're making an informed decision — great choice!
        </div>
      `;
    }

    riskResult.innerHTML = riskHTML;
    riskCard.style.display = 'block';
  }, 8000);
}

// ── CART ──
function addCurrentToCart() {
  if (!selectedItem) {
    showToast('Please select an item first');
    return;
  }
  addToCart(selectedItem);
}

function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  showToast(`${item.emoji} ${item.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count   = cart.reduce((sum, i) => sum + (i.qty || 1), 0);
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = count;
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl   = document.getElementById('cart-total');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <p class="muted-text" style="padding:24px 0;text-align:center">
        Your cart is empty
      </p>`;
    if (totalEl) totalEl.textContent = '₹0';
    return;
  }

  const total = cart.reduce((sum, i) => sum + i.price * (i.qty || 1), 0);

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.priceDisplay}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');

  if (totalEl) {
    totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

// ── CART MODAL ──
function openCart() {
  renderCartItems();
  document.getElementById('cart-modal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

// ── CHECKOUT ──
function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty');
    return;
  }

  closeCart();

  const orderId = '#SV' + Math.floor(Math.random() * 90000 + 10000);
  const orderEl = document.getElementById('order-id');
  if (orderEl) orderEl.textContent = orderId;

  document.getElementById('success-modal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  cart = [];
  updateCartUI();
}

function closeSuccess() {
  document.getElementById('success-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

// ── TOAST ──
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// ── KEYBOARD SHORTCUTS ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeSuccess();
  }
});