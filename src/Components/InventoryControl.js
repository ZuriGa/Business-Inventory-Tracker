import React from 'react';
import {useState} from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetails from './InventoryDetails';

const coffeeInventory = [
    {
        name: 'Light City',
        origin: 'Costa Rica',
        price: '$17.00',
        roast: 'Light roast',
        size: '1lb',
        Quantity: 130,
        poundsLeft: 130,
        id: '0'
        
    },
    {
        name: 'American Roast',
        origin: 'Guatemala',
        price: '$19.00',
        roast: 'Medium roast',
        size: '1lb',
        Quantity: 130,
        poundsLeft: 130,
        id: '1'
    },
    {
        name: 'Espresso Roast',
        origin: 'Colombia',
        price: '$18.00',
        roast: '1lb',
        Quantity: 130,
        poundsLeft: 130,
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

    handleClick = () => {
        if (this.state.selectedInventoryItem != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedInventoryItem: null,
            })
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }

    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.state.mainCoffeeList.find(coffee => coffee.id === id);
        this.setState({ selectedInventoryItem: selectedCoffee });
    }

    handleSellCoffee = () => {
        const { selectedInventoryItem, mainCoffeeList } = this.state;
        const updatedInventory = mainCoffeeList.map((coffee) => coffee.id ===selectedInventoryItem.id ? {...coffee, poundsLeft: Math.max(0, coffee.poundsLeft - 1) } 
        : coffee 
        );
        this.setState({
            mainCoffeeList: updatedInventory,
            selectedInventoryItem: {...selectedInventoryItem, poundsLeft: Math.max(0, selectedInventoryItem.poundsLeft - 1) },
        });
    };
    
    render() {
        const { mainCoffeeList, selectedInventoryItem, formVisibleOnPage }= this.state;
        let currentlyVisibleState = null;

        if (formVisibleOnPage) {
            currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
        } else if (selectedInventoryItem) {
            currentlyVisibleState = (
                <InventoryDetails
                coffee={selectedInventoryItem}
                onSellPound={this.handleSellPound}
                />
            );
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