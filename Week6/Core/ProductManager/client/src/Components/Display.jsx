import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Display = (props) => {
    
    //Any change that happens in create, is available here as well due to state lifted and passed down from their common parent (Main)
    const { products, setProducts} = props;

    //On initial render of this component, this useEffect will run its request to our Server
    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then((res) => {
                console.log(res.data)
                setProducts(res.data.product);
                
            })
            .catch((err) => console.log(err));
    }, []); //An empty dependency array means the useEffect is not listening for any state change. 
                //It will run only on a complete render (e.g. initial render, refresh, or coming back to this component from another)

    return (
        <div>
            <header>
                All Products:
            </header>
            {
                products.map((product, index) => (
                    <div key={index}>
                        {/* This is where :id in our app.js path gets its value... We can access this info via props */}
                        {/* Note: when styling, the DOM read "Link" as an a tag */}
                        <Link to={`/product/${product._id}`}>
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Display;