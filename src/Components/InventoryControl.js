import React from 'react';
import { useState } from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetails from './InventoryDetails';
import EditInventoryForm from './EditInventoryForm';

const coffeeInventory = [
    {
        name: 'Light City',
        origin: 'Costa Rica',
        price: '$17.00',
        roast: 'Light roast',
        size: '1 lb',
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
        roast: 'Dark roast',
        size: '1lb',
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


    handleHomeClick = () => {
        this.setState({
            formVisibleOnPage: false,
            selectedInventoryItem: null,
        });
    }

    handleAddingNewInventoryToList = (newCoffee) => {
        const newInventory = this.state.mainCoffeeList.concat(newCoffee);
        this.setState({
            mainCoffeeList: newInventory,
            formVisibleOnPage: false
        });
    }

    handleClick = () => {
        if (this.state.selectedInventoryItem != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedInventoryItem: null,
            });
        } else {
            this.setState((prevState) => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

    handleEditingCoffeeInList = (coffeeToEdit) => {
        const editedMainCoffeeList = this.state.mainCoffeeList
        .filter(coffee => coffee.id !== this.state.selectedInventoryItem.id)
        .concat(coffeeToEdit);
        this.setState({
            mainCoffeeList: editedMainCoffeeList,
            editing: false, 
            selectedCoffee: null
        });
    }

    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.state.mainCoffeeList.find((coffee) => coffee.id === id);
        this.setState({ selectedInventoryItem: selectedCoffee });
    }

    handleSellCoffee = () => {
        const { selectedInventoryItem, mainCoffeeList } = this.state;
        const updatedInventory = mainCoffeeList.map((coffee) => {
            if (coffee.id === selectedInventoryItem.id) {
                return { ...coffee, poundsLeft: Math.max(0, coffee.poundsLeft - 1) };
            } else {
                return coffee;
            }
        });
        const updatedPoundsLeft = Math.max(0, selectedInventoryItem.poundsLeft - 1);

        this.setState({
            mainCoffeeList: updatedInventory,
            selectedInventoryItem: { ...selectedInventoryItem, poundsLeft: updatedPoundsLeft },
        });
    }

    handleDeletingTicket = (id) => {
        const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
        this.setState({
            mainCoffeeList: newMainCoffeeList,
            selectedCoffee: null
        });
    }


    render() {
        const { mainCoffeeList, selectedInventoryItem, formVisibleOnPage } = this.state;
        let currentlyVisibleState = (
            <InventoryDetails
            coffee={selectedInventoryItem}
            onSellPound={this.handleSellCoffee}
            />
        );

        if (this.state.editing) {
            currentlyVisibleState = <EditInventoryForm coffee = {this.state.selectedInventoryItem} 
            onEditCoffee = {this.handleEditingCoffeeInList} />
            // buttonText = "Return to Inventory";
        } else if (formVisibleOnPage) {
            currentlyVisibleState = (
            <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />
            );
        } else if (selectedInventoryItem) {
            currentlyVisibleState = (
                <InventoryDetails
                    coffee={selectedInventoryItem}
                    onSellPound={this.handleSellCoffee}
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
                <button onClick={this.handleHomeClick}>Home</button>
            </React.Fragment>
        );
    }
}


export default InventoryControl;