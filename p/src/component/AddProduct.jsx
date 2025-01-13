import React from "react";
import { useState } from "react";
import './AddProduct.css';
import { useNavigate } from 'react-router-dom';



const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [company, setCompany] = useState('');

    const navigate = useNavigate();

    async function addProduct() {
        console.warn(name, price, type, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:7000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, type, company, userId }),
            headers: {
                "Content-Type": "application/json",
                authorization: `jj ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result);
       result.success = navigate('/home')

    }

    return (



        <div className="product">

            <h1 className="ph1">Add Car</h1>
            <div className="input">

                <input className="i1" type="text" placeholder="Enter Product Name"
                    value={name} onChange={(e) => setName(e.target.value)} />

                <input className="i2" type="text" placeholder="Enter Product Price"
                    value={price} onChange={(e) => setPrice(e.target.value)} />

                <input className="i3" type="text" placeholder="Enter Product Type"
                    value={type} onChange={(e) => setType(e.target.value)} />

                <input className="i4" type="text" placeholder="Enter Product Company"
                    value={company} onChange={(e) => setCompany(e.target.value)} />

                <button className="addbtn" onClick={addProduct}>Add</button>

            </div>

        </div>

    )
}

export default AddProduct;
