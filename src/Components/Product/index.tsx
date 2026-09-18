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

type PratoCardProps = {
  id: number
  title: string
  descricao: string
  foto: string
  category?: string
  rating?: number
  infos?: string[]
  variant?: 'home' | 'perfil'
  preco?: number
  porcao?: string
  onSelectedPrato?: () => void
}

const Product = ({
  id,
  title,
  descricao,
  rating,
  infos,
  foto,
  variant = 'home',
  onSelectedPrato
}: PratoCardProps) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    if (variant === 'home') {
      navigate(`/perfil/${id}`) // Redireciona para a página de perfil do restaurante
    } else if (onSelectedPrato) {
      onSelectedPrato() // Aciona a abertura do modal!
    }
  }

  return (
    <Card $variant={variant}>
      <img src={foto} alt={title} />

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

        <Descricao $variant={variant}>{descricao}</Descricao>

        <BotaoSaibaMais onClick={handleButtonClick} $variant={variant}>
          {variant === 'home' ? 'Saiba mais' : 'Mais detalhes'}
        </BotaoSaibaMais>
      </ContainerConteudo>
    </Card>
  )
}

export default Product