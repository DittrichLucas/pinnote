import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ACCENT, PRIMARY } from '../theme/colours'

type Props = {
    children: React.ReactNode
}

const BORDER_WIDTH = 2

type FolderSetContainerProps = {
    isScrollingFromTop: boolean
    isScrollingFromBottom: boolean
}

const FolderSetContainer = styled.div`
    max-height: 450px;
    overflow: auto;
    border-top: ${BORDER_WIDTH}px solid ${(props: FolderSetContainerProps) => props.isScrollingFromTop
    ? '#888888'
    : 'transparent'
}
    border-bottom: ${BORDER_WIDTH}px solid ${(props: FolderSetContainerProps) => props.isScrollingFromBottom
    ? '#888888'
    : 'transparent'
}

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: ${PRIMARY};
    }

    ::-webkit-scrollbar-thumb {
        background: #888888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${ACCENT};
    }
`

export const FolderSet = (props: Props) => {
    const [scrollTop, setScrollTop] = useState(0)
    const [isScrollingFromTop, setIsScrollingFromTop] = useState(false)
    const [isScrollingFromBottom, setIsScrollingFromBottom] = useState(false)

    const onScroll = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as Element
        setScrollTop(target.scrollTop)
    }

    const containerRef = useRef<HTMLDivElement>()

    useEffect(() => {
        const isScrollingFromTop = scrollTop > 0
        const { scrollHeight, offsetHeight } = containerRef.current
        const isScrollingFromBottom = scrollTop !== scrollHeight - offsetHeight + BORDER_WIDTH * 2 // eslint-disable-line

        setIsScrollingFromBottom(isScrollingFromBottom)
        setIsScrollingFromTop(isScrollingFromTop)
    }, [scrollTop])

    return (
        <FolderSetContainer
            isScrollingFromBottom={isScrollingFromBottom}
            isScrollingFromTop={isScrollingFromTop}
            ref={containerRef}
            onScroll={onScroll}>
            {props.children}
        </FolderSetContainer>
    )
}
