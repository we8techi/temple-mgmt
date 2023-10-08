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
    } else if (activeTab === '#second') {
      return (
        <>
          <Card.Title>second Tab Content</Card.Title>
          <Card.Text>
            <p><a href="#">* Tenders</a> </p>
            <p><a href="#">* Recruitment</a> </p>
            <p><a href="#">* Temple Staff Details </a></p>
            <p><a href="#">* Green Vari Program</a> </p>
            <p><a href="#">* Yearly Report</a> </p>
            <p><a href="#">* Suggestions from Devotees for temple facilities </a></p>
          </Card.Text>
        </>
      );
    } else if (activeTab === '#third') {
      return (
        <>
          <Card.Title>third Tab Content</Card.Title>
          <Card.Text>
            <p><a href="#">* Online Darshan </a></p>
            <p><a href="#">* Online Donation</a></p>
            <p><a href="#">* Darshan Booking Pass</a></p>
            <p><a href="#">* Online Donation By QR Code</a></p>
            <p><a href="#">* Online Donation (SBI Collect)</a></p>
          </Card.Text>
        </>
      );
    } else if (activeTab === '#fourth') {
      return (
        <>
          <Card.Title>fourth Tab Content</Card.Title>
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
    <div >
      <Card bg="" text="light" >
        <Card.Header >
          <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabSelect}>
            <Nav.Item>
              <Nav.Link href="#first">Announcements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#second">Important Updates</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#third">Announcements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#fourth">General Updates</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {renderTabContent()}
        </Card.Body>
      </Card>

    </div>
  );
}

export default Announcement;
