import {
    GREATER_THEN,
    LESS_THEN,
    EQUALS,
    BETWEEN,
    CONTAINS,
    STARTS_WITH,
    IN
} from '../common';

// Equals: SELECT * FROM session WHERE domain = '';
// Greater Then: SELECT * FROM session WHERE screen_width > 100;
// Less Then: SELECT * FROM session WHERE screen_width < 100;
// Between: SELECT * FROM session WHERE screen_width BETWEEN 0 AND 0;
// In: SELECT * FROM session WHERE screen_width IN (value1, value2, ...);
// Contains: SELECT * FROM session WHERE screen_width LIKE '%value%';
// Starts With: SELECT * FROM session WHERE screen_width LIKE 'value%';
// Equals and greater then: SELECT * FROM session WHERE domain = '' AND domain < 100;
const determineSqlStatement = (state) => {
    const { filters } = state;
    const regex = /,/gi;
    const regex2 = /\|/gi;
    
    let select = `SELECT * FROM SESSION WHERE`;

    // Loop though all the filters in order to map the SQL Where clauses used by the sql statement.
    let whereClauses = filters.map((item) => {
        const {
            predicate: {
                value: column
            },
            operator: {
                sqlOperator
            },
            value
        } = item;

        let whereClause = ``;

        switch (sqlOperator) {
            case GREATER_THEN:
                whereClause = `${column.toUpperCase()} > ${value}`;
                break;
            case LESS_THEN:
                whereClause = `${column.toUpperCase()} < ${value}`;
                break;
            case EQUALS:
                whereClause = `${column.toUpperCase()} = '${value.replace(regex, '|')}'`;
                break;
            case BETWEEN:
                whereClause = `${column.toUpperCase()} BETWEEN ${value.startValue} AND ${value.endValue}`;
                break;
            case IN:
                whereClause = `${column.toUpperCase()} IN (${value.replace(regex, '|')})`;
                break;
            case CONTAINS:
                whereClause = `${column.toUpperCase()} LIKE '%${value}%'`;
                break;
            case STARTS_WITH:
                whereClause = `${column.toUpperCase()} LIKE '${value}%'`;
                break;
            default:
                throw new Error('Missing SQL Operator');
        }

        return whereClause;

    });

    let formattedWhereClauses = whereClauses.toString().replace(regex, ' AND ');
    formattedWhereClauses = formattedWhereClauses.toString().replace(regex2, ',');

    return `${select} ${formattedWhereClauses};`;
};

export {
    determineSqlStatement
}
