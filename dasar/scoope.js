// global scope
let counter = 0;

// global scope
function hitMe() {
    // local scope hitMe
    counter++;
}

// global scope
function other() {
    // local scope other
}

hitMe();
hitMe();

console.log(counter);

function first() {
    // local scope first
    let firstVariable = 'First';

    function firstNested() {
        console.log(firstVariable);
        const firstNestedvariable = 'First Nested';
    }

    firstNested();
    // console.log(firstNestedvariable); //ERROR
}

function second() {
    // local scope second
    let secondVariable = 'Second';
    // console.log(firstVariable); //ERROR
}

first();
second();

// global scope
// console.log(firstVariable); //ERROR
// console.log(secondVariable); //ERROR