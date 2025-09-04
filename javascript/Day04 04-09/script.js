//NOTE -  ARRAY METHOD ____ BUILTIN ;
//POINTS TO REMEBER : what method will return and which method modifies the original array .

//NOTE 1 PUSH (ADD ELEMENT IN THE LAST) ;

const colors = ['red', 'blue', 'green'];
const pushOutput = colors.push('white');
console.log(pushOutput); //return new array length ;

//NOTE POP => last remove , Shift => start remove and Unshift => start add

//NOTE PUSH , POP , SHIFT , UNSHIFT MUTATE ORIGINAL ARRAY ;

//NOTE INCLUDES
console.log(colors.includes('white'));

//NOTE  Slice(startIndex , endIndex) (to extract the part of an array from startIndex to endIndex) ;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slicedOutput = numbers.slice(2, 6);
console.log(numbers.slice(1));
console.log(numbers.slice(-1));
console.log(slicedOutput); //always returns a new array
console.log(numbers); //donot modify the original array

//NOTE SPLICE (index , deletecount , newelement , newelement...);

//NOTE ALWAYS MODIFIES THE ORIGINAL ARRAY :
const evenNumber = [2, 4, 6, 8, 10, 12];
//note use case remove 10 ;
const splicedOutput = evenNumber.splice(4, 0, 16, 18);
console.log('return by splice', splicedOutput);
console.log('original array', evenNumber);

// arr = [2,3,4,5,75,65,4,4,5,6,7,54,4,4];
// remove all the 4's from  the array using splice

//NOTE JOIN(seprator) CONVERT ARRAY TO STRING :
const intro = ['my', 'name', 'is', 'test'];

console.log(intro.join('-'));

//NOTE CONCAT concat two array's
const frontend = ['HTML', 'CSS', 'JS'];
const backend = ['node', 'express'];
const output = frontend.concat(backend);
console.log(output);
console.log(frontend, backend);

//NOTE indexOf return the index of element if exist if not return -1  ;
console.log(frontend.indexOf('CS'));

//NOTE FLAT NESTED ARRAY FLATTEN ;
const nestedArry = [1, 2, [3, 4, [6, 7], 8], 10];
console.log(nestedArry.flat(2));

//higher order fn and callback
// function sayHi(){
//     console.log('hi')
// }

// function greet(callback){
//     console.log('callback fn sayHI', callback)
// callback()
// }
// greet(sayHi)

const greet = (callback, num) => {
  callback();
};
greet(() => {
  console.log('hi');
}, 5);

//higher order function takes other functions as arugment or return function
//callback fn => fn which we pass as a argument to another function and it is called by higher order fn

//NOTE HIGHER ORDER METHODS (ACCPETS A CALLBACK FN);

//NOTE FOREACH :
const odd = [1, 3, 5, 7, 9];
//always returns undefined ;
const forEachOutput = odd.forEach((el) => {
  console.log(el);
});

//NOTE MAP***** (create a new array which is the result  some transformation operation you have applied in the callback function)
const nm = [2, 4, 6, 8, 10];
const mappedOutput = nm.map((el) => {
  return el * 2;
});
console.log(mappedOutput);
//2 multiply => el * 2

//NOTE FILTER (return a new aray of filtered items on the basis of the condition you have applied in the callback function)
const product = [
  { name: 'FRIDGE', category: 'electornics' },
  { name: 'iphone', category: 'mobile' },
  { name: 's25 ultra', category: 'mobile' },
];
const filterOutput = product.filter(el=> el.category === 'mobile')
console.log(filterOutput)

//NOTE FIND RETURN ONLY SINGLE ITEM DONOT RETURN ANY ARRAY 
const findOutput = product.find(el => el.category === 'mobile')
console.log(findOutput)//return only the first matched item 

//NOTE FINDINDEX (return the index of the first element which satifies the condition in the callback function) ;
const oddNumberss =  [3,5,7,9];

const findIndexOutput = oddNumberss.findIndex((el)=>{
return el > 5 ;
})

console.log(findIndexOutput)

//NOTE REDUCE (REDUCE A ARRAY INTO SINGLE VALUE) ;
const arrNUm = [1,2,3,4,5,6];

const reduceOutput = arrNUm.reduce((acc,el)=>{
    console.log(acc , 'iterating el' , el)
    return acc + el

},0)
 console.log(reduceOutput)