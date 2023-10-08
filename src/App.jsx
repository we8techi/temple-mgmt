import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './Home';
import TempleTimings from './TempleTimings';
import Festivals from './Festivals';
import Gallery from './Gallery';
import Contact from './Contact';
import FormExample from './FormExample';
import History from './History';
import NavB from './NavB';

import Footer from './Footer';

function App() {
    return (
        <>
            <div>
                <NavB></NavB>
            </div>
            <div className="wrapper">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/temple-timings" element={<TempleTimings />} />
                        <Route path="/temple-history" element={<History />} />
                        <Route path="/our-festivals" element={<Festivals />} />
                        <Route path="/photo-gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/passbooking" element={<FormExample />} />
                    </Routes>
                </BrowserRouter>
            </div>

            <div>
                <br />
                <Footer></Footer>
            </div>

        </>
    );
}

export default App;