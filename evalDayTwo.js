//Document title
document.title = "Javascript nich"; // Tab browser bakal berubah nama

//Document Body
console.log(document.body); // Ngambil seluruh elemen body

//Create and Combine DOM
const paragraf = document.createElement("p");
paragraf.textContent = "ini isi teks halaman by P yeahh";
/** 
 Sebelum nampilin sesuatu ke layar via JS, kita perlu bikin elementnya dulu
 pakai document.createElement('namaTag') lalu nggabungin isinya pake
 ( .appendChild(), .innerHTML, atau .textContent).
 */

//Append DOM
document.body.append(paragraf); // Sekarang teksnya muncul di layar!

//Data Selector
document.getElementById("btn1"); // ngambil 1 element berdasarkan ID.
document.querySelector(".btn2"); // ngambil element pertama pake css selector.
document.querySelectorAll("button"); //ngambil banyak element sekaligus.

//Styling Selector
//Cara ngubah style/tampilan CSS suatu elemen langsung dari JavaScript pake properti .style.
//Analogi: Ngolesin cat warna baru ke Lego yang udah dipasang.
const btn = document.querySelector(".btn2");
btn.style.backgroundColor = "aqua";
btn.style.padding = "20px";
btn.style.margin = "12px";
btn.style.color = "white";

//Event Props & Event Trigger
//Event Props / Listener: Telinga JS yang nungguin/mendengar aksi dari user (misal: tombol diklik, mouse lewat).
//Event Trigger: Aksi pemicu dari user itu sendiri (seperti click, mouseover, mouseleave, keyup).
btn.addEventListener("click", function () {
  alert("Tombol diklik!");
});
// 'click' adalah triggernya, function di dalamnya adalah reaksi/props-nya.

//Mouse Event
//Penjelasan: Event khusus yang dipicu oleh pergerakan atau aksi mouse.
/*
    click: Klik kiri mouse.
    mouseover / mouseenter: Mouse baru masuk ke area elemen.
    mouseout / mouseleave: Mouse keluar dari area elemen.
*/

//Event Combination (1 & 2)
//Penjelasan: Menggabungkan beberapa event atau aksi secara berurutan pada satu atau banyak elemen.
/*
Contoh pada kode lu:

Event 1 (onclick): Bikin tag <p> baru dan nampilin nama.
Event 2 (onmouseleave / btnOut2): Begitu mouse keluar tombol, ngubah warna nama yang baru dibuat tadi.
*/

// Yang udah di pelajari skrg dari diatas dan Day 2 adalah sebagai berikut:
// 1. Styling elemen tombol
/**
  btn2.style.background = "aqua";
btn2.style.padding = "20px";
btn2.style.margin = "10px";
 */

// 2. Fungsi waktu tombol diklik
function clickBtn2() {
  const namaGua = document.createElement("p"); // Bikin elemen <p>
  namaGua.innerHTML = '<b id="dah"> Ahmad Darussalam</b>'; // Isi teks + kasih ID "dah" pada <b>
  body.append(namaGua); // Tempel ke body
}

// 3. Fungsi waktu mouse keluar dari tombol
function btnOut2() {
  const namaGua = document.getElementById("dah"); // Cari elemen ber-ID "dah"
  if (namaGua) {
    namaGua.style.background = "yellow"; // Ubah warna background teksnya
  }
}
/*
Catatan Penting: Di fungsi btnOut2(), kalau tombol disorot mouse sebelum diklik, 
document.getElementById('dah') bakal bernilai null (karena elemennya belum dibuat via clickBtn2).
Makanya bagus kalau dikasih proteksi if (namaGua).
*/

/* DAFTAR TUGASS:
1. Bikin 1 elemen tombol baru pake JavaScript (document.createElement('button')).

2. Kasih teks tombolnya: "Klik Gua".

3. Posisikan/tempel tombol tersebut ke dalam document.body.

4. Tambahkan event listener saat tombol diklik (click):

5. Ubah document.title jadi "Tombol Udah Diklik!".

6. Bikin elemen <h1> baru yang isinya nama kamu, lalu append ke body.

7. Tambahkan event mouseleave pada tombol tersebut:

8. Ubah warna background tombol jadi warna favorit lu (misal: 'purple' atau 'orange').
*/

//Jawaban tugas diatas
/* kodenya gw pakein commnet biar tau ini butuh perbaikan.
const btn3 = document.createElement("button");
btn3.textContent = "Klik Gua";
document.body.append(btn3);

btn3.addEventListener("click", function () {
  document.title = "Tombol udah Diklik!";
  const namaGw = document.createElement("h1");
  namaGw.innerText = "Ahmad Darussalam";
  document.body.append(namaGw);
  btn3.addEventListener("mouseleave", () => {
    btn3.style.backgroundColor = "pink";
  });
});
 */

// Perbaikan dan saran nya sih begini

// 1. Buat dan pasang tombol
const btn3 = document.createElement("button");
btn3.textContent = "Klik Gua";
document.body.append(btn3);

// 2. Event saat Klik (Tugas No 4)
btn3.addEventListener("click", function () {
  document.title = "Tombol udah Diklik!";
  
  const namaGw = document.createElement("h1");
  namaGw.innerText = "Ahmad Darussalam";
  document.body.append(namaGw);
});

// 3. Event saat Mouse Keluar (Tugas No 5) - Dipisah di luar
btn3.addEventListener("mouseleave", function () {
  btn3.style.backgroundColor = "pink";
});