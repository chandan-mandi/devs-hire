import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Developer.css'

const Developer = (props) => {
    // console.log(props.developer) 
    const {name,role,country,age,workAt,salary,img} = props.developer;
    const cartIcon = <FontAwesomeIcon icon ={faShoppingCart}/>
    return (
        <div className="developer-card">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Work At: {workAt}</p>
            <p>Role: {role}</p>
            <p>Country: {country}</p>
            <p>Age: {age}</p>
            <h6>Salary: ${salary}</h6>
            <button onClick={()=>props.addToCartHandler(props.developer)} className="btnAddToCart">{cartIcon} Add To Cart</button>
        </div>
    );
};

export default Developer;