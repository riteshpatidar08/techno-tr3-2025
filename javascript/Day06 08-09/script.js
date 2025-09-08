//NOTE CHANGING KEY NAMES IN THE OBJECT DESTRUCTURING :

const detail = {
    firstName  : "test",
    age : 34 ,
    address : {
        city : "jaipur",
        pincode : 302033 
    }
}
// const {age , firstName} = detail ;
//default values ;
// const {age : agee , firstName : fname , city ='jaipur '} = detail

// console.log(agee , fname, city)

//NOTE NESTED OBJECT :
const {address : {city}} = detail ;
console.log(city)
const numbers = {
    a : 5 ,
    b  : 8 ,
}
//function paramter destructuring if argument is an object;
const sum = ({a,b}) => a + b ;
console.log(sum(numbers));

//NOTE function destructuring in the case the function argument is an array 
const getRoles = ([role1,role2]) => console.log(role1, role2) ;
getRoles(['admin','user'])