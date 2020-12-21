import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';

const SearchFilterTrayContainer = styled.div`
    padding: ${rems('6')};
    cursor: pointer;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    background-color: #FFFFFF;
`;

const SearchFilterTray = (props) => {
    const { width, children } = props;
 
    return (
        <SearchFilterTrayContainer width={width}>
            {children}
        </SearchFilterTrayContainer>
    );
};

SearchFilterTray.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any
};

SearchFilterTray.defaultProps = {
    width: '100%'
};

export {
    SearchFilterTray
};