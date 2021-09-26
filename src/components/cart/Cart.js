import React from 'react';

const cart = (props) => {
    const { cart } = props;
    let totalCost = 0;
    for (const teacher of cart) {
       totalCost=teacher.Salary + totalCost;
        }
        console.log(cart);
    return (
        <div>
        <h2>Teacher Added:{cart.length}</h2>
        <h4>Total Cost: ${totalCost}</h4>
        <h3>{}</h3>
    </div>
    );
};

export default cart;