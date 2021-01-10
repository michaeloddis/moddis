import styled from 'styled-components';
import { rems } from '../../utils';

const TextInputElement = styled.input`
    border: solid 1px #cccccc;
    border-radius: 4px;
    padding-left: ${rems('8')};
    padding-right: ${rems('8')};
    padding-bottom: ${rems('0')};
    height: ${rems('31')};
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    box-sizing: border-box;

    ::placeholder {
        color: #cccccc;
        font-style: italic;
    }
`;

export {
    TextInputElement
}
