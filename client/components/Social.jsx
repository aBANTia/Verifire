import React, { useEffect, useState } from 'react';
import axios from 'axios';

//This component was built to view social media feeds of government accounts
//We began locally by targeting the LAPD and LAFD
//Eventually it could be possible to tie in OAuth into here to be able to post from within the app

const Social = (props) => {
    const [social, socialUpdate] = useState([[{title:'Loading...', link:'google.com'}],[{title:'Loading...', link:'google.com'}],[{title:'Loading...', link:'google.com'}]]);
    
    useEffect(() => {
        // Fetch the social
        fetch('/alerts')
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res)
            socialUpdate([...res])
        })
    }, []);
    
    const alerts = social.map((el, i) => {
        return <a key={i} href={el.link}>{el.title}</a>
    })

    return ( 
        <div>
            {alerts}
        </div>
    );
}
 
export default Social;