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
            "title": "Fine Prestige 3 Ply Facial Tissue Soft ",
            "images": "Images/grocery/grocery-1.jpg",
            "price": "62"
        },
        {
            "id": 2,
            "title": "El Arosa Egyptian Dust Black Tea 100g",
            "images": "Images/grocery/grocery-2.jpg",
            "price": "17",
        },
        {
            "id": 3,
            "title": "Molfix - Baby Diapers - Mega Pack - Xlarge Size 6",
            "images": "Images/grocery/grocery-3.jpg",
            "price": "335",
        },
        {
            "id": 4,
            "title": "Mini Ionic Brush Mini Ionic Brush Mini Ionic",
            "images": "Images/grocery/grocery-4.jpg",
            "price": "399",
        },
        {
            "id": "5",
            "title": "elsaa solt elsaa solt elsaa solt elsaa solt ",
            "images": "Images/grocery/grocery-7.jpg",
            "price": "5",
        },
        {
            "id": "6",
            "title": "Care & more soft cream with glycerin 75 ml",
            "images": "Images/grocery/grocery-5.jpg",
            "price": "20",
        },
        {
            "id": "7",
            "title": "Feba Salt 1 kg Dish For Automatic Dishwashing Salt",
            "images": "Images/grocery/grocery-8.jpg",
            "price": "39",
        },
        {
            "id": "8",
            "title": "Huggies extra care diaper size 4, 8-14kg, 68pcs ",
            "images": "Images/grocery/grocery-9.jpg",
            "price": "275",
        },
        {
            "id": "9",
            "title": "Harpic original toilet cleaner, 100% limescale remover",
            "images": "Images/grocery/grocery-10.jpg",
            "price": "99",
        },
        {
            "id": "10",
            "title": "Huggies extra care size 5, jumbo pack, (12-22 kg)",
            "images": "Images/grocery/grocery-11.jpg",
            "price": "295",
        },
        {
            "id": "11",
            "title": "Papia Tissue - Toilet paper - 3 Ply - 12 Rolls",
            "images": "Images/grocery/grocery-11.jpg",
            "price": "95",
        },
        {
            "id": "12",
            "title": "Fine Prestige 3 Ply Facial Tissue Soft pack, 550 Sheets",
            "images": "Images/grocery/grocery-12.jpg",
            "price": "125",
        },
        {
            "id": 13,
            "title": "Fine Prestige 3 Ply Facial Tissue Soft ",
            "images": "Images/grocery/grocery-1.jpg",
            "price": "62"
        },
        {
            "id": 14,
            "title": "El Arosa Egyptian Dust Black Tea 100g",
            "images": "Images/grocery/grocery-2.jpg",
            "price": "17",
        },
        {
            "id": 15,
            "title": "Molfix - Baby Diapers - Mega Pack - Xlarge Size 6",
            "images": "Images/grocery/grocery-3.jpg",
            "price": "335",
        },
        {
            "id": 16,
            "title": "Mini Ionic Brush Mini Ionic Brush Mini Ionic",
            "images": "Images/grocery/grocery-4.jpg",
            "price": "399",
        },
        {
            "id": "17",
            "title": "elsaa solt elsaa solt elsaa solt elsaa solt ",
            "images": "Images/grocery/grocery-7.jpg",
            "price": "5",
        },
        {
            "id": "18",
            "title": "Care & more soft cream with glycerin 75 ml",
            "images": "Images/grocery/grocery-5.jpg",
            "price": "20",
        },
        {
            "id": "19",
            "title": "Feba Salt 1 kg Dish For Automatic Dishwashing Salt",
            "images": "Images/grocery/grocery-8.jpg",
            "price": "39",
        },
        {
            "id": "20",
            "title": "Huggies extra care diaper size 4, 8-14kg, 68pcs ",
            "images": "Images/grocery/grocery-9.jpg",
            "price": "275",
        }
    ];
    return (
        <div>
            <Container className='Grocery'>
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
function Grocery() {

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

export default Grocery