import React,{useState,useEffect} from "react";
import './Update.css'
const Update = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const[type,setType]=useState("");
    const [company, setCompany] = useState('');

    const updateProduct =async() => {
        console.warn(name,email,type,company)
    }
    return (



        <div className="update">

            <h1 className="uh1">Update Car</h1>
            <div className="int">

                <input className="int1" type="text" placeholder="Enter Product Name"
                value={name} onChange={(e) => setName(e.target.value)}   />

                <input className="int2" type="text" placeholder="Enter Product Price"
                value={email} onChange={(e) => setEmail(e.target.value)}  />

                <input className="int3" type="text" placeholder="Enter Product Type"
                value={type} onChange={(e) => setType(e.target.value)}  />

                <input className="int4" type="text" placeholder="Enter Product Company"
                value={company} onChange={(e) => setCompany(e.target.value)} />

                <button onclick={updateProduct} className="updbtn" >Add</button>

            </div>

        </div>

    )
}

export default Update;
