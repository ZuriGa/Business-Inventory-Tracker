import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function InventoryDetails(props) {
    const { coffee, onSellPound } = props;
    const [quantity, setQuantity] = useState(coffee.quantity);

    useEffect(() => {
        setQuantity(coffee.quantity);
    }, [coffee]);

    return (
        <div>
            <div>
                <h2>Name: {coffee.name}</h2>
                <h3>Origin: {coffee.origin}</h3>
                <h3>Price: {coffee.price}</h3>
                <h3>Roast: {coffee.roast}</h3>
                {quantity > 0 ? (
                    <div>
                    <h3>Remaining Pounds: {quantity} </h3>
                    <button onClick={onSellPound}>Sell 1 Pound</button>
                    </div>
                ) : (
                    <h3>Quantity: {quantity}</h3>
                )}
            </div>
        </div>
    );
}

InventoryDetails.propTypes = {
    coffee: PropTypes.object,
    onSellPound: PropTypes.func.isRequired,
};

export default InventoryDetails;