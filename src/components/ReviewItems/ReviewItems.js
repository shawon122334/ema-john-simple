import React from 'react';

const ReviewItems = (props) => {
    const {name,quantity} = props.product;
    const reviewStyle={
        borderBottom: '1px solid lightgrey',
        marginBottom:'10px',
        paddingBottom: '10px',
        marginLeft:'100px'
    };
    return (
        <div style={reviewStyle}>
            <h2 className='product-name'>{name}</h2>
            <h4>Quantity: {quantity}</h4>
            <button className='addToCartBtn'>Remove</button>
        </div>
    );
};

export default ReviewItems;