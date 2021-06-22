let cart = [
  ['Яблоки', 100, 2], //наименование товара, цена за 1 единицу(кг, литр, упаковка), количество
  ['Шоколадка', 50, 3],
  ['Молоко', 55, 1],
  ['Мука', 30, 2],
];

function countBasketPrice(cart){
  let price = 0;
  for (let i = 0; i < cart.length; i++){
    price += cart[i][1]*cart[i][2];
  }
  return price;
}

console.log("Стоимость корзины: " + countBasketPrice(cart));
