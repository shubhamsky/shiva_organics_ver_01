const WHATSAPP_NUMBER = "919270288488";
const FALLBACK_IMAGE = "images/products/prod_grndnut_1l_oil.jpeg";

// Central Product Catalog (Base price list + ₹30/Litre adjustment + A2 Cow Ghee)
// Each product uses its 1L image across Half Litre, 1 Litre, and 5 Litres
const CATALOG = [
  {
    id: "groundnut-oil",
    name: "Groundnut Oil",
    image: "images/products/prod_grndnut_1l_oil.jpeg",
    shortDesc: "Light, nutty & aromatic — ideal for daily cooking and deep frying.",
    desc: "Wood-pressed at low temperatures from handpicked groundnuts to retain heart-healthy monounsaturated fats, natural Vitamin E, and rich traditional aroma.",
    highlights: [
      "100% cold-pressed, unrefined & chemical-free",
      "High smoke point — great for frying, tadka & everyday cooking",
      "Heart-healthy and zero trans-fat"
    ],
    variants: [
      { size: "Half Litre (500 ml)", price: 185 },
      { size: "1 Litre", price: 360 },
      { size: "5 Litres", price: 1750 }
    ]
  },
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    image: "images/products/prod_mustard_1l_oil.jpeg",
    shortDesc: "Bold Kachi Ghani flavour — rich in Omega-3 for classic dishes.",
    desc: "Traditionally cold-pressed from bold mustard seeds for authentic natural pungency, rich antioxidants, and bold culinary flavour.",
    highlights: [
      "Naturally rich in Omega-3 & Omega-6 fatty acids",
      "Ideal for curries, pickles, marinades & sautéing",
      "No synthetic pungency or argemone adulteration"
    ],
    variants: [
      { size: "Half Litre (500 ml)", price: 175 },
      { size: "1 Litre", price: 340 },
      { size: "5 Litres", price: 1650 }
    ]
  },
  {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    image: "images/products/sunfloweroil_img.png",
    shortDesc: "Light & mild — keeps everyday meals light and heart-friendly.",
    desc: "Cold-pressed from quality sunflower seeds without chemical hexane solvents, offering a clean, light taste for daily family meals.",
    highlights: [
      "Extracted without heat or chemical solvents",
      "Rich in natural Vitamin E",
      "Light texture suitable for daily cooking & baking"
    ],
    variants: [
      { size: "Half Litre (500 ml)", price: 215 },
      { size: "1 Litre", price: 420 },
      { size: "5 Litres", price: 2000 }
    ]
  },
  {
    id: "sesame-oil",
    name: "Sesame Oil (Gingelly)",
    image: "images/products/prod_sesame_1l_oil.jpeg",
    shortDesc: "Warm, earthy & nutrient-dense — prized for cooking & Ayurveda.",
    desc: "Traditionally wood-pressed from premium sesame seeds for a rich, nutty flavour and high antioxidant content.",
    highlights: [
      "Rich in sesamol, calcium & healthy fatty acids",
      "Great for seasoning, chutneys, stir-fries & pickles",
      "Suitable for traditional Ayurvedic body massage"
    ],
    variants: [
      { size: "Half Litre (500 ml)", price: 275 },
      { size: "1 Litre", price: 560 },
      { size: "5 Litres", price: 2750 }
    ]
  },
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    image: "images/products/coconut_oil.jpg",
    shortDesc: "Unrefined & fragrant — pure goodness for cooking, skin & hair.",
    desc: "Cold-pressed from sun-dried, sulfur-free coconuts to preserve natural aroma, medium-chain triglycerides (MCTs), and lauric acid.",
    highlights: [
      "100% pure, unbleached & chemical-free",
      "Ideal for cooking, baking & oil pulling",
      "Deeply nourishes hair and skin"
    ],
    variants: [
      { size: "Half Litre (500 ml)", price: 375 },
      { size: "1 Litre", price: 780 },
      { size: "5 Litres", price: 3850 }
    ]
  },
  {
    id: "safflower-oil",
    name: "Safflower Oil",
    image: "images/products/prod_grndnut_1l_oil.jpeg",
    shortDesc: "Heart & diabetes friendly — light oil for everyday health.",
    desc: "Traditionally wood-pressed from premium safflower (kardi) seeds, known for supporting cardiovascular health and balanced daily nutrition.",
    highlights: [
      "Rich in heart-healthy unsaturated fatty acids",
      "Mild flavour that complements Indian spices",
      "100% cold-pressed & free from preservatives"
    ],
    variants: [
      { size: "Half Litre (500 ml)", price: 265 },
      { size: "1 Litre", price: 510 },
      { size: "5 Litres", price: 2500 }
    ]
  },
  {
    id: "almond-oil",
    name: "Almond Oil",
    image: "images/products/almond_oil.jpg",
    shortDesc: "Pure cold-pressed sweet almond oil — for wellness, skin & hair.",
    desc: "Cold-pressed in small batches from sweet almonds without heat or solvents to retain delicate vitamins and nutrients.",
    highlights: [
      "Loaded with Vitamin E, biotin & essential fatty acids",
      "Gentle for baby massage, skin glow & hair care",
      "Can be added to warm milk for daily nourishment"
    ],
    variants: [
      { size: "Half Litre (500 ml)", price: 1215 },
      { size: "1 Litre", price: 2330 }
    ]
  },
  {
    id: "a2-cow-ghee",
    name: "A2 Cow Ghee",
    image: "images/products/prod_a2_ghee.jpeg",
    shortDesc: "Traditional Bilona A2 desi cow ghee — rich aroma & granular texture.",
    desc: "Slow-simmered Bilona ghee crafted from cultured curd of indigenous grass-fed A2 cows for pure aroma, easy digestion, and rich nutrition.",
    highlights: [
      "Prepared using the traditional two-way wooden Bilona method",
      "Rich in fat-soluble vitamins A, D, E & K",
      "100% pure — no preservatives, colours, or artificial flavours"
    ],
    variants: [
      { size: "Half Litre (500 ml)", price: 700 },
      { size: "1 Litre", price: 1300 }
    ]
  }
];

// Persistent Cart State (localStorage)
let cart = JSON.parse(localStorage.getItem("shivora_cart") || "[]");

function saveCart() {
  localStorage.setItem("shivora_cart", JSON.stringify(cart));
  updateCartUI();
}

// Render Storefront Product Cards on index.html
const productGridEl = document.getElementById("productGrid");
if (productGridEl) {
  productGridEl.innerHTML = CATALOG.map((product) => {
    const defaultVariant = product.variants.find((v) => v.size === "1 Litre") || product.variants[0];
    const defaultIdx = product.variants.indexOf(defaultVariant);

    return `
      <article class="product-card" data-product-id="${product.id}">
        <a href="product.html?id=${product.id}" class="product-link-area">
          <div class="product-thumb">
            <span class="view-badge">Details →</span>
            <img src="${product.image}" onerror="this.src='${FALLBACK_IMAGE}'" alt="${product.name}" loading="lazy">
          </div>
        </a>
        <div class="card-body">
          <a href="product.html?id=${product.id}" class="product-link-area">
            <div class="card-title-row">
              <h3>${product.name}</h3>
              <span class="card-price" id="price-${product.id}">₹${defaultVariant.price}</span>
            </div>
          </a>
          <p class="muted">${product.shortDesc}</p>

          <div class="variant-pills">
            ${product.variants
              .map(
                (v, idx) => `
              <button type="button"
                class="variant-pill ${idx === defaultIdx ? "active" : ""}"
                onclick="selectCardVariant('${product.id}', ${idx}, this)">
                ${v.size}
              </button>`
              )
              .join("")}
          </div>

          <div class="card-actions">
            <button type="button" class="btn btn-primary" id="addbtn-${product.id}"
              data-variant-idx="${defaultIdx}"
              onclick="addCardItemToCart('${product.id}')">
              Add to Cart
            </button>
            <a href="product.html?id=${product.id}" class="btn btn-ghost">View</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function selectCardVariant(productId, variantIdx, btnEl) {
  const product = CATALOG.find((p) => p.id === productId);
  if (!product) return;

  const variant = product.variants[variantIdx];
  document.getElementById(`price-${productId}`).textContent = `₹${variant.price}`;

  const addBtn = document.getElementById(`addbtn-${productId}`);
  addBtn.setAttribute("data-variant-idx", variantIdx);

  const card = btnEl.closest(".product-card");
  card.querySelectorAll(".variant-pill").forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
}

function addCardItemToCart(productId) {
  const product = CATALOG.find((p) => p.id === productId);
  const addBtn = document.getElementById(`addbtn-${productId}`);
  if (!product || !addBtn) return;

  const variantIdx = parseInt(addBtn.getAttribute("data-variant-idx"), 10) || 0;
  const variant = product.variants[variantIdx];
  addItemToCart(product, variant, 1);
}

// Product Detail Page Logic (product.html)
let detailProduct = null;
let detailSelectedIdx = 0;
let detailQty = 1;

const detailTitleEl = document.getElementById("detailPageTitle");
if (detailTitleEl) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || CATALOG[0].id;
  detailProduct = CATALOG.find((p) => p.id === productId) || CATALOG[0];

  const defaultVariant = detailProduct.variants.find((v) => v.size === "1 Litre") || detailProduct.variants[0];
  detailSelectedIdx = detailProduct.variants.indexOf(defaultVariant);

  document.title = `${detailProduct.name} | Shivora Organics`;
  detailTitleEl.textContent = detailProduct.name;

  const detailImg = document.getElementById("detailPageImg");
  detailImg.src = detailProduct.image;
  detailImg.onerror = () => { detailImg.src = FALLBACK_IMAGE; };
  detailImg.alt = detailProduct.name;

  document.getElementById("detailPageDesc").textContent = detailProduct.desc;
  document.getElementById("detailPagePrice").textContent = `₹${defaultVariant.price}`;

  document.getElementById("detailPageHighlights").innerHTML = detailProduct.highlights
    .map((h) => `<li>${h}</li>`)
    .join("");

  const pillsWrap = document.getElementById("detailVariantPills");
  pillsWrap.innerHTML = detailProduct.variants
    .map(
      (v, idx) => `
      <button type="button"
        class="variant-pill ${idx === detailSelectedIdx ? "active" : ""}"
        onclick="selectDetailVariant(${idx}, this)">
        ${v.size} — ₹${v.price}
      </button>`
    )
    .join("");

  document.getElementById("detailAddCartBtn").onclick = () => {
    addItemToCart(detailProduct, detailProduct.variants[detailSelectedIdx], detailQty);
  };

  document.getElementById("detailBuyNowBtn").onclick = () => {
    addItemToCart(detailProduct, detailProduct.variants[detailSelectedIdx], detailQty);
    openCartDrawer();
  };
}

function selectDetailVariant(idx, btnEl) {
  if (!detailProduct) return;
  detailSelectedIdx = idx;
  document.getElementById("detailPagePrice").textContent = `₹${detailProduct.variants[idx].price}`;

  document.querySelectorAll("#detailVariantPills .variant-pill").forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
}

function changeDetailQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  document.getElementById("detailQtyVal").textContent = detailQty;
}

// Cart Management
function addItemToCart(product, variant, qty) {
  const existing = cart.find((item) => item.id === product.id && item.size === variant.size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      size: variant.size,
      price: variant.price,
      qty: qty
    });
  }
  saveCart();
  showToast(`Added ${product.name} (${variant.size}) to cart`);
}

function updateCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const badgeEl = document.getElementById("cartBadge");
  if (badgeEl) badgeEl.textContent = totalCount;

  const subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = `₹${totalAmount.toLocaleString("en-IN")}`;

  const listEl = document.getElementById("cartItemsList");
  const checkoutBox = document.getElementById("checkoutDetails");
  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `<p class="muted" style="text-align:center; padding: 28px 0;">Your cart is empty. Add cold-pressed oils or A2 ghee to get started!</p>`;
    if (checkoutBox) checkoutBox.style.display = "none";
    return;
  }

  if (checkoutBox) checkoutBox.style.display = "block";

  listEl.innerHTML = cart
    .map(
      (item, idx) => `
      <div class="cart-item">
        <div class="cart-item-left">
          <img src="${item.image}" onerror="this.src='${FALLBACK_IMAGE}'" alt="${item.name}">
          <div class="cart-item-meta">
            <strong>${item.name}</strong>
            <span>${item.size} • ₹${item.price} each</span>
            <strong style="color: var(--green);">₹${(item.price * item.qty).toLocaleString("en-IN")}</strong>
          </div>
        </div>
        <div class="qty-controls">
          <button type="button" onclick="updateCartQty(${idx}, -1)" aria-label="Decrease quantity">-</button>
          <span>${item.qty}</span>
          <button type="button" onclick="updateCartQty(${idx}, 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>`
    )
    .join("");
}

function openCartDrawer() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("cartOverlay")?.classList.add("open");
  document.getElementById("cartDrawer")?.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("cartOverlay")?.classList.remove("open");
  document.getElementById("cartDrawer")?.setAttribute("aria-hidden", "true");
}

// WhatsApp Checkout Submission
function submitWhatsAppOrder() {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const name = document.getElementById("custName")?.value.trim();
  const address = document.getElementById("custAddress")?.value.trim();
  const payment = document.getElementById("custPayment")?.value || "UPI / Online on Delivery";

  if (!name || !address) {
    alert("Please enter your Name and Delivery Address before placing the order.");
    return;
  }

  const lines = cart.map(
    (item, idx) =>
      `${idx + 1}. ${item.name} (${item.size}) × ${item.qty} = ₹${(item.price * item.qty).toLocaleString("en-IN")}`
  );
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const message =
    `*New Order — Shivora Organics*\n\n` +
    `*Order Items:*\n${lines.join("\n")}\n\n` +
    `*Delivery:* FREE\n` +
    `*Total Payable:* ₹${totalAmount.toLocaleString("en-IN")}\n\n` +
    `*Customer Details:*\n` +
    `• Name: ${name}\n` +
    `• Address: ${address}\n` +
    `• Payment Mode: ${payment}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

// Toast Banner
let toastTimer = null;
function showToast(text) {
  const toastEl = document.getElementById("toast");
  if (!toastEl) return;
  toastEl.textContent = text;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2500);
}

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
  { threshold: 0.1 }
);

document.querySelectorAll(".animate-up, .animate-item").forEach((el) => observer.observe(el));

// Close drawer on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCartDrawer();
});

// Initialize Cart on Page Load
updateCartUI();
