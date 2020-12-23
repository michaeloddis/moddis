import React, { useContext } from 'react';
import { rems } from '../components/utils';
import {
  ApplicationView,
  ApplicationTitle,
  ApplicationHeader,
  ApplicationContent,
  ApplicationFooter,
} from '../components/application';
import { Search, SearchFilterRow } from '../components/search';
import {
  PrimaryButton,
  SecondaryButton,
  SearchIcon,
} from '../components/button';
import {
  APPLICATION_TITLE,
  SEARCH_BUTTON_LABEL,
  RESET_BUTTON_LABEL,
  ADD_BUTTON_LABEL,
} from '../components/constants';

// import { ApplicationView } from '@moddis/components/application-view';

const applicationModel = {
  searchFilterRowItems: [<SearchFilterRow key="row1" />],
};

const ApplicationContext = React.createContext(applicationModel);

export const App = () => {
  const context = useContext(ApplicationContext);

  const addSearchFilterRow = () => {
    context.searchFilterRowItems.push(<SearchFilterRow key="row2" />);
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
