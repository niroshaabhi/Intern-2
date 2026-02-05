const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product-card');

priceRange.addEventListener('input', () => {
  priceValue.textContent = priceRange.value;
  filterProducts();
});

filters.forEach(f => f.addEventListener('change', filterProducts));

function filterProducts() {
  const maxPrice = parseInt(priceRange.value);
  products.forEach(product => {
    const price = parseInt(product.dataset.price);
    let visible = price <= maxPrice;
    filters.forEach(filter => {
      if (filter.checked) {
        const key = Object.keys(filter.dataset)[0];
        const val = filter.dataset[key];
        if (product.dataset[key] !== val) visible = false;
      }
    });
    product.style.display = visible ? 'flex' : 'none';
  });
}
document.querySelectorAll('.product-card img').forEach(img => {
  img.addEventListener('click', () => {
    const card = img.closest('.product-card');
    const id = card.dataset.id;
    const link = card.dataset.link;
    window.location.href = `product.html?id=${id}&ref=${encodeURIComponent(link)}`;
  });
});

