import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SelectHeader } from './select-header';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { rems } from '../../utils';

const SelectContainer = styled.div`
    position: relative;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
`;

const SelectList = styled.ul`
    position: absolute;
    list-style-type: none;
    background-color: #ffffff;
    border: solid 1px #eeeeee;
    border-radius: 4px;
    padding: ${rems('10')};
    margin-block-start: 0.5em;
    font-size: 0.9rem;
    display: ${props => props.display || 'none'};
    z-index: 10;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 1px;
`;

const SelectListItem = styled.li`
    padding: ${rems('4')};
    cursor: pointer;
    color: #666666;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    padding-left: ${rems('16')};
    margin-bottom: ${rems('8')};

    :last-child {
        margin-bottom: 0;
    }

    :hover {
        color: #000000;
    }
`;

const Select = (props) => {
    const {
        options,
        onToggleMenu,
        onChange,
        width,
        minWidth,
        selectedItem
    } = props;

    // const initialSelectedOption = selectedItem || options[0];

    // console.log('initialSelectedOption', initialSelectedOption);

    const [ isListOpen, setIsListOpen ] = useState(false);
    const [ selectedOption, setSelectedOption ] = useState(options[0]);

    console.log('selectedOption', selectedOption);
    
    useEffect(() => {
        if (isListOpen) {
            document.addEventListener('click', closeMenu);
            return () => {
                document.removeEventListener('click', closeMenu);
            };
        }

        if (selectedItem) {
            setSelectedOption(selectedItem);
        }
    }, [isListOpen, selectedItem]);

    const closeMenu = () => {
        setIsListOpen(false);
    };

    const tiggleMenuHandler = () => {
        setIsListOpen(!isListOpen);

        if (onToggleMenu) {
            onToggleMenu();
        }
    };

    const setSelectedOptionHandler = (item) => {
        setSelectedOption(item);

        if (onChange) {
            onChange(item);
        }
    };

    const renderMenuOptions = () => {
        let selectOptions = [];

        if (options) {
            selectOptions = options.map((item, index) => {
                return (
                    <SelectListItem
                        key={index}
                        onClick={() => setSelectedOptionHandler(item)}>
                        {item.label}
                    </SelectListItem>
                )
            });
        }

        return selectOptions
    };

    const selectListProps = {
        display: isListOpen ? 'block' : 'none',
        width,
        minWidth
    }

    console.log('BEFORE RETURN::selectedOption', selectedOption);
 
    return (
        <SelectContainer
            width={width}
            minWidth={minWidth}>
            <SelectHeader
                label={selectedOption.label}
                icon={ isListOpen ? <FaChevronUp /> : <FaChevronDown />}
                onClick={tiggleMenuHandler}
                width={width}
                minWidth={minWidth} />
            <SelectList { ...selectListProps }>
                {renderMenuOptions()}
            </SelectList>
        </SelectContainer>
    );
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    onToggleMenu: PropTypes.string,
    minWidth: PropTypes.string,
    width: PropTypes.string,
    onChange: PropTypes.func,
    selectedItem: PropTypes.object
};

Select.defaultProps = {
    minWidth: rems('250'),
    width: 'auto'
};

export {
    Select
};
