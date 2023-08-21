import React, { useState } from 'react';

const NinjaForm = (props) => {

  const { ninjaBox, setNinjaBox } = props;

  const [ color, setColor] = useState("");
  const [ size, setSize] = useState(100);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setNinjaBox( [ ...ninjaBox, 
      { 
        color: color,
        size: size + "px",
      }
      ] );

    setColor("");
    setSize(100);
  }

  return (
      <form onSubmit={ submitHandler }>
        <div>
          <label>Color</label>
          <input type="text"  name="color" value={color} onChange={ (e) => setColor(e.target.value) }/>
        </div>
        <div>
          <label>Width and Height in Pixels</label>
          <input type="text" name="size" value={size} onChange={ (e) => setSize(e.target.value) } />
        </div>
        <input type="submit"></input>
      </form>
  )
}

export default NinjaForm;