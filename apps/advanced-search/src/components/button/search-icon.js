import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';
import { FaSearch } from "react-icons/fa";

const IconWrapper = styled.div`
    padding-right: ${props => props.paddingRight};
    display: inline-block;
    cursor: pointer;
`;

const SearchIcon = (props) => {
    return (
        <IconWrapper paddingRight={props.paddingRight}>
            <FaSearch />
        </IconWrapper>
    )
};

SearchIcon.propTypes = {
    paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SearchIcon.defaultProps = {
    paddingRight: rems('8')
};

export {
    SearchIcon
};
