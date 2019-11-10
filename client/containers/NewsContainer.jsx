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
    //initializing a hook to allow for conditional rendering
    const [tabs, tabsChange] = useState(1)

    //upon rendering, the fetch will occur and the hook 'newsUpdate' should update the state
    // useEffect(() => {
    //     axios.get('/news')
    //     .then(data => {
    //         newsUpdate(data)
    //     })
    // })
    

    //conditional rendering for different states based on user input to render differnet news sources
    let newsTab;
    if (tabs === 1) {
        newsTab = <News1 news={news} handleClick={handleClick}/>
    }
    if (tabs === 2) {
        newsTab = <News2 news={news} handleClick={handleClick}/>
    }
    if (tabs === 3) {
        newsTab = <News3 news={news} handleClick={handleClick}/>
    }

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
            <div id="tabs">
                <div className="tabs">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Seal_of_the_Los_Angeles_Fire_Department.png" onClick={()=>tabsChange(1)}/>
                    <input type="button" value="LAFD" onClick={()=>tabsChange(1)}/>
                </div>
                <div className="tabs">
                    <img src="https://png.pngtree.com/template/20190716/ourmid/pngtree-youtube-red-play-button-free-png-image_227909.jpg" onClick={()=>tabsChange(2)}/>
                    <input type="button" value="Youtube" onClick={()=>tabsChange(2)}/>
                </div>
                <div className="tabs">
                    <img src="https://avatars2.githubusercontent.com/u/320671?s=280&v=4" onClick={()=>tabsChange(3)}/>
                    <input type="button" value="LA Times" onClick={()=>tabsChange(3)}/>
                </div>
            </div>
            {newsTab}
        </React.Fragment>
     );
}
 
export default NewsContainer;
