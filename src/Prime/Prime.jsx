import React from 'react'
import Header from '../NavbarAndHeader/Header'
import Navbar from '../NavbarAndHeader/Navbar'
import Navbar2 from '../NavbarAndHeader/Navbar2'
import { CartProvider } from 'react-use-cart'
import { Link } from '@mui/material'
import Footer from '../Footer/Footer'
import Footer2 from '../Footer/Footer2'
function Prime() {

    return (

        <CartProvider>
            <Header />
            <Navbar />
            <Navbar2 />
            <div className="container-fluid prime text-light text-center pt-3">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <h2 className="fw-bold">amazon prime</h2>
                        <h2 className="h1 pt-4 pb-4 fw-bold">we're giving you a<br /><span className="text-info">30 day free trial </span> of Amazon Prime</h2>
                        <p>Only EGP 29.00/month after trial. Cancel anytime. Terms and conditions apply</p>
                        <Link className='text-light d-block mb-3'>Explore other plans</Link>
                        <Link className="btn-prime btn text-dark p-3 fw-bold">Try Prime free for 30 days</Link>
                    </div>
                </div>
            </div>
            <Footer />
            <Footer2 />
        </CartProvider>
    )
}

export default Prime