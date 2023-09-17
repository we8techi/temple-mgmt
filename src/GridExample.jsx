import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from './assets/vr_02.jpg';
import img2 from './assets/vr_03.jpg';
import img3 from './assets/vr_card_02.jpg';
import img4 from './assets/vr_img_6.jfif';
import img5 from './assets/temple_gallery_2.jfif';
import img6 from './assets/temple_gallery_5.jfif';
import { Button } from 'react-bootstrap';

function GridExample() {
  // Define an array of card data
  const cardData = [
    {
      title: 'Utsav Photos',
      imageSrc: img6, // Replace with your image URL
      description: 'Description for Card 2...',
    },
    {
      title: 'Shri Photos',
      imageSrc: img1, // Replace with your image URL
      description: 'Description for Card 1...',
    },
    {
      title: 'Darshan',
      imageSrc: img4, // Replace with your image URL
      description: 'Description for Card 3...',
    },
    {
      title: 'Decoration',
      imageSrc: img5, // Replace with your image URL
      description: 'Description for Card 3...',
    },
    {
      title: 'Other',
      imageSrc: img2, // Replace with your image URL
      description: 'Description for Card 3...',
    },
    {
      title: 'Other Photos',
      imageSrc: img3, // Replace with your image URL
      description: 'Description for Card 2...',
    },
    {
      title: 'Darshan',
      imageSrc: img4, // Replace with your image URL
      description: 'Description for Card 3...',
    },
    {
      title: 'Decoration',
      imageSrc: img5, // Replace with your image URL
      description: 'Description for Card 3...',
    },
    {
      title: 'Abhishek',
      imageSrc: img2, // Replace with your image URL
      description: 'Description for Card 3...',
    },
    {
      title: 'Other Photos',
      imageSrc: img3, // Replace with your image URL
      description: 'Description for Card 2...',
    },
    // Add more card data as needed
  ];

  return (
    <Row xs={1} md={5} className="g-1">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card bg="dark" text="light">
            <Card.Img variant="top" src={card.imageSrc} alt={`Card ${idx + 1}`} style={{ height: '100px' }} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                <Button variant="primary">See More</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;