// let parameter= "jophar";
// let data = parameter;

// if (parameter === null || parameter === undefined) {
//     data = "Nilai default";
// }

// console.log(data);


// data = parameter ?? "Nilai default";

// console.log(data);

const foo = null ?? 'default string';
document.writeln(`<p>${foo}</p>`);
// expected output: "default string"

const baz = 0 ?? 42;
document.writeln(`<p>${baz}</p>`);
// expected output: 0