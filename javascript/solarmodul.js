// ==============================
// LOGIN MODAL CONTROL
// ==============================

// Get elements
const loginBtn = document.querySelector('.login-btn');
const loginOverlay = document.getElementById('loginOverlay');
const closeLogin = document.getElementById('closeLogin');

// Open modal on Login button click
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // disable background scroll
});

// Close modal when clicking the close (×) button
closeLogin.addEventListener('click', () => {
  loginOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the login box
loginOverlay.addEventListener('click', (e) => {
  if (e.target === loginOverlay) {
    loginOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});


// ==============================
// ADD TO CART (Optional Example)
// ==============================
// ===================================
// 🌞 SUN POWER HUB – CART + FILTER
// ===================================

document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // CART ELEMENTS
  // ==============================
  const cartIcon  = document.getElementById("cartIcon");
  const cartPanel = document.getElementById("cartPanel");
  const closeCart = document.getElementById("closeCart");
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  let cart = [];

  // ==============================
  // OPEN / CLOSE CART
  // ==============================
  cartIcon.addEventListener("click", () => {
    cartPanel.classList.add("active");
  });

  closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("active");
  });

  // ==============================
  // ADD TO CART
  // ==============================
  document.querySelectorAll(".cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const card  = btn.closest(".product-card");
      const name  = card.querySelector("h3").innerText;
      const image = card.querySelector("img").src;
      const price = Number(btn.dataset.price); // ✅ FIXED

      if (isNaN(price)) {
        console.error("Price missing for:", name, btn.dataset.price);
        return;
      }

      const existing = cart.find(item => item.name === name);

      if (existing) {
        existing.qty++;
      } else {
        cart.push({ name, image, price, qty: 1 });
      }

      updateCart();
    });
  });

  // ==============================
  // UPDATE CART
  // ==============================
  function updateCart() {
    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
      const subtotal = item.price * item.qty;
      total += subtotal;
      count += item.qty;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" width="60">
        <div class="cart-info">
          <p><strong>${item.name}</strong></p>
          <p>₹${item.price} × ${item.qty}</p>
          <p><strong>Subtotal:</strong> ₹${subtotal}</p>

          <div class="qty-controls">
            <button onclick="changeQty(${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>

          <button class="remove-btn" onclick="removeItem(${index})">
            Remove
          </button>
        </div>
      `;
      cartItems.appendChild(div);
    });

    cartCount.innerText = count;
    cartTotal.innerText = total.toLocaleString("en-IN");

    localStorage.setItem("sunpowerCart", JSON.stringify(cart));
  }

  // ==============================
  // QTY CONTROLS
  // ==============================
  window.changeQty = (index, delta) => {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    updateCart();
  };

  window.removeItem = (index) => {
    cart.splice(index, 1);
    updateCart();
  };

  // ==============================
  // LOAD CART FROM STORAGE
  // ==============================
  const savedCart = localStorage.getItem("sunpowerCart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCart();
  }

  // ===================================
  // 🌞 FILTER FUNCTIONALITY
  // ===================================
  const filterBrand    = document.getElementById("filterBrand");
  const filterType     = document.getElementById("filterType");
  const filterPrice    = document.getElementById("filterPrice");
  const filterWarranty = document.getElementById("filterWarranty");
  const filterVoltage  = document.getElementById("filterVoltage");

  const applyBtn = document.querySelector(".apply-btn");
  const clearBtn = document.getElementById("clearFilters");
  const cards    = document.querySelectorAll(".product-card");

  function applyFilters() {
    cards.forEach(card => {
      let visible = true;

      const price    = +card.dataset.price;
      const warranty = +card.dataset.warranty;
      const voltage  = +card.dataset.voltage;

      if (filterBrand.value !== "all" && card.dataset.brand !== filterBrand.value)
        visible = false;

      if (filterType.value !== "all" && card.dataset.type !== filterType.value)
        visible = false;

      if (filterPrice.value !== "all") {
        if (filterPrice.value === "0-1000" && price >= 1000) visible = false;
        if (filterPrice.value === "1000-3000" && (price < 1000 || price > 3000)) visible = false;
        if (filterPrice.value === "3000-6000" && (price < 3000 || price > 6000)) visible = false;
        if (filterPrice.value === "6000+" && price < 6000) visible = false;
      }

      if (filterWarranty.value !== "all" && warranty < +filterWarranty.value)
        visible = false;

      if (filterVoltage.value !== "all" && voltage !== +filterVoltage.value)
        visible = false;

      card.style.display = visible ? "flex" : "none";
    });
  }

  function clearFilters() {
    filterBrand.value =
    filterType.value =
    filterPrice.value =
    filterWarranty.value =
    filterVoltage.value = "all";

    cards.forEach(card => card.style.display = "flex");
  }

  applyBtn.addEventListener("click", applyFilters);
  clearBtn.addEventListener("click", clearFilters);

});
