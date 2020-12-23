import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../../utils';

const ButtonElement = styled.button`
    background-color: #40a7f0;
    border: solid 1px #40a7f0;
    border-radius: 4px;
    height: ${rems('35')};
    width: ${props => props.width || rems('100')};
    min-width: ${rems('60')};
    box-sizing: border-box;
    color: #FFFFFF;
    padding-left: ${rems('16')};
    padding-right: ${rems('16')};
    margin-right: ${props => props.marginRight};
    cursor: pointer;

    :hover {
        background-color: #3485be;
    }
`;

const PrimaryButton = (props) => {
    const {
        width,
        children,
        name,
        value,
        type,
        marginRight,
        disabled,
        onClick
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

PrimaryButton.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PrimaryButton.defaultProps = {
    type: 'button',
    marginRight: rems('16'),
    disabled: false
};

export {
    PrimaryButton
};