'use strict';

const cart = {
  goods: {
    Яблоки: {
      price: 100,
      quantity: 2,
    },
    Шоколадка: {
      price: 50,
      quantity: 3,
    },
    Молоко: {
      price: 55,
      quantity: 1,
    },
    Мука: {
      price: 30,
      quantity: 2,
    },
  },
  countBasketPrice() {
    let price = 0;
    for (const prop in this.goods) {
      price += (this.goods[prop].price * this.goods[prop].quantity);
    }
    return price;
  },
};

console.log("Стоимость корзины: " + cart.countBasketPrice());
