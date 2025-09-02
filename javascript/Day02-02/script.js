//NOTE FUNCTIONS IN JS;

//NOTE FUNCTION DECLARATION ;
//NOTE we can call function declaration before declaring the function.
console.log(printName('ritesh'));

function printName(name) {
  return `my name is ${name}`;
}
// const intro = printName('ritesh') ;
// console.log(intro)

//NOTE FUNCTION EXPRESSION ;

// console.log(sum());❌
const sum = function (a, b) {
  return a + b;
};
//NOTE In function expression function treated as a value . we can save the function in a variable.

//NOTE ARROW FUNCTION ;

const subs = (a, b) => {
  return b - a;
};
//NOTE for eg single paramter;
const greet = (name) => `my name is ${name}`;
console.log(greet('ritesh'));

//NOTE if function body have multiple statement; compulsory to use curly braces and return statement ;
const multiply = (a, b) => {
  const c = 5;
  return b - a;
};

//NOTE CONDITIONAL STATEMENT ;
//NOTE TRUTHY AND FALSY VALUES :
//falsy => '' , 0  , undefined , null ,NaN , -0
let user = null;
if (1) {
  console.log('hello');
}

//write a arrow function to check if user exist and loggedin , if user exist and loggedin console.log('show dashboard') if not console.log('please log in')

//NOTE - PROMPT < ALERT < CONFIRM

// const username = prompt('Enter username');
// const isLoggedIn = confirm('is you logged in?');
// console.log(isLoggedIn);
// if (username === 'ritesh@123') {
//   alert('login success');
// }

//NOTE takes a prompt from the user , if role is admin call a allowAllaccess fn , if role is editor call allowediting fn , if role is user call readonly fn.

//NOTE create a nested if else if user is active and have permission = update_student_records allow to update the records;
const isActive = true;
const permission = 'updated_student_records';
if (isActive) {
  if (permission === 'update_student_records') {
    console.log('permission granted');
  } else {
    console.log('you donot have permission to update the student records');
  }
} else {
  console.log('user is not active');
}

//NOTE Ternary operator ? :

//NOTE conditon ? if true this will run : if not this will run
//NOTE isActive ? console.log('user is active) : console.log('user is not active')

//NOTE isActive  ? permission === 'update' ? console.log("permission granted")  : console.log('donot have permission)  : console.log('user is not active) ;

//NOTE user ? console.log('show user') : console.log('show spinner') ;

//NOTE CONDITIONAL TOPIC SWITCH CASE :

// switch(expression){
// case 1st
// code
//break ;
//case 2nd '
// code
// break ;
// }
const action = 'logout';
switch (action) {
  case 'login':
    console.log('user is logging in');
    break;
  case 'logout':
    console.log('user is sigining out');
    break;
  case 'buying':
    console.log('user is buying something');
    break;
  default:
    console.log('enter correct action');
}

//create a switch case to check the command type if cmd is ls then console.log('show all folder') if case is mkdir console.log('creating directory') if case is cd console.log('change directory);
// if case is touch console.log(creating file)

// switch(expession){

//     case expression1:
//     case expression2:
//         codeblock
//         break ;

//     case ..
// }

const emoji = 'happy';

switch (emoji) {
  case 'laugh':
  case 'happy':
    console.log('laugh and happy ');
}


//NOTE => NON PRIMTIVE (ARRAY , Object);
const test = () => 'test fn'
const jsArry = ['phone' , 0 , null , undefined , true, test];

console.log(jsArry[0]);
console.log(jsArry[jsArry.length - 1]());
//array length 
console.log(jsArry.length);
console.log(typeof jsArry); //type of array is object

//update a particular index ;
jsArry[1] = 1 ;
console.log(jsArry) ;

//NON PRIMITIVE DATA OBJECT ***** 

const details = {
    firstName : 'TEST' ,
    age : 20,
    friends : ['test1','test2'],
    address : {
        pinCode : 302018 ,
        city : 'Jaipur'
    }
};

//access the value of individual properties
// dot notation , bracket notation
//NOTE DOT NOTATION ;
console.log(details.firstName);
console.log(details.age);
// console.log(details.friends.length)
console.log(details.friends[details.friends.length - 1])

details.firstName = 'RITESH' ;
console.log(details);

//NOTE BRACKET NOTATION :
const a = 'age'
console.log(details[a]) ;
// console.log(details.courses)

//note create a function to check if a property exists on the object or not .
// checkPropertyexist(propertyName , object);

// // fucntion(){
// obj[key] === undefined ? console.log('not exist') : 
// // }