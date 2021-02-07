import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../text';

const Checkbox = ({
    id,
    name,
    value,
    onChange,
    isChecked,
    labelColor
}) => {
    const [checked, setChecked] = useState(isChecked);

    useEffect(() => {
        setChecked(checked);
    }, [checked]);

    const checkboxProps = {
        id,
        name,
        value,
        onChange,
        checked: checked ? 'checked' : ''
    };

    const onChangeHandler = () => {
        setChecked(checked => !checked);
        
        if (onChange) {
            onChange(!checked);
        }
    };

    return (
        <>
            <input
                { ...checkboxProps }
                onChange={onChangeHandler}
                type='checkbox' />
            <Text   
                as='label' 
                htmlFor={id} 
                color={labelColor} 
                marginRight={8}>
                {name}
            </Text>
        </>
    )
};

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
    labelColor: PropTypes.string
};

Checkbox.defaultProps = {
    isChecked: false,
    labelColor: 'charcoal'
};

export default Checkbox;