import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



function NotFound() {

  return (
    <div>
      <Navbar/>
      <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
        <h4>This is not the webpage you are looking for</h4>
    </div>
      <Footer/>
    </div>
  )
}

export default NotFound
