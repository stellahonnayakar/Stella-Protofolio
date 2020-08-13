import React from 'react';
import './App.css';
import
{
  BrowserRouter as Router,
  Route,
}from "react-router-dom";
import Navbar from './Components/Navbar';
import Education from './Content/Education';
import Skills from './Content/Skills';
import Contact from './Content/Contact';
import Home from './Content/Home';
import About from './Content/About';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/about">
      <About/>
      </Route>
      <Route path="/education">
      <Education/>
      </Route>
      <Route path="/skills">
      <Skills/>
      </Route>
      <Route path="/contact">
      <Contact/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
