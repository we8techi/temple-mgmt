import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import img1 from './assets/vr_02.jpg';
import img2 from './assets/vr_03.jpg';
import img3 from './assets/vr_card_02.jpg';
import img4 from './assets/vr_img_6.jfif';
import img5 from './assets/temple_gallery_2.jfif';
import img6 from './assets/temple_gallery_5.jfif';

export default function TempleTimings() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src={img1}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">पहाटे ५:३० वा</h4>
              <p className="mb-0">
                श्रींचे मंदिर पहाटे ५:३० वा उघडले जाते.
              </p>
              {/* <p >
                <MDBIcon far icon="clock" /> {Date()}
              </p> */}
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardImage
              src={img2}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">सकाळी ९:०० ते ११:०० वा</h4>
              {/* <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2016
              </p> */}
              <p className="mb-0">
                सकाळी ९:०० ते ११:०० श्री श्रीविठ्ठल-रुक्मिणी अभिषेक.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src={img3}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">सकाळी ११:०० वा.</h4>
              {/* <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2015
              </p> */}
              <p className="mb-0">
                सकाळी ११:०० वा श्रींना गरम पाण्याचे स्नान.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardImage
              src={img4}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">सकाळी ११:३० ते १२:०० वा</h4>
              {/* <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2014
              </p> */}
              <h5 className="fw-bold mb-4">सकाळी ११:३० वा</h5>
              <p >
                श्रींना सुवासिक तेल व अत्तर पुजा.
              </p>
              <h5 className="fw-bold mb-4">सकाळी ११:३० ते १२:०० वा</h5>
              <p>
                श्रींना संपूर्ण पोशाख पुजा.
              </p>
              <h5 className="fw-bold mb-4">सकाळी १२:०० वा</h5>
              <p className="mb-0">
                श्रींची चंदनउटी पुजा.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src={img1}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">दुपारी१२:३० वा</h4>
              {/* <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2013
              </p> */}
              <p className="mb-0">
                धुप आरती, एकआरती,महानैवेद्य, पंचआरती.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardImage
              src={img6}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">रात्री ८:००वा</h4>
              {/* <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2013
              </p> */}
              <p className="mb-0">
                श्रींची आरती व उपहार नैवेद्य.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src={img5}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">रात्री ९:३० वा</h4>
              {/* <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2013
              </p> */}
              <p className="mb-0">
                श्रींचे मंदिर बंद होते.
                (पूर्व प्रथेप्रमाणे एकदा मंदिर बंद झाले की पहाटे पर्यंत उघडले जात नाही.)

                टीप:-श्रींच्या उत्सवकाळात पूजेच्या वेळेत बदल केला जातो.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
  );
}