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

  console.log(source.find(value => value > 3));
  console.log(source.findIndex(value => value > 3));
  console.log(source.includes(7));
  console.log(source.indexOf(5));
  console.log(source.lastIndexOf(5));
}
