import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { IoIosPaperPlane } from 'react-icons/io';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] =useState ([])
    const [item, setItem] =useState([])
    const [filter, setFilterItem] = useState ([])

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
    useEffect(()=>{
        const item =cart
        if (item.length === 4)
            alert('4 item selected')
        else{
            setItem(item)
        }
    },[cart])

    const filterForMe = () => {
        if (item.length !==0) {
            const filter = item[(Math.floor(Math.random()*item.length)) | 0]
            setFilterItem(filter)
            alert(filter)
            // console.log(filter);
        }
    }
    

    const clearButton = () => {
        setCart([])
    }
    // console.log(products)
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id}
                        product={product}
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
                    <button onClick={filterForMe}
                    className='random-btn'>
                        <p>Chose 1 for me</p>           
                    </button>  
                    <button onClick={clearButton}
                     className='clear-btn'> 
                        <p>Clear</p>
                    </button>  
                
            </div>
        </div>
    );
};

export default Shop;