//NOTE - create a nested switch case on the basis of country state and city
// country => state => city ;

//NOTE LOOPS ;
// for , do while , while for of  for in

//FOR LOOP ;

// for(initialization ; condition ; increment/decrement );

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//traversal of an array ;
const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//NOTE FIND THE SUM OF elements in an array  ;
//NOTE find the maximum number in an array ;
//NOTE create a function to count an element occurance in an array countOccurance(arr,target);
//NOTE create a function to print the table for given number till 10 ;
//NOTE create a loop to fill the element in an array till 20;
//NOTE Create a new REVERSE array USING FOR LOOP ;
//NOTE find the index of the target element findIndex(arr, target) return -1 if not found;
//NOTE Seggregate even and odd number from an array ; create separate arrays for both even and odd;
//NOTE  arr.push(i)

//NESTED LOOP

// for(let i = 1 ; i < 5  ; i++){
//     for(let j = 1 ; j < 5 ; j++){
//         console.log(`${i} -- ${j}`)
//     }

// }
// function printTable(count , till) {
//     for(let i = 1 ; i <= count ; i++){
//         for(let j = 1 ; i <= till ; j++){

//             console.log(`${i} X ${j} = ${i * j}`)
//         }
//     }
// }

// printTable(10,20)

// 1,2,3,4,5,6,7,8,9,10 => 20

//NOTE create a right traingle star pattern ;
//NOTE create a inverted right traingle ;
//NOTE create a square star pattern ;
//NOTE pyramid and inverted pyamarid and diamond pattern pyramid
for (let i = 1; i <= 5; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}

//NOTE WHILE AND DO WHILE ;

let i = 0;
const newArr = [1, 2, 3, 4, 5];
while (i < newArr.length) {
  console.log(newArr[i]);
  i++;
}

let j = 1;
do {
  console.log(`j : ${j}`);
  j++;
} while (j < 10);

//NOTE FOR OF AND FOR OF;
const products = ['mobile', 'tv', 'ac'];
for (let product of products) {
  console.log(product);
}
for (let i in products) {
  console.log(i);
}

const car = {
  name: 'test',
  color: 'blue',
};
//NOTE LOOPING AN OBJECT IN JS  *****
for (let key in car) {
//   console.log(key);
  console.log(`${key} : ${car[key]}`);
}

// for of doesnot work on object
// for(let value of car){
//     console.log(value)
// }

//NOTE -  ARRAY METHOD ____ BUILTIN ;
//POINTS TO REMEBER : what method will return and which method modifies the original array .

//NOTE 1 PUSH (ADD ELEMENT IN THE LAST) ;

const colors = ['red','blue','green'];
const pushOutput = colors.push('white');
console.log(pushOutput) ;//return new array length ;

//NOTE POP => last remove , Shift => start remove and Unshift => start add

//NOTE PUSH , POP , SHIFT , UNSHIFT MUTATE ORIGINAL ARRAY ;

//NOTE INCLUDES 
console.log(colors.includes('white')) ;

//NOTE  Slice(startIndex , endIndex);
const slicedOutput = colors.slice(1,2);
  
