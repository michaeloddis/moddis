import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from './layout';

const FoodAppContainer = ({
    children
}) => {
    return (
        <Flex
            width='100%'
            flexWrap='nowrap'
            flexDirection='columns'>
            <Box width={1}>
                {children}
            </Box>
        </Flex>
    );
};

FoodAppContainer.propTypes = {
    children: PropTypes.any
};

export default FoodAppContainer;