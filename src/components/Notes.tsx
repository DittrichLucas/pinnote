import React from 'react'

import { NoteItem } from './NoteItem'
import { FolderSet } from './FolderSet'

import { BackButton } from './BackButton'

export type Note = {
    id: string
    name: string
}

type Props = {
    notes: Note[]
    onClickBack?: () => void
}

export const Notes = ({ notes, onClickBack }: Props) => (
    <FolderSet>
        { notes.map((note) => (
            <NoteItem
                key={ note.id }
                name={ note.name }
            />
        ))}
        <BackButton onClick={ onClickBack } />
    </FolderSet>
)
