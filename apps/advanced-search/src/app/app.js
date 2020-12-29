import React from 'react';
import {
    ApplicationTitle,
    ApplicationHeader,
    ApplicationContent,
    ApplicationFooter,
    ApplicationSql,
    PrimaryButton,
    SecondaryButton,
    SearchIcon,
    SearchFilterTray,
    SearchFilterRow,
    Flex,
    Box,

    // Utils
    rems,

    // Constants
    APPLICATION_TITLE,
    SEARCH_BUTTON_LABEL,
    RESET_BUTTON_LABEL,
    ADD_BUTTON_LABEL,

    // Data
    predicates,
    stringOperators,
    numberOperators,
    filters,
    defaultRowFilter,

    // Hooks
    useFilterManager
} from '@moddis/advanced-search-lib';

export const App = () => {
    const {
        state,
        addFilterRow,
        removeFilterRow,
        filterRowCount,
        resetFilters,
        predicateChanged,
        operatorChanged,
    } = useFilterManager({
        initialState: filters
    });

    console.log('In App with filters = ', state);

    const addFilterRowHandler = () => {
        addFilterRow({
            id: filterRowCount + 1,
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
        });
    };

    const searchHandler = () => {
        console.log('Applying search filter!');
    };

    const deleteHandler = (item) => {
        if (filterRowCount === 1) {
            resetFilters();
        } else {
            removeFilterRow(item);
        }
    };

    const resetHandler = () => {
        resetFilters();
    };

    const renderSearchFilterRows = () => {
        console.log('In renderSearchFilterRows() with state = ', state);

        return state.map((item, index) => {
            console.log('item = ', item);

            return (
                <SearchFilterRow 
                    key={index}
                    rowItem={item}
                    selectedPredicate={item.predicate || defaultRowFilter.predicate}
                    selectedOperator={item.operator || defaultRowFilter.operator}
                    predicates={predicates}
                    stringOperators={stringOperators}
                    numberOperators={numberOperators}
                    onDelete={deleteHandler}
                    onPredicateChange={predicateChanged}
                    onOperatorChange={operatorChanged} />
            )
        });
    };

    return (
        <ApplicationView>
            <ApplicationHeader>
                <ApplicationTitle>
                    {APPLICATION_TITLE}
                </ApplicationTitle>
            </ApplicationHeader>
            <ApplicationContent>
                <SearchFilterTray>
                    {renderSearchFilterRows()}
                </SearchFilterTray>
                <PrimaryButton
                    width={rems('60')}
                    onClick={addFilterRowHandler}>
                    {ADD_BUTTON_LABEL}
                </PrimaryButton>
            </ApplicationContent>
            <ApplicationFooter
                marginTop={rems('64')}
                paddingTop={rems('16')}>
                <Flex 
                    flexDirection='column' 
                    width='100%'>
                    <Box>
                        <PrimaryButton
                            width={rems('140')}
                            marginRight={rems('16')}
                            onClick={searchHandler}>
                            <SearchIcon />
                            {SEARCH_BUTTON_LABEL}
                        </PrimaryButton>
                        <SecondaryButton
                            onClick={resetHandler}>
                            {RESET_BUTTON_LABEL}
                        </SecondaryButton>
                    </Box>
                    <Box width='100%'>
                        <ApplicationSql width='100%' />
                    </Box>
                </Flex>
            </ApplicationFooter>
        </ApplicationView>
    );
};
export default App;
