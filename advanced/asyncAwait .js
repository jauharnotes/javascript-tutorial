function testPromise() {
  return new Promise((resolve, rejected) => {
    const time = 6000;
    if (time < 5000) {
      setTimeout(() => {
        resolve(`Selesai setelah ${time} milisecon`);
      }, time);
    } else {
      rejected("Kelamaannn!!");
    }
  });
}

// const foo = testPromise();
// foo.then(() => console.log(foo)).catch(() => console.log(foo));

// foo.then(() => console.log(foo));

async function fooAsync() {
  try {
    const foo = await testPromise();
    console.log(foo);
  } catch (err) {
    console.error(err);
  }
}

fooAsync();
