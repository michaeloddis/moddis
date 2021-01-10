import styled from 'styled-components';
import { rems } from '../../utils';
import { Flex } from '../layout';

const SearchFilterRowContainer = styled(Flex)`
    border: solid 1px #cccccc;
    border-radius: 4px;
    padding: ${rems('16')};
    margin-bottom: ${rems('16')};
    width: ${props => props.width};
    background-color: #FFFFFF;
`;

const SearchOperatorLabelContaner = styled.div`
    background-color: #e0e6ed;
    border: solid 1px #cccccc;
    border-radius: 4px;
    width: ${props => props.width};
    height: ${props => props.height};
    text-align: center;
    padding: ${rems('5.5')} ${rems('10')};
`;

export {

    SearchFilterRowContainer,
    SearchOperatorLabelContaner
};
