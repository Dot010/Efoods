import { useDispatch } from 'react-redux'
import type { Prato } from '../../pages/Perfil/index'
import { add, open } from '../../store/reducers/cart'
import * as S from './styles'

type Props = {
  prato: Prato
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ prato, isVisible, onClose }: Props) => {
  const dispatch = useDispatch()

  if (!isVisible) return null

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const handleAddToCart = () => {
    dispatch(add({
      id: prato.id,
      title: prato.nome,
      category: '',
      foto: prato.foto,
      preco: prato.preco,
      descricao: prato.descricao
    }))
    dispatch(open())
    onClose()
  }

  return (
    <S.ModalContainer>
      <S.Overlay onClick={onClose} />
      <S.ModalContent>
        <img src={prato.foto} alt={prato.nome} />
        <div>
          <S.Header>
            <h4>{prato.nome}</h4>
            <S.CloseButton type="button" onClick={onClose}>
              &times;
            </S.CloseButton>
          </S.Header>
          <S.Description>{prato.descricao}</S.Description>
          <S.Description>Serve: {prato.porcao}</S.Description>
          <S.AddButton type="button" onClick={handleAddToCart}>
            Adicionar ao carrinho - {formataPreco(prato.preco)}
          </S.AddButton>
        </div>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal