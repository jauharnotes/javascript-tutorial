// Syncronous Callback
// function sayHello(name) {
//   return alert(`Halo ${name}`);
// }

// function tampilkanPesan(callback) {
//   let name = prompt("Masukan Nama: ");
//   callback(name);
// }

// tampilkanPesan((name) => alert(`Helo ${name}`));

// object di dalam array
// const mhs = [
//   {
//     nama: "Jauhar",
//     umur: "20",
//     email: "jauharnotes@gmail.com",
//   },
//   {
//     nama: "Juned",
//     umur: "19",
//     email: "juned@gmail.com",
//   },
//   {
//     nama: "agung",
//     umur: "17",
//     email: "agung@gmail.com",
//   },
// ];

// console.log("mulai");
// mhs.forEach((a) => console.log(a.nama));
// console.log("selesai");

// Asynchronous
function getData(url, success, error) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success(xhr.response);
    } else if (xhr.status === 404) {
      error();
    }
  };

  xhr.open("get", url);
  xhr.send();
}
console.log("Mulai");

getData("https://jsonplaceholder.typicode.com/users", (result) => {
  const data = JSON.parse(result);
  data.forEach((a) => {
    return console.log(
      `Nama saya: ${a.name}, saya tinggal di ${a.address.city}, bisa hubungi saya ke: ${a.email}`
    );
  });
});

console.log("Selesai");

// mengunakan JQuery
// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/user",
//   success: (result) => {
//     result.forEach((a) => {
//       console.log(a.name);
//     });
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
