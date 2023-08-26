import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Api = () => {
    const { category , id } = useParams();
    const [starWars, setStarWars] = useState({})
    const [homeWorld, sethomeWorld] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(res => {
                setStarWars(res.data)
                axios.get(res.data.homeworld)
                .then(world => sethomeWorld(world.data.name))
                .catch(err=>console.log(err))
            })
            .catch(err => {
                console.log(err)
                navigate("*")
            })

    }, [category , id])

    if (category === "people") {
        // JSX for rendering people information
        return (
            <div>
                <h1>{starWars.name}</h1>
                <p>
                    <b>Height:</b> {starWars.height}
                </p>
                <p>
                   <b>Hair Color:</b> {starWars.hair_color}
                </p>
                <p>
                    <b>Eye Color:</b> {starWars.eye_color}
                </p>
                <p>
                    <b>Skin Color:</b> {starWars.skin_color}
                </p>
                <p>
                    <b>HomeWorld:</b> {homeWorld}
                </p>
            </div>
        );
    } else if (category === "planets"){
        // JSX for rendering planet information
        return (
            <div>
                <h1>{starWars.name}</h1>
                <p>
                    <b>Climate:</b> {starWars.climate}
                </p>
                <p>
                    <b>Terrain:</b> {starWars.terrain}
                </p>
                <p>
                    <b>Surface Water:</b> {starWars.surface_water}
                </p>
                <p>
                    <b>Population:</b> {starWars.population}
                </p>
            </div>
        );
    } else {
        // JSX for rendering planet information
        return (
            <div>
                <h1>{starWars.name}</h1>
                <p>
                    <b>Length:</b> {starWars.length}
                </p>
                <p>
                <b>Crew:</b> {starWars.crew}
                </p>
                <p>
                    <b>Passengers:</b> {starWars.passengers}
                </p>
                <p>
                    <b>Starship Class:</b> {starWars.starship_class}
                </p>
             </div>
        );
};}

export default Api;