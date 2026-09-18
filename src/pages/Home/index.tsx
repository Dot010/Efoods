
import Banner from "../../Components/Banner"
import ProductList, { type ProductType } from "../../Components/ProductList"
import Footer from "../../Components/Footer"
import { useGetRestaurantesQuery } from "../../services/api"
import Loader from "../../Components/Loader"

const Home = () => {
  const { data: restaurantes, isLoading, isError } = useGetRestaurantesQuery()

  if (isLoading) {
      return <Loader />
    }

    if (isError || !restaurantes) {
      return <h3 style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>Erro ao carregar restaurantes.</h3>
    }


  const products: ProductType[] = restaurantes.map((restaurante) => ({
    id: restaurante.id,
    title: restaurante.titulo,
    category: restaurante.tipo,
    descricao: restaurante.descricao,
    foto: restaurante.capa,
    rating: restaurante.avaliacao,
    infos: restaurante.destacado ? ['Destaque da Semana', restaurante.tipo] : [restaurante.tipo]
  }))

  return (
    <>
      <Banner />
      <ProductList products={products} />
      <Footer />
    </>
  )
}

export default Home