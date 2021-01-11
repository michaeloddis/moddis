import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { determineSqlStatement } from '../common/sql-generator';
import { EQUALS } from '../common/constants';
 
const initialState = {
    filters: [],
    filterRowCount: 1,
    sqlStatement: '',
    isValid: false
};

const filterRowDefinition = {
    id: uuidv4(),
    predicate: {
        label: 'Domain',
        value: 'domain',
        type: 'string',
        placeholder: 'domain.com'
    },
    operator: {
        label: 'equals',
        value: 'equals',
        sqlOperator: EQUALS
    },
    value: ''
};

/**
 * Removes an item from an array when given an index.
 * @param {Array} filters 
 * @param {Number} index
 * @return {Array} A new array of filters without the item found at the index.
 */
const removeFilterRowByIndex = (filters, index) => {
    return filters.filter((item) => {
        return item !== filters[index];
    });
};

const reducer = (state, action) => {
    let selectedIndex = null;
    let selectedRowItem = null;
    let newFilterRowItem = null;
    let filters = null;

    switch (action.type) {
        case 'add':
            newFilterRowItem = Object.assign({}, filterRowDefinition);
            newFilterRowItem.id = uuidv4();

            return {
                ...state,
                filters: [ ...state.filters, newFilterRowItem ],
                filterRowCount: state.filterRowCount + 1
            };
        case 'delete':
            selectedIndex = state.filters.indexOf(action.payload);

            return {
                ...state,
                filters: removeFilterRowByIndex(state.filters, selectedIndex),
                filterRowCount: state.filterRowCount - 1
            };
        case 'reset':
            filters = [Object.assign({}, filterRowDefinition)];

            return {
                ...initialState,
                filters
            };
        case 'predicateChanged': 
            selectedIndex = state.filters.indexOf(action.payload.rowItem);
            selectedRowItem = state.filters[selectedIndex];
            selectedRowItem.predicate = { ...action.payload.predicate };

            return {
                ...state
            };
        case 'operatorChanged':
            selectedIndex = state.filters.indexOf(action.payload.rowItem);
            selectedRowItem = state.filters[selectedIndex];
            selectedRowItem.operator = { ...action.payload.operator };
            selectedRowItem.value = '';

            if (selectedRowItem.operator.value === 'between') {
                selectedRowItem.value = {
                    startValue: '',
                    endValue: ''
                }
            }

            return {
                ...state
            };
        case 'valueChanged':
            selectedIndex = state.filters.indexOf(action.payload.rowItem);

            if (selectedIndex !== -1) {
                selectedRowItem = state.filters[selectedIndex];

                switch (action.payload.field) {
                    case 'startValue':
                        selectedRowItem.value.startValue = action.payload.value;
                        break;
                    case 'endValue':
                        selectedRowItem.value.endValue = action.payload.value;
                        break;
                    default:
                        selectedRowItem.value = action.payload.value;
                }
            }

            return {
                ...state
            };
        case 'generateSql':
            return {
                ...state,
                sqlStatement: determineSqlStatement(state)
            };
        default:
            throw new Error('Missing action type');
    }
};

const useFilterRowManager = ({
    filters
}) => {
    const [state, dispatch] = useReducer(reducer, {
        ...initialState,
        filters,
        filterRowCount: filters.length
    });

    const filterRowCount = state.filterRowCount;

    const addFilterRow = (data) => {
        dispatch({ type: 'add', payload: data });
    };

    const removeFilterRow = (data) => {
        dispatch({ type: 'delete', payload: data });
    };

    const resetFilters = () => {
        dispatch({type: 'reset'});
    };

    const generateSql = () => {
        dispatch({type: 'generateSql'});
    };
    
    const predicateChanged = (predicate, rowItem) => {
        dispatch({
            type: 'predicateChanged',
            payload: {
                predicate,
                rowItem
            }
        });
    };

    const operatorChanged = (operator, rowItem) => { 
        dispatch({
            type: 'operatorChanged',
            payload: {
                operator,
                rowItem
            }
        });
    };

    const valueChanged = (value, rowItem, field = 'value') => { 
        dispatch({
            type: 'valueChanged',
            payload: {
                value,
                rowItem,
                field
            }
        });
    };

    const filterRowsValid = () => {
        let allFiltersValid = false;
        
        for (let i = 0; i < state.filters.length; ++i) {
            if (typeof state.filters[i].value === 'string') {
                allFiltersValid = state.filters[i].value !== '';
            } else if (typeof state.filters[i].value === 'object') {
                allFiltersValid = allFiltersValid && state.filters[i].value.startValue !== '' && state.filters[i].value.endValue !== '';
            }
        }

        return state.isValid = allFiltersValid;
    };

    return {
        state,
        dispatch,
        filterRowCount,
        resetFilters,
        addFilterRow,
        removeFilterRow,
        generateSql,
        predicateChanged,
        operatorChanged,
        valueChanged,
        filterRowsValid,
        sqlStatement: state.sqlStatement
    };
};

export {
    useFilterRowManager
};

