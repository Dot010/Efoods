import styled from "styled-components";
import lixeira from "../../assets/images/lixeira.png";
import { cores } from "../styles";

// Overlay escuro de fundo
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

// Contentor principal da barra lateral
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
`;

// Painel lateral
export const Sidebar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 32px 16px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto; 

  h2 {
    color: ${cores.fundo};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    color: ${cores.fundo};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`;

// Grupo de inputs (Rótulo + Campo + Erro)
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  

  label {
    color: ${cores.fundo};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    background-color: ${cores.fundo};
    border: none;
    height: 32px;
    padding: 0 8px;
    font-size: 14px;
    font-weight: bold;
    color: #4b4b4b;
    width: 100%;
    box-sizing: border-box;
    outline: none;
  }

  small {
    color: ${cores.fundo};
    margin-top: 4px;
    font-size: 12px;
  }
`;

// Linha flexível para campos lado a lado
type RowProps = {
  $columns?: string;
};

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: ${(props) => props.$columns || "1fr 1fr"};
  column-gap: 16px;
`;

// Agrupador de botões
export const ButtonGroup = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// Itens do Carrinho
export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${cores.fundo};
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
    color: ${cores.salmao};
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    color: ${cores.salmao};
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
`;

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.fundo};
`;

export const BotaoFinalizar = styled.button`
  background-color: ${cores.fundo};
  color: ${cores.salmao};
  border: none;
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;    