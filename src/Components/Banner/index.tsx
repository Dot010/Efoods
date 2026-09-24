import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { open } from '../../store/reducers/cart'

import { HeroContainer, HeaderBar, Logo, Titulo } from './style'
import LogoImage from '../../assets/images/logo.png'

type Props = {
  variant?: 'home' | 'perfil'
}

const Banner = ({ variant = 'home' }: Props) => {

  const dispatch = useDispatch()
  const totalItems = useSelector((state: RootState) => state.cart.items.length)


  const handleCartClick = () => {
    if (totalItems === 0) {
      alert('O carrinho está vazio. Adicione produtos antes de prosseguir para o checkout.')
    } else {
      dispatch(open())
    }
  }

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
          <span onClick={handleCartClick} role="button">
              {totalItems === 0
                ? '0 produto(s) no carrinho'
                : `${totalItems} produto(s) - Ver carrinho`} 
          </span>
        </HeaderBar>
      )}
    </HeroContainer>
  )
}

export default Banner