import React, { useState } from 'react';

const Form = (props) => {
  const { boxColor, setBoxColor } = props;

  const [ color, setColor] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setBoxColor( [ ...boxColor, color ] );
    setColor("")
  }

  return (
    
      <form onSubmit={ submitHandler }>
        <div>
          <label htmlFor="color">Color: </label>
          <input type="text" name="color" onChange={ (e) => setColor(e.target.value) } value={color} />
        </div>
        <input type="submit"></input>
      </form>

  )
}

export default Form;