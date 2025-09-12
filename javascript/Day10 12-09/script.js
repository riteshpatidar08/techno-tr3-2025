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

//ASYNC AWAIT
//requirement you need a js function which you have to make a asynchronous function use await keyword infront of each fetch function ;

fetch('https://randomuser.me/api/')
  .then((res) => res.json())
  .then((data) => console.log(data));

//you have to use await keyword in front of the fucntions which are returning a promise , await will wait  until  the promise is resolved and after that save the result into the variable
async function fetchData() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  console.log(data);
}
fetchData();

//in arrow function
//   const test = async() => {}

console.log('1');
Promise.resolve('hello').then((data) => {
  console.log(data);
});
setTimeout(() => {
  console.log('timer');
}, 0);
console.log('2');

//NOTE event loop , callback queue , microstask queue , callstack ;

//NOTE OOP object oriented promgrammming  ;

const side = 4;

function generateSquare(side) {
  console.log(`square has ${side}`);
}

generateSquare(side);

//side value =>

const obj = {
  side: 4,
  generateSquare: function () {
    console.log(`square has ${this.side}`);
  },
};

//factory function 
function genrateNewsquare(side){
return {
    side : side ,
    generateSquare: function () {
        console.log(`square has ${this.side}`);
      },
}
}
console.log(genrateNewsquare(1))
console.log(genrateNewsquare(2))