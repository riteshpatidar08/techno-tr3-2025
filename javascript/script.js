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
console.log(typeof company)