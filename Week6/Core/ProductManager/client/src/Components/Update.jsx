import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const Update = () => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
  
    const[title, setTitle] = useState("")
    const[price, setPrice] = useState("")
    const[description, setDescription] = useState("")
  
    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])
  
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/products/${id}`, {
            title,    
            price ,    
            description
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => {console.log(err) })
    }

  return (
    <div>
            <form onSubmit={updateProduct}>
        <div className='case'>
            <label htmlFor='title'>Title: </label>
            <input className='input' name='title' type='text' onChange={e=>setTitle(e.target.value) } value={title}></input>  
        </div>
        <div className='case'>
            <label htmlFor='price'>Price: </label>
            <input className='input' name='price' type='text' onChange={e=>setPrice(e.target.value) } value={price}></input>  
        </div>
        <div className='case'>
            <label htmlFor='description'>Description: </label>
            <input className='input' name='description' type='text' onChange={e=>setDescription(e.target.value) } value={description}></input>  
        </div>
       <button>Update</button>
    </form>

    </div>
  )
}

export default Update