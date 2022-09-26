import React from 'react'
import data from '../assets/data'
import {useDispatch, useSelector } from 'react-dom'
import {loadProducts } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
import {useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import {formatCurrency} from './utils'
import CartItems from './CartItems'

const Products = () => {

  console.log(data)

  const dispatch = useDispatch() //store.dispatch
  const products = useSelector(state => state.products.products)

  useEffect (() =>

    dispatch(loadProducts(data))
  )
  return (
    <>
      <div className = "container">
        <div className = "row">
          <div className = "col-8">
            <Fade bottom cascade>

              <div className = "row">

                {products.map(productObj =>{

                  return (
                    <div className = "col-4 mb-5 product">
                        <a href = "#" className = "text-danger">
                          <img src = {productObj.image} alt=""/>
                            <p className = "mt-3">{productObj.title}</p>
                        </a>

                        <div className = "d-flex justified-content-around">
                          <div>{formatCurrency(productObj.price)}</div>

                          <button className = "btn btn-warning"
                          onClick={()=>dispatch(addToCart(productObj))}
                          >Add To Cart</button>

                        </div>
                    </div>
                  )
                })}

              </div>

            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
