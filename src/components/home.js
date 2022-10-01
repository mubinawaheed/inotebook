import React from "react";
import Notes_Component from "./Notes_Component";


export default function Home() {

  const mystile = {
    width: "60%"
  }

  return (
    <>
      <div className="container">
        <h2 className="my-3">Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >
              Email address
            </label>
            <input
              style={mystile}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              style={mystile}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div id="passwordHelpBlock" className="my-2 form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers.
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Notes_Component/>
      
    </>
  );
}
