import { useReducer } from "react";
 
const initialState = {
    foodItems: [],
    generatedOutput: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'delicious':
            return {
                ...state,
                foodItems: state.foodItems.map((item, index) => {
                    if (index === action.payload.index) {
                        item.isDelicious = action.payload.isDelicious
                    }

                    return item;
                })
            }
        case 'healthy':
            return {
                ...state,
                foodItems: state.foodItems.map((item, index) => {
                    if (index === action.payload.index) {
                        item.isHealthy = action.payload.isHealthy
                    }

                    return item;
                })
            }
        case 'generateOutput':
            return {
                ...state,
                generatedOutput: generateOutput(state)
            };
        default:
            throw new Error('Missing food action type');
    }
};

const generateOutput = (state) => {
   const result = state.foodItems.map((item) => {
        return `{label: ${item.label}, IsDelicious: ${item.isDelicious}, isHealthy: ${item.isHealthy}}`
    })  
    return `[${result.toString()}]`;
}

const useFoodAppManager = ({
    foodItems
}) => {

    console.log('foodItems', foodItems);

    const [state, dispatch] = useReducer(reducer, {
        ...initialState,
        foodItems
    });
    
    const deliciousClicked = (checked, index) => {
        console.log('checked', checked);
        console.log('item', index);

        dispatch({
            type: 'delicious',
            payload: {
                index,
                isDelicious: checked
            }
        });
    };

    const healthyClicked = (checked, index) => {
        console.log('checked', checked);
        console.log('item', index);
        
        dispatch({
            type: 'healthy',
            payload: {
                index,
                isHealthy: checked
            }
        });
    };

    const generateOutput = () => {
        dispatch({type: 'generateOutput'});
    };

    return {
        state,
        dispatch,
        deliciousClicked,
        healthyClicked,
        generateOutput
    };
};

export {
    useFoodAppManager
};

