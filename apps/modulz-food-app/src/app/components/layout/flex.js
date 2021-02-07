import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import { color, space, border, layout, flexbox } from 'styled-system';

const FlexContainer = styled.div`
    ${color};
    ${space};
    ${border};
    ${layout};
    ${flexbox};
    display: flex;
`;

const Flex = (props) => {
    return (
        <FlexContainer { ...props }>
            {props.children}
        </FlexContainer>
    )
};

Flex.propTypes = {
    ...propTypes.space,
    ...propTypes.border,
    ...propTypes.layout,
    ...propTypes.flexbox,
    pointerEvents: PropTypes.string
};

Flex.defaultProps = {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
    justifyContent: 'flex-start',
    pointerEvents: 'auto',
    width: 'auto'
};

export {
    Flex
};
