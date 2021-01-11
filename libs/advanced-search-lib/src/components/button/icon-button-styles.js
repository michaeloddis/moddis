import styled from 'styled-components';
import { rems } from '../../utils';

const IconButtonElement = styled.button`
    border: none;
    background-color: #ffffff;
    border-radius: 4px;
    height: ${rems('31')};
    width: ${rems('31')};
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #999999;
    cursor: pointer;

    :hover {
        color: #000000;
    }

    svg {
        width: ${rems('18')};
        height: ${rems('18')};
    }
`;

export {
    IconButtonElement
};
