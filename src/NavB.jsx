import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

const templeName = "श्रीविठ्ठल-रुक्मिणी मंदिर";

const NavB = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" collapseOnSelect>
        <Navbar.Brand href="/">{templeName}</Navbar.Brand>
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

            <NavDropdown title="सुविधा" id="basic-nav-dropdown">
              <NavDropdown.Item href="/accommodation">भक्त निवास</NavDropdown.Item>
              <NavDropdown.Item href="/passbooking">ऑनलाइन दर्शन पास</NavDropdown.Item>
              <NavDropdown.Item href="/service3">देणगी</NavDropdown.Item>
              <NavDropdown.Item href="/service4">विशेषाधिकार दर्शन</NavDropdown.Item>
              <NavDropdown.Item href="/service5">निविदा</NavDropdown.Item>
              <NavDropdown.Item href="/service6">भरती</NavDropdown.Item>
            </NavDropdown>

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