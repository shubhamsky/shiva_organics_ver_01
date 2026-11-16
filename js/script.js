// Product Image Paths
const PRODUCT_IMAGES = {
  "Coconut Oil": "images/products/coconut_oil.jpg",
  "Groundnut Oil": "images/products/prod_grndnut_1l_oil.jpeg",
  "Sesame Oil": "images/products/prod_sesame_1l_oil.jpeg",
  "Almond Oil": "images/products/almond_oil.jpg",
  "Mustard Oil": "images/products/prod_mustard_1l_oil.jpeg",
  "Sunflower Oil": "images/products/sunfloweroil_img.png",
  "A2 Cow Ghee": "images/products/prod_a2_ghee.jpeg"
};

// Detailed Product Information
const PRODUCT_DETAILS = {
  "Coconut Oil": {
    desc: "Extracted from sun-dried, sulfur-free coconuts using traditional wooden cold-pressing to retain its natural aroma and lauric acid.",
    highlights: [
      "100% unrefined, cold-pressed & chemical-free",
      "Ideal for everyday cooking, baking & oil pulling",
      "Deeply nourishes hair and skin naturally"
    ],
    sizes: "500 ml, 1 Litre, 5 Litre"
  },
  "Groundnut Oil": {
    desc: "Pressed at low temperatures from handpicked groundnuts, preserving heart-healthy monounsaturated fats and rich nutty aroma.",
    highlights: [
      "High smoke point — great for deep frying & tadka",
      "Zero trans-fat, cholesterol-free & unbleached",
      "Rich in natural Vitamin E and antioxidants"
    ],
    sizes: "1 Litre, 5 Litre"
  },
  "Sesame Oil": {
    desc: "Traditionally wood-pressed from premium white sesame seeds for a warm, earthy flavour prized in Indian cooking and Ayurvedic care.",
    highlights: [
      "Rich in sesamol, calcium & healthy omega fatty acids",
      "Perfect for pickles, chutneys, stir-fries & seasoning",
      "Also suitable for traditional body massage (Abhyanga)"
    ],
    sizes: "500 ml, 1 Litre"
  },
  "Almond Oil": {
    desc: "Pure sweet almond oil cold-pressed in small batches without heat or solvents to preserve delicate nutrients.",
    highlights: [
      "Loaded with Vitamin E, biotin & essential fatty acids",
      "Gentle for baby massage, face care & hair conditioning",
      "Can be consumed with warm milk for daily wellness"
    ],
    sizes: "100 ml, 250 ml, 500 ml"
  },
  "Mustard Oil": {
    desc: "Kachi Ghani cold-pressed from bold, pungent mustard seeds for authentic aroma and natural sharpness.",
    highlights: [
      "Naturally rich in Omega-3 & Omega-6 fatty acids",
      "Ideal for curries, marinades, pickles & sautéing",
      "100% pure — no argemone oil or synthetic pungency"
    ],
    sizes: "1 Litre, 5 Litre"
  },
  "Sunflower Oil": {
    desc: "Light, mild-tasting cold-pressed sunflower oil that keeps everyday meals light without overpowering spices.",
    highlights: [
      "Cold-pressed without chemical hexane extraction",
      "Light texture suitable for daily cooking & baking",
      "Natural source of Vitamin E"
    ],
    sizes: "1 Litre, 5 Litre"
  },
  "A2 Cow Ghee": {
    desc: "Slow-simmered Bilona ghee made from cultured curd of grass-fed indigenous A2 cows for rich granular texture and pure aroma.",
    highlights: [
      "Prepared using the traditional two-way wooden Bilona method",
      "Easy to digest and rich in fat-soluble vitamins A, D, E & K",
      "No preservatives, colours, or artificial flavouring"
    ],
    sizes: "500 ml Glass Jar, 1 Litre"
  }
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

// Clickable Product Cards -> Open Details Modal
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("button")) return;
    const titleEl = card.querySelector("h3");
    if (titleEl) {
      openProductModal(titleEl.textContent.trim());
    }
  });
});

function openProductModal(productName) {
  const modal = document.getElementById("productModal");
  const info = PRODUCT_DETAILS[productName];
  if (!modal || !info) return;

  document.getElementById("detailTitle").textContent = productName;
  const imgEl = document.getElementById("detailImg");
  imgEl.src = PRODUCT_IMAGES[productName] || "images/site_logo.png";
  imgEl.alt = productName;

  document.getElementById("detailDesc").textContent = info.desc;
  document.getElementById("detailSizes").textContent = info.sizes;

  const listEl = document.getElementById("detailHighlights");
  listEl.innerHTML = info.highlights.map((point) => `<li>${point}</li>`).join("");

  const orderBtn = document.getElementById("detailOrderBtn");
  orderBtn.onclick = () => {
    closeProductModal();
    addToCart(productName);
  };

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("productModal")?.addEventListener("click", (e) => {
  if (e.target.id === "productModal") closeProductModal();
});

// Order Cart & Modal Functions
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

document.getElementById("orderModal")?.addEventListener("click", (e) => {
  if (e.target.id === "orderModal") closeModal();
});

// Close any open modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeProductModal();
  }
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
