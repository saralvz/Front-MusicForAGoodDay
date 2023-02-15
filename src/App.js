import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from './components/pages/profile/Profile';
import Coder from './components/pages/coder/Coder';
import Trainer from './components/pages/trainer/Trainer';


function App() {
  return (  
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element ={<Profile/>}/>
      <Route path="coder" element ={<Coder/>}/>
      <Route path="trainer" element ={<Trainer/>}/>
      <Route path="*" element={<Profile />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
