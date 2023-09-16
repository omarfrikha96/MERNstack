import axios from "axios";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom"; 
import TopNav from "./TopNav";

const CreatePlayer = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const [ObjErrors, setObjErrors] = useState({});

  const [isdisabled, setIsDisabled] = useState(true) // For button

const manage = true;

  const navigate = useNavigate()


const submitHandler = (e) => {
e.preventDefault()
const list ={
  name ,
  position
}
axios.post('http://localhost:8000/api/player/', list)
.then( res =>{
  console.log(res.data)
  navigate('/players/list')
})
.catch(err => {
  // console.log(err)
  const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const ObjE = {}
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    ObjE[key] = errorResponse[key].message
                }
                setObjErrors(ObjE)
})
}



  return (
    <div>

      <TopNav manage={manage}/>

      <div>
        <span className="sub-nav-text">
          <Link to="/players/list">List</Link>
        </span>
        <span className="sub-nav-text"> | </span>
        <span className="sub-nav-text" style={{ fontWeight: "bolder" }}>
          <Link to="/players/addplayer">Add Player</Link>
        </span>
      </div>

      <form onSubmit={submitHandler} className="w-25 p-3 ">
        <div className="form-group w-100">
          <label htmlFor="name">Player Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) =>{
              setName(e.target.value)
              // if(e.target.value.trim().length < 2) {   // Checking the length of the input
              //   setIsDisabled(true)  // Disabling the button if length is < 1
              // } else {
              //   setIsDisabled(false)
              // }

              if(ObjErrors.name) {  
                setIsDisabled(true)  
              } else {
                setIsDisabled(false)
              }
            } }
          />
          {ObjErrors.name ? <p style={{color : "red"}}>  {ObjErrors.name} </p> :null}
        </div>
        <div className="form-group">
          <label htmlFor="position">Preffered Position</label>
          <input
            type="text"
            className="form-control"
            name="position"
            placeholder="Enter Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2" disabled={isdisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default CreatePlayer;
