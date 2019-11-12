import React from 'react'
import Messages from '../components/Messages.jsx';

//We decided to pass our props into our container levels because we wanted to onboard passing our hooks
//despite there not being an actual reason to do so

const MessagesContainer = (props) => {


    return ( 
        <div id="messages">
            <Messages/>
        </div>
     );
}
 
export default MessagesContainer;