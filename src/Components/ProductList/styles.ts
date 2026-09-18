import styled from 'styled-components'

type ListProps = {
  $variant?: 'home' | 'restaurante' | 'perfil'
}

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 120px;

`

export const List = styled.ul<ListProps>`
  display: grid;
  
  grid-template-columns: ${(props) =>
    props.$variant === 'perfil' ? 'repeat(3, 1fr)' : '1fr 1fr'};
  gap: ${(props) => (props.$variant === 'perfil' ? '32px' : '48px 80px')};
  list-style: none;
`