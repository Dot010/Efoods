import { Link } from 'react-router-dom'
import { HeroContainer, HeaderBar, Logo, Titulo } from './style'
import LogoImage from '../../assets/images/logo.png'

type Props = {
  variant?: 'home' | 'perfil'
}

const Banner = ({ variant = 'home' }: Props) => (
  <HeroContainer $variant={variant}>
    {variant === 'home' ? (
      <>
        <Logo src={LogoImage} alt="efood" />
        <Titulo>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </Titulo>
      </>
    ) : (
      <HeaderBar className="container">
        <Link to="/">Restaurantes</Link>
        <Logo src={LogoImage} alt="efood" />
        <span>0 produto(s) no carrinho</span>
      </HeaderBar>
    )}
  </HeroContainer>
)

export default Banner