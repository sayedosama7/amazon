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
            "title": "Mens keffiyeh white in black Mens keffiyeh",
            "images": "Images/fashion/fashion-1.jpg",
            "price": "71"
        },
        {
            "id": 2,
            "title": "Plain Contrast Sole Flip Flops for Men",
            "images": "Images/fashion/fashion-2.jpg",
            "price": "179",
        },
        {
            "id": 3,
            "title": "Round Sweatshirt with Long sleeves from Groowii",
            "images": "Images/fashion/fashion-3.jpg",
            "price": "150",
        },
        {
            "id": 4,
            "title": "analog-digital sports watch stainless steel strap for men",
            "images": "Images/fashion/fashion-4.jpg",
            "price": "7,199",
        },
        {
            "id": "5",
            "title": "Men's Fashion Business Waterproof Shoulder ",
            "images": "Images/fashion/fashion-7.jpg",
            "price": "1,557",
        },
        {
            "id": "6",
            "title": "Men's White Slippers 470491 Men's White",
            "images": "Images/fashion/fashion-5.jpg",
            "price": "205",
        },
        {
            "id": "7",
            "title": "Men Essentials Single Jersey Tapered Elasticized Cuff",
            "images": "Images/fashion/fashion-8.jpg",
            "price": "1,719",
        },
        {
            "id": "8",
            "title": "Enjoy Every Moment Side Printing Black Hoodie",
            "images": "Images/fashion/fashion-9.jpg",
            "price": "218",
        },
        {
            "id": "9",
            "title": "Chertex Men's Milton Pants Size - 130-CH",
            "images": "Images/fashion/fashion-10.jpg",
            "price": "199",
        },
        {
            "id": "10",
            "title": "Dice Boxer For Men Mulit Color- 5 PCS",
            "images": "Images/fashion/fashion-11.jpg",
            "price": "229",
        },
        {
            "id": "11",
            "title": "American Eagle Men 4.5 Classic Boxer Brief",
            "images": "Images/fashion/fashion-11.jpg",
            "price": "300",
        },
        {
            "id": "12",
            "title": "American Eagle Men 4.5 Classic Boxer Brief",
            "images": "Images/fashion/fashion-12.jpg",
            "price": "300",
        },
        {
            "id": 13,
            "title": "Mens keffiyeh white in black keffiyeh white ",
            "images": "Images/fashion/fashion-1.jpg",
            "price": "50"
        },
        {
            "id": 14,
            "title": "Plain Contrast Sole Flip Flops for Men",
            "images": "Images/fashion/fashion-2.jpg",
            "price": "52",
        },
        {
            "id": 15,
            "title": "Round Sweatshirt with Long sleeves from Groowii",
            "images": "Images/fashion/fashion-3.jpg",
            "price": "51",
        },
        {
            "id": 16,
            "title": "analog-digital sports watch stainless steel strap for men",
            "images": "Images/fashion/fashion-4.jpg",
            "price": "7,199",
        },
        {
            "id": "17",
            "title": "japanese Anime ghibli T-shirt 21 (M short sleeve)",
            "images": "Images/fashion/fashion-6.jpg",
            "price": "199",
        },
        {
            "id": "18",
            "title": " White Slippers 470491White Slippers 470491",
            "images": "Images/fashion/fashion-5.jpg",
            "price": "205",
        },
        {
            "id": "19",
            "title": "Men Essentials Single Jersey Tapered Elasticized Cuff",
            "images": "Images/fashion/fashion-8.jpg",
            "price": "1,719",
        },
        {
            "id": "20",
            "title": "mens Basic Stripped FW Cashmere Sweatshirt",
            "images": "Images/fashion/fashion-9.jpg",
            "price": "218",
        }
    ];
    return (
        <div>
            <Container className='Fashion'>
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
function Fashion() {

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

export default Fashion