import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';

const SearchFilterItemContainer = styled.div`
    padding: ${rems('6')};
    cursor: pointer;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    background-color: #FFFFFF;
`;

const SearchFilterItem = (props) => {
    const { width } = props;
 
    return (
        <SearchFilterItemContainer width={width}>
            Filter Items
        </SearchFilterItemContainer>
    );
};

SearchFilterItem.propTypes = {
    width: PropTypes.string
};

SearchFilterItem.defaultProps = {
    width: '100%'
};

export {
    SearchFilterItem
};