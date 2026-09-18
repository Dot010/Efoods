  import Banner from "../../Components/Banner"
  import Footer from "../../Components/Footer"
  import Apresentacao from "../../Components/Apresentacao"
  import ProductList, { type ProductType } from "../../Components/ProductList"
  import { useState } from "react"
  import { useParams } from "react-router-dom"
  import { useGetRestauranteQuery } from "../../services/api"
import Modal from "../../Components/Modal"
import Loader from "../../Components/Loader"

  export type Prato = {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }

  export type Restaurante = {
    id: number
    titulo: string
    destacado?: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Prato[]
  }

  const PerfilPage = () => {
    const { id } = useParams()
    const { data: restaurante, isLoading, isError } = useGetRestauranteQuery(id!)
    const [modalPrato, setModalPrato] = useState<Prato | null>(null)

    if (isLoading) {
      return <Loader />
    } 

    if (isError || !restaurante) {
      return <h3 style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>Restaurante não encontrado.</h3>
    }


    const produtos: ProductType[] = restaurante.cardapio.map((p) => ({
      id: p.id,
      title: p.nome,
      descricao: p.descricao,
      foto: p.foto,
      preco: p.preco,
      porcao: p.porcao
    }))

    return (
      <>
        <Banner variant="perfil" />

        <Apresentacao
          category={restaurante.tipo}
          title={restaurante.titulo}
          cover={restaurante.capa}
        />

        <ProductList
          variant="perfil"
          products={produtos}
          onSelectedProduct={(id) => {
            const prato = restaurante.cardapio.find((p) => p.id === id)
            if (prato) setModalPrato(prato)
          }}
        />

      <Modal
        prato={modalPrato!}
        isVisible={modalPrato !== null}
        onClose={() => setModalPrato(null)}
      />

        <Footer />
      </>
    )
  }

  export default PerfilPage