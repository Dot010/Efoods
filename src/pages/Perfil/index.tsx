import Banner from "../../Components/Banner"
import ProductList from "../../Components/ProductList"
import Footer from "../../Components/Footer"
import Apresentacao from "../../Components/Apresentacao"
import Pizza from "../../assets/images/Pizza.png"
import bannerPasta from "../../assets/images/backgroundPerfil.png"
export type PratoType = {   
    id: number;
    title: string;
    description: string;
    image: string;
}

const produtosPerfil: PratoType[] = [
  {
    id: 7,
    title: "Pizza Margherita",
    image: Pizza,
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  
  {
    id: 8,
    title: "Pizza Margherita",
    image: Pizza,
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 9,
    title: "Pizza Margherita",

    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,
  
  },
    {
    id: 10,
    title: "Pizza Margherita", 
  
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,

  }
  ,
      {
    id: 11,
    title: "Pizza Margherita", 

    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,

  },
  {
    id: 12,
    title: "Pizza Margherita", 

    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,
  

    }
];


const PerfilPage = () => {
  return (
    <>
      <Banner variant="perfil" />
      
      <Apresentacao
        category="Italiana"
        title="La Dolce Vita Trattoria"
        cover={bannerPasta}
      /> 
      <ProductList variant="perfil" products={produtosPerfil} />
      
      <Footer />
    </>
  )
}

export default PerfilPage