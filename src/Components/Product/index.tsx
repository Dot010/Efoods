import { useNavigate } from 'react-router-dom'
import {
  Card,
  Titulo,
  Descricao,
  Rating,
  Infos,
  ContainerConteudo,
  HeaderCard,
  BotaoSaibaMais,
  Tag
} from './styles'
import estrela from './../../assets/images/estrela.png'

type ProductProps = {
  title: string
  category?: string
  description: string
  image: string
  rating?: number
  infos?: string[]
  variant?: 'home' | 'perfil'
}

const Product = ({
  title,
  description,
  rating,
  infos,
  image,
  variant = 'home'
}: ProductProps) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    if (variant === 'home') {
      navigate('/perfil')
    } else {
      // Ação do carrinho na página de Perfil
    }
  }

  return (
    <Card $variant={variant}>
      <img src={image} alt={title} />

      {variant === 'home' && infos && infos.length > 0 && (
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
      )}

      <ContainerConteudo>
        <HeaderCard>
          <Titulo $variant={variant}>{title}</Titulo>

          {variant === 'home' && rating !== undefined && (
            <Rating>
              {rating} <img src={estrela} alt="Estrela" />
            </Rating>
          )}
        </HeaderCard>

        <Descricao $variant={variant}>{description}</Descricao>

        <BotaoSaibaMais onClick={handleButtonClick} $variant={variant}>
          {variant === 'home' ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </BotaoSaibaMais>
      </ContainerConteudo>
    </Card>
  )
}

export default Product