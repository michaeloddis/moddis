import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';

const ButtonElement = styled.button`
    background-color: #40a7f0;
    border: solid 1px #40a7f0;
    border-radius: 4px;
    height: ${rems('35')};
    width: ${rems('100')};
    min-width: ${rems('60')};
    box-sizing: border-box;
    color: #FFFFFF;
    padding-left: ${rems('16')};
    padding-right: ${rems('16')};
    margin-right: ${props => props.marginRight};

    :hover {
        background-color: #3485be;
    }
`;

const PrimaryButton = (props) => {
    const {
        width,
        minWidth,
        children,
        name,
        value,
        type,
        marginRight,
        disabled
    } = props;

    const onClickHandler = () => {
        console.log('called onClickHandler');
    };

    const buttonProps = {
        name,
        value,
        width,
        minWidth,
        type,
        marginRight,
        disabled,
        onClick: onClickHandler
    };

    /*
    const renderChildren = () => {
        const newChildren = [];
    
        if (Array.isArray(children)) {
            let textIsPresent = false;
            let textFound = false;
    
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
    
                if (typeof child === 'string' && child !== '') {
                    textIsPresent = true;
                    break;
                }
            }

            for (let i = 0; i < children.length; i++) {
                const child = children[i];
    
                if (child === null) {
                    continue;
                }
    
                if (typeof child === 'object') {
                    const propsToAdd = {
                        key: `buttonIconKey${i}`,
                        size: 0,
                        disabled: disabled
                    };
    
                    if (!textFound && textIsPresent) {
                        propsToAdd.marginright = rems('4');
                    }
    
                    if (textFound && textIsPresent) {
                        propsToAdd.marginleft = rems('4');
                    }
    
                    newChildren.push(React.cloneElement(child, propsToAdd));
    
                    continue;
                }
    
                newChildren.push(<span key={`buttonIconKey${i}`}>{child}</span>);
                textFound = true;
            }
    
            return newChildren;
        }
    
        return children;
    }
    */

    return (
        <ButtonElement { ...buttonProps }>
            {children}
        </ButtonElement>
    );
};

PrimaryButton.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    minWidth: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PrimaryButton.defaultProps = {
    width: '100%',
    type: 'button',
    marginRight: rems('16')
};

export {
    PrimaryButton
};