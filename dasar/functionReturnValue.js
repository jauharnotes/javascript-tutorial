function sayHello (firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

const result = sayHello('jauhar', 'uddin');
console.log(result);

console.log('==========================');

function getFinalValue (value) {
    if (value >= 90) {
        return 'A';
    } else if (value >= 80) {
        return 'B';
    } else if (value >= 70) {
        return 'C';
    } else if (value >= 60) {
        return 'D';
    } else {
        return 'E';
    }
}

const finalValue = getFinalValue(75);
console.log(finalValue);

console.log('==========================');

function isContains (aray, searchValue) {
    for (const element of array) {
        console.info(`iterasi element: ${element}`)
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}

const array = [1, 23, 4343, 4343, 5345,56745, 5];
const search = 4343;
const found = isContains(array, search);
console.log(found);