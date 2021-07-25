const fruits = ["anggur", "mangga", "jambu", "alpukat"];

// const [a, b, c, d] = fruits;

// skipping items
const [a, , , d] = fruits;
console.log(a);
console.log(d);

// swap item
let foo = 1;
let bar = 2;
console.log(foo);

[foo, bar] = [bar, foo];
console.log(foo);
