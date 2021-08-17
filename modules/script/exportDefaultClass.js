export default class {
  constructor(menu) {
    this.menu = menu;
  }
  price(nasi, lele) {
    let total = nasi + lele;
    console.log(`Total harga: ${this.menu} = ${total}`);
  }
}

// class Buy {
//   constructor(menu) {
//     this.menu = menu;
//   }
//   price(nasi, lauk) {
//     let total = nasi + lauk;
//     console.log(`Total harga: ${this.menu} = ${total}`);
//   }
// }

// const order = new Buy("nasi pecel lele");
// order.price(4000, 7000);
