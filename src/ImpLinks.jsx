import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function ImpLinks() {
  // Define a state variable to track the active tab
  const [activeTab, setActiveTab] = useState('#first');

  // Function to handle tab selection
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  // Render content based on the active tab
  const renderTabContent = () => {
    if (activeTab === '#first') {
      return (
        <>
          <Card.Title>Active Tab Content</Card.Title>
          <Card.Text>
            <p><a href="#">* Online Darshan </a></p>
            <p><a href="#">* Online Donation</a></p>
            <p><a href="#">* Darshan Booking Pass</a></p>
            <p><a href="#">* Online Donation By QR Code</a></p>
            <p><a href="#">* Online Donation (SBI Collect)</a></p>
          </Card.Text>
        </>
      );
    } else if (activeTab === '#link') {
      return (
        <>
          <Card.Title>Link Tab Content</Card.Title>
          <Card.Text>
            <p><a href="#">* Bhakta Nivas Gallery </a></p>
            <p><a href="#">* Commmittee and Chairman</a></p>
            <p><a href="#">* Advisors</a></p>
          </Card.Text>
        </>
      );
    }
  };

  return (
    <Card bg="dark" text="light" style={{ width: '36rem', marginLeft: '0px' }}>
      <Card.Header>
        <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabSelect}>
          <Nav.Item>
            <Nav.Link href="#first">Live Links</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Committee | Accomodation</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Card.Header>
      <Card.Body>
        {renderTabContent()}
      </Card.Body>
    </Card>
  );
}

export default ImpLinks;
