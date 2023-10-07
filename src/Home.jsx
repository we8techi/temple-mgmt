import React from 'react'
import NavB from './NavB';
import IndividualIntervalsExample from './IndividualIntervalsExample';
import Announcement from './Announcement'
import GridExample from './GridExample'
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <div className='wrapper'>
            <IndividualIntervalsExample></IndividualIntervalsExample>
            <Announcement></Announcement>
            <br></br>
            <GridExample></GridExample>
        </div>
    )
}

export default Home