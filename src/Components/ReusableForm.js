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
                    placeholder='Name' />
                <label htmlFor="origin">Origin: </label>
                <input
                    type='text'
                    name='origin'
                    placeholder='Origin' />
                <label htmlFor="price">Price: </label>
                <input
                    type='number'
                    name='price'
                    placeholder='$0.00' />
                <label htmlFor="roast">Roast: </label>
                <input
                    type='text'
                    name='roast'
                    placeholder='Roast level' />
                <label htmlFor='quantity'>Quantity: </label>
                <input
                    type='number'
                    name='quantity'
                    placeholder='How many burlap sacks?' /> 
                <label htmlFor='flavor'>Flavor: </label>
                <textarea
                    name='flavor'
                    placeholder='Enter flavor notes' /> 
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;