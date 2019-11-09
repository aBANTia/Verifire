import React from 'react'
import Map from '../components/Maps.jsx'

//We decided to pass our props into our container levels because we wanted to onboard passing our hooks
//despite there not being an actual reason to do so

const MapsContainer = (props) => {
    return (
        <Map/>
      );
}
 
export default MapsContainer;