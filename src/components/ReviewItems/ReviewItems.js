import React from 'react';

const ReviewItems = (props) => {
    const {name,quantity,key,price} = props.product;
    const reviewStyle={
        borderBottom: '1px solid lightgrey',
        marginBottom:'10px',
        paddingBottom: '10px',
        marginLeft:'100px',
    };
    return (
        <div style={reviewStyle}>
            <h2 className='product-name'>{name}</h2>
            <h4>Quantity: {quantity}</h4>
            <p><small>${price}</small></p>
            <button onClick={()=>props.removeBtn(key)} className='addToCartBtn'>Remove</button>
        </div>
    );
};

export default ReviewItems;