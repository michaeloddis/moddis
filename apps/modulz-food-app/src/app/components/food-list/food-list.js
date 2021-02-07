import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Flex } from '../layout';
import FoodListItem from './food-list-item';
import { Checkbox } from '../checkbox';
import { Text } from '../text';
import { v4 as uuidv4 } from 'uuid';

const FoodList = (props) => {
    const {
        items,
        onDeliciousCheckboxClicked,
        onHealthyCheckboxClicked,
        ...remainingProps
    } = props;

    const containerProps = {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        ...remainingProps
    }

    const renderFoodListItems = () => {
        const foodItems = items || [];

        return foodItems.map((item, index) => {
            let id = uuidv4();
    
            return (
                <FoodListItem
                    paddingLeft={determineFoodItemPadding(item)}
                    backgroundColor={determineFoodItemBackgroundColor(item)}
                    key={index}>
                    <Checkbox 
                        id={`deliciousCheckbox-${id}`}
                        name='Delicious'
                        value={item.isDelicious.toString()}
                        isChecked={item.isDelicious}
                        labelColor={determineFoodItemLabelColor(item)}
                        onChange={(checked) => onDeliciousCheckboxClicked(checked, index)} />
                    <Checkbox
                        id={`healthlyCheckbox-${id}`}
                        name='Healthy'
                        value={item.isHealthy.toString()}
                        isChecked={item.isHealthy}
                        labelColor={determineFoodItemLabelColor(item)}
                        onChange={(checked) => onHealthyCheckboxClicked(checked, index)} />
                    <Text color={determineFoodItemLabelColor(item)}>{item.label}</Text>
                </FoodListItem>
            )
        });
    };

    const determineFoodItemPadding = (item) => {
        return item.isDelicious ? '30px' : '8px';
    };

    const determineFoodItemBackgroundColor = (item) => {
        return item.isHealthy ? 'green' : 'gray';
    };

    const determineFoodItemLabelColor = (item) => {
        return item.isHealthy ? 'white' : 'charcoal'
    };

    return (
        <Flex { ...containerProps }>
            {renderFoodListItems()}
        </Flex>
    );
};

FoodList.propTypes = {
    items: PropTypes.array,
    onDeliciousCheckboxClicked: PropTypes.func,
    onHealthyCheckboxClicked: PropTypes.func
};

export default withTheme(FoodList);
