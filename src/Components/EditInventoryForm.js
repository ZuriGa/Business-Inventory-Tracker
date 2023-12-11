import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function EditInventoryForm (props) {
    const { coffee } = props;

    function handleFormSubmission(event) {
        event.preventDefault();
        props.onEditCoffeeSubmission({
            name: event.target.name.value,
            origin: event.target.origin.value,
            price: parseFloat(event.target.price.value),
            roast: event.target.roast.value,
            quantity: parseInt(event.target.poundsLeft.value),
            flavor: event.target.flavor.value,
            id: v4()
        });
    }
    
    return (
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler={handleFormSubmission}
            buttonText='Update Coffee Details' />
        </React.Fragment>
    );
}

EditInventoryForm.propTypes = {
    coffee: PropTypes.object,
    onEditCoffeeSubmission: PropTypes.func
};

export default EditInventoryForm;