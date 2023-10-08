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

function TempleTimings() {
  // Define an array of objects representing each card
  const cardData = [
    {
      imgSrc: img1,
      title: 'पहाटे ५:३० वा',
      description: 'श्रींचे मंदिर पहाटे ५:३० वा उघडले जाते.',
    },
    {
      imgSrc: img2,
      title: 'सकाळी ९:०० ते ११:०० वा',
      description: 'सकाळी ९:०० ते ११:०० श्री श्रीविठ्ठल-रुक्मिणी अभिषेक.',
    },
    {
      imgSrc: img3,
      title: 'सकाळी ११:०० वा.',
      description: 'सकाळी ११:०० वा श्रींना गरम पाण्याचे स्नान.',
    },
    {
      imgSrc: img4,
      title: 'सकाळी ११:३०',
      description: 'श्रींना सुवासिक तेल व अत्तर पुजा.',
    },
    {
      imgSrc: img5,
      title: 'दुपारी १२:०० वा',
      description: 'श्रींना संपूर्ण पोशाख पुजा.',
    },
    {
      imgSrc: img6,
      title: 'दुपारी १२:१० वा',
      description: 'श्रींची चंदनउटी पुजा.',
    },
    {
      imgSrc: img5,
      title: 'दुपारी १२:३० वा',
      description: 'धुप आरती, एकआरती,महानैवेद्य, पंचआरती.',
    },
    {
      imgSrc: img6,
      title: 'रात्री ८:००वा',
      description: 'श्रींची आरती व उपहार नैवेद्य.',
    },
    {
      imgSrc: img6,
      title: 'रात्री ९:३० वा',
      description: `श्रींचे मंदिर बंद होते.
                (पूर्व प्रथेप्रमाणे एकदा मंदिर बंद झाले की पहाटे पर्यंत उघडले जात नाही.)

                टीप:-श्रींच्या उत्सवकाळात पूजेच्या वेळेत बदल केला जातो.`,
    },
    // Add more objects for additional cards as needed
  ];

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
      <div className="main-timeline-2">
        {cardData.map((card, index) => (
          <div className={`timeline-2 ${index % 2 === 0 ? 'left-2' : 'right-2'}`} key={index}>
            <MDBCard>
              <MDBCardImage
                src={card.imgSrc}
                alt="Responsive image"
                position="top"
              // style={{ maxWidth: '100% !important', height: 'auto !important' }}
              />
              <MDBCardBody className="p-4">
                <h4 className="fw-bold mb-4">{card.title}</h4>
                <p className="mb-0">{card.description}</p>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </MDBContainer>
  );
}

export default TempleTimings;