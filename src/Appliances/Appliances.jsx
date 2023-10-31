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
            "title": "4 Burners Longlife Kimet Stainless Steel ",
            "images": "Images/appliances/appliances-1.jpg",
            "price": "50"
        },
        {
            "id": 2,
            "title": "Sharp Microwave Oven with Grill ",
            "images": "Images/appliances/appliances-2.jpg",
            "price": "52",
        },
        {
            "id": 3,
            "title": "SHARP Air Conditioner Cover 1.5 HP",
            "images": "Images/appliances/appliances-3.jpg",
            "price": "51",
        },
        {
            "id": 4,
            "title": "Fresh washing machine - white",
            "images": "Images/appliances/appliances-4.jpg",
            "price": "1375",
        },
        {
            "id": "5",
            "title": "Adapter for gas heaters replacement",
            "images": "Images/appliances/appliances-7.jpg",
            "price": "56",
        },
        {
            "id": "6",
            "title": "Stretchy waterproof air conditioner",
            "images": "Images/appliances/appliances-5.jpg",
            "price": "34976",
        },
        {
            "id": "7",
            "title": "Sharp Air Conditioner Cover, 2.25 Shape",
            "images": "Images/appliances/appliances-8.jpg",
            "price": "53",
        },
        {
            "id": "8",
            "title": "Split Dust Moisture Proof Waterproof",
            "images": "Images/appliances/appliances-9.jpg",
            "price": "41",
        },
        {
            "id": "9",
            "title": "SAMSUNG WASHING MACHINE 8KG 1400RPM",
            "images": "Images/appliances/appliances-10.jpg",
            "price": "24750",
        },
        {
            "id": "10",
            "title": "SKY-TOUCH 4pcs Anti Vibration Pads ",
            "images": "Images/appliances/appliances-11.jpg",
            "price": "47",
        },
        {
            "id": "11",
            "title": "Samsung Digital Inverter Inverter ",
            "images": "Images/appliances/appliances-11.jpg",
            "price": "28699",
        },
        {
            "id": "12",
            "title": "Samsung Digital Inverter Inverter",
            "images": "Images/appliances/appliances-12.jpg",
            "price": "28699",
        },
        {
            "id": 13,
            "title": "Sharp Air Conditioner Dust Cover",
            "images": "Images/appliances/appliances-1.jpg",
            "price": "50"
        },
        {
            "id": 14,
            "title": "Carrier Dust Cover for Air Conditioner",
            "images": "Images/appliances/appliances-2.jpg",
            "price": "52",
        },
        {
            "id": 15,
            "title": "SHARP Air Conditioner Cover 1.5 HP",
            "images": "Images/appliances/appliances-3.jpg",
            "price": "51",
        },
        {
            "id": 16,
            "title": "Fresh washing machine - white",
            "images": "Images/appliances/appliances-4.jpg",
            "price": "1375",
        },
        {
            "id": "17",
            "title": "Adapter for gas heaters replacement",
            "images": "Images/appliances/appliances-7.jpg",
            "price": "56",
        },
        {
            "id": "18",
            "title": "Stretchy waterproof air conditioner",
            "images": "Images/appliances/appliances-5.jpg",
            "price": "34976",
        },
        {
            "id": "19",
            "title": "Sharp Air Conditioner Cover, 2.25 Shape",
            "images": "Images/appliances/appliances-8.jpg",
            "price": "53",
        },
        {
            "id": 20,
            "title": "4 Burners Longlife Kimet Stainless Steel ",
            "images": "Images/appliances/appliances-1.jpg",
            "price": "50"
        }
    ];
    return (
        <div>
            <Container className='appliances'>
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
function Appliances() {

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

export default Appliances