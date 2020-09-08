import React from 'react';

const Cart = (props) => {
    const price = props.coursePrice;
    // console.log(price);
    let Total = 0;
    for (let i = 0; i < price.length; i++) {
        const value = price[i];
        Total += value;
    }
    // console.log(Total);
    return (
        <div className="cart-style" style={{ position: 'sticky', top: 0 }}>
            <h3>Course Added: {price.length}</h3>
            <h4>Total Price: {Total}</h4>
            <button type="button" className="btn btn-success">
                Enroll Now
            </button>
        </div>
    );
};

export default Cart;
