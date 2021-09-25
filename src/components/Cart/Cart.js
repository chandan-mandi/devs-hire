import React from 'react';
import CartNameBox from '../Cart-Name-Box/CartNameBox';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let name = [];
    for(const product of cart) {
        total = total + product.salary;
        name = name + product.name;
    }
    return (
        <div className="cart-section">
            <h4>Order Summary</h4>
            <h5>Developers Added : {props.cart.length}</h5>
            <h5>Total Cost : ${total}</h5>
            <div>
                {
                    cart.map(product => <CartNameBox
                        product = {product}
                        key = {product.id}
                    ></CartNameBox>)
                }
            </div>
        </div>
    );
};

export default Cart;