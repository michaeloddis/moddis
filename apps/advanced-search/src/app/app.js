import React from 'react';
import {
    // Components
    ApplicationContainer,
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
        valueChanged,
        generateSql,
        sqlStatement,
        filterRowsValid
    } = useFilterRowManager({
        filters
    });

    const deleteHandler = (item) => {
        if (filterRowCount === 1) {
            resetFilters();
        } else {
            removeFilterRow(item);
        }
    };

    const renderSearchFilterRows = () => {
        const filters = state.filters || [];

        return filters.map((item, index) => {
            return (
                <SearchFilterRow 
                    key={index}
                    rowItem={item}
                    selectedPredicate={item.predicate}
                    selectedOperator={item.operator}
                    predicates={predicates}
                    stringOperators={stringOperators}
                    numberOperators={numberOperators}
                    onDelete={deleteHandler}
                    onPredicateChange={predicateChanged}
                    onOperatorChange={operatorChanged}
                    onValueChange={valueChanged} />
            )
        });
    };

    return (
        <ApplicationContainer>
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
                    height={rems('35')}
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
                        <Flex 
                            flexWrap='nowrap'
                            width='100%'>
                            <Box>
                                <PrimaryButton
                                    disabled={!filterRowsValid()}
                                    width={rems('140')}
                                    marginRight={rems('16')}
                                    onClick={generateSql}>
                                    <SearchIcon />
                                    {SEARCH_BUTTON_LABEL}
                                </PrimaryButton>
                            </Box>
                            <Box>
                                <SecondaryButton
                                    onClick={resetFilters}>
                                    {RESET_BUTTON_LABEL}
                                </SecondaryButton>
                            </Box>
                        </Flex>
                    </Box>
                    <Box width='100%'>
                        <ApplicationSql
                            width='100%'
                            sql={sqlStatement} />
                    </Box>
                </Flex>
            </ApplicationFooter>
        </ApplicationContainer>
    );
};
export default App;
