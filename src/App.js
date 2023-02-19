import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/atoms/atom-Header/Atom-Header';
import Profile from './components/pages/profile/Profile';
import Coder from './components/pages/coder/Coder';
import Trainer from './components/pages/trainer/Trainer';
import Footer from './components/atoms/atom-Footer/Atom-Footer';


function App() {
  return (  
    <div className="App">
      <Header />
      <Router>
      <Routes>
      <Route path="/" element ={<Profile/>}/>
      <Route path="coder" element ={<Coder/>}/>
      <Route path="trainer" element ={<Trainer/>}/>
      <Route path="*" element={<Profile />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
