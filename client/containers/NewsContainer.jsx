import React, { useState } from 'react';
import News1 from '../components/News1.jsx';
import News2 from '../components/News2.jsx'
import News3 from '../components/News3.jsx'


//We decided to pass our props into our container levels because we wanted to onboard passing our hooks
//despite there not being an actual reason to do so

const NewsContainer = ({news}) => {
    //initializing a hook that utitlizes a route that scrapes data as a nested array
    //initializing a hook to allow for conditional rendering
    const [tabs, tabsChange] = useState(1)
 

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
                    <div className="tab-text" value="LAFD" onClick={()=>tabsChange(1)}>LAFD</div>
                </div>
                <div className="tabs">
                    <img className="logos" src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c9877382.png" onClick={()=>tabsChange(2)}/>
                    <div className="tab-text" value="Youtube" onClick={()=>tabsChange(2)}>Youtube</div>
                </div>
                <div className="tabs">
                    <img className="logos" src={'https://pbs.twimg.com/profile_images/1171581672074043393/XNqsW9EE_400x400.jpg'} onClick={()=>tabsChange(3)}/>
                    <div className="tab-text" value="LA Times" onClick={()=>tabsChange(3)}>LA Times</div>
                </div>
            </div>
            {newsTab}
        </div>
     );
}
 
export default NewsContainer;
