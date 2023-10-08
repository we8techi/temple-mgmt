import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage';
import banner3 from './assets/desktop-wallpaper-vitthal.jpg';
import banner1 from './assets/vrbanner.jpg';
import banner2 from './assets/wallpaper-vitthal.jpg';
import React from 'react';

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100" width="840" height="358"
                    src={banner1}
                    alt="text"
                />
                <Carousel.Caption variant="dark">
                    <h3>श्री विठ्ठल रुक्मिणी मंदिर समिती,पंढरपूर</h3>
                    <p>ही पंढरपूरच्या श्री विठ्ठल-रुक्मिणी मंदिराची नमुना वेबसाइट आहे. ही वेबसाईट तुम्हाला श्री पांडुरंग, माता रुक्मिणी आणि पंढरपूरबद्दल महत्त्वाची आणि नेमकी माहिती पुरवते.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100" width="840" height="358"
                    src={banner2}
                    alt="text"
                />
                <Carousel.Caption>
                    <h3>श्री विठ्ठल रुक्मिणी मंदिर समिती,पंढरपूर</h3>
                    <p>ही पंढरपूरच्या श्री विठ्ठल-रुक्मिणी मंदिराची नमुना वेबसाइट आहे. ही वेबसाईट तुम्हाला श्री पांडुरंग, माता रुक्मिणी आणि पंढरपूरबद्दल महत्त्वाची आणि नेमकी माहिती पुरवते.</p>
                    <p>पंढरपूरला येण्याचे विविध मार्ग, विविध नकाशे, राहण्याची सोय, पंढरपूरच्या परिसरातील विविध तीर्थक्षेत्रे, मंदिराचा दैनंदिन कार्यक्रम, 1973 चा मंदिर कायदा, मंदिराच्या विश्वस्तांनी हाती घेतलेले वेगवेगळे प्रकल्प आणि महत्त्वाच्या गोष्टींची बहुमोल माहिती यात मिळते. </p>
                    <p>या साइटच्या सर्व आदरणीय अभ्यागतांना विनंती आहे की त्यांनी त्यांच्या सूचना आणि टिप्पण्या आम्हाला मेलद्वारे किंवा ईमेलद्वारे पाठवा- संपर्क क्रमांक: +91 999990000, ईमेल: xyz@xyz.xyz.com</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" width="840" height="358"
                    src={banner3}
                    alt="text"
                />
                <Carousel.Caption>
                    <h3>श्री विठ्ठल रुक्मिणी मंदिर समिती,पंढरपूर</h3>
                    <p>ही पंढरपूरच्या श्री विठ्ठल-रुक्मिणी मंदिराची नमुना वेबसाइट आहे. ही वेबसाईट तुम्हाला श्री पांडुरंग, माता रुक्मिणी आणि पंढरपूरबद्दल महत्त्वाची आणि नेमकी माहिती पुरवते.</p>
                    <p>पंढरपूरला येण्याचे विविध मार्ग, विविध नकाशे, राहण्याची सोय, पंढरपूरच्या परिसरातील विविध तीर्थक्षेत्रे, मंदिराचा दैनंदिन कार्यक्रम, 1973 चा मंदिर कायदा, मंदिराच्या विश्वस्तांनी हाती घेतलेले वेगवेगळे प्रकल्प आणि महत्त्वाच्या गोष्टींची बहुमोल माहिती यात मिळते. </p>
                    <p>या साइटच्या सर्व आदरणीय अभ्यागतांना विनंती आहे की त्यांनी त्यांच्या सूचना आणि टिप्पण्या आम्हाला मेलद्वारे किंवा ईमेलद्वारे पाठवा- संपर्क क्रमांक: +91 999990000, ईमेल: xyz@xyz.xyz.com</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;