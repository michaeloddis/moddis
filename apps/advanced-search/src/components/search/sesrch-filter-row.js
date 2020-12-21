import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';

const SearchFilterRowContainer = styled.div`
    border: solid 1px #dddddd;
    border-radius: 4px;
    padding: ${rems('16')};
    margin-bottom: ${rems('16')};
    cursor: pointer;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    background-color: #FFFFFF;
`;

const SearchFilterRow = (props) => {
    const { width, children } = props;
 
    return (
        <SearchFilterRowContainer width={width}>
            {children}
        </SearchFilterRowContainer>
    );
};

SearchFilterRow.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any
};

SearchFilterRow.defaultProps = {
    width: 'auto'
};

export {
    SearchFilterRow
};