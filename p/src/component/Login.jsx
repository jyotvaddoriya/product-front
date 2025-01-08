import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/home')
        }
    })

    const handellogin = async () => {
        console.log(email, password)
        let result = await fetch('http://localhost:7000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json()
        console.warn(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result))
            navigate("/home")
        } else {
            alert('Invalid Email or Password')
        }
    }


    return (
        <div className="login">

            <h1 className="lh1">LOGIN</h1>
            <div className="inputbox">
                <input className="input1" type="text" placeholder="Enter  your email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="input2" type="password" placeholder="Enter your password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handellogin} className="btn1">Login </button>
            </div>

        </div>
    )
}

export default Login;   