// List of products (can also be fetched from JSON)
const products = {
  1: {
    name: "2000W Off-Grid Inverter",
    image: "image/inventer1.webp",
    brand: "VoltX",
    power: "2kW",
    voltage: "12V",
    warranty: "2 Years",
    usage: "Home",
    price: "15000",
    description: "Converts DC from solar panels to AC for home use. Reliable, efficient, and eco-friendly."
  },
  2: {
    name: "5kW On-Grid Inverter",
    image: "image/inventer2.jpg",
    brand: "Waaree",
    power: "5kW",
    voltage: "24V",
    warranty: "5 Years",
    usage: "Commercial",
    price: "48000",
    description: "Ideal for commercial setups. Efficient on-grid inverter with stable performance."
  },
  3: {
    name: "10kW Hybrid Inverter",
    image: "image/inventer3.png",
    brand: "Luminous",
    power: "10kW",
    voltage: "48V",
    warranty: "2 Years",
    usage: "Industrial",
    price: "72000",
    description: "Hybrid inverter combining off-grid and on-grid capabilities for industrial needs."
  },
  4: {
    name: "3kW Off-Grid Inverter",
    image: "image/inventer4-removebg-preview.png",
    brand: "Growatt",
    power: "3kW",
    voltage: "24V",
    warranty: "3 Years",
    usage: "Home",
    price: "25000",
    description: "Compact off-grid inverter for home installations. Reliable backup power solution."
  }
};

// Get productId from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");

// Populate page with product details
if (products[productId]) {
  const product = products[productId];
  document.getElementById("productImage").src = product.image;
  document.getElementById("brand").innerText = product.brand;
  document.getElementById("power").innerText = product.power;
  document.getElementById("voltage").innerText = product.voltage;
  document.getElementById("warranty").innerText = product.warranty;
  document.getElementById("usage").innerText = product.usage;
  document.getElementById("Price").innerText = product.price;
  document.getElementById("productDescription").innerText = product.description;
}
