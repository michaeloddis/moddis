import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';

const ButtonElement = styled.button`
    background-color: #a8b5c6;
    border: solid 1px #a8b5c6;
    border-radius: 4px;
    height: ${rems('35')};
    width: ${rems('100')};
    min-width: ${rems('60')};
    box-sizing: border-box;
    color: #FFFFFF;
    padding-left: ${rems('16')};
    padding-right: ${rems('16')};
    margin-right: ${props => props.marginRight};
    cursor: pointer;

    :hover {
        background-color: #97a3b3;
    }
`;

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

    const onClickHandler = () => {
        if (onClick) {
            onClick();
        }
    };

    const buttonProps = {
        name,
        value,
        width,
        minWidth,
        type,
        marginRight,
        disabled
    };

    return (
        <ButtonElement
            onClick={onClickHandler} 
            { ...buttonProps }>
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
    marginRight: rems('16'),
    disabled: false
};

export {
    SecondaryButton
};