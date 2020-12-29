import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '../layout';
import { rems } from '../../utils';

const AppContainer = styled(Flex)`
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    color: #333333;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
`;
AppContainer.displayName = 'ApplicationContainer';

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
        <AppContainer
            marginLeft={rems('250')}
            marginRight={rems('250')}
            id='application-container' 
            { ...appProps }>
            {children}
        </AppContainer>
    );
};

ApplicationView.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any
};

ApplicationView.defaultProps = {
    width: 'auto'
};

export {
    ApplicationView
};