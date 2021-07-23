let num = [10, 2, 4, 6, 1, 8, 9, 3];

// menjumlahkan semua element di array

const newNumber = num.reduce(
  (accumulator, carrentValue) => accumulator + carrentValue
);
console.log(newNumber);

// case: cari angka > 5
// kalikan 3
// jumlahkan
const result = num
  .filter((a) => a > 5) //10,6,8,9
  .map((a) => a * 3) //30,18,24,27
  .reduce((acc, carr) => acc + carr); //99

console.log(result);
