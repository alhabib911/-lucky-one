import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { IoIosPaperPlane } from 'react-icons/io';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] =useState ([])
    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddtoCart = (product) => {
        // console.log(product);
        const newCart = [...cart ,product]
        // console.log(newCart);
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(products=><Product key={products.id}
                        product={products}
                        handleAddtoCart={handleAddtoCart}
                        ></Product>)
                }
            </div>
            <div className="order-summery">
                <h3><IoIosPaperPlane></IoIosPaperPlane>Express Delivery  </h3>
                
                <div className='product-list'>
                    {
                       cart.map((product) =>
                        <h5 key={product.id}>{product}</h5>
                        )
                    }
                </div>
                    <button className='rendom-btn'>
                        <p>Chose 1 for me</p>           
                    </button>  
                    <button className='clear-btn'> 
                        <p>Clear</p>
                    </button>  
                
            </div>
        </div>
    );
};

export default Shop;