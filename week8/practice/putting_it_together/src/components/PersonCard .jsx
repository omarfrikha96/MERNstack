import React, { Component } from 'react'

export class PersonCard  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageUp: this.props.age,
    };
  }

  render() {
    const  {firstName,lastName, hairColor} = this.props;

   
    return (
      <div>
        <h2><span>{firstName},</span>  <span>{lastName}</span></h2>
        <p>Age : {this.state.ageUp}</p>
        <p>Hair Color : {hairColor}</p>
        <button style={{borderRadius : '5px'}} onClick={() => this.setState({ ageUp: this.state.ageUp + 1 })}>
         Birthday Button for  {lastName} {firstName}
        </button>
         </div>
    )
  }
}

export default PersonCard 