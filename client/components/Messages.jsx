import React, { useEffect, useState } from 'react'

//Note the <React.Fragment> it's utilized instead of a <div>
// this allows for multiple items to be part of the render without the surrounding "holder" to be rendered in too
//because they're not rendered, we can't style them, so all selectors have to be initiated on our parent component

//this message component was built for the purpose of having an internal messaging board
//this could be tied to authentication for identification

const Messages = (props) => {

    //This hook was built to receive and show messages
    const [messages, setMessages]= useState([{message: 'message'}])
    const [input, setInput]= useState('')

    const displayMessage = messages.map((el, i) => {
        return <p key={i}>{el.message}</p>
    })

    useEffect(() => {
        fetch('/messages')
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            setMessages([...data])
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleType = e => {
        setInput(e.target.value)
    };

    const handleClick = () => {
        // fetch('/messages/create', {
        //     method: 'POST',
        //     body: {message: input}})
        setMessages(messages.concat([{'message': input}]))
        setInput('');
    }

    return ( 
        <React.Fragment>
            {displayMessage}
            <input type="text" placeholder="Enter message here" value={input} onChange={handleType}/>
            <input type="button" value="press to send" onClick={handleClick}/>
        </React.Fragment>
        
     );
}
 
export default Messages;