import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-light">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <Container>
          <Row className="mt-5">
            {/* Grid column */}
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-0"></i>SparkMind Ventures Pvt. Ltd.
              </h6>
              <p>
                Leading IT solution company dedicated to providing cutting-edge technology solutions tailored to meet the unique needs of businesses of all sizes. With a team of experienced professionals and a commitment to innovation, we empower organizations to thrive in the digital age.
              </p>
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Hinjawadi phase1, Pune</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                we8techstartup@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 020 250 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 020 250 567 89</p>
            </Col>
            {/* Grid column */}
          </Row>
          {/* Grid row */}
        </Container>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" href="mailto:maddy.nikam5@gmail.com"> maddy.nikam5</a>
      </div>
      {/* Copyright */}
    </footer>
    /* Footer */
  );
}

export default Footer;
