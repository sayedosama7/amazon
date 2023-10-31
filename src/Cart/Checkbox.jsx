

import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Footer from '../Footer/Footer';
import { NavLink, Link } from 'react-router-dom';
import Navbar2 from '../NavbarAndHeader/Navbar2';
import Navbar from '../NavbarAndHeader/Navbar';
import "./CheckOut.css"
import Header from '../NavbarAndHeader/Header';
import Footer2 from '../Footer/Footer2';
function Cart() {
  const { cartTotal, emptyCart, isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) {
    return <div className="products">
      <Link className='amazon' to='/'><h1 className='amazon'>amazon</h1></Link>
      <div className='ifEmpty'>
        <h1>Your Cart is Empty</h1>
        <p>You have no items in your basket. To buy one or more items, click "Add To Cart" under to the item.</p>
        <Link className='shoppingButton2' to='/MobilePhones'>
          <Button className='shoppingButton1 ' variant="primary">Back To Products</Button></Link>
      </div>

    </div>
      ;
  }

  return (
    <div>
      <Container>
        <Row>
          <Link className='amazon mt-0' to='/'><h1 className='amazon mt-0'>amazon</h1></Link>
          <div className='cart-title'>
            <h2>Shopping Cart</h2>
            <h6 className='mb-4'>Numbre Of Products ( {totalUniqueItems} )</h6>
          </div>
          <Col md="12" className='text-center'>
            <table className="table bg-light">
              <thead className='pt-5'>
                <th></th>
                <th className="text-warning pt-3">Price</th>
                <th className="text-warning pt-3">Quantity</th>
                <th className="text-warning pt-3">Title</th>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="ps-3">
                      <div className='d-flex table-btn'>
                        <button
                          className="btn btn-warning cart-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          &#10006;
                        </button>
                        <button
                          className="btn btn-warning mx-2 cart-btn"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-warning cart-btn"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </div>
                    </td>

                    <td className="ps-3">{item.price * item.quantity} $ </td>
                    <td className="ps-3">{item.quantity}</td>
                    <td className="ps-3">
                      ( {item.title} )
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className='mt-4' style={{ color: "#af1919" }}>Total Price ( {cartTotal} $ )</h3>
            <div className='mt-4'>
              <NavLink className='btn btn-warning  mb-2' to='/signup'>Continue Shoping</NavLink>
            </div>
            <button className="btn btn-warning " onClick={() => emptyCart()}>Delete All Products</button>

          </Col>
          <Col md='12' lg='6' className='text-center'>
          </Col>
        </Row>
      </Container>
      <NavLink className='btn btn-warning m-auto d-block main w-25 mb-5 mt-2' to='/'>Home</NavLink>

    </div>
  );
}

function CartPage() {
  return (
    <CartProvider>
      <Header />
      <Navbar />
      <Navbar2 />
      <Cart />
      <Footer />
      <Footer2 />
    </CartProvider>
  )
}
export default CartPage
