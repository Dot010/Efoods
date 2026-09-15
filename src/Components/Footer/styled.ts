import styled from "styled-components";
import Rectangle from "./../../assets/images/Rectangle.png";
import { cores } from "../styles";


export const FootContainer = styled.footer` /* Usar <footer> melhora o HTML semântico */
  background-image: url(${Rectangle});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 298px; /* Altura padrão do Footer no Figma */
  
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const Logo = styled.img` /* 2. Nome do componente renomeado para 'Logo' */
  width: 125px;
  height: auto;
`;

export const SocialIcons = styled.div`
display: flex;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
`
export const FooterText = styled.p`
  font-size: 10px;
  text-align: center;
  max-width: 480px;
  color: ${cores.salmao};
`