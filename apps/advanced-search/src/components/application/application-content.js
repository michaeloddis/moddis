import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../layout';

const ApplicationContent = (props) => {
    const { width, children } = props;
 
    return (
        <Box width={width}>
            {children}
        </Box>
    );
};

ApplicationContent.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any
};

ApplicationContent.defaultProps = {
    width: 'auto'
};

export {
    ApplicationContent
};