{
  function bilangan(a, b) {
    return [a + b, a * b];
  }

  // menggunakan cara biasa
  let allBilangan = bilangan(5, 3);
  console.log(allBilangan);

  let penjumlahan = bilangan(5, 3)[0];
  console.log(penjumlahan);

  let perkalian = bilangan(5, 3)[1];
  console.log(perkalian);

  // menggunakan cara distructuring
  let [tambah, kali] = bilangan(5, 3);
  console.log(tambah);
  console.log(kali);
}

// distructuring function object
function kalkulasi(a, b) {
  return {
    jumlah: a + b,
    kali: a * b,
    bagi: a / b,
  };
}

let { jumlah, kali, bagi } = kalkulasi(5, 3);
console.log(jumlah);
console.log(kali);
console.log(bagi);

// distructuring function argument
let mhs = {
  names: "jauhar",
  age: "26",
  alamat: "depok",
  nilai: {
    uts: 80,
    uas: 90,
    uan: 95,
  },
};

function cetakMhs({ names, age, alamat, nilai: { uts, uas, uan } }) {
  return `Halo nama saya ${names}, usia saya ${age}, saya tinggal di ${alamat}, nilai mata kuliah saya: uts ${uts}, uas ${uas}, uan ${uan}`;
}

console.log(cetakMhs(mhs));
