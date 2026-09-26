// variable = a container for stores a value
//             Behaves as if it  were  the value that it contains.

//1. declaration  let x;
//2. assignment  x = 10;

let x;
x = 120;

console.log(x);


// let score = 10;
// score = 7;
// or we can declare and assign in one line like, let score = 7;

// let nama = "Lam"; // nama is a variable that stores a string value "Lam"
// let umur = 19; // umur is a variable that stores a number value 19
// let negara = "Indonesia"; // negara is a variable that stores a string value "Indonesia"

//let
//let score = 7; // declare a variable named score and assign it the value 7
//score = 10; // reassign the value of score to 10 / change value of score to 10


// console.log(nama);
// console.log(umur);
// console.log(negara);

// let itu bisa diubah nilainya, sedangkan const tidak bisa diubah nilainya

const pi = 3.14; // declare a constant named pi and assign it the value 3.14
console.log(pi); // output: 3.14
// kalo kita coba ubah nilai pi, maka akan error


//1. Number
// let age = 19;
// let price = 10.99;
// let gpa = 3.5;
// console.log(`You are ${age} years old.`);
// console.log(`The price is $${price}.`);
// console.log(`Your GPA is ${gpa}.`);

// atau

//let apples = 5;
//let priceApples = 0.5;
// let total = apples * priceApples;
//console.log(`You have ${apples} apples and the price per apple is $${priceApples}.`);
//artinya adalah kita punya 5 apel dan harga per apel adalah 0.5 dolar


//2.String

// let firstName = "John";
// let favoriteFood = 'Pizza';
// let email = "john.doe@example.com";

// console.log(typeof firstName); //typeof operator returns the data type of a variable
// console.log(`hello ${firstName}`); //string interpolation better than concatenation
// console.log(`Your favorite food is ${favoriteFood}`);
// console.log(`Your email is ${email}`);

//atau 

//string is jus a piece of text, we can use single or double quotes to declare a string variable
//it can be a word, a sentence, empty string or even a paragraph

//let name = "taylor swift"
//let greeting = 'hello, how are you?'

//console.log(name); //output: taylor swift
//console.log(greeting); //output: hello, how are you?

//we can also combine strings using concatenation or string interpolation

//let message = greeting + "," + name
//console.log(message); //output: hello, how are you?,taylor swift


//3. Boolean
//boolean is a data type that can only have two values: true or false

// let online = true;
// let ofSale = false;
// let isStudent = true;

// console.log(typeof online);
// console.log(`Are you online? ${online}`);
// console.log(`is this car for sale? ${ofSale}`);
// console.log(`Are you a student? ${isStudent}`);

//exercise, example of variable declaration, assignment, and data types

let fullName = "Ahmad Darussalam";
let age = 19;
let isStudent = false;

document.getElementById("p1").textContent = `My name is ${fullName}`; // better than just fullName
document.getElementById("p2").textContent = `I'm ${age} years old`;
document.getElementById("p3").textContent = `are you a student? ${isStudent}`;


//undefined
//value is automatically assigned often the result of missing values.


//let result;
//console.log(result); //output: automatically set to undefined, because result is declared but not assigned a value yet

//null
// Value is manually assigned used to reset or clear a value  set by you. the developer.

//let result = null;
//console.log(result); //output: null, because result is manually assigned a value of null


// what we learned in this file is about variable declaration, assignment, and data types. We learned about let and const, and the difference between them. We also learned about the different data types in JavaScript, such as number, string, boolean, undefined, and null. We also learned about string interpolation and concatenation.
// variable are a continer we used for storing values 
// let is a variable that can be changed, while const is a variable that cannot be changed.
// Numbers, strings, booleans, undefined, and null are the different data types in JavaScript.

//next data types
