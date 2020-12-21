import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';

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
        value
    } = props;

    const onChangeHandler = () => {
        console.log('called onChangeHandler');
    };

    const textInputProps = {
        id: name,
        name,
        value,
        width,
        minWidth,
        placeholder,
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
    children: PropTypes.any
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