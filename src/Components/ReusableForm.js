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
                    placeholder='$0.00'
                    required={true} />
                <label htmlFor="roast">Roast: </label>
                <input
                    type='text'
                    name='roast'
                    placeholder='Roast level'
                    required={true} />
                <label htmlFor='quantity'>Quantity: </label>
                <input
                    type='number'
                    name='quantity'
                    placeholder='How many burlap sacks?'
                    required={true} /> 
                <label htmlFor='flavor'>Flavor: </label>
                <input
                    type='textarea'
                    name='flavor'
                    placeholder='Enter flavor notes' /> 
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