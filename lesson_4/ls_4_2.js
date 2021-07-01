'use strict';

const cart = {
  goods: [
    ['Яблоки', 100, 2], 
    ['Шоколадка', 50, 3],
    ['Молоко', 55, 1],
    ['Мука', 30, 2],
  ],
  countBasketPrice() {
    let price = 0;
    for (let i = 0; i < this.goods.length; i++) {
      price += this.goods[i][1] * this.goods[i][2];
    }
    return price;
  }
};

console.log("Стоимость корзины: " + cart.countBasketPrice());
