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
});