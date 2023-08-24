import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
 <div>
<ul>
        {
          pokemons.map((pokemon, i)=>{
            return (<li key={i}>{pokemon.name}</li>)
          })
        }
</ul>

 </div>
  );
}


export default App;
