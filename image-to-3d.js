// ── IMAGE TO 3D FEATURE ──
const REPLICATE_TOKEN = window.REPLICATE_TOKEN || ''; // paste your full token here

// ── INJECT UI INTO APP PAGE ──
document.addEventListener('DOMContentLoaded', () => {
  injectImageTo3DSection();
});

function injectImageTo3DSection() {
  const aiChat = document.getElementById('ai-chat');
  if (!aiChat) return;

  const section = document.createElement('section');
  section.id = 'image-to-3d';
  section.innerHTML = `
    <div class="section-header">
      <p class="section-label">AI 3D Generation</p>
      <h2 class="section-title" style="font-size:clamp(28px,4vw,48px)">
        Upload Any Image.<br/><em>Get a 3D Model.</em>
      </h2>
      <p class="section-sub" style="margin-bottom:40px">
        Photograph any furniture or object — our AI converts it into a
        3D model you can place directly in your room via AR.
      </p>
    </div>

    <div class="i3d-layout">

      <!-- Upload Zone -->
      <div class="i3d-upload-zone" id="i3d-drop-zone">
        <input type="file" id="i3d-file-input" accept="image/*" style="display:none" onchange="handleImageUpload(event)"/>
        <div class="i3d-upload-icon">⬆</div>
        <h3>Drop your image here</h3>
        <p>or click to browse — JPG, PNG, WEBP supported</p>
        <button class="btn-primary" onclick="document.getElementById('i3d-file-input').click()">
          Choose Image
        </button>
      </div>

      <!-- Preview + Status -->
      <div class="i3d-preview-panel" id="i3d-preview-panel" style="display:none">

        <div class="i3d-image-preview">
          <img id="i3d-preview-img" src="" alt="Uploaded image"/>
          <div class="i3d-image-label">Source Image</div>
        </div>

        <div class="i3d-arrow">→</div>

        <div class="i3d-status-box" id="i3d-status-box">
          <div class="i3d-status-icon" id="i3d-status-icon">◎</div>
          <div class="i3d-status-text" id="i3d-status-text">Ready to generate</div>
          <div class="i3d-progress" id="i3d-progress" style="display:none">
            <div class="i3d-progress-bar" id="i3d-progress-bar"></div>
          </div>
          <button class="btn-primary full-width" id="i3d-generate-btn" onclick="generateModel()">
            Generate 3D Model
          </button>
        </div>

      </div>

      <!-- Result -->
      <div class="i3d-result" id="i3d-result" style="display:none">
        <div class="panel-card-header" style="margin-bottom:16px">
          <span class="panel-dot teal"></span>
          <h3 style="font-family:var(--font-display);font-size:20px;color:var(--white)">
            3D Model Ready
          </h3>
        </div>
        <p style="font-size:13px;color:var(--white-60);margin-bottom:16px">
          Your image has been converted to a 3D model. Click below to load it in the AR viewer.
        </p>
        <button class="btn-primary full-width" id="i3d-load-btn" onclick="loadGeneratedModel()">
          ▶ View in AR Studio
        </button>
        <button class="btn-ghost full-width" style="margin-top:8px" onclick="resetImageTo3D()">
          Try Another Image
        </button>
      </div>

    </div>
  `;

  aiChat.parentNode.insertBefore(section, aiChat);
  setupDragDrop();
}

// ── DRAG AND DROP ──
function setupDragDrop() {
  const zone = document.getElementById('i3d-drop-zone');
  if (!zone) return;

  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('drag-over');
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      processImageFile(file);
    }
  });
}

// ── HANDLE FILE INPUT ──
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) processImageFile(file);
}

let uploadedImageBase64 = null;
let generatedModelUrl   = null;

function processImageFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImageBase64 = e.target.result;

    // Show preview
    document.getElementById('i3d-preview-img').src = uploadedImageBase64;
    document.getElementById('i3d-drop-zone').style.display    = 'none';
    document.getElementById('i3d-preview-panel').style.display = 'flex';
    document.getElementById('i3d-result').style.display        = 'none';

    setStatus('idle', 'Ready to generate your 3D model');
  };
  reader.readAsDataURL(file);
}

// ── GENERATE 3D MODEL ──
async function generateModel() {
  if (!uploadedImageBase64) {
    showToast('Please upload an image first');
    return;
  }

  const btn = document.getElementById('i3d-generate-btn');
  btn.disabled = true;
  btn.textContent = 'Generating...';

  setStatus('loading', 'Sending image to AI...');
  showProgress(true);

  try {
    // Step 1 — Create prediction
    setStatus('loading', 'Analysing image structure...');
    animateProgress(20);

    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${REPLICATE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        version: '851e4a2c7e38457c9e24b5e49b642be9c3bccd72d0cc2f3a17699c4e6fd77de6',
        input: {
          image: uploadedImageBase64,
          do_remove_background: true,
          foreground_ratio: 0.85
        }
      })
    });

    const prediction = await response.json();

    if (!prediction.id) {
      throw new Error(prediction.detail || 'Failed to start generation');
    }

    // Step 2 — Poll for result
    setStatus('loading', 'Building 3D geometry...');
    animateProgress(50);

    const modelUrl = await pollPrediction(prediction.id);
    generatedModelUrl = modelUrl;

    animateProgress(100);
    setStatus('success', '3D model generated successfully!');

    setTimeout(() => {
      document.getElementById('i3d-preview-panel').style.display = 'none';
      document.getElementById('i3d-result').style.display = 'block';
      showProgress(false);
    }, 800);

  } catch (err) {
    console.error(err);
    setStatus('error', 'Generation failed. Please try a clearer image.');
    showProgress(false);
    btn.disabled = false;
    btn.textContent = 'Try Again';
  }
}

// ── POLL FOR RESULT ──
async function pollPrediction(id) {
  const maxAttempts = 60;
  let attempts = 0;

  while (attempts < maxAttempts) {
    await sleep(3000);
    attempts++;

    const res  = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      headers: { 'Authorization': `Token ${REPLICATE_TOKEN}` }
    });
    const data = await res.json();

    if (data.status === 'succeeded') {
      // TripoSR returns mesh url
      const output = Array.isArray(data.output) ? data.output[0] : data.output;
      return output;
    }

    if (data.status === 'failed') {
      throw new Error('Model generation failed');
    }

    // Update progress
    const progress = Math.min(50 + (attempts / maxAttempts) * 45, 95);
    animateProgress(progress);
    setStatus('loading', getLoadingMessage(attempts));
  }

  throw new Error('Generation timed out');
}

function getLoadingMessage(attempt) {
  const messages = [
    'Analysing image structure...',
    'Detecting object boundaries...',
    'Building 3D geometry...',
    'Applying surface textures...',
    'Optimising mesh for AR...',
    'Almost ready...'
  ];
  return messages[Math.min(Math.floor(attempt / 3), messages.length - 1)];
}

// ── LOAD GENERATED MODEL IN AR VIEWER ──
function loadGeneratedModel() {
  if (!generatedModelUrl) return;

  const viewer = document.getElementById('ar-model');
  if (viewer) {
    viewer.src = generatedModelUrl;
    const placeholder = document.getElementById('ar-placeholder');
    if (placeholder) placeholder.style.display = 'none';
  }

  // Update selected info panel
  const info = document.getElementById('selected-info');
  if (info) {
    info.innerHTML = `
      <div class="selected-item-info">
        <div style="font-size:48px;margin-bottom:12px">📸</div>
        <div class="selected-item-name">Custom 3D Model</div>
        <div class="selected-item-dims">Generated from your image</div>
        <div class="selected-item-tag">AI Generated</div>
      </div>
    `;
  }

  showToast('📸 Custom 3D model loaded in AR viewer');

  // Scroll to AR studio
  setTimeout(() => {
    document.getElementById('ar-studio')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 300);
}

// ── RESET ──
function resetImageTo3D() {
  uploadedImageBase64 = null;
  generatedModelUrl   = null;

  document.getElementById('i3d-drop-zone').style.display     = 'block';
  document.getElementById('i3d-preview-panel').style.display = 'none';
  document.getElementById('i3d-result').style.display        = 'none';
  document.getElementById('i3d-file-input').value            = '';

  const btn = document.getElementById('i3d-generate-btn');
  if (btn) { btn.disabled = false; btn.textContent = 'Generate 3D Model'; }
}

// ── UI HELPERS ──
function setStatus(type, message) {
  const icon = document.getElementById('i3d-status-icon');
  const text = document.getElementById('i3d-status-text');
  if (!icon || !text) return;

  const icons = { idle: '◎', loading: '◌', success: '✓', error: '✗' };
  const colors = {
    idle:    'var(--white-30)',
    loading: 'var(--gold)',
    success: 'var(--teal)',
    error:   '#ff6b6b'
  };

  icon.textContent  = icons[type]  || '◎';
  icon.style.color  = colors[type] || 'var(--white-30)';
  text.textContent  = message;
  text.style.color  = colors[type] || 'var(--white-60)';
}

function showProgress(show) {
  const el = document.getElementById('i3d-progress');
  if (el) el.style.display = show ? 'block' : 'none';
}

function animateProgress(percent) {
  const bar = document.getElementById('i3d-progress-bar');
  if (bar) bar.style.width = `${percent}%`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}