import React from 'react';
import PropTypes from 'prop-types';

function InventoryDetails(props) {
    const { coffee, onSellPound, onClickingDelete, onClickingEdit } = props;
    
    
    const isOutOfStock = coffee && coffee.poundsLeft <= 0 ;
    


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
                    <h3>Quantity: {coffee.poundsLeft}</h3>
                    <h3><em>{coffee.flavor}</em></h3>
                    <button onClick={onSellPound} disabled={isOutOfStock}>Sell 1 lb</button>
                    <button onClick={onClickingEdit}>Update Coffee Details</button>
                    <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button>
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