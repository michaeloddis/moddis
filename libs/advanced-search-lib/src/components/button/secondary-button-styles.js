import styled from 'styled-components';
import { rems } from '../../utils';

const ButtonElement = styled.button`
    background-color: #a8b5c6;
    border: solid 1px #a8b5c6;
    border-radius: 4px;
    height: ${rems('45')};
    width: ${rems('100')};
    font-size: ${rems('16')};
    min-width: ${rems('60')};
    box-sizing: border-box;
    color: #FFFFFF;
    padding-left: ${rems('16')};
    padding-right: ${rems('16')};
    margin-right: ${props => props.marginRight};
    cursor: pointer;

    :hover {
        background-color: #97a3b3;
    }
`;

export {
    ButtonElement
};
