import React from 'react';
import PropTypes from 'prop-types';
import { rems } from '../../utils';
import { ButtonElement } from './primary-button-styles';

const PrimaryButton = (props) => {
    const {
        width,
        height,
        children,
        name,
        value,
        type,
        marginRight,
        disabled,
        onClick
    } = props;

    const buttonProps = {
        name,
        value,
        width,
        height,
        type,
        marginRight,
        onClick
    };

    if (disabled) {
        buttonProps.disabled = disabled;
    }

    return (
        <ButtonElement 
            { ...buttonProps } >
            <span>{children}</span>
        </ButtonElement>
    );
};

PrimaryButton.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PrimaryButton.defaultProps = {
    type: 'button',
    height: rems('45'),
    disabled: false
};

export {
    PrimaryButton
};