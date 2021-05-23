// Arrow function
const sayHello = (name) => {
    const say = `Hello ${name}`;
    console.log(say);
}

sayHello('Johar');

// Versi satu baris
// const sayHello2 = (name) => console.log(`Hello ${name}`);
const sayHello2 = name => console.log(`Hello ${name}`);

sayHello2('Agung');

// Menggunakan return
const sum = (first, second) => {
    return first + second;
}

console.log(sum(20, 30));

// Menggunakan return versi satu baris
const sum2 = (first, second) => first + second;

console.log(sum2(20, 30));


function giveMeName(callback) {
    callback('Johar');
}

// Anonymous Function
// giveMeName(function(name) {
//     console.log(`Hello ${name}`);
// })

// Arrow Function
giveMeName(name => console.log(`Hello ${name}`));