import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from './secondary-button-styles';

const SecondaryButton = (props) => {
    const {
        width,
        minWidth,
        children,
        name,
        value,
        type,
        marginRight,
        onClick,
        disabled
    } = props;

    const buttonProps = {
        name,
        value,
        width,
        minWidth,
        type,
        marginRight,
        disabled,
        onClick
    };

    return (
        <ButtonElement { ...buttonProps }>
            {children}
        </ButtonElement>
    );
};

SecondaryButton.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    minWidth: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func,
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SecondaryButton.defaultProps = {
    width: '100%',
    type: 'button',
    disabled: false
};

export {
    SecondaryButton
};