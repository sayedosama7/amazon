import React from 'react'
import Header from '../NavbarAndHeader/Header'
import Navbar from '../NavbarAndHeader/Navbar'
import Navbar2 from '../NavbarAndHeader/Navbar2'
import { CartProvider, useCart } from 'react-use-cart'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from '@mui/material'
import Footer from '../Footer/Footer'
import Footer2 from '../Footer/Footer2'
const Page = () => {
    const { addItem } = useCart();
    const products = [
        {
            "id": 1,
            "title": "FINTIE Hybrid Case Compatible with iPad Air",
            "images": "Images/elctronics/elctronics-1.jpg",
            "price": "435"
        },
        {
            "id": 2,
            "title": "Samsung Galaxy Watch6 Smartwatch (Silver, 44mm)",
            "images": "Images/elctronics/elctronics-2.jpg",
            "price": "13,599",
        },
        {
            "id": 3,
            "title": "Samsung Galaxy Watch6 Classic Smartwatch",
            "images": "Images/elctronics/elctronics-3.jpg",
            "price": "16,999",
        },
        {
            "id": 4,
            "title": "Samsung Galaxy A14 LTE, 128GB Storage",
            "images": "Images/elctronics/elctronics-4.jpg",
            "price": "6,190",
        },
        {
            "id": "5",
            "title": "Samsung Galaxy A54 - Dual SIM Mobile Phone Android",
            "images": "Images/elctronics/elctronics-5.jpg",
            "price": "15,888",
        },
        {
            "id": "6",
            "title": "TVS Electronics Full HD 2MP Cameras Combo KIT 8CH",
            "images": "Images/elctronics/elctronics-6.jpg",
            "price": "5,779",
        },
        {
            "id": "7",
            "title": "CD4001BE CD4001BE CD4001BE",
            "images": "Images/elctronics/elctronics-7.jpg",
            "price": "90",
        },
        {
            "id": "8",
            "title": " SN74HC10DR SN74HC10DR SN74HC10DR",
            "images": "Images/elctronics/elctronics-8.jpg",
            "price": "14",
        },
        {
            "id": "9",
            "title": "Soundcore By Anker R50i True Wireless Earbuds 10mm",
            "images": "Images/elctronics/elctronics-9.jpg",
            "price": "849",
        },
        {
            "id": "10",
            "title": "Samsung 65 Inch 4K UHD Smart LED TV with Built-in ",
            "images": "Images/elctronics/elctronics-10.jpg",
            "price": "17,299",
        },
        {
            "id": "11",
            "title": "Samsung galaxy a34 dual sim mobile phone android",
            "images": "Images/elctronics/elctronics-11.jpg",
            "price": "11,111",
        },
        {
            "id": "12",
            "title": "Oraimo OTW-330 FreePods Lite Havy Bass TWS",
            "images": "Images/elctronics/elctronics-12.jpg",
            "price": "111",
        },
        {
            "id": 13,
            "title": "Samsung 32 Inch Full HD Smart LED TV with Built-in Receiver",
            "images": "Images/elctronics/elctronics-13.jpg",
            "price": "6,469"
        },
        {
            "id": 14,
            "title": "Samsung Galaxy A23 Dual SIM, 6GB RAM, 128GB 4G - Blue ",
            "images": "Images/elctronics/elctronics-14.jpg",
            "price": "7,559",
        },
        {
            "id": 15,
            "title": "Soundcore a3991h11 by anker life p2i true wireless earbuds",
            "images": "Images/elctronics/elctronics-15.jpg",
            "price": "1,118",
        },
        {
            "id": 16,
            "title": "LG UHD TV UR78 50 4K Smart TV - 50UR78006LL.AFU earbuds",
            "images": "Images/elctronics/elctronics-16.jpg",
            "price": "14,999",
        },
        {
            "id": "17",
            "title": "LG 32 inch Series HD HDR Smart LED TV - 32LM637BPVA -",
            "images": "Images/elctronics/elctronics-17.jpg",
            "price": "7,550",
        },
        {
            "id": "18",
            "title": "Nokia G21 4gb ram, 128gb memory, finger print sensor - blue",
            "images": "Images/elctronics/elctronics-18.jpg",
            "price": "4,099",
        },
        {
            "id": "19",
            "title": "Lg uhd 4k tv 65 inch uq8000 series, cinema screen design 4k",
            "images": "Images/elctronics/elctronics-19.jpg",
            "price": "23,999",
        },
        {
            "id": 20,
            "title": " ST HCF4511BE  ST HCF4511BE  ST HCF4511BE  ST HCF4511BE ",
            "images": "Images/elctronics/elctronics-20.jpg",
            "price": "45"
        }


    ];
    return (
        <div>
            <Container className='all-products elctronics'>
                <Link className='amazon' to='/'><h1 className='amazon p-0'>amazon</h1></Link>
                <Row>
                    {products.map((item) => (
                        <Col lg='3' md='6' sm='12' key={item.id} className="all-header">
                            <div className="all-card">
                                <div className="all-body">
                                    <Link><img className="img-fluid" src={item.images} alt="" /></Link>
                                </div>
                                <div className="all-box">
                                    <div>
                                        <h6 className="mt-2 fw-bold">{item.title}</h6>
                                    </div>
                                    <p>⭐⭐⭐⭐</p>
                                    <div className="d-flex">
                                        <sub className="text-muted">EGP</sub>
                                        <h2 className="">{item.price}</h2>
                                        <sub className="text-muted">00</sub>
                                    </div>
                                    <p>15% OFF on first app order. Code APPX75
                                        Get it as soon as Thursday, 2 November
                                        Fulfilled by Amazon - FREE Shipping</p>
                                    <div>
                                        <Button className=" btn btn-warning" variant="primary" onClick={() => addItem(item)}>
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    ))}
                </Row>
            </Container>
        </div>
    )
}
function Electronics() {

    return (
        <CartProvider>
            <Header />
            <Navbar />
            <Navbar2 />
            <Page />
            <Footer />
            <Footer2 />
        </CartProvider>
    )
}

export default Electronics