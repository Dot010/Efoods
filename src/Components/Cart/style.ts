import styled from "styled-components"
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`

export const CartContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  justify-content: flex-end;

  &.is-Open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: #E66767;
  z-index: 1;
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: #FFEBD9;
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: #E66767;
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    color: #E66767;
    font-size: 14px;
    font-weight: 400;
    display: block;
  }

  button {
    background-image: url(${lixeira});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  color: #FFEBD9;
`

export const BotaoFinalizar = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`