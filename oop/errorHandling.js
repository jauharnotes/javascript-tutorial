class Counter {
  static sum(...nums) {
    if (nums.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }
    let total = 0;
    for (const num of nums) {
      total += num;
    }
    return total;
  }
}

try {
  console.log(Counter.sum());
  console.log("Johar");
} catch (error) {
  console.log(`Terjadi error : ${error.message}`);
} finally {
  console.log("Program selesai");
}

console.log("Agung");
