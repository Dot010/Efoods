import styled from 'styled-components'
import { cores } from '../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  width: 100%;
  background-color: ${cores.salmao};
  color: ${cores.branco};
  padding: 32px;
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 16px;
    max-height: 90vh;
    overflow-y: auto;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
      height: 180px;
    }
  }

  > div {
  
    flex-direction: column;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h4 {
    font-size: 18px;
    font-weight: 900;

  }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${cores.branco};
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const AddButton = styled.button`
  background-color: ${cores.branco};
  color: ${cores.salmao};
  border: none;
  padding: 4px 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  margin-top: auto;
  align-self: flex-start;
`