import React from 'react';
import MapsContainer from './MapsContainer.jsx';
import MessagesContainer from './MessagesContainer.jsx';
import NewsContainer from './NewsContainer.jsx';
import SocialContainer from './SocialContainer.jsx';

//This container was made to be a routing point from the main landing page

const ContentContainer = ({news}) => {
    return ( 
        <div id="content">
            <NewsContainer news={news}/>
            <SocialContainer/>
            <MapsContainer/>
            <MessagesContainer/>
        </div>
     );
}
 
export default ContentContainer;