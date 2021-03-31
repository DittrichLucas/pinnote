import React, { useState } from 'react'
import styled from 'styled-components'
import { PRIMARY, TEXT } from '../theme/colours'
import { FolderItem } from './FolderItem'
import { AddButton } from './AddButton'
import { Drawer } from './Drawer'

type Props = {
    title: string
}

const SideBarContainer = styled.div`
    background: ${PRIMARY};
    display: inline-block;
    min-height: 100vh;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
    box-shadow: 0 0 10px #333333;
`

const Title = styled.h1`
    color: ${TEXT}
`

export const SideBar = (props: Props) => {
    const [visible, setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }

    return (
        <SideBarContainer>
            <Title>{props.title}</Title>
            <FolderItem name="Do not forget" onClick={showDrawer} />
            <FolderItem name="Very Important" />
            <FolderItem name="Things to buy" />
            <FolderItem name="This is a very very very very long boy" />
            <AddButton name="+" onClick={() => alert('clicked!')} />
            <Drawer
                title="Drawer"
                onClose={onClose}
                visible={visible}
                closable={false}
            />
        </SideBarContainer>
    )
}
