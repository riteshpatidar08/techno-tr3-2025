//ES6 classes ;

//1way class declaration

//NOTE first you have to use a prebuilt constructor function is going to be called automatically to createa a new instance of the class when you called it using new keyword
class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  intro1() {
    console.log(this.name);
  }
  accessAge() {
    console.log(this.#age);
  }
}
//NOTE es6 classes sets all the method directly on the [[PROTOTYPE]]
//NOTE  property of the constructor function from which the instances created ,
const rahul = new Person('rahul', 24);
const ram = new Person('ram');
// console.log(rahul.#age);
console.log(ram);

//#private properties and methods :

class Parent {
  constructor(name) {
    this.name = name;
  }
  accessName() {
    return this.name;
  }
}

class Child extends Parent {
  //super keyword used to call the parent constructor function
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  accessName() {
    console.log('this is child method');
  }
}

const newChildInstance = new Child('test', 24);
console.log(newChildInstance);
console.log(newChildInstance.accessName());

//NOTE create a movies class with methods like  add movie delete and search for particualr movies

class Movies {
  #movies = []; //private field
  addmovie(name) {
    this.#movies.push(name);
  }
  getmovie() {
    return this.#movies;
  }
  deleteMovie(id) {
    const index = this.#movies.findIndex((movie) => movie.id === id);
    this.#movies.splice(index, 1);
    console.log(`movie with ${id} deleted successfully`);
  }
}

const movies = new Movies();
console.log(movies);
console.log(movies.addmovie({ id: 1, name: 'batman', year: 2008 }));
console.log(movies.deleteMovie(1));
console.log(movies.getmovie());

//NOTE GETTERS AND SETTERS :

//getters => read operation
//setter => write operation

//NOTE both are defined like method but we call both as a property;

class RandomUser {
  constructor(name) {
    this.name = name;
  }
  //defining static method in the class
  static runOnClass() {
    console.log('hello');
  }
  get getname() {
    return this.name.split(' ').reverse().join(' ');
  }
  set setname(name) {
    if (name.length > 5) {
      this.name = name;
    } else {
      console.log('please enter name longer that 5 character');
    }
  }
}

const test = new RandomUser('TEST KUMAR');
console.log(test);
test.setname = 'KUMAR TEST';
console.log(test.getname); //NOTE to access the exsting property call as a property getter method.

//NOTE static method calling
console.log(RandomUser.runOnClass());

//NOTE INSTANCE METHOD , STATIC METHOD :

//NOTE FUNCTION METHODS CALL , APPLY , BIND
const details = {
  firstname: 'RAHUL',
};

function demo(id) {
  console.log(`this is the demo account for ${this.firstname} with ${id} id`);
}
// demo.call(details,1) //set this keyword on any specific object;
// demo.apply(details, [1])
// const output = demo.bind(details, [1]);
// output()

//NOTE SCOPE CHAINING
function outer() {
  const a = 5;
  function inner() {
    function innernested() {
      console.log(a);
    }
    innernested();
  }
  inner();
}
outer()
//NOTE CLOSURES

function newdemo(){
    const a = 5 ;
    return function(){
        console.log(a)
    }
}
const fn = newdemo()
fn()
//NOTE PARSEINT AND PARSEFLOAT (REMAINING NUMBER METHODS)
console.log(parseInt('234jef'))
console.log(parseFloat('3.23'))


//NOTE (IIFE)IMMEDIATELY INVOcKED FUNCTION EXPRESSION
(function(){
  console.log('this is iife')
})() ;




//NOTE  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned