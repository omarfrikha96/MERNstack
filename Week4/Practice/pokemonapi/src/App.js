import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        return response.json()
      })
      .then(response => {
        setPokemons(response.results)
      })
      .catch(err => {
        console.log(err);
      })

  }, [])


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
