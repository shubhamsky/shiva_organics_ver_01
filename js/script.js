/* Shiva Organics SPA interactions:
   - Cart modal add/remove/qty
   - Smooth scroll + active nav
   - IntersectionObserver for animate-up/item classes
*/

const WA_NUMBER = '919270288488';

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Nav links smooth scroll
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      // anchor links handled smoothly
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        const offset = document.querySelector('.site-header').offsetHeight;
        const top = target.offsetTop - offset + 4;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  // IntersectionObserver for animations
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        o.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.animate-up, .animate-item').forEach((el, i) => {
    el.style.animationDelay = `${i * 70}ms`;
    obs.observe(el);
  });

  // Scrollspy: highlight nav based on section
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.main-nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - (document.querySelector('.site-header').offsetHeight + 120);
      if (pageYOffset >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
});

/* ---------- CART & MODAL ---------- */
const cart = {}; // { productName: {qty:number, img:string} }

// same images map used for cards
const images = {
  'Coconut Oil': 'https://images.unsplash.com/photo-1601050690597-5f54007ff3f6?auto=format&fit=crop&w=800&q=60',
  'Groundnut Oil': 'https://images.unsplash.com/photo-1601050690839-356baf2c7b33?auto=format&fit=crop&w=800&q=60',
  'Sesame Oil': 'https://images.unsplash.com/photo-1628191014636-3b7e1a7b08df?auto=format&fit=crop&w=800&q=60',
  'Almond Oil': 'https://images.unsplash.com/photo-1622308692803-86fbb50d8b6b?auto=format&fit=crop&w=800&q=60',
  'Mustard Oil': 'https://images.unsplash.com/photo-1626354825137-b7ad3a9d9d6b?auto=format&fit=crop&w=800&q=60'
};

function addToCart(product) {
  if (!cart[product]) cart[product] = { qty: 1, img: images[product] || '' };
  else cart[product].qty += 1;
  openModal();
  renderCart();
}

function openModal() {
  const modal = document.getElementById('orderModal');
  if (!modal) return;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  renderCart();
}

function closeModal() {
  const modal = document.getElementById('orderModal');
  if (!modal) return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

function renderCart() {
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  const keys = Object.keys(cart);
  if (keys.length === 0) {
    container.innerHTML = '<p class="muted">No items yet. Click "Order Now" on products to add them.</p>';
    return;
  }

  keys.forEach(product => {
    const item = cart[product];
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="left">
        <img src="${item.img}" alt="${product}">
        <div>
          <strong>${product}</strong>
          <div class="muted" style="font-size:0.9rem">Quantity: <span id="qty-${escapeId(product)}">${item.qty}</span> L</div>
        </div>
      </div>
      <div class="qty-controls">
        <button onclick="decreaseQty('${product}')">–</button>
        <button onclick="increaseQty('${product}')">+</button>
        <button onclick="removeItem('${product}')" style="margin-left:8px;border:0;background:#f8d7da;color:#842029;padding:6px;border-radius:6px;cursor:pointer">X</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function escapeId(text){ return text.replace(/[^a-zA-Z0-9]/g, '_'); }

function increaseQty(product) {
  if (cart[product]) { cart[product].qty += 1; renderCart(); }
}
function decreaseQty(product) {
  if (cart[product]) {
    cart[product].qty = Math.max(1, cart[product].qty - 1);
    renderCart();
  }
}
function removeItem(product) {
  delete cart[product];
  renderCart();
}

function addSelectedProduct() {
  const sel = document.getElementById('addProduct');
  if (sel && sel.value) {
    addToCart(sel.value);
    sel.value = '';
  }
}

function submitOrder() {
  const items = Object.keys(cart);
  if (items.length === 0) {
    alert('Your order is empty. Please add products first.');
    return;
  }
  // Build message with line breaks encoded
  let message = 'Hello Shiva Organics! I would like to order:%0A';
  items.forEach(p => {
    const qty = cart[p].qty;
    message += `- ${encodeURIComponent(p)}: ${encodeURIComponent(qty)} L%0A`;
  });
  // open WhatsApp
  window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, '_blank');
  // close modal (keep cart if user wants)
  closeModal();
}
