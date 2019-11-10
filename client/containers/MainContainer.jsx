import React from 'react';
import ContentContainer from './ContentContainer.jsx';
import Navbar from 'react-bootstrap/Navbar'

//We created a main container preferentially as to carry our other containers
//This allows us to also utilize another layer for styling as well


const MainContainer = () => {

    return ( 
        <article id ="mainContainer">
             <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="https://www.clipartwiki.com/clipimg/detail/120-1200936_fire-clipart-safty-transparent-background-animated-fire.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' Verfire'}
                </Navbar.Brand>
            </Navbar>
            <ContentContainer/>
        </article>
     );
}
 
export default MainContainer;