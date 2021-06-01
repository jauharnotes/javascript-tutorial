class Counter {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

console.log(Counter.sum());
console, log("johar"); //Perintah ini tidak akan pernah dijalankan
