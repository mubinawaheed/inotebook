import React from 'react'
import images from "../images.png"
import { useState } from 'react'
const Login = () => {

  const stile = {
    width: "130%",
    lineHeight: "1",
    padding: "0.2rem 0.75rem"
  }
  const [credentials, setc] = useState({email:'', password:''})

  const image =
  {
    // display: "block",
    height: "125px",
    width: "115px",
    margin: "auto"
  }
  const host = "http://localhost:5500"

  const onchange = (e) => {
    setc({...credentials, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDgzMGIyNDcwZTY1MmY0YjI1ZjdlIn0sImlhdCI6MTY2NDg4MTcyOH0.TZQkrWQzLXO6_TRsD1VcAz9dftQb9fgcg0r4Hl1BNUE"
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password })

    });

   console.log(await response.json())

  }
  return (
    <>
      <img style={image} className="d-flex" src={images} alt="" />
      <div className="container d-flex justify-content-center">

        <form className='my-2' onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input style={stile} type="email" className="form-control" id="email" name="email"
             value={credentials.email} aria-describedby="emailHelp" onChange={onchange}/>
            <div id="emailHelp" className="form-text my-2">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input style={stile} type="password" className="form-control" name="password" value={credentials.password}
             id="password" onChange={onchange} />

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
