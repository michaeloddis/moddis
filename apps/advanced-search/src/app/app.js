import React from 'react';
import { rems } from '../components/utils';
import {
  ApplicationView,
  ApplicationTitle,
  ApplicationHeader,
  ApplicationContent,
  ApplicationFooter
} from '../components/application';
import { Select } from '../components/select';
import { Box } from '../components/layout';
import { Search, SearchFilterRow } from '../components/search';
import { TextInput } from '../components/text-input';
import { PrimaryButton, SecondaryButton, IconButton, SearchIcon } from '../components/button';
import { predicates, stringOperators } from '../components/filter-options';
import { FaTimes } from "react-icons/fa";

export const App = () => {
  return (
    <ApplicationView>
        <ApplicationHeader>
          <ApplicationTitle>Search for Sessions</ApplicationTitle>
        </ApplicationHeader>
        <ApplicationContent>
          <Search>
            <SearchFilterRow>
              <Box padding={rems('4')}>
                <IconButton>
                  <FaTimes />
                </IconButton>
              </Box>
              <Box padding={rems('4')}>
                <Select
                  minWidth={rems('250')}
                  options={predicates} />
              </Box>
              <Box padding={rems('4')}>
                <Select
                  options={stringOperators} />
              </Box>
              <Box padding={rems('4')}>
                <TextInput
                  placeholder='domain.com' 
                  name='domain' 
                  value='' />
              </Box>
            </SearchFilterRow>
            <SearchFilterRow>
              <Box padding={rems('4')}>
                <IconButton>
                  <FaTimes />
                </IconButton>
              </Box>
              <Box padding={rems('4')}>
                <Select
                  minWidth={rems('250')}
                  options={predicates} />
              </Box>
              <Box padding={rems('4')}>
                <Select
                  options={stringOperators} />
              </Box>
              <Box padding={rems('4')}>
                <TextInput
                  placeholder='domain.com' 
                  name='domain' 
                  value='' />
              </Box>
            </SearchFilterRow>
          </Search>
        </ApplicationContent>
        <ApplicationFooter>
          <PrimaryButton>
            <SearchIcon />
            Search
          </PrimaryButton>
          <SecondaryButton>Reset</SecondaryButton>
        </ApplicationFooter>
    </ApplicationView>
  );
};
export default App;
