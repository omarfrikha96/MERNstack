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

    const deleteProduct = (proId)=>{
        axios.delete(`http://localhost:5000/api/products/${proId}`)
        console.log(`Your element with id ${proId} is deleted`)
        //filter (display after delete)
        const filtredProduct = products.filter(eachProduct =>{
            if (eachProduct._id === proId) {
                return false
            } else {
                return true
            }
        })
        setProducts(filtredProduct)
    }

    return (
        <div >
            <header>
                All Products:
            </header>
            {
                products.map((product, index) => (
                    <div key={index} className="product">
                    <Link to={product._id}>    {product.title} </Link>
                    
                    <button className="btn" onClick={()=>{deleteProduct(product._id)}}>Delete</button>

                    </div>
                ))
            }
        </div>
    );
};

export default Display;