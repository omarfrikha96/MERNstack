import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div id="wrapper">
        <h3>This page could not be found</h3>
        <Link to="/">Go to Home</Link>

</div >
  )
}

export default PageNotFound