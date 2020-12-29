import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../../utils';

const Contaner = styled.div`
    background-color: #e0e6ed;
    border: solid 1px #cccccc;
    border-radius: 4px;
    width: ${props => props.width};
    height: ${props => props.height};
    text-align: center;
    padding: ${rems('5.5')} ${rems('10')};
`;

const SearchOperatorLabel = (props) => {
    return (
        <Contaner { ...props }>
            {props.children}
        </Contaner>
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