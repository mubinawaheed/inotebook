import { useState,React } from 'react';


export default function About() {

  // const a = useContext(note_context)
  // useEffect(() => {
  //   a.update();
  //   // eslint-disable-next-line

  // },[])

  const host = "http://localhost:5500"
  const  [userdetails, setdetails] = useState({name:'', email:''})


  const GetUserDetails = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    setdetails(json)
  }

  GetUserDetails()
  return (

    <div >
      <h2 className="container text-center my-2">Your Personal Info</h2>

       <h4>Username</h4>
      <div>{userdetails.name}</div>

      <h4>Email Address</h4>
      <span>{userdetails.email}</span>
    </div>
  )
}
