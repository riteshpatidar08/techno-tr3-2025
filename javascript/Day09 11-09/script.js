//NOTE create a password field if the password length is smaller than 8 character show password must be 8 character long use input event ;
//note input field for password
//note select in the js
//note value fetch on input event
//note check the length of value then show ui according to the condition
// const password = document.getElementById('password');

// password.addEventListener('input', function (event) {
//   console.log(event.target.value);
//   if (event.target.value.length < 8) {
//     document.getElementById('error').textContent =
//       'password must be 8 character long ';
//   } else {
//     document.getElementById('error').textContent = '';
//   }
// });

//SUBMIT

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('form is submitted');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  console.log(email.value, password.value);
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
});

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    btn.textContent = 'Light';
  } else {
    btn.textContent = 'Dark';
  }
});

//Note create a drop down using js , dropdown should be open when i enter the mouse on it.
//Note create a modal using js.
//Note create a dark and light theme card ui.
//NOTE TABLE using js

//ASYNCRONOUS JAVASCRIPT :

//synchronouse code blocking code ;
// console.log('helllo');
// alert('this is alert')
// console.log('hi');

//async code ;

console.log('1');
//NOTE async code
setTimeout(() => {
  console.log('settimeout is running');
}, 4000); //callback , timer
console.log(window);

//NOTE async code
const intervalId = setInterval(() => {
  console.log('this will run after each 2 sec');
}, 2000);

// clearInterval(intervalId);

//NOTE EVENT LOOP , CALLBACK QUEUE , CALLSTACK => JS EXECUTION :
//NOTE ASYNC CODE PATTERN => CALLBACK , PROMISES , SETTIMEOUT , SETINTERVAL

//NOTE PROMISES => promises is a js object which acts like a placeholder for the completion result of async code ;

//PROMISE STATES => PENDING , FULFILLED AND REJECTED ;

//NOTE HOW TO CREATE A PROMISE :

//NOTE for creating a promise we call a Promise constructor function after that we are going to handle its states ;

const promise = new Promise((resolve, reject) => {
  let success;
  if (success) {
    resolve('data');
  } else {
    reject('not found');
  }
});

promise
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('this will run for both fulfilled and rejected'));

//NOTE function which return directly a promise we donot have to create it , and used for api call ;

//   fetch() => always return a promise you have to handle its states

const result = fetch('https://jsonplaceholder.typicode.com/todos');

result
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((el) => {
      const h1 = document.createElement('h1');
      h1.textContent = el.title;
      const h4 = document.createElement('h4');
      h4.textContent = el.completed;
      if (el.completed) {
        h4.style.backgroundColor = 'green';
      } else {
        h4.style.backgroundColor = 'red';
      }
      document.body.appendChild(h1);
      document.body.appendChild(h4);
    });
  });

//data fetching

fetch('https://randomuser.me/api/')
  .then((res) => res.json())
  .then((data) => console.log(data));

//handle the  states of the promise

