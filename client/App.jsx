import React from  "react";

import MainContainer from "./containers/MainContainer.jsx";

//We used functional components throughout the application so we could utilize hooks
    //functional components don't require you to make constructors
    //they also don't need to have a super as a result
    //you pass in the name of your props inside the parameters of your function
    //note that there is no render() method as the implicit method in a functional component is render()
//We didn't instantiate state at the parent level because none of the state we use relates to other components

const App = () => {  
    return (
        <MainContainer />
      );
}
 
export default App;