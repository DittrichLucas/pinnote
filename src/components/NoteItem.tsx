import React from 'react'
import styled from 'styled-components'

import { SECONDARY_TEXT, TEXT } from '../theme/colours'

type Props = {
    name: string
    onClick?: () => void
}

export const NoteItemContainer = styled.div`
    font-family: arial;
    background-color: #37DBD0;
    color: ${SECONDARY_TEXT};
    padding: 10px 15px 10px 15px;
    cursor: pointer;
    width: 200px;
    margin: 5px 0 5px 0;
    border-radius: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        background-color: #47EBE0;
    }

    &:active {
        background-color: #17BBB0;
        color: ${TEXT};
    }
`

export const NoteItem = (props: Props) => (
    <div onClick={props.onClick}>
        <NoteItemContainer>
            {props.name}
        </NoteItemContainer>
    </div>
)
