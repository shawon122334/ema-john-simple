import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    // console.log(first10);
    return (
        <div className='shopContainer'>
            <div className="productContainer">

                {
                    products.map(prod =><Product product={prod}></Product> )
                }

            </div>
            <div className="cartContainer">
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Shop;