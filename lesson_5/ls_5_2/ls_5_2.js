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
    numberOfItemsInTheCart(obj){
        let q = 0;
        for (let key in obj) {
            q++
        }
        return q;
    },
    emptyBasket(){
        p.textContent += 'Ваша корзина пуста';
    },
    notEmptyBasket(){
        p.textContent += `В корзине: ${this.numberOfItemsInTheCart(this.goods)} товара на сумму ${this.countBasketPrice()} рублей `;
    }
};

const containerElement = document.getElementById('cart');
const p = document.createElement('p');
containerElement.appendChild(p);

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

if (isEmpty(cart.goods)){
    cart.emptyBasket();
} else {
    cart.notEmptyBasket();
}
