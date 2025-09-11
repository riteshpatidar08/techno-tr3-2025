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
