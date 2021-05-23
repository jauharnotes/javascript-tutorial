const say = function(name) {
    console.log(`Hello Nama Saya ${name}`);
}

say('Johar');
say('Agung');

console.log('==============');

function giveMeName (calllback) {
    calllback('Johar');
}

giveMeName(say);

giveMeName(function(name) {
    console.log(`Hi ${name}`);
});
