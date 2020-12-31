import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../../utils';
import { Flex } from '../layout';

const ApplicationSqlContainer = styled(Flex)`
    border: solid 1px #cccccc;
    background-color: #ffffff;
    border-radius: 4px;
    color: #333333;
    font-size: ${rems('16')};
    margin-top: ${rems('32')};
    min-height: ${rems('90')};
    padding: ${rems('16')};
`;

const Output = styled.p`
    color: #666666;
    font-size: ${rems('14')};
    font-style: italic;
    text-align: center;
    width: 100%;
`;

const ApplicationSql = (props) => {
    const { width, sql } = props;
    const generatedSql = sql ? sql : 'Your generated SQL statement goes here:'
 
    return (
        <ApplicationSqlContainer
            id='application-sql'
            alignItems='center'
            justifyContent='center'
            width={width}>
            <Output>{generatedSql}</Output>
        </ApplicationSqlContainer>
    );
};

ApplicationSql.propTypes = {
    width: PropTypes.string,
    sql: PropTypes.string
};

ApplicationSql.defaultProps = {
    sql: ''
};

export {
    ApplicationSql
};
