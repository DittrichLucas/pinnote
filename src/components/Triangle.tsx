import styled from 'styled-components'
import { SECONDARY_TEXT } from '../theme/colours'

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent ${SECONDARY_TEXT} transparent transparent;
    margin-right: 16px;
`
