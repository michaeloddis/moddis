const defaultRowFilter = {
    id: 0,
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
};

const filters = [
    {
        id: 0,
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
    }
];

export {
    filters,
    defaultRowFilter
};
  