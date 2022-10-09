import React from 'react'
import images from "../images.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const history = useNavigate()

  const stile = {
    width: "130%",
    lineHeight: "1",
    padding: "0.2rem 0.75rem"
  }
  const [credentials, setc] = useState({ uemail: "", upassword: ""})

  const image =
  {
    // display: "block",
    height: "125px",
    width: "115px",
    margin: "auto"
  }
  const host = "http://localhost:5500"

  const onchange = (e) => {
    setc({ ...credentials, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.uemail, password: credentials.upassword })

    });

    const json = await response.json()

    if (json.success) {
      //redirect and save the aut token
      localStorage.setItem('token', json.auth_token)
      setc({uemail:'', upassword:''})
      history("/")
    }
    else {
      alert("Invalid credentials")
    }

  }
  return (
    <>
      <img style={image} className="d-flex" src={images} alt="" />
      <div className="container d-flex justify-content-center">

        <form autoComplete="new-password" className='my-2' onSubmit={handlesubmit} >

          <div className="mb-3">
            <label htmlFor="uemail" className="form-label">Email address</label>
            <input required style={stile} type="email" className="form-control" id="uemail" name="uemail"
              aria-describedby="emailHelp" onChange={onchange} value={credentials.uemail} />
            <div id="emailHelp" className="form-text my-2">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="upassword" className="form-label">Password</label>
            <input required style={stile} type="password" className="form-control" name="upassword"
              id="upassword" onChange={onchange} value={credentials.upassword} />

            <div id="passwordHelpBlock" className="form-text my-2">
              Your password must be 8-20 characters long</div>
          </div>

          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login
