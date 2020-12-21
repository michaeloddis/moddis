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
      placeholder: ''
    },
    {
      label: 'Screen Height',
      value: 'screen_height',
      type: 'number'
    },
    {
      label: '# of Visits',
      value: 'visits',
      type: 'number',
      placeholder: '# of Visits'
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
      placeholder: ''
    }
  ];

  const stringOperators = [
    {
      label: 'equals',
      value: 'equals'
    },
    {
      label: 'contains',
      value: 'constains',
    },
    {
      label: 'starts with',
      value: 'starts-width'
    },
    {
      label: 'in list',
      value: 'in-list'
    }
  ];

  const numberOperators = [
    {
      label: 'equals',
      value: 'equals'
    },
    {
      label: 'between',
      value: 'between',
    },
    {
      label: 'greater than',
      value: 'greater-than'
    },
    {
        label: 'less than',
        value: 'less-than'
    },
    {
        label: 'greater than',
        value: 'greater-than'
    }
  ];

  export {
    predicates,
    stringOperators,
    numberOperators
  }