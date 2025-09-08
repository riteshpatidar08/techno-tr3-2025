//NOTE REVERSE METHOD :

const arr = [1, 2, 3, 4, 5];
// console.log(arr.toReversed());
console.log(arr.reverse());
console.log(arr);

//NOTE SOME :
const evenNumber = [2, 4, 6, 8];
const someOutput = evenNumber.some((ele) => {
  return ele > 2;
});
console.log(someOutput);

//EVERY NOTE

//sort ;
const randomArray = [1, 2, 3, 40, 5, 6];
console.log(
  randomArray.sort((a, b) => {
    return a - b;
  })
);
// if the result of a-b is greater than zero b will come first
//if the reuslt of a-b is less than zero a will come

//NOTE STRING METHODS  :

const language = 'javascript';
console.log(language[0]);
language[0] = 'z';
// console.log(language)
//length of a string
console.log(language.length);

//NOTE charAt ;
console.log(language.charAt(7));

//NOTE toUpperCase and toLowerCase
console.log(language.toUpperCase());
console.log(language.toLowerCase());

//Note slice to extract the part of the string ;
console.log(language.slice(1, 6));

//NOTE SPLIT : TO CONVERT STRING INTO Arry ;
const str = 'my name is test';
console.log(str.split(' '));

//TODO reverse each word of the given string => 'hello this is a string'

//TODO Capatilize first letter of the given string => 'js is a single threaded'

//NOTE INCLUDES :
console.log(language.includes('j'));

//NOTE indexOf ;
console.log(language.indexOf('j'));

//NOTE lastIndexOf ;
console.log(language.lastIndexOf('a', 4));
// javascript

//NOTE startWith (check if the string is starts with some given pattern) ;

const course = 'MERNSTACK';
const token = 'Bearer RI3243DLKAFDXLKANDWWERERWSDSF';
console.log(token.startsWith('Bearer'));
//NOTE endswith('check if the string is end with some given pattern')
console.log(course.endsWith('ACK'));

//NOTE trimStart , trimEnd , trim (remove the whitespaces from the string end and start) ;

const stack = '       MERNSTACK     ';
console.log(stack.trimEnd());
console.log(stack.trimStart());

//NOTE replace and replace all (replace the search element with the element you have provide);

const frontend = 'REACTJS ARE ARE A LIBRARY';

console.log(frontend.replace('ARE', 'IS'));

//NOTE PADSTART AND PADEND

const ccNUmber = '1234';
console.log(ccNUmber.padStart(16, '*'));

//NOTE create a fn which takes cc Number then hide the first 12 digits only show last four.

//NOTE SEARCH , MATCH , MATCH-ALL(going to implement with the regex topic) ;

const newStr = 'hello , this is js';
console.log(newStr.search('hello'));

//NOTE DESTRUCTURING***** (IMP) ;

//NOTE ARRAY AND OBJECT :

const numbers = [1, 2, 3, 4, 5];
const a = numbers[0];
const b = numbers[1];
console.log(a, b);
const userInfo = ['test@123', 'test123'];
//destructuring
//ARRAY DESTRUCTURING WORKS ON THE BASIS OF INDEX*****
const [userName, password] = userInfo;
console.log(userName, password);

const evenNumbers = [2, 4, 6, 8];

const [x, , y] = evenNumbers;
console.log(x, y);

//NOTE NESTED ARRAY DESTRUCTURING
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const [k, m, [n, o, [p, q]]] = nestedArray;
console.log(k, m, n, o, p, q);

//NOTE DEFAULT VALUES :
//default values only works when the element is not present at the index from where you are destruturing .
const coursess = ['JS', 'REACT', 'DJANGO'];
const [languages, library, framework = 'angular'] = coursess;
console.log(framework);

//OBJECT DESTRUCTURING :
//NOTE  object destruturing happens on the basis of key name sequence doesnot matter in the object destruturing as compare to array
const gadget = {
  name: 'PS5',
  price: '400000',
};
// const {name , price} = gadget ;
const { price, name } = gadget;
console.log(price, name);

const user = [
  { name: 'test', email: 'test@gmail.com', role: ['admin', 'user'] },
  { name: 'test2', email: 'test2@gmail.com', role: ['superadmin', 'admin'] },
];

//access email and role(individual role into separate variable)

user.forEach((el) => {
  const { email, role } = el;
  console.log(email);
  //   console.log(role);
  const [firstRole, secondRole] = role;
  console.log(firstRole, secondRole);
});



//NOTE  Count the number of vowels in a string.
//NOTE   Write a function to check if a string is a palindrome.
//NOTE   From a string like "1,2,3,4", return the sum of numbers. 
//NOTE   Remove falsy values (false, 0, "", null, undefined, NaN) from an array.  
//NOTE remove duplicates from an array [1,2,2,3,4,5];


//NOTE SOLVE QUESTIONS RELATED TO TYPE COERSION
console.log([] + []);
console.log({} + {}); 
console.log([] + {} ) ;
console.log({} + []);
console.log(undefined + undefined) ;
console.log(0 === false) ;
console.log('5' * 2);
console.log('4'/ 2);

//NOTE POINT TO REMEMBER WHEN WE USE + VALUES CONVERT TO STRING [] => '' , {} => [object Object];
//NOTE  convert a snake_case string to camelCase
//NOTE we can accept index by passing second paramter.
const arrr = [1,2,3,4];
arrr.map((el,index)=>{
    console.log(el,index)
})