import React from 'react';
import News from '../components/News.jsx';

//We decided to pass our props into our container levels because we wanted to onboard passing our hooks
//despite there not being an actual reason to do so

const NewsContainer = () => {
    return ( 
        <News/>
     );
}
 
export default NewsContainer;
