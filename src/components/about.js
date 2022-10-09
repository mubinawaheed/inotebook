import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import note_context from '../context/notes/notes_Context'


export default function About() {

  // const a = useContext(note_context)
  // useEffect(() => {
  //   a.update();
  //   // eslint-disable-next-line

  // },[])

  const host = "http://localhost:5500"
  const { userdetails, setdetails } = useState([])


  const GetUserDetails = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    console.log(json)
    // setdetails(json)
  }

  GetUserDetails()
  return (

    <div >
      <h2 className="container text-center my-2">Your Personal Info</h2>

      {/* <h3>Username</h3> */}
      <span>{userdetails.uname}</span>

      {/* <h3>EmailAddress</h3> */}
      <span>{userdetails.email}</span>

    </div>
  )
}
