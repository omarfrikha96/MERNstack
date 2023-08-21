import React from 'react';

const NinjaDisplay = (props) => {

  return (
    <div>
      {
        props.ninjaBox.map((element ) => (
          <div style={{ 
              display: "inline-block",
              height: element.size, 
              width: element.size, 
              backgroundColor: element.color
              }}>
          </div>
        ))
      }
    </div>
  );
}

export default NinjaDisplay;