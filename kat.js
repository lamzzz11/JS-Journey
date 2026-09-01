// budi belanja

// buat objek buah
const buah = {
    apel: 5000,
    jeruk: 8500,
    mangga: 7800,
    pisang: 6700 }

// buat objek belanja
const belanja = {
    apel: 2,
    jeruk: 3,
    mangga: 1,
    pisang: 5 }

// hitung total belanja
const totalBelanja = belanja.apel * buah.apel + belanja.jeruk * buah.jeruk + belanja.mangga * buah.mangga + belanja.pisang * buah.pisang

// tampilkan total belanja
console.log(totalBelanja)