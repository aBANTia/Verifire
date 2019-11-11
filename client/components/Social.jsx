import React, { useEffect } from 'react';
import axios from 'axios';

//This component was built to view social media feeds of government accounts
//We began locally by targeting the LAPD and LAFD
//Eventually it could be possible to tie in OAuth into here to be able to post from within the app

const Social = (props) => {
    let social;
    useEffect(() => {
        // Fetch the social
        axios.get('/alerts')
        .then(data => {
            console.log(data)
            // social = data.map((el, i) => {
            //     return <a key={i} href={el.link}>{el.title}</a>
            // })
        })
    });
    

    return ( 
        <div>
            <p>Social</p>
            {/* {social} */}
        </div>
    );
}
 
export default Social;