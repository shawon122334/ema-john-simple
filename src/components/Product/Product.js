import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const {name,img,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
            <h4 className='product-name'>{name}</h4>
            <p><small>seller : {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p>only {stock} items left! Don't be late</p>

            </div>
            
        </div>
    );
};

export default Product;