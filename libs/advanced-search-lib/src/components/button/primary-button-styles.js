import styled from 'styled-components';
import { rems } from '../../utils';

const ButtonElement = styled.button`
    background-color: #40a7f0;
    border: solid 1px #40a7f0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-size: ${rems('16')};
    height: ${props => props.height};
    margin-right: ${props => props.marginRight};
    width: ${props => props.width};

    :hover {
        background-color: #3485be;
    }

    span {
        display: inline-flex;
    }
`;

export {
    ButtonElement
}
