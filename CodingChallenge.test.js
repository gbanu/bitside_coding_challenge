const Basket = require("./CodingChallenge");

const basket = new Basket();
basket.scan("A0001");
basket.scan("A0002");
basket.scan("A0002");
basket.scan("A0001");
basket.scan("A0002");

test("add items to basket", () => {
  expect(basket.total()).toBe(37.95);
});

test("10% discount", () => {
  expect(basket.tenPercentOff("A0001").total()).toBe(35.35);
});

test("buy 1 fet 1 free", () => {
  expect(basket.buyOneGetOneFree("A0002").total()).toBe(12.99 * 2 + 3.99 * 2);
});
