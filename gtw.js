const datas = [
    {name: 'lam',
     stack: 'c#',
     age: 19
    },
    {name: 'risa',
     stack: 'py',
     age: 16
    },
    {name: 'amanda',
     stack: 'react',
     age: 24
    },
    {name: 'keyn',
     stack: 'js',
     age: 21
    },
]

datas.map((values, index) =>  {
    console.log(values.name, values.stack) // kalo semuanya tinggal (values), kalo mau milih ya kek tadi misal (values.name)/ munculin nama doang, kecuali yang lainnya dipanggil.
})

//contoh urutin sesuai usia // sort buat urutin

datas.sort((a,b) => b.age - a.age ).map(values => console.log(values)) //kalo di cek, nanti urutannya dari yang terbesar ke terkecil, kalo mau dibalikin tinggal ubah a dan b nya aja

//filter buat ngefilter

datas.filter((x) => x.age > 20).map((values) => console.log(values))

// bisa juga digabung misal, di filter dan di urutin

datas.sort((a, b) => a.age - b.age).filter((x) => x.age > 20).map((values) => console.log(values)) // ini kalo digabung.


// notes : biasanya kalo lamar kerja tu gaboleh dipakein map, filter, sort. kalian mesti bikin kek algoritma sendiri untuk memecah masalah tersebut tanpa menggunaakan sort, filter, dsm. yang berkaitan sama algoritma biasanya