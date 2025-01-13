import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Nav.css'

function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/Signup')
  }
  return (
    <>
      <div>
        <img src="/src/img/logo.png" alt="logo" className="logo" />
        {
          auth ? <ul className="nav-ul">
            <li ><Link to="/home">CAR</Link></li>
            <li ><Link to="/add">Add Car</Link></li>
            <li ><Link to="/abouts">About us</Link></li>
            <li><Link onClick={logout} to="/Signup">Logout({JSON.parse(auth).name})</Link></li>
          </ul>
            :
            <ul className="nav-ul nav-right">
              <li><Link to="/Signup">Signup</Link></li>
              <li><Link to="/Login">Login</Link></li>
            </ul>
        }



      </div>
    </>
  )
}

export default Nav;