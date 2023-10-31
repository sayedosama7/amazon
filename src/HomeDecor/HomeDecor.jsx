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
            "title": "Wine Fur Carpet for Bedroom Living Room",
            "images": "Images/home decor/decor-1.jpg",
            "price": "599"
        },
        {
            "id": 2,
            "title": "Jalsa christmas flat leather door mats multicolor size",
            "images": "Images/home decor/decor-2.jpg",
            "price": "172",
        },
        {
            "id": 3,
            "title": "Jalsa christmas inspired pattern soft abstract shaggy",
            "images": "Images/home decor/decor-3.jpg",
            "price": "213",
        },
        {
            "id": 4,
            "title": "SUMGAR Black White Geometric Throw Pillow",
            "images": "Images/home decor/decor-4.jpg",
            "price": "850",
        },
        {
            "id": "5",
            "title": "Mac Carpet Carnival Mat (50x80cm - The Flair)",
            "images": "Images/home decor/decor-7.jpg",
            "price": "215",
        },
        {
            "id": "6",
            "title": "Light weight Dark Modern Style Rug Set of 3 Pieces",
            "images": "Images/home decor/decor-5.jpg",
            "price": "1,490",
        },
        {
            "id": "7",
            "title": "Ysahome Xmas Decor Pillow Cover - Buffalo Plaid Check",
            "images": "Images/home decor/decor-8.jpg",
            "price": "712",
        },
        {
            "id": "8",
            "title": "Kesote 12Pcs Artificial Tulip Flowers, Real Touch Artificial",
            "images": "Images/home decor/decor-9.jpg",
            "price": "555",
        },
        {
            "id": "9",
            "title": "Salla Nearly Natural Artificial Flower Arrangement with Fern ",
            "images": "Images/home decor/decor-10.jpg",
            "price": "380",
        },
        {
            "id": "10",
            "title": "100PCs Luminous Plastic 3D Stars Glow in the Dark wall ",
            "images": "Images/home decor/decor-11.jpg",
            "price": "14",
        },
        {
            "id": "11",
            "title": "Dear Rose 6 Pack Artificial Plants Small Fake Plants",
            "images": "Images/home decor/decor-11.jpg",
            "price": "113",
        },
        {
            "id": "12",
            "title": "Venus 2 Pillow Hotel Cushion Cushion Cushion Soft",
            "images": "Images/home decor/decor-12.jpg",
            "price": "195",
        },
        {
            "id": 13,
            "title": "Wine Fur Carpet for Bedroom Living Room",
            "images": "Images/home decor/decor-1.jpg",
            "price": "599"
        },
        {
            "id": 14,
            "title": "Jalsa christmas flat leather door mats multicolor size",
            "images": "Images/home decor/decor-2.jpg",
            "price": "172",
        },
        {
            "id": 15,
            "title": "Jalsa christmas inspired pattern soft abstract shaggy",
            "images": "Images/home decor/decor-3.jpg",
            "price": "213",
        },
        {
            "id": 16,
            "title": "SUMGAR Black White Geometric Throw Pillow",
            "images": "Images/home decor/decor-4.jpg",
            "price": "850",
        },
        {
            "id": "17",
            "title": "Mac Carpet Carnival Mat (50x80cm - The Flair)",
            "images": "Images/home decor/decor-7.jpg",
            "price": "215",
        },
        {
            "id": "18",
            "title": "Light weight Dark Modern Style Rug Set of 3 Pieces",
            "images": "Images/home decor/decor-5.jpg",
            "price": "1,490",
        },
        {
            "id": "19",
            "title": "Ysahome Xmas Decor Pillow Cover - Buffalo Plaid Check",
            "images": "Images/home decor/decor-8.jpg",
            "price": "712",
        },
        {
            "id": "20",
            "title": "Kesote 12Pcs Artificial Tulip Flowers, Real Touch Artificial",
            "images": "Images/home decor/decor-9.jpg",
            "price": "555",
        }
    ];
    return (
        <div>
            <Container className='HomeDecor'>
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
function HomeDecor() {

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

export default HomeDecor