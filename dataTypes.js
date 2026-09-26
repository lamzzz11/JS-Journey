//Js nugget : data types
// There are 7 data types in javascript, they are: string, number, boolean, null, undefined, object, and symbol

//1. Boolean
let data = true; //boolean is a data type that can only have two values: true or false
if(data) {
    console.log("data is true");
} else {
    console.log("data is false");
}

//2. null
//is an asigment value thats represents no value or no object, it is an intentional absence of any object value
let data2 = null;
console.log(data2); //output: null

//undefined
//value is automatically assigned often the result of missing values.
let result;
console.log(result); //output: automatically set to undefined, because result is declared but not assigned a value yet
// or
console.log(result + 2); //output: NaN (not a number) because result is undefined, and undefined + 2 is not a number

//number
let num = 3.6
let ber = 6.4
console.log(num + ber); //output: 10, because num and ber are both numbers, and 3.6 + 6.4 = 10

//String, "lam"
let nama = "lam";
console.log(nama); //output: lam, because nama is a string, and "lam" is a string
//or
console.log("hello " + nama); 
//or
console.log(`halo ${nama}`); // ga ribet

//symbol es6
let sym1 = Symbol("foo");
let sym2 = Symbol("foo");
console.log(sym1 === sym2);
console.log(String(sym1))
//PR blom paham

//Object

let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar); //output: { make: 'Ford', model: 'Mustang', year: 1969 }
