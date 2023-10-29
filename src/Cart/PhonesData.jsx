import React from 'react'
import Footer from '../Footer/Footer'
import { Col, Container, Row } from 'reactstrap'
import { CartProvider, useCart } from 'react-use-cart'
import Header from '../NavbarAndHeader/Header'
import Navbar from '../NavbarAndHeader/Navbar'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar2 from '../NavbarAndHeader/Navbar2'
function Page() {
  const { addItem } = useCart();
  const products = [

    {
      "id": 1,
      "title": "Apple iPhone 13 Pro Max 256GB Blue ",
      "images": "Images/Phones/8.jpg",
      "price": "43000"
    },
    {
      "id": 2,
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "Images/Phones/3.jpg",
      "price": "36976",
    },
    {
      "id": 3,
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/4.jpg",
      "price": "17076",
    },
    {
      "id": 4,
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/5.jpg",
      "price": "36286",
    },
    {
      "id": "6",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/6.jpg",
      "price": "34976",
    },
    {
      "id": "7",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/7.jpg",
      "price": "29000",
    },
    {
      "id": "8",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/8.jpg",
      "price": "24000",
    },
    {
      "id": "9",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/9.jpg",
      "price": "18126",
    },
    {
      "id": "10",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/10.jpg",
      "price": "13700",
    },
    {
      "id": "11",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/11.jpg",
      "price": "32897",
    },
    {
      "id": "12",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/13.jpg",
      "price": "27400",
    },
    {
      "id": "13",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/14.jpg",
      "price": "32000",
    },
    {
      "id": "14",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/15.jpg",
      "price": "29976",
    },
    {
      "id": "15",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/16.jpg",
      "price": "10000",
    },
    {
      "id": "16",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/17.jpg",
      "price": "23,000",
    },
    {
      "id": "17",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/18.jpg",
      "price": "38846",
    },
    {
      "id": "18",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/19.jpg",
      "price": "30950",
    },
    {
      "id": "19",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/20.jpg",
      "price": "20406",
    },
    {
      "id": "20",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/21.jpg",
      "price": "20500",
    }
    ,
    {
      "id": "21",
      "title": "Apple iPhone 13 Pro Max 256GB Blue",
      "images": "/Images/Phones/15.jpg",
      "price": "20500",
    }

  ];
  return (
    <div>
      <Container className='all-products'>
        <Link className='amazon' to='/'><h1 className='amazon p-0'>amazon</h1></Link>
        <Row>
          {products.map((item) => (
            <Col lg='3' md='6' sm='12' key={item.id} className="proud-header">
              <div className="proud-header">
                <div className="proud-body">
                  <Link><img src={item.images} alt="" /></Link>
                </div>
                <div>
                  <h4 className="mt-2">{item.title}</h4>
                </div>
                <p>⭐⭐⭐⭐</p>
                <div style={{ display: "flex", fontSize: "18px" }}>
                  <sub>EGP</sub>
                  <span className="fw-bold">
                    <p style={{ fontSize: "28px", fontFamily: "sans-serif", marginRight: "15px" }}> {item.price}</p>
                  </span>
                  <sub>00</sub>
                </div>
                <div>
                  <p>20% discount for VF Cash. Use code VFWF20 Get it Saturday, December 3 - Monday, December 5EGP 21.00 shipping</p>
                </div>
                <div>
                  <Button className=" btn btn-warning mb-5" variant="primary" onClick={() => addItem(item)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Col>

          ))}
        </Row>
      </Container>
    </div>
  )
}
function PhonesData() {
  return (
    <CartProvider>
      <Header />
      <Navbar />
      <Navbar2 />
      <Page />
      <Footer />

    </CartProvider>
  )
}

export default PhonesData
