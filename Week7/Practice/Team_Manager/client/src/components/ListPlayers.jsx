import axios from 'axios';
import React , {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import TopNav from './TopNav';



const ListPlayers = (props) => {

  const [playerData ,setPlayerData] =useState([])
const manage = true

useEffect(()=>{
axios.get('http://localhost:8000/api/player/')
.then(res => {
  console.log(res.data)
  setPlayerData(res.data)
})
.catch(err => console.log(err)) 
},[])


const handleDelete = (id) => {
  axios
    .delete(`http://localhost:8000/api/player/${id}`)
    .then((response) => {
      console.log("success deleting player");
      console.log(response);
      
      const filteredPlayers = playerData.filter((player) => {
        return player._id !== id;
      });
      setPlayerData(filteredPlayers);
    })
    .catch((err) => {
      console.log("error deleting player", err.response);
    });
};


  return (
    <div>
      <TopNav manage={manage}/>

      <div>
          <span  className="sub-nav-text" style={{fontWeight : 'bolder'}}> 
        <Link to="/players/list">List</Link>
        </span>
        <span  className="sub-nav-text"> | </span>
        <span  className="sub-nav-text"  >
          <Link to="/players/addplayer">Add Player</Link>
        </span>
      </div>

     

<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">Team Name</th>
      <th scope="col">Preferred Position</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {playerData.map((player,index)=>{
      return  (  <tr key={index}>
      <td>{player.name}</td>
      <td>{player.position}</td>
      <td><button className='btn btn-danger' onClick={()=> handleDelete(player._id)}>Delete</button></td>
    </tr>)
    })}
 
     
  </tbody>
</table>


    </div>

  )
}

export default ListPlayers