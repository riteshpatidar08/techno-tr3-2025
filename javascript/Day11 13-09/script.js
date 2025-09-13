//ES6 classes ;

//1way class declaration

//first you have to use a prebuilt constructor function is going to be called automatically to createa a new instance of the class when you called it using new keyword
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
//es6 classes sets all the method directly on the [[PROTOTYPE]]
// property of the constructor function from which the instances created ,
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
  }
}

const movies = new Movies();
console.log(movies);
console.log(movies.addmovie({ id: 1, name: 'batman', year: 2008 }));
console.log(movies.deleteMovie(1));
console.log(movies.getmovie());


//GETTERS AND SETTERS : 

//getters => read operation
//setter => write operation

//both are defined like method but we call both as a property;

class RandomUser{
    constructor(name){
        this.name = name ;
    }
    get getname(){
        return this.name.split(' ').reverse().join(' ')
    }
}

const test = new RandomUser('TEST KUMAR');
console.log(test)
console.log(test.getname) //to access the exsting property call as a property getter method