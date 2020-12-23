import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';

const IconButtonElement = styled.button`
    border: none;
    background-color: #ffffff;
    border-radius: 4px;
    height: ${rems('31')};
    width: ${rems('31')};
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #999999;
    cursor: pointer;

    :hover {
        color: #000000;
    }

    svg {

    }
`;

const IconButton = (props) => {
    const {
        width,
        height,
        children,
        type
    } = props;

    const onClickHandler = () => {
        console.log('called onClickHandler');
    };

    const buttonProps = {
        width,
        height,
        type,
        onClick: onClickHandler
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
    children: PropTypes.any
};

IconButton.defaultProps = {
    type: 'button'
};

export {
    IconButton
};