// Product image map for cart previews
const PRODUCT_IMAGES = {
  "Coconut Oil": "images/products/coconut_oil.jpg",
  "Groundnut Oil": "images/products/prod_grndnut_1l_oil.jpeg",
  "Sesame Oil": "images/products/prod_sesame_1l_oil.jpeg",
  "Almond Oil": "images/products/almond_oil.jpg",
  "Mustard Oil": "images/products/prod_mustard_1l_oil.jpeg",
  "Sunflower Oil": "images/products/sunfloweroil_img.png",
  "A2 Cow Ghee": "images/products/prod_a2_ghee.jpeg"
};

const WHATSAPP_NUMBER = "919270288488";
const cart = {};

// Mobile Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Active Nav Highlight on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 140) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

// Scroll Reveal Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".animate-up, .animate-item").forEach((el) => observer.observe(el));

// Cart & Modal Functions
function addToCart(productName) {
  cart[productName] = (cart[productName] || 0) + 1;
  renderCart();
  openModal();
}

function addSelectedProduct() {
  const select = document.getElementById("addProduct");
  if (!select || !select.value) return;
  addToCart(select.value);
  select.value = "";
}

function updateQty(productName, delta) {
  if (!cart[productName]) return;
  cart[productName] += delta;
  if (cart[productName] <= 0) {
    delete cart[productName];
  }
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const items = Object.keys(cart);
  if (items.length === 0) {
    container.innerHTML = '<p class="muted">No items yet. Click "Order Now" on products to add them.</p>';
    return;
  }

  container.innerHTML = items
    .map(
      (name) => `
      <div class="cart-item">
        <div class="left">
          <img src="${PRODUCT_IMAGES[name] || "images/site_logo.png"}" alt="${name}">
          <strong>${name}</strong>
        </div>
        <div class="qty-controls">
          <button type="button" onclick="updateQty('${name}', -1)" aria-label="Decrease quantity">-</button>
          <span>${cart[name]}</span>
          <button type="button" onclick="updateQty('${name}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>`
    )
    .join("");
}

function openModal() {
  const modal = document.getElementById("orderModal");
  if (!modal) return;
  renderCart();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("orderModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// Close modal when clicking outside dialog
document.getElementById("orderModal")?.addEventListener("click", (e) => {
  if (e.target.id === "orderModal") closeModal();
});

function submitOrder() {
  const items = Object.keys(cart);
  if (items.length === 0) {
    alert("Please add at least one product to your order.");
    return;
  }

  const lines = items.map((name, idx) => `${idx + 1}. ${name} × ${cart[name]}`);
  const message = `Hello Shivora Organics! I would like to place an order:\n\n${lines.join("\n")}\n\nPlease share availability & delivery details.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}
