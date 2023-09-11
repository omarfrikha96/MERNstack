import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Display = (props) => {
    

    const { products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then((res) => {
                console.log(res.data)
                setProducts(res.data.product);
                
            })
            .catch((err) => console.log(err));
    }, []); 

    return (
        <div>
            <header>
                All Products:
            </header>
            {
                products.map((product, index) => (
                    <div key={index}>
                    <Link to={product._id}>    {product.title} </Link>
                         

                    </div>
                ))
            }
        </div>
    );
};

export default Display;