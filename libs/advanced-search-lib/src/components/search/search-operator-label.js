import React from 'react';
import PropTypes from 'prop-types';
import { SearchOperatorLabelContaner } from './search-styles';

const SearchOperatorLabel = (props) => {
    return (
        <SearchOperatorLabelContaner { ...props }>
            {props.children}
        </SearchOperatorLabelContaner>
    );
};

SearchOperatorLabel.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.any
};

SearchOperatorLabel.defaultProps = {
    width: 'auto',
    height: 'auto'
};

export {
    SearchOperatorLabel
};