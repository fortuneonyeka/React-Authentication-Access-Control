import React from 'react'
import { NavLink } from "react-router-dom"
import Login from "./buttons/Login"
import SignUP from "./buttons/SignUP"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto fw-bold">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand mx-auto fw-bold ms-2 text-success" >FOI</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link mx-5" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link" aria-current="page" >Dashboard</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink to="/reset" className="nav-link mx-3" aria-current="page" >Reset</NavLink>
        </li>
      </ul>
      <SignUP />
      <Login />
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header