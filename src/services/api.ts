import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
type PurchaseResponse = {
  orderId: string
};

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
  }
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type Product = {
  id: number
  price: number
}

export const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-ebac.vercel.app/api/efood' }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (payload) => ({
        url: 'checkout',
        method: 'POST',
        body: payload
      })
    })
  })
})


export const { useGetRestaurantesQuery, useGetRestauranteQuery, usePurchaseMutation } = api