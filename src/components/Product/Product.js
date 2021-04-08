import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props.product);
    const {name,img,seller,price,stock,key}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
            <h4 className='product-name'> <Link to={'/product/'+key}>{name}</Link> </h4>
            <p><small>seller : {seller}</small></p>
            <p>${price}</p>
            <p>only {stock} items left! Don't be late</p>
            <button onClick={()=>props.handleAddToCart(props.product)} className="addToCartBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>

            </div>
            
        </div>
    );
};

export default Product;