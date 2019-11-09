import React from 'react';
import ContentContainer from './ContentContainer.jsx';


//We created a main container preferentially as to carry our other containers
//This allows us to also utilize another layer for styling as well


const MainContainer = () => {

    return ( 
        <article id ="mainContainer">
            <ContentContainer/>
        </article>
     );
}
 
export default MainContainer;