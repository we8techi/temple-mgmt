import Card from 'react-bootstrap/Card';
import Announcement from './Announcement';



function TextExample() {

  return (
    <div className="d-flex mr-0">
      <Card bg="dark" text="light" style={{ width: '40rem' }} >
        <Card.Body>
          <Card.Title>Shri Vitthal Rukimini Mandir Samiti</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Pandharpur</Card.Subtitle>
          <Card.Text>
            <p> This is an official website of Shri Vitthal-Rukmini temple of Pandharpur. This website provides you important and precise information about Shri Pandurang, Mata Rukmini and Pandharpur.</p>
            <p> It also provides valuable information about various ways to come to Pandharpur, various maps, accommodation facility, different pilgrimage Centers in the vicinity of Pandharpur, daily program of the temple, The Temple Act of 1973, different projects undertaken by trustees of the temple and important contact numbers.</p>
            <p>All respected visitors of this site are kindly requested to send their suggestions and comments to us by mail or through email- eotemple@gmail.com</p>

          </Card.Text>
          <Card.Link href="mailto:maddy.nikam5@gmail.com">Click here to Send Email</Card.Link>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
      <Announcement></Announcement>
    </div>
  );
}

export default TextExample;