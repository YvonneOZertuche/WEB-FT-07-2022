import {LOAD_PRODUCTS} from './types'

 export const loadProducts = (data) => {
  console.log(data)

  return {
    type: LOAD_PRODUCTS,
    product: data
  }
}
