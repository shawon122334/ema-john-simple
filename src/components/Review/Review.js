import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [review,setReview] =useState([]);
    //we use useEffect because we are gonna get cart data from database. and set those data to a state
    useEffect(()=>{
        //cart review 
        //the data we added to local storeage
        const savedReview=getDatabaseCart()
        // console.log(savedReview); //object , keys with quantity 
        const productKeys= Object.keys(savedReview);
        // console.log(productKeys);  

        //here we run a map to get all the keys from productKeys, then we run find from the database , and match the keys between them , then make an extra child name quantity and return it 
        const getProduct=productKeys.map(key=>{
            const product= fakeData.find(pd=> pd.key===key)
            product.quantity=savedReview[key];
            return product; 
        });
        // console.log(getProduct);
        setReview(getProduct);  
    },[]);
    const removeBtn=(productKey)=> {
        console.log('remove button clicked', productKey);
        //it filters all review product except the key we provided
        const removedProduct=review.filter(pd=>pd.key!==productKey);
        setReview(removedProduct);
        removeFromDatabaseCart(productKey);
    };
    return (
        <div className="shopContainer">
            <div className="productContainer">
            {
                review.map(pd=> <ReviewItems removeBtn={removeBtn} key={pd.key} product={pd}></ReviewItems>)
            }
            </div>
            <div className="cartContainer">
                <Cart cart={review}></Cart>
            </div>
             
            
        </div>
    );
};

export default Review;