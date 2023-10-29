import React from 'react'
import {Link} from 'react-router-dom'
import "./Product.css"
import { CartProvider } from 'react-use-cart';


function Product4({ id , title, image, price, rating }) {
  return (
    <CartProvider className='product '>
      <p className='product__info'>{title}</p>
      <img src={image} alt='' />   
    <div> 
      <Link className='buttun' to='/MobilePhones'>See more</Link>
    </div>  
    </CartProvider>
  )
}

export default Product4;


