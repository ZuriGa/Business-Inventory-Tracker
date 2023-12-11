import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    required={true} />
                <label htmlFor="origin">Origin: </label>
                <input
                    type='text'
                    name='origin'
                    placeholder='Origin'
                    required={true} />
                <label htmlFor="price">Price: </label>
                <input
                    type='number'
                    name='price'
                    min="0"
                    step="0.01"
                    placeholder='$0.00'
                    required={true} />
                <label htmlFor="roast">Roast: </label>
                <input
                    type='text'
                    name='roast'
                    placeholder='Roast level'
                    required={true} />
                <label htmlFor="Quantity">Quantity: </label>
                <input
                    type='number'
                    name='quantity'
                    placeholder='How many burlap sacks?'
                    required={true} /> 
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    )
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;