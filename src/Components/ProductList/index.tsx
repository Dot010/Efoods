import Product from '../Product'
import { Container, List } from './styles'

export type ProductType = {
  id: number
  title: string
  descricao: string
  foto: string
  category?: string
  rating?: number
  infos?: string[]
  preco?: number
  porcao?: string
}

export type ProductListProps = {
  products: ProductType[]
  onSelectedProduct?: (id: number) => void
  variant?: 'home' | 'perfil'
}

export const ProductList = ({ products, onSelectedProduct, variant = 'home' }: ProductListProps) => {
  return (
    <Container>
      <List $variant={variant}>
        {products.map((produto) => (
          <Product
            key={produto.id}
            id={produto.id}
            title={produto.title}
            descricao={produto.descricao}
            foto={produto.foto}
            rating={produto.rating}
            infos={produto.infos}
            preco={produto.preco}
            porcao={produto.porcao}
            variant={variant}
            onSelectedPrato={onSelectedProduct ? () => onSelectedProduct(produto.id) : undefined}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductList