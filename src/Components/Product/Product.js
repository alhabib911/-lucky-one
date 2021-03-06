import React from 'react';
import './Product.css'
import { GiShoppingCart } from 'react-icons/gi';

const Product = (props) => {
    const {name, img, price, weight} =(props.product);

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4 className='product-name'>Product Name: {name}</h4>
            <p className='product-weight'> {weight}</p>
            <h4 className='product-price'>Price: {price}Tk</h4>
            <button onClick={() => props.handleAddtoCart(name)} className='btn'>
                <p> Add to Cart <GiShoppingCart className='cart-icon'></GiShoppingCart></p>
            </button>
        </div>
    );
};

export default Product;  