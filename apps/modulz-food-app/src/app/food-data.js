const foodData = {
    e5d9d9f5: {
      label: 'ice cream',
      isDelicious: true,
      isHealthy: false,
    },
    a9ba692b: {
      label: 'pizza',
      isDelicious: true,
      isHealthy: false,
    },
    ze128a47: {
      label: 'spinach',
      isDelicious: false,
      isHealthy: true,
    },
}

// Map the foodData to an array by getting the value ojects and mapping a new object which contains an id based on the index of foodData keys.
const foodDataItems = Object.values(foodData).map((item, index) => {
    return { ...item, id: Object.keys(foodData)[index] }
});

const foodDataProvider = foodDataItems;

export {
    foodDataProvider
};
