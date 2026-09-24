import Banner from "../../Components/Banner"
import ProductList, { type ProductType } from "../../Components/ProductList"
import Footer from "../../Components/Footer"
import { useGetRestaurantesQuery } from "../../services/api"
import Loader from "../../Components/Loader"
import styled from "styled-components";

const ErrorState = styled.h3`
  text-align: center;
  margin-top: 50px;
  color: #fff;
`;

const Home = () => {
  const { data: restaurantes, isLoading, isError } = useGetRestaurantesQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !restaurantes) {
    return <ErrorState>Erro ao carregar restaurantes.</ErrorState>;
  }

  const products: ProductType[] = restaurantes.map((restaurante) => ({
    id: restaurante.id,
    title: restaurante.titulo,
    category: restaurante.tipo,
    descricao: restaurante.descricao,
    foto: restaurante.capa,
    rating: restaurante.avaliacao,
    infos: restaurante.destacado
      ? ["Destaque da Semana", restaurante.tipo]
      : [restaurante.tipo],
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