import React from 'react'
import styled from 'styled-components'
import { CircularButton } from './CircularButton'

type Props = {
    onClick?: () => void
}

const BottomLeftContent = styled.div`
    position: fixed;
    bottom: 40px;
    left: 210px;
`

export const AddButton = (props: Props) => (
    <BottomLeftContent>
        <CircularButton onClick={props.onClick}>+</CircularButton>
    </BottomLeftContent>
)
