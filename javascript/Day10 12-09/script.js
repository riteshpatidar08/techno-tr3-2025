const form = document.getElementById('form');
const searchInput = document.getElementById('search');

form.addEventListener('submit', (event)=>{
event.preventDefault();
const searchQuery = searchInput.value ;
console.log(searchQuery)
})