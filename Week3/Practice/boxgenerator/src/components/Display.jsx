import React from 'react';

const Display = (props) => {

  return (
    <div>
      {
        props.boxColor.map((color) => (
          <div style={{ display: "inline-block", height: "100px", width: "100px",  backgroundColor: color }}>
          </div>
        ))
      }
    </div>
  );
}

export default Display;
