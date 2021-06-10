// Number
const input = "123456";
const number = Number(input);

console.log(typeof input);
console.log(number);
console.log(typeof number);

console.log(Number("Ini string"));

// Number Static Properties
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Number Static Method
const data = Number("12345");

console.log(Number.isInteger(data)); //true
console.log(Number.isNaN(data)); // false

// Number Instance Method
const value = Number("12345");
console.log(value.toString(2));
console.log(value.toLocaleString("id-ID"));
console.log(value.toLocaleString("en-US"));
