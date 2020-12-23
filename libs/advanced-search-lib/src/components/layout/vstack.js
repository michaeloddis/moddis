import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from './flex';
import { Box } from './box';

const Container = styled.div`
    align-items: ${props => props.alignItems};
    box-sizing: border-box;
    color: ${props => props.color};
    display: flex;
    flex-direction: 'column';
    flex-wrap: ${props => props.flexWrap};
    flexGrow: ${props => props.flexGrow};
    height: ${props => props.height};
    justify-content: ${props => props.justifyContent};
    margin: ${props => props.margin};
    marginLeft: ${props => props.marginLeft};
    marginRight: ${props => props.marginRight};
    marginTop: ${props => props.marginTop};
    marginBottom: ${props => props.marginBottom};
    overflow: ${props => props.overflow};
    padding: ${props => props.padding};
    paddingLeft: ${props => props.paddingLeft};
    paddingRight: ${props => props.paddingRight};
    paddingTop: ${props => props.paddingTop};
    paddingBottom: ${props => props.paddingBottom};
    width: ${props => props.width};
    order: ${props => props.order};
`;

const VStack = (props) => {
    const renderChildren = () => {
        let childElements = [];

        if (props.children) {
            childElements = props.children.map((item, index) => {
                return (
                    <Box key={index}>
                        {item}
                    </Box>
                )
            })
        }

        return childElements;
    };

    return (
        <Container { ...props }>
            {renderChildren()}
        </Container>
    )
};

VStack.propTypes = {
    alignItems: PropTypes.string,
    children: PropTypes.any,
    color: PropTypes.string,
    flexDirection: PropTypes.string,
    flexGrow: PropTypes.number,
    flexWrap: PropTypes.string,
    height: PropTypes.string,
    justifyContent: PropTypes.string,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    order: PropTypes.number,
    overflow: PropTypes.string,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pointerEvents: PropTypes.string,
    width: PropTypes.string
};

Flex.defaultProps = {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'auto',
    color: '#333333',
    flexGrow: 0,
    flexWrap: 'wrap',
    height: 'auto',
    justifyContent: 'flex-start',
    margin: '0px',
    order: 0,
    overflow: 'visible',
    padding: '0px',
    pointerEvents: 'auto',
    width: '100%'
};

export {
    VStack
};
