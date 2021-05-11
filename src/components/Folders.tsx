import React from 'react'

import { FolderItem } from './FolderItem'
import { FolderSet } from './FolderSet'
import { Note } from './Notes'

export type Folder = {
    id: string
    name: string
    notes: Note[]
}

type Props = {
    folders: Folder[],
    onClickFolder?: (folder: Folder) => void
}

export const Folders = ({ folders, onClickFolder }: Props) => (
    <FolderSet>
        { folders.map((folder) => (
            <FolderItem
                key={ folder.id }
                name={ folder.name }
                onClick={ () => onClickFolder?.(folder) }
            />
        ))}
    </FolderSet>
)
