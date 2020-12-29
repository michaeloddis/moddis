import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../../utils';

const ButtonElement = styled.button`
    background-color: #40a7f0;
    border: solid 1px #40a7f0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-size: ${rems('16')};
    height: ${rems('45')};
    margin-right: ${props => props.marginRight};
    width: ${props => props.width};

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

    const buttonProps = {
        name,
        value,
        width,
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
    disabled: false
};

export {
    PrimaryButton
};