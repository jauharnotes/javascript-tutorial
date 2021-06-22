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

{
  // Array prototype reverse
  const foo = ["a", "b", "c", "d", "e"];

  const bar = foo.reverse();
  console.log(bar);
  console.log(foo);

  const back = bar.reverse();
  console.log(back);
}

{
  // Array prototype concat
  const foo = ["a", "b", "c", "d", "e"];
  const bar = [1, 2, 3, 4, 5];

  const fooBar = foo.concat(bar);
  console.log(fooBar);

  const barFoo = bar.concat(foo);
  console.log(barFoo);

  console.log(foo);
  console.log(bar);
}

{
  // Array prototype slice
  const foo = ["a", "b", "c", "d", "e", "f", "g"];

  console.log(foo.slice());
  console.log(foo.slice(3));
  console.log(foo.slice(3, 5));
  console.log(foo.slice(-5));
  console.log(foo.slice(-5, -2));
}

{
  // Array prototype splice
  const foo = [1, 2, 3, 4, 5, 6, 7, 8];
  foo.splice(1, 3, 5);
  console.log(foo);
}

{
  // Array prototype join
  const foo = ["a", "b", "c", "d", "e", "f", "g"];
  console.log(foo.join());
  console.log(foo.join("-"));
  console.log(foo.join("#"));
  console.log(foo.join(""));
  console.log(foo.join(" "));
}

{
  // Array prototype forEach
  const foo = ["a", "b", "c", "d", "e", "f", "g"];
  foo.forEach(function () {
    console.log("JavaScript");
  });
}
