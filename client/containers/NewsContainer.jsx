import React, { useEffect, useState } from 'react';
import News1 from '../components/News1.jsx';
import News2 from '../components/News2.jsx'
import News3 from '../components/News3.jsx'
import axios from 'axios'

//We decided to pass our props into our container levels because we wanted to onboard passing our hooks
//despite there not being an actual reason to do so

const NewsContainer = () => {
    //initializing a hook that utitlizes a route that scrapes data as a nested array
    const [news, newsUpdate] = useState([[{title:'Loading...', link:'google.com'}],[{title:'Loading...', link:'google.com'}],[{title:'Loading...', link:'google.com'}]]);
    //initializing a hook to allow for conditional rendering
    const [tabs, tabsChange] = useState(1)

    // upon rendering, the fetch will occur and the hook 'newsUpdate' should update the state
    useEffect(() => {
        fetch('/news')
        .then(resp => {
            return resp.json()})
        .then(data => {
            newsUpdate([...data])
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    

    //conditional rendering for different states based on user input to render differnet news sources
    let newsTab;
    if (tabs === 1) {
        newsTab = <News1 news={news}/>
    }
    if (tabs === 2) {
        newsTab = <News2 news={news}/>
    }
    if (tabs === 3) {
        newsTab = <News3 news={news}/>
    }

    //splitting up the different components to be flipped through
    //made tabs and images that are both clickable to alter state that renders different components
    return ( 
        <div id="news">
            <div id="tabs">
                <div className="tabs">
                    <img className="logos" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Seal_of_the_Los_Angeles_Fire_Department.png" onClick={()=>tabsChange(1)}/>
                    <div value="LAFD" onClick={()=>tabsChange(1)}>LAFD</div>
                </div>
                <div className="tabs">
                    <img className="logos" src="https://png.pngtree.com/template/20190716/ourmid/pngtree-youtube-red-play-button-free-png-image_227909.jpg" onClick={()=>tabsChange(2)}/>
                    <div value="Youtube" onClick={()=>tabsChange(2)}/>
                </div>
                <div className="tabs">
                    <img className="logos" src="https://avatars2.githubusercontent.com/u/320671?s=280&v=4" onClick={()=>tabsChange(3)}/>
                    <div value="LA Times" onClick={()=>tabsChange(3)}/>
                </div>
            </div>
            {newsTab}
        </div>
     );
}
 
export default NewsContainer;
