import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavB = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" collapseOnSelect>
        <Navbar.Brand href="/">श्रीविठ्ठल-रुक्मिणी मंदिर</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">मुख्य पान</Nav.Link>
            <Nav.Link href="/temple-timings" title="वेळापत्रक">वेळापत्रक</Nav.Link>
            <Nav.Link href="/our-festivals">उत्सव/सण</Nav.Link>
            <Nav.Link href="/photo-gallery">फोटो संच</Nav.Link>
            <Nav.Link href="/temple-history">पंढरी महिमा</Nav.Link>
            <Nav.Link href="/contact">संपर्क</Nav.Link>
            <Nav.Link href="/about">आमच्याविषयी</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <div className="d-flex align-items-center ml-auto" style={{ marginRight: '8px' }} >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ marginRight: '4px' }}
            />
            <Button variant="secondary">शोधा</Button>
          </div>
        </Form>
      </Navbar>
    </div>
  )
}

export default NavB