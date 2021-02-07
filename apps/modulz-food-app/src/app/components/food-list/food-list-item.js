import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Box } from '../layout';

const Container = styled(Box)`
    padding-left: ${props => props.paddingLeft};
    transition: padding-left ${props => props.theme.transitions['200']}, background-color ${props => props.theme.transitions['800']};
`;

const FoodListItem = (props) => {
    return (
        <Container
            {...props}
            marginBottom='3px'
            width={1}>
            {props.children}
        </Container>
    );
};

FoodListItem.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
};

FoodListItem.defaultProps = {
    backgroundColor: 'lightGray',
    paddingLeft: '8px'
};

export default withTheme(FoodListItem);