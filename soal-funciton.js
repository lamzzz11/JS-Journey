// TUGAS BESAR
/*
1. membuat perhitungan matematika
- menghitung luas lingkaran
- luas segitiga
- luas persegi panjang
- luas jajar genjang 

2. menghitung total gaji yang di dapat dalam satu bulan dengan input minimal : 
- nama karyawan
- gaji perhari
- jumlah hari masuk kerja 

**/

// tugas 1

//luas lingkaran
function hitungLuasLingkaran(jariJari) {
  return (22 / 7) * jariJari ** 2;
}
let r = 7
console.log("Luas lingkaran: " + hitungLuasLingkaran(r));

//luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
  return 0.5 * alas * tinggi;
}

let alas = 8;
let tinggi = 6;
console.log("luas segitiga:", hitungLuasSegitiga(alas, tinggi));

//luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

let p = 10;
let l = 4;
console.log("Luas Persegi Panjang: " + hitungLuasPersegiPanjang(p, l));

//luas jajar genjang
function hitungLuasJajarGenjang(alas, tinggi) {
  return alas * tinggi;
}

let alas2 = 10;
let tinggi2 = 4;
console.log("Luas Jajar Genjang: " + hitungLuasJajarGenjang(alas2, tinggi2));

// tugas 2
const hitungGaji = (namaKaryawan, gajiHarian, jumlahHari) => {
  const totalGaji = gajiHarian * jumlahHari;
  return {
    nama: namaKaryawan,
    totalGaji: totalGaji,
  };
};
const dataBudi = hitungGaji("Budi", 60000, 30);
console.log(`nama Karyawan: ${dataBudi.nama}`);
console.log(`total gaji: Rp ${dataBudi.totalGaji.toLocaleString("id-ID")}`);
