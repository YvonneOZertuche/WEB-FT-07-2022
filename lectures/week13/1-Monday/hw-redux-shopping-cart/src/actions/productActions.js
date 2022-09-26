import {LOAD_PRODUCTS} from './productActions'

 export const loadProducts = (data) => {

  return {
    type: "LOAD_PRODUCTS",
    product: data
  }
}
