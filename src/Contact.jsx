import React, { useState } from 'react';

const templeAddress = `कार्यकारी अधिकारी,
                विठ्ठल रुक्मिणी मंदिर समिती,
                संत तुकाराम भवन,
                (श्रीविठ्ठल मंदिराशेजारी)
                पंढरपूर- ४१३३०४
                जि.सोलापूर, महाराष्ट्र.
                दुरध्वनी  - (०२१८६) २२४४६६,२२३५५०`;
const templeEmail = "xyz@xyz.com";
const addressLines = templeAddress.split("\n");

function Contact() {
    // State to store form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add code here to send the form data to your server or perform other actions.
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <h3>संपर्क करा</h3>
            <p>
                {addressLines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <p>आपल्या प्रतिक्रिया खालील ईमेल पत्त्यांवर पाठवा. <br />
                {templeEmail}  </p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
