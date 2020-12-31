import { v4 as uuidv4 } from 'uuid';
import {
    EQUALS,
    GREATER_THEN
    // LESS_THEN,
    // IN,
    // BETWEEN,
    // CONTAINS,
    // STARTS_WITH
} from './constants';

const filters = [
    {
        id: uuidv4(),
        predicate: {
            label: 'Domain',
            value: 'domain',
            type: 'string',
            placeholder: 'domain.com'
        },
        operator: {
            label: 'equals',
            value: 'equals',
            sqlOperator: EQUALS
        },
        value: 'foo.com'
    },
    {
        id: uuidv4(),
        predicate: {
            label: 'Screen Height',
            value: 'screen_height',
            type: 'number',
            placeholder: '0'
        },
        operator: {
            label: 'greater than',
            value: 'greater_than',
            sqlOperator: GREATER_THEN
        },
        value: 100
    }
];

export {
    filters
};
  