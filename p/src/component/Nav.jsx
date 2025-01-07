import React from "react";
import { Link,useNavigate} from "react-router-dom";
import './Nav.css'

function Nav() {
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
       localStorage.clear();
       navigate('/Signup')
    } 
    return(
            <>
      <div>
            <ul className="nav-ul">
                <li ><Link to="/home">Home page</Link></li>
                <li ><Link to="/add">Add Product</Link></li>
                <li ><Link to="/update">update Product</Link></li>
                <li ></li>
                <li ><Link to="/profile">profile</Link></li>
                <li> { auth ? <Link onClick={logout} to="/Signup">logout</Link> : <Link to="/Signup">Signup </Link>} </li>
                <li ><Link to="/login">Login</Link></li>
            </ul>
      </div>
        </>
    )
}

export default Nav;