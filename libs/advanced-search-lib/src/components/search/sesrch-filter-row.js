import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../../utils';
import { Flex } from '../layout';
import { TextInput } from '../text-input';
import { IconButton } from '../button';
import { Select } from '../select';
import { Box } from '../layout';
import { FaTimes } from "react-icons/fa";

const SearchFilterRowContainer = styled(Flex)`
    border: solid 1px #dddddd;
    border-radius: 4px;
    padding: ${rems('16')};
    margin-bottom: ${rems('16')};
    width: ${props => props.width};
    background-color: #FFFFFF;
`;

const SearchFilterRow = (props) => {
    const {
        width,
        predicates,
        stringOperators,
        numberOperators,
        onPredicateChange,
        onOperatorChange
    } = props;
    const [operators, setOperators] = useState(stringOperators);

    const onPredicateChangeHandler = (item) => {
        const operatorOptions = item.type === 'string' ? stringOperators : numberOperators;
        setOperators(operatorOptions);

        if (onPredicateChange) {
            onPredicateChange(item);
        }
    };

    const onOperatorChangeHandler = (item) => {
        if (onOperatorChange) {
            onOperatorChange(item);
        }
    };
 
    return (
        <SearchFilterRowContainer width={width}>
            <Box padding={rems('4')}>
                <IconButton>
                    <FaTimes />
                </IconButton>
            </Box>
            <Box padding={rems('4')}>
                <Select
                    minWidth={rems('250')}
                    options={predicates}
                    onChange={onPredicateChangeHandler} />
            </Box>
            <Box padding={rems('4')}>
                <Select
                    onChange={onOperatorChangeHandler}
                    options={operators} />
             </Box>
            <Box padding={rems('4')}>
                <TextInput
                    placeholder='domain.com' 
                    name='domain' 
                    value='' />
            </Box>
        </SearchFilterRowContainer>
    );
};

SearchFilterRow.propTypes = {
    predicates: PropTypes.array.isRequired,
    stringOperators: PropTypes.array.isRequired,
    numberOperators: PropTypes.array.isRequired,
    width: PropTypes.string,

    // Event handlers
    onPredicateChange: PropTypes.func,
    onOperatorChange: PropTypes.func
};

SearchFilterRow.defaultProps = {
    width: '100%'
};

export {
    SearchFilterRow
};