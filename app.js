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
    color: "#C9A84C",
    variants: [
      { name: "Royal Blue",  hex: "#1B3A8C" },
      { name: "Emerald",     hex: "#1B5E3B" },
      { name: "Charcoal",    hex: "#2C2C2C" },
      { name: "Burgundy",    hex: "#6B1E2E" }
    ]
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
    color: "#2DD4BF",
    variants: [
      { name: "Cream",       hex: "#F5F0E8" },
      { name: "Teal",        hex: "#2DD4BF" },
      { name: "Blush Pink",  hex: "#E8A0A0" },
      { name: "Slate",       hex: "#4A6FA5" }
    ]
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
    color: "#92603A",
    variants: [
      { name: "Walnut",      hex: "#5C3D1E" },
      { name: "Oak",         hex: "#C8A96E" },
      { name: "Ebony",       hex: "#1A1008" },
      { name: "White Ash",   hex: "#E8E0D0" }
    ]
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
    color: "#4A6FA5",
    variants: [
      { name: "Natural",     hex: "#C8A96E" },
      { name: "Black",       hex: "#1A1A1A" },
      { name: "White",       hex: "#F0EDE8" },
      { name: "Teak",        hex: "#8B5E3C" }
    ]
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
    color: "#C9A84C",
    variants: [
      { name: "Brass",       hex: "#C9A84C" },
      { name: "Matte Black", hex: "#1A1A1A" },
      { name: "Chrome",      hex: "#C0C0C0" },
      { name: "Copper",      hex: "#B87333" }
    ]
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
    color: "#2D6A4F",
    variants: [
      { name: "Terracotta",  hex: "#C4622D" },
      { name: "White",       hex: "#F0EDE8" },
      { name: "Black",       hex: "#1A1A1A" },
      { name: "Sage",        hex: "#7D9B76" }
    ]
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
    color: "#8B5E3C",
    variants: [
      { name: "Pine",        hex: "#C8A96E" },
      { name: "Walnut",      hex: "#5C3D1E" },
      { name: "White",       hex: "#F0EDE8" },
      { name: "Black Oak",   hex: "#1A1008" }
    ]
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
    color: "#7B2D8B",
    variants: [
      { name: "Violet",      hex: "#7B2D8B" },
      { name: "Midnight",    hex: "#1B1B3A" },
      { name: "Blush",       hex: "#E8A0A0" },
      { name: "Forest",      hex: "#1B5E3B" }
    ]
  }
];

// ── STATE ──
let selectedItem = null;
let cart         = [];
let roomItems    = [];
let compareItems = [];
let itemViewedAt = null;
let riskTimer    = null;
let arLaunched   = false;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();
  setupModelViewerEvents();
});

// ── SETUP MODEL VIEWER EVENTS ──
function setupModelViewerEvents() {
  const viewer = document.getElementById('ar-model');
  if (!viewer) return;

  viewer.addEventListener('ar-status', (e) => {
    if (e.detail.status === 'session-started') {
      const actionBar = document.getElementById('ar-action-bar');
      if (actionBar) actionBar.style.display = 'flex';
    }
    if (e.detail.status === 'not-presenting') {
      const actionBar = document.getElementById('ar-action-bar');
      if (actionBar) actionBar.style.display = 'none';
    }
  });

  viewer.addEventListener('load', () => {
    console.log('✓ 3D model loaded:', viewer.src);
  });

  viewer.addEventListener('error', () => {
    viewer.src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
  });
}

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
        style="background: linear-gradient(135deg, ${item.color}99 0%, ${item.color}44 100%); border-bottom: 1px solid ${item.color}33;"
      >
        <span style="font-size:90px;line-height:1;display:block;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.4));transform:translateY(4px);transition:transform 0.4s ease;">${item.emoji}</span>
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
  arLaunched   = false;

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

  // Load 3D model
  const viewer = document.getElementById('ar-model');
  if (viewer) {
    viewer.src = item.model;
    const placeholder = document.getElementById('ar-placeholder');
    if (placeholder) placeholder.style.display = 'none';
  }

  // Hide share bar
  const actionBar = document.getElementById('ar-action-bar');
  if (actionBar) actionBar.style.display = 'none';

  // Show fallback launch button
  const fallbackBar = document.getElementById('ar-fallback-bar');
  if (fallbackBar) fallbackBar.style.display = 'flex';

  // Update panels
  updateSelectedInfo(item);
  updateQuickAdd(item);

  // Reset fit result
  const fitResult = document.getElementById('fit-result');
  if (fitResult) {
    fitResult.className = 'fit-result hidden';
    fitResult.innerHTML = '';
  }

  // Hide risk card
  const riskCard = document.getElementById('risk-card');
  if (riskCard) riskCard.style.display = 'none';

  // Start return risk timer
  startRiskTimer(item);

  // Add to room & comparison
  addToRoom(item);
  addToComparison(item);

  showToast(`${item.emoji} ${item.name} added to room — click "Launch in Your Room" for AR`);

  // Smooth scroll to AR studio
  setTimeout(() => {
    document.getElementById('ar-studio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

// ── ON AR LAUNCHED ──
function onARLaunched() {
  arLaunched = true;

  const fallbackBar = document.getElementById('ar-fallback-bar');
  if (fallbackBar) fallbackBar.style.display = 'none';

  setTimeout(() => {
    const actionBar = document.getElementById('ar-action-bar');
    if (actionBar) actionBar.style.display = 'flex';
    showToast('📸 AR active — tap Share to share your room!');
  }, 1500);
}

// ── UPDATE SELECTED INFO ──
function updateSelectedInfo(item) {
  const info = document.getElementById('selected-info');
  if (!info) return;

  info.innerHTML = `
    <div class="selected-item-info">
      <div style="font-size:52px;margin-bottom:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.3))">${item.emoji}</div>
      <div class="selected-item-name">${item.name}</div>
      <div class="selected-item-dims">${item.dimsDisplay}</div>
      <div class="selected-item-price">${item.priceDisplay}</div>
      <div class="selected-item-tag">${item.category}</div>

      ${item.variants ? `
      <div class="colour-switcher">
        <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--white-30);margin-bottom:10px;">Colour Variants</div>
        <div class="colour-dots">
          ${item.variants.map((v, i) => `
            <button
              class="colour-dot ${i === 0 ? 'active' : ''}"
              style="background:${v.hex};"
              title="${v.name}"
              onclick="applyColour(${item.id}, '${v.hex}', '${v.name}', this)"
            ></button>
          `).join('')}
        </div>
        <div id="colour-label" style="font-size:12px;color:var(--gold);margin-top:8px;letter-spacing:1px;">${item.variants[0].name}</div>
      </div>
      ` : ''}
    </div>
  `;
}

// ── APPLY COLOUR ──
function applyColour(itemId, hex, name, btn) {
  document.querySelectorAll('.colour-dot').forEach(d => d.classList.remove('active'));
  btn.classList.add('active');

  const label = document.getElementById('colour-label');
  if (label) label.textContent = name;

  const viewer = document.getElementById('ar-model');
  if (!viewer) return;

  const r = parseInt(hex.slice(1,3), 16) / 255;
  const g = parseInt(hex.slice(3,5), 16) / 255;
  const b = parseInt(hex.slice(5,7), 16) / 255;

  viewer.model?.materials?.forEach(material => {
    material.pbrMetallicRoughness?.setBaseColorFactor([r, g, b, 1]);
  });

  showToast(`✓ Colour changed to ${name}`);
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
      ${clearW < 0 ? `Item is <strong>${Math.abs(clearW * 100).toFixed(0)}cm too wide</strong> for your room.` : ''}
      ${clearD < 0 ? `Item is <strong>${Math.abs(clearD * 100).toFixed(0)}cm too deep</strong> for your room.` : ''}
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
          High return risk detected — take a moment to confirm the fit before checkout.
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

// ── SHARE AR VIEW ──
function shareARView() {
  const itemName = selectedItem?.name || 'furniture';
  const price = selectedItem?.priceDisplay || '';

  if (navigator.share) {
    navigator.share({
      title: `SpaceViz AR — ${itemName}`,
      text: `Just placed the ${itemName} (${price}) in my actual room using SpaceViz AR — no app, no download, works right in the browser! Try it:`,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(
      `Just placed the ${itemName} (${price}) in my room using SpaceViz AR! Try it: ${window.location.href}`
    ).then(() => showToast('🔗 Share text copied!'));
  }
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
    container.innerHTML = `<p class="muted-text" style="padding:24px 0;text-align:center">Your cart is empty</p>`;
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

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}

// ── ROOM BUILDER ──
function addToRoom(item) {
  const existing = roomItems.find(r => r.id === item.id);
  if (existing) {
    return; // silently skip — toast shown by selectItem
  }

  roomItems.push(item);
  updateRoomUI();
}

function removeFromRoom(id) {
  roomItems = roomItems.filter(r => r.id !== id);
  updateRoomUI();
}

function updateRoomUI() {
  const list   = document.getElementById('room-items-list');
  const footer = document.getElementById('room-footer');
  const count  = document.getElementById('room-item-count');
  const total  = document.getElementById('room-total');
  if (!list) return;

  count.textContent = `${roomItems.length} item${roomItems.length !== 1 ? 's' : ''}`;

  if (roomItems.length === 0) {
    list.innerHTML = `<p class="muted-text">Add items from the catalog to build your room</p>`;
    footer.style.display = 'none';
    return;
  }

  const totalPrice = roomItems.reduce((sum, i) => sum + i.price, 0);
  total.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
  footer.style.display = 'block';

  list.innerHTML = roomItems.map(item => `
    <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);">
      <span style="font-size:24px">${item.emoji}</span>
      <div style="flex:1;">
        <div style="font-size:14px;color:var(--white)">${item.name}</div>
        <div style="font-size:12px;color:var(--gold);font-family:var(--font-display)">${item.priceDisplay}</div>
      </div>
      <button onclick="removeFromRoom(${item.id})" style="background:none;border:none;color:var(--white-30);cursor:pointer;font-size:16px;padding:4px;">✕</button>
    </div>
  `).join('');
}

function addRoomToCart() {
  if (roomItems.length === 0) return;
  roomItems.forEach(item => addToCart(item));
  showToast(`✓ All ${roomItems.length} room items added to cart!`);
}

function clearRoom() {
  roomItems = [];
  updateRoomUI();
  showToast('Room cleared');
}

// ── BUDGET PLANNER ──
function updateBudgetPlanner() {
  const budget = parseInt(document.getElementById('budget-input')?.value) || 0;
  const results = document.getElementById('budget-results');
  if (!results) return;

  if (!budget || budget < 1000) {
    results.innerHTML = `<p class="muted-text">Enter your budget to see what fits</p>`;
    return;
  }

  const affordable = CATALOG.filter(i => i.price <= budget).sort((a, b) => b.price - a.price);

  // Find best combo that fits within budget
  let best = [], bestTotal = 0;
  for (let i = 0; i < CATALOG.length; i++) {
    let combo = [CATALOG[i]];
    let total = CATALOG[i].price;
    for (let j = 0; j < CATALOG.length; j++) {
      if (j !== i && total + CATALOG[j].price <= budget) {
        combo.push(CATALOG[j]);
        total += CATALOG[j].price;
      }
    }
    if (total > bestTotal) { best = combo; bestTotal = total; }
  }

  if (affordable.length === 0) {
    results.innerHTML = `<div style="padding:12px;background:rgba(239,68,68,0.1);border-radius:10px;color:#EF4444;font-size:13px;">No items fit within ₹${budget.toLocaleString('en-IN')}</div>`;
    return;
  }

  results.innerHTML = `
    <div style="margin-bottom:10px;font-size:12px;color:var(--white-30);">${affordable.length} item${affordable.length!==1?'s':''} within budget</div>
    ${affordable.slice(0,4).map(item => `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);">
        <span style="font-size:20px">${item.emoji}</span>
        <div style="flex:1;">
          <div style="font-size:13px;color:var(--white)">${item.name}</div>
          <div style="font-size:12px;color:var(--gold);font-family:var(--font-display)">${item.priceDisplay}</div>
        </div>
        <div style="font-size:11px;color:#4ADE80">✓ Fits</div>
      </div>
    `).join('')}
    ${best.length > 1 ? `
    <div style="margin-top:12px;padding:10px;background:rgba(201,168,76,0.08);border-radius:10px;border:1px solid rgba(201,168,76,0.2);">
      <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--gold);margin-bottom:6px;">Best Combo</div>
      <div style="font-size:13px;color:var(--white)">${best.map(i=>i.emoji+' '+i.name).join(' + ')}</div>
      <div style="font-size:12px;color:var(--gold);margin-top:4px;font-family:var(--font-display)">₹${bestTotal.toLocaleString('en-IN')} / ₹${budget.toLocaleString('en-IN')}</div>
      <button onclick="applyBestCombo()" style="margin-top:8px;width:100%;padding:8px;background:var(--gold);color:var(--black);border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:var(--font-body);">Add Best Combo to Room</button>
    </div>` : ''}
  `;
}

function applyBestCombo() {
  const budget = parseInt(document.getElementById('budget-input')?.value) || 0;
  let best = [], bestTotal = 0;
  for (let i = 0; i < CATALOG.length; i++) {
    let combo = [CATALOG[i]], total = CATALOG[i].price;
    for (let j = 0; j < CATALOG.length; j++) {
      if (j !== i && total + CATALOG[j].price <= budget) { combo.push(CATALOG[j]); total += CATALOG[j].price; }
    }
    if (total > bestTotal) { best = combo; bestTotal = total; }
  }
  clearRoom();
  best.forEach(item => { roomItems.push(item); });
  updateRoomUI();
  showToast(`✓ Best combo added — ₹${bestTotal.toLocaleString('en-IN')}`);
}

// ── ROOM STYLE PRESETS ──
const PRESETS = {
  nordic:     { label: '🏔️ Nordic — Clean lines, light wood, calm whites', items: [1, 3, 5] },
  boho:       { label: '🌿 Boho — Warm textures, plants, earthy tones',    items: [2, 6, 5] },
  industrial: { label: '⚙️ Industrial — Raw, dark, edgy statement pieces', items: [1, 4, 5] },
  luxury:     { label: '👑 Luxury — Velvet, gold accents, bold pieces',    items: [8, 1, 5] },
  minimal:    { label: '◻️ Minimal — Less is more, only essentials',       items: [3, 2, 5] },
  japandi:    { label: '🎋 Japandi — Japanese zen meets Scandi simplicity', items: [7, 3, 6] },
};

function applyPreset(key, evt) {
  const preset = PRESETS[key];
  if (!preset) return;

  document.querySelectorAll('.style-preset-btn').forEach(b => b.classList.remove('active'));
  if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');

  clearRoom();
  preset.items.forEach(id => {
    const item = CATALOG.find(c => c.id === id);
    if (item) roomItems.push(item);
  });
  updateRoomUI();

  const label = document.getElementById('preset-label');
  if (label) label.textContent = preset.label;

  showToast(`✓ ${preset.label.split('—')[0].trim()} style applied`);
}

// ── COMPARISON MODE ──
function addToComparison(item) {
  if (compareItems.find(c => c.id === item.id)) return;
  if (compareItems.length >= 2) compareItems.shift();
  compareItems.push(item);
  updateCompareUI();
}

function updateCompareUI() {
  const count = document.getElementById('compare-count');
  if (count) count.textContent = `${compareItems.length}/2`;

  [0, 1].forEach(i => {
    const slot = document.getElementById(`compare-slot-${i}`);
    if (!slot) return;
    const item = compareItems[i];
    slot.innerHTML = item
      ? `<div style="font-size:24px">${item.emoji}</div><div style="font-size:11px;color:var(--white);margin-top:4px;text-align:center">${item.name}</div><div style="font-size:11px;color:var(--gold);font-family:var(--font-display)">${item.priceDisplay}</div>`
      : `<span class="muted-text" style="font-size:12px;">Slot ${i+1}</span>`;
  });

  const result = document.getElementById('compare-result');
  if (!result) return;

  if (compareItems.length < 2) {
    result.innerHTML = compareItems.length === 1
      ? `<p class="muted-text" style="font-size:12px;">Select one more item to compare</p>`
      : `<p class="muted-text" style="font-size:12px;">Click items in catalog to compare</p>`;
    return;
  }

  const [a, b] = compareItems;
  const cheaper = a.price < b.price ? a : b;
  const diff = Math.abs(a.price - b.price);
  const larger = a.dims.w * a.dims.d > b.dims.w * b.dims.d ? a : b;

  result.innerHTML = `
    <div style="background:var(--dark3);border-radius:12px;padding:12px;border:1px solid var(--border);">
      <div class="compare-row"><span>Price</span><span style="color:var(--gold)">${a.priceDisplay}</span><span style="color:var(--gold)">${b.priceDisplay}</span></div>
      <div class="compare-row"><span>Size</span><span>${a.dims.w}×${a.dims.d}m</span><span>${b.dims.w}×${b.dims.d}m</span></div>
      <div class="compare-row"><span>Category</span><span>${a.category}</span><span>${b.category}</span></div>
      <div style="margin-top:10px;padding:8px;background:rgba(201,168,76,0.08);border-radius:8px;font-size:12px;color:var(--white-30);">
        💡 <strong style="color:var(--white)">${cheaper.name}</strong> saves you <strong style="color:#4ADE80">₹${diff.toLocaleString('en-IN')}</strong> · 
        <strong style="color:var(--white)">${larger.name}</strong> is the larger piece
      </div>
    </div>
  `;
}

function clearComparison() {
  compareItems = [];
  updateCompareUI();
}

// ── KEYBOARD ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeSuccess();
  }
});
