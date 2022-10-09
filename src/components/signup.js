import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  const navigate = useNavigate()
  const host = "http://localhost:5500"
  const [fields, setfields] = useState({ username: '', password: '', email: '', cpassword: '' })
  const stile = {
    width: "130%",
    lineHeight: "1",
    padding: "0.22rem 0.75rem"
  }
  const onchange = (e) => {
    setfields({ ...fields, [e.target.name]: e.target.value })
  }
  const toastmsg = async () => {
    toast.success("Account created successfully", { position: toast.POSITION.TOP_CENTER, autoClose: 500 })

  }
  const signin = async (e) => {
    e.preventDefault()
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: fields.email, password: fields.password, name: fields.username })
    })
    const json = await response.json()
    console.log(json.success)

    if (json.success) {
      //redirect and save the aut token
      localStorage.setItem('token', json.auth_token)
       toastmsg()
      setTimeout(() => {
        navigate("/")

      }, 2200);

    }
    else {
      alert("Invalid credentials")
    }
  }
  return (
    <div>
      <div className="container my-3 d-flex justify-content-center">

        <form className='my-3' onSubmit={signin} autoComplete="off">
        <h2 className="mb-3 mx-3">Create Account</h2>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input autoComplete="disabled" style={stile} required type="email" name='email'
              className="form-control" id="email" onChange={onchange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input autoComplete="disabled" style={stile} type="text"
              required name='username' className="form-control" id="username" onChange={onchange} />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input autoComplete="disabled" minLength={5} style={stile} required type="password"
              name='password' className="form-control" id="password" onChange={onchange} />
            <div className="form-text">Password must be 8 characters long.</div>

          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input autoComplete="disabled" minLength={5} style={stile}
              type="password" className="form-control" onChange={onchange} name='cpassword' id="cpassword" />
          </div>

          <button style={{ margin: "auto", display: "block" }} type="submit" className="btn btn-primary">
            Register</button>
          <ToastContainer />
        </form>

      </div>
    </div>
  )
}

export default Signup;
