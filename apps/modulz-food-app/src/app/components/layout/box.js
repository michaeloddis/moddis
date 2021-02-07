import React from 'react';
import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import {
    color, 
    space,
    border,
    layout,
    flexbox
} from 'styled-system';

const BoxContainer = styled.div`
    ${color};
    ${space};
    ${border};
    ${layout};
    ${flexbox};
    box-sizing: border-box;
`;

const Box = (props) => {
    return (
        <BoxContainer { ...props }>
            {props.children}
        </BoxContainer>
    )
};

Box.propTypes = {
    ...propTypes.space,
    ...propTypes.color,
    ...propTypes.border,
    ...propTypes.layout,
    ...propTypes.flexbox
};

Box.defaultProps = {
    alignSelf: 'auto',
    flexGrow: 1,
    overflow: 'visible',
    pointerEvents: 'auto'
};

export {
    Box
};
