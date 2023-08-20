import React, {useState} from 'react'

const PersonCard = (props) => {

  const [ages , setAges] = useState(props.age)
  const addAges = (e ) => {
    e.preventDefault();
    setAges(ages+1)
    console.log(ages)
  }
  return (
    <div>
      
        <h1>{props.firstName}, {props.lastName}</h1>
        <p>Age: {ages}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={addAges}>Birthday Button for {props.lastName} {props.firstName} </button>
    </div>
  )
}

export default PersonCard


