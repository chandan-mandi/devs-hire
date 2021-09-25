import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Shop.css'

const Shop = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./developerdb.json')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    }, [])


    // Add To Cart button Event handler
    const addToCartHandler = developer => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }
    return (
        <div className="">
            <div className="container shop-container">
                <div className="product-container">
                    {
                        developers.map(developer => <Developer
                            developer = {developer}
                            key = {developer.id}
                            addToCartHandler = {addToCartHandler}
                        ></Developer>)
                    }
                </div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;