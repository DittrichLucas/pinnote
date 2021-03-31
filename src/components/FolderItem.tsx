import React from 'react'
import styled from 'styled-components'

import { SECONDARY, SECONDARY_ACTIVE, SECONDARY_HOVER, SECONDARY_TEXT, TEXT } from '../theme/colours'

type Props = {
    name: string
    onClick?: () => void
}

export const FolderItemContainer = styled.div`
    font-family: arial;
    background-color: ${SECONDARY};
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
        background-color: ${SECONDARY_HOVER};
    }

    &:active {
        background-color: ${SECONDARY_ACTIVE};
        color: ${TEXT};
    }
`

export const FolderItem = (props: Props) => (
    <div onClick={props.onClick}>
        <FolderItemContainer>
            {props.name}
        </FolderItemContainer>
    </div>
)
