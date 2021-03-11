import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    // console.log(first10);
    const [cart,setCart]=useState([]);

    const handleAddToCart = (product) => {
        // console.log('cart added', product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shopContainer'>
            <div className="productContainer">

                {
                    products.map(prod => <Product handleAddToCart={handleAddToCart} product={prod}></Product>)
                }

            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;