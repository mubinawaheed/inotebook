
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/about'
import Note_state from './context/notes/notes_states';

function App() {
  return (
    <>
    <Note_state>

      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/about" element={<About/>}>
          
          </Route>

          <Route exact path="/" element={<Home/>}>
     
          </Route>

        </Routes>

      </Router>

    </Note_state>
    </>
  );
}

export default App;
