import React from 'react';
import Login from '../components/Login.jsx'
import SignUp from '../components/SignUp.jsx'

//This container was made to display the landing page
//Ideally this will also contain auth and other things
//This will primarily be to display information regarding the site as a whole

//Note the <React.Fragment> it's utilized instead of a <div>
// this allows for multiple items to be part of the render without the surrounding "holder" to be rendered in too
//because they're not rendered, we can't style them, so all selectors have to be initiated on our parent component

const LandingContainer = (props) => {
    return ( 
        <React.Fragment>
            <Login/>
            <SignUp/>
        </React.Fragment>
     );
}
 
export default LandingContainer;