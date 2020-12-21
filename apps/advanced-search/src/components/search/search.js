import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../layout';

const Search = (props) => {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            width='100%'>
            {props.children}
        </Flex>
    );
};

Search.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any,
    
};

Search.defaultProps = {
    width: '100%'
};

export {
    Search
};