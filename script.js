document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://www.course-api.com/react-store-products';
  let products = [];
  let currentIndex = 0;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response failed: ${response.statusText}`);
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
});