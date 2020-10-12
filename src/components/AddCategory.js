import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 1 ) {
            setInputValue('');
            setCategories( cats => [ inputValue, ...cats] );
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2> AddCategory </h2>
            <input type="text" className="form-control" 
            value={inputValue} onChange={ handleInputChange } id="" placeholder="" />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
