import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { determineSqlStatement } from '../common/sql-generator';
 
const initialState = {
    filters: [{
        id: 0,
        predicate: {
            label: 'Domain',
            value: 'domain',
            type: 'string',
            placeholder: 'domain.com'
        },
        operator: {
            label: 'equals',
            value: 'equals',
            sqlOperator: 'EQUALS'
        },
        value: 'foo.com'
    }],
    filterRowCount: 1,
    sqlStatement: ''
};

const reducer = (state, action) => {
    let selectedIndex = null;
    let seedFilterRowItem = null;
    let filters = null;

    switch (action.type) {
        case 'add':
            seedFilterRowItem = { ...initialState.filters[0] };
            seedFilterRowItem.id = uuidv4();

            return {
                ...state,
                filters: [ ...state.filters, seedFilterRowItem ],
                filterRowCount: state.filterRowCount + 1
            };
        case 'delete':
            selectedIndex = state.filters.indexOf(action.payload);
            console.log('selectedIndex = ', selectedIndex);
            console.log('filters = ', [ ...state.filters.slice(0, selectedIndex), ...state.filters.slice(selectedIndex + 1, state.length) ]);

            return {
                ...state,
                filters: [ ...state.filters.slice(0, selectedIndex), ...state.filters.slice(selectedIndex + 1, state.length) ],
                filterRowCount: state.filterRowCount - 1
            };
        case 'reset':
            filters = [ ...initialState.filters ];
            filters[0].id = uuidv4();

            return {
                ...initialState,
                filters
            };
        case 'predicateChanged':
            return {
                ...state
            };
        case 'operatorChanged':
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
        filters
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
    
    const predicateChanged = (predicate) => {
        dispatch({type: 'predicateChanged', payload: predicate });
    };

    const operatorChanged = (operator) => {
        dispatch({type: 'operatorChanged', payload: operator });
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
        sqlStatement: state.sqlStatement
    };
};

export {
    useFilterRowManager
};

