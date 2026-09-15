import Banner from "../../Components/Banner"
import ProductList, { type ProductType } from "../../Components/ProductList"
import Footer from "../../Components/Footer"
import hiokiImg from "../../assets/images/sushi.png"
import Macarrao from "../../assets/images/macarrao.png"


const Restaurantes: ProductType[] = [
  {
    id: 1,
    title: "Hioki Sushi",
    category: "Japonesa",
    description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: hiokiImg,
    rating: 4.9,
    infos: ['Destaque da Semana', 'Japonesa']
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria", 
    category: "Italiana",
    description: "A La Dolce Vita Trattoria oferece uma experiência gastronômica autêntica da culinária italiana. Com pratos tradicionais, massas frescas e molhos caseiros, proporcionamos uma viagem aos sabores da Itália. Venha saborear a verdadeira essência da cozinha italiana em um ambiente acolhedor e familiar.",
    image: Macarrao,
    rating: 4.7,
    infos: ['Italiana']
  },
  {
    id: 3,
    title: "La Dolce Vita Trattoria", 
    category: "Italiana",
    description: "A La Dolce Vita Trattoria oferece uma experiência gastronômica autêntica da culinária italiana. Com pratos tradicionais, massas frescas e molhos caseiros, proporcionamos uma viagem aos sabores da Itália. Venha saborear a verdadeira essência da cozinha italiana em um ambiente acolhedor e familiar.",
    image: Macarrao,
    rating: 4.7,
    infos: [ 'Italiana']
  },
    {
    id: 4,
    title: "La Dolce Vita Trattoria", 
    category: "Italiana",
    description: "A La Dolce Vita Trattoria oferece uma experiência gastronômica autêntica da culinária italiana. Com pratos tradicionais, massas frescas e molhos caseiros, proporcionamos uma viagem aos sabores da Itália. Venha saborear a verdadeira essência da cozinha italiana em um ambiente acolhedor e familiar.",
    image: Macarrao,
    rating: 4.7,
    infos: ['Italiana']
  }
  ,
      {
    id: 5,
    title: "La Dolce Vita Trattoria", 
    category: "Italiana",
    description: "A La Dolce Vita Trattoria oferece uma experiência gastronômica autêntica da culinária italiana. Com pratos tradicionais, massas frescas e molhos caseiros, proporcionamos uma viagem aos sabores da Itália. Venha saborear a verdadeira essência da cozinha italiana em um ambiente acolhedor e familiar.",
    image: Macarrao,
    rating: 4.7,
    infos: ['Italiana']
  }
  ,
  {
    id: 6,
    title: "La Dolce Vita Trattoria", 
    category: "Italiana",
    description: "A La Dolce Vita Trattoria oferece uma experiência gastronômica autêntica da culinária italiana. Com pratos tradicionais, massas frescas e molhos caseiros, proporcionamos uma viagem aos sabores da Itália. Venha saborear a verdadeira essência da cozinha italiana em um ambiente acolhedor e familiar.",
    image: Macarrao,
    rating: 4.7,
    infos: ['Italiana']
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductList products={Restaurantes} />
      <Footer />
    </>
  )
}

export default Home