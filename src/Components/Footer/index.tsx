import { FootContainer, FooterText, Logo, SocialIcons } from "./styled"
import logoImg from "./../../assets/images/logo.png"
import Insta from "./../../assets/images/instagram.png"
import Face from "./../../assets/images/facebook.png"
import Twitter from "./../../assets/images/twitter.png"

const Footer = () => (
  <FootContainer>
        <Logo src={logoImg} alt="Logo" />
        <SocialIcons>
        <li>
            <a href="">
                <img src={Insta} alt="Instagram" />
            </a>
        </li>
        <li>
            <a href="">
                <img src={Face} alt="Facebook" />
            </a>
        </li>
        <li>    
        <a href="">
                <img src={Twitter} alt="Twitter" />
            </a>
        </li>
        </SocialIcons>
        <FooterText> A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </FooterText>
  </FootContainer>
);

export default Footer