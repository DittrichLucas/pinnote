import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import { SECONDARY, SECONDARY_TEXT } from '../theme/colours'

const ESCAPE = 'Escape'
const ENTER = 'Enter'

type Props = {
    onAddFolder?: (name: string) => void
    onEscape?: () => void
}

const InputStyled = styled.input`
    font-family: arial;
    background-color: ${SECONDARY};
    color: ${SECONDARY_TEXT};
    padding: 10px 15px 10px 15px;
    width: 200px;
    margin: 5px 0 5px 0;
    border-radius: 5px;
    outline: none;
`

export const AddFolderInput = forwardRef(
    ({ onAddFolder, onEscape }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
        const [value, setValue] = useState('')

        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
        }

        const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === ESCAPE) {
                onEscape?.()
            } else if (event.key === ENTER) {
                if (value.trim() !== '') {
                    onAddFolder?.(value)
                }
            }
        }

        return (
            <InputStyled
                type="text"
                value={ value }
                ref={ ref }
                onChange={ onChange }
                onKeyUp={ onKeyUp }
            />
        )
    }
)

AddFolderInput.displayName = 'AddFolderInput'
