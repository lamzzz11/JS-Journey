document.title = "fikri gobllllok";
const body = document.body;

// styling
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2"); //querySelector lebih universal (seperti css pemanggilannya)

const defaultText = "Click me 1";
btn1.textContent = defaultText;

btn1.style.border = "none";
btn1.style.cursor = "pointer";
btn1.style.padding = "9px";
btn1.style.color = "tomato";

function clickButton() {
  btn1.style.background = "aqua";
  const newText = document.createElement("p");
  newText.textContent = "halo bung apa kabarr";
  body.append(newText);
}

function ubahText() {
  btn1.textContent = "bakekok";
}

function oriText() {
  btn1.textContent = defaultText;
}

// tugas kecil, bikin di tombol kedua..
// ketika tombol di klik keluar nama kita, trus ketika mouse pointer keluar dari area button 2, warna nama kita bakal berubah

btn2.style.background = "aqua";
btn2.style.padding = " 20px";
btn2.style.margin = "10px";

function clickBtn2() {
  const namaGua = document.createElement("p");
  namaGua.innerHTML = '<b id="dah"> Ahmad Darussalam</b>';
  body.append(namaGua);
}

function btnOut2() {
  const namaGua = document.getElementById("dah");
  namaGua.style.background = "yellow";
}

// let tgl = new Date("2021-09-01");

// let hari = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];

// let hariapa = tgl.getDay();

// console.log(hari[hariapa]);
