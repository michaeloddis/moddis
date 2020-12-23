import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '../layout';

const AppContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
`;

const ApplicationView = (props) => {
    const {
        width,
        children
    } = props;
    
    const appProps = {
        width,
        children
    };
 
    return (
        <AppContainer { ...appProps }>
            {children}
        </AppContainer>
    );
};

ApplicationView.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any
};

ApplicationView.defaultProps = {
    width: '100%'
};

export {
    ApplicationView
};