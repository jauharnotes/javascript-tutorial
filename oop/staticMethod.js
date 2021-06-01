class Counter {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const result = Counter.sum(2, 2, 2, 2, 2);
console.log(result);
