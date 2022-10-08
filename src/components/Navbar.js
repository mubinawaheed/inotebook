import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'


export default function Navbar() {
  let location = useLocation()

  useEffect(() => {
  }, [location]);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">

            <Link className="navbar-brand" to="/"><strong> iNotebook</strong></Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/" aria-current="page">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/notes"?"active":""}`} to="/notes">Your Notes</Link>
                </li>


              </ul>

                <Link className="btn btn-outline-primary mx-1" to="/login">Login</Link>
                <Link className="btn btn-outline-primary mx-1" to="/signup" >Signup</Link>

            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
