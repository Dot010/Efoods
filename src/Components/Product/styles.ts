import styled from 'styled-components'
import { cores } from '../styles'

type VariantProps = {
  $variant?: 'home' | 'perfil'
}

export const Card = styled.div<VariantProps>`
  background-color: ${(props) =>
    props.$variant === 'perfil' ? cores.salmao : cores.branco};
  color: ${(props) =>
    props.$variant === 'perfil' ? cores.branco : cores.salmao};
  border: 1px solid ${cores.salmao};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${(props) => (props.$variant === 'perfil' ? '8px' : '0')};

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${cores.salmao};
  color: ${cores.branco};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`

export const ContainerConteudo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3<VariantProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.$variant === 'perfil' ? cores.branco : cores.salmao};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.salmao};
`

export const Descricao = styled.p<VariantProps>`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  color: ${(props) =>
    props.$variant === 'perfil' ? cores.branco : cores.salmao};
`

export const BotaoSaibaMais = styled.button<VariantProps>`
  background-color: ${(props) =>
    props.$variant === 'perfil' ? cores.branco : cores.salmao};
  color: ${(props) =>
    props.$variant === 'perfil' ? cores.salmao : cores.branco};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  margin-top: auto;
  width: ${(props) => (props.$variant === 'perfil' ? '100%' : 'auto')};
  align-self: ${(props) =>
    props.$variant === 'perfil' ? 'stretch' : 'flex-start'};
`