import React from 'react';
// import {useState} from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
// import InventoryDetails from './InventoryDetails';

const coffeeInventory = [
    {
        name: 'Light City',
        origin: 'Costa Rica',
        price: '$17.00',
        roast: 'Light roast',
        size: '1lb',
        id: '0'
        
    },
    {
        name: 'American Roast',
        origin: 'Guatemala',
        price: '$19.00',
        roast: 'Medium roast',
        size: '1lb',
        id: '1'
    },
    {
        name: 'Espresso Roast',
        origin: 'Colombia',
        price: '$18.00',
        roast: '1lb',
        id: '2'
    },
];

class InventoryControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            selectedInventoryItem: null, 
            mainCoffeeList: coffeeInventory,
        };
    }

    handleAddingNewInventoryToList = (newCoffee) => {
        const newInventory = this.state.mainCoffeeList.concat(newCoffee);
        this.setState({
            mainCoffeeList: newInventory,
            formVisibleOnPage: false
        });
    };
    
    render() {
        const { mainCoffeeList, selectedInventoryItem, formVisibleOnPage }= this.state;
        let currentlyVisibleState = null;

        if (formVisibleOnPage) {
            currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
        } else {
            currentlyVisibleState = (
                <InventoryList
                inventoryList={mainCoffeeList}
                onItemClick={(selectedInventoryItem) => {
                    this.setState({ selectedInventoryItem });
                }} 
                />
            );
        }
        

        return (
            <React.Fragment>
                {currentlyVisibleState}
            </React.Fragment>
        );
    }
}


export default InventoryControl;