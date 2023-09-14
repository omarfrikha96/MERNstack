import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Details = () => {

    const [author, setAuthor] = useState([]);
    const {id} = useParams()
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/authors/${id}`)
        .then((response) => {
          console.log(response.data);
          setAuthor(response.data);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err.response);
        });
    }, [id]);

    if(isLoading){
        return <h2>Loading .......</h2>
    }
  return (
    <div >
   
    <p>
         Name of author : {author.Name}
     </p>
     <Link to='/' style={{ textAlign : "right" }}>Home</Link>
 </div>
  )
} 

export default Details;