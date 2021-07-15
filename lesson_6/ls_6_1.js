'use strict';

const cart = {
    cartBlock: null,
    goodsInCart: [

    ],

    init(){
        this.cartBlock = document.getElementById('cart');
        this.render();
    },

    render(){
        if (this.goodsInCart.length === 0){
            this.cartBlock.innerHTML = '';
            this.cartBlock.textContent = 'Ваша корзина пуста';
        } else {
            this.cartBlock.innerHTML = '';
            this.cartBlock.textContent = `В корзине: ${this.numberOfItemsInTheCart(this.goodsInCart)} товара на сумму ${this.countBasketPrice()} рублей `;
        }
    },
    countBasketPrice() {
        let price = 0;
        this.goodsInCart.forEach(item => {
            price += (item.price * item.quantity);
        });
        return price;
    },
    numberOfItemsInTheCart(arr){
        let q = 0;
        arr.forEach(function () {
            q++;
        })
        return q;
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.goodsInCart.find((item) => product.id_product === item.id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goodsInCart.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },
};

const catalog = {
    catalogList: null,
    goods: [
        {
            id_product: 1,
            product_name: 'Яблоки',
            price: 100,
        },
        {
            id_product: 2,
            product_name: 'Шоколадка',
            price: 50,
        },
        {
            id_product: 3,
            product_name: 'Молоко',
            price: 55,
        },
        {
            id_product: 4,
            product_name: 'Мука',
            price: 30,
        },
    ],

    init(){
        this.catalogList = document.querySelector('.catalog');
        this.renderCatalog();
        this.addEventHandlers()
    },

    renderCatalog(){
        this.catalogList.insertAdjacentHTML('beforeend', '<h2>Catalog:</h2>');
        this.goods.forEach(good => {
            this.catalogList.insertAdjacentHTML('beforeend', this.productBlock(good));
        })
    },

    productBlock(good){
      return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <button class="product__add-to-cart" data-id_product="${good.id_product}">Добавить в корзину</button>
                    <hr>
              </div>`
    },
    addEventHandlers(){
        this.catalogList.addEventListener('click', event => this.addToBasket(event));
    },
    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.goods.find((product) => product.id_product === id_product);
        cart.addToBasket(productToAdd);
    }
};

catalog.init();
cart.init();

