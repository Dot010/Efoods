import styled from 'styled-components'
import { cores } from '../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const ContainerApresentacao = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px; 
  width: 100%;
  margin: 0 auto;  
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 32px;
`

export const Categoria = styled.span`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branco};
`