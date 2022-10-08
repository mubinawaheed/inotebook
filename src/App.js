
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/about'
import Login from './components/login'
import Signup from './components/signup'
import Note_state from './context/notes/notes_states';

function App() {
  return (
    <>
    <Note_state>

      <Router>
        <Navbar />
        <div className="container">

        <Routes>

          <Route exact path="/about" element={<About/>}></Route>

          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>

        </Routes>

        </div>
      </Router>

    </Note_state>
    </>
  );
}

export default App;
