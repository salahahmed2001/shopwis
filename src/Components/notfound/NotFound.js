import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./notfound.css"

const NotFound = () => {
  return (
    <Fragment>
      <div className='not-found'>
      <h1>404</h1>  
      <h2 className=''>File not found</h2>
      <p>The site configured at this address does not contain the requested file.</p>
      <p>If this is your site, make sure that the filename case matches the URL as well as any file permissions.</p>
      <p>For root URLs (like http://example.com/) you must provide an index.html file.</p>
      <div className='not-found-btn'>
      <Link to='/'>Home</Link>
      </div>
      </div>
    </Fragment>
  )
}

export default NotFound