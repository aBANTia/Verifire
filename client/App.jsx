import React from  "react";
import axios from 'axios';

import MainContainer from "./containers/MainContainer.jsx";

//We used functional components throughout the application so we could utilize hooks
    //functional components don't require you to make constructors
    //they also don't need to have a super as a result
    //you pass in the name of your props inside the parameters of your function
    //note that there is no render() method as the implicit method in a functional component is render()
//We didn't instantiate state at the parent level because none of the state we use relates to other components


//straightforward axios GET request to route '/news'
    //I initially factored this into a constructor, then set state with the result
    //implement at will, Frontend

function getNews(){
    axios.get(`http://localhost:3000/news`)
    .then(res => {
        //response will come as a nested array - each nested array is populated with articles from a unique source
            //eg. LA Times, Youtube, etc.
            //[
            //     [ { title: 'LA Times Title', link: 'LATimes.com' ],
            //     [ { title: 'Youtube Title', link: 'youtube.com' ]
            // ]
        console.log(res)
    })
}

const App = () => {  
    return (
        <MainContainer />
      );
}
 
export default App;