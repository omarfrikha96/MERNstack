import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const From = () => {

    const [id , setId] = useState(1);
    const [category, setcategory] = useState("people");

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        setId("")
        setcategory("")
        navigate("/" + category + "/" + id)
    }

  return (
    <form onSubmit={handleForm}>
        <label htmlFor='search'> Search for:  </label>
        <select name='search' value={category} onChange={(e)=> {
            setcategory(e.target.value)
        }}>
            <option value="people">people </option>
            <option value="planets" >planets </option>
            <option value="starships" >starships </option>
        </select>
        <label htmlFor='id'> ID:  </label>
        <input name='id' value={id} onChange={(e)=>{
            setId(e.target.value)
        }}/>
        <button>Search</button>
    </form>
  )
}

export default From