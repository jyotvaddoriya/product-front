import React from "react";
import { useState, useEffect } from "react";
import { useParams,useNavigate, } from "react-router-dom";
import { useNavigation} from "react-router-dom";
import './UpdateProduct.css'

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:7000/product/${params.id}`,{
            headers:{
                authorization : `jj ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()
        console.warn(result)
        setName(result.name)
        setPrice(result.price)
        setType(result.type)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        console.warn(name, price, type, company)
        let result = await fetch(`http://localhost:7000/product/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, price, type, company }),
            headers: {
                'Content-type': "application/json",
                authorization : `jj ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json() 
        console.warn(result)

        navigate('/home')

    }
    return (



        <div className="uproduct">

            <h1 className="uh1">Update Car</h1>
            <div className="inu">

                <input className="iu1" type="text" placeholder="Enter Product Name"
                    value={name} onChange={(e) => setName(e.target.value)} />

                <input className="iu2" type="text" placeholder="Enter Product Price"
                    value={price} onChange={(e) => setPrice(e.target.value)} />

                <input className="iu3" type="text" placeholder="Enter Product Type"
                    value={type} onChange={(e) => setType(e.target.value)} />

                <input className="iu4" type="text" placeholder="Enter Product Company"
                    value={company} onChange={(e) => setCompany(e.target.value)} />

                <button className="updbtn" onClick={updateProduct}>Update</button>

            </div>

        </div>

    )
}

export default UpdateProduct;