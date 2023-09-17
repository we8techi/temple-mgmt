import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ImpLinks from './ImpLinks';

function Announcement() {
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
            <a className="implinks" href="http://117.247.89.131/qms1/"><b> * Online Darshan Pass Booking Click Here * </b></a>
            <br></br>
            <a href="images/onlinerules.pdf"><b>* Rules &amp; Regulations for Online Darshan Pass Booking * </b></a>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </>
      );
    } else if (activeTab === '#link') {
      return (
        <>
          <Card.Title>Link Tab Content</Card.Title>
          <Card.Text>
            <p>* Tenders </p>
            <p>* Recruitment </p>
            <p>* Temple Staff Details </p>
            <p>* Green Vari Program </p>
            <p>* Yearly Report </p>
            <p>* Suggestions from Devotees for temple facilities </p>
          </Card.Text>
        </>
      );
    }
  };

  return (
    <div className='ml-auto'>
      <Card bg="dark" text="light" style={{ width: '36rem', marginLeft: '0px' }}>
        <Card.Header >
          <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabSelect}>
            <Nav.Item>
              <Nav.Link href="#first">Announcements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Important Updates</Nav.Link>
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
      <ImpLinks></ImpLinks>
    </div>
  );
}

export default Announcement;
