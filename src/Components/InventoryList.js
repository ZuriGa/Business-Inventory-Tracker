import React from 'react';
import PropTypes from 'prop-types';
import coffeeImage from './../Img/coffee.png';

function InventoryList(props) {
    return(
        <React.Fragment>
            {props.inventoryList.map((coffeeInventory) => (
                <div key={coffeeInventory.id} onClick={() => props.onCoffeeSelection(coffeeInventory.id)}>
                <img src={coffeeImage} alt={'coffee bag'} style={{resizeMode: 'center', height: 250, width: 300, borderRadius: 20}} />
                <h2>{coffeeInventory.name}</h2>
                </div>
            ))}
        </React.Fragment>
    );
}

InventoryList.propTypes = {
    inventoryList: PropTypes.array,
    onCoffeeSelection: PropTypes.func,

};

export default InventoryList;