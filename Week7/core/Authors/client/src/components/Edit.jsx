import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams(); //this process is identical to the one we used with our Details.js component
   
  const [ObjErrors, setObjErrors] = useState({}); //one errors

  const [Name, setName] = useState("")


  const navigate = useNavigate();

  useEffect(() => {
      axios.get(`http://localhost:5000/api/authors/${id}`)
          .then(res => {
            setName(res.data.Name)
          })
          .catch(err => console.log(err))
  }, [id])

  const updateAuthor = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:5000/api/authors/${id}`, {Name})
          .then(res => {
              console.log(res);
              navigate("/"); // this will take us back to the Main
          })
          .catch(err => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const ObjE = {}
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                ObjE[key] = errorResponse[key].message  //display one error
            }
            setObjErrors(ObjE)

          })
  }
  
  return (
<div style={{display : "inline-block"}}>

<div style={{ textAlign : "left"}}>

   <Link to='/' style={{ textAlign : "right" }}>Home</Link>
   <h5 style={{color : "violet",  margin : '10px 0'}}>Update author name:</h5>
</div>

<form className="was-validated" onSubmit={updateAuthor} style={{border : "1px solid" , width : "500px", padding : "20px"}}>


     <div className="mb-3">
     {ObjErrors.Name ? <p style={{color : "red"}}>  {ObjErrors.Name} </p> :null}
       <label htmlFor="validationTextarea" className="form-label">Name:</label>
        <input 
         type="text" 
         className="form-control" 
         id="validationTextarea" 
         placeholder="Add the name of authors here" 
         onChange={(e) => setName(e.target.value)}
          value={Name} 
         ></input>
     </div>

    <button className="btn btn-primary" type="submit" >Update Name</button>

</form>

</div>

  )
}
export default Edit