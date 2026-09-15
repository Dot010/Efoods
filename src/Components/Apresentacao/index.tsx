import { Imagem, ContainerApresentacao, Categoria, Titulo } from "./styles"

type Props = {
    category: string;
    title: string;
    cover: string;
}

const Apresentacao = ({ category, title, cover }: Props) => (

  <Imagem style={{ backgroundImage: `url(${cover})` }}>
        <ContainerApresentacao>
            
      <Categoria>{category}</Categoria>
      <Titulo>{title}</Titulo>
    </ContainerApresentacao>
  </Imagem>
)

export default Apresentacao