import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoxContainer = styled.div`
    align-self: ${props => props.alignSelf};
    background-color: ${props => props.backgroundColor};
    border-top-style: ${props => props.borderTopStyle};
    border-top-color: ${props => props.borderTopColor};
    border-top-width: ${props => props.borderTopWidth};
    box-sizing: border-box;
    color: ${props => props.color};
    flex-grow: ${props => props.flexGrow};
    height: ${props => props.height};
    margin: ${props => props.margin};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    order: ${props => props.order};
    overflow: ${props => props.overflow};
    padding: ${props => props.padding};
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    pointerEvents: ${props => props.pointerEvents};
    width: ${props => props.width};
`;

const Box = (props) => {
    return (
        <BoxContainer { ...props }>
            {props.children}
        </BoxContainer>
    )
};

Box.propTypes = {
    alignItems: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderTopStyle: PropTypes.string,
    borderTopColor: PropTypes.string,
    borderTopWidth: PropTypes.string,
    children: PropTypes.any,
    flexDirection: PropTypes.string,
    flexGrow: PropTypes.number,
    display: PropTypes.string,
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

Box.defaultProps = {
    alignSelf: 'auto',
    borderTopStyle: 'none',
    borderTopWidth: '0px',
    flexGrow: 1,
    height: 'auto',
    margin: '0px',
    order: 0,
    overflow: 'visible',
    padding: '0px',
    pointerEvents: 'auto'
};

export {
    Box
};
