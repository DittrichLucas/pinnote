import React from 'react'
import styled from 'styled-components'
import { SECONDARY, SECONDARY_ACTIVE, SECONDARY_HOVER, SECONDARY_TEXT, TEXT } from '../theme/colours'

type Props = {
    children: React.ReactNode
    onClick?: () => void
}

export const CircularButtonContainer = styled.button`
    width: 50px;
    height: 50px;
    font-family: arial;
    font-size: 40px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    background-color:${SECONDARY};
    color: ${SECONDARY_TEXT};
    outline: none;
    margin: 5px;

    > * {
        margin: auto;
    }

    &:hover {
        background-color: ${SECONDARY_HOVER};
    }

    &:active {
        background-color: ${SECONDARY_ACTIVE};
        color: ${TEXT};
    }
`

export const CircularButton = (props: Props) => (
    <CircularButtonContainer onClick={props.onClick}>
        {props.children}
    </CircularButtonContainer>
)
