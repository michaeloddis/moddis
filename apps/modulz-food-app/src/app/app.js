import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import FoodAppContainer from './components/food-app-container';
import FoodAppFooter from './components/food-app-footer';
import { FoodList } from './components/food-list';
import { useFoodAppManager } from './hooks/use-food-app-manager';
import { foodDataProvider } from './food-data';
import FoodAppDataOutput from './components/food-app-data-output';

export const App = () => {
    const {
        state,
        deliciousClicked,
        healthyClicked,
        generateOutput
    } = useFoodAppManager({
        foodItems: foodDataProvider
    });

    return (
        <ThemeProvider theme={theme}>
            <FoodAppContainer>
                <FoodList
                    items={state.foodItems}
                    onDeliciousCheckboxClicked={deliciousClicked}
                    onHealthyCheckboxClicked={healthyClicked} />
                <FoodAppDataOutput output={state.generatedOutput} />
                <FoodAppFooter>
                    <button onClick={generateOutput}>Generate Raw Data</button>
                </FoodAppFooter>
            </FoodAppContainer>
        </ThemeProvider>
    );
};
export default App;
