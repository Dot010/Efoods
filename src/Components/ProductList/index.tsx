import Product from '../Product'
import { Container, List } from './styles'

export type ProductType = {
  id: number
  title: string
  description: string
  image: string
  category?: string
  rating?: number
  infos?: string[]
}

type Props = {
  products: ProductType[]
  variant?: 'home' | 'perfil'
}

export const ProductList = ({ products, variant = 'home' }: Props) => {
  return (
    <Container>
      <List $variant={variant}>
        {products.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            category={item.category}
            rating={item.rating}
            infos={item.infos}
            variant={variant}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductList