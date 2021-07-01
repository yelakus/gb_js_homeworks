'use strict';

const cart = { //наименование товара, количество
  Яблоки: 2,
  Молоко: 1,
//   [Symbol.iterator]: function*() {
//      yield this.Яблоки;
//      yield this.Молоко;
//    },
 };

const goodsAndPrice = { //наименование товара, цена за 1 единицу(кг, литр, упаковка)
  Яблоки: 100,
  Шоколадка: 50,
  Молоко: 55,
  Мука: 30,
};

function countBasketPrice(cart) {
  let price = 0;
  for (const prop in cart) {
    price += (cart[prop] * goodsAndPrice[prop]);
  };
  return price;
};

console.log("Стоимость корзины: " + countBasketPrice(cart));
