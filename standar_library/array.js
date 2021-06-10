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
