import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexContainer = styled.div`
    box-sizing: border-box;
    align-items: ${props => props.alignItems};
    color: ${props => props.color};
    display: flex;
    flex-direction:  ${props => props.flexDirection};
    flex-wrap: ${props => props.flexWrap};
    height: ${props => props.height};
    justify-content: ${props => props.justifyContent};
    margin: ${props => props.margin};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    overflow: ${props => props.overflow};
    padding: ${props => props.padding};
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    width: ${props => props.width};
    order: ${props => props.order};
`;

const Flex = (props) => {
    return (
        <FlexContainer { ...props }>
            {props.children}
        </FlexContainer>
    )
};

Flex.propTypes = {
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
    flexDirection: 'row',
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
    Flex
};
