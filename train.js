/*
Bersenandung bersama array
🍌🍍🍐🍎🫐
*/

const arraySatu = ['🫐', '🍉', '🍎']
const arrayDua = ['😁', '😎', '🥰']

const mergeArray = arraySatu.concat(arrayDua) //artinya array 1 digabung dengan array 2

// sekarang kita akan coba mapping datanya, untuk memecah array yang ada didalam array 1 dan 2, itu kan udah terkombine, trus kita pecah dua array ini dengan cara beberapa hall

/*      
#cara 1
for(list in/of mergeArray) console.log(list)  | kalo mau urutan list pake 'of', kalo mau indexnya pake 'in'

#cara 2 
kalo pengen keduanya bisa 
mergeArray.map((value, index) => console.log(value, index)) // bisa dibalik balik mau index duluan atau value duluan bebas.


*/
