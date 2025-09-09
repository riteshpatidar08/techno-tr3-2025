let  firstName = 'test' ;
//variable shadowing
function greet(){
    let firstName = 'test1';
    console.log(firstName)
}
greet() ;


//NOTE WINDOW OBJECT :
// alert('hello')
var course = 'mern' //all the variables declared with the var keyword automatically becomes the part of the window object (we also call variable declared with var => global variables)
let product = 'phone'
console.log(window) //not a js prt it comes with browser

//NOTE THIS KEYWORD : 

//NOTE GLOBAL SCOPE 
console.log(this.course) //points to window object;

//NOTE IN THE FUNCTION
function test(){
    console.log(this) //points to  window object
}
test();

//NOTE IN THE OBJECT
//NOTE POINTS TO THE OBJECT ITSELF
const car = {
    brand : "Honda",
    color : "white",
    getDetails : ()=>{
        console.log(this.course)
    }
}
//donot use arrow function as a method , the arrow function donot have its own this keyword it uses its lexical scope this (or parent scope)

car.getDetails() ;


//NOTE HOISTING :
//NOTE lifting the function decalaration and variables to the top of the scope ;

//it will create a key value pair in the window object;
console.log(b);
var b ;

test2()
function test2(){
    console.log('test2 is running...')
}
// console.log(c) //tdz start from here
let c = 4; //tdz end here
// console.log(c)

//WINDOW , this keyword , hoisting 

//NOTE DOM
console.log(document)//root node : complete html file
console.log(document.body)

//NOTE DOM MANIPULATION (SELECT , UPDATE , REMOVE , ADD );

//NOTE SELECT
//NOTE 5 METHODS 

//NOTE document.getELementsByTagName() ;
//NOTE returns an htmlcollection it looks like an array but its originally not an array
const heading = document.getElementsByTagName('h1');
console.log(heading[0]);
console.log(heading[1]);
console.log(heading)
//convert this html collection in to an array
const newHeadingData = [...heading];
console.log(newHeadingData)


//NOTE SELECT METHOD _ 2 => document.getElementsByClassName;
//NOTE return htmlcollection
const para = document.getElementsByClassName('para');
console.log(para);

//NOTE getElementBYId 
const headingFirst = document.getElementById('heading');
console.log(headingFirst) ;

//NOTE querySelector ;
//NOTE Returns the first element which matched the selector you have passed in the method
const newPara = document.querySelector('.para')
console.log(newPara);

//NOTE querySelectorAll ;
//NOTE returns nodelist 
const newParaUsingQuerySelectAll = document.querySelectorAll('.para')
console.log(newParaUsingQuerySelectAll);
//we can directly loop the nodelist using forEach 
newParaUsingQuerySelectAll.forEach((el)=>{
    console.log(el)
})

//NOTE READING THE CONTENT AND UPDATE :
console.log(document.body.textContent)
console.log(document.body.innerText)
console.log(document.body.innerHTML)

const container = document.getElementById('container');
console.log(container)
console.log(container.innerText)
console.log(container.textContent)
console.log(container.innerHTML)

//NOTE changing the inner html of the div using innerHtml propertry , replace all the existing html
container.innerHTML = `<span>hello</span>`
// container.innerText = `<span>hello</span>`❌
//NOTE only use textContent and innerText to insert text specific data not html tags for html tags only use innerHTML

//NOTE NEXT UPDATING HREF IN ANCHOR TAG :
const anchorLink = document.getElementById('link');
//NOTE change href ;
console.dir(anchorLink)
anchorLink.href = 'https://www.blinkit.in'
anchorLink.innerText= 'Blinkit'

//NOTE change the src in the image next