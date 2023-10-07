import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import img1 from './assets/chaitra.jpg';
import img2 from './assets/ashadhi.jpg';
import img3 from './assets/kartik.jpg';
import img4 from './assets/madhi.jpeg';

export default function Festivals() {
    return (
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            <MDBCol>
                <MDBCard>
                    <MDBCardImage
                        src={img1}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><h3>||चैत्री वारी||</h3></MDBCardTitle>
                        <MDBCardText>
                            चैत्र महिना हा नवीन वर्षातील पहिला महिना आहे. पंढरपुरात चैत्र शुद्ध एकादशीस म्हणजेच कामदा एकादशीस यात्रा भरते. सारे भाविक चंद्रभागा स्नान, विठ्ठल-रुक्मिणी दर्शन, पंढरी प्रदक्षिणा, भजन-कीर्तन करुन ही यात्रा साजरी करतात.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    <MDBCardImage
                        src={img2}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><h3>||आषाढी वारी||</h3></MDBCardTitle>
                        <MDBCardText>
                            आषाढी यात्रा ही पंढरीतील महायात्रा म्हणून ओळखली जाते. आषाढ महिन्यातील शुद्ध एकादशीस ही यात्रा भरते. या एकादशीस देवशयनी एकादशी म्हणतात. भगवंत या एकादशीपासुन शयन करतात. आषाढी एकादशीपासुन चातुर्मास चालु होतो. चातुर्मासात अधिकाधिक विठ्ठल गुणांचे रुपाचे श्रवण कीर्तन करुन भक्त विठ्ठल प्राप्तीसाठी प्रयत्न करतात. "आषाढी कार्तिकी विसरु नका मज । सांगतसे गुज पांडुरंग ॥ " आषाढी कार्तिकीला श्रीविठ्ठल-रुक्मिणीचे दर्शन २४ तास चालु असते. संत ज्ञानेश्वर महाराज आणि संत तुकाराम महाराज यांच्या दिंड्यांसह असंख्य दिंड्या महाराष्ट्रातील तसेच इतर राज्यातील कानाकोपर्‍यातुन पंढरीकडे श्रीविठ्ठल दर्शनासाठी येतात. वाखरी येथील संतनगर येथे सर्व संतांच्या पालख्या एकत्र होतात. आषाढ शुद्ध दशमीला सर्व पालख्या आणि दिंड्या एकमेकांना भेटतात. इथुन आषाढ शुद्ध दशमीला सकाळी सर्व पालख्या हळुहळु पंढरीकडे जायला निघतात. आषाढीला सारे वारकरी पवित्र चंद्रभागेत स्नान करुन संतांच्या पालख्यांसोबत पंढरी प्रदक्षिणा करतात.
                            "पुंडलिक वरदा हरी विठ्ठल" आणि "जय जय राम कृष्ण हरी" या नामघोषाने सारे वातावरण भारून जाते. एकादशीच्या दिवशी दुपारी एक वाजता सरदार खाजगीवाले यांच्या वाडयातील श्रीविठ्ठल-रुक्मिणी आणि श्रीमती राधाराणी यांची सजवलेल्या रथातुन प्रदक्षिणा मार्गाने मिरवणुक निघते. आषाढ शुद्ध पोर्णिमेला गोपालकाला होऊन यात्रेची सांगता होते. गोपाळपुर येथे सार्‍या दिंड्या आणि पालख्या एकत्र होतात. काल्याच्या कीर्तनानंतर सार्‍यांना गोपालकाला वाटला जातो.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    <MDBCardImage
                        src={img3}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><h3>||कार्तिकी वारी||</h3></MDBCardTitle>
                        <MDBCardText>
                            कार्तिकी यात्रा ही कार्तिक महिन्यातील शुद्ध एकादशीस पंढरपुरात साजरी केली जाते. शयनी एकादशीला झोपी गेलेले भगवंत या दिवशी उठतात. या उत्सवात चंद्रभागेच्या वाळवंटात ठिकठिकाणी कीर्तन प्रवचन चालू असते. संध्याकाळपासुन संपुर्ण वाळवंट भाविकांनी फुलुन जाते. एकादशीच्या दिवशी रात्रभर जागरही केला जातो. पोर्णिमेच्या दिवशी गोपाळपुरात गोपालकाला होतो भाविकांना प्रसाद वाटला जातो.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    <MDBCardImage
                        src={img4}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><h3>||माघी वारी||</h3></MDBCardTitle>
                        <MDBCardText>
                            माघी यात्रा माघ महिन्यातील शुद्ध एकादशीस भरते. या एकादशीस जया एकादशी म्हणतात. ठिकठिकाणी कीर्तन प्रवचन चालु असते. वारकरी विठ्ठल नाम गजरात तल्लीन होतात.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}