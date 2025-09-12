const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const btn = document.getElementById('btn');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value;
  console.log(searchQuery);
  btn.textContent = 'Searching....';
  fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=b0eec689`)
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => {
      btn.textContent = 'Search';
    });
});
