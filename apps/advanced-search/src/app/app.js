import React from 'react';
import {
    // Components
    ApplicationView,
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

    // Hooks
    useFilterRowManager
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
        generateSql,
        sqlStatement
    } = useFilterRowManager({
        filters
    });

    console.log('In App with state = ', state);

    const deleteHandler = (item) => {
        if (filterRowCount === 1) {
            resetFilters();
        } else {
            removeFilterRow(item);
        }
    };

    const renderSearchFilterRows = () => {
        // console.log('In renderSearchFilterRows() with state = ', state);
        const filters = state.filters || [];

        return filters.map((item, index) => {
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
                    onClick={addFilterRow}>
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
                            onClick={generateSql}>
                            <SearchIcon />
                            {SEARCH_BUTTON_LABEL}
                        </PrimaryButton>
                        <SecondaryButton
                            onClick={resetFilters}>
                            {RESET_BUTTON_LABEL}
                        </SecondaryButton>
                    </Box>
                    <Box width='100%'>
                        <ApplicationSql
                            width='100%'
                            sql={sqlStatement} />
                    </Box>
                </Flex>
            </ApplicationFooter>
        </ApplicationView>
    );
};
export default App;
