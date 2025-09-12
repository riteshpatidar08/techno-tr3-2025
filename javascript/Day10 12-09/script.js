const form = document.getElementById('form');
const searchInput = document.getElementById('search');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value;
  console.log(searchQuery);
  fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=b0eec689`)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
