import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '../layout';
import { rems } from '../../utils';

const Container = styled(Flex)`
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    color: #333333;
    font-size: 1rem;
`;
Container.displayName = 'ApplicationContainer';

const ApplicationContainer = (props) => {
    const {
        width,
        children
    } = props;
    
    const appProps = {
        width,
        children
    };
 
    return (
        <Container
            marginLeft={rems('250')}
            marginRight={rems('250')}
            id='application-container' 
            { ...appProps }>
            {children}
        </Container>
    );
};

ApplicationContainer.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any
};

ApplicationContainer.defaultProps = {
    width: 'auto'
};

export {
    ApplicationContainer
};