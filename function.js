/*
a little hole of function in javascript
*/
//return -> console.log()

// dibawah in clue soal nanti
function addName(firstName, lastName) {
  console.log(firstName, lastName);
}

//cara 1 | keyword new function
const sum1 = new Function("x", "y", "console.log(x+y)");

//cara 2 | standard function
function sum2(x, y) {
  if(x + y == 4) {
     console.log('wowwww')
  }
}

//cara 3 | paling sering di pake bang dea di industri | arrow function
const sum3 = (x, y) => {
  console.log(x + y);
};

sum1(1, 1);
sum2(2, 2);
sum3(3, 7);

//contoh doang
function randomize() {
     const randomNumber = ~~(Math.random() * 1000)
     if (randomNumber > 200) {
          console.log(' woww lebih dari 200')
     } else {
          console.log(randomNumber)
     }
}

randomize()


