import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectHeader } from './select-header';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { rems } from '../../utils';
import {
    SelectContainer,
    SelectList,
    SelectListItem
} from './select-styles';

const Select = (props) => {
    const {
        options,
        onToggleMenu,
        onChange,
        width,
        minWidth,
        selectedItem
    } = props;

    const [ isListOpen, setIsListOpen ] = useState(false);
    const [ selectedOption, setSelectedOption ] = useState(options[0]);
    
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

    const toggleMenuHandler = () => {
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
 
    return (
        <SelectContainer
            width={width}
            minWidth={minWidth}>
            <SelectHeader
                label={selectedOption.label}
                icon={ isListOpen ? <FaChevronUp /> : <FaChevronDown />}
                onClick={toggleMenuHandler}
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
