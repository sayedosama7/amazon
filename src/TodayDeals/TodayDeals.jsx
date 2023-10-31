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
            <Container className='TodayDeals'>
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
function TodayDeals() {

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

export default TodayDeals