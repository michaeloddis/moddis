import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../layout';

const ApplicationFooter = (props) => {
    const {
        width,
        children,
        padding,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        margin,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom
    } = props;

    const boxProps = {
        width,
        children,
        padding,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        margin,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom
    };
 
    return (
        <Box { ...boxProps }>
            {children}
        </Box>
    );
};

ApplicationFooter.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ApplicationFooter.defaultProps = {
    width: 'auto'
};

export {
    ApplicationFooter
};