// Promise
// Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yg akan datang
// janji (terpenuhi / ingkar )
// state (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

let ditepati = false;
const janji = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("janji telah ditepati");
  } else {
    reject("ingkar janji");
  }
});

janji
  .then((result) => {
    console.log("Ok:" + result);
  })
  .catch((result) => {
    console.log("Not Ok: " + result);
  });

// contoh 2
let ditepati2 = false;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati2) {
    setTimeout(() => {
      resolve("janji ditepati setelah 2 detik");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("inkar janji setelah 2 detik");
    }, 2000);
  }
});

console.log("mulai");
// console.log(
//   janji2.then(() => {
//     console.log(janji2);
//   })
// );
janji2
  .finally(() => {
    console.log("Selesai Menunggu");
  })
  .then((result) => {
    console.log("Ok: " + result);
  })
  .catch((result) => {
    console.log("Not Ok: " + result);
  });

console.log("selesai");

// Pomise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Jauhar",
        pemeran: "juned",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Depok",
        suhu: 40,
        kondisi: "cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((result) => console.log(result));
// cuaca.then((result) => console.log(result));

// Promise.all([film, cuaca]).then((result) => console.log(result));
Promise.all([film, cuaca]).then((result) => {
  const [film, cuaca] = result;
  console.log(film);
  console.log(cuaca);
});
