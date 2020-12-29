import React from 'react';
import PropTypes from 'prop-types';
import { rems } from '../../utils';
import {
    SelectHeaderContainer,
    SelectLabel
} from './select-header-styles';

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