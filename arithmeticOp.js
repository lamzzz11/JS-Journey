//arithmetic operators = operands (values, variables, etc.) that are manipulated by operators (symbols) to produce a new value
// operators (+, -, *, /) are used to perform arithmetic operations on operands
// example: 5 + 2 = 7, where 5 and 2 are operands, + is the operator, and 7 is the result
// ex. 11 = x + 5

//arithmetic operators in javascript:
let students = 30
//anggep ada murid baru
//students = students + 1; // output: 31
// atau
//students = students - 1; // output: 29
// atau
//students = students * 2; // output: 60
// atau 
//students = students / 2; // output: 15
//atau 
//students = students ** 2; // output: 900 / karena 30 pangkat 2 = 900 (eksponen)
//atau
//studends = students % 2; // output: 0 / karena 30 dibagi 2 = 15 sisa 0 (modulus)
//let extraStudents = students % 4; // output: 2 / karena 30 dibagi 4 = 7 sisa 2 (modulus)

//augmented assignment operators = operator yang digunakan untuk mempersingkat penulisan operasi aritmatika
//================================================================================
//students += 1; // output: 31 / students = students + 1 (penyederhanaan)
//students -= 1; // output: 29 / students = students - 1 
//students *= 2; // output: 60 / students = students * 2 
//students /= 2; // output: 15 / students = students / 2 
//students **= 2; // output: 900 / students = students ** 2 
//students %= 2; // output: 0 / students = students % 2 
//shortcut

//increment and decrement operators = operator yang digunakan untuk menambah atau mengurangi nilai variabel sebanyak 1
//================================================================================
//students++; // output: 31 / students = students + 1 (penyederhanaan)
//students--; // output: 29 / students = students - 1 

console.log(students);


//operator precedence = urutan prioritas operator dalam mengeksekusi operasi aritmatika
/*
operator precendence (prioritas operator) dalam javascript:
1. () parentheses
2. ** (eksponen)
3. *, /, % multiplication, division, modulus
4. +, - addition, subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2; //output 23 karena 4 pangkat 2 = 16, 2 * 3 = 6, 1 + 6 + 16 = 23
console.log(result);
// or 
let result2 = 12 % 5 + 8 / 2; // output 6 karena 12 dibagi 5 = 2 sisa 2, 8 dibagi 2 = 4, 2 + 4 = 6
console.log(result2);
// or
let result3 = 6 / 2 ** (2 + 5); // output 0.046875 karena 2 + 5 = 7, 2 pangkat 7 = 128, 6 dibagi 128 = 0.046875
console.log(result3); 
