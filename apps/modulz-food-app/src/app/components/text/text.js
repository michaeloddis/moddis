import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { color, space, layout, typography } from 'styled-system';
import styled, { withTheme } from 'styled-components';

const Container = styled.p`
    ${color};
    ${space};
    ${layout};
    ${typography}
`;

const Text = (props) => {
    return (
        <Container { ...props }>
            {props.children}
        </Container>
    )
};

Text.propTypes = {
    ...propTypes.space,
    ...propTypes.color,
    ...propTypes.layout,
    ...propTypes.typography,
    children: PropTypes.any
};

Text.defaultProps = {
    display: 'inline-flex',
    marginLeft: '8px'
};

export default withTheme(Text);