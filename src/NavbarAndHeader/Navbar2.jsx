import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.css'
import { Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar2 = () => {
  return (
    <>
      <Col lg={12} md={12} sm={12} xsm={12} className="header20">
        <div className='header_links0' >
          <Link to="/TodayDeals" className='headerLinksOption0'>TodayDeals</Link>
          <Link to="/Electronics" className='headerLinksOption0'>Electronics</Link>
          <Link to="/signup" className='headerLinksOption'>Contact Us</Link>
        </div>
      </Col>
    </>
  )
}

export default Navbar2