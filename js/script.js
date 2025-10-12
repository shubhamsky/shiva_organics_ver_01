/* Shiva Organics - script.js
   - openWhatsApp(product)
   - small-screen nav toggle
   - apply "in-view" class when elements intersect
*/

const WA_NUMBER = "919270288488"; // international format without '+'

function openWhatsApp(product) {
  const message = encodeURIComponent(`Hello Shiva Organics 👋, I would like to order: ${product}. Please share price & delivery details.`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
}

// If product-card clickable, link already calls openWhatsApp(...) in HTML onclick

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }

  // IntersectionObserver for scroll animations
  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-up, .animate-item").forEach((el, i) => {
    // staggered animation: small delay based on index
    el.style.animationDelay = `${i * 80}ms`;
    observer.observe(el);
  });

  // Order form -> build WhatsApp message
  const sendBtn = document.getElementById("sendOrderBtn");
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const name = (document.getElementById("custName") || {}).value || "";
      const oil = (document.getElementById("oilType") || {}).value || "";
      const qty = (document.getElementById("qty") || {}).value || "";
      const addr = (document.getElementById("addr") || {}).value || "";

      if (!name.trim() || !oil.trim() || !qty.trim() || !addr.trim()) {
        alert("Please fill all fields before sending the order.");
        return;
      }

      const msg =
        `Hello Shiva Organics 👋%0A%0A` +
        `I want to place an order:%0A` +
        `• Name: ${encodeURIComponent(name)}%0A` +
        `• Oil: ${encodeURIComponent(oil)}%0A` +
        `• Quantity: ${encodeURIComponent(qty)} L%0A` +
        `• Address: ${encodeURIComponent(addr)}%0A%0A` +
        `Please confirm price & delivery.`;

      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    });
  }
});
