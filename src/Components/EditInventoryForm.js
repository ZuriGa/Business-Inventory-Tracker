import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function EditInventoryForm (props) {
    const { coffee } = props;

    function handleEditInventoryFormSubmission(event) {
        event.preventDefault();
        props.onEditCoffee({
            name: event.target.names.value,
            origin: event.target.origin.value,
            price: event.target.price.value,
            roast: event.target.roast.value,
            quantity: parseInt(event.target.quantity.value),
            id: v4()
        });
    }
    
    return (
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler={handleEditInventoryFormSubmission}
            buttonText='Update Coffee Details' />
        </React.Fragment>
    );
}

EditInventoryForm.propTypes = {
    coffee: PropTypes.object,
    onEditCoffee: PropTypes.func
};

export default EditInventoryForm;