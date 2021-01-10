import { v4 as uuidv4 } from 'uuid';
import {
    EQUALS
    // CONTAINS,
    // IN
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
        value: ''
    }
    /*
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
        value: 'foo.com, yes'
    },
    {
        id: uuidv4(),
        predicate: {
            label: 'User Name',
            value: 'user_name',
            type: 'string',
            placeholder: 'domain.com'
        },
        operator: {
            label: 'in list',
            value: 'in_list',
            sqlOperator: IN
        },
        value: 'foo, bar'
    },
    {
        id: uuidv4(),
        predicate: {
            label: 'Screen Width',
            value: 'screen_width',
            type: 'number',
            placeholder: '0'
        },
        operator: {
            label: 'contains',
            value: 'constains',
            sqlOperator: CONTAINS
        },
        value: 'Hello'
    },
    */
];

export {
    filters
};
  