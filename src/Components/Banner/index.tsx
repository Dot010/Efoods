import { Link } from 'react-router-dom'
import { HeroContainer, HeaderBar, Logo, Titulo } from './style'
import LogoImage from '../../assets/images/logo.png'


import { useSelector } from 'react-redux'
import type { RootState } from '../../store'


type Props = {
  variant?: 'home' | 'perfil'
}

const Banner = ({ variant = 'home' }: Props) => 
  {
  
const totalItems = useSelector((state: RootState) => state.cart.items.length);

    
  return (
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
          <span>{totalItems} produto(s) no carrinho</span>
        </HeaderBar>
      )}
    </HeroContainer>
  )
}


export default Banner