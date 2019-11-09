import React, { useEffect, useState } from 'react';
import News1 from '../components/News1.jsx';
import News2 from '../components/News2.jsx'
import News3 from '../components/News3.jsx'
import axios from 'axios'

//We decided to pass our props into our container levels because we wanted to onboard passing our hooks
//despite there not being an actual reason to do so

const NewsContainer = () => {
    //initializing a hook that utitlizes a route that scrapes data as a nested array
    const [news, newsUpdate] = useState([[{title:'article', link:'google.com'}],[{title:'article diff', link:'google.com'}],[{title:'article dif', link:'google.com'}]]);

    //upon rendering, the fetch will occur and the hook 'newsUpdate' should update the state
    // useEffect(() => {
    //     axios.get('/news')
    //     .then(data => {
    //         newsUpdate(data)
    //     })
    // })
    

    //creating a method that on click, handles the event of updating the state by fetching more information
    //Just like class constructors, this method needs to be initialized where the state is
    const handleClick = () => {
        axios.get('/news')
        .then(data => {
            newsUpdate(data)
        })
    }
    //splitting up the different components to be flipped through
    return ( 
        <React.Fragment>
            <News1 news={news} handleClick={handleClick}/>
            <News2 news={news} handleClick={handleClick}/>
            <News3 news={news} handleClick={handleClick}/>
        </React.Fragment>
     );
}
 
export default NewsContainer;
