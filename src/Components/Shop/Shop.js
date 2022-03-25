import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(products=><Product key={products.id}
                        product={products}
                        ></Product>)
                }
            </div>
            <div className="order-summery">
                <h3>Order Summery</h3>
            </div>
        </div>
    );
};

export default Shop;