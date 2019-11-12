import React, { useEffect, useState } from 'react'

//Note the <React.Fragment> it's utilized instead of a <div>
// this allows for multiple items to be part of the render without the surrounding "holder" to be rendered in too
//because they're not rendered, we can't style them, so all selectors have to be initiated on our parent component

//this message component was built for the purpose of having an internal messaging board
//this could be tied to authentication for identification

const Messages = (props) => {

    //This hook was built to receive and show messages
    const [messages, setMessages]= useState([{message: 'message'}])
    //this hook was built to take in user input and utilize it to show messages sent
    const [input, setInput]= useState('')

    const displayMessage = messages.map((el, i) => {
        return <p key={i}>{el.message}</p>
    })

    //use effects mimics lifecycle methods, the second parameter being an empty array mimics componentDidMount
    useEffect(() => {
        //this is used to fetch the message from the database
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

    //hooks are simplified by making methods with hooks built into them
    //Think of the method that is paired in the hook ('setInput') here as another form of this.setState
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