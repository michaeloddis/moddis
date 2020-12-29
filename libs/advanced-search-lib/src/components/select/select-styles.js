import styled from 'styled-components';
import { rems } from '../../utils';

const SelectContainer = styled.div`
    position: relative;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
`;

const SelectList = styled.ul`
    position: absolute;
    list-style-type: none;
    background-color: #ffffff;
    border: solid 1px #eeeeee;
    border-radius: 4px;
    padding: ${rems('10')};
    margin-block-start: 0.5em;
    font-size: 0.9rem;
    display: ${props => props.display || 'none'};
    z-index: 10;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 1px;
`;

const SelectListItem = styled.li`
    padding: ${rems('4')};
    cursor: pointer;
    color: #666666;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    padding-left: ${rems('16')};
    margin-bottom: ${rems('8')};

    :last-child {
        margin-bottom: 0;
    }

    :hover {
        color: #000000;
    }
`;

export {
    SelectContainer,
    SelectList,
    SelectListItem
};
