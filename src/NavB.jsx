import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import About from './About'; // Import your About component

const NavB = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="fixed-top" variant="dark">
        <Navbar.Brand href="/">Temple Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/temple-timings">Timings</Nav.Link>
            <Nav.Link href="/our-festivals">Festivals</Nav.Link>
            <Nav.Link href="/photo-gallery">Gallery</Nav.Link>
            <Nav.Link href="/temple-history">History</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
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
            <Button variant="secondary">Search</Button>
          </div>
        </Form>
      </Navbar>
    </div>
  )
}

export default NavB