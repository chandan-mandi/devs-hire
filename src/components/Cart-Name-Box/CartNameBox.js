import React from 'react';

const CartNameBox = (props) => {
    const {name,img} = props.product;
    return (
        <div className="cart-img-box d-flex">
            <img src={img} alt="" />
            <h5>{name}</h5>
        </div>
    );
};

export default CartNameBox;