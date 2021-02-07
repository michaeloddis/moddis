import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { color, typography } from 'styled-system';
import { Flex } from './layout';

const Container = styled(Flex)`
    border: solid 1px ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    margin-top: 8px;
    min-height: 60px;
    padding: 16px;
`;

const Output = styled.p`
    ${color};
    ${typography};
    color: ${props => props.theme.colors.darkGray};
    font-style: italic;
    text-align: center;
    width: 100%;
`;

const FoodAppDataOutput = (props) => {
    const { width, output } = props;
    const generatedOutput = output ? output : 'Generated output goes here:'
 
    return (
        <Container
            id='data-output'
            alignItems='center'
            justifyContent='center'
            marginBottom={8}
            width={width}>
            <Output fontSize={16}>{generatedOutput}</Output>
        </Container>
    );
};

FoodAppDataOutput.propTypes = {
    output: PropTypes.string
};

FoodAppDataOutput.defaultProps = {
    output: ''
};

export default withTheme(FoodAppDataOutput);
