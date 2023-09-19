import React, { Component } from 'react'

export class PersonCard  extends Component {
  render() {
    const  {firstName,lastName, age , hairColor} = this.props;

    return (
      <div>
        <h2><span>{firstName},</span>  <span>{lastName}</span></h2>
        <p>Age : {age}</p>
        <p>Hair Color : {hairColor}</p>
         </div>
    )
  }
}

export default PersonCard 