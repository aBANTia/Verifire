import React from 'react';
import MapsContainer from './MapsContainer.jsx';
import MessagesContainer from './MessagesContainer.jsx';
import NewsContainer from './NewsContainer.jsx';
import SocialContainer from './SocialContainer.jsx';

//This container was made to be a routing point from the main landing page

const ContentContainer = () => {
    return ( 
        <React.Fragment>
            <NewsContainer/>
            <SocialContainer/>
            <MapsContainer/>
            <MessagesContainer/>
        </React.Fragment>
     );
}
 
export default ContentContainer;