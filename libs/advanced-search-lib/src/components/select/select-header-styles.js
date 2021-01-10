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
    width: 92%;
    display: inline-block;
    float: left;
`;

const IconWrapper = styled.span`
    padding-right: ${props => props.paddingRight};
    display: inline-block;
    cursor: pointer;
    border: solid 0px #ffffff;
    height: 16px;

    svg {
        width: 12px;
        height: 12px;
        fill: #999999;
    }
`;

export {
    SelectHeaderContainer,
    SelectLabel,
    IconWrapper
};
