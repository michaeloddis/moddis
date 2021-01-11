import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonElement } from './icon-button-styles';

const IconButton = (props) => {
    const {
        width,
        height,
        children,
        type,
        onClick
    } = props;

    const buttonProps = {
        width,
        height,
        type,
        onClick
    };

    return (
        <IconButtonElement { ...buttonProps }>
            {children}
        </IconButtonElement>
    );
};

IconButton.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    minWidth: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func
};

IconButton.defaultProps = {
    type: 'button'
};

export {
    IconButton
};