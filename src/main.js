// illumin8 Blinds & Curtains - Master Application Logic

import {
  BRAND_INFO,
  PRODUCTS,
  COLLECTIONS,
  BRANDS,
  SERVICES,
  SMART_HOME,
  ABOUT_US,
  EMPLOYEE_DATA
} from './data.js';

// Application State
const state = {
  activeLightMode: 'midday',
  curtainsOpen: false,
  slatsTilted: false,
  somfyPosition: 'half',
  swatchBag: ['Champagne Bouclé', 'FiftyTM Deep Carbon'],
  employeeLoggedIn: false,
  currentProductFilter: 'all'
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initMegaMenus();
  renderProducts();
  renderCollections();
  renderBrands();
  renderServices();
  renderLookbooks();
  renderNews();
  initLightSimulator();
  initSomfyDemo();
  initAboutTabs();
  initEmployeePortal();
  initSwatchDrawer();
  initGlobalSearch();
  initContactForm();
  initHeaderScroll();
  initMobileMenu();
  updateSwatchCounter();
});

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
export function showToast(message, type = 'gold') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' 
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   Header Scroll State
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   Mega-Menus Population
   ========================================================================== */
function initMegaMenus() {
  // Mega Products
  const productsGrid = document.getElementById('mega-products-grid');
  if (productsGrid) {
    productsGrid.innerHTML = PRODUCTS.map(prod => `
      <a href="#products-section" class="mega-card" data-product-id="${prod.id}">
        <img src="${prod.image}" alt="${prod.title}" class="mega-card-img" loading="lazy">
        <span class="mega-card-title">${prod.title}</span>
        <span class="mega-card-desc">${prod.subtitle}</span>
      </a>
    `).join('');

    productsGrid.querySelectorAll('.mega-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.productId;
        setProductFilter(id);
      });
    });
  }

  // Mega Collections
  const collectionsGrid = document.getElementById('mega-collections-grid');
  if (collectionsGrid) {
    collectionsGrid.innerHTML = COLLECTIONS.slice(0, 4).map(col => `
      <a href="#collections-section" class="mega-card" data-col-id="${col.id}">
        <img src="${col.image}" alt="${col.title}" class="mega-card-img" loading="lazy">
        <span class="mega-card-title">${col.title}</span>
        <span class="mega-card-desc">${col.tag}</span>
      </a>
    `).join('');
  }

  // Mega Brands
  const brandsGrid = document.getElementById('mega-brands-grid');
  if (brandsGrid) {
    brandsGrid.innerHTML = BRANDS.slice(0, 4).map(brand => `
      <a href="#brands-section" class="mega-card" data-brand-id="${brand.id}">
        <img src="${brand.image}" alt="${brand.title}" class="mega-card-img" loading="lazy">
        <span class="mega-card-title">${brand.title}</span>
        <span class="mega-card-desc">${brand.tag}</span>
      </a>
    `).join('');
  }

  // Mega Services
  const servicesGrid = document.getElementById('mega-services-grid');
  if (servicesGrid) {
    servicesGrid.innerHTML = SERVICES.map(srv => `
      <a href="#services-section" class="mega-card" data-service-id="${srv.id}">
        <img src="${srv.image}" alt="${srv.title}" class="mega-card-img" loading="lazy">
        <span class="mega-card-title">${srv.title}</span>
        <span class="mega-card-desc">${srv.subtitle}</span>
      </a>
    `).join('');
  }
}

/* ==========================================================================
   Product Rendering & Filtering
   ========================================================================== */
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = state.currentProductFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.id === state.currentProductFilter);

  container.innerHTML = filtered.map(prod => `
    <article class="product-card" id="card-${prod.id}">
      <div class="product-card-img-wrap">
        <span class="product-tag">${prod.tag}</span>
        <img src="${prod.image}" alt="${prod.title} by illumin8" class="product-card-img" loading="lazy">
      </div>
      <div class="product-card-body">
        <h3 class="product-title">${prod.title}</h3>
        <div class="product-subtitle">${prod.subtitle}</div>
        <p class="product-desc">${prod.shortDesc}</p>
        
        <div class="product-specs-pills">
          <span class="spec-pill"><strong>Light:</strong> ${prod.specs.lightControl}</span>
          <span class="spec-pill"><strong>Drive:</strong> ${prod.specs.motorization.split('/')[0]}</span>
        </div>

        <div class="product-card-footer">
          <button class="btn-card-action btn-card-details" data-detail-id="${prod.id}" type="button">
            View Anatomy & Specs
          </button>
          <button class="btn-card-action btn-card-swatch" data-swatch-name="${prod.swatches[0]}" type="button">
            + Swatch
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Attach button events
  container.querySelectorAll('[data-detail-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      openProductModal(btn.dataset.detailId);
    });
  });

  container.querySelectorAll('[data-swatch-name]').forEach(btn => {
    btn.addEventListener('click', () => {
      addSwatch(btn.dataset.swatchName);
    });
  });

  // Filter Buttons
  const filterBtns = document.querySelectorAll('#products-filter-bar .product-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setProductFilter(btn.dataset.filter);
    });
  });
}

function setProductFilter(filterId) {
  state.currentProductFilter = filterId;
  
  const filterBtns = document.querySelectorAll('#products-filter-bar .product-filter-btn');
  filterBtns.forEach(btn => {
    if (btn.dataset.filter === filterId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderProducts();

  const section = document.getElementById('products-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   Collections Rendering
   ========================================================================== */
function renderCollections() {
  const container = document.getElementById('collections-grid');
  if (!container) return;

  container.innerHTML = COLLECTIONS.map(col => `
    <div class="collection-card" data-col-id="${col.id}">
      <img src="${col.image}" alt="${col.title} by illumin8" class="collection-bg-img" loading="lazy">
      <div class="collection-overlay">
        <span class="collection-tag">${col.tag}</span>
        <h3 class="collection-name">${col.title}</h3>
        <p class="collection-desc">${col.description}</p>
        <button class="collection-link-btn" data-col-open="${col.id}" type="button">
          Explore Ensemble &rarr;
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-col-open]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCollectionModal(btn.dataset.colOpen);
    });
  });
}

/* ==========================================================================
   Brands Rendering
   ========================================================================== */
function renderBrands() {
  const container = document.getElementById('brands-grid');
  if (!container) return;

  container.innerHTML = BRANDS.map(brand => `
    <article class="brand-card" id="brand-${brand.id}">
      <div class="brand-img-wrap">
        <img src="${brand.image}" alt="${brand.title} at illumin8" class="brand-img" loading="lazy">
      </div>
      <div class="brand-card-body">
        <h3 class="brand-title">${brand.title}</h3>
        <div class="brand-subtitle">${brand.subtitle}</div>
        <p class="brand-desc">${brand.description}</p>
        
        <ul class="brand-highlights-list">
          ${brand.highlights.map(h => `<li class="brand-highlight-item">${h}</li>`).join('')}
        </ul>

        <button class="btn btn-outline" style="width: 100%; font-size: 0.78rem; padding: 10px;" data-brand-open="${brand.id}" type="button">
          View Licensed Patterns & Swatches
        </button>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('[data-brand-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      openBrandModal(btn.dataset.brandOpen);
    });
  });
}

/* ==========================================================================
   Services Rendering
   ========================================================================== */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = SERVICES.map(srv => `
    <div class="service-card" id="service-${srv.id}">
      <img src="${srv.image}" alt="${srv.title}" class="service-img" loading="lazy">
      <div class="service-content">
        <span class="product-tag" style="position: static; display: inline-block; width: fit-content; margin-bottom: 12px;">${srv.tag}</span>
        <h3 class="service-title">${srv.title}</h3>
        <div class="service-subtitle">${srv.subtitle}</div>
        <p class="service-desc">${srv.description}</p>
        
        <ul class="service-features-list">
          ${srv.features.map(f => `<li class="service-feature-item">${f}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Lookbooks & News Rendering
   ========================================================================== */
function renderLookbooks() {
  const container = document.getElementById('lookbooks-grid');
  if (!container) return;

  container.innerHTML = ABOUT_US.lookbooks.map(lb => `
    <div class="lookbook-card">
      <img src="${lb.cover}" alt="${lb.title}" class="lookbook-cover" loading="lazy">
      <div class="lookbook-info">
        <span class="ticker-badge" style="margin-bottom: 8px; display: inline-block;">${lb.season} • ${lb.pages} Pages</span>
        <h4 class="lookbook-title">${lb.title}</h4>
        <p class="lookbook-subtitle">${lb.subtitle}</p>
        <button class="btn btn-outline" style="width: 100%; font-size: 0.76rem;" data-lookbook-read="${lb.id}" type="button">
          Read Digital Edition (PDF Viewer)
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-lookbook-read]').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast(`Loading high-resolution 3D Lookbook (${btn.dataset.lookbookRead})...`, 'gold');
    });
  });
}

function renderNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;

  container.innerHTML = ABOUT_US.news.map(article => `
    <article class="news-card">
      <img src="${article.image}" alt="${article.title}" class="news-img" loading="lazy">
      <div class="news-body">
        <div class="news-date">${article.date}</div>
        <h4 class="news-title">${article.title}</h4>
        <p class="news-summary">${article.summary}</p>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   Interactive Light Simulator
   ========================================================================== */
function initLightSimulator() {
  const modeButtons = document.querySelectorAll('#light-mode-selector .light-mode-btn');
  const stage = document.getElementById('simulator-stage');
  const ambientCanvas = document.getElementById('hero-ambient-canvas');
  const glass = document.getElementById('simulator-glass');
  const curtainLeft = document.getElementById('curtain-left');
  const curtainRight = document.getElementById('curtain-right');
  const slats = document.querySelectorAll('.virtual-slat');
  const toggleCurtainBtn = document.getElementById('toggle-curtain-btn');
  const toggleSlatsBtn = document.getElementById('toggle-slats-btn');
  const curtainStatusText = document.getElementById('curtain-status-text');

  const lightConfigs = {
    morning: {
      bg: 'radial-gradient(circle at 65% 35%, rgba(245, 158, 11, 0.22) 0%, transparent 60%)',
      glassFilter: 'sepia(0.3) brightness(1.1) contrast(0.95)',
      curtainTransform: 'scaleX(0.4)',
      curtainText: 'Morning Soft Sheer (Open 60%)',
      slatRotate: 'rotateX(20deg)'
    },
    midday: {
      bg: 'radial-gradient(circle at 65% 35%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
      glassFilter: 'brightness(1.25) contrast(1.05)',
      curtainTransform: 'scaleX(0.65)',
      curtainText: 'Solar Filter Mode (Open 35%)',
      slatRotate: 'rotateX(0deg)'
    },
    dusk: {
      bg: 'radial-gradient(circle at 65% 35%, rgba(220, 38, 38, 0.25) 0%, transparent 60%)',
      glassFilter: 'hue-rotate(-20deg) saturate(1.4) brightness(0.9)',
      curtainTransform: 'scaleX(0.85)',
      curtainText: 'Golden Hour Cascade (Open 15%)',
      slatRotate: 'rotateX(45deg)'
    },
    night: {
      bg: 'radial-gradient(circle at 65% 35%, rgba(30, 58, 138, 0.25) 0%, transparent 60%)',
      glassFilter: 'brightness(0.3) contrast(1.2)',
      curtainTransform: 'scaleX(1)',
      curtainText: 'Total Midnight Blackout (Closed)',
      slatRotate: 'rotateX(85deg)'
    }
  };

  function applyMode(modeKey) {
    const config = lightConfigs[modeKey];
    if (!config) return;

    state.activeLightMode = modeKey;
    if (ambientCanvas) ambientCanvas.style.background = config.bg;
    if (glass) glass.style.backdropFilter = config.glassFilter;

    if (curtainLeft && curtainRight) {
      curtainLeft.style.transform = config.curtainTransform;
      curtainRight.style.transform = config.curtainTransform;
    }

    if (curtainStatusText) {
      curtainStatusText.textContent = config.curtainText;
    }

    slats.forEach(slat => {
      slat.style.transform = config.slatRotate;
    });

    modeButtons.forEach(btn => {
      if (btn.dataset.mode === modeKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    showToast(`Light Atmosphere: ${modeKey.toUpperCase()} Activated`, 'gold');
  }

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => applyMode(btn.dataset.mode));
  });

  if (toggleCurtainBtn) {
    toggleCurtainBtn.addEventListener('click', () => {
      state.curtainsOpen = !state.curtainsOpen;
      const targetTransform = state.curtainsOpen ? 'scaleX(0.15)' : 'scaleX(1)';
      curtainLeft.style.transform = targetTransform;
      curtainRight.style.transform = targetTransform;
      curtainStatusText.textContent = state.curtainsOpen ? 'Curtains Fully Gathered' : 'Curtains Drawn Full Blackout';
      showToast(state.curtainsOpen ? 'Curtains Opened' : 'Curtains Closed', 'gold');
    });
  }

  if (toggleSlatsBtn) {
    toggleSlatsBtn.addEventListener('click', () => {
      state.slatsTilted = !state.slatsTilted;
      const deg = state.slatsTilted ? 'rotateX(75deg)' : 'rotateX(0deg)';
      slats.forEach(s => s.style.transform = deg);
      showToast(state.slatsTilted ? 'Fifty TM Slats Tilted for Privacy' : 'Fifty TM Slats Horizontal for Maximum Light', 'gold');
    });
  }
}

/* ==========================================================================
   Somfy Motorized Blind Interactive Demo
   ========================================================================== */
function initSomfyDemo() {
  const remoteButtons = document.querySelectorAll('#somfy-remote-controls .remote-btn');
  const fabricShade = document.getElementById('somfy-fabric-shade');

  const positions = {
    open: { transform: 'translateY(-92%)', label: 'Raised 100%' },
    half: { transform: 'translateY(-50%)', label: 'My Position 50%' },
    closed: { transform: 'translateY(0%)', label: 'Closed Blackout' }
  };

  remoteButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const posKey = btn.dataset.blindPos;
      if (!positions[posKey] || !fabricShade) return;

      remoteButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      fabricShade.style.transform = positions[posKey].transform;
      state.somfyPosition = posKey;

      showToast(`Somfy Motor Command: ${positions[posKey].label}`, 'gold');
    });
  });

  const specsBtn = document.getElementById('smart-specs-modal-btn');
  if (specsBtn) {
    specsBtn.addEventListener('click', () => {
      openSomfyModal();
    });
  }
}

/* ==========================================================================
   About Us Tabs Navigation
   ========================================================================== */
function initAboutTabs() {
  const tabBtns = document.querySelectorAll('#about-tabs-nav .tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(tabKey) {
    tabBtns.forEach(btn => {
      if (btn.dataset.tab === tabKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabContents.forEach(content => {
      if (content.id === `tab-${tabKey}`) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Mega-menu and footer about-tab shortcuts
  document.querySelectorAll('[data-about-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
      const tab = link.dataset.aboutTab;
      if (tab) switchTab(tab);
    });
  });

  document.querySelectorAll('.footer-tab-trigger').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = link.dataset.tab;
      if (tab) {
        switchTab(tab);
        const section = document.getElementById('about-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   Employee Portal Login & Dashboard
   ========================================================================== */
function initEmployeePortal() {
  const modal = document.getElementById('employee-modal');
  const openButtons = [
    document.getElementById('topbar-employee-btn'),
    document.getElementById('footer-employee-portal-btn')
  ];
  const closeBtn = document.getElementById('employee-close-btn');
  const loginForm = document.getElementById('employee-login-form');
  const autofillBtn = document.getElementById('autofill-demo-btn');
  const loginView = document.getElementById('employee-login-view');
  const dashboardView = document.getElementById('employee-dashboard-view');
  const logoutBtn = document.getElementById('emp-logout-btn');
  const dialog = document.getElementById('employee-dialog');

  function openPortal() {
    modal.classList.add('active');
    if (state.employeeLoggedIn) {
      showDashboard();
    } else {
      showLogin();
    }
  }

  function closePortal() {
    modal.classList.remove('active');
  }

  function showLogin() {
    loginView.style.display = 'block';
    dashboardView.style.display = 'none';
    dialog.classList.remove('wide-dialog');
  }

  function showDashboard() {
    loginView.style.display = 'none';
    dashboardView.style.display = 'block';
    dialog.classList.add('wide-dialog');
    renderEmployeeTables();
  }

  openButtons.forEach(btn => {
    if (btn) btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPortal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closePortal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePortal();
  });

  // Autofill button
  if (autofillBtn) {
    autofillBtn.addEventListener('click', () => {
      document.getElementById('emp-username').value = EMPLOYEE_DATA.demoUser.username;
      document.getElementById('emp-password').value = EMPLOYEE_DATA.demoUser.password;
      showToast('Employee credentials autofilled', 'gold');
    });
  }

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const u = document.getElementById('emp-username').value.trim();
      const p = document.getElementById('emp-password').value.trim();

      if (u === EMPLOYEE_DATA.demoUser.username && p === EMPLOYEE_DATA.demoUser.password) {
        state.employeeLoggedIn = true;
        showDashboard();
        showToast(`Welcome back, ${EMPLOYEE_DATA.demoUser.name} (${EMPLOYEE_DATA.demoUser.role})`, 'success');
      } else {
        showToast('Invalid credentials. Please use the demo credentials.', 'gold');
      }
    });
  }

  // Handle Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      state.employeeLoggedIn = false;
      showLogin();
      showToast('Successfully logged out of Employee Portal', 'gold');
    });
  }
}

function renderEmployeeTables() {
  const ordersBody = document.getElementById('emp-orders-table-body');
  if (ordersBody) {
    ordersBody.innerHTML = EMPLOYEE_DATA.recentOrders.map(ord => `
      <tr>
        <td><strong>${ord.id}</strong></td>
        <td>${ord.client}</td>
        <td>${ord.product}</td>
        <td><strong>${ord.value}</strong></td>
        <td><span class="badge-status optimal">${ord.status}</span></td>
      </tr>
    `).join('');
  }

  const stockBody = document.getElementById('emp-stock-table-body');
  if (stockBody) {
    stockBody.innerHTML = EMPLOYEE_DATA.warehouseStock.map(stk => `
      <tr>
        <td>${stk.item}</td>
        <td><strong>${stk.stock}</strong></td>
        <td><span class="badge-status ${stk.status.includes('Alert') ? 'alert' : 'optimal'}">${stk.status}</span></td>
      </tr>
    `).join('');
  }
}

/* ==========================================================================
   Swatch Bag Drawer & Counter
   ========================================================================== */
function initSwatchDrawer() {
  const drawer = document.getElementById('swatch-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const openBtn = document.getElementById('swatch-drawer-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const heroSwatchBtn = document.getElementById('hero-order-swatches-btn');
  const dispatchBtn = document.getElementById('dispatch-swatches-btn');

  function openDrawer() {
    renderSwatchItems();
    drawer.classList.add('active');
    overlay.classList.add('active');
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (heroSwatchBtn) heroSwatchBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  if (dispatchBtn) {
    dispatchBtn.addEventListener('click', () => {
      if (state.swatchBag.length === 0) {
        showToast('Please add at least one swatch before dispatching!', 'gold');
        return;
      }
      showToast(`Swatch Pack dispatched to Mayfair Courier! You will receive confirmation by SMS.`, 'success');
      closeDrawer();
    });
  }
}

export function addSwatch(swatchName) {
  if (!state.swatchBag.includes(swatchName)) {
    state.swatchBag.push(swatchName);
    updateSwatchCounter();
    showToast(`Added "${swatchName}" to your Swatch Bag`, 'success');
  } else {
    showToast(`"${swatchName}" is already in your Swatch Bag`, 'gold');
  }
}

function removeSwatch(swatchName) {
  state.swatchBag = state.swatchBag.filter(s => s !== swatchName);
  updateSwatchCounter();
  renderSwatchItems();
  showToast(`Removed "${swatchName}"`, 'gold');
}

function updateSwatchCounter() {
  const counter = document.getElementById('swatch-counter');
  if (counter) counter.textContent = state.swatchBag.length;
}

function renderSwatchItems() {
  const container = document.getElementById('swatch-items-container');
  const emptyMsg = document.getElementById('empty-swatch-message');

  if (!container) return;

  if (state.swatchBag.length === 0) {
    emptyMsg.style.display = 'block';
    container.innerHTML = '';
  } else {
    emptyMsg.style.display = 'none';
    container.innerHTML = state.swatchBag.map(swatch => `
      <div class="swatch-list-item">
        <div>
          <strong style="color: var(--text-primary); font-size: 0.85rem;">${swatch}</strong>
          <div style="font-size: 0.72rem; color: var(--gold-dark);">Authentic Fabric Sample • 10x10cm</div>
        </div>
        <button class="remove-swatch-btn" data-swatch-del="${swatch}" style="color: var(--text-muted); font-size: 1.1rem;" title="Remove">&times;</button>
      </div>
    `).join('');

    container.querySelectorAll('[data-swatch-del]').forEach(btn => {
      btn.addEventListener('click', () => removeSwatch(btn.dataset.swatchDel));
    });
  }
}

/* ==========================================================================
   Product Detail Modal
   ========================================================================== */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-detail-modal');
  const body = document.getElementById('product-modal-body');
  const closeBtn = document.getElementById('product-modal-close-btn');

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: start;">
      <div>
        <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 380px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--bg-dark-border);">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 12px;">
          ${product.gallery.map(img => `
            <img src="${img}" alt="Gallery" style="width: 100%; height: 80px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--bg-dark-border);">
          `).join('')}
        </div>
      </div>

      <div>
        <span class="product-tag" style="position: static; display: inline-block; margin-bottom: 8px;">${product.tag}</span>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-primary); margin-bottom: 4px;">${product.title}</h2>
        <h4 style="font-size: 0.95rem; color: var(--gold-dark); margin-bottom: 16px;">${product.subtitle}</h4>
        <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 20px;">${product.description}</p>
        
        <h5 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 8px;">Signature Anatomy & Features:</h5>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
          ${product.features.map(f => `
            <li style="font-size: 0.8rem; color: var(--text-secondary); display: flex; gap: 8px;">
              <span style="color: var(--gold-primary); font-weight: bold;">✦</span> ${f}
            </li>
          `).join('')}
        </ul>

        <h5 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 8px;">Available Swatches:</h5>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
          ${product.swatches.map(sw => `
            <button class="btn btn-outline" style="font-size: 0.75rem; padding: 6px 12px;" data-modal-swatch="${sw}" type="button">
              + Add ${sw}
            </button>
          `).join('')}
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn btn-primary" id="modal-book-consult-btn" style="flex: 1;" type="button">Book Bespoke Measurement</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');

  body.querySelectorAll('[data-modal-swatch]').forEach(btn => {
    btn.addEventListener('click', () => {
      addSwatch(btn.dataset.modalSwatch);
    });
  });

  const consultBtn = document.getElementById('modal-book-consult-btn');
  if (consultBtn) {
    consultBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      const contactSection = document.getElementById('about-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const contactTabBtn = document.querySelector('[data-tab="contact"]');
        if (contactTabBtn) contactTabBtn.click();
      }
    });
  }

  closeBtn.onclick = () => modal.classList.remove('active');
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('active');
  };
}

function openCollectionModal(colId) {
  const col = COLLECTIONS.find(c => c.id === colId);
  if (!col) return;

  const modal = document.getElementById('product-detail-modal');
  const body = document.getElementById('product-modal-body');
  const closeBtn = document.getElementById('product-modal-close-btn');

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: center;">
      <img src="${col.image}" alt="${col.title}" style="width: 100%; height: 420px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--bg-dark-border);">
      <div>
        <span class="product-tag" style="position: static; display: inline-block; margin-bottom: 8px;">${col.tag}</span>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-primary); margin-bottom: 4px;">${col.title}</h2>
        <h4 style="font-size: 0.95rem; color: var(--gold-dark); margin-bottom: 16px;">${col.subtitle}</h4>
        <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 20px;">${col.description}</p>
        
        <h5 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 8px;">Curated Highlights:</h5>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
          ${col.highlights.map(h => `
            <li style="font-size: 0.8rem; color: var(--text-secondary); display: flex; gap: 8px;">
              <span style="color: var(--gold-primary); font-weight: bold;">✦</span> ${h}
            </li>
          `).join('')}
        </ul>

        <button class="btn btn-primary" id="col-request-box-btn" style="width: 100%;" type="button">Request ${col.title} Sample Box</button>
      </div>
    </div>
  `;

  modal.classList.add('active');

  const reqBtn = document.getElementById('col-request-box-btn');
  if (reqBtn) {
    reqBtn.addEventListener('click', () => {
      addSwatch(`${col.title} Collection Box`);
      modal.classList.remove('active');
    });
  }

  closeBtn.onclick = () => modal.classList.remove('active');
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('active');
  };
}

function openBrandModal(brandId) {
  const brand = BRANDS.find(b => b.id === brandId);
  if (!brand) return;

  const modal = document.getElementById('product-detail-modal');
  const body = document.getElementById('product-modal-body');
  const closeBtn = document.getElementById('product-modal-close-btn');

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: center;">
      <img src="${brand.image}" alt="${brand.title}" style="width: 100%; height: 420px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--bg-dark-border);">
      <div>
        <span class="product-tag" style="position: static; display: inline-block; margin-bottom: 8px;">${brand.tag}</span>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-primary); margin-bottom: 4px;">${brand.title}</h2>
        <h4 style="font-size: 0.95rem; color: var(--gold-dark); margin-bottom: 16px;">${brand.subtitle}</h4>
        <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 20px;">${brand.description}</p>
        
        <h5 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 8px;">Archive Authentications:</h5>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
          ${brand.highlights.map(h => `
            <li style="font-size: 0.8rem; color: var(--text-secondary); display: flex; gap: 8px;">
              <span style="color: var(--gold-primary); font-weight: bold;">✦</span> ${h}
            </li>
          `).join('')}
        </ul>

        <button class="btn btn-primary" id="brand-swatch-req-btn" style="width: 100%;" type="button">Order ${brand.title} Pattern Book</button>
      </div>
    </div>
  `;

  modal.classList.add('active');

  const bReqBtn = document.getElementById('brand-swatch-req-btn');
  if (bReqBtn) {
    bReqBtn.addEventListener('click', () => {
      addSwatch(`${brand.title} Archival Book`);
      modal.classList.remove('active');
    });
  }

  closeBtn.onclick = () => modal.classList.remove('active');
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('active');
  };
}

function openSomfyModal() {
  const modal = document.getElementById('product-detail-modal');
  const body = document.getElementById('product-modal-body');
  const closeBtn = document.getElementById('product-modal-close-btn');

  body.innerHTML = `
    <div>
      <div style="text-align: center; margin-bottom: 24px;">
        <span class="ticker-badge" style="background: #059669; margin-bottom: 8px; display: inline-block;">Official Somfy Motorized Partner</span>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-primary);">Somfy Intelligent Motorization Suite</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 600px; margin: 0 auto;">
          Full architectural integration for curtains, roman shades, and Fifty TM venetian blinds.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 28px;">
        ${SMART_HOME.somfySpecs.map(s => `
          <div style="background: #faf8f5; border: 1px solid rgba(0, 0, 0, 0.08); padding: 18px; border-radius: var(--radius-sm);">
            <div style="font-size: 0.75rem; color: var(--gold-dark); text-transform: uppercase;">${s.label}</div>
            <div style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin-top: 4px;">${s.value}</div>
          </div>
        `).join('')}
      </div>

      <div style="background: rgba(184, 145, 45, 0.08); border: 1px solid rgba(184, 145, 45, 0.3); border-radius: var(--radius-md); padding: 24px; margin-bottom: 24px;">
        <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--text-primary); margin-bottom: 8px;">Wireless Protocol & Smart Home Compatibility</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
          Our motors support Somfy RTS (Radio Technology Somfy) and bidirectional Zigbee 3.0. Connect with TaHoma switch to seamlessly interface with Apple HomeKit, Amazon Alexa, Google Assistant, Control4, and Lutron lighting processors.
        </p>
      </div>

      <button class="btn btn-primary" id="somfy-consult-btn" style="width: 100%;" type="button">Book a Somfy Smart Automation Site Survey</button>
    </div>
  `;

  modal.classList.add('active');

  const sBtn = document.getElementById('somfy-consult-btn');
  if (sBtn) {
    sBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      const contactSection = document.getElementById('about-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const contactTabBtn = document.querySelector('[data-tab="contact"]');
        if (contactTabBtn) contactTabBtn.click();
      }
    });
  }

  closeBtn.onclick = () => modal.classList.remove('active');
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('active');
  };
}

/* ==========================================================================
   Global Search System
   ========================================================================== */
function initGlobalSearch() {
  const modal = document.getElementById('search-modal');
  const triggerBtn = document.getElementById('search-trigger-btn');
  const closeBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('search-results-list');

  function openSearch() {
    modal.classList.add('active');
    setTimeout(() => searchInput.focus(), 150);
  }

  function closeSearch() {
    modal.classList.remove('active');
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openSearch);
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) {
      resultsContainer.innerHTML = `
        <div style="color: var(--text-muted); font-size: 0.82rem; padding: 12px; text-align: center;">
          Type to search across all products, collections, designer brands, and services.
        </div>
      `;
      return;
    }

    const matchedProducts = PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    const matchedCols = COLLECTIONS.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
    const matchedBrands = BRANDS.filter(b => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q));
    const matchedServices = SERVICES.filter(s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));

    const total = matchedProducts.length + matchedCols.length + matchedBrands.length + matchedServices.length;

    if (total === 0) {
      resultsContainer.innerHTML = `<div style="color: var(--text-muted); padding: 16px; text-align: center;">No matches found for "${q}".</div>`;
      return;
    }

    resultsContainer.innerHTML = [
      ...matchedProducts.map(p => `
        <div class="search-result-item" data-search-prod="${p.id}">
          <img src="${p.image}" alt="${p.title}">
          <div>
            <div style="font-size: 0.7rem; color: var(--gold-dark); font-weight: 700;">PRODUCT</div>
            <div style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-primary);">${p.title}</div>
            <div style="font-size: 0.74rem; color: var(--text-muted);">${p.subtitle}</div>
          </div>
        </div>
      `),
      ...matchedCols.map(c => `
        <div class="search-result-item" data-search-col="${c.id}">
          <img src="${c.image}" alt="${c.title}">
          <div>
            <div style="font-size: 0.7rem; color: var(--gold-dark); font-weight: 700;">COLLECTION</div>
            <div style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-primary);">${c.title}</div>
            <div style="font-size: 0.74rem; color: var(--text-muted);">${c.tag}</div>
          </div>
        </div>
      `),
      ...matchedBrands.map(b => `
        <div class="search-result-item" data-search-brand="${b.id}">
          <img src="${b.image}" alt="${b.title}">
          <div>
            <div style="font-size: 0.7rem; color: var(--gold-dark); font-weight: 700;">DESIGNER BRAND</div>
            <div style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-primary);">${b.title}</div>
            <div style="font-size: 0.74rem; color: var(--text-muted);">${b.subtitle}</div>
          </div>
        </div>
      `),
      ...matchedServices.map(s => `
        <div class="search-result-item" data-search-srv="${s.id}">
          <img src="${s.image}" alt="${s.title}">
          <div>
            <div style="font-size: 0.7rem; color: var(--gold-dark); font-weight: 700;">SERVICE</div>
            <div style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-primary);">${s.title}</div>
            <div style="font-size: 0.74rem; color: var(--text-muted);">${s.subtitle}</div>
          </div>
        </div>
      `)
    ].join('');

    resultsContainer.querySelectorAll('[data-search-prod]').forEach(item => {
      item.addEventListener('click', () => {
        closeSearch();
        openProductModal(item.dataset.searchProd);
      });
    });

    resultsContainer.querySelectorAll('[data-search-col]').forEach(item => {
      item.addEventListener('click', () => {
        closeSearch();
        openCollectionModal(item.dataset.searchCol);
      });
    });

    resultsContainer.querySelectorAll('[data-search-brand]').forEach(item => {
      item.addEventListener('click', () => {
        closeSearch();
        openBrandModal(item.dataset.searchBrand);
      });
    });

    resultsContainer.querySelectorAll('[data-search-srv]').forEach(item => {
      item.addEventListener('click', () => {
        closeSearch();
        const el = document.getElementById(`service-${item.dataset.searchSrv}`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
}

/* ==========================================================================
   Contact & Consultation Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const bookConsultationBtn = document.getElementById('book-consultation-btn');

  if (bookConsultationBtn) {
    bookConsultationBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('about-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const contactTabBtn = document.querySelector('[data-tab="contact"]');
        if (contactTabBtn) contactTabBtn.click();
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const product = document.getElementById('contact-product').value;
      showToast(`Thank you, ${name}. Your consultation request for "${product}" has been assigned to our Mayfair design studio.`, 'success');
      form.reset();
    });
  }
}

/* ==========================================================================
   Mobile Menu
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-menu-drawer');

  if (toggleBtn && drawer) {
    drawer.innerHTML = `
      <div style="padding: 24px; background: #ffffff; border-bottom: 1px solid rgba(0, 0, 0, 0.08); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-family: var(--font-serif); font-size: 1.5rem; color: #121822;">illumin<strong class="text-gold">8</strong></span>
        <button id="mobile-menu-close-btn" style="font-size: 1.5rem; color: #121822;">&times;</button>
      </div>
      <div style="padding: 20px; display: flex; flex-direction: column; gap: 14px;">
        <a href="#products-section" class="mobile-nav-link" style="color: #121822; font-size: 1.1rem; font-weight: 600;">Products</a>
        <a href="#collections-section" class="mobile-nav-link" style="color: #121822; font-size: 1.1rem; font-weight: 600;">Collections</a>
        <a href="#brands-section" class="mobile-nav-link" style="color: #121822; font-size: 1.1rem; font-weight: 600;">Brands & Heritage</a>
        <a href="#services-section" class="mobile-nav-link" style="color: #121822; font-size: 1.1rem; font-weight: 600;">Services</a>
        <a href="#smart-home-section" class="mobile-nav-link" style="color: #121822; font-size: 1.1rem; font-weight: 600;">Smart Home & Somfy</a>
        <a href="#about-section" class="mobile-nav-link" style="color: #121822; font-size: 1.1rem; font-weight: 600;">About Us & ESG</a>
      </div>
    `;

    drawer.style.cssText = `
      position: fixed; inset: 0; background: rgba(255, 255, 255, 0.98); z-index: 250;
      flex-direction: column; backdrop-filter: blur(20px);
    `;

    function toggle() {
      const isVisible = drawer.style.display === 'flex';
      drawer.style.display = isVisible ? 'none' : 'flex';
    }

    toggleBtn.addEventListener('click', toggle);
    drawer.querySelector('#mobile-menu-close-btn').addEventListener('click', () => {
      drawer.style.display = 'none';
    });

    drawer.querySelectorAll('.mobile-nav-link').forEach(l => {
      l.addEventListener('click', () => drawer.style.display = 'none');
    });
  }
}
