import React from 'react';
import PropTypes from 'prop-types';

function InventoryDetails(props) {
    const { coffee, onSellPound, onClickingDelete, onClickingEdit, selectedInventoryItem } = props;
    
    const handleSellingCoffee = () => {
        if (coffee && coffee.quantity !== undefined && coffee.quantity > 0) {
            const updatedCoffee = {
            ...coffee,
            quantity: Math.max(0, coffee.quantity - 1),
            poundsLeft: Math.max(0, coffee.poundsLeft - 1),
        };
        onSellPound(updatedCoffee);

        if (selectedInventoryItem && coffee.id === selectedInventoryItem.id) {
            props.onCoffeeSelection(updatedCoffee);
        } 
    }

    };

    
    const isOutOfStock = coffee && coffee.quantity <= 0;
    const formattedPrice = typeof coffee.price === 'number' ? coffee.price.toFixed(2) : 'N/A';


    return (
        <React.Fragment>
            {coffee && (
            <div>
                <div>
                    <h1>Coffee Details</h1>
                    <h3>Name: {coffee.name}</h3>
                    <h3>Origin: {coffee.origin}</h3>
                    <h3>Price: {coffee.price}</h3>
                    <h3>Roast: {coffee.roast}</h3>
                    <h3>Size: {coffee.size}</h3>
                    <h3>Quantity: {coffee.quantity}</h3>
                    <button onClick={handleSellingCoffee} disabled={isOutOfStock}>Sell 1 lb</button>
                    <button onClick={onClickingEdit}>Update Coffee Details</button>
                    <button onClick={onClickingDelete}>Delete Coffee</button>
                </div>
            </div>
            )}
        </React.Fragment>
    );
}


InventoryDetails.propTypes = {
    coffee: PropTypes.object,
    onSellPound: PropTypes.func.isRequired,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
};

export default InventoryDetails;