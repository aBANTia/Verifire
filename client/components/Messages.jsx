import React from 'react'

//Note the <React.Fragment> it's utilized instead of a <div>
// this allows for multiple items to be part of the render without the surrounding "holder" to be rendered in too
//because they're not rendered, we can't style them, so all selectors have to be initiated on our parent component

//this message component was built for the purpose of having an internal messaging board
//this could be tied to authentication for identification

const Messages = (props) => {
    return ( 
        <React.Fragment>
            <p>Messages</p>
        </React.Fragment>
        
     );
}
 
export default Messages;