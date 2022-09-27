import { LOAD_PRODUCTS } from "../actions/types"

const productsReducer = (state, action) => {

  if (state === undefined) {
      state = {
        products: []

    }
  }  
    
    switch(action.type){
      case LOAD_PRODUCTS: 
      console.log(action.product)
        return {
          ...state,
          products: action.product
        }

       default: 
        return state 
    }
  
 
 
    
  
}

export default productsReducer
  

