import React, { useContext } from 'react';
import {
  APPLICATION_TITLE,
  SEARCH_BUTTON_LABEL,
  RESET_BUTTON_LABEL,
  ADD_BUTTON_LABEL,
} from './components/constants';
import {
    predicates,
    stringOperators,
    numberOperators
} from './components/filter-options';
import {
  rems,
  ApplicationView,
  ApplicationTitle,
  ApplicationHeader,
  ApplicationContent,
  ApplicationFooter,
  PrimaryButton,
  SecondaryButton,
  SearchIcon,
  Search,
  SearchFilterRow
} from '@moddis/advanced-search-lib';

const applicationModel = {
  searchFilterRowItems: [
    <SearchFilterRow 
      key="row1"
      predicates={predicates}
      stringOperators={stringOperators}
      numberOperators={numberOperators} />
  ]
};

const ApplicationContext = React.createContext(applicationModel);

export const App = () => {
  const context = useContext(ApplicationContext);

  const addSearchFilterRow = () => {
    console.log('Adding new search filter!');
  };

  const searchHandler = () => {
    console.log('Applying search filter!');
  };

  const resetHandler = () => {
    console.log('Resetting search filter!');
  };

  const renderSearchFilterRows = () => {
    return context.searchFilterRowItems;
  };

  return (
    <ApplicationContext.Provider>
      <ApplicationView>
        <ApplicationHeader>
          <ApplicationTitle>{APPLICATION_TITLE}</ApplicationTitle>
        </ApplicationHeader>
        <ApplicationContent>
          <Search>{renderSearchFilterRows()}</Search>
          <PrimaryButton width={rems('30')} onClick={addSearchFilterRow}>
            {ADD_BUTTON_LABEL}
          </PrimaryButton>
        </ApplicationContent>
        <ApplicationFooter marginTop={rems('16')}>
          <PrimaryButton onClick={searchHandler}>
            <SearchIcon />
            {SEARCH_BUTTON_LABEL}
          </PrimaryButton>
          <SecondaryButton onClick={resetHandler}>
            {RESET_BUTTON_LABEL}
          </SecondaryButton>
        </ApplicationFooter>
      </ApplicationView>
    </ApplicationContext.Provider>
  );
};
export default App;
