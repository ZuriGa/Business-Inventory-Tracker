import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function InventoryDetails(props) {
    const { coffee, onSellPound, onClickingDelete } = props;
    const [quantity, setQuantity] = useState(coffee.quantity);

    useEffect(() => {
        setQuantity(coffee.Quantity);
    }, [coffee]);

    let content;
    if (quantity > 0) {
        content = (
            <div>
                <h3>Remaining Pounds: {quantity} </h3>
                <button onClick={onSellPound}>Sell 1 Pound</button>
            </div>
        );
    } else {
        content = <h3>Quantity: {quantity}</h3>;
    }


    return (
        <React.Fragment> 
        <div>
            <div>
                <h1>Coffee Details</h1>
                <h3>Name: {coffee.name}</h3>
                <h3>Origin: {coffee.origin}</h3>
                <h3>Price: {coffee.price}</h3>
                <h3>Roast: {coffee.roast}</h3>
                <h3>Size: {coffee.size}</h3>
                {content}
                <button onClick={ props.onClickingEdit }>Update Coffee Details</button>
                <button onClick={() => onClickingDelete(coffee.id) }>Delete Coffee</button>
            </div>
        </div>
        </React.Fragment>
    );
}

InventoryDetails.propTypes = {
    coffee: PropTypes.object,
    onSellPound: PropTypes.func.isRequired,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default InventoryDetails;