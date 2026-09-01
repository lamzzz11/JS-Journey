document.title = "fikri gobles";
console.log(document.title);

const body = document.body;
body.append("hello world");

const h1 = document.createElement("h1");
h1.textContent = "<marquee>INI H1 haha</marquee>";
body.append(h1);

const namaSaya = document.createElement("p");
namaSaya.innerHTML = "<marquee>salam</marquee>";
body.append(namaSaya);

const namaKamu = document.createElement("b");
namaKamu.innerText = "<marquee>budiono siregar</marquee>";
body.append(namaKamu);

document.getElementById("testing").innerHTML = "<marquee>halo gais</marquee>";
body.append(testing);
