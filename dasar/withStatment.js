const person = {
    firsName: 'jauhar',
    lastName: 'uddin'
}

console.log(person.firsName);
console.log(person.lastName);

console.log('=====================')

with (person) {
    console.log(firsName);
    console.log(lastName);
}
