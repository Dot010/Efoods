import styled from 'styled-components'
import { cores } from '../styles'
import fundoImg from '../../assets/images//Rectangle.png' 

type ContainerProps = {
  $variant?: 'home' | 'perfil'
}

export const HeroContainer = styled.header<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.$variant === 'perfil' ? '186px' : '384px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${fundoImg});
  background-repeat: repeat;
  background-size: cover;
`

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  a, span {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.salmao};
    
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${cores.salmao};
  margin-top: 138px;
`