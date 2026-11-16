const WHATSAPP_NUMBER = "919270288488";
const FALLBACK_IMAGE = "images/products/prod_grndnut_1l_oil.jpeg";

// Infographic SVG Icons
const INFO_ICONS = {
  press: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s6 6 6 10a6 6 0 1 1-12 0C6 8 12 2 12 2z"/></svg>`,
  temp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
  nutrient: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  shelf: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
};

// Central Product Catalog (Base price list + ₹30/Litre adjustment + A2 Cow Ghee)
const CATALOG = [
  {
    id: "groundnut-oil",
    name: "Groundnut Oil",
    category: "100% Wood Cold-Pressed",
    image: "images/products/prod_grndnut_1l_oil.jpeg",
    rating: "4.9 (64 Verified Customers)",
    shortDesc: "Light, nutty & aromatic — ideal for daily cooking and deep frying.",
    desc: "Slow-pressed in a traditional wooden Kolhu mill from sun-dried, hand-sorted groundnuts. Because no external heat or chemical solvents are used, this virgin oil retains its rich nutty fragrance, natural Vitamin E, and heart-protective monounsaturated fats.",
    specs: [
      { icon: "press", label: "Extraction", value: "Wooden Kolhu First-Press" },
      { icon: "temp", label: "Smoke Point", value: "High (~225°C) • Frying Ready" },
      { icon: "nutrient", label: "Key Nutrients", value: "MUFA, Resveratrol & Vit-E" },
      { icon: "shelf", label: "Shelf Life", value: "9 Months (Unrefined)" }
    ],
    nutrition: [
      ["Energy", "124 kcal"],
      ["Monounsaturated Fat (MUFA)", "6.8 g"],
      ["Polyunsaturated Fat (PUFA)", "4.4 g"],
      ["Trans Fat & Cholesterol", "0 g / 0 mg"],
      ["Natural Vitamin E", "2.4 mg"]
    ],
    highlights: [
      "100% unrefined, single-origin & chemical-free",
      "High smoke point makes it ideal for deep frying, tadka & daily sabzis",
      "Zero trans-fat, zero cholesterol & naturally rich in antioxidants",
      "Requires up to 20% less oil per dish compared to refined oils"
    ],
    culinaryUse: "Everyday Indian cooking, deep frying puris/snacks, tadka, and roasting.",
    storageTip: "Store in a cool, dry place away from direct sunlight. Natural light sedimentation at the bottom is a hallmark of pure unrefined oil.",
    variants: [
      { size: "Half Litre (500 ml)", price: 185, note: "₹370 / L" },
      { size: "1 Litre", price: 360, note: "Most Popular" },
      { size: "5 Litres", price: 1750, note: "₹350 / L • Family Pack" }
    ]
  },
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    category: "Kachi Ghani Cold-Pressed",
    image: "images/products/prod_mustard_1l_oil.jpeg",
    rating: "4.9 (52 Verified Customers)",
    shortDesc: "Bold Kachi Ghani flavour — rich in Omega-3 for classic dishes.",
    desc: "Extracted via traditional Kachi Ghani wooden pressing from pungent, bold mustard seeds. It preserves natural allyl isothiocyanate, balanced Omega-3 & Omega-6 fatty acids, and authentic culinary sharpness without synthetic essence.",
    specs: [
      { icon: "press", label: "Extraction", value: "Traditional Kachi Ghani" },
      { icon: "temp", label: "Smoke Point", value: "High (~250°C) • Sautéing" },
      { icon: "nutrient", label: "Key Nutrients", value: "Omega-3, Omega-6 & Vit-E" },
      { icon: "shelf", label: "Shelf Life", value: "12 Months (Natural)" }
    ],
    nutrition: [
      ["Energy", "124 kcal"],
      ["Monounsaturated Fat (MUFA)", "8.4 g"],
      ["Omega-3 & Omega-6 (PUFA)", "3.1 g"],
      ["Trans Fat & Cholesterol", "0 g / 0 mg"],
      ["Natural Antioxidants", "Rich in Tocopherols"]
    ],
    highlights: [
      "Optimal ratio of Omega-3 and Omega-6 essential fatty acids",
      "Natural antimicrobial properties ideal for traditional homemade pickles",
      "100% pure — free from argemone oil or artificial pungency boosters",
      "Also widely used for winter body & joint massage"
    ],
    culinaryUse: "Curries, Bengali & North Indian dishes, marinades, stir-fries, and pickles.",
    storageTip: "Keep tightly capped in a cool pantry away from moisture and heat.",
    variants: [
      { size: "Half Litre (500 ml)", price: 175, note: "₹350 / L" },
      { size: "1 Litre", price: 340, note: "Most Popular" },
      { size: "5 Litres", price: 1650, note: "₹330 / L • Family Pack" }
    ]
  },
  {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    category: "100% Wood Cold-Pressed",
    image: "images/products/sunfloweroil_img.png",
    rating: "4.8 (39 Verified Customers)",
    shortDesc: "Light & mild — keeps everyday meals light and heart-friendly.",
    desc: "Cold-pressed from quality black-hulled sunflower seeds without hexane extraction or chemical bleaching. Offers a clean, delicate flavour that lets your spices shine while delivering pure plant-based nutrition.",
    specs: [
      { icon: "press", label: "Extraction", value: "Zero-Heat Cold Press" },
      { icon: "temp", label: "Smoke Point", value: "Medium-High (~210°C)" },
      { icon: "nutrient", label: "Key Nutrients", value: "Natural Vitamin E & Linoleic Acid" },
      { icon: "shelf", label: "Shelf Life", value: "9 Months (Unrefined)" }
    ],
    nutrition: [
      ["Energy", "124 kcal"],
      ["Polyunsaturated Fat (PUFA)", "9.2 g"],
      ["Monounsaturated Fat (MUFA)", "2.8 g"],
      ["Trans Fat & Cholesterol", "0 g / 0 mg"],
      ["Natural Vitamin E", "5.6 mg"]
    ],
    highlights: [
      "Extracted without chemical solvents or artificial defoamers",
      "Naturally abundant in antioxidant Vitamin E for skin and heart health",
      "Mild aroma and light texture suited for all-purpose family cooking"
    ],
    culinaryUse: "Daily sautéing, baking, light frying, and continental or mild Indian dishes.",
    storageTip: "Store in a dark, cool cupboard away from stove heat.",
    variants: [
      { size: "Half Litre (500 ml)", price: 215, note: "₹430 / L" },
      { size: "1 Litre", price: 420, note: "Most Popular" },
      { size: "5 Litres", price: 2000, note: "₹400 / L • Family Pack" }
    ]
  },
  {
    id: "sesame-oil",
    name: "Sesame Oil (Gingelly)",
    category: "100% Wood Cold-Pressed",
    image: "images/products/prod_sesame_1l_oil.jpeg",
    rating: "4.9 (45 Verified Customers)",
    shortDesc: "Warm, earthy & nutrient-dense — prized for cooking & Ayurveda.",
    desc: "Wood-pressed from sun-cured white sesame seeds to preserve sesamol and sesamin—two rare natural antioxidants known in Ayurveda for supporting joint mobility, bone strength, and digestive wellness.",
    specs: [
      { icon: "press", label: "Extraction", value: "Wooden Kolhu First-Press" },
      { icon: "temp", label: "Smoke Point", value: "Medium (~180°C) • Tempering" },
      { icon: "nutrient", label: "Key Nutrients", value: "Sesamol, Calcium & Zinc" },
      { icon: "shelf", label: "Shelf Life", value: "12 Months (Antioxidant Rich)" }
    ],
    nutrition: [
      ["Energy", "124 kcal"],
      ["Polyunsaturated Fat (PUFA)", "5.8 g"],
      ["Monounsaturated Fat (MUFA)", "5.5 g"],
      ["Trans Fat & Cholesterol", "0 g / 0 mg"],
      ["Natural Lignans", "Sesamol & Sesamin"]
    ],
    highlights: [
      "Rich in sesamol, natural calcium, iron, and healthy polyunsaturated fats",
      "Enhances South Indian podis, chutneys, pickles, and Asian stir-fries",
      "Pure enough for Ayurvedic Abhyanga (body massage) and oil pulling"
    ],
    culinaryUse: "Tempering, chutneys, idli/dosa podi, pickles, stir-fries, and therapeutic massage.",
    storageTip: "Keep tightly sealed in a cool, dry place.",
    variants: [
      { size: "Half Litre (500 ml)", price: 275, note: "₹550 / L" },
      { size: "1 Litre", price: 560, note: "Most Popular" },
      { size: "5 Litres", price: 2750, note: "₹550 / L • Family Pack" }
    ]
  },
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    category: "100% Virgin Cold-Pressed",
    image: "images/products/coconut_oil.jpg",
    rating: "5.0 (71 Verified Customers)",
    shortDesc: "Unrefined & fragrant — pure goodness for cooking, skin & hair.",
    desc: "Cold-pressed from sulfur-free, sun-dried coconut copra to retain its sweet tropical aroma, Lauric Acid, and easily digestible Medium-Chain Triglycerides (MCTs).",
    specs: [
      { icon: "press", label: "Extraction", value: "Cold-Pressed Copra" },
      { icon: "temp", label: "Smoke Point", value: "Medium (~177°C) • Cooking" },
      { icon: "nutrient", label: "Key Nutrients", value: "Lauric Acid & Pure MCTs" },
      { icon: "shelf", label: "Shelf Life", value: "12 Months (Natural)" }
    ],
    nutrition: [
      ["Energy", "125 kcal"],
      ["Lauric Acid (MCT)", "6.7 g"],
      ["Healthy Medium-Chain Fats", "8.6 g"],
      ["Trans Fat & Cholesterol", "0 g / 0 mg"],
      ["Refining / Bleaching", "None (100% Virgin)"]
    ],
    highlights: [
      "100% pure, unbleached, and free from mineral oil or synthetic fragrance",
      "Boosts metabolism and immunity when used in cooking or morning oil pulling",
      "Deeply conditions hair roots and moisturizes dry skin safely"
    ],
    culinaryUse: "Coastal cooking, baking, sweets, oil pulling, hair nourishment, and baby skin care.",
    storageTip: "Naturally solidifies below 24°C — a sign of 100% purity. Warm bottle gently in water to liquefy.",
    variants: [
      { size: "Half Litre (500 ml)", price: 375, note: "₹750 / L" },
      { size: "1 Litre", price: 780, note: "Most Popular" },
      { size: "5 Litres", price: 3850, note: "₹770 / L • Family Pack" }
    ]
  },
  {
    id: "safflower-oil",
    name: "Safflower Oil",
    category: "100% Wood Cold-Pressed",
    image: "images/products/prod_grndnut_1l_oil.jpeg",
    rating: "4.8 (33 Verified Customers)",
    shortDesc: "Heart & diabetes friendly — light oil for everyday health.",
    desc: "Traditionally wood-pressed from selected safflower (Kardi) seeds. Prized for its balanced fatty acid profile that supports healthy cholesterol levels and light, clean daily cooking.",
    specs: [
      { icon: "press", label: "Extraction", value: "Wooden Kolhu First-Press" },
      { icon: "temp", label: "Smoke Point", value: "High (~215°C) • Daily Meals" },
      { icon: "nutrient", label: "Key Nutrients", value: "Oleic Acid & Vitamin E" },
      { icon: "shelf", label: "Shelf Life", value: "9 Months (Unrefined)" }
    ],
    nutrition: [
      ["Energy", "124 kcal"],
      ["Unsaturated Fatty Acids", "12.1 g"],
      ["Saturated Fat", "1.1 g"],
      ["Trans Fat & Cholesterol", "0 g / 0 mg"],
      ["Natural Vitamin E", "4.6 mg"]
    ],
    highlights: [
      "Supports cardiovascular wellness and diabetes-friendly meal planning",
      "Neutral, pleasant taste that never overpowers traditional spices",
      "100% cold-pressed without chemical refining or preservatives"
    ],
    culinaryUse: "Everyday dal, sabzi, roasting, and light pan-frying.",
    storageTip: "Store away from direct sunlight in a cool kitchen cabinet.",
    variants: [
      { size: "Half Litre (500 ml)", price: 265, note: "₹530 / L" },
      { size: "1 Litre", price: 510, note: "Most Popular" },
      { size: "5 Litres", price: 2500, note: "₹500 / L • Family Pack" }
    ]
  },
  {
    id: "almond-oil",
    name: "Almond Oil",
    category: "100% Pure Sweet Almond",
    image: "images/products/almond_oil.jpg",
    rating: "5.0 (41 Verified Customers)",
    shortDesc: "Pure cold-pressed sweet almond oil — for wellness, skin & hair.",
    desc: "Slow-pressed in micro-batches from premium sweet almonds without heat or solvents. Rich in Vitamin E, biotin, and omega fatty acids for internal nourishment and external skin/hair care.",
    specs: [
      { icon: "press", label: "Extraction", value: "Micro-Batch Cold Press" },
      { icon: "temp", label: "Usage", value: "Edible & Topical Care" },
      { icon: "nutrient", label: "Key Nutrients", value: "Vitamin E, Biotin & Omega-9" },
      { icon: "shelf", label: "Shelf Life", value: "12 Months (Pure)" }
    ],
    nutrition: [
      ["Energy", "120 kcal"],
      ["Monounsaturated Omega-9", "9.4 g"],
      ["Polyunsaturated Omega-6", "2.4 g"],
      ["Trans Fat & Cholesterol", "0 g / 0 mg"],
      ["Natural Vitamin E", "5.3 mg"]
    ],
    highlights: [
      "100% pure sweet almond oil — zero dilution with carrier oils",
      "Add 1 teaspoon to warm milk at night for brain and digestive wellness",
      "Gentle, non-greasy nourishment for baby massage, face glow, and hair"
    ],
    culinaryUse: "Warm milk tonic, salad drizzling, baby massage, facial serum, and scalp care.",
    storageTip: "Keep tightly closed in a cool, dark place.",
    variants: [
      { size: "Half Litre (500 ml)", price: 1215, note: "Wellness Pack" },
      { size: "1 Litre", price: 2330, note: "Family Value Pack" }
    ]
  },
  {
    id: "a2-cow-ghee",
    name: "A2 Cow Ghee",
    category: "Traditional Vedic Bilona",
    image: "images/products/prod_a2_ghee.jpeg",
    rating: "5.0 (86 Verified Customers)",
    shortDesc: "Traditional Bilona A2 desi cow ghee — rich aroma & granular texture.",
    desc: "Crafted using the authentic Vedic Bilona process: whole A2 milk from grass-fed indigenous cows is cultured into curd, hand-churned bi-directionally with a wooden mathani to extract makkhan, and slow-simmered over a gentle flame.",
    specs: [
      { icon: "press", label: "Method", value: "Curd-Churned Vedic Bilona" },
      { icon: "temp", label: "Smoke Point", value: "Very High (~250°C)" },
      { icon: "nutrient", label: "Key Nutrients", value: "Vitamins A, D, E, K & CLA" },
      { icon: "shelf", label: "Shelf Life", value: "12 Months (Natural)" }
    ],
    nutrition: [
      ["Energy", "130 kcal"],
      ["Healthy Butyric Acid & CLA", "Rich Natural Source"],
      ["Fat-Soluble Vitamins", "Vitamins A, D, E & K2"],
      ["Trans Fat", "0 g (Natural Dairy Fat)"],
      ["Milk Source", "100% Indigenous A2 Cows"]
    ],
    highlights: [
      "Made from cultured A2 curd—never from commercial milk cream",
      "Rich golden granular (danedar) texture with unmistakable pure aroma",
      "Supports gut health, joint lubrication, and immunity for kids & elders",
      "100% free from preservatives, starch, colours, or artificial essence"
    ],
    culinaryUse: "Drizzling on hot rotis/dal/khichdi, Ayurvedic morning spoonful, sweets, and high-heat tadka.",
    storageTip: "Always use a clean, dry spoon. No refrigeration required.",
    variants: [
      { size: "Half Litre (500 ml)", price: 700, note: "500 ml Jar" },
      { size: "1 Litre", price: 1300, note: "Save ₹100 • 1L Pack" }
    ]
  }
];

const CUSTOMER_REVIEWS = [
  {
    name: "Sneha Kulkarni",
    city: "Thane",
    text: "You can tell the difference the moment you open the bottle. The natural aroma while cooking is incomparable to supermarket refined oils, and my family uses much less oil per meal now."
  },
  {
    name: "Dr. Rajeshwar Deshmukh",
    city: "Kalyan",
    text: "We switched our entire kitchen to Shivora's wood-pressed groundnut oil and A2 Bilona ghee six months ago. Authentic purity, zero heaviness after meals, and prompt delivery."
  },
  {
    name: "Priyanka Joshi",
    city: "Mumbai",
    text: "Their cold-pressed coconut oil and almond oil are staples in our home for both cooking and baby massage. Completely unrefined and fresh from every batch."
  }
];

// Persistent Cart State
let cart = JSON.parse(localStorage.getItem("shivora_cart") || "[]");

function saveCart() {
  localStorage.setItem("shivora_cart", JSON.stringify(cart));
  updateCartUI();
}

// Helper to Build Product Card HTML
function buildProductCardHTML(product) {
  const defaultVariant = product.variants.find((v) => v.size === "1 Litre") || product.variants[0];
  const defaultIdx = product.variants.indexOf(defaultVariant);

  return `
    <article class="product-card" data-product-id="${product.id}">
      <a href="product.html?id=${product.id}" class="product-link-area">
        <div class="product-thumb">
          <span class="view-badge">Full Details →</span>
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
          <a href="product.html?id=${product.id}" class="btn btn-ghost">Details</a>
        </div>
      </div>
    </article>
  `;
}

// Render Main Storefront Grid on index.html
const productGridEl = document.getElementById("productGrid");
if (productGridEl) {
  productGridEl.innerHTML = CATALOG.map(buildProductCardHTML).join("");
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
  document.getElementById("breadcrumbCurrent").textContent = detailProduct.name;
  document.getElementById("detailCategoryTag").textContent = detailProduct.category;
  document.getElementById("detailRatingText").textContent = detailProduct.rating;

  const detailImg = document.getElementById("detailPageImg");
  detailImg.src = detailProduct.image;
  detailImg.onerror = () => { detailImg.src = FALLBACK_IMAGE; };
  detailImg.alt = detailProduct.name;

  document.getElementById("detailPageDesc").textContent = detailProduct.desc;
  document.getElementById("detailPagePrice").textContent = `₹${defaultVariant.price}`;
  document.getElementById("detailPerLitreNote").textContent = defaultVariant.note || "";
  document.getElementById("detailCulinaryUse").textContent = detailProduct.culinaryUse;
  document.getElementById("detailStorageTip").textContent = detailProduct.storageTip;

  // Render 4 Infographic Cards
  document.getElementById("detailInfographics").innerHTML = detailProduct.specs
    .map(
      (s) => `
      <div class="infographic-item">
        <div class="info-ico">${INFO_ICONS[s.icon] || INFO_ICONS.press}</div>
        <div>
          <small>${s.label}</small>
          <strong>${s.value}</strong>
        </div>
      </div>`
    )
    .join("");

  // Render Tabs Content
  document.getElementById("detailPageHighlights").innerHTML = detailProduct.highlights
    .map((h) => `<li>${h}</li>`)
    .join("");

  document.getElementById("detailNutritionTable").innerHTML = detailProduct.nutrition
    .map(([label, val]) => `<tr><td>${label}</td><td>${val}</td></tr>`)
    .join("");

  // Render Variant Pills
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

  // Wire Add to Cart & Buy Now Buttons
  const triggerAdd = () => addItemToCart(detailProduct, detailProduct.variants[detailSelectedIdx], detailQty);
  document.getElementById("detailAddCartBtn").onclick = triggerAdd;
  document.getElementById("detailBuyNowBtn").onclick = () => {
    triggerAdd();
    openCartDrawer();
  };

  // Sticky Mobile Buy Bar Setup
  document.getElementById("stickyTitle").textContent = detailProduct.name;
  updateStickyBarMeta();
  document.getElementById("stickyAddBtn").onclick = triggerAdd;

  const sentinel = document.getElementById("mainCtaSentinel");
  const stickyBar = document.getElementById("stickyBuyBar");
  if (sentinel && stickyBar) {
    const stickyObs = new IntersectionObserver(
      ([entry]) => {
        stickyBar.classList.toggle("visible", !entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    stickyObs.observe(sentinel);
  }

  // Render Reviews
  const reviewsGridEl = document.getElementById("detailReviewsGrid");
  if (reviewsGridEl) {
    reviewsGridEl.innerHTML = CUSTOMER_REVIEWS.map(
      (r) => `
      <div class="review-card">
        <div class="review-top">
          <span class="stars">★★★★★</span>
          <span style="font-size:0.75rem; color:var(--green); font-weight:600;">✓ Verified Buyer</span>
        </div>
        <p>"${r.text}"</p>
        <span class="review-author">— ${r.name}, ${r.city}</span>
      </div>`
    ).join("");
  }

  // Render All Other Products Below
  const relatedGridEl = document.getElementById("relatedProductsGrid");
  if (relatedGridEl) {
    const otherProducts = CATALOG.filter((p) => p.id !== detailProduct.id);
    relatedGridEl.innerHTML = otherProducts.map(buildProductCardHTML).join("");
  }
}

function updateStickyBarMeta() {
  if (!detailProduct) return;
  const v = detailProduct.variants[detailSelectedIdx];
  const stickyMeta = document.getElementById("stickyMeta");
  if (stickyMeta) stickyMeta.textContent = `${v.size} • ₹${v.price}`;
}

function selectDetailVariant(idx, btnEl) {
  if (!detailProduct) return;
  detailSelectedIdx = idx;
  const v = detailProduct.variants[idx];
  document.getElementById("detailPagePrice").textContent = `₹${v.price}`;
  document.getElementById("detailPerLitreNote").textContent = v.note || "";
  updateStickyBarMeta();

  document.querySelectorAll("#detailVariantPills .variant-pill").forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
}

function changeDetailQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  document.getElementById("detailQtyVal").textContent = detailQty;
}

function switchProductTab(tabKey, btnEl) {
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
  btnEl.classList.add("active");
  document.getElementById(`tab-${tabKey}`)?.classList.add("active");
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

// WhatsApp Checkout Submission with Mandatory Phone & Pin Code Validation
function submitWhatsAppOrder() {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const name = document.getElementById("custName")?.value.trim();
  const phone = document.getElementById("custPhone")?.value.trim();
  const pincode = document.getElementById("custPincode")?.value.trim();
  const address = document.getElementById("custAddress")?.value.trim();
  const payment = document.getElementById("custPayment")?.value || "UPI / Online on Delivery";

  if (!name) {
    alert("Please enter your Full Name.");
    document.getElementById("custName")?.focus();
    return;
  }

  if (!phone || !/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit Phone Number so we can call you for delivery.");
    document.getElementById("custPhone")?.focus();
    return;
  }

  if (!pincode || !/^\d{6}$/.test(pincode)) {
    alert("Please enter a valid 6-digit Pin Code.");
    document.getElementById("custPincode")?.focus();
    return;
  }

  if (!address) {
    alert("Please enter your Complete Delivery Address.");
    document.getElementById("custAddress")?.focus();
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
    `*Items Subtotal:* ₹${totalAmount.toLocaleString("en-IN")}\n` +
    `*Delivery:* Delivery charges may apply based on location\n\n` +
    `*Customer Details:*\n` +
    `• Name: ${name}\n` +
    `• Phone: ${phone}\n` +
    `• Pin Code: ${pincode}\n` +
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
