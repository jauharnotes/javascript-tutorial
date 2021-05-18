loopi: for (let i = 0; i < 10; i++) {
  loopj: for (let j = 0; j < 100; j++) {
      if (j > 10) {
          continue loopi;
      }
    console.log(`loopi: ${i} loopj: ${j}`);
  }
}