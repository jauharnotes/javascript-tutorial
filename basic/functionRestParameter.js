function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  console.log(`name: ${name} is ${total}`);
}

sum("gedang", 20, 43, 56, 32, 67);
sum("bolet", 20, 53, 46, 32, 27);
sum("ganyong", 10, 23, 46, 12, 67);

// Spread Syntax
let num = [10, 10, 10, 10, 10];
sum("jeruk", ...num);
