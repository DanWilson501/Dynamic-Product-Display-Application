document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://www.course-api.com/react-store-products';
  let products = [];
  let currentIndex = 0;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      products = data;
      displayProduct(currentIndex);
    })
    .catch(error => console.error('Error fetching data:', error));

    const loadingIndicator = document.getElementById('loading-indicator');
    const productContainer = document.getElementById('product-container');
  
    function showLoading() {
      loadingIndicator.style.display = 'block';
      productContainer.style.display = 'none';
    }
  
    function hideLoading() {
      loadingIndicator.style.display = 'none';
      productContainer.style.display = 'block';
    }
  

  document.getElementById('prev-button').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      displayProduct(currentIndex);
    }
  });

  document.getElementById('next-button').addEventListener('click', () => {
    if (currentIndex < products.length - 1) {
      currentIndex++;
      displayProduct(currentIndex);
    }
  });
function displayProduct(index) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  const product = products[index];
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  const productHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${formatPrice(product.price)}</p>
    <p>${product.description}</p>
  `;

  productElement.innerHTML = productHTML;
  container.appendChild(productElement);
}

function formatPrice(price) {
  return `$${(price / 100).toFixed(2)}`;
}
});