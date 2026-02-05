const products = [
  { name: "Solar Panel 550W", page: "solarmodul.html" },
  { name: "Solar Inverter", page: "inventer.html" },
  { name: "Lithium Battery", page: "inventer.html" },
  { name: "Charge Controller", page: "controller.html" }
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput && searchResults) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (!value) return;

    const matches = products.filter(product =>
      product.name.toLowerCase().includes(value)
    );

    matches.forEach(product => {
      const item = document.createElement("div");
      item.className = "search-item";
      item.textContent = product.name;

      item.onclick = () => {
        window.location.href = product.page;
      };

      searchResults.appendChild(item);
    });
  });
}

