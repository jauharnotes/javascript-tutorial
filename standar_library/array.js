{
  // Array Loop
  const array = ["Jauhar", "Uddin", "Khannedy"];

  array.forEach(function (value, index) {
    console.log(`${index}: ${value}`);
  });

  console.log("===================");

  array.forEach((value, index) => console.log(`${index}: ${value}`));

  array.forEach((value) => console.log(value));
}

console.log("===================");

{
  // Array Queue
  const queue = [];

  queue.push("Jauhar");
  queue.push("Uddin");
  queue.push("Khannedy");

  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
}

console.log("===================");

{
  // Array Stack
  const stack = [];

  stack.push("Jauhar");
  stack.push("Uddin");
  stack.push("Khannedy");

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}

{
  // Array Search
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.log(source.find((value) => value > 3));
  console.log(source.findIndex((value) => value > 3));
  console.log(source.includes(7));
  console.log(source.indexOf(5));
  console.log(source.lastIndexOf(5));
}

{
  // Array Filter
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ganjil = numbers.filter((value) => value % 2 == 1);
  const genab = numbers.filter((value) => value % 2 == 0);

  console.log(ganjil);
  console.log(genab);
}

{
  // Array Transform
  const names = ["Jauhar", "Uddin", "Khannedy"];

  const nameUpper = names.map((value) => value.toUpperCase());
  console.log(nameUpper);

  const nameReduce = names.reduce((before, value) => before + " " + value);
  console.log(nameReduce);

  const nameReduceRight = names.reduceRight(
    (before, value) => before + " " + value
  );
  console.log(nameReduceRight);

  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const total = numbers.reduce((before, value) => before + value);
  console.log(total);
}
