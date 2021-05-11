import React from 'react'
import { CircularButton } from './CircularButton'
import { Triangle } from './Triangle'

type Props = {
    onClick?: () => void
}

export const BackButton = ({ onClick }: Props) => (
    <CircularButton onClick={ onClick }>
        <Triangle />
    </CircularButton>
)
