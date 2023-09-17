import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import NavB from './NavB';
import Banner from './Banner';
import DetailsCard from './DetailsCard'
import GridExample from './GridExample'
import Footer from './Footer';

function App() {
  return (
    <>
      <div className=''>
        <Banner></Banner>
        <NavB></NavB>
        <DetailsCard></DetailsCard>
        <br></br>
        <GridExample></GridExample>
      </div>

      <br></br>
      <Footer></Footer>
    </>
  );
}

export default App
