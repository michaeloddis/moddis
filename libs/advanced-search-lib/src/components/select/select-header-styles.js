import styled from 'styled-components';
import { rems } from '../../utils';

const SelectHeaderContainer = styled.div`
    border: solid 1px #cccccc;
    border-radius: 4px;
    padding: ${rems('6')};
    cursor: pointer;
    font-size: ${rems('14')};
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    background-color: #FFFFFF;
`;
const SelectLabel = styled.span`
    width: 90%;
    display: inline-block;
`;

export {
    SelectHeaderContainer,
    SelectLabel
};
