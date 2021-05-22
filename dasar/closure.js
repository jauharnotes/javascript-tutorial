function createAdder(value) {
    const owner = 'Johar';

    function add(param) {
        console.log(owner);
        return value + param;
    }

    return add;
}

const addTwo = createAdder(2);
// function addTwo(param) {
//     console.log('Johar');
//     return 2 + param;
// }

console.log(addTwo(20));
console.log(addTwo(30));