import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Developer.css'

const Developer = (props) => {
    const {name,role,country,age,workAt,salary,img} = props.developer;
    // FontAwesome using 
    const cartIcon = <FontAwesomeIcon icon ={faShoppingCart}/>
    return (
        <div className="developer-card">
            <img src={img} alt="" />
            <h5><b>Name: </b>{name}</h5>
            <p><b>Work At:</b> {workAt}</p>
            <p><b>Role:</b> {role}</p>
            <p><b>Country:</b> {country}</p>
            <p><b>Age:</b> {age}</p>
            <h5><b>Salary:</b> ${salary}</h5>
            <button onClick={()=>props.addToCartHandler(props.developer)} className="btnAddToCart btn-grad">{cartIcon} Add To Cart</button>
        </div>
    );
};

export default Developer;