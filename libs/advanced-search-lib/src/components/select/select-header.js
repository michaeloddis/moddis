import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../../utils';

const SelectHeaderContainer = styled.div`
    border: solid 1px #dddddd;
    border-radius: 4px;
    padding: ${rems('6')};
    cursor: pointer;
    font-size: ${rems('14')};
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    background-color: #FFFFFF;
`;
const SelectLabel = styled.span`
    width: 90%;
    display: inline-block;
`;

const SelectHeader = (props) => {
    const {
        label,
        onClick,
        icon,
        width,
        minWidth
    } = props;

    const selectHeaderProps = {
        onClick,
        width,
        minWidth
    };

    const Icon = () => {
        return React.cloneElement(icon, {
            height: rems('12'),
            width: rems('12')
        });
    }
 
    return (
        <SelectHeaderContainer { ...selectHeaderProps }>
            <SelectLabel>{label}</SelectLabel>
            <Icon />
        </SelectHeaderContainer>
    );
};

SelectHeader.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    width: PropTypes.string,
    minWidth: PropTypes.string,
};

SelectHeader.defaultProps = {
    icon: null,
    minWidth: rems('150'),
    width: 'auto'
};

export {
    SelectHeader
};