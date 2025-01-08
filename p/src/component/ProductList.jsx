import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:7000/products');
        result = await result.json();
        setProducts(result);
    };

   const deleteProduct = async(id) => {
    let result = await fetch(`http://localhost:7000/product/${id}`,{
        method:"delete"
    });
    result =await result.json();
    if(result){
        getProducts();  
    }
   }

    return (
        <div className="products">
            <h3 className="ch3">CAR List</h3>
            <ul className="u">
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Type</li>
                <li>Operation1</li>
                <li>Operation2</li>
            </ul>
            {
                products.map((item, index) => (
                    <ul className="u" key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.type}</li>
                        <li><button className="libtn"onClick={()=> deleteProduct(item._id)}>Delete</button></li>
                        <li><Link to={"/update/"+item._id}>Update</Link></li>
                    </ul>
                ))
            }
        </div>
    );
}

export default ProductList;
