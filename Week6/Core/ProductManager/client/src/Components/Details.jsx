import axios from "axios";
import React, { useEffect, useState, } from "react";
import {Link, useParams} from "react-router-dom";

const Details = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data);
                
            })
            .catch((err) => console.log(err));
    }, []); 
  return (
        <div>
            <h2> {product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
<br/>
<br/>
            <Link to="/">   Return to home page </Link>


        </div>

  )
}

export default Details