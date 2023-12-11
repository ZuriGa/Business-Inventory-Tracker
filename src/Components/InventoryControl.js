import React from 'react';
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
        flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.' ,
        poundsLeft: 130,
        id: '0'

    },
    {
        name: 'American Roast',
        origin: 'Guatemala',
        price: '$19.00',
        roast: 'Medium roast',
        size: '1 lb',
        flavor: 'Our Organic House blend balances mild acidity, medium body, and walnut flavor notes in perfect harmony.',
        poundsLeft: 130,
        id: '1'
    },
    {
        name: 'Espresso Roast',
        origin: 'Colombia',
        price: '$18.00',
        roast: 'Dark roast',
        size: '1 lb',
        flavor: 'Our Espresso Roast blend has a big, heavy body that acts as a foundation for its earthy, sweet flavors and complex finish.',
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
            editing: false,
        };
    }

    handleAddingNewInventoryToList = (newCoffee) => {
        const newInventory = this.state.mainCoffeeList.concat(newCoffee);
        this.setState({
            mainCoffeeList: newInventory,
            formVisibleOnPage: false
        });
    }

    handleClick = () => {
        if (this.state.selectedInventoryItem !== null) {
            this.setState({
                formVisibleOnPage: false,
                selectedInventoryItem: null,
                editing: false,
            });
        } else {
            this.setState((prevState) => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
                editing: false,
            }));
        }
    }

    handleEditingCoffeeInList = (coffeeToEdit) => {
        const editedMainCoffeeList = this.state.mainCoffeeList
        .filter((coffee) => coffee.id !== this.state.selectedInventoryItem.id)
        .concat(coffeeToEdit);
        this.setState({
            mainCoffeeList: editedMainCoffeeList,
            editing: true, 
            selectedInventoryItem: null,
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

    handleDeletingCoffee = (id) => {
        const newMainCoffeeList = this.state.mainCoffeeList.filter((coffee) => coffee.id !== id);
        this.setState({
            mainCoffeeList: newMainCoffeeList,
            selectedCoffee: null
        });
    }


    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisibleState = <EditInventoryForm coffee = {this.state.selectedInventoryItem} 
            onEditCoffee = {this.handleEditingCoffeeInList} />
            buttonText = 'Return to List';
        } else if (this.state.selectedInventoryItem !== null) {
            currentlyVisibleState = <InventoryDetails coffee={this.state.selectedInventoryItem}
            onSellPound={this.handleSellCoffee}
            onClickingDelete = {this.handleDeletingCoffee} 
            onClickingEdit = {this.handleEditingCoffeeInList}/>
            buttonText = 'Return to List';
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
            buttonText = 'Return to List';
        } else {
            currentlyVisibleState =
                <InventoryList
                    inventoryList={this.state.mainCoffeeList}
                    onCoffeeSelection={this.handleChangingSelectedCoffee} />;
                    buttonText = 'Add New Coffee';
        }

        return (
            <React.Fragment>
                {currentlyVisibleState}
                
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}


export default InventoryControl;