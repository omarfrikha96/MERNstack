import React from 'react';

const Results = (props) => {

  return (
    <div className="results">
      { props.screen[props.currentscreen].content }
    </div>
  )
}

export default Results;