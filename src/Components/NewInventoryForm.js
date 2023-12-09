import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewInventoryForm(props) {
    function handleNewInventoryFormSubmission(event) {
        event.preventDefault();
        props.onNewInventoryCreation({
            name: event.target.names.value,
            origin: event.target.origin.value,
            price: event.target.price.value,
            roast: event.target.roast.value,
            size: parseInt(event.target.size.value),
            id: v4()
        });
    }

    return(
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler={handleNewInventoryFormSubmission}
            buttonText='Add inventory' />
        </React.Fragment>
    );
}

NewInventoryForm.prototype = {
    onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;
