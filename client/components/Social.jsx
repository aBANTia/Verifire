import React, { useEffect, useState } from 'react';

//This component was built to view social media feeds of government accounts
//We began locally by targeting the LAFD

const Social = (props) => {
    // Create hook for the alerts state with initial values
    const [social, socialUpdate] = useState([[{title:'Loading...', link:'google.com'}],[{title:'Loading...', link:'google.com'}],[{title:'Loading...', link:'google.com'}]]);
    
    // Fetch alerts from the backend
    useEffect(() => {
        fetch('/alerts')
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res)
            socialUpdate([...res])
        })
    }, []);
    

    // Map incoming alerts to anchor tags
    const alerts = social.map((el, i) => {
        return <a key={i} href={el.link}>{el.title}</a>
    })

    // Spread anchor tags to fill module
    return ( 
        <div>
            {alerts}
        </div>
    );
}
 
export default Social;