document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://www.course-api.com/react-store-products';

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => displayProducts(data))
  .catch(error => console.error('Error fetching data:', error));
});