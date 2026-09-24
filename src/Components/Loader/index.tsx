import * as S from './styles'
import { ClipLoader } from 'react-spinners'

type LoaderProps = {
    text?: string
    size?: number
}

const Loader = ({ text = 'Carregando...', size = 42 }: LoaderProps) => (
    <S.Container role="status" aria-live="polite" aria-label="Carregando conteúdo">
        <ClipLoader color="#E66767" size={size} />
        <h3>{text}</h3>
    </S.Container>
)

export default Loader