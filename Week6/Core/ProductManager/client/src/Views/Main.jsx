import React, { useState } from 'react'
import Display from '../Components/Display'
import Form from '../Components/Form'


const Main = () => {

    const [products , setProducts] =useState([]);

  return (
    <div>  
        <Form products={products}  setProducts={setProducts}/>
        <Display products={products}  setProducts={setProducts}/>
    </div>
  )
}

export default Main