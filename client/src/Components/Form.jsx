import React, { useState } from 'react'
import axios from 'axios'
import '../App.css';


const Form = () => {
    const[title, setTitle] = useState("")
    const[price, setPrice] = useState("")
    const[description, setDescription] = useState("")
    
    const sumbitHandler = (e) => {
        e.preventDefault()
        const list = {
            title,
            price,
            description
        }
        axios.post('http://localhost:5000/api/products' , list)
        .then((res)=>{
            console.log("sucessfully submited")
            setTitle("")
            setPrice("")
            setDescription("")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <> 
    <h1>Product Manager</h1>
    <form onSubmit={sumbitHandler}>
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
       <button>Create</button>
    </form>
    </>
  
  )
}

export default Form