let products = [];
let cart = [];

const addDataToHTML = () => {
    if (products.length > 0) {
        $.each(products, (index, product) => {
            let newProduct = $(`
                        <div class="item" data-id="${product.id}">
                            <img src="${product.image}" alt="">
                            <h2>${product.name}</h2>
                            <div class="price">$${product.price}</div>
                            <button class="addCart">Add To Cart</button>
                        </div>
                    `);
            $('.listProduct').append(newProduct);
        });
    }
};
$('.listProduct').on('click', '.addCart', function() {
    let productName = $(this).closest('.item').find('h2').text();

    alert(`${productName} added to cart`);
    $(this).css({ backgroundColor: 'var(--alt-color)', color: '#fff' }).text('Added');
});

$('.icon-cart').on('click', () => {
    $('body').toggleClass('showCart');
});

$('.close').on('click', () => {
    $('body').toggleClass('showCart');
});

$('.listProduct').on('click', '.addCart', function() {
    let id_product = $(this).closest('.item').data('id');
    addToCart(id_product);
});

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex(value => value.product_id == product_id);
    if (cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    } else if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        cart[positionThisProductInCart].quantity += 1;
    }
    addCartToHTML();
    addCartToMemory();
};

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const addCartToHTML = () => {
    $('.listCart').empty();
    let totalQuantity = 0;

    if (cart.length > 0) {
        $.each(cart, (index, item) => {
            totalQuantity += item.quantity;
            let positionProduct = products.findIndex(value => value.id == item.product_id);
            let info = products[positionProduct];

            let newItem = $(`
                        <div class="item" data-id="${item.product_id}">
                            <div class="image"><img src="${info.image}"></div>
                            <div class="name">${info.name}</div>
                            <div class="totalPrice">$${info.price * item.quantity}</div>
                            <div class="quantity">
                                <span class="minus"><</span>
                                <span>${item.quantity}</span>
                                <span class="plus">></span>
                            </div>
                        </div>
                    `);
            $('.listCart').append(newItem);
        });
    }

    $('.icon-cart span').text(totalQuantity);
};

$('.listCart').on('click', '.minus, .plus', function() {
    let product_id = $(this).closest('.item').data('id');
    let type = $(this).hasClass('plus') ? 'plus' : 'minus';
    changeQuantityCart(product_id, type);
});

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex(value => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity += 1;
                break;
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                } else {
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
};

const initApp = () => {
    $.getJSON('products.json', (data) => {
        products = data;
        addDataToHTML();

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    });
};

$(document).ready(initApp);