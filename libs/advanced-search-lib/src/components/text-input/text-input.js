import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { rems } from '../../utils';
import { TextInputElement } from './text-input-styles';

const TextInput = (props) => {
    const {
        width,
        minWidth,
        children,
        placeholder,
        name,
        value,
        onChange
    } = props;
    
    const [selectedValue, setSelectedValue] = useState('');

    const onChangeHandler = (event) => {
        setSelectedValue(event.currentTarget.value);
        
        if (onChange) {
            onChange(event.currentTarget.value)
        }
    };

    useEffect(() => {
        if (typeof value !== 'undefined' && value !== selectedValue) {
            setSelectedValue(value);
        }
    }, [value, selectedValue]);

    const textInputProps = {
        id: name,
        name,
        width,
        minWidth,
        placeholder,
        value: selectedValue
    };

    return (
        <TextInputElement
            type='text'
            onChange={onChangeHandler}
            { ...textInputProps }>
            {children}
        </TextInputElement>
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    width: PropTypes.string,
    minWidth: PropTypes.string,
    children: PropTypes.any,
    onReset: PropTypes.func,
    onChange: PropTypes.func
};

TextInput.defaultProps = {
    width: '100%',
    minWidth: rems('80'),
    value: '',
    placeholder: ''
};

export {
    TextInput
};