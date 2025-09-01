console.log('external js file')

//TODO -- WHAT IS JS ?
//NOTE -- JS IS HIGH LEVEL INTERPRETED LANGUAGE , DYNMAICALLY TPYED , SINGLE THREADED LANGUAGE ;

//TODO - VARIABLE AND VALUE ;
//TODO - KEYWORDs VAR , LET , CONST ;
// movieTitle =  'WAR 2' ; ❌
// console.log(movieTitle)

//NOTE LET 

//NOTE NAMING OF THE VARIABLES :

//NOTE CAMEL-CASE 
// firstname
//camelCase => firstName;
//camelCase => isjsfun;
//camelCase => isJsFun;

// let 123number = 12  ❌;
// let _private = 34;

//NOTE LET  //REASSIGN ✔️ AND REDECLARATION  ❌
let collegeName = 'TECHNO' ;
collegeName = 'JECRC';
console.log(collegeName) ;

// let collegeName = 'GIT'  ❌;

//NOTE CONST   REASSIGN  ❌  AND REDECLARATION  ❌

const PI = 3.14 ;
// const firstName ; ❌
// PI = 4 ; ❌ 
// console.log(PI) ❌
// const PI = 3.14'  ❌

//NOTE VAR   REASSIGN  ✔️  AND REDECLARATION  ✔️ ;
var  movieTitle = 'WAR' ;
// movieTitle = 'WAR2' ; ✔️
// var movieTitle = 'WAR3'; ✔️


//NOTE DATATYPES ;

//NOTE PRIMITIVE ;
//STRING  , NUMBER , BOOLEAN , NULL , UNDEFINED , SYMBOL , BIGINT ;

const firstName =  'TEST' ;

//NOTE TYPEOF operator used to check the datatype of the variable;

console.log(typeof firstName) 

const phoneNumber = 3424432 ;
console.log(typeof phoneNumber) ;

const isJsFun = true ;
console.log(typeof isJsFun) ;

//NOTE UNDEFINED ;
let product ;
console.log(product);
console.log(typeof product);

//NOTE Null
let company = null;
console.log(typeof company);

//TEMPLATE STRING , STRING INTERPOLATION ;

const name = 'TEST' ;
const age = 24 ;

console.log('My Name is' + ' ' + name) ;
console.log(`My name is ${name}             ${age}`)


//NOTE OPERATORS => Operators and operands

//NOTE AIRTHMATIC (- , + , % , * ,/ , **)
console.log(5  +  5);
console.log(5 - 5) ;
console.log( 5 * 5) ;
console.log(5%2) ;
console.log(4/2);
console.log(4**4);
//NOTE special case concating string with number gives string
console.log('4' + 4) ;
//NOTE substracting string from number gives number
console.log('4' - 4) ;
//NOTE 
console.log(+'4') ;


//NOTE ASSIGNMENT (= , += , -= , *= , /=)
let x = 5 ;
x += 5 ;
console.log(x) ;
// x = x + 5 ;

//NOTE COMPARISON (== , === , !== , !=  , > , < , >= , <= ) ;
    //NOTE LOOSE EQUALITY (==) value compare
  console.log(10 == '10') ;
    //NOTE STRICT EQUALITY (===) value and type;
    console.log(10 === '10')
    //NOTE LOOSE NOT EQUAL (!=) ;
    console.log(10 != '10') ;
    //NOTE STRICT 
    console.log(10 !== '10') ;
//NOTE LOGICAL (||  , && , !) ;

//NOTE UNARY (++ , -- , ! ) ;


