// Global scope
let i = 20;

for (let i = 0; i < 10; i++) {
  // Local scope
  console.log(`Local ${i}`);
}

console.log(`Global scope ${i}`);
