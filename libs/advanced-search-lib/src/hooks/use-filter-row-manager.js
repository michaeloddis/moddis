import { useState } from "react";

const useFilterRowManager = ({
    initialState
}) => {
    const [state, stateState] = useState(initialState);

    const addFilterRow = (item) => {
        stateState([ ...state, item ]);
    };

    const removeFilterRow = (item) => {
        const selectedIndex = state.indexOf(item); 
        stateState([ ...state.slice(0, selectedIndex), ...state.slice(selectedIndex + 1, state.length) ]);
    };

    const resetFilters = () => {
        const filter = [{
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
                sqlOperator: '='
            },
            value: ''
        }];

        stateState(filter);
    };
    
    const predicateChanged = (item) => {
        console.log('in predicateChanged = ', item);
    };

    const operatorChanged = (item) => {
        console.log('in operatorChanged = ', item);
    };

    return {
        state,
        stateState,
        filterRowCount: state.length,
        resetFilters,
        addFilterRow,
        removeFilterRow,
        predicateChanged,
        operatorChanged
    };
};

export {
    useFilterRowManager
};

