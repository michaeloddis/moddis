import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from './layout';

const FoodAppFooter = ({
    children
}) => {
    return (
        <Flex width='100%'>
            <Box width={1}>
                {children}
            </Box>
        </Flex>
    );
};

FoodAppFooter.propTypes = {
    children: PropTypes.any
};

export default FoodAppFooter;