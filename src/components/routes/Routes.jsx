import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "../pages/profile/Profile";
import Coder from "../pages/coder/Coder";
import Trainer from "../pages/trainer/Trainer";

const Routes = () => {
    return (
      <Router>
             <Route path="/" element ={<Profile/>}/>
             <Route path="/coder" component={Coder} />
             <Route path='/trainer' component={Trainer} />
             
      </Router>
    );
  };
  
  export default Routes;  


/* import React from "react";

const Routes = () => {
  return (
    <Router>
           <Route path="/" element ={<Home/>}/>
           <Route path="/tracker2" component={Tracker2} />
           <Route path='/tracker6' component={Tracker6} />
           <Route path="/tracker4" component={Tracker4} />
          <Route path="/tracker5" component={Tracker5} />
          <Route path="/tracker5" component={Tracker5} />
    </Router>
  );
};

export default Routes;  
*/

