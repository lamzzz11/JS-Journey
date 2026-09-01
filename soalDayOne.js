// tugas
// 1. bikin jumlah saldo akhir dari data konsumen
// 2. nentuin hari dari tanggal, bulan, dan tahun.

//tugas 1

const nama = "budi";
const saldoAwal = 40000;
let saldoTambahan = 15000;
let hutang = 10000;

let saldoAkhir = saldoAwal + saldoTambahan - hutang;

console.log(`Total saldo akhir budi: ${saldoAkhir}`);

//tugas 2

let tanggal = new Date(2026, 8, 1);
let angkaHari = tanggal.getDay();
const daftarHari = [
  "minggu",
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
];
let namaHari = daftarHari[angkaHari];

console.log(`hari ini adalah hari: ${namaHari}`);

// tugas 3 ( ngetes diri sendiri)

const daftarKonsumen = ["Budi", "Siti", "Joko"];
const saldoKonsumen = [50000, 75000, 25000];

let totalSaldo = 0;
totalSaldo += saldoKonsumen[0];
totalSaldo += saldoKonsumen[1];
totalSaldo += saldoKonsumen[2];

console.log(`Saldo ${daftarKonsumen[0]}: Rp ${saldoKonsumen[0]}`);
console.log(`Total seluruh saldo konsumen adalah Rp ${totalSaldo}`);

// tugas 4 ( dari ai)

let saldo1 = Number(prompt("masukan saldo konsumen 1:"));
let saldo2 = Number(prompt("masukan saldo konsumen 2:"));

const daftarSaldo = [saldo1, saldo2];
let total = daftarSaldo[0] + daftarSaldo[1];
alert(`Total saldo akhir adalah: Rp.${total}`);

// tugas 5 (penutup)

const namaSiswa = ["Budi", "Siti", "Joko"];
const nilaiSiswa = [85, 60, 75];

if (nilaiSiswa[1] >= 70) {
  console.log(`${namaSiswa[1]} lulus ujian dengan nilai${nilaiSiswa[1]}`);
} else {
  console.log(
    `${namaSiswa[1]} tidak lulus ujian dengan nilai ${nilaiSiswa[1]}`,
  );
}
