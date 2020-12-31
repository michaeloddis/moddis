import {
    GREATER_THEN,
    LESS_THEN,
    EQUALS,
    BETWEEN,
    CONTAINS,
    STARTS_WITH,
    IN
} from './constants';

const predicates = [
    {
        label: 'Domain',
        value: 'domain',
        type: 'string',
        placeholder: 'domain.com'
    },
    {
      label: 'Screen Width',
      value: 'screen_width',
      type: 'number',
      placeholder: '0'
    },
    {
      label: 'Screen Height',
      value: 'screen_height',
      type: 'number',
      placeholder: '0'
    },
    {
      label: '# of Visits',
      value: 'visits',
      type: 'number',
      placeholder: '0'
    },
    {
        label: 'First Name',
        value: 'first_name',
        type: 'string',
        placeholder: 'Enter First Name'
    },
    {
        label: 'Last Name',
        value: 'last_name',
        type: 'string',
        placeholder: 'Enter Last Name'
    },
    {
        label: 'Page Response Time (ms)',
        value: 'page_response',
        type: 'number',
        placeholder: '100ms'
    },
    {
        label: 'Page Path',
        value: 'path',
        type: 'string',
        placeholder: '/path/to/page'
    },
    {
      label: 'User Email',
      value: 'user_email',
      type: 'string',
      placeholder: 'user@domain.com'
    }
  ];

  const stringOperators = [
    {
      label: 'equals',
      value: 'equals',
      sqlOperator: EQUALS
    },
    {
      label: 'contains',
      value: 'constains',
      sqlOperator: CONTAINS
    },
    {
      label: 'starts with',
      value: 'starts_width',
      sqlOperator: STARTS_WITH
    },
    {
      label: 'in list',
      value: 'in_list',
      sqlOperator: IN
    }
  ];

  const numberOperators = [
    {
      label: 'equals',
      value: 'equals',
      sqlOperator: EQUALS
    },
    {
      label: 'between',
      value: 'between',
      sqlOperator: BETWEEN
    },
    {
      label: 'greater than',
      value: 'greater_than',
      sqlOperator: GREATER_THEN
    },
    {
        label: 'less than',
        value: 'less_than',
        sqlOperator: LESS_THEN
    },
    {
        label: 'in list',
        value: 'in_list',
        sqlOperator: IN
    }
  ];

  export {
    predicates,
    stringOperators,
    numberOperators
  };
  