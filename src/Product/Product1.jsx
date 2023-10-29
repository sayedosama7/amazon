import React from 'react'
import "./Product.css"
import {Link} from 'react-router-dom'
import { CartProvider } from 'react-use-cart';
function Product1({ id , title, image, price, rating }) {
  return (
    <CartProvider className='productMediaQuerryDisplay'>
    <div className='product ' style={{marginTop:"-200px"}}>
      <p className='product__info'>{title}</p>
      <img src={image} alt=''/>   
      <div> 
      <Link to='/MobilePhones' className='buttun'>See more</Link>
    </div>  
    </div>
    </CartProvider>
  )
}

export default Product1;


