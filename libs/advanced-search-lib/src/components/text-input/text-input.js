import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../../utils';
// import debounce from 'lodash/debounce';

const TextInputElement = styled.input`
    border: solid 1px #dddddd;
    border-radius: 4px;
    padding-left: ${rems('8')};
    padding-right: ${rems('8')};
    padding-bottom: ${rems('0')};
    height: ${rems('31')};
    min-width: ${rems('250')};
    box-sizing: border-box;

    ::placeholder {
        color: #dddddd;
        font-style: italic;
    }
`;

const TextInput = (props) => {
    const {
        width,
        minWidth,
        children,
        placeholder,
        name,
        value,
    } = props;
    
    const [currentValue, setCurrentValue] = useState(value);

    const onChangeHandler = (event) => {
        setCurrentValue(event.currentTarget.value);
        console.log('event.currentTarget.value = ', event.currentTarget.value);
        console.log('currentValue = ', currentValue);
    };

    useEffect(() => {
        if (typeof value !== 'undefined') {
            setCurrentValue(value);
        }
    }, [value]);

    const textInputProps = {
        id: name,
        name,
        width,
        minWidth,
        placeholder,
        value: currentValue,
        onChange: onChangeHandler
    };

    return (
        <TextInputElement type='text' { ...textInputProps }>
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
    onReset: PropTypes.func
};

TextInput.defaultProps = {
    width: '100%',
    minWidth: rems('250'),
    value: '',
    placeholder: ''
};

export {
    TextInput
};