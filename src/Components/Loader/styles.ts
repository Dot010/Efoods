import styled from 'styled-components'
import { cores } from '../styles'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  gap: 12px;

  h3 {
    color: ${cores.salmao};
    font-size: 16px;
    font-weight: 700;
  }
`