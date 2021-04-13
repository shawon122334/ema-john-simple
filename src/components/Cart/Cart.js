import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart=props.cart;
    // console.log(cart);
    // const total=cart.reduce((total,prd)=>total+prd.price,0);
    let total=0;
    for(let i=0;i<cart.length;i++){
        let prd=cart[i];
        total=total+prd.price;
    }

    let shipping=0;
    if(total>40){
        shipping=0;
    }
    else if(total>15){
        shipping=4.55;
    }
    else if(total>0){
    }

    const tax=total/10;
    const grandTotal=shipping+tax+total;

    const formatNumber=(num)=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3 className="text-primary">Order Summery</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <h4><small>Shipping : {formatNumber(shipping)}</small></h4>
            <h4><small>Tax + Vat : {formatNumber(tax)}</small></h4>
            <h4>Total Price : $ {formatNumber(grandTotal)}</h4>
            <Link to='/review'> <button className="addToCartBtn">Review</button> </Link>
        </div>
    );
};

export default Cart;