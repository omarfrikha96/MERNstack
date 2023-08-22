import React from 'react'

const Main = (props) => {
  return (
    <div style={{width: "65%",height: "500px" ,backgroundColor : "#e06666" , marginLeft: "20px" ,textAlign: "center"  }}>
        <div>
        {props.children}

        </div>
        </div>
  )
}

export default Main