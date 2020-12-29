import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../layout';

const SearchFilterTray = (props) => {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            width='100%'>
            {props.children}
        </Flex>
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