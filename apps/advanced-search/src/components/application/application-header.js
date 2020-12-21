import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../layout';

const ApplicationHeader = (props) => {
    const { width, children } = props;
 
    return (
        <Box width={width}>
            {children}
        </Box>
    );
};

ApplicationHeader.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any
};

ApplicationHeader.defaultProps = {
    width: 'auto'
};

export {
    ApplicationHeader
};