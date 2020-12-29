import React from 'react';
import PropTypes from 'prop-types';
import { SearchFilterItemContainer } from './search-styles';

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