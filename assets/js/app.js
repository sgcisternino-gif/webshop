'use strict';

/* ─── Product data ─── */
const PRODUCTS = [
  {
    id: 1,
    name: 'Havre Vase',
    category: 'keramik',
    price: 249,
    badge: 'Bestseller',
    rating: 4.8,
    reviews: 124,
    image: 'https://picsum.photos/seed/ceramicvase1/600/800',
    description: 'Håndlavet keramikvase i naturlige jordtoner. Inspireret af de gyldne kornmarker og det skandinaviske landskab. Perfekt til tørrede blomster eller som dekorativt element i sig selv. Ingen to vaser er ens — hvert stykke bærer håndværkerens unikke aftryk.',
  },
  {
    id: 2,
    name: 'Eg Skærebræt',
    category: 'træ',
    price: 299,
    badge: null,
    rating: 4.9,
    reviews: 87,
    image: 'https://picsum.photos/seed/woodboard42/600/800',
    description: 'Massivt egetræsskærebræt med smuk, naturlig åretegning. Håndlavet af lokale skovmestre med fokus på holdbarhed og æstetik. Behandlet med naturlig linoliefinish. Passer til ethvert køkken og forbedres med alderen.',
  },
  {
    id: 3,
    name: 'Uld Plaid',
    category: 'tekstil',
    price: 799,
    badge: 'Ny',
    rating: 4.7,
    reviews: 56,
    image: 'https://picsum.photos/seed/woolblanket7/600/800',
    description: 'Blødt og varmt plaid vævet af 100% ren uld fra norske fjeldgårde. Det naturlige lanolin i ulden giver en blød, varm fornemmelse og gør plagget let vejrbestandigt. Perfekt til kolde efterårsaftener på sofaen.',
  },
  {
    id: 4,
    name: 'Rye Duftlys',
    category: 'lys',
    price: 179,
    badge: null,
    rating: 4.6,
    reviews: 203,
    image: 'https://picsum.photos/seed/scantedcandle/600/800',
    description: 'Håndstøbt bivokslys med nordiske duftnoter af rug, enebær og friske fyrrenåle. Bringes til verden i en lille atelier i Jylland. Brændetid ca. 40 timer. Bivoks brænder renere og længere end paraffinvoks og frigiver negativ luft under forbrænding.',
  },
  {
    id: 5,
    name: 'Ler Krus',
    category: 'keramik',
    price: 189,
    badge: null,
    rating: 4.9,
    reviews: 312,
    image: 'https://picsum.photos/seed/claymug88/600/800',
    description: 'Rustikt krus i stentøj til den perfekte morgenkaffe. Håndformet på drejeskive i en lille keramikværksted i København. Ingen to er helt ens — det er netop det, der gør dem særlige. Mikrobølge- og opvaskemaskinesikker.',
  },
  {
    id: 6,
    name: 'Lin Pude',
    category: 'tekstil',
    price: 349,
    badge: null,
    rating: 4.5,
    reviews: 78,
    image: 'https://picsum.photos/seed/linenpillow3/600/800',
    description: 'Naturligt linpudebetræk i klassisk beige med diskret syning langs kanten. Fremstillet af vasket hørlinned, der kun bliver blødere med vask. Tilføjer tekstur og organisk varme til enhver sofa eller seng. Lynlås i bunden. Pudeindsats medfølger ikke.',
  },
  {
    id: 7,
    name: 'Birk Lysestage',
    category: 'lys',
    price: 149,
    badge: 'Ny',
    rating: 4.4,
    reviews: 45,
    image: 'https://picsum.photos/seed/birchcandle9/600/800',
    description: 'Slank og enkel lysestage i naturlig birkekork med minimalistisk udtryk. Designet til standard stearinlys. Den naturlige tekstur i korken giver et varmt, organisk look. Perfekt til hyggeaftener og bordpynt.',
  },
  {
    id: 8,
    name: 'Keramik Skål Set',
    category: 'keramik',
    price: 399,
    badge: null,
    rating: 4.8,
    reviews: 91,
    image: 'https://picsum.photos/seed/ceramicbowls2/600/800',
    description: 'Tre skåle i varierende størrelser fremstillet af stentøjsler med naturlig, mat glasur. Sættes smukt op som dekorative elementer eller bruges til tapas, snacks og dips. Opvaskemaskine- og mikrobølgesikker. Et smukt og funktionelt gavesæt.',
  },
  {
    id: 9,
    name: 'Valnød Bakke',
    category: 'træ',
    price: 259,
    badge: null,
    rating: 4.7,
    reviews: 63,
    image: 'https://picsum.photos/seed/walnutTray5/600/800',
    description: 'Håndlavet bakke i mørk valnød med naturlig oliefinish. Den åbne design giver et elegant og minimalistisk look. Ideel som morgenmadsbakke, serveringsbakke eller som organisationsredskab i entréen. Enkelt og tidløst.',
  },
  {
    id: 10,
    name: 'Lin Serviet Set',
    category: 'tekstil',
    price: 149,
    badge: null,
    rating: 4.6,
    reviews: 157,
    image: 'https://picsum.photos/seed/linennapkin6/600/800',
    description: 'Fire linservietter i vasket hør med naturlige, ru kanter. De uregelmæssige kanter er ikke fejl — det er karakter. Vaskes ved 40° og tørres i tørretumbler. Giver et varmt og indbydende udtryk til ethvert dækket bord.',
  },
  {
    id: 11,
    name: 'Bambus Kurv',
    category: 'træ',
    price: 199,
    badge: null,
    rating: 4.5,
    reviews: 38,
    image: 'https://picsum.photos/seed/bamboobasket4/600/800',
    description: 'Håndflethåndtaget opbevaringskurv i naturlig bambus med robust men luftig konstruktion. Perfekt til blade og magasiner i stuen, legetøj på børneværelset eller som planteholder med en passende inderpotte.',
  },
  {
    id: 12,
    name: 'Mælkehvid Kande',
    category: 'keramik',
    price: 329,
    badge: null,
    rating: 4.8,
    reviews: 72,
    image: 'https://picsum.photos/seed/whitepitcher1/600/800',
    description: 'Elegant kande i mælkehvid stentøjskeramik med en organisk, håndformet silhuet. Funktionel som vandkande, mælkekande eller blomstervase. Den hvide glasur er bevidst lidt uregelmæssig for at bevare en håndgjort fornemmelse.',
  },
];

/* ─── State ─── */
let cart = [];
let cartIdCounter = 0;
let activeCategory = 'alle';
let sortBy = 'default';
let searchQuery = '';
let toastTimer = null;
let modalQty = 1;
let modalProductId = null;

/* ─── DOM refs ─── */
const byId = id => document.getElementById(id);

const productsGrid  = byId('products-grid');
const cartSidebar   = byId('cart-sidebar');
const cartOverlay   = byId('cart-overlay');
const cartItemsEl   = byId('cart-items');
const cartFooterEl  = byId('cart-footer');
const cartCountEl   = byId('cart-count');
const modalOverlay  = byId('modal-overlay');
const productModal  = byId('product-modal');
const toastEl       = byId('toast');
const searchBar     = byId('search-bar');
const searchInput   = byId('search-input');
const header        = byId('header');

/* ─── Init ─── */
function init() {
  renderProducts();
  setupFilters();
  setupSearch();
  setupCart();
  setupModal();
  setupNewsletter();
  setupScrollEffects();
  setupReveal();
}

/* ─── Filter & sort ─── */
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderProducts();
      scrollToProducts();
    });
  });

  byId('sort-select').addEventListener('change', e => {
    sortBy = e.target.value;
    renderProducts();
  });
}

function scrollToProducts() {
  byId('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterAndSort(products) {
  let list = [...products];

  if (activeCategory !== 'alle') {
    list = list.filter(p => p.category === activeCategory);
  }
  if (searchQuery) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery)
    );
  }

  switch (sortBy) {
    case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'name':       list.sort((a, b) => a.name.localeCompare(b.name, 'da')); break;
    case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
  }

  return list;
}

/* ─── Render products ─── */
function renderProducts() {
  const filtered = filterAndSort(PRODUCTS);

  if (!filtered.length) {
    productsGrid.innerHTML = '<p class="no-results">Ingen produkter matcher din søgning.</p>';
    return;
  }

  productsGrid.innerHTML = filtered.map(p => `
    <article class="product-card" data-id="${p.id}" tabindex="0" role="button" aria-label="Se ${p.name}">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge${p.badge === 'Ny' ? ' badge-new' : ''}">${p.badge}</span>` : ''}
        <button class="product-quick-add" data-id="${p.id}" aria-label="Tilføj ${p.name} til kurv">
          + Tilføj til kurv
        </button>
      </div>
      <div class="product-info">
        <span class="product-cat">${catLabel(p.category)}</span>
        <h3>${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <span class="price">${p.price.toLocaleString('da-DK')} kr</span>
      </div>
    </article>
  `).join('');

  /* Event delegation on grid */
  productsGrid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (!e.target.classList.contains('product-quick-add')) {
        openModal(Number(card.dataset.id));
      }
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openModal(Number(card.dataset.id));
    });
  });

  productsGrid.querySelectorAll('.product-quick-add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(Number(btn.dataset.id), 1);
    });
  });

  /* Staggered fade-in */
  productsGrid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 55);
  });
}

function catLabel(cat) {
  return { keramik: 'Keramik', tekstil: 'Tekstil', træ: 'Træ', lys: 'Lys & Duft' }[cat] || cat;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

/* ─── Search ─── */
function setupSearch() {
  let searchOpen = false;

  byId('search-btn').addEventListener('click', () => {
    searchOpen = !searchOpen;
    searchBar.classList.toggle('open', searchOpen);
    if (searchOpen) {
      searchInput.focus();
    } else {
      searchQuery = '';
      searchInput.value = '';
      renderProducts();
    }
  });

  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
    if (searchQuery) scrollToProducts();
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') byId('search-btn').click();
  });
}

/* ─── Cart ─── */
function setupCart() {
  byId('open-cart').addEventListener('click', openCart);
  byId('close-cart').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
}

function addToCart(productId, qty) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: ++cartIdCounter, productId, qty });
  }

  updateCartCount();
  renderCart();
  showToast(`${product.name} er tilføjet til kurven`);
}

function removeFromCart(cartItemId) {
  cart = cart.filter(item => item.id !== cartItemId);
  updateCartCount();
  renderCart();
}

function changeQty(cartItemId, delta) {
  const item = cart.find(i => i.id === cartItemId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCart();
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  cartCountEl.textContent = total;
  cartCountEl.classList.toggle('visible', total > 0);
}

function renderCart() {
  if (!cart.length) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍</div>
        <p>Din kurv er tom</p>
        <small>Tilføj produkter for at komme i gang</small>
      </div>`;
    cartFooterEl.innerHTML = '';
    return;
  }

  const FREE_SHIPPING = 500;
  const subtotal = cart.reduce((s, item) => {
    const p = PRODUCTS.find(x => x.id === item.productId);
    return s + (p ? p.price * item.qty : 0);
  }, 0);
  const shipping = subtotal >= FREE_SHIPPING ? 0 : 49;
  const total = subtotal + shipping;
  const progress = Math.min(100, (subtotal / FREE_SHIPPING) * 100);
  const remaining = FREE_SHIPPING - subtotal;

  cartItemsEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.productId);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img class="cart-item-image" src="${p.image}" alt="${p.name}" />
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="cart-item-price">${(p.price * item.qty).toLocaleString('da-DK')} kr</div>
          <div class="cart-item-controls">
            <button class="qty-btn" data-action="minus" data-item="${item.id}">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" data-action="plus" data-item="${item.id}">+</button>
            <button class="remove-btn" data-action="remove" data-item="${item.id}">Fjern</button>
          </div>
        </div>
      </div>`;
  }).join('');

  cartFooterEl.innerHTML = `
    <div class="cart-summary">
      <div class="cart-total-row">
        <span>Subtotal</span>
        <span>${subtotal.toLocaleString('da-DK')} kr</span>
      </div>
      <div class="cart-total-row">
        <span>Fragt</span>
        <span>${shipping === 0 ? '<span class="free">Gratis</span>' : shipping + ' kr'}</span>
      </div>
      <div class="cart-grand-row">
        <span>Total</span>
        <span>${total.toLocaleString('da-DK')} kr</span>
      </div>
    </div>
    <div class="shipping-note">
      ${subtotal >= FREE_SHIPPING
        ? '<span class="free">✓ Du har fri fragt på denne ordre!</span>'
        : `Tilføj <strong>${remaining.toLocaleString('da-DK')} kr</strong> mere for gratis fragt`}
      <div class="shipping-bar"><div class="shipping-bar-fill" style="width:${progress}%"></div></div>
    </div>
    <button class="checkout-btn" id="checkout-btn">Gå til betaling</button>
    <button class="continue-shopping" id="continue-shopping">Fortsæt med at handle</button>
  `;

  /* Cart item events */
  cartItemsEl.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = Number(btn.dataset.item);
      const action = btn.dataset.action;
      if (action === 'minus')  changeQty(itemId, -1);
      if (action === 'plus')   changeQty(itemId,  1);
      if (action === 'remove') removeFromCart(itemId);
    });
  });

  byId('checkout-btn').addEventListener('click', () => {
    showToast('Tak for din ordre! Vi sender en bekræftelse hurtigst muligt.');
    cart = [];
    updateCartCount();
    renderCart();
    closeCart();
  });

  byId('continue-shopping').addEventListener('click', closeCart);
}

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCart();
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Product modal ─── */
function setupModal() {
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
}

function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  modalProductId = productId;
  modalQty = 1;

  productModal.innerHTML = `
    <button class="modal-close" id="modal-close" aria-label="Luk">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <img class="modal-image" src="${p.image}" alt="${p.name}" />
    <div class="modal-content">
      <span class="modal-category">${catLabel(p.category)}</span>
      <h2 class="modal-title">${p.name}</h2>
      <div class="modal-rating">
        <span class="stars">${renderStars(p.rating)}</span>
        <span>${p.rating} ud af 5 (${p.reviews} anmeldelser)</span>
      </div>
      <p class="modal-price" id="modal-price">${p.price.toLocaleString('da-DK')} kr</p>
      <p class="modal-description">${p.description}</p>
      <hr class="modal-divider" />
      <div class="modal-qty-row">
        <label>Antal</label>
        <div class="modal-qty-controls">
          <button class="qty-btn" id="modal-minus">−</button>
          <span class="qty-display" id="modal-qty">1</span>
          <button class="qty-btn" id="modal-plus">+</button>
        </div>
      </div>
      <button class="modal-add-btn" id="modal-add">
        Tilføj til kurv — ${p.price.toLocaleString('da-DK')} kr
      </button>
      <div class="modal-features">
        <div class="modal-feature">
          <div class="modal-feature-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10"/><polyline points="22 2 12 12 9 9"/></svg>
          </div>
          Bæredygtigt fremstillet af naturlige materialer
        </div>
        <div class="modal-feature">
          <div class="modal-feature-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          </div>
          Fri fragt på ordrer over 500 kr
        </div>
        <div class="modal-feature">
          <div class="modal-feature-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
          </div>
          30 dages returret — ingen spørgsmål
        </div>
      </div>
    </div>
  `;

  byId('modal-close').addEventListener('click', closeModal);

  function updateModalPrice() {
    byId('modal-qty').textContent = modalQty;
    byId('modal-price').textContent = (p.price * modalQty).toLocaleString('da-DK') + ' kr';
    byId('modal-add').textContent = `Tilføj til kurv — ${(p.price * modalQty).toLocaleString('da-DK')} kr`;
  }

  byId('modal-minus').addEventListener('click', () => {
    modalQty = Math.max(1, modalQty - 1);
    updateModalPrice();
  });
  byId('modal-plus').addEventListener('click', () => {
    modalQty++;
    updateModalPrice();
  });
  byId('modal-add').addEventListener('click', () => {
    addToCart(p.id, modalQty);
    closeModal();
    setTimeout(openCart, 320);
  });

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  modalProductId = null;
}

/* ─── Toast ─── */
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('visible'), 3200);
}

/* ─── Newsletter ─── */
function setupNewsletter() {
  byId('newsletter-form').addEventListener('submit', e => {
    e.preventDefault();
    const email = byId('newsletter-email').value;
    if (!email) return;
    showToast('Velkommen! Tjek din mail for 10% rabatkode.');
    byId('newsletter-form').reset();
  });
}

/* ─── Scroll effects ─── */
function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
    }
  });
}

/* ─── Scroll reveal ─── */
function setupReveal() {
  const revealEls = document.querySelectorAll('.feature-card, .newsletter-inner');
  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

/* ─── Filter links from footer/nav ─── */
document.querySelectorAll('a[href="#products"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    scrollToProducts();
  });
});

/* ─── Astronomical canvas animation ─── */
function initAstroCanvas() {
  const canvas = document.getElementById('astro-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, stars, nebulae, shooters, planet, raf;
  let t = 0;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildScene();
  }

  function buildScene() {
    // Stars — three populations (tiny background, mid, bright foreground)
    stars = [];
    for (let i = 0; i < 180; i++) stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 0.6 + 0.2, phase: Math.random() * Math.PI * 2, speed: 0.008 + Math.random() * 0.012, bright: false });
    for (let i = 0; i < 80;  i++) stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.0 + 0.7, phase: Math.random() * Math.PI * 2, speed: 0.006 + Math.random() * 0.008, bright: false });
    for (let i = 0; i < 18;  i++) stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 0.8 + 1.4, phase: Math.random() * Math.PI * 2, speed: 0.004 + Math.random() * 0.006, bright: true });

    // Nebula blobs
    nebulae = [
      { cx: 0.18, cy: 0.35, rx: 0.32, ry: 0.28, color: '120,60,220',  a: 0.13, dx: 0.00006,  dy: 0.00004  },
      { cx: 0.72, cy: 0.55, rx: 0.38, ry: 0.30, color: '30,100,200',  a: 0.10, dx: -0.00005, dy: 0.00007  },
      { cx: 0.50, cy: 0.18, rx: 0.28, ry: 0.22, color: '200,50,140',  a: 0.09, dx: 0.00004,  dy: -0.00005 },
      { cx: 0.85, cy: 0.20, rx: 0.20, ry: 0.18, color: '40,160,180',  a: 0.08, dx: -0.00003, dy: 0.00006  },
    ];

    // Planet — fixed position upper-right
    planet = {
      cx: W * 0.82,
      cy: H * 0.22,
      r:  Math.min(W, H) * 0.09,
    };

    shooters = [];
  }

  /* Shooting star factory */
  function spawnShooter() {
    const angle = (Math.random() * 30 + 20) * Math.PI / 180; // 20–50 deg downward
    const speed = 9 + Math.random() * 7;
    shooters.push({
      x:     Math.random() * W * 0.7,
      y:     Math.random() * H * 0.45,
      vx:    Math.cos(angle) * speed,
      vy:    Math.sin(angle) * speed,
      len:   80 + Math.random() * 80,
      alpha: 1,
      fade:  0.018 + Math.random() * 0.012,
    });
  }
  // Spawn periodically
  let shootInterval = setInterval(spawnShooter, 3200 + Math.random() * 1800);

  /* ── Draw helpers ── */
  function drawNebulae() {
    nebulae.forEach(n => {
      n.cx += n.dx; n.cy += n.dy;
      if (n.cx < 0 || n.cx > 1) n.dx *= -1;
      if (n.cy < 0 || n.cy > 1) n.dy *= -1;
      // pulsing opacity
      const ao = n.a * (0.7 + 0.3 * Math.sin(t * 0.003 + n.cx * 10));
      const grd = ctx.createRadialGradient(
        n.cx * W, n.cy * H, 0,
        n.cx * W, n.cy * H, n.rx * W
      );
      grd.addColorStop(0,   `rgba(${n.color},${ao})`);
      grd.addColorStop(0.5, `rgba(${n.color},${ao * 0.4})`);
      grd.addColorStop(1,   `rgba(${n.color},0)`);
      ctx.save();
      ctx.scale(1, n.ry / n.rx);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H * (n.rx / n.ry));
      ctx.restore();
    });
  }

  function drawStars() {
    stars.forEach(s => {
      s.phase += s.speed;
      const alpha = 0.35 + 0.65 * ((Math.sin(s.phase) + 1) / 2);
      const sx = s.x * W, sy = s.y * H;

      if (s.bright) {
        // Lens-flare cross for bright stars
        const streak = s.r * 7;
        ctx.save();
        ctx.globalAlpha = alpha * 0.25;
        ctx.strokeStyle = '#c8d8ff';
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(sx - streak, sy); ctx.lineTo(sx + streak, sy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx, sy - streak); ctx.lineTo(sx, sy + streak); ctx.stroke();
        ctx.restore();

        // Soft glow
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 6);
        glow.addColorStop(0, `rgba(200,215,255,${alpha * 0.35})`);
        glow.addColorStop(1, 'rgba(200,215,255,0)');
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(sx, sy, s.r * 6, 0, Math.PI * 2); ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230,240,255,${alpha})`;
      ctx.fill();
    });
  }

  function drawPlanet() {
    const { cx, cy, r } = planet;
    const pulse = 1 + 0.015 * Math.sin(t * 0.008); // very subtle size pulse

    // Outer atmospheric halo
    const halo = ctx.createRadialGradient(cx, cy, r * pulse, cx, cy, r * 2.8 * pulse);
    halo.addColorStop(0,   'rgba(160,100,255,0.22)');
    halo.addColorStop(0.5, 'rgba(120,60,200,0.08)');
    halo.addColorStop(1,   'rgba(80,30,160,0)');
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(cx, cy, r * 2.8 * pulse, 0, Math.PI * 2); ctx.fill();

    // Planet body — sphere shading
    const sphere = ctx.createRadialGradient(
      cx - r * 0.35, cy - r * 0.3, r * 0.05,
      cx,            cy,           r * pulse
    );
    sphere.addColorStop(0,    '#b89cdf');
    sphere.addColorStop(0.25, '#8a5fc4');
    sphere.addColorStop(0.65, '#4a2a8a');
    sphere.addColorStop(1,    '#1a0a3a');
    ctx.beginPath(); ctx.arc(cx, cy, r * pulse, 0, Math.PI * 2);
    ctx.fillStyle = sphere; ctx.fill();

    // Surface bands
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, r * pulse, 0, Math.PI * 2); ctx.clip();
    [0.25, 0.52, 0.73].forEach((frac, i) => {
      const by = cy - r * pulse + r * 2 * pulse * frac;
      const bh = r * pulse * (0.07 + i * 0.02);
      const band = ctx.createLinearGradient(0, by - bh, 0, by + bh);
      band.addColorStop(0, 'rgba(255,255,255,0)');
      band.addColorStop(0.5, `rgba(255,255,255,${0.04 + i * 0.015})`);
      band.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = band;
      ctx.fillRect(cx - r * pulse, by - bh, r * 2 * pulse, bh * 2);
    });
    ctx.restore();

    // Specular highlight
    const spec = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.28, 0, cx - r * 0.3, cy - r * 0.28, r * 0.55);
    spec.addColorStop(0,   'rgba(255,255,255,0.22)');
    spec.addColorStop(0.5, 'rgba(255,255,255,0.06)');
    spec.addColorStop(1,   'rgba(255,255,255,0)');
    ctx.beginPath(); ctx.arc(cx, cy, r * pulse, 0, Math.PI * 2);
    ctx.fillStyle = spec; ctx.fill();

    // Ring
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, 0.32);
    const ringW = r * 1.65;
    const ring = ctx.createRadialGradient(0, 0, r * 1.05, 0, 0, ringW);
    ring.addColorStop(0,   'rgba(180,140,255,0.0)');
    ring.addColorStop(0.2, 'rgba(180,140,255,0.28)');
    ring.addColorStop(0.6, 'rgba(140,100,220,0.18)');
    ring.addColorStop(1,   'rgba(100,60,180,0)');
    ctx.beginPath();
    ctx.arc(0, 0, ringW, 0, Math.PI * 2);
    ctx.arc(0, 0, r * 1.05, 0, Math.PI * 2, true);
    ctx.fillStyle = ring; ctx.fill();
    ctx.restore();
  }

  function drawAurora() {
    const layers = [
      { baseY: 0.62, amp: 0.07, freq: 0.010, phase: t * 0.0025,        color: '0,220,140',   a: 0.14, spread: 0.20 },
      { baseY: 0.66, amp: 0.06, freq: 0.008, phase: t * 0.002  + 1.2,  color: '0,200,255',   a: 0.10, spread: 0.16 },
      { baseY: 0.70, amp: 0.05, freq: 0.013, phase: t * 0.003  - 0.8,  color: '160,80,255',  a: 0.09, spread: 0.14 },
      { baseY: 0.58, amp: 0.04, freq: 0.007, phase: t * 0.0015 + 2.5,  color: '80,255,180',  a: 0.07, spread: 0.12 },
    ];
    layers.forEach(l => {
      const by = l.baseY * H;
      const spread = l.spread * H;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, by + Math.sin(l.phase) * l.amp * H);
      for (let x = 0; x <= W; x += 3) {
        const y = by + Math.sin(x * l.freq + l.phase) * l.amp * H;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      const grd = ctx.createLinearGradient(0, by - spread, 0, by + spread * 0.6);
      grd.addColorStop(0,    `rgba(${l.color},0)`);
      grd.addColorStop(0.35, `rgba(${l.color},${l.a})`);
      grd.addColorStop(0.7,  `rgba(${l.color},${l.a * 0.35})`);
      grd.addColorStop(1,    `rgba(${l.color},0)`);
      ctx.fillStyle = grd; ctx.fill();
      ctx.restore();
    });
  }

  function drawShooters() {
    shooters = shooters.filter(s => s.alpha > 0);
    shooters.forEach(s => {
      const trail = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * (s.len / s.speed | 0), s.y - s.vy * (s.len / s.speed | 0));
      trail.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
      trail.addColorStop(0.4, `rgba(200,220,255,${s.alpha * 0.4})`);
      trail.addColorStop(1, 'rgba(200,220,255,0)');
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * 10, s.y - s.vy * 10);
      ctx.strokeStyle = trail;
      ctx.lineWidth = 1.8;
      ctx.stroke();
      s.x += s.vx; s.y += s.vy; s.alpha -= s.fade;
    });
  }

  /* ── Main loop ── */
  function draw() {
    t++;
    ctx.clearRect(0, 0, W, H);

    // Deep space bg gradient
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0,   '#020210');
    bg.addColorStop(0.5, '#03030f');
    bg.addColorStop(1,   '#050818');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    drawNebulae();
    drawPlanet();
    drawStars();
    drawAurora();
    drawShooters();

    raf = requestAnimationFrame(draw);
  }

  /* ── Visibility: pause when off-screen ── */
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      if (!raf) draw();
    } else {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }, { threshold: 0.05 });
  observer.observe(canvas);

  window.addEventListener('resize', () => {
    resize();
  }, { passive: true });

  resize();
}

/* ─── Boot ─── */
document.addEventListener('DOMContentLoaded', () => { init(); initAstroCanvas(); });
