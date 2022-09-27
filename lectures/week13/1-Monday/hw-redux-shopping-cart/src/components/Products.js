import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from '../assets/data'
import { loadProducts } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
import Fade from 'react-reveal/Fade'
import { formatCurrency } from './utils'
import CartItems from './CartItems'

//display all products
//load in data from file, and store in redux

const Products = () => {
  const dispatch = useDispatch() // store.dispatch()
  const products = useSelector(state => state.product.products)
console.log(products)
  useEffect(() => {
    dispatch(loadProducts(data))
    console.log(data)
  }, )

  return (
    <>products
      {' '}
      products
      <div className='container'>
        <div className='row'>
          <div className='col-8'>

          <Fade bottom cascade>
              <div className='row'>
                {products.map(product => {
                  return (
                    <div key={product.id} className='col-4 mb-5 product'>
                      <a href='' className='text-danger'>
                        <img src={product.image} alt='' />
                        <p className='mt-3'>{product.title}</p>
                      </a>

                      <div className='d-flex justify-content-around'>
                        <div>{product.price}</div>
                        <button className='btn btn-warning'>Add To Cart</button>
                      </div>
                    </div>
                  )
                })}
              </div>

                </Fade>
          </div>

          <div className='col-4'></div>
        </div>

      

      </div>
    </>
  )
}

export default Products

