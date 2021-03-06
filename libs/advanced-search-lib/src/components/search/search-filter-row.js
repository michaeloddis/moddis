import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { rems } from '../../utils';
import { TextInput } from '../text-input';
import { IconButton } from '../button';
import { Select } from '../select';
import { Box } from '../layout';
import { SearchOperatorLabel } from './search-operator-label';
import {
    IS_OPERATOR_LABEL,
    AND_OPERATOR_LABEL
} from '../../common/constants';
import { FaTimes } from "react-icons/fa";
import { SearchFilterRowContainer } from './search-styles';

const SearchFilterRow = (props) => {
    const {
        rowItem,
        width,
        predicates,
        stringOperators,
        numberOperators,
        selectedPredicate,
        selectedOperator,
        onPredicateChange,
        onOperatorChange,
        onValueChange,
        onDelete
    } = props;

    const [operators, setOperators] = useState(stringOperators);
    const [operatorSelected, setOperatorSelected] = useState();
    const [predicateSelected, setPredicateSelected] = useState();

    useEffect(() => {
        setPredicateSelected(selectedPredicate);
        setOperatorSelected(selectedOperator);
    }, [selectedOperator, selectedPredicate]);

    const onPredicateChangeHandler = (item) => {
        const operatorOptions = item.type === 'string' ? stringOperators : numberOperators;
        const selectedOperator = operatorOptions[0];

        setOperators(operatorOptions);
        setPredicateSelected(item);
        setOperatorSelected(selectedOperator);

        if (onPredicateChange) {
            onPredicateChange(item, rowItem);
        }

        if (onOperatorChange) {
            onOperatorChange(selectedOperator, rowItem);
        }
    };

    const onOperatorChangeHandler = (item) => {
        setOperatorSelected(item);

        if (onOperatorChange) {
            onOperatorChange(item, rowItem);
        }
    };

    const onValueChangeHandler = (value) => {
        if (onValueChange) {
            onValueChange(value, rowItem);
        }
    };

    const onStartValueChangeHandler = (value) => {
        if (onValueChange) {
            onValueChange(value, rowItem, 'startValue');
        }
    };

    const onEndValueChangeHandler = (value) => {
        if (onValueChange) {
            onValueChange(value, rowItem, 'endValue');
        }
    };

    const onDeleteHandler = () => {
        if (onDelete) {
            onDelete(rowItem);
        }
    };

    const renderOperatorLabel = (label) => {
        const matches = 'between, greater_than, less_than, in_list';

        if (operatorSelected && matches.search(operatorSelected.value) >= 0) {
            return (
                <Box
                    padding={rems('4')}
                    flexGrow={0}>
                    <SearchOperatorLabel>{label}</SearchOperatorLabel>
                </Box>
            );
        }
    };

    const renderValueSection = () => {
        if (operatorSelected && operatorSelected.value === 'between') {
            return (
                <>
                    <Box padding={rems('4')}>
                        <TextInput
                            placeholder='0' 
                            name='filterStartValue' 
                            value={rowItem.value.startValue}
                            onChange={onStartValueChangeHandler} />
                    </Box>
                    <Box 
                        padding={rems('4')}
                        flexGrow={0}>
                        <SearchOperatorLabel>{AND_OPERATOR_LABEL}</SearchOperatorLabel>
                    </Box>
                    <Box padding={rems('4')}>
                        <TextInput
                            placeholder='0' 
                            name='filterEndValue' 
                            value={rowItem.value.endValue}
                            onChange={onEndValueChangeHandler} />
                    </Box>
                </>
            );
        }

        return (
            <Box padding={rems('4')}>
                <TextInput
                    placeholder={predicateSelected && predicateSelected.placeholder} 
                    name='filterValue'
                    value={rowItem.value}
                    onChange={onValueChangeHandler} />
            </Box>
        );
    };

    const renderRemoveButton = () => {
        return (
            <Box
                padding={rems('4')}
                flexGrow={0}>
                <IconButton onClick={onDeleteHandler}>
                    <FaTimes />
                </IconButton>
            </Box>
        );
    };

    return (
        <SearchFilterRowContainer flexWrap='nowrap' width={width}>
            {renderRemoveButton()}
            <Box 
                padding={rems('4')}
                flexGrow={0}>
                <Select
                    minWidth={rems('250')}
                    options={predicates}
                    selectedItem={predicateSelected}
                    onChange={onPredicateChangeHandler} />
            </Box>
            {renderOperatorLabel(IS_OPERATOR_LABEL)}
            <Box
                padding={rems('4')}
                flexGrow={0}>
                <Select
                    options={operators}
                    selectedItem={operatorSelected}
                    onChange={onOperatorChangeHandler} />
            </Box>
            {renderValueSection()}
        </SearchFilterRowContainer>
    );
};

SearchFilterRow.propTypes = {
    rowItem: PropTypes.object.isRequired,
    predicates: PropTypes.array.isRequired,
    width: PropTypes.string,

    stringOperators: PropTypes.array.isRequired,
    numberOperators: PropTypes.array.isRequired,

    selectedPredicate: PropTypes.object,
    selectedOperator: PropTypes.object,

    // Event handlers
    onPredicateChange: PropTypes.func,
    onOperatorChange: PropTypes.func,
    onValueChange: PropTypes.func,
    onDelete: PropTypes.func
};

SearchFilterRow.defaultProps = {
    width: '100%'
};

export {
    SearchFilterRow
};