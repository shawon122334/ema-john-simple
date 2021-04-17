import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    // console.log(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(productKey => {
            const product1 = fakeData.find(pd => pd.key === productKey)
            product1.quantity = savedCart[productKey];
            return product1;
        })
        setCart(previousCart);

    }, [])
    const handleAddToCart = (product) => {
        // what we are doing here is we copied previous cart and added the product we are getting form product component , we get Nan when we add product form shop because we created product.quantity that is not available in shop but in review 
        // in line 22 we see addToDatabaseCart has a count that is a quantity but we did not set it in shop that is the problem we are getting Nan so we solve it here 
        // const newCart=[...cart,product];
        // setCart(newCart);
        // // local storages
        // const sameProducts= newCart.filter(pd=> pd.key===product.key)
        // const count=sameProducts.length;
        // addToDatabaseCart(product.key,count)
        //-------------------------------------
        // 1st step : we match the key to the cart key 
        // 2nd step : created a condition if the matching product is here then , increase count by 1 and set product quantity with count. then filter other products except this and copy them in and set them in newCart
        // else : quantity would be 1 and  newCart would be previous cart and the product we are getting as product
        const toBeAddedKey = product.key;
        const sameProducts = cart.find(pd => pd.key === toBeAddedKey)
        let count = 1;
        let newCart;
        if (sameProducts) {
            count = sameProducts.quantity + 1;
            sameProducts.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProducts];

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //saving data to local storages

        addToDatabaseCart(product.key, count)

    }
    return (
        <div className='shopContainer'>
            <div className="productContainer">

                {
                    products.map(prod => <Product key={prod.key} showAddToCart={true} handleAddToCart={handleAddToCart} product={prod}></Product>)
                }

            </div>
            <div className="cartContainer">
                <Cart cart={cart}>
                    <Link to='/review'> <button className="addToCartBtn">Review</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;