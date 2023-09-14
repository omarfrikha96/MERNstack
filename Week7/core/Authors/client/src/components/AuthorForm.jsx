import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = () => {
  const [Name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/authors", { Name })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; 
        const ObjE = {}
        for (const key of Object.keys(errorResponse)) { 
            ObjE[key] = errorResponse[key].message
        }

        setErrors(ObjE)
      });
  };
  return (<div style={{display : "inline-block"}}>

     <div style={{ textAlign : "left"}}>

        <Link to='/' style={{ textAlign : "right" }}>Home</Link>
        <h5 style={{color : "violet",  margin : '10px 0'}}>Add a new author:</h5>
     </div>

   <form className="was-validated" onSubmit={SubmitHandler} style={{border : "1px solid" , width : "500px", padding : "20px"}}>
   

          <div className="mb-3">
         {errors.Name ? <p style={{color : "red"}}>  {errors.Name} </p> :null}
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

         <button className="btn btn-primary" type="submit" >Submit</button>
    
   </form>
  
   </div>
     
      
  
  
     )
};

export default AuthorForm;