import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'



function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/home')
        }
    })

    const collectData = async () => {
        console.warn(name, email, password)
        let result = await fetch('http://localhost:7000/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        localStorage.setItem("token", JSON.stringify(result.token));
        navigate('/home')

    }

    return (

        <div className="register">

            <h1 className="rh1">Register</h1>
            <div className="inputbox">

                <input className="inputbox1" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="enter Name" />

                <input className="inputbox2" type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="enter email" />

                <input className="inputbox3" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="enter password" />

                <button onClick={collectData} className="btn">Signup</button>
            </div>
        </div>



    );
}

export default Signup;