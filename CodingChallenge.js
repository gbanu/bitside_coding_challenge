const INVENTORY = [
  ["A0001", 12.99],
  ["A0002", 3.99],
];

class Basket {
  constructor() {
    this.list = [];
  }

  // Method
  scan(name) {
    INVENTORY.forEach((item) => {
      if (item[0] === name) {
        this.list.push(item);
      }
    });
  }

  total() {
    return (
      Math.round(this.list.reduce((sum, item) => sum + item[1], 0) * 100) / 100
    );
  }

  tenPercentOff(name) {
    const updatedBasket = new Basket();
    updatedBasket.list = this.list.map((item) => {
      if (item[0] === name) {
        return [item[0], Math.floor(item[1] * 90) / 100];
      }
      return item;
    });
    return updatedBasket;
  }

  buyOneGetOneFree(name) {
    const updatedBasket = new Basket();
    let count = 0;
    updatedBasket.list = this.list.map((item) => {
      if (item[0] === name) {
        ++count;
        if (count % 2 === 0) {
          return [item[0], 0];
        }
      }
      return item;
    });
    return updatedBasket;
  }

  print() {
    console.log(this.list);
  }
}

const basket = new Basket();

basket.scan("A0001");
basket.scan("A0002");
basket.scan("A0002");
basket.scan("A0002");
basket.print();

console.log(basket.total());
basket.tenPercentOff("A0002").print();
console.log(basket.buyOneGetOneFree("A0002").total());

module.exports = Basket;
